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
An integrated servo is a motor sold as a finished solution: motor, encoder, drive, and tuning packaged as one closed-loop product. The range runs from the $3 hobby RC servo up to the industrial AC servo axes that power every CNC machine and industrial robot. What you're paying for is the integration, since you buy position (or velocity, or torque) control as a commodity instead of engineering it yourself. "Smart servos" (Dynamixel and its descendants) brought daisy-chained digital buses to hobby and research robotics.

## Strengths and weaknesses
Engineering time drops to configuration time. Industrial versions come with decades-proven reliability, safety functions, and fieldbus integration, and the surrounding ecosystem of cables, gearheads, and software is complete. The downside is that you inherit the vendor's choices, usually including a high-ratio gearbox with poor backdrivability. Hobby-grade servos strip gears and burn out under sustained load. The markup over loose components is what the integration is worth, and at humanoid volumes that markup is being competed away by in-house modules.

## When to use
Buy an integrated servo when engineering time is scarcer than unit cost. That covers research platforms and low-volume machines (Dynamixel-class smart servos) and industrial axes that need certified safety functions, fieldbus integration, and decade-scale reliability (Yaskawa/Beckhoff-class). It's usually the right call up to a few hundred units a year, or wherever the axis isn't your product's differentiator. If the joint needs backdrivability or force transparency, skip it, because the bundled high-ratio gearbox rules that out; use a QDD module instead. At humanoid-scale volumes, the integration markup pays for an in-house motor-gear-encoder module within a product generation.

## Examples
Yaskawa, Fanuc, Siemens, and Beckhoff AC servo axes across industrial automation; Dynamixel (Robotis) as the research-robot standard; Feetech/Waveshare clones powering the low-cost arm wave (SO-ARM100 class); KEBA-driven cobot joints.

## Economic profile
Industrial servo axes are a mature, oligopolistic $10B+ market with stable margins. The disruption is at the bottom: $30 Chinese smart servos now offer what cost $300 a decade ago, and the open-source robot arms built on them have pushed down the entry price of manipulation research. For robot builders the recurring question is whether to buy the module or build the joint, and volume is usually what decides it.

## Suppliers
[ROBOTIS](https://www.robotis.us/) — Dynamixel smart servos, the research standard · [Yaskawa](https://www.yaskawa.com/) — industrial AC servo axes

## Further reading

[Servo Motor Overview (Oriental Motor)](https://www.orientalmotor.com/servo-motors/technology/servo-motor-overview.html) · [Dynamixel Smart Actuator Documentation (ROBOTIS)](https://docs.robotis.com/)
