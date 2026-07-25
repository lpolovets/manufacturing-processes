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
Put a spring between the gearbox and the load — on purpose. The deflection of a known spring *is* a force measurement, so force control becomes position control of spring compression: robust, cheap to sense, and stable in contact. The spring also filters shock loads before they reach gear teeth and stores energy in cyclic motion like walking. Pratt and Williamson's 1995 insight defined a generation of human-safe and legged robots before QDD offered transparency without the spring.

## Strengths and weaknesses
Excellent, sensor-cheap force fidelity; impacts absorbed rather than transmitted; energy storage improves locomotion efficiency; tolerant of the cheap high-ratio gearboxes it wraps. Weaknesses: the spring caps force-control bandwidth — fast force changes must wait for the spring; adds mass, volume, and a resonance to control around; position precision degrades through the compliance; and per-joint engineering complexity that never quite commoditized.

## Examples
Baxter and Sawyer (Rethink Robotics — SEAs as the safety story), NASA's Valkyrie, Agility Robotics' Cassie/Digit lineage (leaf-spring elements), rehabilitation exoskeletons (Lokomat-class) where compliant interaction is the product, ANYmal's early ANYdrive joints.

## Economic profile
SEA lost the mainstream legged-robot argument to QDD (which gets compliance via control rather than steel) but survives where physical energy storage or absolute contact safety pays: exoskeletons, rehab, prosthetics, and ankle/hip joints with large cyclic energy. As a diligence lens: a modern SEA pitch must explain why software impedance on a QDD joint isn't sufficient — sometimes it genuinely isn't.

## Suppliers
[HEBI Robotics](https://www.hebirobotics.com/) — X-series series-elastic smart actuators
