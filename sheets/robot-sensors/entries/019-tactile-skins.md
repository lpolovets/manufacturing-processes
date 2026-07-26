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
Tactile skins are grids of pressure-sensitive taxels (capacitive, resistive/piezoresistive, magnetic, or optical) laminated onto fingertips, palms, and robot bodies to report where contact happens and how hard. A wrist F/T sensor gives you one number; a skin gives you a contact image, which shows slip precursors, grasp stability, and incidental collisions on a forearm. Humanoid programs have revived the field, because manipulation in clutter is contact-rich by definition and vision is blocked at the moment of grasp.

## Strengths and weaknesses
Skins give you contact location and pressure distribution that vision can't provide, and they detect slip before the object actually moves. Whole-body versions double as safety sensing. The weaknesses are serious: wiring hundreds of taxels through moving joints is a persistent engineering problem, and durability is worse still, since skins sit at the abrasion interface and wear out there. Calibration drifts with wear and temperature, soft substrates add hysteresis and crosstalk, and no standard product has consolidated the field, so most teams end up building their own.

## When to use
Pick tactile arrays when the task is decided by information vision loses at the moment of grasp: slip onset on variable objects, contact location in clutter, grasp verification on deformable items. They also make sense for whole-body contact sensing on robots that work around people. Humanoid fingertips are the canonical case, at hundreds of dollars per finger with consumable-replacement economics. If you're running a cost- and uptime-driven industrial cell handling known objects, use a parallel jaw with current feedback or a wrist F/T sensor instead. Those give you the signal you need without a wear surface whose calibration drifts, and without a vendor-fragmented integration project.

## Failure modes
Contact surfaces wear through and delaminate, so fingertip skins are consumables. Creep and hysteresis in the elastomer layers corrupt force readings. Taxels drop out as flex-cycle wiring fatigues. Temperature sensitivity gets misread as contact. High-impedance sensing lines pick up EMI. Sensitivity drifts gradually, which degrades grasp policies trained on fresh sensors without any obvious symptom.

## Examples
Tesla Optimus and Figure fingertip arrays, Sanctuary's touch-enabled hands, pressure-mapping incumbents (Tekscan, Pressure Profile Systems), Xela and Contactile robotics skins, iCub's capacitive body skin lineage, BeBop Sensors' fabric-based arrays.

## Economic profile
This was a research cottage industry for a long time, and humanoid demand is now pulling it toward real products, starting with fingertips at $100s per finger and consumable-replacement economics (good for vendors, a recurring cost for fleets). The unsolved product question is standardization. Whoever ships the durable, calibrated, easy-to-integrate "tactile module" that hand makers standardize on gets a strategic component slot.

## Further reading

[How Pressure Mapping Sensors Work (Tekscan)](https://www.tekscan.com/company/technology) · [Tactile Robotics: Past and Future (arXiv)](https://arxiv.org/abs/2512.01106)
