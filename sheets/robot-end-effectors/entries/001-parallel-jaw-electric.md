---
number: 1
name: Electric Parallel-Jaw Grippers
part: 1
group: Mechanical grippers
tasks: [pick, asm]
versatility: broad
reliability: proven
maturity: std
cost: med
---

## Description
This is the default robot hand. Two fingers translate in parallel, driven by a servo through a screw or a rack, with programmable stroke, speed, and grip force. Electric actuation adds things a plain two-jaw gripper can't do: force control in software, part detection from motor current, and position feedback that tells you which object was grasped. With task-specific fingertips bolted on, it handles the overwhelming majority of industrial handling that doesn't go to suction.

## Strengths and weaknesses
Programmable force and stroke cover a whole part family without retooling. Self-locking screws hold the part through a power loss. There is no air line, which matters in labs and electronics, and current-based grip detection gives you process feedback for free. On the weak side, two rigid contact lines need reasonable object geometry and pose accuracy, so wide flat objects and soft produce are a poor fit. Speed trails pneumatics, and per-unit cost runs 5–20× the pneumatic equivalent it often replaces.

## When to use
Make it your first candidate for discrete rigid parts when part families vary, when grip force has to be controlled, or when the cell can't use compressed air (labs, electronics, cobot cells, machine tending with SKU churn). Programmable stroke and force cover the variety without finger changeovers, and current-based grip detection comes free. If you're running high-cycle single-part duty, a pneumatic gripper costs a tenth as much, cycles faster, and outlasts it. For wide flat panels, limp goods, and soft produce, use suction or soft fingers instead.

## Examples
Schunk EGP/EGU lines, Robotiq 2F-85/140 (the cobot-era standard), OnRobot RG series, Zimmer electric ranges; Chinese entrants (DH Robotics, Hitbot) compressing prices; nearly every cobot demo ever filmed.

## Economic profile
These are $500–5k products, and they sit at the heart of the cobot accessory boom. Distribution runs through plug-and-play ecosystem certification (UR+), which is the main moat. Chinese vendors have halved street prices in five years. The strategic position is default-choice status: integrators reach for a parallel-jaw gripper first and have to justify anything else, so a vendor's ecosystem position is worth more than its specs.

## Further reading

[Gripper Sizing Assistant (SCHUNK)](https://schunk.com/us/en/digital-tools-services/sizing-assistant-gripping/sizing-assistant-gripping/p/EPIM_ID-66074) · [Robot End Effectors: Uses, Benefits, and Costs (HowToRobot)](https://howtorobot.com/expert-insight/robot-end-effectors)
