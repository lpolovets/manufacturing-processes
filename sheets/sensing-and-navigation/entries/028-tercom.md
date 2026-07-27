---
number: 28
name: Terrain contour matching
part: 5
group: Map matching
functions: [nav]
jamming: strong
cost: med
---

## Description
Terrain contour matching compares the ground profile measured by a radar altimeter along the flight path against a stored digital elevation map, and slides the measured profile over the map until it fits. The result is an absolute position fix that requires no external signal and cannot be jammed. TERCOM was developed for cruise missiles in the 1970s and gave Tomahawk its accuracy over intercontinental ranges long before GPS existed. TERPROM, the terrain-referenced navigation used on combat aircraft, applies the same principle continuously for both navigation and ground-collision avoidance.

## Strengths and weaknesses
Complete immunity to jamming and spoofing is the defining advantage, and accuracy is good — tens of metres, improving to metres in distinctive terrain. It is entirely self-contained apart from the stored map. The weaknesses are terrain and data. Flat terrain, water, and desert have no contours to match, so the technique fails exactly where a low-flying missile might most want it. Fresh snow and seasonal change alter measured profiles. And the map has to be made in advance from elevation data of sufficient resolution, which is a planning burden and historically a limit on where the weapon could be used.

## When to use
Use terrain-referenced navigation for cruise missiles and low-flying aircraft over terrain with relief, as the jam-proof backbone of a navigation solution that GNSS merely refines when available. If the route crosses ocean, flat plains, or featureless desert, it will not work and you need inertial coasting or scene matching against distinctive features instead. Modern practice blends it: inertial for continuity, terrain matching for absolute fixes over land, GNSS opportunistically, and scene matching for the terminal phase.

## How it is defeated
Featureless terrain defeats it passively. Large-scale terrain modification is impractical, which is part of the technique's appeal, but seasonal change, flooding, and heavy snow degrade matching. The dependence on pre-mission elevation data means denying or corrupting that data is an attack path, and global elevation datasets from radar interferometry have made this far harder to control than it was in the 1980s. Radar altimeter emissions are also detectable, so the aircraft is not entirely passive.

## Examples
TERCOM on Tomahawk and the AGM-86 ALCM, TERPROM on the F-16, Tornado, Typhoon, and Gripen, the Russian equivalents on Kh-55 and Kalibr, and terrain-referenced navigation systems increasingly fitted to uncrewed aircraft as a GPS backup.

## Economic profile
The technology itself is old and inexpensive; the value sits in the elevation data and the mission-planning system that turns it into usable maps. Global elevation datasets from SRTM and commercial radar satellites removed much of the former data barrier, which has made terrain-referenced navigation broadly accessible. That is a meaningful proliferation effect: a jam-proof navigation technique that once required national mapping resources now needs an open dataset and reasonable software.

## Further reading

[Intelligence Collection Programs and Systems (Federation of American Scientists)](https://irp.fas.org/program/collect/) · [3D Elevation Program (US Geological Survey)](https://www.usgs.gov/3d-elevation-program)
