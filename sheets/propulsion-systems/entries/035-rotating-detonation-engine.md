---
number: 35
name: Rotating detonation engine
part: 6
group: Detonation cycles
regimes: [super, hyper, launch, space]
thrust: [small, med]
isp: low
maturity: emerging
cost: med
---

## Description
A rotating detonation engine sustains one or more detonation waves travelling continuously around an annular combustion chamber at 1,500–2,500 m/s. Fresh propellant is injected axially at the closed end, the wave passes through it, and the burned gas exhausts. Detonation raises pressure across the wave instead of dropping it, so the cycle approximates constant-volume rather than constant-pressure combustion, which is thermodynamically more efficient. The theoretical gain over a conventional engine is 5–15% in specific impulse, and because the pressure rise happens in the combustor, the feed system can run at lower pressure for the same chamber conditions.

## Strengths and weaknesses
Pressure gain combustion is a genuine efficiency improvement and it also shortens the combustor, which cuts engine length and mass. Lower required feed pressure means lighter pumps and tanks. The problems are practical. The chamber sees enormous oscillating heat flux and structural loading at kilohertz frequencies, injector design has to prevent the wave from propagating back upstream, and measured performance in most tests has fallen short of the theoretical gain. Integrating an RDE with a turbine is harder still, because turbines dislike the unsteady flow, and that is where most of the aviation payoff would come from.

## When to use
Consider an RDE where the 5–15% Isp gain and shorter combustor matter more than development risk: upper stages, in-space engines, and hypersonic vehicles where chamber length is a real constraint. If you need to fly soon, use a conventional engine — no RDE has flown operationally. Japan's 2021 sounding-rocket flight demonstrated an RDE producing thrust in space, which is the current high-water mark. For program planning, treat the thermal management of the chamber and the injector durability as the critical path, not the detonation physics, which is well characterized.

## Key numbers
Detonation wave speed 1,500–2,500 m/s, circulating at 1–20 kHz · theoretical Isp gain 5–15% over constant-pressure combustion · combustor length roughly one-third of a conventional chamber · JAXA flew an RDE on the S-520-31 sounding rocket in 2021 · NASA has ground-tested a 3D-printed RDRE at over 26 kN.

## Examples
NASA Marshall's Rotating Detonation Rocket Engine testing with GRCop-42 additive chambers, JAXA's 2021 flight demonstration, the Air Force Research Laboratory and DARPA Gambit programs, Venus Aerospace's RDRE flight test, and academic programs at UW, Purdue, and AFIT.

## Economic profile
RDEs are the most-funded advanced combustion concept at the moment, with money from defense research offices, NASA, and a handful of startups. Additive manufacturing is what made the current wave possible, since printed chambers with integral cooling channels made iteration cheap enough to actually run experiments. The commercial question is whether a 5–15% gain justifies replacing a qualified engine, and the honest answer is that it usually does not on its own; the concept needs a mission where combustor length or feed pressure is the binding constraint.

## Further reading

[NASA Validates Revolutionary Propulsion Design for Deep Space Missions (NASA Marshall)](https://www.nasa.gov/centers-and-facilities/marshall/nasa-validates-revolutionary-propulsion-design-for-deep-space-missions/) · [Rotating Detonation Rocket Engine Concept Development (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/20240001052)
