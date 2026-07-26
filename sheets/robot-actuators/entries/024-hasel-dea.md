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
These are electrostatic muscles. Dielectric elastomer actuators (DEAs) squeeze a rubbery capacitor between compliant electrodes; apply kilovolts and it flattens and expands. HASEL actuators (2018, Keplinger lab) improved on the recipe by filling flexible pouches with liquid dielectric. The field zips the pouch shut and hydraulically displaces the fluid, which combines electrostatic speed with muscle-like contraction, a self-healing dielectric, and built-in capacitive self-sensing. This family is the most credible fully-electric artificial muscle so far.

## Strengths and weaknesses
Strain is muscle-like (10–30%+) at tens to hundreds of hertz, efficiency is high (the mechanism is electrostatic, and energy recovery is possible), operation is silent, and the actuator senses itself. It's made from films and liquids using processes friendly to roll-to-roll production. The weaknesses: it needs kilovolt drive electronics, and miniaturizing a safe 5–10 kV supply is half the product. Forces per unit are modest, so you need stacks and arrays. Dielectric breakdown and electrode fatigue set the lifetime. And no application beyond demos has shipped at volume yet.

## When to use
Consider HASEL/DEA when the application needs silent, muscle-like motion at modest force with built-in self-sensing, and can absorb a 5–10 kV drive stage: haptic surfaces, small valves and pumps, adaptive optics, soft-robot research. Those are jobs where tens of hertz and 10–30% strain in a film-thin package beat any motor. Design around stacks and arrays from the start, since single units push newtons, not tens of newtons. Avoid these for load-bearing joints and for any product that needs demonstrated lifetime today, because breakdown and electrode fatigue data are still thin and nothing has shipped at volume. If the muscle-like form factor isn't itself the requirement, use conventional electromagnetic actuation.

## Examples
Artimus Robotics (HASEL commercialization), Toyota Research and academic humanoid-muscle demos, historical SRI DEA work (the field's origin), haptic-display startups using DEA films, adaptive-optics and valve prototypes.

## Economic profile
Venture capital keeps circling this category, because the materials are cheap, manufacturing is film converting, and the performance envelope genuinely resembles muscle. The unresolved questions are lifetime under load and the HV-electronics bill of materials. A reasonable posture is to watch for the first boring industrial design win (valves, haptics, pumps). Muscles for humanoids come after the boring win, not before.

## Suppliers
[Artimus Robotics](https://www.artimusrobotics.com/) — HASEL actuator commercialization · [ESTAT Actuation](https://www.estat.tech/) — electroadhesive clutches for the same electrostatic toolbox

## Further reading

[HASEL Actuator Technology (Artimus Robotics)](https://www.artimusrobotics.com/technology) · [Review of Electrohydraulic Actuators Inspired by the HASEL Actuator (Biomimetics via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11939893/)
