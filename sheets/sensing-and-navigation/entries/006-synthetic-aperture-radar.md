---
number: 6
name: Synthetic aperture radar
part: 1
group: Imaging radar
functions: [search, id]
range: [med, long]
stealth: fair
jamming: fair
cost: vhigh
---

## Description
Synthetic aperture radar uses the motion of the platform to synthesize an antenna far longer than the physical one. As the aircraft or satellite flies, it collects returns from the same patch of ground over several seconds and coherently combines them, producing along-track resolution set by the antenna's physical length rather than by its beamwidth. Resolution of 0.3–1 m from a satellite 500 km up is routine. Because it is radar, it images through cloud, smoke, and darkness, which is what makes it complementary to optical imagery rather than a substitute for it.

## Strengths and weaknesses
All-weather, day-night imaging at high resolution is the advantage, and coherent processing enables techniques optical sensors cannot do: interferometry to measure ground displacement to millimetres, and coherent change detection to see that a vehicle moved or soil was disturbed between two passes. Moving-target indication runs alongside imaging. The weaknesses are interpretation and geometry. SAR imagery looks nothing like a photograph and needs trained analysts or trained models. Layover and shadowing distort terrain. Processing is compute-heavy, and the platform's motion must be known precisely, so SAR depends on a high-quality inertial navigation solution.

## When to use
Pick SAR when you need imagery regardless of weather or daylight, when you need to detect change over time, or when measuring ground deformation matters. If the sky is clear and you need visual identification for a human analyst, electro-optical imagery is cheaper and easier to interpret. If you need persistent stare rather than periodic revisit, neither works well and you want a loitering platform. The strongest current use is coherent change detection over routes and sites, which reveals disturbance that no optical sensor would show.

## How it is defeated
SAR is coherent, which makes it vulnerable to repeater jamming that injects false scenes or smears the image. Camouflage tuned to radar bands, corner-reflector decoys, and simply parking under structures all work. Because the technique needs a stable collection geometry, evasive platform motion degrades it. Timing the movement of equipment to fall between known satellite passes remains the most widely used counter, and publicly available orbital elements make it easy.

## Examples
Sentinel-1 (open data, the workhorse of civil SAR), Capella Space and ICEYE small satellite constellations, the US Lacrosse/Onyx satellites, the AN/APG-81's SAR modes on the F-35, Global Hawk's ASARS-2 and the Joint STARS radar's combined SAR and moving-target modes.

## Economic profile
SAR was the technology that most clearly changed with smallsats. ICEYE and Capella built sub-metre-capable satellites at a small fraction of traditional cost, and commercial SAR imagery is now bought routinely by defense and insurance customers alike. Prices per image have fallen by an order of magnitude in a decade. The remaining moats are the constellation size that determines revisit rate, and the analytic layer that turns a hard-to-read image into an answer.

## Further reading

[Synthetic Aperture Radar (NASA Earthdata)](https://www.earthdata.nasa.gov/learn/backgrounders/what-is-sar)
