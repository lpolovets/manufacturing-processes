---
number: 17
name: Linear Motors
part: 5
group: Linear electromagnetic
applications: [prec, arm]
density: med
backdrive: exc
precision: ufine
cost: high
---

## Description
A linear motor is a rotary motor unrolled: the magnets lie flat as a track and the coils form a moving forcer, producing linear force directly with no screw, belt, or gear in between. Because nothing converts rotary motion into linear motion, nothing backlashes, wears, or limits speed. Linear motors hit 10+ m/s and nanometer-class precision at the same time, which is why semiconductor lithography stages, the most precise moving machines ever built, use nothing else. Iron-core versions maximize force; ironless versions eliminate cogging, which makes the motion very smooth.

## Strengths and weaknesses
Zero backlash, no transmission wear, extreme speed and acceleration, sub-micron precision with linear encoders, and travel you extend by adding track. The main weakness is that there's no mechanical advantage: every newton comes from amps and magnets, so continuous force per dollar is poor. Strong open magnet tracks collect ferrous debris and are awkward to handle. Holding force requires constant current or a brake. And the magnet track's cost scales with travel length.

## When to use
Pick a linear motor when a linear axis has to be both fast and precise (meters per second and micron-or-better accuracy in the same move), or when throughput per track meter justifies the cost of the magnets: lithography stages, SMT gantries, programmable transport lines. Ironless variants give you cogging-free smoothness for scanning; iron-core variants give you force. Avoid linear motors when the axis mostly holds force rather than moves, because holding burns continuous current or needs a brake, while a ball screw holds for free. Also avoid them when travel is long but speed is modest (a belt or screw costs a fraction of the track), or around ferrous swarf, which the open magnet track will collect.

## Examples
ASML wafer and reticle stages, pick-and-place machine gantries (the SMT industry runs on them), laser cutters and high-end CNC axes, maglev-style transport systems (Beckhoff XTS, Planar motors), Rockwell/B&R track systems replacing conveyor lines.

## Economic profile
Linear motors own the applications where precision times throughput justifies the cost of the magnets, semiconductors above all. In robotics proper they appear in gantry robots, and they're moving into "linear transport" factory lines that replace conveyors with programmable movers. Falling magnet-track prices from Chinese suppliers are widening the niche downward into general automation.

## Suppliers
[Tecnotion](https://www.tecnotion.com/) — iron-core and ironless linear motors · [ETEL](https://www.etel.ch/) — precision direct-drive systems for semiconductor stages

## Further reading

[What Are the Benefits of a Linear Motor? (Tecnotion)](https://www.tecnotion.com/faq/what-are-the-benefits-of-a-linear-motor/) · [Why Choose an Ironless Motor? (Tecnotion)](https://www.tecnotion.com/faq/why-choose-an-ironless-motor/)
