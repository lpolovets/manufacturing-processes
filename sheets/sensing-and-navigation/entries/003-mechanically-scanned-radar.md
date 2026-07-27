---
number: 3
name: Mechanically scanned radar
part: 1
group: Surveillance radar
functions: [search, track]
range: [med, long]
stealth: poor
jamming: poor
cost: high
---

## Description
A mechanically scanned radar rotates or nods a single antenna to sweep the beam through space. Almost every radar built before 1990 works this way, and a very large number still do: airport surveillance, weather, naval air search, and most ground-based early warning. A rotating antenna at 10–15 rpm gives a full 360° picture every four to six seconds, which is fine for tracking airliners and poor for tracking anything that maneuvers. The mechanical gimbal is simple, cheap, and the source of most of the maintenance.

## Strengths and weaknesses
Cost per unit of aperture is the great advantage. A large rotating dish delivers gain that would be expensive to reproduce with an array, so mechanically scanned radars remain the cheapest way to get long detection range. They are also simple to maintain with ordinary technicians. The weaknesses are revisit rate and flexibility: the beam is where the antenna points, so track updates come once per rotation, and a maneuvering or fast target can be lost between looks. The radar also cannot interleave functions, and the mechanical drive is the component that wears out.

## When to use
Pick a mechanically scanned radar for wide-area surveillance where targets are cooperative or slow and the budget matters: air traffic control, weather, coastal surveillance, and long-range early warning. If you need to engage maneuvering targets or maintain many simultaneous tracks, an electronically scanned array is necessary. A common and sensible architecture pairs the two — a cheap rotating radar for volume search cueing an expensive electronically scanned set for engagement — which gets most of the coverage benefit at a fraction of the array cost.

## How it is defeated
Slow revisit rate is the exploitable weakness: a target that maneuvers between looks breaks track. Terrain masking and low-altitude flight defeat ground-based sets. Noise and deception jamming are effective because the waveform is predictable. Anti-radiation missiles home easily on a continuously rotating high-power emitter, which is why these radars now come with rapid displacement requirements measured in minutes.

## Examples
AN/TPS-77 and TPS-75 tactical radars, the AN/SPS-49 naval air search radar, ASR-9 and ARSR airport surveillance radars, the Russian P-18 and Kasta families, and the rotating back-to-back arrays on AWACS aircraft, which combine a mechanical scan in azimuth with electronic scan in elevation.

## Economic profile
This is the commodity end of radar. Prices per unit of detection range are far below phased arrays, the supplier base is broad and includes non-traditional vendors, and the technology diffuses easily. Ground-based early warning radars of this type are widely exported and widely copied. Their continued relevance rests on the same economics that keep cheap sensors in every field: adequate performance at a price that lets you buy enough of them to cover the area.

## Further reading

[Radar Principle (Radar Tutorial)](https://www.radartutorial.eu/01.basics/Radar%20Principle.en.html)
