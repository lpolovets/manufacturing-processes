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

## Examples
MIT Cheetah/Mini Cheetah (the archetype), Unitree's entire quadruped and humanoid line, Tesla Optimus rotary joints, open-source actuators (MIT-inspired T-Motor AK series, ODrive-based builds), Ghost Robotics.

## Economic profile
The AK-series-class QDD module — motor, planetary, encoder, FOC drive in one puck for $100–500 — is the transistor of the embodied-AI era: a once-research part becoming a commodity at Chinese volume pricing. Margins migrate to whoever owns module integration and reliability data. The open question is thermal: QDD humanoids standing still all day may yet push designers back toward higher ratios.

## Suppliers
[CubeMars](https://www.cubemars.com/) — AK-series QDD modules, the open-robotics default · [MyActuator](https://www.myactuator.com/) — integrated QDD joint modules
