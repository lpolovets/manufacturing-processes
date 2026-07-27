---
number: 14
name: Hyperspectral imaging
part: 2
group: Spectral sensing
functions: [id, search]
range: [med, long]
stealth: good
jamming: good
cost: vhigh
---

## Description
A hyperspectral imager records a continuous spectrum — typically 100 to 400 contiguous bands from the visible into the shortwave infrared — for every pixel in the scene. Every material has a spectral reflectance signature set by its molecular composition, so the resulting data cube lets an analyst identify what something is made of rather than just what shape it is. Multispectral imagers do the same thing with 4 to 15 broad bands, which is enough for vegetation health and land classification but not enough to separate materials with similar colors.

## Strengths and weaknesses
Material identification is the unique capability. Hyperspectral data separates real vegetation from green paint, identifies disturbed soil, finds specific minerals, detects chemical plumes, and picks camouflage out of a background that looks identical in a photograph. It works passively at long range. The weaknesses are data volume, atmosphere, and resolution. A single scene is gigabytes, so onboard processing or aggressive downlink management is mandatory. Atmospheric correction is required before signatures mean anything. And there is a hard trade between spectral and spatial resolution, so hyperspectral imagery is usually much coarser spatially than a panchromatic image from the same platform.

## When to use
Pick hyperspectral imaging when the question is what something is made of: camouflage detection, chemical and effluent detection, mineral exploration, crop and environmental monitoring, and detecting disturbed earth. If the question is where something is or what shape it has, ordinary imagery is far cheaper and easier. The realistic operational pattern is tip-and-cue — a wide-area imager finds candidates, hyperspectral confirms material, and a high-resolution optical sensor gets the picture a human can act on.

## How it is defeated
Spectrally matched camouflage materials are the direct counter, and they exist, though matching across 200 bands is much harder than matching visible color. Cloud blocks it entirely. Coarse spatial resolution means small objects are subpixel, and their signature gets mixed with the background, which is the practical limit for most tactical uses. Poor atmospheric correction produces false identifications, so the analytic chain is as much a vulnerability as the sensor.

## Examples
NASA's AVIRIS airborne instrument and the EMIT instrument on the ISS, the Italian PRISMA and German EnMAP satellites, Planet's Tanager and Pixxel's commercial hyperspectral constellations, the ARTEMIS sensor on TacSat-3, and airborne systems used for chemical agent detection.

## Economic profile
Commercial hyperspectral constellations are being built now by several small companies, betting that methane monitoring, agriculture, and mineral exploration will fund the capability that defense also wants. Methane detection in particular has become a real revenue driver because of emissions regulation. Sensor cost is high and data handling is harder than imaging, so the value has migrated to analytics — very few customers want a data cube, they want an answer about a specific material at a specific place.

## Further reading

[Earth observation data basics (NASA Earthdata)](https://www.earthdata.nasa.gov/learn/backgrounders/remote-sensing) · [EMIT imaging spectrometer (NASA JPL)](https://earth.jpl.nasa.gov/emit/)
