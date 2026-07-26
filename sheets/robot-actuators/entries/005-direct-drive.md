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
No transmission at all: a large-diameter, many-pole motor drives the load directly. Zero backlash, zero gear friction, zero reflected-inertia amplification — the world's cleanest torque source, with position resolution limited only by the encoder. The cost is fundamental: torque scales with motor volume and current, so direct drive means big, heavy, hot motors doing what a gearbox would do for free. Frameless kits (rotor + stator, no housing) let designers build the motor into the joint structure itself.

## Strengths and weaknesses
Perfect backdrivability and force transparency, sub-arc-second precision with good encoders, silent operation, no wear parts, and unmatched control bandwidth. Weaknesses: torque density is the worst of any electric option — continuous torque at temperature is brutally limiting; holding gravity loads burns constant power; and the motors are expensive per Nm precisely because there's no gear multiplying anything.

## When to use
Go direct drive when transparency or precision is the product and the axis carries no standing gravity load: haptic interfaces, gimbals, rotary tables, metrology and wafer stages, force-sensitive test rigs — anywhere sub-arc-second resolution, zero backlash, or kilohertz force bandwidth is the spec and the motor can be as big as it needs to be. Avoid it for gravity-loaded limbs and mobile robots: holding torque burns continuous power and torque density is the worst on this sheet, which is exactly the gap QDD closes with a single 6–10:1 stage at a fraction of the motor mass. Budget the encoder alongside the motor — at this precision class it can cost as much.

## Examples
Semiconductor wafer stages and rotary tables (the natural home), Kollmorgen/ETEL/Tecnotion frameless lines, the direct-drive SCARA arms of the 1980s (AdeptOne — the historical proof and cautionary tale), haptic devices, gimbal motors on every camera drone.

## Economic profile
Owns applications where precision or transparency is the product and mass is tolerable: stages, metrology, haptics. As robot joints, pure direct drive lost to QDD's compromise — but the same frameless motors are QDD's core component, so the category's volume rides the humanoid wave anyway. Price per Nm is the metric; encoder cost often rivals the motor's.

## Suppliers
[Kollmorgen](https://www.kollmorgen.com/) — frameless torque motor kits · [Celera Motion](https://www.celeramotion.com/) — direct-drive motors and precision encoders

## Further reading

[Direct Drive Motors, Frameless Resolvers and Ring Encoders (Novanta Celera Motion)](https://novanta.com/robotics-automation/technical-paper/direct-drive-motors-frameless-resolvers/)
