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
Position control without feedback: a toothed rotor snaps between discrete magnetic detents — typically 200 per revolution, microstepped finer — so counting pulses is knowing position. The stepper is open-loop positioning made trivially cheap, which is why it runs essentially every 3D printer, desktop CNC, camera stage, and lab automation axis on earth. Closed-loop variants (add an encoder) fix the classic lost-step failure at modest cost.

## Strengths and weaknesses
Dirt cheap, dead simple to control, full torque at standstill, and repeatable positioning with zero sensors. Weaknesses: torque collapses with speed; it draws full current while holding still (hot and inefficient); missed steps under overload are silent position errors; resonance bands cause vibration; and torque density is poor — steppers position light loads, they don't power limbs.

## When to use
Pick a stepper when the load is light and predictable, speeds stay in the low hundreds of RPM, and the whole axis must land under ~$30: instrument stages, syringe pumps, tool positioners, printer-class motion where full holding torque at standstill is a feature. Add an encoder (closed-loop variants) when a missed step would matter but the budget still can't reach a servo. Avoid it wherever the load can vary or collide — lost steps fail silently — and wherever watts or heat matter, since it draws full current doing nothing; above that line a BLDC servo axis is the answer, and for powered limbs the stepper was never a candidate.

## Examples
Every FDM 3D printer axis (NEMA 17 as a de facto standard), syringe pumps and lab robots, pick-and-place machines, telescope mounts; hybrid closed-loop steppers (ClearPath, cheap Chinese servo-steppers) eating the low-end servo market.

## Economic profile
The cheapest precision positioning per axis in existence — $5–20 motors, $2 drivers — with a vast commodity ecosystem. In robotics proper it is confined to instrument axes and tooling, but as the cost floor it disciplines pricing for everything above it: any servo axis must justify its premium against a $15 stepper that already does open-loop positioning.

## Suppliers
[STEPPERONLINE](https://www.omc-stepperonline.com/) — commodity NEMA steppers at volume · [Teknic](https://teknic.com/) — ClearPath closed-loop servo-steppers

## Further reading

[Stepper Motor Basics (Oriental Motor)](https://www.orientalmotor.com/stepper-motors/technology/stepper-motor-basics.html) · [Control of Stepping Motors: A Tutorial (University of Iowa)](https://homepage.divms.uiowa.edu/~jones/step/)
