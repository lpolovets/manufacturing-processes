---
number: 14
name: UWB & Indoor Positioning
part: 4
group: Navigation
uses: [nav]
range: [near, mid]
compute: low
adoption: emerging
cost: low
---

## Description
GPS for indoors, assembled from infrastructure: ultra-wideband radios time nanosecond pulses between tags and fixed anchors, delivering 10–30 cm positioning through walls and clutter where GNSS cannot reach. Phone adoption (Apple U1/U2, Android peers) commoditized the silicon. The broader family includes visual fiducials (AprilTags/QR floors), BLE beacons (meters-grade), and magnetic-signature maps — all trading infrastructure installation for localization that pure SLAM must otherwise earn with compute.

## Strengths and weaknesses
Absolute indoor position with bounded error (no drift), works through non-metal walls and darkness, cheap tags, low compute; excellent for multi-robot coordination and asset tracking. Weaknesses: someone must install, survey, and power the anchors — the infrastructure tax; metal-heavy environments multipath badly; capacity limits with many tags; and it competes with "free" SLAM that improves every year, squeezing the niche from the software side.

## Failure modes
Non-line-of-sight bias: through-body and through-shelf paths arrive late, pushing position errors of decimeters that look statistically healthy; anchor geometry degrades accuracy in corridors (dilution of precision); anchor drift/movement silently corrupts the map; interference in the increasingly crowded UWB bands; battery-dead tags and unsurveyed anchor moves are the operational reality.

## Examples
Qorvo/Decawave DW3000 modules (the standard), Apple AirTag's finding network, warehouse forklift tracking (Zebra, Sewio), robot soccer and drone-swarm labs, Amazon's fulfillment-center positioning, automotive keyless entry (UWB's actual volume driver).

## Economic profile
Phone and car-key volume made chips a $5 part; the business is systems and installation, which caps margins and scale. Strategically it is the pragmatic bridge: teams ship reliable autonomy with anchors now, then remove them as SLAM matures — a sequencing worth respecting in any warehouse-robotics diligence.
