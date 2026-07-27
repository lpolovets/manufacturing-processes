---
number: 29
name: Scene matching and visual navigation
part: 5
group: Map matching
functions: [nav, term]
jamming: good
cost: low
---

## Description
Scene matching compares a live image from a downward or forward-looking camera against stored reference imagery and computes a position fix from the correlation. The original implementation, DSMAC on Tomahawk, correlated digitized scenes near the target to refine terminal accuracy to a few metres. Modern versions use learned features rather than raw correlation, match against satellite imagery basemaps, and run on hardware costing a few hundred dollars, which is why visual navigation has appeared rapidly on cheap drones as a GPS-denied fallback.

## Strengths and weaknesses
It gives an absolute fix with no emissions and no external signal, and modern implementations achieve tens of metres accuracy over long flights and metre-level accuracy against distinctive scenes. Hardware is cheap and light. The weaknesses are all about the imagery: night, cloud, snow, and seasonal change alter the scene enough to break naive matching, though learned methods are considerably more robust than correlation was. Featureless terrain — open water, desert, uniform forest — provides nothing to match. And the reference imagery must be current enough that the world still looks like the map.

## When to use
Use visual navigation as the GPS-denied fallback on any small air vehicle that carries a camera anyway, which is nearly all of them. It is the cheapest jam-resistant absolute navigation available, and it is what most low-cost strike drones now use when GNSS is denied. If the route is over water or featureless ground, or the mission is at night without a thermal camera, plan on inertial coasting instead. Pair it with a good MEMS inertial unit: the camera supplies absolute fixes and the inertial unit bridges the gaps and handles fast motion.

## How it is defeated
Darkness and cloud stop visible-band matching, though thermal cameras and radar altimetry partially cover that. Featureless terrain gives nothing to correlate. Seasonal and structural change degrades matching against stale reference imagery. Deliberate scene alteration is possible at small scale but impractical over a route. Smoke and dust in an active battle area degrade it exactly when it matters most, which is a real limitation observed in current conflicts.

## Examples
DSMAC on Tomahawk, the visual terminal guidance on several loitering munitions, commercial visual positioning systems from companies like Sightec and VisionNav, ArduPilot and PX4 optical-flow and visual-odometry modes, and the widely reported use of visual navigation on Ukrainian and Russian strike drones.

## Economic profile
This is the cheapest anti-jam navigation technology available and it is diffusing extremely fast, because the hardware is a camera and a small compute module and the reference imagery is commercially available. Cost per aircraft is tens to hundreds of dollars. That combination has significant consequences: GNSS jamming, which was a reliable counter to cheap drones two years ago, is much less effective against a drone that navigates visually, and defensive planning has had to adjust accordingly.

## Further reading

[A Minimal State Augmentation Algorithm for Vision-Based Navigation (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/20190033574)
