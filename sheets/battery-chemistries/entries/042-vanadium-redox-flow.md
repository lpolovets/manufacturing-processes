---
number: 42
name: Vanadium Redox Flow (VRFB)
part: 6
group: Redox flow
applications: [grid]
energy: vlow
cycles: vhigh
cost: high
maturity: comm
---

## Description
VRFB is the canonical flow battery. Vanadium ions in sulfuric acid are pumped from tanks through a membrane-divided stack, and vanadium's four oxidation states supply both sides, so electrolyte crossover degrades nothing permanently. Power (stack size) and energy (tank size) scale separately, which makes long durations incrementally cheap. The electrolyte never wears out, so it can be rebalanced, reused, or even leased.

## Strengths and weaknesses
Cycle life is effectively unlimited at full depth of discharge, the system is non-flammable, the electrolyte stays a recoverable asset, and durations of 4–12+ hours scale with tank size. Weaknesses: energy density is low, so footprints are building-scale; round-trip efficiency is ~65–80% after pump losses; vanadium is a price-volatile byproduct commodity that can be half the system cost; and stacks, membranes (Nafion), and plumbing add O&M that lithium doesn't have.

## When to use
Pick VRFB for utility storage cycled hard every day at durations of roughly 6 hours and beyond, where unlimited full-depth cycling, 20-year field data, and a recoverable electrolyte asset justify the footprint and ~65–80% efficiency. Structure the deal with electrolyte leasing so you take vanadium price risk out. Avoid it below ~4 hours or on space-constrained sites, where LFP wins on efficiency and capex. Run the tank-versus-container crossover with current LFP pricing before you commit, because that line moves outward every year.

## Examples
Dalian's 100 MW/400 MWh system and multi-GWh Chinese pipeline (Rongke Power); Sumitomo Electric installations in Japan; Invinity and CellCube commercial fleets; Australian and US utility pilots.

## Economic profile
VRFB is the most bankable non-lithium storage chemistry, and it has real 20-year field data behind it. Economics hinge on the vanadium price and on durations long enough that tank-scaling beats adding LFP containers, and LFP keeps pushing that crossover outward. Electrolyte leasing (separating the commodity from the machine) is the financing innovation to watch. China's state-driven deployments dominate current volume.

## Further reading

[Vanadium Redox Flow Battery Cost and Performance (PNNL)](https://www.pnnl.gov/projects/esgc-cost-performance/vanadium-redox-flow-battery) · [Redox Species of Redox Flow Batteries: A Review (Molecules via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6332057/)
