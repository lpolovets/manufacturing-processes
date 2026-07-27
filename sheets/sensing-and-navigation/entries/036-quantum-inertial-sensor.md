---
number: 36
name: Cold-atom inertial sensor
part: 6
group: Inertial
functions: [nav]
jamming: strong
cost: vhigh
---

## Description
A cold-atom sensor laser-cools a cloud of atoms to microkelvin temperatures, splits their quantum wavefunctions with laser pulses, lets the two paths follow slightly different trajectories, and recombines them. The interference pattern depends on acceleration and rotation along those paths, and it is referenced to the atoms' internal transition frequency and the laser wavelength — both fundamental constants. That is the key property: the scale factor does not drift, because it is set by physics rather than by a manufactured component. Demonstrated bias stability is 100 to 1,000 times better than the best conventional gyros.

## Strengths and weaknesses
Drift-free operation is the promise, and if realized in a deployable package it would let a vehicle navigate for weeks without any external fix. Laboratory instruments have already demonstrated accelerometer and gyro performance well beyond conventional sensors, and gravimeters based on the same principle are commercially sold. The weaknesses are engineering: current systems are large, need vacuum chambers, multiple stabilized lasers, and magnetic shielding, and they are sensitive to vibration and stray fields. Measurement rates are low, typically a few hertz, so they must be combined with a conventional IMU that handles fast dynamics while the atomic sensor corrects its drift.

## When to use
Consider cold-atom inertial sensing where very long GNSS-denied navigation is required and size is not critical: submarines first, then large ships and aircraft. Sea trials of quantum inertial navigation have been conducted by the UK and France, and submarines are the natural first application because they already carry large navigation systems and cannot receive GNSS while submerged. For anything small or cost-sensitive, conventional inertial sensing plus another absolute reference is the practical answer and will remain so for a long time.

## How it is defeated
Nothing attacks it remotely. The practical limits are engineering ones: vibration and platform dynamics degrade the interferometer, magnetic and thermal environments must be controlled, and low update rates mean the hybrid conventional sensor still contributes error between atomic measurements. Cost and size will keep it off most platforms regardless of performance.

## Examples
UK Ministry of Defence and Imperial College quantum navigation sea trials, France's ONERA and iXblue programs, DARPA's atomic sensing efforts, commercial cold-atom gravimeters from Muquans and AOSense, and the atomic clocks that use closely related physics and are already deployed widely.

## Economic profile
Funding is heavily governmental, with national quantum technology programs in the UK, France, US, China, and Australia treating inertial navigation as a flagship application. Commercial revenue today comes mostly from gravimeters for mineral exploration and geophysics rather than from navigation. The realistic timeline for deployable navigation systems is measured in years to a decade, and the pacing items are laser packaging, vibration isolation, and power — none of which are physics problems.

## Further reading

[UK National Quantum Technologies Programme (UKRI)](https://uknqt.ukri.org/) · [Atom Interferometry for Fundamental Physics and Gravity Measurements in Space (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/20130003258)
