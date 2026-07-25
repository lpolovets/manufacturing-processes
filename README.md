# Manufacturing Processes Reference

A practical, near-exhaustive reference of modern manufacturing processes — from continuous casting to statistical process control — rendered as a searchable, filterable dashboard.

**Live dashboard:** https://humbaventures.com/reference/manufacturing-processes/ — rebuilds automatically on every commit to `main`.

## How it works

- Each process is one markdown file in [`processes/`](processes/), with YAML frontmatter for its filterable tags and markdown sections for its content.
- [`data/taxonomy.json`](data/taxonomy.json) defines the seven parts (layers), material families, volume bands, and tooling-cost bands.
- [`build/build.js`](build/build.js) (plain Node, no dependencies) parses the markdown and injects it into [`template/`](template/) to produce the dashboard.
- [`.github/workflows/pages.yml`](.github/workflows/pages.yml) rebuilds and deploys to GitHub Pages on every push to `main`.

## Editing a process

Just edit its file in `processes/` — on github.com, press `.` or use the pencil icon. Sections:

```markdown
---
number: 15                  # unique integer, controls ordering
name: "Sand casting"
part: 2                     # 1-7, see data/taxonomy.json
group: "Metal Casting"      # family heading shown in the dashboard
materials: [metal]          # keys from taxonomy "materials"
volumes: [proto, low, med]  # keys from taxonomy "volumes"; [] if not applicable
tooling: low                # key from taxonomy "tooling", or "none"
---

## Description

What the process is.

## Strengths and weaknesses

What it is good and bad at.

## Variants           <- optional

### Variant name

Variant description.

## Videos             <- optional, up to 3

- https://www.youtube.com/watch?v=VIDEO_ID — Short label

## Examples           <- optional

Typical parts.

## Economic profile   <- optional

Capex/tooling/volume economics.
```

`materials`, `volumes`, and `tooling` are **directional estimates** used for filtering — typical cases, not universal limits.

## Adding a process

1. Copy any existing file to `processes/NNN-your-process-name.md` with an unused `number`.
2. Fill in the frontmatter and sections. To place it in an existing family, reuse that family's `part` and `group` values exactly; a new `group` string creates a new family heading.
3. Commit. The build validates frontmatter (unknown material/volume/tooling keys and duplicate numbers fail the build with a pointer to the offending file) and the dashboard redeploys automatically.

To add a new material family, volume band, or tooling band, edit `data/taxonomy.json` first.

## Building locally

```bash
node build/build.js            # -> site/index.html (open in a browser) + site/data.json
node build/build.js --artifact # -> dist/artifact.html (fragment for claude.ai Artifact republish)
```

`site/data.json` is also deployed alongside the page, so the full dataset is fetchable as JSON from the Pages URL.
