# Manufacturing Processes Reference

Markdown-driven reference dashboard: 212 manufacturing processes rendered as a searchable, filterable static site.

- **Live site**: https://humbaventures.com/reference/manufacturing-processes/ — GitHub Pages, redeploys automatically on every push to `main` (repo is `lpolovets/reference`; Pages mounts at `/reference/`, the dashboard builds into a `manufacturing-processes/` subdirectory).
- **claude.ai artifact**: a second copy at https://claude.ai/code/artifact/af9b8583-110f-42ce-b2dc-29326b27b24d. It never updates automatically — rebuild with `--artifact` and republish via the Artifact tool (pass this URL as `url` from a session that didn't originally publish it).

## Workflow rule (important)

**Review-then-push.** Make changes locally, demonstrate them (screenshot or local preview), and only commit/push/republish after Leo explicitly approves. A request to change something is not approval to publish it. One approval covers one push.

## Layout

- `processes/NNN-slug.md` — one file per process. Frontmatter: `number`, `name`, `part` (1–7), `group`, `materials`, `volumes`, `tooling` (keys validated against `data/taxonomy.json`). Sections: `## Description`, `## Strengths and weaknesses`, then optional `## Variants` (with `###` entries), `## Videos`, `## Examples`, `## Economic profile`.
- `data/taxonomy.json` — parts, material families, volume bands, tooling bands.
- `template/page.html` + `template/app.js` — the dashboard UI. `build/build.js` injects parsed data into it.
- `.github/workflows/pages.yml` — build + deploy on push.

## Build

```bash
node build/build.js            # -> site/manufacturing-processes/ (full page + data.json, root redirect)
node build/build.js --artifact # -> dist/artifact.html (fragment for the claude.ai artifact)
```

No dependencies (plain Node). The build validates frontmatter and video lines and fails naming the offending file. Verify UI changes by serving `site/` locally and loading `/manufacturing-processes/` (add a throwaway `?v=` query when re-testing — the preview browser caches hard).

## Conventions and gotchas

- **Videos**: max 3 per process, format `- <YouTube watch URL> — Title (Channel, N minutes, band+ views)`. Policy: embeddable, playable, not live, ~1.5–20 min (≥1 min for popular animations), prefer popular/maker-community explainers; leave the section out if nothing good exists (only #22 semi-solid is currently blank). View bands: 1k/5k/10k/50k/100k/500k/1m/5m.
- **Fetching YouTube metadata**: watch pages captcha-block curl. Use the innertube player API (`POST https://www.youtube.com/youtubei/v1/player` with a WEB client context) plus the oEmbed endpoint for the embed/existence check.
- **Artifact flavor must stay pure ASCII** (the artifact host serves no charset header); the build escapes this automatically. The artifact also blocks all external requests — video embeds degrade to links there (`EMBED_OK` flag).
- **Theme**: site defaults to dark via a pre-paint inline script + localStorage; the Light/Dark chip is website-only (the artifact viewer has its own theme control).
- **CSS trap**: `nav.tabs button` styles bleed into any button added to the tab bar — exclude additions via `:not()`.
- **Anchors**: each process card's `id` is its name slugified (same slug as its filename); `#slug` deep links open and scroll to the card. Renaming a process changes its slug and breaks old links.
- Two facts the header/footer compute at build time: process/family counts and the copyright year.
