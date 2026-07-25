---
number: 11
name: Quasi-Direct Drive (QDD)
part: 3
group: Architectures
applications: [legged, arm]
density: high
backdrive: exc
precision: mod
cost: med
---

## Description
The architecture that ate legged robotics: a large-diameter, high-pole-count BLDC married to a single modest planetary stage (typically 6–10:1). The low ratio keeps reflected inertia tiny and friction low, so the joint is backdrivable enough to feel contact through motor current alone — proprioceptive force control without a force sensor — while the gear stage lifts torque density to useful-limb levels. Popularized by the MIT Cheetah, it is now the default recipe in quadrupeds and most humanoid rotary joints.

## Strengths and weaknesses
Excellent transparency and impact tolerance (impacts backdrive the motor instead of shattering gear teeth), force estimated for free, high control bandwidth, mechanically simple. Weaknesses: torque density sits below high-ratio geared joints — QDD limbs run hot holding static loads; the big-diameter motors dominate joint mass and cost; and precision is motor-encoder-limited with the gear's small backlash, adequate for locomotion but short of machining-grade arms.

## When to use
QDD is the default for contact-rich dynamic joints: legs, dynamic arms, anything that strikes the world and must feel it — impacts backdrive harmlessly, torque is estimated from current with no load cell, and $100–500 buys the whole module off the shelf. Size it for duty cycles dominated by motion, not holding: torque density is real but thermal headroom for standing under gravity all day is not. Avoid it where the joint mostly holds static load (a 50:1+ strain-wave joint runs cooler and smaller) or where the spec is machining-grade repeatability, which its motor-side encoder and residual gear lash can't deliver; there, a harmonic-drive servo axis remains the tool.

## Examples
MIT Cheetah/Mini Cheetah (the archetype), Unitree's entire quadruped and humanoid line, Tesla Optimus rotary joints, open-source actuators (MIT-inspired T-Motor AK series, ODrive-based builds), Ghost Robotics.

## Economic profile
The AK-series-class QDD module — motor, planetary, encoder, FOC drive in one puck for $100–500 — is the transistor of the embodied-AI era: a once-research part becoming a commodity at Chinese volume pricing. Margins migrate to whoever owns module integration and reliability data. The open question is thermal: QDD humanoids standing still all day may yet push designers back toward higher ratios.

## Suppliers
[CubeMars](https://www.cubemars.com/) — AK-series QDD modules, the open-robotics default · [MyActuator](https://www.myactuator.com/) — integrated QDD joint modules
