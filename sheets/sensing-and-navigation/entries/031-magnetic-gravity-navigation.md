---
number: 31
name: Magnetic and gravity map navigation
part: 5
group: Celestial and field
functions: [nav]
jamming: strong
cost: med
---

## Description
The Earth's crust produces small, spatially varying anomalies in both the magnetic and gravitational fields, and those anomalies are stable over decades. A vehicle carrying a sensitive magnetometer or gravity gradiometer can measure the local field, compare it against a stored anomaly map, and derive a position fix by the same correlation logic that terrain matching uses — except that it works over water, under water, in cloud, and at night, because the fields pass through everything. Accuracy demonstrated in flight testing is in the hundreds of metres to a few kilometres, improving as maps and sensors improve.

## Strengths and weaknesses
It is passive, unjammable, and works in every medium and every weather condition, including underwater where nothing else absolute is available. Field anomalies are stable, so maps stay valid for decades. The weaknesses are sensitivity and interference. Magnetic anomalies are a few hundred nanotesla against a 50,000 nT background, and the vehicle's own electrical systems produce comparable disturbances, so platform compensation is the central engineering problem. Solar activity perturbs the magnetic field on hourly timescales. Gravity gradiometers are expensive and slow to average. And large areas of the world are not mapped at useful resolution.

## When to use
Use field-based navigation where GNSS is denied and no other absolute reference is available: submarines, long-range aircraft over ocean, and any platform that must navigate under cloud with no terrain relief. It complements terrain matching rather than replacing it, since terrain works well over land and field navigation works over water. Treat map availability as the gating question — the technique's accuracy is set by survey coverage and resolution more than by the sensor, and the relevant maps are national assets in many regions.

## How it is defeated
Poor or absent map coverage limits it geographically. Solar storms disturb the magnetic field enough to degrade fixes for hours. Platform magnetic interference must be compensated continuously, and a change in the vehicle's electrical configuration can invalidate the calibration. Because accuracy is coarse compared with GNSS, it is a bounding technique for inertial drift rather than a precision fix.

## Examples
The MagNav flight demonstrations by the US Air Force and MIT Lincoln Laboratory, SandboxAQ's quantum magnetometer navigation trials, gravity-aided inertial navigation on submarines, and the underlying national magnetic and gravity anomaly maps produced by geological surveys.

## Economic profile
Interest is recent and driven by GNSS denial. Quantum magnetometers — optically pumped alkali vapor and nitrogen-vacancy diamond sensors — are the technology enabler, since they offer high sensitivity in a small package without cryogenics. Several startups and national laboratories are working on it, funding is growing, and flight demonstrations have shown real navigation performance. The pacing items are platform compensation algorithms and map coverage, neither of which is a sensor problem.

## Further reading

[Research and development projects (MIT Lincoln Laboratory)](https://www.ll.mit.edu/r-d/projects) · [Mineral Resources Program (US Geological Survey)](https://www.usgs.gov/programs/mineral-resources-program)
