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
QDD is the architecture that took over legged robotics. You pair a large-diameter, high-pole-count BLDC with a single modest planetary stage, typically 6–10:1. The low ratio keeps reflected inertia and friction small, so the joint stays backdrivable enough to feel contact through motor current alone, which gives you proprioceptive force control with no force sensor. The gear stage still raises torque density enough to drive a real limb. The MIT Cheetah popularized the approach, and it's now the default recipe in quadrupeds and most humanoid rotary joints.

## Strengths and weaknesses
Transparency and impact tolerance are both good, since impacts backdrive the motor instead of breaking gear teeth. You get force estimation for free, high control bandwidth, and a mechanically simple joint. Weaknesses: torque density is below what high-ratio geared joints achieve, so QDD limbs run hot holding static loads. The big-diameter motors dominate joint mass and cost. Precision is limited by the motor-side encoder plus the gear's small backlash, which is fine for locomotion but short of what machining-grade arms need.

## When to use
QDD is the default for contact-rich dynamic joints: legs, dynamic arms, and anything that makes hard contact and needs to sense it. Impacts backdrive the joint harmlessly, torque is estimated from current with no load cell, and $100–500 buys the whole module off the shelf. Size it for duty cycles dominated by motion rather than holding, because the torque density is real but the thermal headroom for standing under gravity all day isn't. If the joint mostly holds static load, use a 50:1+ strain-wave joint, which runs cooler and smaller. If the spec is machining-grade repeatability, a harmonic-drive servo axis is still the right tool, since QDD's motor-side encoder and residual gear lash can't get there.

## Examples
MIT Cheetah/Mini Cheetah (the archetype), Unitree's entire quadruped and humanoid line, Tesla Optimus rotary joints, open-source actuators (MIT-inspired T-Motor AK series, ODrive-based builds), Ghost Robotics.

## Economic profile
The AK-series-class QDD module packages motor, planetary, encoder, and FOC drive into one puck for $100–500. It started as a research part and is turning into a commodity at Chinese volume pricing. Margins are moving to whoever owns module integration and reliability data. The open question is thermal: QDD humanoids that stand still all day may push designers back toward higher ratios.

## Suppliers
[CubeMars](https://www.cubemars.com/) — AK-series QDD modules, the open-robotics default · [MyActuator](https://www.myactuator.com/) — integrated QDD joint modules

## Further reading

[Quasi-Direct Drive for Low-Cost Compliant Robotic Manipulation (arXiv)](https://arxiv.org/abs/1904.03815) · [Alternative Metrics to Select Motors for Quasi-Direct Drive Actuators (arXiv)](https://arxiv.org/abs/2202.12365)
