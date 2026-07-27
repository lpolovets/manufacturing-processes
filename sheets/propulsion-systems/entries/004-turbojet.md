---
number: 4
name: Turbojet
part: 1
group: Turbojets
regimes: [sub, super]
thrust: [small, med]
isp: vhigh
maturity: std
cost: med
---

## Description
A turbojet sends all of its air through the core: compressor, combustor, turbine, nozzle. There is no bypass. That gives high exhaust velocity and therefore high specific thrust, which is efficient when the aircraft is already moving fast and wasteful when it is not. Turbojets dominated aviation from the 1950s until turbofans displaced them for subsonic flight in the 1970s, and they survive today in two niches: high supersonic flight where exhaust velocity needs to exceed flight velocity by a wide margin, and cheap expendable vehicles where simplicity beats efficiency. The J58 in the SR-71 is the famous edge case, bleeding compressor air around the core above Mach 2 so that it progressively behaved like a ramjet.

## Strengths and weaknesses
Simplicity is the main advantage: fewer stages, smaller frontal area, no fan, and a straightforward installation. Specific thrust is high, so the engine is small for its thrust, which suits slender supersonic airframes. Efficiency is the problem. At subsonic speed a turbojet's propulsive efficiency is poor — it wastes energy in a fast, thin jet — so fuel burn is roughly double a comparable turbofan's. Turbojets are also loud, since jet noise scales with roughly the eighth power of exhaust velocity, which is why they are effectively banned from civil airports.

## When to use
Pick a turbojet when the vehicle spends its life above Mach 1.5, when frontal area is the binding constraint, or when unit cost and simplicity matter more than fuel burn. That last case is the live one: subsonic cruise missiles and target drones use small turbojets because a $50k engine that runs once for 40 minutes beats a $500k turbofan that would run for 10,000 hours. Avoid turbojets for anything that cruises subsonic and needs range. If the mission is long-endurance subsonic loiter, a turbofan or turboprop is the answer and the fuel-burn difference will show up as hours of endurance.

## Key numbers
Specific thrust 500–900 N·s/kg versus 200–400 for a high-bypass fan · TSFC roughly 0.8–1.1 lb/lbf/hr at subsonic cruise · practical envelope to about Mach 3 before turbine inlet temperature limits bite · small expendable units 0.5–5 kN, large military types to 80 kN.

## Examples
Pratt & Whitney J58 (SR-71), General Electric J85 (T-38, F-5), Rolls-Royce Viper, Olympus 593 (Concorde), and the small turbojets in target drones and anti-ship missiles. Most Chinese and Russian legacy trainer and missile engines are turbojets.

## Economic profile
The large-turbojet business is essentially closed — nothing new is being designed for crewed aircraft — but the small expendable turbojet market is growing quickly on the back of cruise-missile and attritable-drone demand. Prices there have fallen from several hundred thousand dollars to tens of thousands as suppliers like Kratos, TRS/Safran, PBS, and several Chinese and Iranian producers moved to casting-and-machining-light designs. If low-cost mass strike is a real doctrine shift, small turbojets and their supply chains are one of the direct beneficiaries.

## Further reading

[Turbojet Engines (NASA Glenn Beginner's Guide to Propulsion)](https://www.grc.nasa.gov/www/k-12/airplane/aturbj.html) · [Propulsion Flight Research at NASA Dryden From 1967 to 1997 (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/19980218800)
