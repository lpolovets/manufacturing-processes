---
number: 34
name: Fiber-optic gyro INS
part: 6
group: Inertial
functions: [nav]
jamming: strong
cost: med
---

## Description
A fiber-optic gyro uses the same Sagnac effect as a ring laser gyro, but instead of a laser cavity it winds several hundred to several thousand metres of optical fiber into a coil and measures the phase shift between light travelling both ways around it. Sensitivity scales with the total fiber length times the enclosed area, so performance is bought with fiber rather than with precision optical machining. There is no lock-in problem and therefore no dither mechanism, which makes FOGs quieter and mechanically simpler than RLGs.

## Strengths and weaknesses
FOGs cover an unusually wide performance range — from tactical grade at a few degrees per hour up to navigation grade at 0.001 degrees per hour — by changing coil length, so one technology serves many price points. They have no moving parts, tolerate shock well, and cost less than RLGs at comparable performance. The weaknesses are size at the high end, since a navigation-grade coil is physically large, and temperature sensitivity: thermal gradients across the coil produce a spurious phase shift known as the Shupe effect, which requires careful winding patterns and thermal design to suppress.

## When to use
Pick a FOG when you need good inertial performance in a package that tolerates shock and vibration, at a cost below RLG: missiles, ground vehicles, gimbal stabilization, uncrewed vehicles, and underwater systems where the combination of quiet operation and long-term stability matters. If the application is a small drone or a consumer product, MEMS is two orders of magnitude cheaper. If it is an airliner or a submarine, RLG or a hemispherical resonator gyro is usually chosen for the last increment of performance and long-term stability.

## How it is defeated
As with all inertial sensing, it cannot be attacked remotely — only outlasted, since drift grows without bound. Thermal transients degrade real-world performance relative to the specification, and platform vibration at specific frequencies can couple into the coil. Initialization from a corrupted external fix propagates that error indefinitely.

## Examples
KVH and Emcore FOG products across many vehicle applications, Northrop Grumman's LN-200 tactical unit used on huge numbers of platforms, Safran and iXblue marine and subsea systems, and the inertial units in a wide range of missiles and uncrewed vehicles.

## Economic profile
FOGs occupy the broadest slice of the inertial market by volume and value, and the supplier base is more diverse than for RLGs, including significant Chinese, Japanese, and European production. Prices span from a few thousand dollars for tactical units to over $100k for navigation grade. Export control applies above defined performance thresholds, and those thresholds are a recurring point of friction because commercial autonomous-vehicle demand sits close to the controlled boundary.

## Further reading

[Customer support library (KVH Industries)](https://www.kvh.com/support) · [Initial Alignment of a Strapdown Inertial Reference and Navigation System (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/19670057224)
