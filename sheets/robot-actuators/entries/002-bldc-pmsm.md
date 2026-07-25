---
number: 2
name: BLDC / PMSM
part: 1
group: Electric rotary
applications: [arm, legged, mobile, prec]
density: med
backdrive: exc
precision: mod
cost: low
---

## Description
The default motor of modern robotics: permanent magnets on the rotor, electronically commutated windings on the stator, controlled by field-oriented control (FOC) that delivers smooth, precisely known torque at any speed including stall. Drone ESCs commoditized the electronics; EVs industrialized the magnets and windings. Outrunner geometries (large-diameter, pancake-thin) maximize torque per mass and are the heart of every quasi-direct-drive robot joint.

## Strengths and weaknesses
High efficiency (90%+), excellent power density, no wear parts but bearings, torque known from current (free force estimation), and heat generated in the stator where it can actually be removed. Weaknesses: needs position sensing and a three-phase drive — the electronics are the actuator; continuous torque is thermal-limited far below peak; ungeared torque density is modest, which is why transmissions exist; and rare-earth magnets carry China supply-chain exposure.

## When to use
Make BLDC + FOC the starting assumption for any powered robot joint: continuous duty, efficiency above 90%, torque known from current for sensorless force estimation, and stator heat you can actually sink. Choose the transmission around it — none for transparency, single-stage planetary for QDD limbs, strain-wave for precision arms. Step away only at the edges: a brushed motor or stepper when the axis is worth under ~$20 and never runs hot, a stepper when open-loop positioning suffices, or direct-drive/linear/piezo hardware when the spec is nanometers rather than newton-meters. If you're arguing yourself into anything else for a mainstream joint, the burden of proof is on the alternative.

## Examples
T-Motor and Maxon EC frameless kits in robot joints; every drone propulsion motor; Tesla Optimus and Unitree joint modules; ODrive/moteus/VESC open-source FOC drives that made hobby-grade force control possible.

## Economic profile
Frameless torque motors that cost $500+ from Western catalogs ship for $50–150 from Chinese suppliers at volume, and humanoid demand is compressing prices further. The motor is becoming a commodity; margin migrates to the integrated module (motor + gear + encoder + drive) and the FOC silicon. Magnet supply is the strategic watch item.

## Suppliers
[T-Motor](https://store.tmotor.com/) — high-torque outrunners and robot-joint motors · [mjbots](https://mjbots.com/) — open FOC drives and moteus servo modules
