---
number: 20
name: Lithium-Ion Grid Storage (Incumbent Baseline)
part: 5
group: Electrochemical
roles: [shift, anc]
duration: [hrs]
rte: vhigh
cost: med
maturity: mature
---

## Description
This is the technology every other entry in this sheet is measured against: containerized LFP battery systems, deployed in gigawatt-hour blocks, with costs that keep falling because EV factories keep scaling. Li-ion took frequency regulation, then 1-hour, then 4-hour markets, and is now bidding 8-hour projects. Its main weakness: energy capacity and power are coupled, so every added hour of duration means buying more cells. That's the weakness every long-duration storage technology is trying to exploit. (Chemistry detail lives in the Battery Chemistries sheet.)

## Strengths and weaknesses
Li-ion offers 88–92% round-trip efficiency, millisecond response, bankable performance data, an enormous supply chain, and fast deployment (months instead of the years a mechanical system takes). Weaknesses: $/kWh stays roughly flat with duration, so long duration gets linearly expensive; calendar and cycle fade force augmentation spend; fire codes complicate urban siting; and a 20-year asset life trails the 40–80 years of mechanical rivals.

## When to use
Default to Li-ion for everything up to ~8 hours (arbitrage, ancillary services, capacity, hybrid solar) whenever deployment speed, bankability, and 88–92% round-trip efficiency matter. Assume the viable duration ceiling moves right every year, and stress-test any competitor against next year's LFP price, not today's. Plan augmentation spend into the pro forma from day one. Look elsewhere if duration runs past 10 hours or multi-day (flow, iron-air, CAES, and thermal systems decouple energy from power), if fire codes block dense urban or indoor siting (zinc and sodium chemistries), or if the asset must serve 40+ years without repowering (mechanical systems).

## Examples
Tesla Megapack fleets (Moss Landing 3 GWh, Hornsdale), CATL EnerOne/TENER, Fluence, Sungrow — global installs passed ~350 GWh cumulative with China deploying the majority.

## Economic profile
System prices fell below $150/kWh in 2024–25 (China turnkey bids under $100), which resets the bar for every challenger annually. The correct planning assumption is that Li-ion owns everything up to the crossover duration and that the crossover keeps moving right. If an LDES business case doesn't model continued Li-ion price declines, it's not a credible business case.

## Further reading

[Batteries and Secure Energy Transitions (IEA)](https://www.iea.org/reports/batteries-and-secure-energy-transitions) · [Energy Storage Cost and Performance Database (PNNL / DOE Energy Storage Grand Challenge)](https://www.pnnl.gov/esgc-cost-performance)
