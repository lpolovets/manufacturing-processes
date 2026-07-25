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
The default robot hand: two fingers translating in parallel, driven by a servo through a screw or rack, with programmable stroke, speed, and grip force. Electric actuation turned the humble two-jaw gripper into a smart device — grip-by-wire force control, part-detection from motor current, position feedback confirming which object was grasped. With task-specific fingertips bolted on, it handles the overwhelming majority of industrial handling that isn't suction's.

## Strengths and weaknesses
Programmable force and stroke covers part families without retooling; self-locking screws hold parts through power loss; clean (no air) for labs and electronics; current-based grip detection is free process feedback. Weaknesses: two rigid contact lines demand reasonable object geometry and pose accuracy; wide flat objects and soft produce fight it; speed trails pneumatics; and per-unit cost runs 5–20× the pneumatic equivalent it often replaces.

## When to use
Make it the first candidate for discrete rigid parts when part families vary, grip force must be controlled, or the environment bans compressed air — labs, electronics, cobot cells, machine tending with SKU churn — since programmable stroke and force cover variety without finger changeovers, and current-based grip detection comes free. Avoid it on high-cycle single-part duty where a pneumatic gripper at a tenth the price cycles faster and outlasts it, and on wide flat panels, limp goods, and soft produce, where suction or soft fingers are the right reach.

## Examples
Schunk EGP/EGU lines, Robotiq 2F-85/140 (the cobot-era standard), OnRobot RG series, Zimmer electric ranges; Chinese entrants (DH Robotics, Hitbot) compressing prices; nearly every cobot demo ever filmed.

## Economic profile
A $500–5k product line at the heart of the cobot accessory boom, with plug-and-play ecosystem certification (UR+) as the distribution moat. Chinese vendors have halved street prices in five years. The strategic role is default-choice status: integrators reach for a parallel-jaw first and justify anything else — which makes its ecosystem position more valuable than any spec.
