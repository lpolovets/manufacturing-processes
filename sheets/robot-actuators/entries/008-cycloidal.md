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
The heavy-duty precision transmission: an eccentric input rolls cycloidal discs against ring pins, engaging a large fraction of the lobes simultaneously. That massive multi-tooth contact gives cycloidals what harmonic drives lack — brutal shock-load capacity (500% momentary overloads survived) and high torsional stiffness — at ratios of 30–300:1. They own the high-torque base joints of industrial robots as thoroughly as harmonics own the wrists.

## Strengths and weaknesses
Extreme overload tolerance and rigidity, near-zero backlash when preloaded, long fatigue life, high single-stage ratios. Weaknesses: heavier and bulkier than strain-wave at equal ratio; eccentric motion needs balancing and induces a small cyclic ripple; manufacturing tolerances are ferocious (hence the duopoly); efficiency similar to harmonic; effectively non-backdrivable.

## When to use
Pick a cycloidal for high-torque proximal joints that will be shocked — industrial-robot bases and shoulders, humanoid hips and knees, anything that lifts hundreds of newton-meters or takes impacts as part of the job — where its 500% momentary overload rating and torsional stiffness are the difference between a service call and a shrug. It wants ratios of 30–300:1 and a mass budget that tolerates the extra kilograms over strain-wave. Avoid it in wrists and distal joints where grams and axial depth dominate (harmonic wins the packaging) and in force-controlled, contact-transparent joints, where a low-ratio QDD stage is the right architecture.

## Examples
Nabtesco RV series — the base and shoulder joints of the large industrial robots of Fanuc, ABB, KUKA, Yaskawa (Nabtesco holds ~60% of the world precision-reducer market); Sumitomo Fine Cyclo; Spinea; Chinese entrants (Shuanghuan, Zhongdadi) chasing the market; 3D-printed hobby cycloidals as a maker staple.

## Economic profile
The other half of the Japanese precision-reducer duopoly, with the same story arc as harmonic drives: decades of stable oligopoly pricing now under Chinese assault as robot volumes explode. Cycloidals' shock tolerance makes them candidates for humanoid hips and knees where impacts are life; whoever industrializes a compact, cheap cycloidal for that duty inherits a large slice of the embodied-AI BOM.

## Suppliers
[Nabtesco](https://www.nabtesco.com/) — RV cycloidal reducers, ~60% world share · [Spinea](https://www.spinea.sk/) — compact TwinSpin cycloidals

## Further reading

[Functional Principle of Cycloidal Gears (Nabtesco)](https://www.nabtesco.de/en/service/faq/technologies/functional-principle-of-cycloidal-gears) · [RV Two-Stage Reduction Engineering (Nabtesco Motion Control)](https://www.nabtescoprecision.com/engineering/)
