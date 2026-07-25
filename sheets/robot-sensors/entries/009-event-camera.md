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
Cameras that abandon frames: each pixel independently fires an event the microsecond its brightness changes, producing a sparse asynchronous stream instead of images. The result is microsecond latency, ~120 dB dynamic range (sunlight and shadow in one view), no motion blur, and milliwatt power — a sensor seemingly designed for fast robots. The catch is that thirty years of computer vision assumes frames, and event streams demand rethinking everything from features to networks.

## Strengths and weaknesses
Microsecond temporal resolution and latency, extreme dynamic range, no blur at any speed, low power and bandwidth in static scenes. Weaknesses: no absolute intensity — a stationary camera watching a stationary scene sees nothing; algorithms and tooling remain research-grade; resolution and cost trail conventional sensors; texture and semantics are weak without a companion frame camera; and the killer app has stayed perpetually adjacent.

## When to use
Pick an event camera only when a conventional sensor's physics is the binding constraint: microsecond latency for aggressive flight or high-speed tracking, 120 dB dynamic range for welding-arc or tunnel-mouth scenes, or milliwatt always-on sensing in wearables and IoT — and only if the team can carry research-grade tooling and train on thin datasets. Avoid it for mainstream perception; a global-shutter frame camera at a few hundred fps solves most "too fast" problems with mature tooling, and hybrid frame-plus-event chips are the sane middle path when you genuinely need both.

## Failure modes
Static scenes are invisible until something moves (hybrid frame+event chips address this); flickering lights (LEDs, fluorescents) flood the stream with useless events; event noise in low light; per-pixel threshold mismatch needs calibration; and downstream algorithms trained on limited event datasets generalize unpredictably — the ecosystem itself is the failure mode.

## Examples
iniVation DVS and Prophesee-Sony IMX636/GenX320 (the commercial standard-bearers), high-speed tracking and vibration-monitoring industrial pilots, drone obstacle-avoidance research (UZH's aggressive-flight demos), Samsung's SmartThings motion sensing, automotive in-cabin monitoring evaluations.

## Economic profile
Sony's fab partnership with Prophesee signaled real intent, but a decade of "emerging" status reflects the missing volume driver: every proposed use has an adequate conventional alternative. The plausible break-in points are always-on low-power vision (wearables, IoT) and hybrid sensors where events augment frames. Price follows volume; volume awaits the app.
