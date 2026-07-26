---
number: 18
name: Voice Coil Actuators
part: 5
group: Linear electromagnetic
applications: [prec, soft]
density: low
backdrive: exc
precision: ufine
cost: med
---

## Description
The loudspeaker principle as a precision actuator: a coil in a permanent-magnet gap, force exactly proportional to current, moving frictionlessly over short strokes (millimeters to a few centimeters). No cogging, no hysteresis, no mechanical contact — the cleanest force source in engineering, with bandwidth into the kilohertz. Every hard drive head, camera autofocus, and fast-steering mirror is a voice coil; haptics and micro-dosing borrowed them for the same virtues.

## Strengths and weaknesses
Perfectly linear force-current relationship, zero friction and backlash, kilohertz bandwidth, silent, intrinsically backdrivable. Weaknesses: short stroke only; force density is poor and holding force burns continuous current; no power-off holding; heat in the moving coil limits continuous duty; and beyond a few centimeters of travel, a linear motor is simply the better unrolling of the same idea.

## When to use
Use a voice coil when the stroke is millimeters to a couple of centimeters and the job is fast, clean force: kilohertz bandwidth, force exactly proportional to current, zero friction — fast-steering mirrors, precision dosing, haptic transducers, and the fine stage of a coarse-fine axis layered on a screw or linear motor. Avoid it beyond a few centimeters of travel (a linear motor is the same physics packaged for distance), wherever the load must be held without power (no detent, no self-locking — add a brake or use a screw), and for sustained high force, since the moving coil's thermal limit arrives quickly.

## Examples
Hard-disk head actuators (billions made — the volume champion), smartphone camera OIS/AF modules, fast-steering mirrors in optics and laser comms, Apple's Taptic Engine, wafer-stage fine-positioning layers, ventilator and dosing valves.

## Economic profile
Two economic worlds: consumer-electronics voice coils stamped out for cents at phone volume, and precision industrial units (Akribis, ThorLabs, BEI) at hundreds of dollars. In robotics they appear wherever a joint needs a fast, fine force "tweeter" layered on a coarse actuator — an architecture (coarse-fine actuation) that semiconductor equipment perfected and humanoid hands may yet rediscover.

## Suppliers
[H2W Technologies](https://www.h2wtech.com/) — voice coil and linear actuator specialist · [Akribis](https://www.akribis-sys.com/) — voice coils and precision stages

## Further reading

[What Is a Voice Coil Actuator? (H2W Technologies)](https://www.h2wtech.com/blog/what-is-a-voice-coil-actuator)
