---
number: 24
name: Electrohydraulic & Dielectric Elastomer Muscles (HASEL / DEA)
part: 7
group: Artificial muscle
applications: [soft]
density: med
backdrive: exc
precision: mod
cost: med
---

## Description
Electrostatic muscles: dielectric elastomer actuators (DEAs) squeeze a rubbery capacitor between compliant electrodes — apply kilovolts and it flattens and expands. HASEL actuators (2018, Keplinger lab) upgraded the recipe by filling flexible pouches with liquid dielectric: the field zips the pouch shut and hydraulically displaces the fluid, combining electrostatic speed with muscle-like contraction, self-healing dielectric, and built-in capacitive self-sensing. This family is the most credible fully-electric artificial muscle yet.

## Strengths and weaknesses
Muscle-like strain (10–30%+) at tens-to-hundreds of hertz, high efficiency (electrostatic, with energy recovery possible), silent, self-sensing, and made from films and liquids by roll-to-roll-friendly processes. Weaknesses: kilovolt drive electronics — miniaturizing safe 5–10 kV supplies is half the product; forces per unit are modest, demanding stacks and arrays; dielectric breakdown and electrode fatigue set lifetime; and no application beyond demos has yet shipped at volume.

## When to use
Consider HASEL/DEA when the application needs silent, muscle-like motion at modest force with built-in self-sensing and can absorb a 5–10 kV drive stage: haptic surfaces, small valves and pumps, adaptive optics, soft-robot research — jobs where tens of hertz and 10–30% strain in a film-thin package beat any motor. Design around stacks and arrays from the start, since single units push newtons, not tens of newtons. Avoid it for load-bearing joints and any product needing demonstrated lifetime today — breakdown and electrode fatigue data are still thin and nothing has shipped at volume — and default to conventional electromagnetic actuation wherever the muscle-like form factor isn't itself the requirement.

## Examples
Artimus Robotics (HASEL commercialization), Toyota Research and academic humanoid-muscle demos, historical SRI DEA work (the field's origin), haptic-display startups using DEA films, adaptive-optics and valve prototypes.

## Economic profile
The category venture capital keeps circling: materials are cheap, manufacturing is film converting, and the performance envelope genuinely resembles muscle. The unresolved questions are lifetime under load and the HV-electronics bill of materials. A reasonable posture: watch for the first boring industrial design win (valves, haptics, pumps) — muscles for humanoids come after the boring win, not before.

## Suppliers
[Artimus Robotics](https://www.artimusrobotics.com/) — HASEL actuator commercialization · [ESTAT Actuation](https://www.estat.tech/) — electroadhesive clutches for the same electrostatic toolbox
