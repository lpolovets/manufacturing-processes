---
number: 14
name: Servo-Hydraulic Actuation
part: 4
group: Fluid power
applications: [heavy, legged]
density: vhigh
backdrive: poor
precision: mod
cost: vhigh
---

## Description
Servo valves meter pressurized oil at 200–350 bar into cylinders and rotary actuators. This gives the highest force density of any actuation technology, by an order of magnitude. A fist-sized cylinder exerts tonnes, and because power arrives through hoses, the joints themselves weigh almost nothing. Hydraulics built every excavator, press, and aircraft control surface, and they powered the dynamism of Boston Dynamics' hydraulic Atlas and BigDog before the company went electric.

## Strengths and weaknesses
Force and power density at the joint are unmatched. Relief valves give intrinsic overload tolerance, force transmission is stiff, and the hardware holds up in filth and heat. The weaknesses start with the system tax: pump, accumulator, valves, hoses, filters, and heat exchanger. At small scale that supporting hardware erases the density win. Servo valves cost thousands and demand immaculate fluid, efficiency is poor (throttling losses often put system-level efficiency at 10–30%), leaks are common, and valve nonlinearity makes force control hard to get right.

## When to use
Use servo-hydraulics when forces reach tens of kilonewtons per axis, the environment is dirty, hot, or shock-laden, and one power plant can be amortized across many joints. That covers excavator-class machinery, forging and press automation, high-force test rigs, and autonomy retrofits of machines that are already hydraulic. Below roughly excavator scale the math flips: the pump, valves, hoses, and cooler cost mass and money, and 10–30% system efficiency erases the density win. That's why legged robots moved to electric QDD, which needs a tenth the maintenance. If you need hydraulic-class force without a central plant, look at an EHA instead. If a ball screw plus a BLDC can push it, stay electric.

## Examples
Hydraulic Atlas's backflips (retired 2024, effectively the end of hydraulic humanoids), every excavator and forestry machine (now targets for robotic retrofit: Gravis, Built Robotics), aircraft actuation, industrial testing rigs (MTS/Instron), die-casting and forging automation.

## Economic profile
Hydraulics dominate where forces are enormous and the mass budget is generous: construction, mining, and presses. That's a large, mature industry, and it's being retrofitted with autonomy rather than replaced. In legged robotics the question is settled, because electric QDD matched the dynamism at a tenth the maintenance. What's left for hydraulics is electro-hydrostatic hybrids (the next entry) and autonomy retrofits of existing hydraulic fleets, where the machine has already been bought.

## Suppliers
[Moog](https://www.moog.com/) — servo valves and hydraulic motion control · [Bosch Rexroth](https://www.boschrexroth.com/) — industrial hydraulics at scale

## Further reading

[Electro-Hydraulic Valves: A Technical Look (Moog)](https://www.moog.com/content/dam/moog/literature/products/servovalves/industrial/Moog-ServoValves-Techn_Look-Overview-en.pdf) · [Understanding Electrohydraulic Valve Types (Power & Motion)](https://www.powermotiontech.com/hydraulics/hydraulic-valves/article/21883861/understanding-electrohydraulic-valve-types)
