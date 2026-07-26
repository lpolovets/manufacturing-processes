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
The planetary is the workhorse transmission. A sun gear, planet gears, and a ring gear share the load across multiple tooth contacts, giving 3–10:1 per stage in a compact coaxial package that stacks to any ratio. That load sharing gives planetaries the best torque density of any conventional gearing, and at low ratios (a single stage) they stay efficient and backdrivable. That's the property that made them the transmission of choice for quasi-direct-drive designs.

## Strengths and weaknesses
Torque density is high, efficiency runs 90–97% per stage, the layout is coaxial, they take shock well, and they're manufactured everywhere at every quality grade. Weaknesses: backlash is on the order of arcminutes unless the gearbox is preloaded, and precision grades cost accordingly. Multi-stage stacks lose efficiency and backdrivability quickly, and they get noisy at high speed. At the ratios arms traditionally need (50–150:1), stacked planetaries end up bigger than strain-wave and cycloidal designs.

## When to use
Default to a planetary for any ratio you can reach in one or two stages. Use a single 3–10:1 stage for backdrivable QDD limbs, and two stages up to roughly 100:1 for drivetrains, wheels, and general servo axes where arcminute backlash (or the cost of a preloaded grade) is acceptable. It's the cheapest torque density you can buy, at every quality point from hobby grade to ground-and-preloaded. If the spec is 50:1 or more in a pancake envelope with zero backlash, use a strain-wave gear instead. If it's a base joint taking heavy shock at high ratio, use a cycloidal, which survives loads that stacked planet gears won't.

## Examples
Every cordless drill; Neugart/Wittenstein precision gearheads on industrial servos; single-stage planetaries inside MIT Cheetah-descended QDD joints (Unitree, Tesla Optimus rotary joints); drone gimbal and rover wheel hubs; automotive transmissions by the hundred million.

## Economic profile
The category is fully industrialized, with a steep quality-price ladder running from $10 hobby gearheads to $1,000+ ground-and-preloaded servo grades. Robotics demand concentrates in the low-backlash middle, where Chinese suppliers are pushing prices down. Because the single-stage planetary is the enabling component of QDD modules, it's one of the highest-volume beneficiaries of the humanoid buildout.

## Suppliers
[Neugart](https://www.neugart.com/) — precision planetary gearheads · [WITTENSTEIN](https://www.wittenstein.de/) — low-backlash servo planetaries

## Further reading

[Epicyclic Gearing Explained (Neugart)](https://www.neugart.com/en/wiki/epicyclic-gearing) · [Gear Technical Reference (KHK Gears)](https://khkgears.net/new/gear_knowledge/gear_technical_reference/)
