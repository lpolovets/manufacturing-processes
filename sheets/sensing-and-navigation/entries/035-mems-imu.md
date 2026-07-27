---
number: 35
name: MEMS IMU
part: 6
group: Inertial
functions: [nav]
jamming: strong
cost: vlow
---

## Description
A MEMS inertial measurement unit puts three vibrating-structure gyroscopes and three accelerometers on silicon dies a few millimetres across. Gyros work by sensing the Coriolis force on a vibrating proof mass; accelerometers sense the displacement of a suspended mass. Consumer units cost under a dollar and drift tens of degrees per hour. Tactical-grade industrial units at $500–5,000 reach 0.1–3 degrees per hour, and the best available MEMS devices are now approaching 0.01 degrees per hour, which begins to overlap the bottom of the FOG range.

## Strengths and weaknesses
Size, cost, and power are the advantages, and they are decisive for anything small: an entire IMU fits in a package smaller than a fingernail and draws milliwatts. The whole class of small drones and guided munitions exists because of it. The weakness is drift. Bias instability and random walk mean a MEMS-only navigation solution degrades in minutes rather than hours, so it must be aided by GNSS, vision, magnetometers, or an air-data or wheel-odometry reference. Performance also varies significantly with temperature, and calibration quality separates a good product from a bad one more than the raw die does.

## When to use
Use MEMS inertial sensing on anything small, cheap, or numerous, and design the architecture to correct it with something else. For a drone that navigates visually, a MEMS unit bridges between camera fixes perfectly well. For a munition with a 60-second flight, a good tactical MEMS unit gives adequate accuracy on its own. If the requirement is unaided navigation for more than a few minutes, MEMS will not do it and you need FOG or better. The practical selection question is usually bias instability and the quality of the vendor's temperature calibration, not the headline noise figure.

## How it is defeated
Drift is the intrinsic limit and it is fast. Acoustic attacks are a real vulnerability at this scale — high-intensity sound at the resonant frequency of the proof mass can inject false readings, and this has been demonstrated against drone IMUs in laboratory conditions. Temperature swings and mechanical shock degrade calibration. As with all inertial units, a corrupted initial position propagates indefinitely.

## Examples
Bosch, STMicroelectronics, and InvenSense consumer parts in every phone and drone, Analog Devices' ADIS industrial family, Honeywell's HG4930 tactical unit, and the inertial measurement units in guided artillery, small munitions, and virtually all commercial autonomous systems.

## Economic profile
This is the most commoditized inertial technology by far, driven by phone and automotive volumes that dwarf all defense demand. Prices continue to fall while performance improves roughly an order of magnitude per decade, which is steadily eroding the FOG market from below. The strategic consequence is significant: navigation-capable inertial sensing has become cheap and globally available, which removes what used to be a meaningful barrier to building accurate guided weapons.

## Further reading

[SmallSat Precision Navigation with Low-Cost MEMS IMU Swarms (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/20150016068)
