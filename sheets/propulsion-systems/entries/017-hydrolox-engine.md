---
number: 17
name: Hydrolox liquid engine
part: 3
group: Cryogenic bipropellant
regimes: [launch, space]
thrust: [med, large]
isp: mid
maturity: std
cost: vhigh
---

## Description
A hydrolox engine burns liquid hydrogen with liquid oxygen and produces the highest specific impulse of any practical chemical rocket, 440–465 s in vacuum. Hydrogen's low molecular weight is the reason: exhaust velocity scales with the square root of chamber temperature over molecular weight, and water vapor from hydrogen combustion is light. The cost of that is hydrogen's density, 71 kg/m³, which is a fourteenth of kerosene. Tanks are enormous and must be insulated against a 20 K propellant, and hydrogen leaks through seals that hold every other fluid.

## Strengths and weaknesses
Isp is the whole case, and on an upper stage it is decisive — a hydrolox upper stage delivers substantially more payload to high-energy orbits than any other chemical option. Combustion products are just water, which matters for some payload contamination cases. Against that: tanks are large and heavy, insulation adds mass, boil-off makes long coast phases hard, hydrogen embrittles metals, and ground infrastructure is expensive. The Space Shuttle and SLS hydrogen leak scrubs are the standard illustration. Hydrolox engines also have poor thrust-to-weight, so they are weak first-stage engines and usually need solid boosters alongside them.

## When to use
Pick hydrolox for upper stages and for high-energy missions to geostationary transfer, escape, or the Moon, where Isp translates directly into payload. Avoid it for first stages unless the vehicle is designed around solid boosters, and avoid it for anything that must sit fueled or coast for days without active cooling. If the mission is a reusable booster, methalox is the better answer on every axis except Isp. As a rule of thumb: hydrogen wins where the mission's delta-v is large and the stage is used once, and loses where turnaround time, tank volume, or ground handling cost dominates.

## Key numbers
Isp 440–465 s vacuum · hydrogen density 71 kg/m³ · storage at 20 K · RS-25 thrust 1.86 MN vacuum at 206 bar chamber pressure, thrust-to-weight about 73:1 · boil-off of 1–4% per day without active cooling on typical upper stages.

## Examples
Aerojet Rocketdyne RS-25 (Shuttle, SLS), RL10 (Centaur, DCSS — flying since 1963), Blue Origin BE-3U, Ariane 6 Vulcain 2.1 and Vinci, Japan's LE-9 (H3), and India's CE-20 on GSLV Mk III.

## Economic profile
Hydrolox engines are the most expensive class in production. RS-25 units cost roughly $100M each on SLS even after a restart program aimed at cutting price, and RL10s have historically run $10–25M. Hydrogen itself is not the cost driver; qualification, low production rates, and ground infrastructure are. Green hydrogen investment may reduce propellant costs but does nothing about the engine economics. Where reuse is the goal, the industry has voted with its designs and moved to methane.

## Further reading

[Experimental Performance of Liquid Hydrogen and Liquid Fluorine in Regeneratively Cooled Rocket Engines (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/19660024052) · [Liquid-Hydrogen Rocket Engine Development at Aerojet, 1944–1950 (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/19770026120)
