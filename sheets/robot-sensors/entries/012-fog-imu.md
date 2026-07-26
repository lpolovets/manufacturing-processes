---
number: 12
name: High-Grade IMUs (FOG / RLG)
part: 4
group: Inertial
uses: [nav]
compute: low
adoption: common
cost: vhigh
---

## Description
Fiber-optic and ring-laser gyroscopes measure rotation using the Sagnac effect (counter-propagating light in a loop). They have no moving parts, and their bias stability is roughly a thousand times better than MEMS. A navigation-grade INS can dead-reckon a submarine for hours or an aircraft across an ocean, drifting a nautical mile per hour or less. This is the sensor class that still works when GPS is jammed, denied, or underwater, which is why it is export-controlled and increasingly relevant.

## Strengths and weaknesses
Bias stability of 0.001–0.01°/hr is good enough for genuine long-duration dead reckoning and for gyrocompassing (finding north from Earth's rotation alone). The sensors are immune to jamming, spoofing, weather, and darkness, and they have decades of proven reliability. The weaknesses are the $20k–$1M+ price range, a mass and power budget measured in kilograms and watts rather than grams, and ITAR/export licensing that complicates everything. Performance is bought with fiber length or cavity precision, so costs don't fall the way consumer-electronics costs do.

## When to use
Pick FOG/RLG when GNSS-denied dead reckoning for minutes to hours is a hard requirement (subsea and underground vehicles, defense platforms, operations near jamming), or when you need gyrocompassing and magnetometers are useless. The platform also has to be able to carry kilograms and a $20k–$1M line item. Factor export licensing into the schedule from day one. If external fixes (GNSS, vision, UWB, ranging) are reliably available, use tactical MEMS plus good fusion instead: it's 10–100× cheaper and covers outage gaps of seconds to minutes, which is most commercial autonomy.

## Failure modes
Even navigation grade drifts eventually. It postpones the need for external fixes rather than eliminating it. Temperature gradients across the fiber coil induce bias, so careful thermal design is half the product. Shock beyond spec misaligns the optics. RLG dither mechanisms wear out. At the program level, the usual failure is procurement and export delay.

## Examples
Honeywell HG9900 and Safran/iXblue fiber INS in defense platforms, iXblue Phins on subsea vehicles, KVH FOGs on autonomous trucks and mining robots, Boreas quantum-adjacent gyrocompasses; every airliner's IRS.

## Economic profile
This is a defense-electronics oligopoly with stable, high margins, and demand is rising as GPS-denied operation goes from exotic to assumed (drones over contested territory). Two technologies could disrupt it: photonic-chip gyros and quantum interferometry both promise FOG performance at silicon prices, and both have been promising it for a while. The commercial pull worth watching is autonomous trucking's appetite for affordable 0.1°/hr parts.

## Further reading

[Inertial Navigation Primer (VectorNav)](https://www.vectornav.com/resources/inertial-navigation-primer) · [What Is Fiber-Optic Gyroscope Technology? (Exail)](https://www.exail.com/resources/knowledge-center/what-is-fiber-optic-gyroscope-technology)
