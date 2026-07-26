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
Ultrasonic ranging is sonar for pennies. A piezo transducer chirps at 40–200 kHz and times the echo, which measures distance from centimeters to a few meters with zero optics, zero processing, and near-zero cost. It's the parking sensor in the world's cars and the bump-avoidance on a generation of hobby robots. It keeps surviving attempts to declare it obsolete because sound reflects off exactly the surfaces that light passes through, so nothing else detects a sheet of glass as reliably.

## Strengths and weaknesses
It detects glass, mirrors, and transparent obstacles that defeat every optical sensor, it doesn't care about lighting, it's trivially cheap and simple, and it's safe to use anywhere. The weaknesses: it's slow (limited by the speed of sound), the beam is wide and sloppy so it localizes poorly, maximum range is a few meters, and soft materials like foam, cloth, and snow absorb the ping and disappear. Temperature and wind shift the speed of sound, and multiple units need scheduling to avoid crosstalk.

## When to use
Pick ultrasonic for last-centimeter work and transparent obstacles: docking, parking, and any indoor robot operating near glass walls, partitions, or mirrors that optical sensors read as open space. It costs a few dollars per unit, needs no compute, and doesn't depend on lighting. It earns a slot as the cheap safety net even on sensor-rich platforms. Avoid it wherever you need range past a few meters, precise bearing, fast update rates, or detection of foam, cloth, and other sound absorbers; for those, short-range ToF or radar does the job. Tesla's removal-and-regret arc shows what happens when cameras are asked to cover the last centimeter alone.

## Failure modes
Specular surfaces at oblique angles bounce echoes away, so a smooth wall at 45° reads as empty space. Sound-absorbent obstacles such as clothing and foam return nothing. Ultrasonic cleaners, air nozzles, and other robots' pingers inject phantom echoes. Rain and wind noise degrade outdoor use. Contamination on the transducer face, like mud or ice, kills sensitivity without any warning.

## Examples
Automotive park-assist rings (billions of units — Bosch, Murata), HC-SR04 modules on every Arduino robot, Tesla's ultrasonic suite (removed 2022 in the camera-only purge — the counterexample), drone landing altimeters, tank-level industrial sensors.

## Economic profile
Ultrasonic is a solved, commoditized technology at $1–20 per unit, and its niche looks permanent, because the glass-detection and last-centimeter problems don't yield to cameras. Tesla's removal and partial walk-back of parking performance illustrates the trade. In robot BOMs it persists as the cheap safety net nobody brags about, which is the right role for it.

## Further reading

[Ultrasonic Sensing Basics (Texas Instruments)](https://www.ti.com/lit/pdf/slaa907)
