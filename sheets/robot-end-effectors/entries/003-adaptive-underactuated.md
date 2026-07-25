---
number: 3
name: Adaptive & Underactuated Grippers
part: 1
group: Mechanical grippers
tasks: [pick, dex]
versatility: broad
reliability: good
maturity: common
cost: high
---

## Description
Fingers that shape themselves: multi-link fingers driven by fewer motors than joints, with springs and linkages distributing the closing motion so the finger wraps whatever it meets. Underactuation converts mechanical cleverness into grasp generality — a cylinder, a box, and an egg all get enveloped without the controller knowing the difference. Two- and three-finger adaptive grippers occupy the space between simple jaws and full dexterous hands, at a fraction of the latter's cost and fragility.

## Strengths and weaknesses
Envelope grasps tolerate large pose errors and odd geometries; passive adaptation needs no per-object programming; far cheaper and more robust than fully-actuated hands. Weaknesses: underactuation surrenders control — you get the grasp the mechanism chooses, not the one you specify; precision fingertip manipulation is limited; link mechanisms add wear points over plain jaws; and for known parts at volume, a custom-fingered simple gripper beats it on cost and cycle time.

## When to use
Pick adaptive grippers for mixed-SKU, irregular-geometry handling with real pose uncertainty — kitting, unstructured picking, research platforms — where envelope grasps succeed without per-object programming and a full dexterous hand's cost and fragility are unjustified. Avoid them for known parts at production volume, where a custom-fingered simple jaw wins on cost and cycle time, and for tasks needing precise fingertip placement or in-hand repositioning, which underactuation by design cannot deliver; in high-volume logistics, vacuum hybrids usually take the job first.

## Examples
Robotiq 3-Finger (the research classic), OnRobot's adaptive lines, Righthand Robotics' underactuated picking fingers (with suction hybrid), Yale OpenHand's open-source designs seeding a generation of research, Barrett Hand's pioneering three-finger lineage.

## Economic profile
A $5–15k middle tier serving mixed-SKU handling and research. Its commercial position is squeezed: vacuum hybrids own high-volume logistics, custom jaws own known parts, and humanoid hands claim the generality story with better funding. The design philosophy, however, is quietly winning — underactuation and compliance are inside nearly every credible humanoid hand.
