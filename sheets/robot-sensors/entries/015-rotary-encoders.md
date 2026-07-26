---
number: 15
name: Rotary Encoders
part: 5
group: Position feedback
uses: [manip, nav]
compute: low
adoption: std
cost: low
---

## Description
The sensor closest to the metal: optical or magnetic discs reporting shaft angle, incrementally (pulses counted from a reference) or absolutely (position known at power-on). Every servo loop in robotics closes around one. Resolution spans 12 bits (magnetic chips, cents) to 23+ bits (optical ring encoders, thousands of dollars), and the choice quietly determines a joint's precision ceiling, torque-control quality (velocity from position differentiation), and homing behavior at startup.

## Strengths and weaknesses
Direct, drift-free, kilohertz-fast position truth with trivial processing; magnetic chip encoders (AS5047-class) made 14-bit absolute feedback nearly free; multiturn absolute types eliminate homing routines. Weaknesses: incremental types lose position at power-off and miscount on noise; resolution and accuracy are different specs (interpolated magnetic encoders wobble within a period); mounting eccentricity dominates real accuracy; through-shaft optical rings are fragile to contamination.

## When to use
Every powered joint gets one; the decision is type. Magnetic absolute chips (AS5047-class, ~$5, 14-bit) are the default for cost-driven joints and QDD actuators; optical rings (Renishaw, Heidenhain) buy the arcsecond accuracy machine-tool-grade axes need; multiturn absolute types are worth it wherever homing routines at power-on are operationally unacceptable; and dual-encoder joints (motor plus output side) are the right spec for high-torque transmissions with meaningful compliance — increasingly the humanoid standard. Avoid exposed optical discs in dirty, oily, or wet environments (go magnetic or inductive), and avoid incremental-only feedback in fleet products where a missed index becomes a field service call.

## Failure modes
Dust, oil, or condensation on optical discs drops counts silently — the classic drifting-joint mystery; magnet misalignment or axial play corrupts magnetic readings; EMI on incremental lines injects phantom counts; index-pulse glitches shift homing by one revolution; connector vibration failures masquerade as controller faults; and differentiated position becomes noisy velocity exactly when torque control needs it clean.

## Examples
AMS/ams-OSRAM magnetic chips inside nearly every QDD robot joint, Heidenhain and Renishaw optical rings in machine tools and precision arms, US Digital and CUI in research robots, Nidec/Tamagawa resolvers-and-encoders in industrial servo motors by the million.

## Economic profile
A mature component market whose interesting edge is the collapse of absolute-encoder pricing — $5 chips now do what $500 units did, enabling cheap torque-controlled joints. Premium optical/inductive precision (Renishaw, Heidenhain) keeps machine-tool margins. Dual-encoder joints (motor-side + output-side, catching transmission error) are becoming the humanoid-grade standard and double the sockets per robot.

## Further reading

[How Renishaw Optical Encoders Work (Renishaw)](https://www.renishaw.com/en/how-renishaw-optical-encoders-work--36979) · [Resolution, Accuracy, and Precision of Encoders (US Digital)](https://www.usdigital.com/support/resources/reference/technical-docs/white-papers/resolution-accuracy-and-precision-of-encoders/)
