---
number: 8
name: Cycloidal Drive
part: 2
group: Transmissions
applications: [arm, heavy, legged]
density: high
backdrive: poor
precision: fine
cost: high
---

## Description
The cycloidal is the heavy-duty precision transmission. An eccentric input rolls cycloidal discs against ring pins, engaging a large fraction of the lobes at the same time. That multi-tooth contact gives cycloidals the two things harmonic drives lack: very high shock-load capacity (they survive 500% momentary overloads) and high torsional stiffness, at ratios of 30–300:1. They dominate the high-torque base joints of industrial robots the same way harmonic drives dominate the wrists.

## Strengths and weaknesses
Overload tolerance and rigidity are both very high, backlash is near zero when preloaded, fatigue life is long, and single-stage ratios are high. Weaknesses: they're heavier and bulkier than strain-wave at equal ratio, and the eccentric motion needs balancing and produces a small cyclic ripple. Manufacturing tolerances are very tight, which is part of why the market is a duopoly. Efficiency is similar to harmonic, and the drive is effectively non-backdrivable.

## When to use
Pick a cycloidal for high-torque proximal joints that will take shock loads: industrial-robot bases and shoulders, humanoid hips and knees, and anything that lifts hundreds of newton-meters or absorbs impacts as part of normal operation. Its 500% momentary overload rating and torsional stiffness are what keep those joints from becoming service calls. It suits ratios of 30–300:1 and a mass budget that can absorb the extra kilograms over strain-wave. Avoid it in wrists and distal joints where grams and axial depth dominate, since harmonic packages better there, and in force-controlled, contact-transparent joints, where a low-ratio QDD stage is the right architecture.

## Examples
Nabtesco RV series — the base and shoulder joints of the large industrial robots of Fanuc, ABB, KUKA, Yaskawa (Nabtesco holds ~60% of the world precision-reducer market); Sumitomo Fine Cyclo; Spinea; Chinese entrants (Shuanghuan, Zhongdadi) chasing the market; 3D-printed hobby cycloidals as a maker staple.

## Economic profile
Cycloidals are the other half of the Japanese precision-reducer duopoly, and the story looks much like harmonic drives': decades of stable oligopoly pricing, now under pressure from Chinese suppliers as robot volumes grow. Their shock tolerance makes them good candidates for humanoid hips and knees, which take impacts constantly. Whoever industrializes a compact, cheap cycloidal for that duty gets a large share of the embodied-AI BOM.

## Suppliers
[Nabtesco](https://www.nabtesco.com/) — RV cycloidal reducers, ~60% world share · [Spinea](https://www.spinea.sk/) — compact TwinSpin cycloidals

## Further reading

[Functional Principle of Cycloidal Gears (Nabtesco)](https://www.nabtesco.de/en/service/faq/technologies/functional-principle-of-cycloidal-gears) · [RV Two-Stage Reduction Engineering (Nabtesco Motion Control)](https://www.nabtescoprecision.com/engineering/)
