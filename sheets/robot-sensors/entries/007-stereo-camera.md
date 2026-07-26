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
Stereo cameras get depth the way biology does. Two cameras sit a known baseline apart, and matching pixels between the two views triangulates distance. Modern modules add an infrared texture projector so blank walls still match, and run the correspondence search in on-board ASICs, which delivers registered RGB-D streams over USB. Depth precision falls with distance squared and grows with baseline, and that physics sets each product's sweet spot and its ceiling.

## Strengths and weaknesses
It can work passively, so it holds up in sunlight where ToF struggles. Depth comes out dense and aligned to color, there are no moving parts, and commercial modules are well packaged with mature SDKs. The weaknesses: depth error grows quadratically with range, so centimeter accuracy at 1 m becomes decimeters by 5 m. Textureless and repetitive surfaces defeat matching unless you project a pattern, object edges leave occlusion shadows, calibration drifts if the rigid baseline flexes, and the compute is real (though increasingly on-module).

## When to use
Pick stereo for outdoor depth in sunlight at roughly 0.5–15 m (drones, sidewalk and field robots, outdoor manipulation), where active-IR ToF washes out and LiDAR is overkill on cost or weight. Modern modules with on-board matching and projectors make it a $200–500 bolt-on that gives you registered RGB-D. Match baseline to working range, since precision falls off quadratically with distance. Avoid it past its baseline's sweet spot, on textureless indoor scenes without projection, and for short-range indoor grasping, where a ToF module is cheaper, denser, and lighter on compute. If you need real range outdoors, step up to LiDAR.

## Failure modes
Texture-poor surfaces such as white walls and shiny tables yield holes or garbage without the projector, and the projector itself washes out in direct sunlight. Repetitive patterns like fences and gratings cause false matches that report wrong depth with high confidence. Thermal or mechanical flex of the baseline mis-scales the world until you recalibrate, with no obvious symptom in the meantime. Specular and transparent objects break the Lambertian assumption that the whole method depends on.

## Examples
Intel RealSense D400 series (the research default, surviving Intel's wind-down scare), Stereolabs ZED (outdoor/long baseline), Luxonis OAK-D (with on-board neural compute), Skydio's navigation cameras (the strongest example of stereo-only autonomous flight), Subaru EyeSight (automotive stereo's persistence).

## Economic profile
$200–500 modules made stereo the default lab and startup depth sensor. Its commercial position is squeezed from two sides: ToF modules from underneath (cheaper, better indoors, phone volume) and learned monocular depth from above (free with the camera you already have). Sunlight performance and metric reliability keep stereo the outdoor workhorse. Skydio-class results show how far the modality stretches with enough software.

## Further reading

[Tuning Depth Cameras for Best Performance (RealSense)](https://dev.realsenseai.com/docs/tuning-depth-cameras-for-best-performance) · [Intel RealSense Stereoscopic Depth Cameras (arXiv)](https://arxiv.org/abs/1705.05548)
