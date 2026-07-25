---
number: 20
name: Vision-Based Tactile (GelSight-class)
part: 6
group: Force & touch
uses: [manip]
range: [contact]
compute: high
adoption: emerging
cost: med
---

## Description
Touch measured by camera: a soft, opaque elastomer pad deforms against the object while an internal camera watches the deformation under structured illumination, recovering contact geometry at optical resolution — surface texture, edges, shear fields, incipient slip — far beyond any taxel array. Because the output is an image, the entire deep-learning vision stack applies directly to touch, which is precisely why the approach has conquered manipulation research since GelSight's MIT origins.

## Strengths and weaknesses
Micron-scale contact geometry and rich shear/slip signals; leverages commodity cameras and CNN tooling; manufacturable from cheap components. Weaknesses: the gel is a consumable — it tears, wears, and its optical coating scuffs; the camera's standoff makes fingertips thick (packaging fights dexterity); frame-rate and processing latency trail dedicated force sensors; per-sensor photometric calibration; and absolute force calibration is inferential, derived from deformation models.

## When to use
Pick GelSight-class sensing for dexterity work where fine contact geometry pays: in-hand pose estimation, cable and fastener manipulation, texture and defect inspection by touch, and any learned manipulation stack — since the output is an image, it plugs straight into vision tooling, and $300–500 modules put it in reach of every lab. Avoid it in long-duty industrial cells until gel-tip life matches your maintenance intervals (tips are consumables, and sharp or abrasive parts eat them), and in tight kilohertz force loops where its frame-rate latency destabilizes control — there a conventional F/T sensor or taxel array is the right tool.

## Failure modes
Gel wear and tearing on sharp or abrasive parts (fleet operators stock replacement tips); coating scratches read as permanent phantom features; illumination LEDs aging shifts calibration; condensation or oil films alter optics; latency-induced instability in tight force loops; and models trained on one gel batch degrading on the next — manufacturing variance as a failure mode.

## Examples
GelSight Inc (Mini as the commercial standard), Meta AI's Digit (open-hardware, low-cost push) and its Digit 360 successor, TacTip (Bristol's pin-based variant), DexIt/9DTact-style academic derivatives, deployment in Amazon and lab bin-picking research.

## Economic profile
The $300–500 module price point made rich touch accessible to every lab, and consumable gel tips create a razor-blade revenue line. The open question is industrial fitness: research adores it, factories need months-long tip life. If durability closes, vision-based touch is positioned to become the fingertip standard for exactly the reason it won research — it speaks the same language (images) as the rest of the learned stack.
