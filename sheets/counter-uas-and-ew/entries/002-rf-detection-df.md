---
number: 2
name: RF detection and direction finding
part: 1
group: Radar and RF
threats: [g12, g35]
effectiveness: fair
collateral: none
exchange: best
cost: vlow
---

## Description
RF detection listens for the control and video links that most drones use, identifies the protocol, and gives a bearing to both the aircraft and — importantly — the operator. Commercial drones use recognizable signatures in the 2.4 and 5.8 GHz bands, and a library of protocol fingerprints lets a receiver say "DJI Mavic 3, bearing 210°, operator bearing 040°." Multiple receivers give a position fix on both. The system transmits nothing, costs a fraction of a radar, and needs no spectrum licence.

## Strengths and weaknesses
Locating the operator is the capability that nothing else provides, and in most civil and many military situations arresting or engaging the operator ends the problem permanently rather than for one flight. Passive operation means no emissions and no licensing. Cost is low enough to distribute sensors widely. The weakness is that it only works against drones that transmit on recognized protocols. Autonomous drones flying a preprogrammed route with the radio off are invisible, fiber-optic drones emit nothing, and custom or military links are absent from commercial libraries.

## When to use
Use RF detection as the cheap, always-on first layer of any counter-UAS architecture, particularly for civil sites and event security where the goal is to find and stop the operator. Pair it with radar, because the drones that matter most in a military context are increasingly the ones that do not transmit. Keep the protocol library current — it ages exactly like a radar warning receiver's threat library, and a detector that does not recognize the newest consumer firmware reports nothing at all.

## Limits and failure modes
Autonomous, fiber-optic, and radio-silent drones produce no detection. Urban RF environments are crowded, generating false alarms and reducing sensitivity. Frequency-hopping and encrypted military links are not in commercial libraries. The library maintenance burden is continuous and often underestimated at procurement. Direction-finding accuracy from a single sensor is coarse, so operator location requires several sensors with good geometry.

## Examples
Dedrone (now part of Axon) sensor networks, DroneShield RfPatrol and RfOne, Aaronia and Rohde & Schwarz detection systems, and the RF layers inside integrated systems such as FS-LIDS and the various fixed-site airport installations.

## Economic profile
This is the cheapest useful counter-UAS capability and the segment with the most commercial activity, because airports, prisons, stadiums, and critical infrastructure all buy it and none of them can legally jam. Sensor prices of $10k–100k allow dense networks. The business model has moved toward subscription, bundling the sensor with continuous library updates, which correctly reflects where the ongoing value sits.

## Further reading

[Department of Defense Counter-Unmanned Aircraft Systems (Congressional Research Service)](https://www.everycrsreport.com/reports/IF11426.html) · [Unmanned Aircraft Systems (Federal Aviation Administration)](https://www.faa.gov/uas)
