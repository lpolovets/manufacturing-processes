---
number: 11
name: Uncooled LWIR imaging
part: 2
group: Imaging EO/IR
functions: [search, id, track]
range: [near, short]
stealth: strong
jamming: good
cost: low
---

## Description
Uncooled long-wave infrared imaging uses a microbolometer array — a grid of tiny thermally isolated resistors whose resistance changes as incident infrared radiation warms them. There is no cryocooler, no cooldown, and no vacuum-encapsulated cold finger to fail. Sensitivity is lower than a cooled photon detector, with noise-equivalent temperature difference typically 30–50 mK against 20 mK or better for cooled MWIR, but the sensor turns on in under a second, draws a watt or two, and costs a few hundred dollars at volume.

## Strengths and weaknesses
Cost, power, size, and instant-on operation are the advantages, and they compound: an uncooled core small enough for a handheld sight is also small enough for a 250 g drone. The 8–14 µm band works well against ambient-temperature targets like people, and it penetrates smoke and haze better than MWIR. The weaknesses are sensitivity and range. Detection range against vehicles is typically a third to a half of a comparable cooled system, resolution is usually 640×512 or below at accessible prices, and the sensor needs periodic flat-field correction, which produces a brief shutter interruption in the image.

## When to use
Pick uncooled LWIR for anything short-range and cost-constrained: weapon sights, driver's viewers, handheld observation devices, small drone payloads, and industrial or firefighting thermal cameras. If detection past about 3–5 km against vehicles matters, or if you need the sensitivity for a seeker, use cooled MWIR. The most common design mistake here is specifying resolution and ignoring optics — a 640×512 core with a wide lens has poor range performance regardless of the detector, and focal length usually matters more than pixel count.

## How it is defeated
Thermal camouflage and signature management work, and multispectral smoke defeats it. Glass is opaque in the LWIR band, so anything behind a window is invisible. Rain and fog attenuate. The sensor's periodic non-uniformity correction blinks the image for a fraction of a second, which is a minor tactical annoyance. Because sensitivity is modest, thermal contrast between target and background at dawn and dusk can drop below the detection threshold entirely.

## Examples
Teledyne FLIR Boson and Lepton cores, Lynred and Guide Sensmart microbolometers, thermal sights on infantry weapons, the payloads on DJI and military small drones, and the thermal channels in most automotive night vision systems.

## Economic profile
Microbolometer prices have fallen roughly an order of magnitude in fifteen years, and Chinese suppliers now compete hard at the low end, which has both cut prices and created a supply-chain policy problem for Western buyers. Cores under $500 have made thermal imaging standard on small drones, and that in turn is one of the reasons cheap drones became so effective at night. Export control still applies above certain frame rate and resolution thresholds, and those thresholds are increasingly out of step with what is commercially available.

## Further reading

[Research and science (Teledyne FLIR)](https://www.flir.com/discover/rd-science/) · [Fundamentals of Infrared Detector Materials (SPIE)](https://spie.org/publications/fundamentals-of-infrared-detector-materials)
