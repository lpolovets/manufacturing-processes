---
number: 3
name: Acoustic detection
part: 1
group: Optical and acoustic
threats: [g12]
effectiveness: fair
collateral: none
exchange: best
cost: vlow
---

## Description
Acoustic detection uses microphone arrays to recognize the characteristic sound of drone propellers — a set of harmonics tied to blade passing frequency — and to derive a bearing from the time difference of arrival between microphones. Detection range for a small quadcopter is 300–1,000 m in quiet conditions, less in noise. A single node costs a few hundred to a few thousand dollars, and networks of nodes spread over an area produce both detection and rough localization. Ukraine has deployed thousands of such nodes as a distributed early-warning network against Shahed drones.

## Strengths and weaknesses
Cost and passivity are the advantages, and they enable something the expensive sensors cannot: coverage of a whole country by distributing cheap nodes. Acoustic sensing also detects drones that emit no RF and are too small for radar at low altitude, which is exactly the gap the other sensors leave. The weaknesses are range and noise. A few hundred metres is short, wind and traffic noise degrade performance sharply, and the sensor cannot classify beyond broad categories. Electric drones at altitude are quiet enough to be missed.

## When to use
Use acoustic sensing as a distributed early-warning layer where cost per node allows dense coverage, and as a close-in detection layer against small drones that radar and RF miss. It works particularly well for cueing: an acoustic alert tells an operator where to point a camera. If the requirement is precise tracking for a fire-control solution, acoustics will not provide it. In quiet rural environments it performs far better than in cities, and coverage planning should assume the worst-case noise floor rather than the average.

## Limits and failure modes
Ambient noise from wind, traffic, machinery, and gunfire masks detections. Range is short enough that a sparse network has large gaps. Altitude reduces signal strength quickly. Fixed-wing drones and jet-powered types have different signatures that may not be in the classifier's training set. Bearing accuracy from a single node is coarse, and localization requires several nodes hearing the same aircraft.

## Examples
Ukraine's Sky Fortress acoustic network of several thousand nodes, Squarehead Discovair, Scientific Applications and Research Associates systems, and the acoustic channels integrated into several multi-sensor counter-UAS products.

## Economic profile
Acoustic detection is the clearest example of the cheap-and-many principle working in counter-UAS. Nodes cost a few hundred dollars, use commodity microphones and small compute modules, and connect over cellular networks. Ukraine's network reportedly cost a small fraction of what an equivalent radar coverage would have, and it demonstrably contributes to intercepting long-range attack drones. Expect this approach to be copied widely, since the barrier is software and network integration rather than hardware.

## Further reading

[Department of Defense Counter-Unmanned Aircraft Systems (Congressional Research Service)](https://www.everycrsreport.com/reports/IF11426.html)
