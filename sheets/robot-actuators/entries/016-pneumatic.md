---
number: 16
name: Pneumatic Cylinders & Valves
part: 4
group: Fluid power
applications: [arm, soft]
density: med
backdrive: exc
precision: coarse
cost: vlow
---

## Description
Factory air made motion: compressed air at 6–8 bar switched by solenoid valves into cylinders, delivering fast, simple, two-position actuation for pennies per cycle. Pneumatics is the invisible automation majority — vastly more pneumatic axes exist in industry than servo axes — doing the clamping, ejecting, sorting, and pick-and-place that never needs a controlled trajectory, just "out" and "back" against mechanical stops.

## Strengths and weaknesses
Dirt cheap, fast (full stroke in tens of milliseconds), intrinsically compliant and overload-safe, clean enough for food and pharma, explosion-proof by nature. Weaknesses: air's compressibility makes mid-stroke position control a control-theory hobby, not a practice — pneumatics goes to stops; system efficiency is atrocious (~10–20% from compressor to work); air prep (drying, filtering) and leaks are perpetual factory taxes; and force density is modest at safe pressures.

## Examples
SMC and Festo's entire catalogs (a $10B+ duopoly-adjacent industry), every injection-molding sprue picker and packaging line, gripper open/close on countless robot arms, soft-robotics research (air is the native power of soft actuators — see McKibben entry).

## Economic profile
The lowest cost-per-motion in automation, with the compressor's inefficiency hidden in the plant utility bill. Robotics uses pneumatics at the periphery (grippers, tooling) rather than in joints. The strategic footnote: as factories electrify end-of-arm tooling for controllability, the pneumatic gripper's dominance is being nibbled by cheap servo grippers — SMC and Festo both now sell electric axes defensively.

## Suppliers
[SMC](https://www.smcworld.com/) — the pneumatics volume leader · [Festo](https://www.festo.com/) — pneumatic and electric automation components
