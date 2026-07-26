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
This is a balloon full of coffee grounds that works as a hand. You press the soft, grain-filled membrane onto an object and pull vacuum, and the granules jam into a rigid solid molded perfectly to the object's shape. The custom fixture forms in a hundred milliseconds and releases just as fast. The 2010 Cornell/Chicago "universal jamming gripper" became one of robotics' most famous demos because the mechanism does the thinking: no fingers, no planning, no object model.

## Strengths and weaknesses
It grasps wildly irregular shapes with zero programming, and the conforming contact spreads force gently. The hardware is simple (a bag, grains, and a vacuum line), and it holds odd orientations rigid enough for machining-adjacent tasks. The catch is that it has to push down on the object against a support, so bin walls and neighboring parts interfere. Flat, large, or porous objects defeat the envelope. Membranes puncture and wear against anything sharp. Grains fatigue and clump with humidity. Release can eject small parts unpredictably, and the vacuum plumbing takes back some of the simplicity.

## When to use
Consider jamming only for oddly-shaped rigid parts presented on a supportive surface with clearance to press down: short-run kitting of irregular parts, or instant custom fixturing that holds strange geometries rigid for secondary operations. It works best exactly where fingers would need programming and cups can't seal, provided nothing sharp meets the membrane. Avoid bins with walls and close-packed neighbors, flat or large or porous objects, and anything that needs predictable release placement. In nearly every general-picking scenario vacuum or soft fingers is slightly better, which is why the standalone category failed. Think of jamming as a variable-stiffness component to put inside something else rather than as a default gripper.

## Examples
The Empire Robotics VERSABALL (the famous commercialization — and 2017 shutdown, the category's cautionary tale), Nichols/Formhand jamming pads for kitting, research fixtures for odd-part machining, jamming-stiffened surgical and wearable devices (the principle's livelier second career).

## Economic profile
The mechanism is clever, but the market kept being adjacent. For every jamming use case, either vacuum or soft fingers was slightly better, or an object violated the press-down requirement. Jamming's real commercial future looks like a component (variable-stiffness elements inside other effectors and wearables) rather than a standalone gripper category. It is a textbook study in the gap between a demo and a product.

## Further reading

[Universal Robotic Gripper Based on the Jamming of Granular Material (arXiv)](https://arxiv.org/abs/1009.4444) · [Granular Jamming in Soft Robotics: Simulation Frameworks and Emerging Possibilities (Biomimetics)](https://pmc.ncbi.nlm.nih.gov/articles/PMC13023501/)
