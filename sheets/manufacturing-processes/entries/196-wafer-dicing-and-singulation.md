---
number: 196
name: "Wafer dicing and singulation"
part: 5
group: "Semiconductor & Microscale"
materials: [semi]
volumes: [high, cont]
tooling: low
---

## Description

Finished wafers are separated into individual dies by saw, laser, plasma, or stealth dicing.

## Strengths and weaknesses

Mechanical sawing is mature and inexpensive; laser and plasma methods support thinner wafers and narrower streets. Chipping, kerf loss, debris, and thermal damage can reduce yield.

## When to use

Default to blade sawing: for standard-thickness silicon with streets of 50 um or more it is the cheapest, best-understood option. Switch to stealth (laser-internal) dicing for thin wafers below roughly 100 um, memory and stacked-die products where edge chipping kills yield, and dry processes where cooling water would damage MEMS; use ablation lasers for hard or brittle materials like SiC and glass where blades wear fast. Plasma dicing earns its cost when die are tiny and numerous — narrow streets and simultaneous singulation of the whole wafer reclaim several percent of area and boost die strength. Avoid blade sawing on cantilevered or released MEMS structures and on wafers where microcracks would propagate in service; choose the singulation method before street width is frozen in layout, not after.

## Examples

Logic chips, sensors, MEMS, power devices.

## Videos

- https://www.youtube.com/watch?v=Jh4uJZR_OYs — [Eng Sub] Wafer Sawing Process: Blade saw, Laser saw, Plasma saw (Semicon Talk, 4 minutes, 10k+ views)
- https://www.youtube.com/watch?v=GzHk1PpFAUg — microDICE - Wafer dicing system for SiC (3D-Micromac AG, 4 minutes, 50k+ views)
- https://www.youtube.com/watch?v=luGmSikiJvY — Wafer Sawing Overview Animation (Semitracks Inc., 1 minute, 10k+ views)

## Further reading

[Dicing Application Library (DISCO)](https://www.disco.co.jp/eg/solution/library/index.html)
