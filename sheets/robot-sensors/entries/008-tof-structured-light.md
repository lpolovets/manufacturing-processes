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
Both of these measure depth at every pixel using their own light source. Time-of-flight cameras modulate infrared light and measure the phase shift at every pixel simultaneously; structured-light units project a known dot pattern and decode how it deforms. Both deliver dense depth indoors without much compute. The Kinect (structured light, 2010) accidentally launched a robotics research decade, and phone Face-ID modules industrialized the components. ToF has largely won the newer designs on range and robustness.

## Strengths and weaknesses
Depth comes out dense with minimal compute, because the sensor does the work. Short-range precision is excellent for grasping and bin-picking, the modules are small and cheap thanks to phone volume, and they work in total darkness. The weaknesses: active IR loses to sunlight outdoors, and range is limited by illumination power (typically 0.2–10 m). Multipath within a scene (corners, shiny bins) bends measurements, there are frame-rate and resolution trade-offs, and multiple units interfere unless you synchronize them.

## When to use
Pick this family as the first answer for indoor depth at 0.2–5 m. Manipulation, bin-picking, and AMR obstacle sensing get dense, low-compute depth that works in darkness, and phone-volume ToF modules keep the price in stereo's range without stereo's matching compute. Step up to industrial structured-light scanners (Photoneo, Zivid class, $5–15k) when bin-picking needs sub-millimeter registration. Avoid it outdoors, since direct sunlight collapses performance, and distrust it on black foam, transparent packaging, and shiny bins. For the outdoor cases use stereo, and for the optically hostile ones you'll need added modalities or polarization tricks.

## Failure modes
Direct sunlight swamps the return, so outdoor performance collapses. Dark and IR-absorbing materials such as black foam and some fabrics go invisible. Specular and transparent surfaces either mis-range or drop out entirely. Multipath in concave corners reports walls closer than they are. Cameras interfere with each other in multi-robot cells. Temperature drift shifts the phase calibration.

## Examples
Microsoft Azure Kinect and its industrial successors, orbbec's Kinect-lineage sensors (now the volume leader), PMD/Infineon ToF in phones and robots, Photoneo and Zivid structured-light 3D scanners for industrial bin-picking (the high-accuracy end), iPhone Face ID and LiDAR-branded rear ToF.

## Economic profile
Phone and automotive in-cabin volume made ToF chips a commodity. Industrial-grade structured-light scanners (Photoneo, Zivid at $5–15k) hold the precision bin-picking niche with sub-millimeter accuracy. For indoor manipulation this family is usually the right first answer, because the compute savings versus stereo pay for the sensor. Outdoors, it isn't in the running.

## Further reading

[Time-of-Flight Camera: An Introduction (Texas Instruments)](https://www.ti.com/lit/pdf/sloa190) · [How Structured Light Works (Zivid)](https://blog.zivid.com/how-structured-light-works)
