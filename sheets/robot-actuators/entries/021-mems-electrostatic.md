---
number: 21
name: MEMS & Electrostatic Actuators
part: 6
group: Micro & precision
applications: [prec, mobile]
density: low
backdrive: good
precision: ufine
cost: low
---

## Description
Actuation at the scale where electrostatics wins: below roughly a millimeter, Coulomb attraction between charged surfaces beats magnetics, and silicon micromachining builds actuators by the wafer-full. Comb drives, parallel plates, and thermal or piezoelectric micro-elements steer mirrors, tune optics, and pump micro-fluids in devices costing cents. The physics that is hopeless at robot scale (forces in micronewtons) is dominant at chip scale.

## Strengths and weaknesses
Batch-fabricated by semiconductor economics — thousands per wafer; nanometer precision; microsecond speeds; near-zero power (electrostatic holding is capacitive). Weaknesses: forces and strokes are microscopic, useful only where the load is also microscopic; stiction and dielectric charging are chronic failure modes; packaging often costs more than the die; and scaling up in force means ganging thousands of elements — rarely worth it.

## When to use
Choose MEMS when the load itself is microscopic — a mirror facet, an optical element, a microliter of fluid — and volumes justify wafer economics: thousands of units per wafer, nanometer precision, near-zero holding power. It is a design-win business, so plan for the packaging and fab NRE dominating the die cost. Avoid it for any macroscopic force or stroke — micronewtons do not gang up economically — and treat one millimeter as the practical boundary: above it, piezo or voice-coil hardware takes over, and no robot joint decision ever lands here.

## Examples
TI's DLP micromirror arrays (millions of mirrors per chip), MEMS autofocus and OIS (a growing phone niche), MEMS scanning mirrors in LiDAR and AR displays, RF-MEMS switches, microfluidic pumps and valves, Fabry-Perot tunable filters.

## Economic profile
A semiconductor business, not a motion-control one: value tracks design wins in consumer and automotive optics. For robotics the relevance is components — MEMS mirrors inside solid-state LiDAR, micro-optics in sensors — rather than motion. Included here as the boundary marker: below a millimeter, "actuator" means silicon, and the supply chain is a fab.

## Suppliers
[Mirrorcle Technologies](https://www.mirrorcletech.com/) — MEMS mirror actuators · [Texas Instruments](https://www.ti.com/) — DLP micromirror arrays
