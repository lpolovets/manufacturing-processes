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
A rotary motor unrolled: magnets laid flat as a track, coils as a moving forcer, producing direct linear force with no screw, belt, or gear in between. Nothing converts, so nothing backlashes, wears, or limits speed — linear motors hit 10+ m/s and nanometer-class precision simultaneously, which is why semiconductor lithography stages, the most precise moving machines ever built, use nothing else. Iron-core versions maximize force; ironless versions eliminate cogging for perfect smoothness.

## Strengths and weaknesses
Zero backlash and zero transmission wear, extreme speed and acceleration, sub-micron precision with linear encoders, unlimited travel by adding track. Weaknesses: no mechanical advantage — every newton is bought with amps and magnets, so continuous force per dollar is poor; strong open magnet tracks collect ferrous debris and complicate handling; holding force requires constant current or brakes; and the magnet track's cost scales with travel length.

## When to use
Pick a linear motor when a linear axis must be both fast and precise — meters per second and micron-or-better accuracy in the same move — or when throughput per track meter justifies magnet money: lithography stages, SMT gantries, programmable transport lines. Ironless variants buy cogging-free smoothness for scanning; iron-core buys force. Avoid it when the axis mostly holds force rather than moves (holding burns continuous current or needs brakes — a ball screw holds for free), when travel is long but speed modest (belt or screw is a fraction of the track cost), or around ferrous swarf that the open magnet track will harvest.

## Examples
ASML wafer and reticle stages, pick-and-place machine gantries (the SMT industry runs on them), laser cutters and high-end CNC axes, maglev-style transport systems (Beckhoff XTS, Planar motors), Rockwell/B&R track systems replacing conveyor lines.

## Economic profile
Owns applications where precision-times-throughput justifies magnet money — semiconductors above all. In robotics proper it appears in gantry robots and is creeping into "linear transport" factory lines that replace conveyors with programmable movers. Falling magnet-track prices from Chinese suppliers are widening the niche downward into general automation.

## Suppliers
[Tecnotion](https://www.tecnotion.com/) — iron-core and ironless linear motors · [ETEL](https://www.etel.ch/) — precision direct-drive systems for semiconductor stages

## Further reading

[What Are the Benefits of a Linear Motor? (Tecnotion)](https://www.tecnotion.com/faq/what-are-the-benefits-of-a-linear-motor/) · [Why Choose an Ironless Motor? (Tecnotion)](https://www.tecnotion.com/faq/why-choose-an-ironless-motor/)
