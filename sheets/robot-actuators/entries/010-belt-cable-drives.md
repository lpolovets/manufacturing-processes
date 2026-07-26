---
number: 10
name: Belt, Cable & Capstan Drives
part: 2
group: Transmissions
applications: [arm, prec, soft]
density: med
backdrive: exc
precision: mod
cost: low
---

## Description
These transmissions move torque over a distance. Synchronous belts, steel cables, and capstan windings carry torque from a motor mounted where mass is cheap (the base) to a joint where mass is expensive (the wrist). Cable and capstan drives also give near-zero backlash and very good backdrivability, because the friction is rolling rather than sliding. That's why they're used in haptics and surgical robotics, where feeling the load is the whole point of the device.

## Strengths and weaknesses
Remote actuation cuts limb inertia substantially. Tensioned cables run smooth, quiet, backdrivable, and backlash-free, and belts are cheap and tolerant of misalignment. The main weakness is compliance: belts stretch and cables creep, which costs stiffness and means tensioning maintenance. Routing through multiple joints couples those joints kinematically. Power density is modest, and cable fatigue and fraying are wear items that need inspection (part of why surgical robots replace instruments on a schedule).

## When to use
Reach for belts and cables when moving mass is the problem. Putting the motors at the base drops limb inertia a lot, which is why tendon drives are standard in dexterous hands and cable capstans are standard in haptics and surgical instruments, where backdrivable, backlash-free feel is the product. Belts are the cheap default for planar stages (CoreXY, SCARA, deltas) and any long run that has to tolerate misalignment. Avoid them when you need stiffness under high load or maintenance-free life, since cables creep, fray, and need tensioning; for heavy sustained force, use a screw or a geared joint instead. Keep the routing simple, because every joint a cable crosses becomes a kinematic coupling you have to compensate for.

## Examples
The da Vinci surgical system's cable-driven instruments (the category's flagship), Phantom haptic devices' capstans, 3D printer CoreXY belt systems, SCARA and delta robot belt stages, tendon-driven robot hands (Shadow Hand), Agility Robotics' leg transmissions mixing cables and links.

## Economic profile
Belts are a commodity. Precision cable and capstan work is closer to craft engineering, with real know-how moats in tension management, termination, and routing, but there's little standalone industry around it; the expertise mostly lives inside products like surgical and haptic systems. For humanoid hands, tendon drives are the current compromise between dexterity and packaging, which keeps this old craft relevant.

## Suppliers
[Gates](https://www.gates.com/) — synchronous belts and drives · [SDP/SI](https://www.sdp-si.com/) — small-mechanism belts, cables, and pulleys

## Further reading

[Forte: A Strong, Accurate, Low-Cost Capstan-and-Belt Robot Arm (arXiv)](https://arxiv.org/abs/2507.15693)
