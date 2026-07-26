---
number: 4
name: Integrated Servo Systems
part: 1
group: Electric rotary
applications: [arm, mobile, heavy]
density: med
backdrive: poor
precision: fine
cost: med
---

## Description
The motor sold as a solution: motor + encoder + drive + tuning packaged as one closed-loop product, from the $3 hobby RC servo to the industrial AC servo axes that power every CNC machine and industrial robot. The category's value is integration — buy position (or velocity, or torque) control as a commodity rather than engineering it. "Smart servos" (Dynamixel and descendants) brought daisy-chained digital buses to hobby and research robotics.

## Strengths and weaknesses
Engineering time collapses to configuration; industrial versions deliver decades-proven reliability, safety functions, and fieldbus integration; the ecosystem (cables, gearheads, software) is complete. Weaknesses: you inherit the vendor's choices — usually a high-ratio gearbox with poor backdrivability; hobby-grade servos strip gears and burn out under sustained load; and the markup over components is exactly what the integration is worth, which at humanoid volumes is being competed away by in-house modules.

## When to use
Buy an integrated servo when engineering time is scarcer than unit cost: research platforms and low-volume machines (Dynamixel-class smart servos), or industrial axes that need certified safety functions, fieldbus integration, and decade-scale reliability (Yaskawa/Beckhoff-class). It's the right call up to a few hundred units a year, or wherever the axis is not your product's differentiator. Avoid it when the joint needs backdrivability or force transparency — the bundled high-ratio gearbox forecloses that, and a QDD module is the alternative — and at humanoid-scale volumes, where the integration markup funds an in-house motor-gear-encoder module within a generation of product.

## Examples
Yaskawa, Fanuc, Siemens, and Beckhoff AC servo axes across industrial automation; Dynamixel (Robotis) as the research-robot standard; Feetech/Waveshare clones powering the low-cost arm wave (SO-ARM100 class); KEBA-driven cobot joints.

## Economic profile
Industrial servo axes are a mature, oligopolistic $10B+ market with stable margins. The disruption is at the bottom: $30 Chinese smart servos now offer what cost $300 a decade ago, and open-source robot arms built on them are collapsing the entry price of manipulation research. For robot builders the perennial question is buy-the-module versus build-the-joint — and volume decides it.

## Suppliers
[ROBOTIS](https://www.robotis.us/) — Dynamixel smart servos, the research standard · [Yaskawa](https://www.yaskawa.com/) — industrial AC servo axes

## Further reading

[Servo Motor Overview (Oriental Motor)](https://www.orientalmotor.com/servo-motors/technology/servo-motor-overview.html) · [Dynamixel Smart Actuator Documentation (ROBOTIS)](https://docs.robotis.com/)
