---
number: 24
name: Supercapacitors
part: 6
group: Electrical
roles: [anc]
duration: [min]
rte: vhigh
cost: high
maturity: comm
---

## Description
Supercapacitors store energy electrostatically, in the double layer at a carbon electrode's surface, with no chemical reaction at all. They charge and discharge in seconds, last a million cycles, and work from -40 to +65 °C, but they store an order of magnitude less energy per kilogram than batteries. Hybrid lithium-ion capacitors split the difference. A supercapacitor is a power component; it behaves like an electrical spring rather than a fuel tank.

## Strengths and weaknesses
The strengths are near-perfect efficiency, essentially unlimited cycle life, instant response, precise state-of-charge readings from voltage, and graceful aging. The weaknesses: cost runs into the thousands of $/kWh; self-discharge on the order of a percent per day scales poorly beyond minutes of duty; voltage sags linearly as the device discharges, which forces wide-range power electronics; and ever-cheaper high-power lithium cells put pressure on every application niche.

## When to use
Use supercapacitors for seconds-scale power duty at extreme cycle counts or temperatures: wind-pitch backup, tram and crane regeneration, truck engine-start, ride-through bridging, grid-forming inertia. These are jobs where a million cycles from -40 to +65 °C would destroy any battery. If a load mixes sharp pulses with sustained draw, put supercapacitors in front of a battery. Size the energy for seconds to a minute or two, never more. Beyond that, avoid them: self-discharge of roughly a percent per day and costs in the thousands of $/kWh make minutes-plus duty untenable, and high-power lithium cells keep taking over the marginal niches. The recurring failure mode is picking a capacitor for a job where a battery belongs.

## Examples
Wind-turbine pitch backup (the classic design win), regenerative braking in trams and port cranes, engine-start modules for trucks, grid inertia pilots; vendors Skeleton (curved graphene), Maxwell (absorbed into Tesla and back out), Eaton, LS Materials.

## Economic profile
This is a stable, profitable components business (a ~$1B-class market) that sells reliability and cycle life into industrial niches, not a storage market in the grid sense. Growth theses hinge on grid-forming inertia services and hybridization with batteries. The recurring failure mode is picking a capacitor for a job where a battery belongs.

## Further reading

[Supercapacitors Technology Strategy Assessment (DOE Storage Innovations 2030)](https://www.energy.gov/sites/default/files/2023-07/Technology%20Strategy%20Assessment%20-%20Supercapacitors.pdf)
