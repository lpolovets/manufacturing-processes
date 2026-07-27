---
number: 4
name: EO/IR detection and tracking
part: 1
group: Optical and acoustic
threats: [g12, g35, cm]
effectiveness: good
collateral: none
exchange: good
cost: low
---

## Description
An electro-optical and infrared tracker slews a stabilized camera onto a cue from radar or RF detection, confirms visually that the object is a drone rather than a bird, and then tracks it accurately enough to support an engagement. Thermal channels allow night operation, and long focal lengths give identification at 1–5 km. Modern systems run automatic detection and classification on the video itself, which lets them search a sector independently rather than only responding to cues.

## Strengths and weaknesses
Visual confirmation is what allows an engagement decision, and in most rules of engagement it is mandatory before firing. Angular accuracy is excellent, better than radar, so an EO/IR tracker often provides the final fire-control solution. It is passive and cheap. The weaknesses are weather and search volume. Cloud, fog, rain, and dust stop it, and a narrow field of view means it cannot search a large volume quickly without a cue. Sun angle and cluttered backgrounds defeat automatic detection more often than vendors' demonstration videos suggest.

## When to use
Fit an EO/IR tracker in every counter-UAS system as the confirmation and terminal tracking sensor, cued by radar or RF. Do not expect it to serve as the primary search sensor except over a narrow approach corridor. For handheld and mobile systems it may be the only sensor, in which case accept that detection depends on someone looking in the right direction. In poor weather, plan for the whole optical chain to be unavailable and ensure the radar and effector can complete an engagement without it.

## Limits and failure modes
Weather and darkness limit the visible channel; thermal helps but has less range and resolution. Small drones against a cluttered urban background defeat automatic detection frequently. Sun in the field of view saturates the sensor. Slew rate limits tracking of close, fast-crossing targets. Because the field of view is narrow, an uncued search is slow and usually unproductive.

## Examples
Teledyne FLIR and Wescam trackers integrated into counter-UAS systems, Chess Dynamics Hawkeye, the optical channels in Rafael Drone Dome and Leonardo Falcon Shield, and the sensors on vehicle-mounted systems such as L-MADIS and the Coyote-based architectures.

## Economic profile
Sensor cost has fallen sharply with commercial thermal and visible imaging, so a capable tracker now costs $50k–500k rather than millions. Value has moved into the tracking and classification software, particularly automatic detection that reduces operator workload. The counter-UAS market has been a significant driver for compact trackers, and the same units serve force protection and border surveillance, which broadens the supplier base.

## Further reading

[Department of Defense Counter-Unmanned Aircraft Systems (Congressional Research Service)](https://www.everycrsreport.com/reports/IF11426.html)
