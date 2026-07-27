---
number: 33
name: Ring laser gyro INS
part: 6
group: Inertial
functions: [nav]
jamming: strong
cost: high
---

## Description
A ring laser gyro sends two laser beams around a closed triangular or square cavity in opposite directions. Rotation makes one path effectively longer than the other, and the resulting beat frequency between the counter-propagating beams is directly proportional to rotation rate. Three of these plus three accelerometers form a navigation-grade inertial measurement unit. There are no moving parts except a small dither mechanism that keeps the beams from locking together at very low rotation rates, and the output is inherently digital, which is why RLGs displaced spinning-mass gyros in aircraft from the 1980s onward.

## Strengths and weaknesses
Navigation-grade performance is the point: bias stability around 0.001–0.01 degrees per hour gives position drift of roughly one nautical mile per hour of free inertial flight, which is good enough to cross an ocean. RLGs turn on quickly, have excellent scale-factor stability and a very wide dynamic range, and last tens of thousands of hours. The weaknesses are size, cost, and export control. A navigation-grade unit is the size of a shoebox and costs $50k–200k, the optical cavity requires precision machining and ultra-clean assembly, and the whole category is tightly controlled under Wassenaar and ITAR.

## When to use
Pick an RLG inertial unit for aircraft, ships, and vehicles that need to navigate accurately for hours without external references. Below that requirement, a fiber-optic gyro unit is cheaper and quieter, and a MEMS unit is cheaper again by two orders of magnitude with correspondingly worse drift. The design rule is to work backwards from allowed position error at the end of the GNSS-denied period: one nautical mile per hour means a four-hour denied flight ends four miles off, which may be fine for an aircraft and useless for a weapon.

## How it is defeated
There is no remote attack on an inertial unit — it senses only its own motion, which is why it anchors every jam-resistant navigation architecture. The vulnerability is intrinsic: drift accumulates without bound, so a long enough denied period defeats it regardless of quality. Temperature changes and vibration degrade bias stability from the specification values. And an inertial unit initialized with a spoofed GNSS position starts from the wrong place and stays wrong, which is why initialization integrity matters as much as gyro quality.

## Examples
Honeywell's HG9900 and the LN-100 family from Northrop Grumman, the inertial reference systems on essentially every airliner since the 757, the navigation units on most Western combat aircraft, and shipboard inertial navigation on submarines and surface combatants.

## Economic profile
The market is mature and concentrated among Honeywell, Northrop Grumman, Safran, and a few others, with high barriers from both manufacturing precision and export control. Prices have not fallen much, because the technology is at its practical limit and volumes are modest. The competitive pressure comes from below: fiber-optic gyros have taken the mid-range, and MEMS units keep improving. RLGs remain dominant where the highest performance in a rugged package is required and cost is secondary.

## Further reading

[On the Calculation of an Inertial Navigation System (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/19670014147)
