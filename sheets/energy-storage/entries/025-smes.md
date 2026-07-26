---
number: 25
name: Superconducting Magnetic Storage (SMES)
part: 6
group: Electrical
roles: [anc]
duration: [min]
rte: vhigh
cost: high
maturity: rd
---

## Description
SMES stores energy as circulating current in a superconducting coil. There are no moving parts and no chemistry, just a persistent magnetic field. Discharge is instantaneous, and full power reversal takes milliseconds, faster than any other storage. The catch is that the coil must be held at cryogenic temperature forever. Refrigeration overhead, magnet cost, and structural forces have kept SMES confined to small, specialized, seconds-scale duty despite half a century of development.

## Strengths and weaknesses
SMES is the fastest, most cycle-proof storage that exists, with 95%+ instantaneous efficiency, and it is ideal for bridging sub-second power quality events. The weaknesses: energy density is dismal, and scaling up means storing dangerous amounts of magnetic energy; the cryogenics consume standing power, which wrecks net efficiency at any real duty cycle; superconductor and magnet costs are extreme; and cheaper flywheels, capacitors, and batteries have progressively absorbed every historical niche.

## When to use
There is almost no commercial case for SMES today. Consider it only for sub-second power-quality duty where nothing else responds fast enough: millisecond ride-through at a fab-class critical load, or pulsed power for research. Even there, price flywheels and supercapacitors first, since they have absorbed nearly every historical SMES niche at a fraction of the cost. Treat the field as an option on cheap REBCO tape: if fusion-magnet demand collapses HTS costs, revisit SMES for grid inertia and pulse loads. For any energy-holding duty beyond seconds, the cryogenic standing losses disqualify it outright.

## Examples
1–10 MJ power-quality units historically deployed at semiconductor fabs and paper mills (American Superconductor lineage), lab-scale HTS-coil demos in Japan, Korea, and China; occasional fusion-adjacent pulsed-power studies.

## Economic profile
Commercially dormant: the technology survives as a research field waiting on cheap high-temperature superconductor tape. If REBCO tape costs collapse (fusion-magnet demand could drive that), niche SMES could re-emerge for grid inertia and pulse loads. This is an option-value story, not a market today.

## Further reading

[Superconducting Magnetic Energy Storage Overview (UN Climate Technology Centre)](https://www.ctc-n.org/technologies/superconducting-magnetic-energy-storage) · [Grid-Scale SMES with 2G-HTS Technology (OSTI / DOE)](https://www.osti.gov/biblio/1854334)
