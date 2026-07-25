#!/usr/bin/env node
// Builds the dashboard from processes/*.md + data/taxonomy.json.
//   node build/build.js            -> site/index.html   (complete page, for GitHub Pages)
//   node build/build.js --artifact -> dist/artifact.html (fragment, ASCII-escaped, for claude.ai Artifact republish)
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const ARTIFACT = process.argv.includes('--artifact');

const taxonomy = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'taxonomy.json'), 'utf8'));
const partIds = new Set(taxonomy.parts.map(p => p.id));
const matKeys = new Set(Object.keys(taxonomy.materials));
const volKeys = new Set(Object.keys(taxonomy.volumes));
const toolKeys = new Set(Object.keys(taxonomy.tooling));

// ---- parse one markdown file ----
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

function parseProcess(file, src) {
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
  if (typeof fm.number !== 'number') fail('frontmatter needs a numeric "number"');
  if (!fm.name) fail('frontmatter needs "name"');
  if (!partIds.has(fm.part)) fail('"part" must be one of: ' + [...partIds].join(', '));
  if (!fm.group) fail('frontmatter needs "group"');
  const mats = fm.materials || [];
  if (!mats.length) fail('frontmatter needs a non-empty "materials" list');
  for (const k of mats) if (!matKeys.has(k)) fail('unknown material "' + k + '" (see data/taxonomy.json)');
  const vols = fm.volumes || [];
  for (const k of vols) if (!volKeys.has(k)) fail('unknown volume "' + k + '" (see data/taxonomy.json)');
  let tool = fm.tooling;
  if (tool === 'none' || tool === undefined || tool === '') tool = null;
  if (tool !== null && !toolKeys.has(tool)) fail('unknown tooling "' + tool + '" (see data/taxonomy.json)');
  if (!sections['description']) fail('missing "## Description" section');
  if (!sections['strengths and weaknesses']) fail('missing "## Strengths and weaknesses" section');

  const entry = {
    n: fm.number, p: fm.part, g: fm.group, name: fm.name,
    d: sections['description'],
    sw: sections['strengths and weaknesses'],
    mat: mats, vol: vols, tool: tool,
  };
  if (sections['examples']) entry.ex = sections['examples'];
  if (sections['economic profile']) entry.ec = sections['economic profile'];
  if (sections['variants']) {
    entry.v = sections['variants'].split(/^### /m).filter(s => s.trim()).map(chunk => {
      const nl = chunk.indexOf('\n');
      return { t: chunk.slice(0, nl).trim(), d: chunk.slice(nl + 1).trim() };
    });
  }
  return entry;
}

// ---- load all processes ----
const dir = path.join(ROOT, 'processes');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && !f.startsWith('_'));
const processes = files.map(f => parseProcess('processes/' + f, fs.readFileSync(path.join(dir, f), 'utf8')));
processes.sort((a, b) => a.n - b.n);

const seen = new Set();
for (const x of processes) {
  if (seen.has(x.n)) throw new Error('duplicate process number: ' + x.n);
  seen.add(x.n);
}

// ---- compose page ----
const groups = new Set(processes.map(x => x.p + '|' + x.g));
const repoUrl = process.env.REPO_URL || 'https://github.com/' + (process.env.GITHUB_REPOSITORY || '');

let page = fs.readFileSync(path.join(ROOT, 'template', 'page.html'), 'utf8')
  .replace(/{{N_PROCESSES}}/g, String(processes.length))
  .replace(/{{N_PARTS}}/g, String(taxonomy.parts.length))
  .replace(/{{N_GROUPS}}/g, String(groups.size))
  .replace(/{{YEAR}}/g, String(new Date().getFullYear()))
  .replace(/{{REPO_URL}}/g, repoUrl);

const dataJs = [
  'const PARTS = ' + JSON.stringify(taxonomy.parts) + ';',
  'const MATS = ' + JSON.stringify(taxonomy.materials) + ';',
  'const VOLS = ' + JSON.stringify(taxonomy.volumes) + ';',
  'const VOL_ORDER = ' + JSON.stringify(taxonomy.volumeOrder) + ';',
  'const TOOLS = ' + JSON.stringify(taxonomy.tooling) + ';',
  'const P = ' + JSON.stringify(processes) + ';',
].join('\n');
const appJs = fs.readFileSync(path.join(ROOT, 'template', 'app.js'), 'utf8');

const title = 'Manufacturing Processes Reference';
let html;
if (ARTIFACT) {
  // Fragment for the Artifact tool (it supplies doctype/head/body). ASCII-escape
  // everything because the artifact host serves no charset declaration.
  let frag = '<title>' + title + '</title>\n' + page + '<script>\n' + dataJs + '\n' + appJs + '</script>\n';
  const re = new RegExp('[' + String.fromCharCode(128) + '-' + String.fromCharCode(65535) + ']', 'g');
  const idx = frag.indexOf('<script>');
  const esc = (s, js) => s.replace(re, c => js
    ? '\\u' + c.codePointAt(0).toString(16).padStart(4, '0')
    : '&#x' + c.codePointAt(0).toString(16) + ';');
  frag = esc(frag.slice(0, idx), false) + esc(frag.slice(idx), true);
  fs.mkdirSync(path.join(ROOT, 'dist'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'dist', 'artifact.html'), frag);
  console.log('dist/artifact.html:', processes.length, 'processes,', frag.length, 'bytes');
} else {
  // The repo is named "reference", so Pages mounts at /reference/; the dashboard
  // lives in a subdirectory so its URL is /reference/manufacturing-processes/.
  const SUBDIR = 'manufacturing-processes';
  html = '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '<title>' + title + '</title>\n</head>\n<body>\n' + page +
    '<script>\n' + dataJs + '\n' + appJs + '</script>\n</body>\n</html>\n';
  const out = path.join(ROOT, 'site', SUBDIR);
  fs.mkdirSync(out, { recursive: true });
  fs.writeFileSync(path.join(out, 'index.html'), html);
  fs.writeFileSync(path.join(out, 'data.json'), JSON.stringify({ taxonomy, processes }, null, 1));
  fs.writeFileSync(path.join(ROOT, 'site', 'index.html'),
    '<!doctype html>\n<meta charset="utf-8">\n<meta http-equiv="refresh" content="0; url=' + SUBDIR + '/">\n' +
    '<title>Reference</title>\n<a href="' + SUBDIR + '/">' + title + '</a>\n');
  console.log('site/' + SUBDIR + '/index.html:', processes.length, 'processes,', html.length, 'bytes (+ data.json, root redirect)');
}
