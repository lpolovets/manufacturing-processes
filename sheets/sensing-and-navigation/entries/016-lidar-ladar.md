---
number: 16
name: LiDAR and LADAR
part: 2
group: Active optical
functions: [search, id, nav]
range: [near, short]
stealth: good
jamming: good
cost: med
---

## Description
LiDAR builds a three-dimensional point cloud by firing many laser pulses and timing each return. Military LADAR systems extend the idea with two useful modes. Geiger-mode and single-photon detectors let a sensor collect returns fast enough to map large areas from an aircraft, and because a pulse that passes through a gap in foliage still returns from the ground, multiple-return processing produces bare-earth terrain maps under tree cover. Gated-viewing systems use a pulsed illuminator and a shuttered camera to image a specific range slice, cutting through fog and haze that defeat ordinary cameras.

## Strengths and weaknesses
Direct geometric measurement is the advantage. Point clouds give absolute dimensions, which makes them good for terrain mapping, change detection, target dimensioning, and navigation in GPS-denied environments. Foliage penetration is a genuinely unique capability. The weaknesses are range, weather, and cost. Atmospheric scattering limits practical range to a few kilometres for airborne systems, rain and fog cut it further, and shiny or absorbing surfaces return nothing. Automotive-driven cost declines have been real but military-grade long-range units remain expensive, and data volumes are large.

## When to use
Pick LiDAR for terrain and site mapping, for foliage-penetrating survey, for autonomous navigation where measured geometry beats inferred depth, and for gated imaging through obscurants at short range. If the requirement is wide-area imaging at long range, SAR does it through weather and LiDAR does not. If the platform is a small drone that needs obstacle avoidance, cheap solid-state automotive LiDAR now costs a few hundred dollars and is usually the right answer. For archaeology and terrain intelligence under canopy, nothing else does the job.

## How it is defeated
Fog, rain, dust, and smoke scatter the beam and limit range. Absorbing and specular surfaces return nothing. Because it is an active emitter at optical wavelengths, a laser warning receiver detects it. Camouflage netting that presents a broken surface degrades point-cloud interpretation. The practical limit in most military uses is simply range: a sensor that works well at 1 km and poorly at 5 km constrains the platform's standoff.

## Examples
Airborne bathymetric and terrain LiDAR used for hydrographic survey, the ALIRT and Jigsaw foliage-penetrating systems, automotive units from Hesai, Luminar, and Ouster now appearing on ground robots, and the LiDAR mapping that has transformed archaeological survey in forested regions.

## Economic profile
The automotive market drove LiDAR costs down by more than an order of magnitude over a decade and consolidated the supplier base around a few Chinese and US manufacturers. Defense buyers benefit from the component cost curve but face a supply-chain concentration problem, since the volume producers are mostly Chinese. High-end airborne mapping systems remain a separate, small, expensive market with different suppliers and no comparable cost decline.

## Further reading

[What is lidar? (NOAA National Ocean Service)](https://oceanservice.noaa.gov/facts/lidar.html) · [3D Elevation Program (US Geological Survey)](https://www.usgs.gov/3d-elevation-program)
