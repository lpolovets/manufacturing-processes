---
number: 2
name: Solid-State & Semi-Solid LiDAR
part: 1
group: Time-of-flight LiDAR
uses: [perception, safety]
range: [mid, far]
compute: high
adoption: common
cost: med
---

## Description
LiDAR with (almost) nothing spinning: MEMS mirrors, rotating polygon prisms, optical phased arrays, or pure flash illumination steer or spread the beam electronically. The prize is automotive qualification — no wear parts, small enough to hide in a grille or behind a windshield, and manufacturable like electronics rather than instruments. Directional units trade the spinning sensor's 360° view for a forward wedge, so robots use several or add a spinning unit on top.

## Strengths and weaknesses
Vibration- and wear-tolerant, compact and embeddable, high point density in the field of view, costs falling on semiconductor-style curves. Weaknesses: limited field of view per unit; MEMS and polygon versions still have micro-moving parts (the "solid-state" label is marketing-elastic); flash LiDAR's power budget caps range; and optical phased arrays — the true solid-state endgame — remain barely commercial after a decade of promises.

## Failure modes
Same weather and surface pathologies as all ToF LiDAR (rain, fog, glass, retroreflector bloom); windshield mounting adds dirt, condensation, and wiper streaks; MEMS mirrors have resonance and shock limits; narrow FoV creates coverage seams between units where objects vanish; interference between fixed-pattern units is harder to dodge than between spinners.

## Examples
Hesai AT-series and RoboSense M-series (the Chinese ADAS volume leaders, on dozens of EV models), Innoviz (BMW), Valeo Scala (the first-ever automotive LiDAR, Audi A8), Luminar (Volvo), AEyE; Livox's prism units on DJI platforms and countless robots.

## Economic profile
Chinese ADAS design-ins turned LiDAR into a sub-$500 automotive component and pulled the whole category's costs down; Western pure-plays consolidated brutally (Ouster-Velodyne merger, multiple bankruptcies). For robotics buyers this is the happy spillover decade: automotive-qualified units at consumer-electronics prices, with the strategic caveat that supply concentrates in two Chinese vendors.
