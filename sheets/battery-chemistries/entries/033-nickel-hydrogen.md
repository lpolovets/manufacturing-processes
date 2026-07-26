---
number: 33
name: Nickel-Hydrogen (Ni-H2)
part: 4
group: Nickel
applications: [aero, grid]
energy: low
cycles: vhigh
cost: med
maturity: comm
---

## Description
A hybrid of battery and fuel cell: a nickel positive electrode paired with a hydrogen gas electrode, the hydrogen stored at pressure inside the cell vessel itself. Charging generates hydrogen; discharging consumes it — the "electrode" cannot wear out because it is a gas. This gave Ni-H2 the longest demonstrated cycle life of any battery, which is why it powered the Hubble Space Telescope and the ISS for decades of daily orbital cycling.

## Strengths and weaknesses
Cycle life beyond 30,000 deep cycles; tolerant of overcharge and reversal; state of charge readable from gas pressure; wide temperature range; no fire risk. Weaknesses: low volumetric energy density (pressure vessels are mostly space); historically fabulously expensive with aerospace-grade Inconel vessels; platinum catalysts in classic designs; self-discharge from hydrogen leakage.

## When to use
Pick Ni-H2 when the duty is decades of daily deep cycles with zero fire risk and floor space is nearly free — the EnerVenue-style 20-to-30-year stationary bet, or legacy spacecraft where it is already qualified. Underwrite it on levelized cost across 30,000 cycles, not on $/kWh, and stress-test the capex assumptions on vessel manufacturing. Avoid it wherever volumetric footprint or upfront cost binds, in short-lived projects that never reach the cycle count, and in new spacecraft, where Li-ion has taken the design wins.

## Examples
Hubble, ISS, and GEO communication satellites (largely superseded by Li-ion in new spacecraft); EnerVenue's terrestrial reboot using cheap vessels and catalyst substitutions for stationary storage.

## Economic profile
In space it was cost-irrelevant; on the ground the entire bet (EnerVenue) is that stripping aerospace exotica leaves a ~30,000-cycle battery cheap enough to amortize better than LFP over 20+ years. The levelized-cost argument is genuinely interesting; the risk is capex per kWh and volumetric footprint against relentlessly cheapening lithium.

## Further reading

[Hubble Battery Tech Holds Power on Earth (NASA Spinoff)](https://spinoff.nasa.gov/Hubble_Battery_Tech_Holds_Power_on_Earth) · [Overview of the Design, Development, and Application of Nickel-Hydrogen Batteries (NASA NTRS)](https://ntrs.nasa.gov/citations/20030062140)
