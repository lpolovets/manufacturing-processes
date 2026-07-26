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
UWB is essentially GPS for indoors, built out of installed infrastructure. Ultra-wideband radios time nanosecond pulses between tags and fixed anchors, which gives 10–30 cm positioning through walls and clutter where GNSS can't reach. Phone adoption (Apple U1/U2, Android peers) commoditized the silicon. The broader family also includes visual fiducials (AprilTags/QR floors), BLE beacons (meters-grade), and magnetic-signature maps. All of them trade an infrastructure install for localization that pure SLAM would otherwise have to earn with compute.

## Strengths and weaknesses
UWB gives absolute indoor position with bounded error and no drift, works through non-metal walls and in darkness, uses cheap tags, and needs little compute. It's a good fit for multi-robot coordination and asset tracking. The main weakness is the infrastructure tax: someone has to install, survey, and power the anchors. Metal-heavy environments produce bad multipath, there are capacity limits once you have many tags, and it competes with "free" SLAM that improves every year, which squeezes the niche from the software side.

## When to use
Pick UWB when you control the facility and 10–30 cm absolute indoor position with zero drift is worth an anchor install: multi-robot coordination, forklift and asset tracking, indoor drone work. It also works as a deliberate bridge, where you ship reliable autonomy with anchors now and remove them as SLAM matures. Tags are $5-class, so the survey and anchor maintenance are the real cost. Skip it in metal-dense environments, where multipath bias eats the accuracy advantage, and in third-party spaces where you can't install infrastructure. If your SLAM already meets the accuracy bar, use that instead and save the install.

## Failure modes
Non-line-of-sight paths cause bias: signals through bodies and through shelving arrive late, producing position errors of decimeters that still look statistically healthy. Anchor geometry degrades accuracy in corridors through dilution of precision. If an anchor drifts or gets moved, it corrupts the map without any obvious symptom. The UWB bands are getting crowded, so interference is a growing problem. Day to day, most of the trouble is dead tag batteries and anchor moves nobody surveyed.

## Examples
Qorvo/Decawave DW3000 modules (the standard), Apple AirTag's finding network, warehouse forklift tracking (Zebra, Sewio), robot soccer and drone-swarm labs, Amazon's fulfillment-center positioning, automotive keyless entry (UWB's actual volume driver).

## Economic profile
Phone and car-key volume made the chips a $5 part, so the business is systems and installation, which caps margins and scale. Strategically, UWB is a pragmatic bridge: teams ship reliable autonomy with anchors now, then remove them as SLAM matures. That sequencing is worth taking seriously in any warehouse-robotics diligence.

## Further reading

[How UWB Works (FiRa Consortium)](https://www.firaconsortium.org/discover/how-uwb-works) · [UWB TDOA Indoor Localization: From Sensor Placement to System Evaluation (arXiv)](https://arxiv.org/abs/2412.12427)
