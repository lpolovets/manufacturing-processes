---
number: 10
name: Thermal Cameras
part: 3
group: Cameras
uses: [perception, safety]
range: [near, mid, far]
compute: med
adoption: common
cost: med
---

## Description
Seeing heat instead of light: microbolometer arrays image long-wave infrared (8–14 µm) emitted by everything above absolute zero, requiring no illumination at all. A pedestrian glows against a cold road at midnight, in fog, through smoke — conditions that defeat every visible-light sensor. Uncooled microbolometers made the capability affordable; export regulations (thermal imaging is dual-use) still shape resolution and frame-rate availability.

## Strengths and weaknesses
Sees warm-blooded life and machinery in zero light, smoke, dust, and most fog; passive and unjammable; doubles as a temperature-measurement instrument (overheating motors, battery fires). Weaknesses: resolution is low and optics (germanium) expensive; no texture or color for recognition; glass is opaque and polished metal is a thermal mirror; scene contrast collapses when everything equilibrates (rain-soaked scenes, 37 °C air); frame rates export-capped on many parts.

## Failure modes
Thermal crossover (dawn/dusk) erases contrast between targets and background; reflective metal surfaces show the sky's temperature, not their own; glass blocks the view entirely; sun-heated clutter creates false positives for "warm object" logic; uniformity drift requires periodic shutter-based recalibration (momentary blindness); low resolution merges adjacent objects at range.

## Examples
FLIR (Teledyne) Lepton/Boson modules — the category's Intel; automotive night vision (Autoliv/Veoneer systems in premium cars), AEB-pedestrian research after high-profile nighttime failures, firefighting and SAR drones (DJI thermal payloads), battery-plant and substation monitoring robots.

## Economic profile
Leptons brought entry thermal to ~$200, but automotive-grade resolution remains a $1k+ germanium-and-regulation story; a genuine volume driver (NHTSA's pedestrian-AEB night requirements pushing thermal into mainstream cars) could finally break the cost curve. In robotics it is the specialist that earns its slot wherever robots share darkness with living things.
