"use strict";
// Landing-page global search: lazily loads every sheet's data.json on first
// focus and searches names, groups, parts, and card text across all sheets.
const $ = id => document.getElementById(id);
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

let IDX = null, loading = null;
function loadIndex() {
  if (loading) return loading;
  loading = Promise.all(LSHEETS.map(s =>
    fetch(s.slug + "/data.json").then(r => r.json()).then(d =>
      d.entries.map(e => {
        const part = d.sheet.parts[e.p - 1].name;
        return {
          slug: s.slug, sheet: s.title, name: e.name, group: e.g, part: part,
          nameL: e.name.toLowerCase(),
          ctxL: (e.g + " " + part).toLowerCase(),
          hay: (e.d + " " + e.sw).toLowerCase(),
        };
      })
    ).catch(() => [])
  )).then(lists => { IDX = lists.flat(); });
  return loading;
}

function run() {
  const q = $("gq").value.trim().toLowerCase();
  const hits = $("ghits"), count = $("gcount");
  if (q.length < 2) { hits.hidden = true; hits.innerHTML = ""; count.textContent = ""; return; }
  if (!IDX) { loadIndex().then(run); return; }
  const toks = q.split(/\s+/);
  const scored = [];
  for (const e of IDX) {
    let score = 0, ok = true;
    for (const t of toks) {
      if (e.nameL.includes(t)) score += 3;
      else if (e.ctxL.includes(t)) score += 2;
      else if (e.hay.includes(t)) score += 1;
      else { ok = false; break; }
    }
    if (ok) scored.push([score, e]);
  }
  scored.sort((a, b) => b[0] - a[0]);
  const top = scored.slice(0, 30);
  count.textContent = scored.length
    ? scored.length + (scored.length === 1 ? " match" : " matches") + (scored.length > 30 ? ", top 30 shown" : "")
    : "no matches";
  hits.innerHTML = top.map(([, e]) =>
    '<a class="ghit" href="' + e.slug + '/#' + slug(e.name) + '">' +
    '<span class="gsheet">' + esc(e.sheet) + '</span>' +
    '<span class="gname">' + esc(e.name) + '</span>' +
    '<span class="gctx">' + esc(e.part) + ' &middot; ' + esc(e.group) + '</span></a>').join("");
  hits.hidden = top.length === 0;
}

let deb;
$("gq").addEventListener("input", () => { clearTimeout(deb); deb = setTimeout(run, 120); });
$("gq").addEventListener("focus", () => loadIndex(), { once: true });
