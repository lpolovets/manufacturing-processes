---
number: 19
name: Tactile Arrays & Skins
part: 6
group: Force & touch
uses: [manip, safety]
range: [contact]
compute: med
adoption: emerging
cost: med
---

## Description
Distributed touch: grids of pressure-sensitive taxels — capacitive, resistive/piezoresistive, magnetic, or optical — laminated onto fingertips, palms, and robot bodies to report where and how hard contact happens. Where a wrist F/T sensor gives one number, a skin gives a contact image: slip precursors, grasp stability, incidental collisions on a forearm. Humanoid programs have revived the field, since manipulation in clutter is contact-rich by definition and vision goes blind at the moment of grasp.

## Strengths and weaknesses
Contact location and pressure distribution vision cannot provide; slip detection before the object moves; whole-body versions double as safety sensing. Weaknesses: wiring hundreds of taxels through moving joints is the perennial engineering nightmare; durability — skins live at the abrasion interface and die there; calibration drifts with wear and temperature; hysteresis and crosstalk in soft substrates; and no standard product has consolidated the field, so everyone re-invents.

## When to use
Pick tactile arrays when success is decided by information vision loses at the moment of grasp — slip onset on variable objects, contact location in clutter, grasp verification on deformables — or for whole-body contact sensing on robots that work around people; humanoid fingertips are the canonical case, at hundreds of dollars per finger with consumable-replacement economics. Avoid them in cost- and uptime-driven industrial cells handling known objects: a parallel jaw with current feedback or a wrist F/T sensor delivers the needed signal without a wear surface whose calibration drifts, and with no vendor-fragmented integration project attached.

## Failure modes
Wear-through and delamination at contact surfaces (fingertip skins are consumables); creep and hysteresis in elastomer layers corrupt force readings; taxel dropout from flex-cycle wiring fatigue; temperature sensitivity misread as contact; EMI on high-impedance sensing lines; and gradual sensitivity drift that quietly degrades grasp policies trained on fresh sensors.

## Examples
Tesla Optimus and Figure fingertip arrays, Sanctuary's touch-enabled hands, pressure-mapping incumbents (Tekscan, Pressure Profile Systems), Xela and Contactile robotics skins, iCub's capacitive body skin lineage, BeBop Sensors' fabric-based arrays.

## Economic profile
Long a research cottage industry, now pulled by humanoid demand toward productization — fingertips first, at $100s per finger, with consumable-replacement economics (a feature for vendors, a cost for fleets). The unsolved product question is standardization: whoever ships the durable, calibrated, easily-integrated "tactile module" that hands standardize on inherits a strategic component slot.

## Further reading

[How Pressure Mapping Sensors Work (Tekscan)](https://www.tekscan.com/company/technology) · [Tactile Robotics: Past and Future (arXiv)](https://arxiv.org/abs/2512.01106)
