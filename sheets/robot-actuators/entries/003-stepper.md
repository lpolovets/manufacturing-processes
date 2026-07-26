---
number: 3
name: Stepper Motor
part: 1
group: Electric rotary
applications: [prec, arm]
density: low
backdrive: poor
precision: fine
cost: vlow
---

## Description
A stepper gives you position control without feedback. A toothed rotor snaps between discrete magnetic detents (typically 200 per revolution, microstepped finer), so counting pulses tells you where the rotor is. Open-loop positioning this cheap is why steppers run essentially every 3D printer, desktop CNC, camera stage, and lab automation axis in use. Closed-loop variants add an encoder and fix the classic lost-step failure for modest extra cost.

## Strengths and weaknesses
Steppers are very cheap, simple to control, hold full torque at standstill, and position repeatably with no sensors. Weaknesses: torque falls off quickly with speed, and the motor draws full current while holding still, which makes it hot and inefficient. Missed steps under overload produce position errors with no warning, resonance bands cause vibration, and torque density is poor. Steppers position light loads; they don't power limbs.

## When to use
Pick a stepper when the load is light and predictable, speeds stay in the low hundreds of RPM, and the whole axis has to land under roughly $30. That covers instrument stages, syringe pumps, tool positioners, and printer-class motion where full holding torque at standstill is useful. If a missed step would matter but the budget still can't reach a servo, use a closed-loop variant with an encoder. Avoid steppers wherever the load can vary or collide, because lost steps fail silently, and wherever watts or heat matter, because the motor draws full current doing nothing. Above that line, use a BLDC servo axis. For powered limbs, a stepper was never a candidate.

## Examples
Every FDM 3D printer axis (NEMA 17 as a de facto standard), syringe pumps and lab robots, pick-and-place machines, telescope mounts; hybrid closed-loop steppers (ClearPath, cheap Chinese servo-steppers) eating the low-end servo market.

## Economic profile
Steppers are the cheapest precision positioning per axis available, at $5–20 for the motor and $2 for the driver, with a large commodity ecosystem behind them. In robotics proper they're confined to instrument axes and tooling, but they set the cost floor for everything above them: any servo axis has to justify its premium against a $15 stepper that already does open-loop positioning.

## Suppliers
[STEPPERONLINE](https://www.omc-stepperonline.com/) — commodity NEMA steppers at volume · [Teknic](https://teknic.com/) — ClearPath closed-loop servo-steppers

## Further reading

[Stepper Motor Basics (Oriental Motor)](https://www.orientalmotor.com/stepper-motors/technology/stepper-motor-basics.html) · [Control of Stepping Motors: A Tutorial (University of Iowa)](https://homepage.divms.uiowa.edu/~jones/step/)
