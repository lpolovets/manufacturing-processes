---
number: 184
name: "Photolithography"
part: 5
group: "Semiconductor & Microscale"
materials: [semi]
volumes: [high, cont]
tooling: vhigh
---

## Description

Light transfers a geometric pattern through a mask onto photosensitive resist.

## Strengths and weaknesses

Enables extremely small, repeatable features and parallel fabrication. Equipment, masks, cleanrooms, process control, and defect prevention are all very expensive.

## When to use

Photolithography is the only economical way to pattern micron-and-below features across a whole wafer at once, so use it whenever device counts reach the thousands and geometry fits in stacked planar layers (ICs, MEMS, photonics, microfluidic molds). Contact and proximity printing with cheap chrome or even film masks serves university-scale MEMS down to a few microns; projection steppers and scanners take over below that, with mask sets running from thousands of dollars to millions for advanced nodes. If you are building one-offs or the design is still changing, the mask cost is hard to justify, and maskless direct-write laser or e-beam lithography gives up throughput in exchange for zero tooling. For microfluidic prototypes, write one master and replicate it in PDMS. Nonplanar substrates and features above ~100 um are usually better served by machining or printing processes.

## Examples

Integrated circuits, MEMS, sensors, microfluidics.

## Videos

- https://www.youtube.com/watch?v=oBKhN4n-EGI — Photolithography: Step by step (Jae-Hwang Lee, 5 minutes, 500k+ views)
- https://www.youtube.com/watch?v=m2WuoODe56U — Samsung Semiconductor Explains Photo Lithography and EUV in 5 Minutes (Samsung Semiconductor Newsroom, 6 minutes, 10k+ views)
- https://www.youtube.com/watch?v=IMptIcviR0Y — How Photolithography works | Part 1/6 – Introduction (ZEISS Group, 9 minutes, 100k+ views)

## Further reading

[Semiconductor Lithography Basics (Chris Mack, Lithoguru)](https://www.lithoguru.com/scientist/lithobasics.html) · [Lithography Principles (ASML)](https://www.asml.com/en/technology/lithography-principles)
