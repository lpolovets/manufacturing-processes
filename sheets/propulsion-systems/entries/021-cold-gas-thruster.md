---
number: 21
name: Cold gas thruster
part: 3
group: Storable propellants
regimes: [space]
thrust: [micro, small]
isp: vlow
maturity: std
cost: vlow
---

## Description
A cold gas thruster is a tank, a regulator, a valve, and a nozzle. Stored gas — nitrogen, argon, or increasingly a liquefied propellant like R-236fa or butane — expands through the nozzle and produces thrust. There is no combustion, no catalyst, and no heat. Isp is 50–75 s, which is terrible, but the system is the simplest and safest in spaceflight, it produces no contamination, and it can deliver very small, very repeatable impulse bits. That last property is what keeps it in service on precision-pointing spacecraft long after better options existed.

## Strengths and weaknesses
Simplicity, safety, and precision are the advantages. There is essentially nothing to fail beyond a valve, the propellant is inert, and impulse bits down to micronewton-seconds are achievable, which is what missions like gravitational-wave observatories need. It is also the cheapest propulsion you can fly. The weakness is performance: Isp of 50–75 s means the delta-v available from a reasonable tank is a few tens of meters per second. High-pressure gas storage also carries a mass penalty and a pressure-vessel qualification burden, though liquefied propellants that self-pressurize avoid most of it.

## When to use
Pick cold gas when total delta-v is small, safety and simplicity matter, or pointing precision is the requirement: cubesat detumbling, formation-flying fine control, drag makeup on very low orbits, and astronaut maneuvering units. If the mission needs more than roughly 50 m/s, move to a monopropellant or electric system. If the spacecraft is a cubesat with tight volume, liquefied cold gas (butane or a refrigerant) roughly triples the stored propellant mass for the same tank volume compared with high-pressure nitrogen, and it is usually the right variant.

## Key numbers
Isp 50–75 s (nitrogen about 70 s, butane about 60–70 s warm) · thrust 10 µN to 10 N · minimum impulse bits below 1 µN·s on precision systems · typical cubesat system delivers 10–50 m/s · system cost from a few thousand dollars.

## Examples
Manned Maneuvering Unit and SAFER astronaut jetpacks, LISA Pathfinder's micronewton thrusters, Planet's Dove satellites, Falcon 9's nitrogen attitude thrusters used for booster reorientation, and a large share of cubesat propulsion modules from VACCO, Marotta, and similar suppliers.

## Economic profile
Cold gas is a commodity. Components are simple enough that several suppliers sell integrated cubesat modules for under $50k, and the technology has no meaningful moat. Its persistence is a good illustration of a general rule in space hardware: the simplest adequate system usually beats the best-performing one when the mission's requirement is small, because qualification and integration cost dominate. Growth tracks the smallsat market rather than any technology trend.

## Further reading

[In-Space Propulsion: State of the Art of Small Spacecraft Technology (NASA)](https://www.nasa.gov/smallsat-institute/sst-soa/in-space-propulsion/) · [Thruster Options for Microspacecraft: A Review and Evaluation (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/20060035386)
