---
number: 5
name: Ultrasonic Rangers
part: 2
group: Acoustic
uses: [safety, nav]
range: [near]
compute: low
adoption: std
cost: vlow
---

## Description
Sonar for pennies: a piezo transducer chirps at 40–200 kHz and times the echo, measuring distance from centimeters to a few meters with zero optics, zero processing, and near-zero cost. The parking sensor of the world's cars and the bump-avoidance of a generation of hobby robots, ultrasonic sensing survives every attempt to declare it obsolete because nothing else detects a sheet of glass — sound reflects off exactly the surfaces light passes through.

## Strengths and weaknesses
Detects glass, mirrors, and transparent obstacles that defeat every optical sensor; immune to lighting; trivially cheap and simple; safe everywhere. Weaknesses: slow (speed of sound), wide sloppy beams that localize poorly, meters-scale maximum range, soft materials (foam, cloth, snow) absorb the ping and vanish; temperature and wind shift the speed of sound; crosstalk between multiple units needs scheduling.

## When to use
Pick ultrasonic for last-centimeter work and transparent obstacles: docking, parking, and any indoor robot operating near glass walls, partitions, or mirrors that optical sensors read as open space — a few dollars per unit, no compute, no lighting dependence. It earns a slot as the cheap safety net even on sensor-rich platforms. Avoid it wherever you need range past a few meters, precise bearing, fast update rates, or detection of foam, cloth, and other sound absorbers; there short-range ToF or radar does the job, and Tesla's removal-and-regret arc shows what happens when cameras are asked to cover the last centimeter alone.

## Failure modes
Specular surfaces at oblique angles bounce echoes away — a smooth wall at 45° reads as empty space; sound-absorbent obstacles (clothing, foam) return nothing; ultrasonic cleaners, air nozzles, and other robots' pingers inject phantom echoes; rain and wind noise degrade outdoor use; transducer face contamination (mud, ice) silently kills sensitivity.

## Examples
Automotive park-assist rings (billions of units — Bosch, Murata), HC-SR04 modules on every Arduino robot, Tesla's ultrasonic suite (removed 2022 in the camera-only purge — the counterexample), drone landing altimeters, tank-level industrial sensors.

## Economic profile
A solved, commoditized technology ($1–20) whose niche is permanent: the glass-detection and last-centimeter problems don't yield to cameras. Tesla's removal and partial walk-back of parking performance illustrates the trade. In robot BOMs it persists as the cheap safety net nobody brags about — the correct role.

## Further reading

[Ultrasonic Sensing Basics (Texas Instruments)](https://www.ti.com/lit/pdf/slaa907)
