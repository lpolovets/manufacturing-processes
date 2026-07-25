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
Hydraulics without the hydraulic plant: a self-contained unit where an electric motor drives its own small pump, moving sealed fluid directly to its own cylinder — no central pump, no servo valves, no throttling. Force control comes from motor torque (efficient, reversible) rather than valve metering (lossy), making EHAs backdrivable in a way classic hydraulics never were. Aerospace adopted them for "more-electric" aircraft; robotics uses them where electric density runs out but hydraulic infrastructure is unacceptable.

## Strengths and weaknesses
Hydraulic force density with electric-drive controllability and 60–80% efficiency; sealed-for-life fluid; per-joint modularity with only wires running to it; inherent shock tolerance through fluid compliance. Weaknesses: the pump-per-joint architecture multiplies precision pumps (the expensive, wear-prone part); bandwidth trails valve-controlled hydraulics; small EHAs suffer disproportionate pump losses; and the design space is engineering-intensive with few off-the-shelf products at robot scale.

## When to use
Consider an EHA when sustained joint force outgrows what a BLDC plus roller screw can package — multi-kilonewton loads with shock exposure — but a central hydraulic plant is unacceptable: aerospace surfaces, heavy exoskeletons, high-payload humanoid legs. You get hydraulic density with motor-side force control, 60–80% efficiency, sealed fluid, and only wires to the joint. Avoid it while requirements still fit electromechanics: every joint carries its own precision pump, nothing is off the shelf at robot scale, and prices are aerospace-adjacent, so it's a program decision rather than a catalog purchase; if you need valve-hydraulic bandwidth or force, classic servo-hydraulics still holds that ground.

## Examples
F-35 flight-control actuators (the flagship deployment), Moog and Parker aerospace lines, Apptronik's early EHA work and various humanoid knee prototypes, KNR and Kawasaki hydraulic-robot research, heavy-payload exoskeletons.

## Economic profile
The rational endpoint for high-force robot joints on paper, held back by the absence of a commodity micro-EHA supply chain — every unit is semi-custom at aerospace-adjacent prices. If humanoid load requirements outgrow ball-screw-plus-BLDC solutions, EHAs are the waiting successor; a venture that industrializes a cheap, sealed 1–10 kN robot EHA would own a genuine gap.

## Suppliers
[Domin](https://domin.com/) — additively-manufactured direct-drive servo valves and compact EHA systems · [Parker](https://www.parker.com/) — aerospace and industrial EHA lines
