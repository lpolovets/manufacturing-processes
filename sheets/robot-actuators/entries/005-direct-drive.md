---
number: 5
name: Direct Drive & Frameless Torque Motors
part: 1
group: Electric rotary
applications: [prec, legged, arm]
density: low
backdrive: exc
precision: ufine
cost: high
---

## Description
Direct drive means no transmission at all: a large-diameter, many-pole motor drives the load directly. There's no backlash, no gear friction, and no reflected-inertia amplification, so it's about the cleanest torque source available, with position resolution limited only by the encoder. The cost is fundamental. Torque scales with motor volume and current, so direct drive means big, heavy, hot motors doing work a gearbox would do for free. Frameless kits (rotor plus stator, no housing) let you build the motor into the joint structure itself.

## Strengths and weaknesses
Backdrivability and force transparency are as good as they get, precision reaches sub-arc-second with a good encoder, operation is silent, there are no wear parts, and control bandwidth is the highest of any option here. Weaknesses: torque density is the worst of any electric option, and continuous torque at temperature is the binding limit. Holding a gravity load burns power the whole time. The motors are expensive per Nm because there's no gear multiplying anything.

## When to use
Go direct drive when transparency or precision is the product and the axis carries no standing gravity load. Typical cases are haptic interfaces, gimbals, rotary tables, metrology and wafer stages, and force-sensitive test rigs, where the spec is sub-arc-second resolution, zero backlash, or kilohertz force bandwidth and the motor can be as big as it needs to be. Avoid it for gravity-loaded limbs and mobile robots, since holding torque burns continuous power and torque density is the worst on this sheet. That's the gap QDD closes with a single 6–10:1 stage at a fraction of the motor mass. Budget the encoder alongside the motor, because at this precision class it can cost as much as the motor.

## Examples
Semiconductor wafer stages and rotary tables (the natural home), Kollmorgen/ETEL/Tecnotion frameless lines, the direct-drive SCARA arms of the 1980s (AdeptOne — the historical proof and cautionary tale), haptic devices, gimbal motors on every camera drone.

## Economic profile
Direct drive owns the applications where precision or transparency is the product and mass is tolerable: stages, metrology, and haptics. As robot joints, pure direct drive lost out to QDD, but the same frameless motors are QDD's core component, so category volume still benefits from humanoid demand. Price per Nm is the metric to compare on, and encoder cost often rivals the motor's.

## Suppliers
[Kollmorgen](https://www.kollmorgen.com/) — frameless torque motor kits · [Celera Motion](https://www.celeramotion.com/) — direct-drive motors and precision encoders

## Further reading

[Direct Drive Motors, Frameless Resolvers and Ring Encoders (Novanta Celera Motion)](https://novanta.com/robotics-automation/technical-paper/direct-drive-motors-frameless-resolvers/)
