# Reference Sheets

Markdown-driven reference dashboards (manufacturing processes, battery chemistries, more to come) rendered as searchable, filterable static sites from a shared engine.

- **Live site**: https://humbaventures.com/reference/ — GitHub Pages, redeploys automatically on every push to `main` (repo is `lpolovets/reference`; Pages mounts at `/reference/`). Each sheet builds into its own subdirectory (`/reference/manufacturing-processes/`, `/reference/battery-chemistries/`); the root is a landing page indexing all sheets.
- **claude.ai artifact**: a copy of the manufacturing sheet at https://claude.ai/code/artifact/af9b8583-110f-42ce-b2dc-29326b27b24d. It never updates automatically — rebuild with `--artifact manufacturing-processes` and republish `dist/manufacturing-processes.artifact.html` via the Artifact tool (pass this URL as `url` from a session that didn't originally publish it).

## Workflow rule (important)

**Review-then-push.** Make changes locally, demonstrate them (screenshot or local preview), and only commit/push/republish after Leo explicitly approves. A request to change something is not approval to publish it. One approval covers one push.

## Layout

- `sheets/<slug>/` — one directory per reference sheet:
  - `sheet.json` — all sheet config: titles, lede, unit words, group label, the seven parts/classes, and **facet definitions** (`id`, frontmatter `key`, `label`, `type` multi|range|single, `color` var, `options`, `order`, optional `chipLabels`/`tagPrefix`/`tip`/`required`/`tagRow`), plus `extraSections` mapping optional markdown sections to card labels.
  - `entries/NNN-slug.md` — one file per entry. Frontmatter: `number`, `name`, `part`, `group`, plus one key per facet (keys validated against sheet.json). Sections: `## Description`, `## Strengths and weaknesses`, then optional `## Variants` (with `###` entries), `## Videos`, and the sheet's extra sections (`## Examples`, `## Economic profile`).
  - `guide.html` — the sheet's guide-tab content (raw HTML fragment using shared classes: `.tblwrap`, `.bands`, `.callout`, `.qlist`).
- `shared/` — everything common: `theme.css` (all styling, inlined into every page at build), `page.html` (skeleton with `{{...}}` placeholders), `app.js` (the generic explorer engine, driven by an injected `SHEET` config), `logo.html`.
- `build/build.js` — plain-Node build; auto-discovers `sheets/*/sheet.json`.
- `.github/workflows/pages.yml` — build + deploy on push.

## Build

```bash
node build/build.js                    # -> site/<slug>/ per sheet (page + data.json) + site/index.html landing
node build/build.js --artifact <slug>  # -> dist/<slug>.artifact.html (fragment for the claude.ai artifact)
```

No dependencies. The build validates frontmatter and video lines and fails naming the offending file. Verify UI changes by serving `site/` locally (there's a `.claude/launch.json` "site" config on port 8741) and loading `/<slug>/` (add a throwaway `?v=` query when re-testing — the preview browser caches hard).

## Conventions and gotchas

- **Adding a sheet**: create `sheets/<slug>/{sheet.json,guide.html,entries/}`; the build and landing page pick it up automatically. Reuse `--p1..--p7` for part colors and `--fa..--fe` for facet colors (blue/gold/red/green/purple — all defined once in `shared/theme.css` for both themes; add a new var there if a sheet needs a sixth facet).
- **Facet types**: `multi` = array field, one tag per value; `range` = ordered array collapsed to a "Prefix: First–Last" tag (labels must be single words or the dash collapse reads badly); `single` = scalar, `none`/omitted allowed unless `required` (no tag rendered when absent, and entries without it match only when that facet filter is empty).
- **`tagRow: 2`** on a facet puts its card tags on their own second line under the others, right-aligned to match (battery-chemistries uses it for applications). Facets without it share the first row with the expand caret.
- **Shared style**: all styling lives in `shared/theme.css` and is inlined into every page at build — edit it once and every sheet (and the landing page) changes together. Keep the label column (`.facet .flabel`, 108px) wide enough for the longest facet label across all sheets; long labels wrap badly otherwise.
- **Videos**: max 3 per entry, format `- <YouTube watch URL> — Title (Channel, N minutes, band+ views)`. Policy: embeddable, playable, not live, ~1.5–20 min (≥1 min for popular animations), prefer popular/maker-community explainers; leave the section out if nothing good exists (manufacturing #22 semi-solid is currently blank; battery-chemistries has none yet). View bands: 1k/5k/10k/50k/100k/500k/1m/5m.
- **Fetching YouTube metadata**: watch pages captcha-block curl. Use the innertube player API (`POST https://www.youtube.com/youtubei/v1/player` with a WEB client context) plus the oEmbed endpoint for the embed/existence check.
- **Artifact flavor must stay pure ASCII** (the artifact host serves no charset header); the build escapes this automatically. The artifact also blocks all external requests — video embeds degrade to links there (`EMBED_OK` flag).
- **Theme**: site defaults to dark via a pre-paint inline script + localStorage; the Light/Dark chip is website-only (the artifact viewer has its own theme control).
- **CSS trap**: `nav.tabs button` styles bleed into any button added to the tab bar — exclude additions via `:not()`.
- **Anchors**: each card's `id` is its name slugified (same slug as its filename); `#slug` deep links open and scroll to the card. Renaming an entry changes its slug and breaks old links.
- Header stats (entry/part/group counts) and the copyright year are computed at build time.
