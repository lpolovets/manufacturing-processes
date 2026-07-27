---
number: 9
name: Electro-optical imaging
part: 2
group: Imaging EO/IR
functions: [search, id, track]
range: [short, med]
stealth: strong
jamming: good
cost: med
---

## Description
Electro-optical imaging is a visible-band camera with a long lens, stabilized on a gimbal. Resolution is set by the aperture and the diffraction limit: a 30 cm telescope on a satellite resolves about 30 cm on the ground from 500 km. On an aircraft, a 100–500 mm lens on a stabilized turret reads a licence plate at a few kilometres. The technology itself is commodity — the same sensors that go in phones and cinema cameras — and the engineering value sits in the stabilization, the optics, and the processing that turns a shaky long-focal-length image into something usable.

## Strengths and weaknesses
Interpretability is the great advantage. A visible image is immediately understandable by a human and by every off-the-shelf computer vision model, which is not true of radar or infrared. Passive operation means no emissions to detect. Cost is low and falling. The weaknesses are equally obvious: no imagery at night without illumination, and none through cloud, fog, smoke, or dust. Haze cuts contrast at long slant ranges. Atmospheric turbulence limits resolution regardless of aperture on long horizontal paths, which is why ground-to-ground imaging past 10–20 km rarely works well no matter how good the optics are.

## When to use
Pick electro-optical imaging as the default identification sensor whenever there is daylight and reasonable weather, and for any application where a human has to make a positive identification. Pair it with thermal imaging rather than choosing between them — nearly every modern turret carries both, because the failure conditions barely overlap. If the requirement is all-weather or all-hours coverage, radar has to be in the architecture. For satellite imagery, check revisit rate and cloud statistics for the target area before assuming an optical constellation solves the problem.

## How it is defeated
Darkness, cloud, fog, and smoke are the ordinary defeats and they are cheap to arrange — smoke generators and multispectral obscurants are standard equipment. Camouflage and concealment work well against a visible-band sensor. Laser dazzlers can saturate or damage a sensor, and this is now widely fielded. At long slant ranges, atmospheric turbulence and haze reduce effective resolution well below the diffraction limit.

## Examples
The MX-series and Wescam turrets on most ISR aircraft, the Sniper and Litening targeting pods, the Maxar and Planet imaging constellations, and the electro-optical sensors on nearly every drone from quadcopters upward.

## Economic profile
This is the most commoditized sensing category in defense. Consumer and automotive image sensors set the price, and the defense premium sits almost entirely in the gimbal, the optics, and the export-controlled processing. Small turrets that cost $100k a decade ago now cost a fraction of that, which is what made cheap armed drones practical. The commercial imagery market has followed the same curve, with sub-metre imagery available on subscription and analysis rather than collection increasingly being where value accrues.

## Further reading

[Earth observation data basics (NASA Earthdata)](https://www.earthdata.nasa.gov/learn/backgrounders/remote-sensing)
