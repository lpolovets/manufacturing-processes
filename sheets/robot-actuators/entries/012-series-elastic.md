---
number: 12
name: Series-Elastic Actuator (SEA)
part: 3
group: Architectures
applications: [legged, soft, arm]
density: med
backdrive: good
precision: mod
cost: high
---

## Description
A series-elastic actuator puts a spring between the gearbox and the load deliberately. Because the deflection of a known spring is itself a force measurement, force control turns into position control of spring compression, which is robust, cheap to sense, and stable in contact. The spring also filters shock loads before they reach the gear teeth and stores energy during cyclic motion like walking. Pratt and Williamson published the idea in 1995, and it defined a generation of human-safe and legged robots until QDD offered transparency without a spring.

## Strengths and weaknesses
Force fidelity is very good and requires only cheap sensing. Impacts get absorbed rather than transmitted, energy storage improves locomotion efficiency, and the design tolerates the cheap high-ratio gearboxes it wraps around. Weaknesses: the spring caps force-control bandwidth, because fast force changes have to wait for the spring to deflect. It adds mass, volume, and a resonance you have to control around. Position precision suffers through the compliance, and the per-joint engineering complexity never really commoditized.

## When to use
Choose an SEA when the spring pays for its mass twice over: cyclic joints with real energy exchange (ankles, hips, exoskeleton and prosthetic drives), and human-contact applications where compliance has to survive a controller fault rather than being simulated by the controller. It also makes cheap high-ratio gearboxes usable, since the spring supplies the force sensing and shock protection the gearbox lacks, which helps when the BOM can't afford QDD-class motors. Avoid it when force bandwidth matters, since fast force changes wait on the spring and closed-loop force response typically lands well below what a QDD joint's current loop delivers, and avoid it when position precision is the spec. For general contact-rich joints with no energy-storage story, QDD is the modern default and the design you have to beat.

## Examples
Baxter and Sawyer (Rethink Robotics — SEAs as the safety story), NASA's Valkyrie, Agility Robotics' Cassie/Digit lineage (leaf-spring elements), rehabilitation exoskeletons (Lokomat-class) where compliant interaction is the product, ANYmal's early ANYdrive joints.

## Economic profile
SEA lost the mainstream legged-robot argument to QDD, which gets its compliance from control rather than steel, but it survives where physical energy storage or guaranteed contact safety is worth paying for: exoskeletons, rehab, prosthetics, and ankle and hip joints with large cyclic energy. If you're evaluating a modern SEA pitch, the question to ask is why software impedance on a QDD joint isn't sufficient. Sometimes it genuinely isn't.

## Suppliers
[HEBI Robotics](https://www.hebirobotics.com/) — X-series series-elastic smart actuators

## Further reading

[Series Elastic Actuator: Design, Analysis and Comparison (IntechOpen)](https://www.intechopen.com/chapters/51224) · [Modeling and Application of Series Elastic Actuators for Force Control (arXiv)](https://arxiv.org/abs/0912.3956)
