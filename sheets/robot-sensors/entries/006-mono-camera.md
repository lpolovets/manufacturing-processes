---
number: 6
name: Monocular RGB Cameras
part: 3
group: Cameras
uses: [perception, nav, manip]
range: [near, mid, far]
compute: vhigh
adoption: std
cost: low
---

## Description
Cameras deliver more information per dollar than any other sensor. Smartphone volume turned CMOS image sensors into $2–20 components that deliver megapixels of texture, color, and semantic detail no other modality approaches. A camera reads signs, distinguishes a plastic bag from a rock, and recognizes a specific person. It measures geometry only by inference, through learned depth, structure-from-motion, or known-object priors. Most of modern robotics' deep-learning work happens on camera data.

## Strengths and weaknesses
Semantic richness is unmatched, the sensors are tiny, cheap, and passive, the ecosystem of models and tooling is enormous, and it's the sensor of choice for learned end-to-end policies (and for imitation of human video). The weaknesses: there's no direct depth, and performance depends entirely on illumination and dynamic range. The interpretation compute is the true cost, since a $10 camera can demand a $1,000 GPU. Metric scale is unobservable without motion, stereo, or priors.

## When to use
Put cameras on essentially everything. They are the only sensor that delivers semantics (reading labels, classifying objects, feeding learned policies), and at $2–20 the sensor cost is never the objection. Choose camera-primary stacks when the task is recognition-heavy, the BOM is tight, and you can fund the real cost, which is GPU compute and data pipelines. Avoid relying on monocular vision as the sole geometric sensor where wrong depth is a safety event: night operation, out-of-distribution scenes, metric-critical manipulation. In those cases add stereo, ToF, or LiDAR for measured geometry, unless you are deliberately making the camera-only model-progress bet with eyes open.

## Failure modes
Glare, low sun, and tunnel exits swing the dynamic range past what the sensor can hold. Darkness defeats the camera unless you add illumination. Motion blur shows up at control-relevant speeds. Lens contamination is the number-one issue in fleets. Vibration produces rolling-shutter distortion. Learned depth hallucinates on out-of-distribution scenes, and confidently wrong geometry is the signature failure of this modality. Adversarial and spoofing edge cases are also a concern.

## Examples
Tesla's eight-camera Autopilot suite (the camera-only flagship), every drone (DJI), warehouse AMR fiducial navigation, Sony IMX sensors as the de facto standard silicon, OAK/Luxonis and Basler in industrial vision, VLA-driven manipulation research running on plain webcams.

## Economic profile
Sensor cost is a rounding error; compute and data pipelines are the spend. The camera-only versus fusion argument is at heart a bet that model progress outruns the cost of the sensors it replaces. Even fusion stacks are camera-first for semantics, so cameras are central either way. The open question is whether they're sufficient on their own.

## Further reading

[Understanding Camera Sensors for Machine Vision (Edmund Optics)](https://www.edmundoptics.com/knowledge-center/application-notes/imaging/understanding-camera-sensors-for-machine-vision-applications/) · [Computer Vision: Algorithms and Applications (Szeliski)](https://szeliski.org/Book/)
