---
number: 7
name: Stereo Depth Cameras
part: 3
group: Cameras
uses: [perception, manip, nav]
range: [near, mid]
compute: high
adoption: common
cost: med
---

## Description
Depth the way biology does it: two cameras a known baseline apart, matching pixels between views to triangulate distance. Modern modules add an infrared texture projector so blank walls still match, and run the correspondence search in on-board ASICs, delivering registered RGB-D streams over USB. Depth precision falls with distance squared and grows with baseline — physics that sets each product's sweet spot and its ceiling.

## Strengths and weaknesses
Passive-capable (works in sunlight where ToF struggles), dense depth aligned to color, no moving parts, well-packaged commercial modules with mature SDKs. Weaknesses: depth error grows quadratically with range — centimeter accuracy at 1 m becomes decimeters by 5 m; textureless and repetitive surfaces defeat matching without projection; occlusion shadows at object edges; calibration drifts if the rigid baseline flexes; compute is real (though increasingly on-module).

## Failure modes
Texture-poor surfaces (white walls, shiny tables) yield holes or garbage without the projector; the projector washes out in direct sunlight; repetitive patterns (fences, gratings) cause false matches with confident wrong depth; thermal or mechanical flex of the baseline silently mis-scales the world until recalibration; specular and transparent objects break the Lambertian assumption underlying everything.

## Examples
Intel RealSense D400 series (the research default, surviving Intel's wind-down scare), Stereolabs ZED (outdoor/long baseline), Luxonis OAK-D (with on-board neural compute), Skydio's navigation cameras (the high-water mark of stereo-only autonomous flight), Subaru EyeSight (automotive stereo's persistence).

## Economic profile
$200–500 modules made stereo the default lab and startup depth sensor. Its commercial position is squeezed from two sides — ToF modules underneath (cheaper, better indoors, phone volume) and learned monocular depth above (free with the camera you already have) — but sunlight performance and metric reliability keep stereo the outdoor workhorse. Skydio-class results show how far the modality stretches with enough software.
