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
Navigation without the world's help: fiber-optic and ring-laser gyroscopes measure rotation via the Sagnac effect — counter-propagating light in a loop — with no moving parts and bias stability a thousand times beyond MEMS. A navigation-grade INS dead-reckons a submarine for hours or an aircraft across an ocean, drifting a nautical mile per hour or less. This is the sensor class that works when GPS is jammed, denied, or underwater — which is why it is export-controlled and increasingly relevant.

## Strengths and weaknesses
Bias stability of 0.001–0.01°/hr enables genuine long-duration dead reckoning and gyrocompassing (finding north from Earth's rotation alone); immune to jamming, spoofing, weather, and darkness; decades of proven reliability. Weaknesses: $20k–$1M+ price range; kilograms and watts, not grams; ITAR/export licensing complicates everything; and performance is bought in fiber length or cavity precision — costs that resist consumer-style curves.

## When to use
Pick FOG/RLG when GNSS-denied dead reckoning for minutes to hours is a hard requirement — subsea and underground vehicles, defense platforms, operations near jamming — or when you need gyrocompassing where magnetometers are useless, and the platform can carry kilograms and a $20k–$1M line item. Factor export licensing into the schedule from day one. Avoid it wherever external fixes (GNSS, vision, UWB, ranging) are reliably available; tactical MEMS plus good fusion is 10–100× cheaper and covers outage gaps of seconds to minutes, which is most commercial autonomy.

## Failure modes
Even navigation grade drifts eventually — it postpones, never eliminates, the need for fixes; temperature gradients across the fiber coil induce bias (careful thermal design is half the product); shock beyond spec misaligns optics; RLG dither mechanisms wear; and procurement/export delays are the program-level failure mode.

## Examples
Honeywell HG9900 and Safran/iXblue fiber INS in defense platforms, iXblue Phins on subsea vehicles, KVH FOGs on autonomous trucks and mining robots, Boreas quantum-adjacent gyrocompasses; every airliner's IRS.

## Economic profile
A defense-electronics oligopoly with stable, high margins and surging demand as GPS-denied operation moves from exotic to assumed (drones over contested territory). The disruption vectors — photonic-chip gyros and quantum interferometry — promise FOG performance at silicon prices and have promised it for a while; autonomous trucking's appetite for affordable 0.1°/hr parts is the commercial pull to watch.

## Further reading

[Inertial Navigation Primer (VectorNav)](https://www.vectornav.com/resources/inertial-navigation-primer) · [What Is Fiber-Optic Gyroscope Technology? (Exail)](https://www.exail.com/resources/knowledge-center/what-is-fiber-optic-gyroscope-technology)
