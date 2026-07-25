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
The richest sensor per dollar ever made: smartphone volume turned CMOS image sensors into $2–20 components delivering megapixels of texture, color, and semantic detail no other modality approaches. A camera reads signs, distinguishes a plastic bag from a rock, and recognizes a specific person — but measures geometry only by inference, through learned depth, structure-from-motion, or known-object priors. The camera is where modern robotics' deep-learning revolution actually lives.

## Strengths and weaknesses
Unmatched semantic richness, tiny/cheap/passive, enormous ecosystem of models and tooling, and the sensor of choice for learned end-to-end policies (and for imitation of human video). Weaknesses: no direct depth; utterly dependent on illumination and dynamic range; the interpretation compute is the true cost — a $10 camera can demand a $1,000 GPU; and metric scale is unobservable without motion, stereo, or priors.

## When to use
Put cameras on essentially everything: they are the only sensor that delivers semantics — reading labels, classifying objects, feeding learned policies — and at $2–20 the sensor cost is never the objection. Choose camera-primary stacks when the task is recognition-heavy, the BOM is tight, and you can fund the real cost, which is GPU compute and data pipelines. Avoid relying on monocular vision as the sole geometric sensor where wrong depth is a safety event — night operation, out-of-distribution scenes, metric-critical manipulation; add stereo, ToF, or LiDAR for measured geometry unless you are deliberately making the camera-only model-progress bet with eyes open.

## Failure modes
Glare, low sun, and tunnel-exit dynamic range swings; darkness without illumination; motion blur at control-relevant speeds; lens contamination (the number-one fleet issue); rolling-shutter distortion under vibration; learned depth hallucinates on out-of-distribution scenes — confidently wrong geometry is the modality's signature failure; adversarial and spoofing edge cases.

## Examples
Tesla's eight-camera Autopilot suite (the camera-only flagship), every drone (DJI), warehouse AMR fiducial navigation, Sony IMX sensors as the de facto standard silicon, OAK/Luxonis and Basler in industrial vision, VLA-driven manipulation research running on plain webcams.

## Economic profile
Sensor cost is a rounding error; compute and data pipelines are the spend. The strategic argument of the decade — camera-only versus fusion — is at heart a bet that model progress outruns the cost of the sensors it replaces. Even fusion stacks are camera-first for semantics, so the modality's centrality is not in question; only its sufficiency is.
