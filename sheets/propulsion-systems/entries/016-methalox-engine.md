---
number: 16
name: Methalox liquid engine
part: 3
group: Cryogenic bipropellant
regimes: [launch, space]
thrust: [med, heavy]
isp: low
maturity: common
cost: med
---

## Description
A methalox engine burns liquid methane with liquid oxygen. Both propellants are cryogenic but at similar temperatures (−162 °C and −183 °C), which simplifies tank and plumbing design compared with hydrogen. Methane's key property for engine designers is that it burns clean: no coking, so cooling channels and injectors stay clear and the engine can fly again with much less inspection. It also has better density than hydrogen and better Isp than kerosene, landing in a middle position that turns out to suit reusable vehicles well. Nearly every new large launch vehicle designed since 2015 uses it.

## Strengths and weaknesses
Clean combustion is the decisive advantage for reuse, and the two propellants' similar temperatures allow common bulkheads and shared insulation. Methane can also in principle be made on Mars from atmospheric CO₂ and subsurface water, which is why SpaceX chose it. Isp of 330–380 s is a genuine improvement on kerolox. The weaknesses are that both propellants boil off, so long-duration missions need active thermal control; the density is about 30% below RP-1, so tanks are larger; and the engine base is younger, so flight-proven reliability data is thinner than for kerolox or hydrolox.

## When to use
Pick methalox for a new reusable launch vehicle, and for any stage where you want good Isp without hydrogen's tank volume and boil-off problems. If you are building an expendable booster and want the lowest possible cost today from a mature supply chain, kerolox is still reasonable. If the mission is a high-energy upper stage where payload is everything and reuse is not planned, hydrolox still wins on Isp. For in-space storage beyond a few weeks, storable hypergolics or electric propulsion avoid the boil-off management that methalox requires.

## Key numbers
Isp 330–356 s sea level, 350–380 s vacuum · methane density 423 kg/m³ · chamber pressure to about 300 bar on full-flow staged combustion designs · Raptor 3 thrust roughly 2.6 MN sea level · propellant cost well under $1/kg for LNG-derived methane.

## Examples
SpaceX Raptor (Starship, full-flow staged combustion), Blue Origin BE-4 (New Glenn, Vulcan), Rocket Lab Archimedes (Neutron), Relativity Aeon R, ULA/Blue's Vulcan first stage, LandSpace Zhuque-2 (first methalox vehicle to orbit, 2023), and Ariane's Prometheus demonstrator.

## Economic profile
Methalox became the industry default in under a decade, which is unusually fast for propulsion. The reason is reuse economics: if an engine can fly ten times with light inspection, engine cost per flight falls by an order of magnitude, and methane is what makes that practical. Propellant itself is cheap and available from industrial LNG infrastructure. The competitive question now is manufacturing rate — Raptor and BE-4 production rates, not their performance, are what gate their respective vehicles.

## Further reading

[Liquid Oxygen/Liquid Methane Propulsion and Cryogenic Advanced Development (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/20110016509) · [Liquid Oxygen/Liquid Methane Integrated Propulsion System Test Bed (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/20110012829)
