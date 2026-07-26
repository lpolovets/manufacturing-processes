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
GNSS gives you absolute position from orbit. Multi-constellation receivers (GPS, GLONASS, Galileo, BeiDou) deliver meters of accuracy anywhere on Earth for a few dollars, and RTK sharpens that to 1–2 centimeters by differencing carrier-phase measurements against a base station or network. RTK prices have collapsed (u-blox F9P-class modules run about $200), which turned centimeter positioning from survey equipment into a robotics commodity and quietly enabled the entire outdoor autonomy industry, from mowers to tractors.

## Strengths and weaknesses
This is the only sensor that gives drift-free absolute position, and RTK gets that to centimeter accuracy. It works globally, it's passive, it supports unlimited users, and it fuses easily with IMUs. The weaknesses start with needing sky view: urban canyons, tree canopy, and indoor operation degrade or kill it. RTK also needs a correction link and either a nearby base station or a network subscription, and convergence and re-acquisition take seconds after an outage. Jamming and spoofing are routine in several regions now, not theoretical.

## When to use
Default to GNSS on any outdoor robot with sky view. Meter-grade receivers cost a few dollars, and $200 F9P-class RTK delivers 1–2 cm for mowers, tractors, survey drones, and construction robots wherever a correction link and a base or network exist. Always fuse with an IMU and wheel or visual odometry so outages degrade gracefully. Don't depend on it in urban canyons, under canopy, indoors, or anywhere jamming and spoofing are plausible. Design the denial case first, with LiDAR or visual localization carrying the robot through, because GNSS usually fails by handing you a confidently wrong fix rather than no fix at all.

## Failure modes
Multipath off buildings yields confidently wrong fixes, which is the worst kind. RTK integer-ambiguity slips jump position by decimeters. Correction-link dropout degrades accuracy from centimeters to meters mid-task, with no warning. Jamming denies service and spoofing deceives the receiver, and both are increasingly common near conflict zones, ports, and VIPs. Solar storms and constellation faults are rare, but they hit an entire fleet at once. Leap-second and firmware edge cases have bricked receiver fleets before.

## Examples
u-blox F9P/X20 (the robotics default), Trimble and NovAtel in agriculture and survey, John Deere StarFire (PPP at continental scale), drone RTK (DJI), Swift Navigation and Point One correction networks, every phone's meter-grade chip.

## Economic profile
Receiver silicon is a commodity, so the business moved to corrections-as-a-service (subscription networks) and tight GNSS-INS integration. For robotics diligence, the thing to look at is denial-tolerance. Everyone assumes the sensor is there, so any outdoor autonomy plan gets judged by what happens when GNSS gives a bad fix or disappears.

## Further reading

[What Is RTK? (Point One Navigation)](https://pointonenav.com/insights/what-is-rtk-real-time-kinematic/) · [RTK Fundamentals (ESA Navipedia)](https://gssc.esa.int/navipedia/index.php/RTK_Fundamentals)
