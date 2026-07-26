---
number: 15
name: Electro-Hydrostatic Actuators (EHA)
part: 4
group: Fluid power
applications: [heavy, legged, arm]
density: high
backdrive: good
precision: mod
cost: vhigh
---

## Description
An EHA is hydraulics with no hydraulic plant. It's a self-contained unit where an electric motor drives its own small pump, moving sealed fluid directly to its own cylinder, so there's no central pump, no servo valves, and no throttling. Force control comes from motor torque (efficient and reversible) rather than valve metering (lossy), which makes EHAs backdrivable in a way classic hydraulics never were. Aerospace adopted them for "more-electric" aircraft. Robotics uses them where electric density runs out but hydraulic infrastructure isn't acceptable.

## Strengths and weaknesses
You get hydraulic force density with electric-drive controllability and 60–80% efficiency. The fluid is sealed for life, each joint is a module with only wires running to it, and the compliance of the fluid gives inherent shock tolerance. The weaknesses: a pump per joint means many precision pumps, and the pump is the expensive, wear-prone part. Bandwidth trails valve-controlled hydraulics. Small EHAs lose a disproportionate share of their power in the pump. And the design work is engineering-intensive, with few off-the-shelf products at robot scale.

## When to use
Consider an EHA when sustained joint force outgrows what a BLDC plus a roller screw can package (multi-kilonewton loads with shock exposure) and a central hydraulic plant isn't acceptable: aerospace surfaces, heavy exoskeletons, high-payload humanoid legs. You get hydraulic density with motor-side force control, 60–80% efficiency, sealed fluid, and only wires running to the joint. Avoid it while your requirements still fit electromechanics. Every joint carries its own precision pump, nothing is off the shelf at robot scale, and prices are aerospace-adjacent, so adopting one is a program decision rather than a catalog purchase. If you need the bandwidth or force of valve-controlled hydraulics, classic servo-hydraulics is still the better answer.

## Examples
F-35 flight-control actuators (the flagship deployment), Moog and Parker aerospace lines, Apptronik's early EHA work and various humanoid knee prototypes, KNR and Kawasaki hydraulic-robot research, heavy-payload exoskeletons.

## Economic profile
On paper EHAs are the right endpoint for high-force robot joints. What holds them back is the absence of a commodity micro-EHA supply chain, so every unit is semi-custom at aerospace-adjacent prices. If humanoid load requirements outgrow ball-screw-plus-BLDC solutions, EHAs are the successor waiting to be used. A company that industrialized a cheap, sealed 1–10 kN robot EHA would be filling a real gap.

## Suppliers
[Domin](https://domin.com/) — additively-manufactured direct-drive servo valves and compact EHA systems · [Parker](https://www.parker.com/) — aerospace and industrial EHA lines

## Further reading

[Electrohydrostatic Actuation Technology Overview (Moog)](https://www.moog.com/products/actuators-servoactuators/actuation-technologies/electrohydrostatic.html) · [Electro-Hydrostatic Actuation in Next-Generation Machines (Moog)](https://www.moog.com/news/ideas-in-motion-control/2015/05/electro-hydrostatic-actuation-proves-itself-in-next-generation-machines.html)
