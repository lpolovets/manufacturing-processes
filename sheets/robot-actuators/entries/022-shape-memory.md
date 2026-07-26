---
number: 22
name: Shape-Memory Alloys (SMA)
part: 7
group: Artificial muscle
applications: [soft, prec, mobile]
density: high
backdrive: poor
precision: coarse
cost: low
---

## Description
Metal that remembers: nitinol wire, deformed when cool, snaps back to its trained shape when heated through its phase transition — contracting ~4–5% like a muscle fiber, silently, with no motor, gear, or magnet. Work density per gram is spectacular; a hair-thin wire lifts hundreds of grams. Heating is trivially done with current through the wire itself, making SMA the simplest possible electric "muscle": two wires and physics.

## Strengths and weaknesses
Extraordinary force per mass, silent and vibration-free, intrinsically compliant, cheap wire, no mechanism at all. Weaknesses: it is a thermal engine and inherits thermal sins — efficiency of ~1–3%, cooling-limited bandwidth (hertz at best, less when insulated), hysteresis that mocks precise control, fatigue that shortens life at high strain, and continuous holding costs continuous heat. SMA twitches beautifully and cycles poorly.

## When to use
Use SMA where the stroke is sub-millimeter, the duty is light, and silence, mass, or mechanism-free simplicity is decisive: camera modules, micro-valves, deployables and latches that fire rarely, medical mechanisms where a motor won't fit. Keep strain low (well under the 4–5% maximum) and cycles gentle and the wire lasts millions of actuations for pennies. Avoid it for anything continuous, fast, or efficient — 1–3% efficiency, cooling-limited bandwidth of a hertz or so, and heat-to-hold make it wrong for limbs and wrong for sustained duty; at that point a voice coil or micro gearmotor is the honest answer, and any pitch promising limb-scale SMA muscle is fighting thermodynamics.

## Examples
Smartphone camera OIS/autofocus (Cambridge Mechatronics — SMA's genuine volume win, billions of units), medical stents and guidewires (superelastic cousins), aerospace deployables and louvers (Boeing's morphing chevrons), micro-grippers, animatronic and soft-robot research.

## Economic profile
Where strokes are sub-millimeter and duty light, SMA already won at consumer volume — the camera-module industry proves the wire can be pennies and reliable for millions of cycles at tiny strain. As a limb-scale muscle, thermodynamics is the unmovable wall. Diligence rule: trust SMA pitches at millimeter stroke and hertz bandwidth; question everything bigger and faster.

## Suppliers
[Cambridge Mechatronics](https://www.cambridgemechatronics.com/) — SMA actuators at smartphone volume · [Memetis](https://www.memetis.com/) — SMA micro-valves and miniature actuators

## Further reading

[AI Control Methodologies for SMA Actuators: A Systematic Review (Micromachines via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12300600/) · [A Physics-Based Model of Hysteresis in SMA Wire Transducers (arXiv)](https://arxiv.org/abs/2305.13928)
