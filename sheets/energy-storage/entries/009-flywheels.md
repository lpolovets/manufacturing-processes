---
number: 9
name: Flywheels
part: 2
group: Kinetic
roles: [anc]
duration: [min]
rte: vhigh
cost: high
maturity: comm
---

## Description
A flywheel stores energy as rotation: a carbon-fiber or steel rotor spins at up to tens of thousands of RPM on magnetic bearings in vacuum, coupled to a motor-generator. Flywheels deliver and absorb full power in milliseconds, cycle millions of times without degradation, and hold their rating regardless of temperature, which makes them close to an ideal power device. What they can't do is hold energy for long: standby losses and low energy density confine them to seconds-to-minutes duty.

## Strengths and weaknesses
Flywheels offer unmatched cycle life and response speed, precise state-of-charge knowledge (it's a tachometer), no chemistry to degrade or catch fire, and decades of service life. Weaknesses: cost per kWh is extremely high (they are $/kW machines); self-discharge runs several percent per hour; catastrophic rotor failure must be contained; and Li-ion has taken most of the frequency-regulation market that was flywheels' commercial beachhead.

## When to use
Buy flywheels for seconds-to-minutes power duty at very high cycling rates (hundreds of full cycles a day for decades): UPS bridging to generator start, industrial pulse loads, rail and crane regeneration, and inertia services where temperature extremes or fire codes rule batteries out. You are buying $/kW, response speed, and cycle life; size the energy content in seconds. Avoid anything beyond ~15 minutes of discharge, because the $/kWh doesn't work and self-discharge of percent-per-hour drains longer holds. For plain frequency regulation, Li-ion is now the cheaper default; flywheels win only where cycle count or environment would destroy a battery.

## Examples
Beacon Power's 20 MW regulation plants (Stephentown NY, Hazle PA); Amber Kinetics' multi-hour steel flywheels (unusual for the category); UPS bridging (Piller, Active Power); fusion-experiment and rail pulse power.

## Economic profile
Flywheels are a niche, profitable power-quality business rather than an energy-storage market: data centers, microgrids, and industrial pulse loads pay for cycle life and reliability that batteries can't match. Every attempt to push flywheels into hours-long duty has failed on $/kWh; the survivors sell $/kW and durability.

## Further reading

[Flywheel Energy Storage Systems (Beacon Power)](https://beaconpower.com/) · [U.S. DOE Energy Storage Handbook (Sandia National Laboratories)](https://www.sandia.gov/ess/publications/doe-oe-resources/eshb)
