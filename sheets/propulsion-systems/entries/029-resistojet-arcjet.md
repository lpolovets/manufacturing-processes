---
number: 29
name: Resistojet and arcjet
part: 4
group: Electrothermal
regimes: [space]
thrust: [micro, small]
isp: vlow
maturity: std
cost: vlow
---

## Description
Electrothermal thrusters heat propellant electrically and expand it through a conventional nozzle, so they are chemical rockets with an electric heater instead of a flame. A resistojet passes propellant over a resistively heated element and typically doubles the Isp of a cold gas system. An arcjet strikes an electric arc directly in the flow, reaching much higher temperatures and roughly doubling a monopropellant's Isp. Both are simple, both accept a wide range of propellants including hydrazine decomposition products, ammonia, and water, and both sit between chemical and true electric propulsion in every dimension.

## Strengths and weaknesses
Simplicity, propellant flexibility, and thrust are the advantages: an arcjet produces around 0.2–0.5 N, which is more than most electric thrusters, and the hardware is uncomplicated. Water-fed resistojets are attractive for smallsats because water is safe, dense, and easy to launch as a rideshare payload. The weaknesses are modest Isp — 300 s for a resistojet, 500–800 s for an arcjet, well below Hall and ion thrusters — and heat losses, since a lot of electrical energy ends up warming the thruster rather than the propellant. Arcjet electrodes also erode.

## When to use
Pick a resistojet when you want a meaningful improvement over cold gas without adding a plasma system, or when propellant safety is the driving requirement — water resistojets on cubesats are the clearest example. Pick an arcjet when you have a hydrazine system and want to double its Isp cheaply, which is exactly why GEO satellites used them for north-south station-keeping through the 1990s. If the mission's delta-v is large and power is available, a Hall thruster gives three to four times the Isp and will save far more propellant mass.

## Key numbers
Resistojet Isp 150–350 s at 0.5–1 kW · arcjet Isp 500–800 s at 0.3–2 kW · thrust 0.1–0.5 N · efficiency 30–40% for resistojets, 30–40% for arcjets · water and ammonia both usable, unlike most electric options.

## Examples
Aerojet MR-501 and MR-510 arcjets on Lockheed Martin A2100 and other GEO buses, Intelsat V resistojets, the augmented hydrazine thrusters on Iridium's first constellation, and modern water-resistojet cubesat modules from Bradford, Pale Blue, and similar suppliers.

## Economic profile
Electrothermal propulsion is old, cheap, and quietly persistent. GEO arcjets were largely displaced by Hall and ion thrusters once power budgets grew, but the water resistojet has found a genuinely new market in smallsats, where the ability to launch a propulsion system full of tap water as a secondary payload removes a large regulatory and handling cost. That is a good illustration of a recurring pattern: an old technology becomes relevant again when a new constraint, in this case rideshare safety rules, changes what matters.

## Further reading

[Benefits of Low-Power Electrothermal Propulsion (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/19970010126) · [In-Space Propulsion: State of the Art of Small Spacecraft Technology (NASA)](https://www.nasa.gov/smallsat-institute/sst-soa/in-space-propulsion/)
