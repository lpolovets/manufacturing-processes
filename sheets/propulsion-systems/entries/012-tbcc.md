---
number: 12
name: Turbine-based combined cycle
part: 2
group: Combined cycle
regimes: [sub, super, hyper]
thrust: [med, large]
isp: vhigh
maturity: rd
cost: high
---

## Description
A turbine-based combined cycle uses a gas turbine from standstill to about Mach 3, then transitions to a ramjet or dual-mode ramjet flowpath for higher speeds. The point is to get horizontal takeoff and reusable operation from a runway without the boosters that ramjets and scramjets otherwise require. Architectures split into two families: over-under, where turbine and ram flowpaths sit in separate ducts with variable inlet and nozzle doors, and turbine-based designs that pre-cool or bypass the turbine so one flowpath serves both. The transition region around Mach 2.5–3.5, called the thrust gap, is where both cycles are weak and where these programs usually get into trouble.

## Strengths and weaknesses
Reusability and runway operation are the whole argument. A TBCC vehicle can take off, accelerate to hypersonic cruise, and land, which is what a reconnaissance or fast-response aircraft actually needs. It also avoids the cost and range constraints of expendable boosters. The problems are weight and the thrust gap. Carrying two propulsion systems, plus variable inlets, doors, and a thermal management system, eats most of the payload fraction. Turbine materials also limit inlet temperature, so either the turbine has to be exotic or the air has to be pre-cooled, which adds a heat exchanger with its own mass and failure modes.

## When to use
Consider TBCC only for a reusable vehicle that must operate from a runway across the full Mach 0–6 range: high-speed reconnaissance, rapid-response strike aircraft, or the first stage of a two-stage-to-orbit system. If the vehicle is expendable, a rocket booster into a ramjet is far simpler and much cheaper. If the requirement stops at Mach 4, a modified turbojet with fuel pre-cooling can reach it without a second flowpath, which is the approach several Mach 4–5 aircraft programs are taking. Assume the thrust gap is the program's central technical risk and design the mission around a shallow acceleration through it.

## Key numbers
Turbine operation to about Mach 2.5–3.5, ram operation from Mach 3 to 6+ · thrust gap centered near Mach 3 · SABRE's pre-cooler demonstrated cooling airflow from over 1,000 °C to ambient in under 0.05 seconds · no operational vehicle has yet flown a full TBCC transition.

## Examples
The SR-71's J58 is the closest thing to an operational example, since it bypassed compressor air around the core to behave increasingly like a ramjet above Mach 2. Modern efforts include Reaction Engines' SABRE and its pre-cooler (the company entered administration in 2024), Hermeus Chimera, DARPA's Falcon and Mode Transition programs, and China's reported TRRE work.

## Economic profile
TBCC has consumed a lot of money over 60 years and produced one operational aircraft. The economics only close if the vehicle flies often, because reusability is the entire justification, and no market for frequent hypersonic flights currently exists outside of test. That circularity — no vehicle without demand, no demand without a vehicle — has killed most programs. The current crop of startups is attacking it by fielding a Mach 4–5 aircraft first, where a modified turbojet suffices, and treating full TBCC as a later step.

## Further reading

[Overview of the Turbine Based Combined Cycle Discipline (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/20110012002) · [Hypersonics research (NASA Glenn Research Center)](https://www1.grc.nasa.gov/research-and-engineering/hypersonics/)
