---
number: 186
name: "Dry plasma etching"
part: 5
group: "Semiconductor & Microscale"
materials: [semi]
volumes: [high, cont]
tooling: high
---

## Description

Reactive plasma chemically and physically removes exposed material.

## Strengths and weaknesses

Creates anisotropic, high-resolution features with near-vertical walls. Equipment is expensive and plasma damage, selectivity, and contamination can be problematic.

## When to use

Choose plasma etching whenever pattern fidelity matters: submicron features, vertical sidewalls, and tight critical-dimension control that wet chemistry's undercut destroys. It is mandatory for transistor-scale patterning and the default for MEMS and photonic features below a few microns, with RIE and ICP chemistries tunable per material stack. Accept single-wafer processing on tools costing hundreds of thousands to millions, plus development time to balance selectivity against the mask and underlying layers and to manage plasma-induced damage on sensitive devices. When features are tens of microns, sidewall profile is unimportant, or you are stripping blanket films, wet etching does the same job at a fraction of the cost; for silicon structures deeper than ~20 um at high aspect ratio, use DRIE.

## Examples

Transistor gates, MEMS structures, microfluidics, optical gratings.

## Videos

- https://www.youtube.com/watch?v=RoQgnC0Oz2k — Etching Silicon with Plasma - Reactive Ion Etching (RIE) (Sam Zeloof, 12 minutes, 50k+ views)
- https://www.youtube.com/watch?v=k1yCbBrRyu4 — Plasma Etching - (part - 1) (Analog Layout Laboratory, 5 minutes, 10k+ views)
- https://www.youtube.com/watch?v=AQvocqPX0t0 — Henniker Plasma - Plasma Etching Explained (Henniker Plasma Treatment, 1 minute, 10k+ views)
