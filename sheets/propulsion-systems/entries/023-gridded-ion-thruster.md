---
number: 23
name: Gridded ion thruster
part: 4
group: Electrostatic
regimes: [space]
thrust: [micro, small]
isp: vhigh
maturity: std
cost: low
---

## Description
A gridded ion thruster ionizes a propellant, usually xenon, in a discharge chamber, then accelerates the ions through a pair of closely spaced perforated grids held at a potential difference of 1,000–2,000 volts. A neutralizer cathode sprays electrons into the exiting beam so the spacecraft does not charge up. Because the accelerating field is set by grid voltage rather than by combustion chemistry, exhaust velocity is 30–50 km/s, which is ten times a chemical rocket's. The price is thrust: space-charge limits how many ions fit between the grids, so a large thruster produces about a quarter of a newton.

## Strengths and weaknesses
Specific impulse of 3,000–4,500 s is the highest of any flight-proven propulsion system, and it converts directly into propellant mass saved. A GEO satellite that switches from chemical to electric orbit raising can cut propellant mass by roughly 40% and use it for payload or extra years of service. Total impulse per kilogram of hardware is excellent, and operation over tens of thousands of hours is demonstrated. The weaknesses: thrust is tiny, so transfers take months instead of hours; the thruster needs kilowatts of solar power and a power processing unit that often costs more than the thruster; and grid erosion by charge-exchange ions sets the life limit.

## When to use
Pick gridded ion propulsion when the mission has a large delta-v budget and plenty of time: GEO station-keeping and orbit raising, deep-space cruise, and precise drag-free control. If the maneuver has to happen quickly — a lander, an abort, an intercept — chemical propulsion is the only option, since a quarter-newton engine cannot change a trajectory in minutes. If the spacecraft's power budget is under about 1 kW, look at Hall thrusters or electrospray instead, which run efficiently at lower power. In practice the choice between ion and Hall is a trade of Isp against thrust density at a given power level.

## Key numbers
Isp 3,000–4,500 s · thrust 20–250 mN · efficiency 60–80% · power 0.5–7 kW · demonstrated life above 50,000 hours (NEXT ran over 51,000 hours on the ground) · xenon propellant historically $1,000–3,000/kg with volatile pricing.

## Examples
NASA's NSTAR on Deep Space 1 and Dawn, NEXT-C on DART, Hughes/Boeing XIPS on 702 series satellites, the ESA-JAXA BepiColombo T6 thrusters from QinetiQ, and Japan's Hayabusa microwave-discharge ion engines.

## Economic profile
Electric propulsion changed satellite economics more than any other propulsion technology of the past 30 years, because it converts propellant mass into payload or launch-cost savings. All-electric GEO platforms launch at roughly half the wet mass of chemical equivalents. Xenon supply is a real constraint — it is a byproduct of air separation, produced in small quantities, and prices have spiked when demand rose — which has pushed several operators toward krypton at a modest performance penalty. Thruster cost is modest; the power processing unit and solar array are where the money goes.

## Further reading

[Electric propulsion research (NASA Glenn Research Center)](https://www1.grc.nasa.gov/space/electric-propulsion/) · [Development Status and Performance Metrics of the Advanced NEXT Ion Propulsion System (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/20250008559)
