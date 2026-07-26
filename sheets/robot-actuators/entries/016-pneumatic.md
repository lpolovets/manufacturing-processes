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
Solenoid valves switch compressed air at 6–8 bar into cylinders, which gives fast, simple, two-position actuation for pennies per cycle. Pneumatics is the automation most people never see: industry has vastly more pneumatic axes than servo axes. They do the clamping, ejecting, sorting, and pick-and-place that never needs a controlled trajectory, just "out" and "back" against mechanical stops.

## Strengths and weaknesses
Pneumatics is very cheap and fast (full stroke in tens of milliseconds), intrinsically compliant and overload-safe, clean enough for food and pharma, and explosion-proof by nature. The weaknesses follow from air's compressibility, which makes mid-stroke position control hard enough that it's rarely done in practice; pneumatic axes run to stops instead. System efficiency is poor, roughly 10–20% from compressor to work. Air prep (drying, filtering) and leaks are permanent costs in a factory. Force density is modest at safe pressures.

## When to use
Use pneumatics for binary motion against mechanical stops at high cycle rates: clamp, eject, sort, gripper open and close. It fits wherever plant air already exists and the axis has to cost tens of dollars, survive washdown, or sit in an explosive atmosphere. Compressibility helps at the gripper, where it gives intrinsic compliance and overload safety, and hurts everywhere else. Avoid pneumatics for mid-stroke position or force control, for anything untethered (the compressor is part of the system), and on energy-audited lines where 10–20% wall-to-work efficiency draws scrutiny. If the motion needs a trajectory rather than two endpoints, a servo-electric gripper or axis is the upgrade.

## Examples
SMC and Festo's entire catalogs (a $10B+ duopoly-adjacent industry), every injection-molding sprue picker and packaging line, gripper open/close on countless robot arms, soft-robotics research (air is the usual power source for soft actuators; see the McKibben entry).

## Economic profile
Pneumatics has the lowest cost per motion in automation, and the compressor's inefficiency is hidden in the plant utility bill. Robotics uses pneumatics at the periphery (grippers, tooling) rather than in joints. One trend worth watching: as factories electrify end-of-arm tooling for controllability, cheap servo grippers are taking share from pneumatic grippers, and both SMC and Festo now sell electric axes defensively.

## Suppliers
[SMC](https://www.smcworld.com/) — the pneumatics volume leader · [Festo](https://www.festo.com/) — pneumatic and electric automation components

## Further reading

[4 Basic Pneumatic Circuits (Power & Motion)](https://www.powermotiontech.com/fluid-power-basics/pneumatics/article/21155572/automationdirect-4-basic-pneumatic-circuits) · [Industrial Pneumatics: Operational Essentials and Specification Tips (Power & Motion)](https://www.powermotiontech.com/pneumatics/pneumatic-cylinder-actuators/article/55320290/rs-formerly-allied-electronics-automation-industrial-pneumatics-operational-essentials-and-specification-tips)
