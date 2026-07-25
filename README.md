# Reference Sheets

Practical, near-exhaustive reference sheets — manufacturing processes, battery chemistries, and more to come — rendered as searchable, filterable dashboards from plain markdown.

**Live dashboards:** https://humbaventures.com/reference/ — rebuilds automatically on every commit to `main`.

- [Manufacturing Processes](https://humbaventures.com/reference/manufacturing-processes/)
- [Battery Chemistries](https://humbaventures.com/reference/battery-chemistries/)

## How it works

- Each sheet lives in [`sheets/<slug>/`](sheets/): a `sheet.json` (title, classes/parts, facet definitions), a `guide.html` (the sheet's guide tab), and one markdown file per entry in `entries/`.
- [`shared/`](shared/) holds everything common to all sheets: the stylesheet ([`theme.css`](shared/theme.css)), the page skeleton ([`page.html`](shared/page.html)), the explorer engine ([`app.js`](shared/app.js)), and the logo. Change a style once and every sheet gets it.
- [`build/build.js`](build/build.js) (plain Node, no dependencies) builds every sheet into `site/<slug>/` plus a landing page at `site/index.html`.
- [`.github/workflows/pages.yml`](.github/workflows/pages.yml) rebuilds and deploys to GitHub Pages on every push to `main`.

## Editing an entry

Just edit its file in `sheets/<slug>/entries/` — on github.com, press `.` or use the pencil icon:

```markdown
---
number: 15                  # unique integer within the sheet, controls ordering
name: "Sand casting"
part: 2                     # 1-7, see the sheet's sheet.json "parts"
group: "Metal Casting"      # family heading shown in the dashboard
materials: [metal]          # facet keys — each sheet defines its own facets in sheet.json
volumes: [proto, low, med]  #   (battery-chemistries uses applications/energy/cycles/maturity)
tooling: low                #   single-valued facets take one key, or "none"
---

## Description

What it is.

## Strengths and weaknesses

What it is good and bad at.

## Variants           <- optional

### Variant name

Variant description.

## Videos             <- optional, up to 3

- https://www.youtube.com/watch?v=VIDEO_ID — Short label

## Examples           <- optional

Typical parts / products.

## Economic profile   <- optional

Cost structure, supply chain, business dynamics.
```

Facet tags are **directional estimates** used for filtering — typical cases, not universal limits.

## Adding an entry

1. Copy any existing file in that sheet's `entries/` to `NNN-your-entry-name.md` with an unused `number`.
2. Fill in the frontmatter and sections. To place it in an existing family, reuse that family's `part` and `group` values exactly; a new `group` string creates a new family heading.
3. Commit. The build validates frontmatter (unknown facet keys and duplicate numbers fail the build with a pointer to the offending file) and the dashboard redeploys automatically.

To add a facet option or change labels, edit the sheet's `sheet.json`.

## Adding a whole new sheet

Create `sheets/<new-slug>/` with a `sheet.json` (copy one and edit — it defines the title, classes, and facets), a `guide.html`, and an `entries/` directory. The build auto-discovers it, and it appears on the landing page and at `/reference/<new-slug>/`.

## Building locally

```bash
node build/build.js                              # -> site/<slug>/ for every sheet + landing page
node build/build.js --artifact <slug>            # -> dist/<slug>.artifact.html (fragment for claude.ai Artifact republish)
```

Each `site/<slug>/data.json` is deployed alongside its page, so every sheet's full dataset is fetchable as JSON from the Pages URL.
