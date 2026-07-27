---
number: 15
name: Kerolox liquid engine
part: 3
group: Cryogenic bipropellant
regimes: [launch, space]
thrust: [med, heavy]
isp: low
maturity: std
cost: med
---

## Description
A kerolox engine burns refined kerosene (RP-1) with liquid oxygen, usually fed by turbopumps driven by a gas generator or a staged-combustion preburner. Kerosene is dense, liquid at room temperature, and easy to handle, so tanks are small and the vehicle is compact. Only the oxygen is cryogenic. The combination has powered most of the world's first stages since the 1950s, from the F-1 on Saturn V to the Merlin on Falcon 9, and it remains the default for boosters where density and handling matter more than the last few percent of specific impulse.

## Strengths and weaknesses
High propellant density means smaller, lighter tanks and lower drag, which is worth more on a first stage than hydrogen's higher Isp. Kerosene is cheap, safe to store, and needs no insulation. Engines are well understood and can be built at high thrust. The main weakness is coking: kerosene decomposes on hot surfaces and leaves carbon deposits in cooling channels and injectors, which historically made reuse hard and still limits how many flights an engine gets between inspections. Isp of 300–340 s is also 100 s below hydrolox, which costs performance on upper stages, and soot makes the exhaust dirty enough to matter for some payloads.

## When to use
Pick kerolox for first stages and boosters where thrust density and cost dominate, and for any vehicle that needs to be handled by ordinary ground crews. If the stage is an upper stage where every second of Isp buys payload, hydrolox or methalox is usually better. If the vehicle is meant for rapid reuse, methalox avoids the coking problem for a small density penalty, which is why most new reusable designs have moved to methane. A reasonable rule of thumb: kerolox if you are optimizing a first stage for cost per launch today, methalox if you are optimizing for turnaround time in five years.

## Key numbers
Isp 300–311 s sea level, 330–348 s vacuum · chamber pressure 70 bar (gas generator) to 250 bar (staged combustion) · RP-1 density 810 kg/m³ against 71 for liquid hydrogen · Merlin 1D thrust 845 kN sea level, thrust-to-weight above 180:1.

## Examples
SpaceX Merlin (Falcon 9), Rocketdyne F-1 (Saturn V), NPO Energomash RD-180 and RD-181, RD-170/171 (Zenit, Soyuz-5), Rutherford (Electron, electric-pump-fed), and the Soyuz RD-107/108 family that has flown since 1957.

## Economic profile
Kerolox has the cheapest propellant of any liquid system — RP-1 and LOX together run roughly $1–2 per kilogram — so propellant is a rounding error against engine and operations cost. The RD-180 export relationship, and its termination, is the standard example of how engine supply becomes a geopolitical exposure. Reusability economics on kerolox have been proven by Falcon 9 at over 20 flights per booster, though the engines require more inspection between flights than a methalox design would.

## Further reading

[Liquid Rocket Engine (NASA Glenn Beginner's Guide to Aeronautics)](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/liquid-rocket-engine/) · [Experimental Research and Design Planning in the Field of Liquid-Propellant Rocket Engines (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/19770026110)
