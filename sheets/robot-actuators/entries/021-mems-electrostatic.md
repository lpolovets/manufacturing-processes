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
Below roughly a millimeter, Coulomb attraction between charged surfaces beats magnetics, and silicon micromachining builds actuators by the wafer-full. Comb drives, parallel plates, and thermal or piezoelectric micro-elements steer mirrors, tune optics, and pump micro-fluids in devices costing cents. The same physics that is hopeless at robot scale, where the forces are micronewtons, is dominant at chip scale.

## Strengths and weaknesses
MEMS actuators are batch-fabricated on semiconductor economics, thousands per wafer, with nanometer precision, microsecond speeds, and near-zero power (electrostatic holding is capacitive). The weaknesses: forces and strokes are microscopic, so they're useful only where the load is also microscopic. Stiction and dielectric charging are chronic failure modes. Packaging often costs more than the die. And scaling up in force means ganging thousands of elements, which is rarely worth it.

## When to use
Choose MEMS when the load itself is microscopic (a mirror facet, an optical element, a microliter of fluid) and volumes justify wafer economics: thousands of units per wafer, nanometer precision, near-zero holding power. It's a design-win business, so plan on packaging and fab NRE dominating the die cost. Avoid MEMS for any macroscopic force or stroke, because micronewtons don't gang up economically. A good rule of thumb is that one millimeter is the practical boundary: above it, piezo or voice-coil hardware takes over. No robot joint decision ever lands here.

## Examples
TI's DLP micromirror arrays (millions of mirrors per chip), MEMS autofocus and OIS (a growing phone niche), MEMS scanning mirrors in LiDAR and AR displays, RF-MEMS switches, microfluidic pumps and valves, Fabry-Perot tunable filters.

## Economic profile
MEMS is a semiconductor business rather than a motion-control one, and value tracks design wins in consumer and automotive optics. For robotics the relevance is components rather than motion: MEMS mirrors inside solid-state LiDAR, micro-optics in sensors. It's included here to mark the boundary. Below a millimeter, "actuator" means silicon, and the supply chain is a fab.

## Suppliers
[Mirrorcle Technologies](https://www.mirrorcletech.com/) — MEMS mirror actuators · [Texas Instruments](https://www.ti.com/) — DLP micromirror arrays

## Further reading

[Mirrorcle MEMS Mirrors: Technical Overview (Mirrorcle Technologies, PDF)](https://www.mirrorcletech.com/pdf/Mirrorcle_MEMS_Mirrors_-_Technical_Overview.pdf) · [Electrostatically Actuated MEMS Resonators: A Review (Microsystems & Nanoengineering via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12780223/)
