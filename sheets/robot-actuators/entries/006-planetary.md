---
number: 6
name: Planetary Gearbox
part: 2
group: Transmissions
applications: [arm, legged, mobile, heavy]
density: high
backdrive: good
precision: mod
cost: low
---

## Description
The workhorse transmission: sun, planets, and ring gear sharing load across multiple tooth contacts, delivering 3–10:1 per stage in a compact coaxial package, stackable to any ratio. Load sharing gives planetaries the best torque density of any conventional gearing, and at low ratios (a single stage) they stay efficient and backdrivable — the property that made them the transmission of the quasi-direct-drive revolution.

## Strengths and weaknesses
High torque density, 90–97% efficiency per stage, coaxial layout, robust to shock, manufactured everywhere at every quality grade. Weaknesses: backlash of arcminutes unless preloaded (precision grades cost accordingly); multi-stage stacks lose efficiency and backdrivability fast; noise at high speed; and at the ratios arms traditionally need (50–150:1), stacked planetaries lose the size battle to strain-wave and cycloidal designs.

## When to use
Default to a planetary for any ratio it can reach in one or two stages: a single 3–10:1 stage for backdrivable QDD limbs, two stages up to ~100:1 for drivetrains, wheels, and general servo axes where arcminute backlash (or the cost of a preloaded grade) is acceptable. It's the cheapest torque density money buys, at every quality point from hobby to ground-and-preloaded. Avoid it where the spec is 50:1+ in a pancake envelope with zero backlash — that's strain-wave territory — or a shock-hammered base joint at high ratio, where a cycloidal survives what stacked planet gears won't.

## Examples
Every cordless drill; Neugart/Wittenstein precision gearheads on industrial servos; single-stage planetaries inside MIT Cheetah-descended QDD joints (Unitree, Tesla Optimus rotary joints); drone gimbal and rover wheel hubs; automotive transmissions by the hundred million.

## Economic profile
Fully industrialized with a steep quality-price ladder: $10 hobby gearheads to $1,000+ ground-and-preloaded servo grades. Robotics demand concentrates in the low-backlash middle, where Chinese suppliers are compressing prices. As the enabling component of QDD modules, the humble single-stage planetary is quietly one of the highest-volume winners of the humanoid buildout.

## Suppliers
[Neugart](https://www.neugart.com/) — precision planetary gearheads · [WITTENSTEIN](https://www.wittenstein.de/) — low-backlash servo planetaries
