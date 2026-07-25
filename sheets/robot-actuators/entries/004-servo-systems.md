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

## Examples
Yaskawa, Fanuc, Siemens, and Beckhoff AC servo axes across industrial automation; Dynamixel (Robotis) as the research-robot standard; Feetech/Waveshare clones powering the low-cost arm wave (SO-ARM100 class); KEBA-driven cobot joints.

## Economic profile
Industrial servo axes are a mature, oligopolistic $10B+ market with stable margins. The disruption is at the bottom: $30 Chinese smart servos now offer what cost $300 a decade ago, and open-source robot arms built on them are collapsing the entry price of manipulation research. For robot builders the perennial question is buy-the-module versus build-the-joint — and volume decides it.

## Suppliers
[ROBOTIS](https://www.robotis.us/) — Dynamixel smart servos, the research standard · [Yaskawa](https://www.yaskawa.com/) — industrial AC servo axes
