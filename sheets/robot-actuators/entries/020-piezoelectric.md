---
number: 20
name: Piezoelectric Actuators
part: 6
group: Micro & precision
applications: [prec]
density: med
backdrive: none
precision: ufine
cost: high
---

## Description
Piezo ceramics are crystals that flex under voltage. They deform by only ~0.1% of their length, but they do it with sub-nanometer resolution, microsecond response, and enormous force. Stacks deliver tens of microns at kilonewtons, amplified flexures trade force for millimeter strokes, and ultrasonic or stick-slip motors chain microscopic steps into unlimited travel at surprising speed. Wherever positioning is measured in nanometers (microscopy, photonics, semiconductor metrology), piezo is the only option.

## Strengths and weaknesses
Resolution and bandwidth are unmatched. Piezo works in vacuum and at cryogenic temperatures, produces no magnetic fields, holds position unpowered (stacks), and is immensely stiff. The weaknesses: native stroke is microscopic, so any longer motion comes from amplification, and amplification has its own costs. Hysteresis and creep mean you need closed-loop sensing for accuracy. Drive voltages are high, 100–1000 V. The ceramics are brittle and don't tolerate tension or shock. And ultrasonic motors wear at their friction interfaces.

## When to use
Reach for piezo when resolution is measured in nanometers, bandwidth in kilohertz, or the environment rules out electromagnetics (vacuum, cryogenic, MRI-adjacent, or field-sensitive metrology), and the stroke fits in microns for stacks or a few millimeters for amplified flexures. Ultrasonic and stick-slip motors extend travel further when speed can be modest. Two bonuses no coil matches: stacks hold position unpowered, and stiffness is extreme. Avoid piezo when the stroke is centimeters at high speed or the load is limb-scale, because amplification eats force and the ceramics don't tolerate shock or tension. Budget for the overhead up front, since closed-loop sensing for hysteresis and 100–1000 V drives are part of the bill. If you need clean millimeter-scale force at low voltage, a voice coil is the simpler tool.

## Examples
Every AFM and confocal microscope stage (Physik Instrumente, npoint), camera autofocus ultrasonic ring motors (Canon USM lineage), fuel-injector piezo stacks (billions of firings), fiber-alignment stages, inkjet printheads — arguably the highest-volume piezo actuator of all.

## Economic profile
Piezo is a profitable precision oligopoly (PI, Cedrat, Noliac/CTS) at instrument-industry margins. Automotive-scale stack production for injectors shows the ceramics can be cheap at volume. Robotics touches piezo only at the extremes: micro-manipulation, surgical micro-tools, and any claim of nanometer dexterity. It won't ever move a limb, and it doesn't need to.

## Suppliers
[Physik Instrumente](https://www.physikinstrumente.com/) — piezo stages and stacks, the precision incumbent · [PiezoMotor](https://piezomotor.com/) — piezo-stepping micro motors

## Further reading

[Piezo Basics: Fundamentals of Piezoelectricity and Piezo Actuators (PI)](https://www.pi-usa.us/en/products/piezo-flexure-nanopositioners/piezo-motion-control-tutorial/tutorial-4-15/) · [Piezoelectrics in Positioning: Nanopositioning Tutorial (PI, PDF)](https://www.pi-usa.us/fileadmin/user_upload/pi_us/files/technotes_whitepapers/2009_PI_Piezo_University_Designing_with_Piezo_Actuators_Tutorial.pdf)
