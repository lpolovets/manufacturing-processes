---
number: 21
name: Flow Batteries (Grid View)
part: 5
group: Electrochemical
roles: [shift, firm]
duration: [hrs, days]
rte: high
cost: med
maturity: comm
---

## Description
Flow batteries are the electrochemical way to decouple duration from power: energy lives in electrolyte tanks and power in the stack, so you add hours by adding cheap liquid rather than cells. Vanadium systems dominate deployments (China is building at gigawatt-hour scale), while zinc-bromine, all-iron, and organic chemistries chase lower electrolyte cost. Unlimited cycle life at full depth of discharge makes flow a natural choice for deep daily cycling. (Chemistry detail lives in the Battery Chemistries sheet.)

## Strengths and weaknesses
The strengths: duration scales with tank size, cycle life runs past 15,000 cycles without fade, the systems are non-flammable, and the electrolyte retains asset value (vanadium can be leased). Weaknesses: round-trip efficiency is 65–80% after pumping losses; stacks, membranes, and plumbing keep system $/kWh above lithium at short durations; power density is low, so footprint is building-scale; and Western vendors remain subscale while Chinese state-backed projects set the price benchmarks.

## When to use
Choose flow for 8–12 hour duty cycled deeply every day: solar-heavy grids with evening ramps, microgrids, and fire-sensitive or indoor sites. In those cases, 15,000+ cycles without fade or augmentation and a 20+ year electrolyte life beat lithium's repowering math. Lease the vanadium to neutralize price swings. Insist on fleet operating data (increasingly available from China's GWh-scale projects) before banking stack O&M assumptions. Avoid it below ~6 hours, where LFP wins outright, on footprint-constrained sites, and for multi-day firming, where iron-air's $20/kWh energy capacity is the better fit.

## Examples
Dalian 100 MW/400 MWh VRFB and China's multi-GWh pipeline (Rongke, state grid tenders), Invinity, CellCube, ESS Inc (iron), Sumitomo Electric fleets in Japan.

## Economic profile
Flow is the crossover argument in miniature: it loses to lithium below ~6 hours and wins on paper above ~8–10 hours, because tank costs dominate at long durations. That win depends on stack costs and O&M behaving as modeled. Vanadium price volatility can swing system cost 30%; electrolyte leasing is the standard way to manage that risk. Bankability is arriving via Chinese fleet data rather than Western projects.

## Further reading

[Redox Flow Batteries, Energy Storage Handbook Ch. 6 (Sandia)](https://www.sandia.gov/app/uploads/sites/163/2022/03/ESHB_Ch6_RedoxFlow_Small.pdf) · [Flow Batteries Technology Strategy Assessment (DOE Storage Innovations 2030)](https://www.energy.gov/sites/default/files/2023-07/Technology%20Strategy%20Assessment%20-%20Flow%20Batteries.pdf)
