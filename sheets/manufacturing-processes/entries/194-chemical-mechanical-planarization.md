---
number: 194
name: "Chemical-mechanical planarization"
part: 5
group: "Semiconductor & Microscale"
materials: [semi]
volumes: [high, cont]
tooling: high
---

## Description

A wafer is polished using a reactive slurry and mechanical pad to create a highly flat surface.

## Strengths and weaknesses

Enables multilayer semiconductor structures. Scratching, dishing, erosion, contamination, consumable cost, and uniformity are major challenges.

## When to use

CMP is obligatory wherever a process flow stacks patterned layers that must each start flat: copper damascene interconnects, shallow-trench isolation, tungsten plugs, and the bonding-grade surfaces needed for hybrid wafer bonding all depend on it, and any design with more than a couple of metal levels cannot avoid it. Use it, too, whenever a later lithography step's depth of focus cannot absorb accumulated topography. Treat it as a high-consumable-cost, pattern-sensitive step: enforce layout density rules and dummy fill to control dishing and erosion, and budget serious slurry, pad, and metrology spend. Where the flow is simple — few layers, relaxed lithography, MEMS with tolerant topography — skip it, and use resist etch-back or spin-on planarization for mild smoothing instead.

## Examples

Copper interconnects, dielectric planarization, shallow-trench isolation.

## Videos

- https://www.youtube.com/watch?v=2z4lq-Ms_OU — Chemical Mechanical Planarization, CMP Process Fundamentals: Sec 2 - CMP… (CMC Materials, 8 minutes, 50k+ views)
- https://www.youtube.com/watch?v=xQFjcqgGISw — Chemical Mechanical Planarization, CMP Process Fundamentals: Sec 1 - Intro to… (CMC Materials, 10 minutes, 10k+ views)
