---
number: 5
name: Multi-sensor fusion and C2
part: 1
group: Command and control
threats: [g12, g35, swarm, cm]
effectiveness: good
collateral: none
exchange: best
cost: low
---

## Description
The command-and-control layer takes detections from radar, RF, acoustic, and optical sensors, correlates them into single tracks, classifies each track, applies engagement rules, and recommends or commands an effector. In practice this is the part of a counter-UAS system that determines whether it works, because each individual sensor produces false alarms at a rate that would make it unusable alone. Interoperability standards matter enormously here: the US has consolidated around the FAAD C2 system and open interfaces so that sensors and effectors from different vendors can be mixed.

## Strengths and weaknesses
Fusion turns several unreliable sensors into one reasonably reliable picture, which is the only way to get an acceptable false alarm rate. Open architectures let a customer buy the best sensor and the best effector independently and upgrade either. Cost is low relative to the hardware it coordinates. The weaknesses are integration effort and operator workload. Every new sensor needs an interface, and vendors have strong commercial reasons to prefer closed systems. Poorly tuned fusion produces either alarm fatigue or missed detections, and there is no way to find out which without long field trials.

## When to use
Every multi-sensor counter-UAS deployment needs this layer, and the architecture decision — open standards versus a single vendor's closed system — is the most consequential procurement choice in the whole field. Choose open interfaces if you expect the threat to change, which it will. For a single fixed site with a stable threat, an integrated single-vendor system is simpler to field and support. Judge candidate systems on false alarm rate over a week of real operation and on how long it takes to add a new sensor type.

## Limits and failure modes
Alarm fatigue is the dominant real-world failure: operators stop responding to a display that cries wolf. Track correlation errors merge two drones into one or split one into two. Latency through the chain can exceed the engagement window against fast targets. Closed systems lock a customer into one vendor's upgrade path, which is a serious problem when the threat evolves in months.

## Examples
The US Army's Forward Area Air Defense Command and Control system, now the joint standard for counter-UAS, Northrop Grumman's FAAD C2 implementations, Anduril Lattice, Dedrone's fusion platform, and the C2 layers in Drone Dome and Falcon Shield.

## Economic profile
Software is a small fraction of system cost and a large fraction of system value, which makes this an attractive business. It is also where lock-in happens, and defense customers have become more insistent on open architectures partly for that reason. The US decision to standardize on a single C2 backbone across services was driven as much by the need to avoid a hundred incompatible systems as by any technical argument, and it has shaped what vendors build.

## Further reading

[Department of Defense Counter-Unmanned Aircraft Systems (Congressional Research Service)](https://www.everycrsreport.com/reports/IF11426.html) · [Joint Rapid Acquisition Cell (US Department of Defense)](https://www.acq.osd.mil/asda/jrac/)
