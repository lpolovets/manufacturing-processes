---
number: 24
name: Hall-effect thruster
part: 4
group: Electrostatic
regimes: [space]
thrust: [micro, small]
isp: high
maturity: std
cost: low
---

## Description
A Hall thruster traps electrons in a radial magnetic field inside an annular channel, where they spiral in an azimuthal Hall current. Neutral propellant entering the channel gets ionized by those electrons and is then accelerated out by the axial electric field. Because the electrons neutralize the ion space charge locally, there is no grid limit on beam current, so a Hall thruster produces roughly five to ten times the thrust density of an ion engine at the same power. The trade is exhaust velocity: 15–20 km/s rather than 30–50, giving Isp of 1,500–2,000 s.

## Strengths and weaknesses
Thrust per kilowatt is the reason Hall thrusters have taken over most of the electric propulsion market. They are also simpler than gridded engines, tolerate a range of propellants including krypton and argon, and scale from 100 W cubesat units to 50 kW demonstrators. Weaknesses: channel wall erosion by ion bombardment historically limited life to a few thousand hours, though magnetically shielded designs have pushed that past 10,000; the plume is wider than an ion engine's, which constrains where you can point it relative to solar arrays; and efficiency drops off at low power, so sub-200 W units perform poorly.

## When to use
Pick a Hall thruster as the default electric propulsion choice for satellites and orbital transfer vehicles that need meaningful thrust at 0.2–10 kW: constellation station-keeping and deorbit, GEO orbit raising, and space tugs. If the mission's delta-v is very large and time is abundant, gridded ion propulsion's higher Isp saves more propellant. If available power is under about 100 W, electrospray or cold gas is a better fit. Check propellant choice explicitly — krypton costs a fraction of xenon and gives roughly 10% less Isp, and at constellation scale that trade usually favors krypton.

## Key numbers
Isp 1,500–2,000 s (up to 2,700 s in high-Isp modes) · thrust 5–1,000 mN · efficiency 45–60% · power 0.1–50 kW · magnetically shielded designs demonstrate 10,000+ hours · SpaceX Starlink units run on krypton and later argon.

## Examples
Starlink's krypton and argon thrusters (the largest fleet ever flown), Busek and Safran units on commercial GEO platforms, the SPT-100 family from Fakel that established the technology, NASA's AEPS 12.5 kW thruster for Gateway, and ExoTrail and Orbion units on smallsats.

## Economic profile
Hall thrusters are the workhorse of the industry and the segment where startups have most successfully entered, because the physics is well published and the hardware is not extraordinarily complex. Prices for small units have fallen to the low hundreds of thousands of dollars, and constellation-scale in-house production, as at SpaceX, has driven them lower still. The strategic story is propellant: the move from xenon to krypton and argon was driven by supply and cost, and it demonstrates how quickly the industry will trade performance for supply-chain resilience.

## Further reading

[Electric propulsion research (NASA Glenn Research Center)](https://www1.grc.nasa.gov/space/electric-propulsion/) · [12.5 kW Advanced Electric Propulsion System Thruster Development Testing (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/20205004235)
