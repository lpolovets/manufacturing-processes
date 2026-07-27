---
number: 22
name: Hybrid rocket motor
part: 3
group: Hybrid motors
regimes: [launch, space, super]
thrust: [small, med]
isp: low
maturity: common
cost: low
---

## Description
A hybrid rocket stores fuel as a solid grain and oxidizer as a liquid or gas, usually HTPB rubber or paraffin with nitrous oxide or liquid oxygen. Because the two are separated until the oxidizer valve opens, the motor throttles, shuts down, and restarts, and neither component alone is an explosive. Combustion happens in a boundary-layer diffusion flame along the fuel surface, and that is also the concept's central limitation: regression rate is low, so a simple cylindrical port gives too little thrust and designers resort to multi-port grains or high-regression paraffin fuels.

## Strengths and weaknesses
Safety and controllability are the selling points. Hybrids can be shipped and handled without explosive classification, they throttle and shut down, and a failure mode that destroys a solid motor usually just extinguishes a hybrid. Cost is low. The weaknesses have kept them niche: combustion efficiency is 90–96% rather than 98%+, the oxidizer-to-fuel ratio shifts as the port opens up, which moves Isp during the burn, and multi-port grains leave unburned slivers that cut mass fraction. Nitrous oxide is also less benign than its reputation, as the 2007 Scaled Composites accident showed.

## When to use
Pick a hybrid when safety, throttling, and low cost matter more than performance: sounding rockets, target vehicles, student and small commercial launchers, and suborbital passenger vehicles. If maximum performance or mass fraction is the requirement, use a solid motor for simplicity or a liquid for performance. If the vehicle needs many restarts and precise total impulse, a liquid bipropellant is more predictable. A useful rule of thumb: hybrids win where the customer's insurance and range-safety paperwork is a bigger obstacle than the last 10% of Isp.

## Key numbers
Isp 250–300 s vacuum with N₂O/HTPB, up to about 320 s with LOX and paraffin · combustion efficiency 90–96% · throttle range typically 3:1 or better · paraffin fuels regress roughly 3–4× faster than HTPB · thrust 1–300 kN in fielded designs.

## Examples
SpaceShipOne and SpaceShipTwo (HTPB and later nylon with N₂O), Gilmour Space's Eris launcher, HyImpulse's paraffin-fueled vehicles, Nammo's hybrid sounding rockets, and a long line of university and amateur programs where the safety case is the deciding factor.

## Economic profile
Hybrids are the cheapest route to a working rocket for a small team, which is why they dominate the student and startup end of the market and keep reappearing in commercial launch attempts. They have never displaced solids or liquids at scale because the performance gap costs payload, and payload is what customers pay for. The realistic commercial niche is suborbital and small-launch applications where handling cost and range approval dominate the business model.

## Further reading

[Hybrid Rocket Propulsion for Sounding Rocket Applications (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/19920013360) · [Stanford Plasma Physics Laboratory (Stanford University)](https://web.stanford.edu/group/pdl/)
