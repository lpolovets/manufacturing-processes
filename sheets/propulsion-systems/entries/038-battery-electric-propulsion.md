---
number: 38
name: Battery-electric propulsion
part: 7
group: Battery-electric
regimes: [sub]
thrust: [small, med]
maturity: common
cost: vlow
---

## Description
Battery-electric aircraft propulsion is a lithium battery, a motor controller, a permanent-magnet motor, and a propeller or ducted fan. Efficiency from stored energy to shaft power is 85–93%, roughly double a piston engine's and well above a small turbine's, and the motor works equally well at any altitude because it does not depend on air for combustion. The constraint is energy density. Current aviation-grade lithium cells store 250–300 Wh/kg at pack level, against about 12,000 Wh/kg for jet fuel, and even after accounting for efficiency the gap is a factor of roughly 15.

## Strengths and weaknesses
Electric propulsion is quiet, has very few moving parts, responds in milliseconds, needs almost no maintenance, and scales down efficiently, which is why every small drone uses it. Distributing many small motors across a wing is practical in a way that distributing turbines is not, and that enables configurations like eVTOL lift-plus-cruise. The weakness is energy. A useful rule of thumb is that a battery-electric aircraft gets roughly 20–45 minutes of endurance plus a reserve, regardless of size, because battery mass fraction and cruise power scale together. Cold weather, cell aging, and reserve requirements all cut into that further.

## When to use
Pick battery-electric for anything flying under about an hour: small drones, trainers, short-hop air taxis, and any application where noise or emissions rule out combustion. If endurance beyond roughly 90 minutes matters, a hydrogen fuel cell roughly doubles it and a small combustion engine triples it or more. If the aircraft is above about 2 tonnes and needs range, electric propulsion is not currently viable and improving cells at 3–5% per year will not change that within a decade. For military ISR drones the practical break point is around one hour of endurance, and above it hybrid or combustion designs take over.

## Key numbers
Pack-level specific energy 250–300 Wh/kg today, improving 3–5% per year · motor efficiency 92–96%, system 85–93% · power density of aviation motors 5–10 kW/kg, with 20 kW/kg demonstrated · typical small drone endurance 20–45 minutes · charge cycles 500–1,500 at aviation depth of discharge.

## Examples
Nearly all quadcopters and small fixed-wing drones, Pipistrel Velis Electro (the first certified electric aircraft, 2020), Joby and Archer eVTOL aircraft, magniX retrofit powertrains, and NASA's X-57 Maxwell distributed-electric demonstrator.

## Economic profile
Electric aircraft propulsion rides the automotive battery and motor supply chain, which is the single most important fact about its economics: aviation is a rounding error in cell demand, so it inherits cost curves it does not drive. Cells have fallen roughly 90% in price since 2010. That means the technology gets cheaper regardless of aviation adoption, but it also means aviation-specific requirements — cycle life at high discharge, certification, thermal runaway containment — carry a cost premium that the automotive curve does not remove.

## Further reading

[Electrified Aircraft Propulsion (NASA Glenn Research Center)](https://www1.grc.nasa.gov/aeronautics/eap/) · [X-57 Maxwell (NASA)](https://www.nasa.gov/aeronautics/x-57-maxwell/)
