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
A voice coil actuator applies the loudspeaker principle to precision motion: a coil sits in a permanent-magnet gap, force is exactly proportional to current, and the coil moves without friction over short strokes (millimeters to a few centimeters). There's no cogging, no hysteresis, and no mechanical contact, which makes it the cleanest force source in engineering, with bandwidth into the kilohertz. Every hard drive head, camera autofocus, and fast-steering mirror is a voice coil, and haptics and micro-dosing borrowed them for the same reasons.

## Strengths and weaknesses
Force is perfectly linear with current, there's no friction or backlash, bandwidth reaches kilohertz, the actuator is silent, and it's intrinsically backdrivable. The weaknesses: stroke is short. Force density is poor, holding force burns continuous current, and there's no holding at all with the power off. Heat in the moving coil limits continuous duty. And past a few centimeters of travel, a linear motor is the better version of the same idea.

## When to use
Use a voice coil when the stroke is millimeters to a couple of centimeters and you need fast, clean force: kilohertz bandwidth, force exactly proportional to current, zero friction. That fits fast-steering mirrors, precision dosing, haptic transducers, and the fine stage of a coarse-fine axis layered on a screw or linear motor. If travel goes beyond a few centimeters, use a linear motor instead (same physics, packaged for distance). Avoid voice coils wherever the load must be held without power, since there's no detent and no self-locking, so you'd have to add a brake or use a screw. Avoid them for sustained high force too, because the moving coil reaches its thermal limit quickly.

## Examples
Hard-disk head actuators (billions made — the volume champion), smartphone camera OIS/AF modules, fast-steering mirrors in optics and laser comms, Apple's Taptic Engine, wafer-stage fine-positioning layers, ventilator and dosing valves.

## Economic profile
There are two economic worlds here. Consumer-electronics voice coils are stamped out for cents at phone volume, while precision industrial units (Akribis, ThorLabs, BEI) run hundreds of dollars. In robotics they appear wherever a joint needs a fast, fine force stage layered on a coarse actuator. Semiconductor equipment perfected that coarse-fine architecture, and humanoid hands may yet rediscover it.

## Suppliers
[H2W Technologies](https://www.h2wtech.com/) — voice coil and linear actuator specialist · [Akribis](https://www.akribis-sys.com/) — voice coils and precision stages

## Further reading

[What Is a Voice Coil Actuator? (H2W Technologies)](https://www.h2wtech.com/blog/what-is-a-voice-coil-actuator)
