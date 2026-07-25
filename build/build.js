#!/usr/bin/env node
// Builds every reference sheet under sheets/*/ (driven by each sheet's sheet.json)
// plus a landing page indexing them.
//   node build/build.js                     -> site/<slug>/ for every sheet + site/index.html
//   node build/build.js --artifact <slug>   -> dist/<slug>.artifact.html (fragment, ASCII-escaped,
//                                              for claude.ai Artifact republish)
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SHARED = path.join(ROOT, 'shared');
const ai = process.argv.indexOf('--artifact');
const ARTIFACT_SLUG = ai !== -1 ? process.argv[ai + 1] : null;
if (ai !== -1 && !ARTIFACT_SLUG) {
  console.error('usage: node build/build.js --artifact <sheet-slug>');
  process.exit(1);
}

// ---- markdown parsing ----
function parseFrontmatter(block, file) {
  const out = {};
  for (const line of block.split('\n')) {
    if (!line.trim()) continue;
    const m = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (!m) throw new Error(file + ': bad frontmatter line: ' + line);
    let [, key, val] = m;
    val = val.trim();
    if (val.startsWith('[')) {
      out[key] = val.replace(/^\[|\]$/g, '').split(',').map(s => s.trim()).filter(Boolean);
    } else if (/^"(.*)"$/.test(val)) {
      out[key] = val.slice(1, -1).replace(/\\"/g, '"');
    } else if (/^\d+$/.test(val)) {
      out[key] = parseInt(val, 10);
    } else {
      out[key] = val;
    }
  }
  return out;
}

function parseEntry(sheet, file, src) {
  const m = src.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) throw new Error(file + ': missing frontmatter (--- ... ---)');
  const fm = parseFrontmatter(m[1], file);
  const body = m[2];

  const sections = {};
  const chunks = body.split(/^## /m).slice(1);
  for (const chunk of chunks) {
    const nl = chunk.indexOf('\n');
    const title = chunk.slice(0, nl).trim().toLowerCase();
    sections[title] = chunk.slice(nl + 1).trim();
  }

  // validation with contributor-friendly errors
  const fail = msg => { throw new Error(file + ': ' + msg); };
  const partIds = new Set(sheet.parts.map(p => p.id));
  if (typeof fm.number !== 'number') fail('frontmatter needs a numeric "number"');
  if (!fm.name) fail('frontmatter needs "name"');
  if (!partIds.has(fm.part)) fail('"part" must be one of: ' + [...partIds].join(', '));
  if (!fm.group) fail('frontmatter needs "group"');

  const f = {};
  for (const facet of sheet.facets) {
    const keys = new Set(Object.keys(facet.options));
    let val = fm[facet.key];
    if (facet.type === 'single') {
      if (val === undefined || val === '' || (val === 'none' && !keys.has('none'))) val = null;
      if (val !== null && !keys.has(val)) fail('unknown ' + facet.key + ' "' + val + '" (see sheet.json)');
      if (facet.required && val === null) fail('frontmatter needs "' + facet.key + '"');
    } else {
      val = val || [];
      if (facet.required && !val.length) fail('frontmatter needs a non-empty "' + facet.key + '" list');
      for (const k of val) if (!keys.has(k)) fail('unknown ' + facet.key + ' "' + k + '" (see sheet.json)');
    }
    f[facet.id] = val;
  }

  if (!sections['description']) fail('missing "## Description" section');
  if (!sections['strengths and weaknesses']) fail('missing "## Strengths and weaknesses" section');

  const entry = {
    n: fm.number, p: fm.part, g: fm.group, name: fm.name,
    d: sections['description'],
    sw: sections['strengths and weaknesses'],
    f: f,
  };
  if (sections['videos']) {
    entry.vid = sections['videos'].split('\n').map(s => s.trim()).filter(s => s.startsWith('-')).map(line => {
      const lm = line.match(/^-\s*(\S+)(?:\s+[—–-]\s+(.*))?$/);
      if (!lm) fail('bad Videos line: ' + line);
      const idm = lm[1].match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
      if (!idm) fail('Videos line is not a YouTube watch URL: ' + line);
      const v = { id: idm[1] };
      if (lm[2]) v.t = lm[2].trim();
      return v;
    });
    if (entry.vid.length > 3) fail('at most 3 videos per entry');
    if (!entry.vid.length) delete entry.vid;
  }
  if (sections['variants']) {
    entry.v = sections['variants'].split(/^### /m).filter(s => s.trim()).map(chunk => {
      const nl = chunk.indexOf('\n');
      return { t: chunk.slice(0, nl).trim(), d: chunk.slice(nl + 1).trim() };
    });
  }
  const extra = [];
  for (const [key, label] of sheet.extraSections || []) {
    if (sections[key]) extra.push([label, sections[key]]);
  }
  if (extra.length) entry.extra = extra;
  return entry;
}

function loadSheet(dir) {
  const sheet = JSON.parse(fs.readFileSync(path.join(dir, 'sheet.json'), 'utf8'));
  const edir = path.join(dir, 'entries');
  const files = fs.readdirSync(edir).filter(f => f.endsWith('.md') && !f.startsWith('_'));
  const rel = path.relative(ROOT, edir);
  const entries = files.map(f => parseEntry(sheet, rel + '/' + f, fs.readFileSync(path.join(edir, f), 'utf8')));
  // optional per-entry illustration: sheets/<slug>/images/<zero-padded number>.<ext>
  const idir = path.join(dir, 'images');
  if (fs.existsSync(idir)) {
    for (const e of entries) {
      for (const ext of ['jpg', 'png', 'webp']) {
        const img = String(e.n).padStart(3, '0') + '.' + ext;
        if (fs.existsSync(path.join(idir, img))) { e.img = 'images/' + img; break; }
      }
    }
  }
  entries.sort((a, b) => a.n - b.n);
  const seen = new Set();
  for (const x of entries) {
    if (seen.has(x.n)) throw new Error(sheet.slug + ': duplicate entry number: ' + x.n);
    seen.add(x.n);
  }
  sheet.guide = fs.readFileSync(path.join(dir, 'guide.html'), 'utf8');
  return { sheet, entries };
}

// ---- page composition ----
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const THEME = fs.readFileSync(path.join(SHARED, 'theme.css'), 'utf8');
const LOGO = fs.readFileSync(path.join(SHARED, 'logo.html'), 'utf8');
const APP = fs.readFileSync(path.join(SHARED, 'app.js'), 'utf8');
const PAGE = fs.readFileSync(path.join(SHARED, 'page.html'), 'utf8');
const YEAR = String(new Date().getFullYear());
const PREPAINT = '<script>(function(){var t;try{t=localStorage.getItem("theme")}catch(e){}' +
  'document.documentElement.setAttribute("data-theme",t||"dark");})();</' + 'script>\n';

function composeBody(sheetData, artifact) {
  const { sheet, entries } = sheetData;
  const groups = new Set(entries.map(x => x.p + '|' + x.g));
  const counts = { entries: entries.length, parts: sheet.parts.length, groups: groups.size };

  const stats = sheet.stats.map(s =>
    '      <div><b>' + counts[s.count] + '</b>' + s.label + '</div>').join('\n');
  const facetRows = sheet.facets.map(f => {
    const tip = f.tip
      ? '<span class="tipwrap"><button type="button" class="tip" aria-label="About these tags">i</button>' +
        '<span class="tipbody" role="tooltip">' + esc(f.tip) + '</span></span>'
      : '';
    return '        <div class="facet" style="--fcol:var(' + f.color + ')">' +
      '<span class="flabel">' + esc(f.label) + tip + '</span>' +
      '<span class="fchips" id="facet-' + f.id + '"></span></div>';
  }).join('\n');

  const page = PAGE
    .replace('{{STYLE}}', THEME)
    .replace('{{LOGO}}', LOGO.replace(/\n$/, ''))
    .replace('{{TITLE}}', esc(sheet.title))
    .replace('{{LEDE}}', esc(sheet.lede).replace('{{N_ENTRIES}}', String(counts.entries)))
    .replace('{{STATS}}', stats)
    .replace('{{EXPLORER_TAB}}', esc(sheet.explorerTab))
    .replace('{{GUIDE_TAB}}', esc(sheet.guideTab))
    .replace('{{SEARCH_PLACEHOLDER}}', esc(sheet.searchPlaceholder))
    .replace('{{FACETS}}', facetRows)
    .replace('{{UNIT_PLURAL}}', esc(sheet.unit[1]))
    .replace('{{GUIDE}}', sheet.guide)
    .replace('{{YEAR}}', YEAR);

  const clientSheet = {
    unit: sheet.unit, groupLabel: sheet.groupLabel, parts: sheet.parts,
    facets: sheet.facets.map(f => {
      const cf = { id: f.id, label: f.label, type: f.type, color: f.color, order: f.order, options: f.options };
      if (f.tagPrefix) cf.tagPrefix = f.tagPrefix;
      if (f.chipLabels) cf.chipLabels = f.chipLabels;
      if (f.tagRow) cf.tagRow = f.tagRow;
      return cf;
    }),
  };
  const dataJs = [
    'const EMBED_OK = ' + String(!artifact) + ';',
    'const SHEET = ' + JSON.stringify(clientSheet) + ';',
    'const P = ' + JSON.stringify(entries) + ';',
  ].join('\n');

  return page + '<script>\n' + dataJs + '\n' + APP + '</script>\n';
}

// ---- load all sheets ----
const sheetsDir = path.join(ROOT, 'sheets');
const slugs = fs.readdirSync(sheetsDir).filter(d => fs.existsSync(path.join(sheetsDir, d, 'sheet.json'))).sort();
const all = slugs.map(slug => loadSheet(path.join(sheetsDir, slug)));

if (ARTIFACT_SLUG) {
  // Fragment for the Artifact tool (it supplies doctype/head/body). ASCII-escape
  // everything because the artifact host serves no charset declaration.
  const sheetData = all.find(s => s.sheet.slug === ARTIFACT_SLUG);
  if (!sheetData) throw new Error('no sheet named "' + ARTIFACT_SLUG + '" (have: ' + slugs.join(', ') + ')');
  let frag = '<title>' + sheetData.sheet.docTitle + '</title>\n' + composeBody(sheetData, true);
  const re = new RegExp('[' + String.fromCharCode(128) + '-' + String.fromCharCode(65535) + ']', 'g');
  const idx = frag.indexOf('<script>');
  const escChar = (s, js) => s.replace(re, c => js
    ? '\\u' + c.codePointAt(0).toString(16).padStart(4, '0')
    : '&#x' + c.codePointAt(0).toString(16) + ';');
  frag = escChar(frag.slice(0, idx), false) + escChar(frag.slice(idx), true);
  fs.mkdirSync(path.join(ROOT, 'dist'), { recursive: true });
  const out = path.join(ROOT, 'dist', ARTIFACT_SLUG + '.artifact.html');
  fs.writeFileSync(out, frag);
  console.log('dist/' + ARTIFACT_SLUG + '.artifact.html:', sheetData.entries.length, 'entries,', frag.length, 'bytes');
} else {
  // The repo is named "reference", so Pages mounts at /reference/; each sheet
  // builds into its own subdirectory and the root page indexes them all.
  for (const sheetData of all) {
    const { sheet, entries } = sheetData;
    const html = '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n' + PREPAINT +
      '<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
      '<title>' + sheet.docTitle + '</title>\n</head>\n<body>\n' + composeBody(sheetData, false) +
      '</body>\n</html>\n';
    const out = path.join(ROOT, 'site', sheet.slug);
    fs.mkdirSync(out, { recursive: true });
    fs.writeFileSync(path.join(out, 'index.html'), html);
    const idir = path.join(sheetsDir, sheet.slug, 'images');
    if (fs.existsSync(idir)) fs.cpSync(idir, path.join(out, 'images'), { recursive: true });
    fs.writeFileSync(path.join(out, 'data.json'), JSON.stringify({ sheet: { ...sheet, guide: undefined }, entries }, null, 1));
    console.log('site/' + sheet.slug + '/index.html:', entries.length, 'entries,', html.length, 'bytes (+ data.json)');
  }

  const cards = all.map(({ sheet, entries }) =>
    '    <a class="sheetcard" href="' + sheet.slug + '/">' +
    '<span class="st" style="display:block">' + esc(sheet.shortTitle || sheet.docTitle) + '</span>' +
    '<span class="sd" style="display:block">' + esc(sheet.blurb || '') + '</span>' +
    '<span class="sc" style="display:block">' + entries.length + ' ' + esc(sheet.unit[1]) + '</span></a>').join('\n');
  const landing = '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n' + PREPAINT +
    '<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '<title>Reference Sheets</title>\n<style>\n' + THEME + '</style>\n</head>\n<body>\n' +
    '<div class="wrap">\n<header class="site">\n<div class="hdr-top">\n' + LOGO + '</div>\n' +
    '<h1>Reference Sheets</h1>\n' +
    '<p class="lede">Practical, searchable references for deep-tech diligence and engineering decisions.</p>\n' +
    '</header>\n<div class="sheets">\n' + cards + '\n</div>\n' +
    '<footer class="site">&copy; ' + YEAR + ' HUMBA VENTURES</footer>\n</div>\n</body>\n</html>\n';
  fs.writeFileSync(path.join(ROOT, 'site', 'index.html'), landing);
  console.log('site/index.html: landing page,', slugs.length, 'sheets');
}
