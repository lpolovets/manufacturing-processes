---
number: 9
name: Event Cameras
part: 3
group: Cameras
uses: [perception, nav]
range: [near, mid]
compute: high
adoption: emerging
cost: high
---

## Description
Event cameras don't produce frames. Each pixel independently fires an event the microsecond its brightness changes, so the output is a sparse asynchronous stream instead of images. That gives microsecond latency, ~120 dB dynamic range (sunlight and shadow in one view), no motion blur, and milliwatt power, which sounds like exactly what a fast robot needs. The catch is that thirty years of computer vision assumes frames, so event streams require rethinking everything from features to networks.

## Strengths and weaknesses
Temporal resolution and latency are measured in microseconds, dynamic range is extreme, there's no blur at any speed, and power and bandwidth stay low in static scenes. The weaknesses: there's no absolute intensity, so a stationary camera watching a stationary scene sees nothing. Algorithms and tooling remain research-grade, resolution and cost trail conventional sensors, texture and semantics are weak without a companion frame camera, and the killer app has stayed perpetually adjacent.

## When to use
Pick an event camera only when a conventional sensor's physics is the binding constraint: microsecond latency for aggressive flight or high-speed tracking, 120 dB dynamic range for welding-arc or tunnel-mouth scenes, or milliwatt always-on sensing in wearables and IoT. Even then, pick it only if the team can carry research-grade tooling and train on thin datasets. Avoid it for mainstream perception. A global-shutter frame camera at a few hundred fps solves most "too fast" problems with mature tooling, and hybrid frame-plus-event chips are the sensible middle path when you genuinely need both.

## Failure modes
Static scenes are invisible until something moves, though hybrid frame+event chips address this. Flickering lights such as LEDs and fluorescents flood the stream with useless events. Low light adds event noise. Per-pixel threshold mismatch requires calibration. Downstream algorithms trained on limited event datasets generalize unpredictably, so the ecosystem is a failure mode in its own right.

## Examples
iniVation DVS and Prophesee-Sony IMX636/GenX320 (the commercial leaders), high-speed tracking and vibration-monitoring industrial pilots, drone obstacle-avoidance research (UZH's aggressive-flight demos), Samsung's SmartThings motion sensing, automotive in-cabin monitoring evaluations.

## Economic profile
Sony's fab partnership with Prophesee signaled real intent, but a decade of "emerging" status reflects the missing volume driver: every proposed use has an adequate conventional alternative. The plausible break-in points are always-on low-power vision (wearables, IoT) and hybrid sensors where events augment frames. Price follows volume, and volume is still waiting on the app.

## Further reading

[Event-Based Metavision Sensors (Prophesee)](https://www.prophesee.ai/event-based-sensors/) · [Event-Based Vision: A Survey (arXiv)](https://arxiv.org/abs/1904.08405)
