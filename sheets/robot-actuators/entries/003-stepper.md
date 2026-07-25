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

## Examples
Every FDM 3D printer axis (NEMA 17 as a de facto standard), syringe pumps and lab robots, pick-and-place machines, telescope mounts; hybrid closed-loop steppers (ClearPath, cheap Chinese servo-steppers) eating the low-end servo market.

## Economic profile
The cheapest precision positioning per axis in existence — $5–20 motors, $2 drivers — with a vast commodity ecosystem. In robotics proper it is confined to instrument axes and tooling, but as the cost floor it disciplines pricing for everything above it: any servo axis must justify its premium against a $15 stepper that already does open-loop positioning.

## Suppliers
[STEPPERONLINE](https://www.omc-stepperonline.com/) — commodity NEMA steppers at volume · [Teknic](https://teknic.com/) — ClearPath closed-loop servo-steppers
