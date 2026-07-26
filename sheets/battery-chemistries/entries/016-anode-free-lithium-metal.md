---
number: 16
name: Anode-Free Lithium-Metal
part: 2
group: Lithium-metal & conversion
applications: [aero]
energy: vhigh
cycles: low
cost: vhigh
maturity: rd
---

## Description
These cells are manufactured with no anode at all, just a bare copper current collector. All the lithium ships inside the cathode, and the first charge plates it onto the copper as a metal anode formed in situ. That maximizes energy density (there's nothing in the cell that isn't necessary), takes lithium-foil handling out of manufacturing, and lets the cell be built on nearly standard equipment. It's the endpoint architecture of most solid-state roadmaps, including QuantumScape's.

## Strengths and weaknesses
For a given cathode, it gives the theoretical maximum energy density, the simplest possible anode-side manufacturing, and no lithium metal in the factory. The weaknesses come from having zero excess lithium, so every side reaction permanently consumes capacity. Coulombic efficiency has to exceed ~99.9% for acceptable life, which is the hardest efficiency target in battery science. Plating uniformity on copper is unforgiving, and cycle life is still the fundamental barrier.

## When to use
Treat anode-free as an R&D architecture rather than a product choice. Pursue it only if you have serious electrolyte-development capability and are chasing the >99.9% coulombic-efficiency threshold, or if you're evaluating solid-state ventures whose roadmaps (like QuantumScape's) end here. If you need lithium-metal-class density in a real deployment today, use foil-anode lithium-metal cells and accept the manufacturing complexity. If you need cycle life, stay with silicon-blend or graphite Li-ion.

## Examples
QuantumScape's design is anode-free; academic and national-lab programs (Battery500); startup prototypes from Our Next Energy's Gemini range-extender concept and several stealth efforts.

## Economic profile
If the efficiency problem gets solved, anode-free wins on both density and cost, because an entire electrode's materials and processing disappear. Until then it's a research architecture and its economics are hypothetical. Watch electrolyte innovations, since those gate viability rather than the architecture itself.

## Further reading

[Anode-Free Lithium-Metal Batteries: Progress and Perspective (Exploration via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11022618/)
