---
number: 11
name: Welding & Cutting Torches
part: 5
group: Process tools
tasks: [proc, metal]
versatility: narrow
reliability: proven
maturity: std
cost: med
---

## Description
The end effector that built robotic automation: MIG/MAG torches, spot-weld guns, laser heads, and plasma cutters at the wrist made welding the first and still one of the largest robot applications on earth. The torch is a process instrument, not a gripper — wire feed, shielding gas, current waveform, and seam tracking all flow through it — and the surrounding ecosystem (positioners, cleaners, calibration, offline programming) is what a "welding robot" actually is.

## Strengths and weaknesses
Decades-refined reliability in a brutal environment (spatter, heat, fumes); process quality beyond hand-welding consistency; complete vendor ecosystems from torch to software. Weaknesses: spatter and tip wear make consumables (tips, nozzles, liners) a perpetual cost; torch collision and calibration drift silently ruin seams; each process (MIG, TIG, spot, laser) is its own product line and skill base; and programming/fixturing effort — not the torch — remains the adoption bottleneck that cobot welding startups attack.

## When to use
Automate the torch when part volume and seam repeatability can repay cell engineering — body-in-white, EV battery trays, recurring fab-shop weldments — or when the welder shortage makes a $120k cobot welding package cheaper than an unfillable position; judge feasibility on fixturing and programming effort, not torch capability, because that is where projects die. Match process to product line deliberately (MIG for job shops, spot for sheet assemblies, laser for battery and precision work). Avoid it for true one-offs with heavy fixturing burden unless modern cobot software genuinely closes the programming gap for your parts — there a human welder remains the right tool.

## Examples
Fronius, Lincoln, ESAB, and Binzel robotic torch lines; resistance spot-guns by the hundred thousand in every car body shop; laser welding heads (IPG, Trumpf) on EV battery trays; cobot welding packages (Vectis, Hirebotics, Cobot Systems) bringing torches to job shops.

## Economic profile
A mature, consumables-rich market riding two growth waves: EV battery and body welding, and the welder-shortage-driven cobot welding boom bringing automation to five-person fab shops. The torch itself is oligopoly-stable; the venture action is in the software and fixturing wrapper that makes a $120k welding cell deployable by a shop with no robotics engineer.

## Further reading

[Robotic Welding Systems Overview (Fronius)](https://www.fronius.com/en/welding/products/robotic-welding) · [Active Visual Sensing Methods for Robotic Welding: Review and Tutorial (arXiv)](https://arxiv.org/abs/2405.00685)
