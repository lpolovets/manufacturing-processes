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
Rotary encoders are optical or magnetic discs that report shaft angle, either incrementally (pulses counted from a reference) or absolutely (position known at power-on). Every servo loop in robotics closes around one. Resolution spans 12 bits (magnetic chips, cents) to 23+ bits (optical ring encoders, thousands of dollars). That choice sets a joint's precision ceiling, its torque-control quality (velocity comes from differentiating position), and its homing behavior at startup.

## Strengths and weaknesses
Encoders give direct, drift-free position at kilohertz rates with almost no processing. Magnetic chip encoders (AS5047-class) made 14-bit absolute feedback nearly free, and multiturn absolute types remove the need for homing routines. On the weakness side, incremental types lose position at power-off and miscount when there's noise. Resolution and accuracy are different specs: interpolated magnetic encoders wobble within a period. Mounting eccentricity usually dominates real-world accuracy, and through-shaft optical rings are easily degraded by contamination.

## When to use
Every powered joint gets one, so the decision is which type. Magnetic absolute chips (AS5047-class, ~$5, 14-bit) are the default for cost-driven joints and QDD actuators. Optical rings (Renishaw, Heidenhain) buy the arcsecond accuracy that machine-tool-grade axes need. Multiturn absolute types are worth it wherever a homing routine at power-on is operationally unacceptable. If the joint has a high-torque transmission with meaningful compliance, spec dual encoders (motor side plus output side), which is increasingly the humanoid standard. Don't use exposed optical discs in dirty, oily, or wet environments; go magnetic or inductive instead. And avoid incremental-only feedback in fleet products, where a missed index turns into a field service call.

## Failure modes
Dust, oil, or condensation on optical discs drops counts with no warning, which is the usual cause of a joint that slowly drifts. Magnet misalignment or axial play corrupts magnetic readings. EMI on incremental lines injects phantom counts. Index-pulse glitches shift homing by one revolution. Connector failures from vibration look like controller faults. Differentiating position gives noisy velocity exactly when torque control needs it clean.

## Examples
AMS/ams-OSRAM magnetic chips inside nearly every QDD robot joint, Heidenhain and Renishaw optical rings in machine tools and precision arms, US Digital and CUI in research robots, Nidec/Tamagawa resolvers-and-encoders in industrial servo motors by the million.

## Economic profile
This is a mature component market, and the interesting part is how far absolute-encoder pricing has fallen: $5 chips now do what $500 units did, which makes cheap torque-controlled joints practical. Premium optical and inductive precision (Renishaw, Heidenhain) still holds machine-tool margins. Dual-encoder joints (motor side plus output side, to catch transmission error) are becoming the humanoid-grade standard, and they double the number of sockets per robot.

## Further reading

[How Renishaw Optical Encoders Work (Renishaw)](https://www.renishaw.com/en/how-renishaw-optical-encoders-work--36979) · [Resolution, Accuracy, and Precision of Encoders (US Digital)](https://www.usdigital.com/support/resources/reference/technical-docs/white-papers/resolution-accuracy-and-precision-of-encoders/)
