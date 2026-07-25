---
number: 8
name: ToF & Structured-Light Depth Cameras
part: 3
group: Cameras
uses: [manip, perception, safety]
range: [near, mid]
compute: med
adoption: common
cost: med
---

## Description
Active depth per pixel: time-of-flight cameras modulate infrared light and measure phase shift at every pixel simultaneously, while structured-light units project a known dot pattern and decode its deformation. Both deliver dense, computation-light depth indoors — the Kinect (structured light, 2010) accidentally launched a robotics research decade, and phone Face-ID modules industrialized the components. ToF has largely won the newer designs on range and robustness.

## Strengths and weaknesses
Dense depth with minimal compute (the sensor does the work), excellent short-range precision for grasping and bin-picking, small and cheap thanks to phone volume, works in total darkness. Weaknesses: active IR loses to sunlight outdoors; range limited by illumination power (typically 0.2–10 m); multipath within scenes (corners, shiny bins) bends measurements; frame-rate/resolution trade-offs; and multiple units interfere unless synchronized.

## Failure modes
Direct sunlight swamps the return — outdoor performance collapses; dark and IR-absorbing materials (black foam, some fabrics) go invisible; specular and transparent surfaces mis-range or vanish; multipath in concave corners reports walls closer than reality; inter-camera interference in multi-robot cells; temperature drift shifts phase calibration.

## Examples
Microsoft Azure Kinect and its industrial successors, orbbec's Kinect-lineage sensors (now the volume leader), PMD/Infineon ToF in phones and robots, Photoneo and Zivid structured-light 3D scanners for industrial bin-picking (the high-accuracy end), iPhone Face ID and LiDAR-branded rear ToF.

## Economic profile
Phone and automotive in-cabin volume made ToF chips a commodity; industrial-grade structured-light scanners (Photoneo, Zivid at $5–15k) hold the precision bin-picking niche with sub-millimeter accuracy. For indoor manipulation this family is usually the right first answer — the compute savings versus stereo pays for the sensor. Outdoors, it simply isn't in the running.
