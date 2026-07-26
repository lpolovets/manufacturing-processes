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
These are LiDARs with (almost) nothing spinning. MEMS mirrors, rotating polygon prisms, optical phased arrays, or pure flash illumination steer or spread the beam electronically. The goal is automotive qualification: no wear parts, small enough to hide in a grille or behind a windshield, and manufacturable like electronics rather than instruments. Directional units trade the spinning sensor's 360° view for a forward wedge, so robots use several or add a spinning unit on top.

## Strengths and weaknesses
They tolerate vibration and wear, they're compact enough to embed, point density inside the field of view is high, and costs are falling on semiconductor-style curves. The weaknesses: each unit covers a limited field of view; MEMS and polygon versions still have micro-moving parts, so the "solid-state" label is elastic marketing; flash LiDAR's power budget caps its range; and optical phased arrays, the version with genuinely nothing moving, are still barely commercial after a decade of promises.

## When to use
Pick solid-state when the sensor must be embedded, shaken, or automotive-qualified and a forward wedge of dense points covers the task: ADAS and highway autonomy, drones, forklift and AMR forward safety zones. Sub-$500 units ride Chinese ADAS volume. If you need wider coverage, use multiple units or add a spinner to cover the seams. Avoid it when one sensor must see 360° (a spinning unit still wins on coverage per dollar) or when your program cannot accept supply concentrated in two Chinese vendors. Treat "solid-state" labels skeptically, since MEMS and polygon units still carry micro-moving parts with shock limits.

## Failure modes
These units have the same weather and surface problems as all ToF LiDAR (rain, fog, glass, retroreflector bloom). Windshield mounting adds dirt, condensation, and wiper streaks. MEMS mirrors have resonance and shock limits. A narrow field of view creates coverage seams between units, and objects in those seams go undetected. Fixed-pattern units also interfere with each other, and that interference is harder to dodge than it is between spinners.

## Examples
Hesai AT-series and RoboSense M-series (the Chinese ADAS volume leaders, on dozens of EV models), Innoviz (BMW), Valeo Scala (the first-ever automotive LiDAR, Audi A8), Luminar (Volvo), AEyE; Livox's prism units on DJI platforms and countless robots.

## Economic profile
Chinese ADAS design-ins turned LiDAR into a sub-$500 automotive component and pulled the whole category's costs down, while Western pure-plays consolidated hard (Ouster-Velodyne merger, multiple bankruptcies). Robotics buyers get the spillover: automotive-qualified units at consumer-electronics prices. The strategic caveat is that supply concentrates in two Chinese vendors.

## Further reading

[How Multi-Beam Flash Lidar Works (Ouster)](https://ouster.com/insights/blog/how-multi-beam-flash-lidar-works) · [All-Solid-State Beam Steering via Integrated Optical Phased Arrays (Micromachines)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9228971/)
