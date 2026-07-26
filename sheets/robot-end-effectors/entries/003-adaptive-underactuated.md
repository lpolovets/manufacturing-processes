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
These are fingers that shape themselves to the object. Multi-link fingers are driven by fewer motors than they have joints, and springs and linkages distribute the closing motion so the finger wraps whatever it meets. Underactuation converts mechanical cleverness into grasp generality: a cylinder, a box, and an egg all get enveloped without the controller knowing the difference. Two- and three-finger adaptive grippers occupy the space between simple jaws and full dexterous hands, at a fraction of a dexterous hand's cost and fragility.

## Strengths and weaknesses
Envelope grasps tolerate large pose errors and odd geometries, and passive adaptation needs no per-object programming. They are far cheaper and more robust than fully-actuated hands. The trade-off is control: you get the grasp the mechanism chooses rather than the one you specify. Precision fingertip manipulation is limited, the link mechanisms add wear points compared to plain jaws, and for known parts at volume a custom-fingered simple gripper beats them on cost and cycle time.

## When to use
Pick adaptive grippers for mixed-SKU, irregular-geometry handling where pose uncertainty is real (kitting, unstructured picking, research platforms). Envelope grasps succeed there without per-object programming, and a full dexterous hand's cost and fragility aren't justified. If you're handling known parts at production volume, a custom-fingered simple jaw wins on cost and cycle time. If the task needs precise fingertip placement or in-hand repositioning, underactuation can't deliver it by design. In high-volume logistics, vacuum hybrids usually take the job first.

## Examples
Robotiq 3-Finger (the research classic), OnRobot's adaptive lines, Righthand Robotics' underactuated picking fingers (with suction hybrid), Yale OpenHand's open-source designs seeding a generation of research, Barrett Hand's pioneering three-finger lineage.

## Economic profile
This is a $5–15k middle tier serving mixed-SKU handling and research, and its commercial position is squeezed from several sides: vacuum hybrids own high-volume logistics, custom jaws own known parts, and humanoid hands have taken the generality story with better funding. The design philosophy is doing better than the product category. Underactuation and compliance sit inside nearly every credible humanoid hand.

## Further reading

[Yale OpenHand Project: Open-Source Underactuated Hands (Yale GRAB Lab)](https://www.eng.yale.edu/grablab/openhand/) · [Towards an Objective Evaluation of Underactuated Gripper Designs (arXiv)](https://arxiv.org/abs/1601.04547)
