---
number: 9
name: Granular Jamming Grippers
part: 3
group: Soft & compliant
tasks: [pick]
versatility: broad
reliability: mixed
maturity: emerging
cost: med
---

## Description
A balloon full of coffee grounds that becomes a hand: press the soft, grain-filled membrane onto an object, pull vacuum, and the granules jam into a rigid solid molded perfectly to the object's shape — a custom fixture formed in a hundred milliseconds and released just as fast. The 2010 Cornell/Chicago "universal jamming gripper" became one of robotics' most famous demos precisely because the mechanism is the intelligence: no fingers, no planning, no object model.

## Strengths and weaknesses
Grasps wildly irregular shapes with zero programming; conforming contact spreads force gently; mechanically simple (a bag, grains, a vacuum line); holds odd orientations rigid for machining-adjacent tasks. Weaknesses: needs to push down on the object against support (bin walls and neighbors interfere); flat, large, or porous objects defeat the envelope; membranes puncture and wear against anything sharp; grains fatigue and clump with humidity; release can eject small parts unpredictably; and vacuum plumbing negates some of the simplicity.

## When to use
Consider jamming only for oddly-shaped rigid parts presented on a supportive surface with clearance to press down — short-run kitting of irregular parts, or instant custom fixturing that holds strange geometries rigid for secondary operations. It shines exactly where fingers need programming and cups can't seal, provided nothing sharp meets the membrane. Avoid bins with walls and close-packed neighbors, flat or large or porous objects, and anything needing predictable release placement; in nearly every general-picking scenario vacuum or soft fingers is slightly better, which is precisely why the standalone category failed — think of jamming as a variable-stiffness component, not a default gripper.

## Examples
The Empire Robotics VERSABALL (the famous commercialization — and 2017 shutdown, the category's cautionary tale), Nichols/Formhand jamming pads for kitting, research fixtures for odd-part machining, jamming-stiffened surgical and wearable devices (the principle's livelier second career).

## Economic profile
The mechanism is brilliant; the market kept being adjacent: for every jamming use case, either vacuum or soft fingers was slightly better or an object violated the press-down requirement. Jamming's real commercial future looks like a component — variable-stiffness elements inside other effectors and wearables — rather than a standalone gripper category. A textbook study in demo-to-product gap.

## Further reading

[Universal Robotic Gripper Based on the Jamming of Granular Material (arXiv)](https://arxiv.org/abs/1009.4444) · [Granular Jamming in Soft Robotics: Simulation Frameworks and Emerging Possibilities (Biomimetics)](https://pmc.ncbi.nlm.nih.gov/articles/PMC13023501/)
