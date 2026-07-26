---
number: 13
name: GNSS / RTK
part: 4
group: Navigation
uses: [nav]
range: [glob]
compute: low
adoption: std
cost: med
---

## Description
Absolute position from orbit: multi-constellation receivers (GPS, GLONASS, Galileo, BeiDou) deliver meters of accuracy anywhere on Earth for a few dollars, and RTK — differencing carrier-phase measurements against a base station or network — sharpens that to 1–2 centimeters. RTK's price collapse (u-blox F9P-class modules at ~$200) turned centimeter positioning from survey equipment into a robotics commodity, quietly enabling the entire outdoor autonomy industry from mowers to tractors.

## Strengths and weaknesses
The only sensor providing drift-free absolute position; centimeter accuracy with RTK; global, passive, unlimited users; trivially fused with IMUs. Weaknesses: needs sky — urban canyons, canopy, and indoors degrade or kill it; RTK needs a correction link and a nearby base or network subscription; convergence and re-acquisition take seconds after outages; jamming and spoofing are no longer theoretical, they are Tuesday in several regions.

## When to use
Default it onto any outdoor robot with sky view: meter-grade receivers cost a few dollars, and $200 F9P-class RTK delivers 1–2 cm for mowers, tractors, survey drones, and construction robots wherever a correction link and base or network exist. Always fuse with an IMU and wheel/visual odometry so outages degrade gracefully. Avoid depending on it in urban canyons, under canopy, indoors, or anywhere jamming and spoofing are plausible — design the denial case first, with LiDAR or visual localization carrying the robot through, because the honest failure mode is not absence but a confidently wrong fix.

## Failure modes
Multipath off buildings yields confidently wrong fixes (the worst kind); RTK integer-ambiguity slips jump position by decimeters; correction-link dropout silently degrades cm to m accuracy mid-task; jamming denies and spoofing deceives — increasingly common near conflict zones, ports, and VIPs; solar storms and constellation faults are rare but fleet-wide; leap-second and firmware edge cases have bricked receiver fleets before.

## Examples
u-blox F9P/X20 (the robotics default), Trimble and NovAtel in agriculture and survey, John Deere StarFire (PPP at continental scale), drone RTK (DJI), Swift Navigation and Point One correction networks, every phone's meter-grade chip.

## Economic profile
Receiver silicon is commodity; the business moved to corrections-as-a-service (subscription networks) and tight GNSS-INS integration. For robotics diligence the axis is denial-tolerance: any outdoor autonomy plan is now judged by what happens when GNSS lies or vanishes — the sensor is assumed, its absence is the design case.

## Further reading

[What Is RTK? (Point One Navigation)](https://pointonenav.com/insights/what-is-rtk-real-time-kinematic/) · [RTK Fundamentals (ESA Navipedia)](https://gssc.esa.int/navipedia/index.php/RTK_Fundamentals)
