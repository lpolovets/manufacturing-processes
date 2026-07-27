---
number: 12
name: SWIR imaging
part: 2
group: Imaging EO/IR
functions: [id, search, term]
range: [short, med]
stealth: strong
jamming: good
cost: high
---

## Description
Short-wave infrared covers roughly 0.9–1.7 µm, between visible light and thermal infrared. It is reflected radiation rather than emitted heat, so a SWIR image looks like a photograph rather than a thermal map, but it exploits nightglow — the faint airglow from the upper atmosphere that is much brighter in SWIR than in the visible band — so it produces useful imagery on a moonless night without any illumination. Detectors are usually indium gallium arsenide arrays, which work at or near room temperature with modest thermoelectric cooling.

## Strengths and weaknesses
SWIR sees through haze, fog, and some smoke far better than visible light, because scattering falls with wavelength. It images the 1,064 nm and 1,550 nm laser wavelengths used by designators and rangefinders, so it can see laser spots that no other imaging band shows. It also distinguishes materials that look identical in the visible band, including wet versus dry surfaces and some camouflage against real foliage. The weaknesses are cost and resolution: InGaAs arrays are expensive, typically $10k–50k, resolution is usually lower than visible sensors, and the band is nearly useless in total darkness indoors where there is no airglow.

## When to use
Pick SWIR when you need to see laser designation spots, image through haze, or discriminate materials that defeat visible-band camouflage. It is the standard choice for laser spot trackers and increasingly for covert illumination systems, since a 1,550 nm illuminator is invisible to both the naked eye and conventional night vision goggles. If cost matters and the requirement is simply night vision, image-intensified goggles or uncooled thermal are cheaper by an order of magnitude. In practice SWIR usually appears as the third channel in a high-end turret rather than as a sensor on its own.

## How it is defeated
Heavy cloud and rain still block it. It is a reflective band, so a target in genuine darkness with no airglow — indoors, under cover — is invisible. Camouflage designed with SWIR reflectance in mind, which modern multispectral camouflage materials include, works. As with all optical sensors, laser dazzling and damage are possible, and the same InGaAs sensitivity that makes it good at seeing lasers makes it easy to saturate.

## Examples
Laser spot trackers on targeting pods, the SWIR channels in MX-series and Wescam turrets, Sensors Unlimited and Xenics InGaAs cameras, hyperspectral instruments that use SWIR bands for material identification, and covert 1,550 nm illuminators used with SWIR viewers.

## Economic profile
InGaAs detector production is small and specialized, with a handful of suppliers, and prices have come down slowly compared with silicon or microbolometer arrays. There is meaningful non-defense demand from semiconductor inspection, agricultural sorting, and solar-cell testing, which helps sustain the supply base. Newer quantum-dot and germanium-on-silicon approaches promise much cheaper SWIR sensing and are the thing to watch, since a $500 SWIR sensor would change several product categories at once.

## Further reading

[Fundamentals of Infrared Detector Materials (SPIE)](https://spie.org/publications/fundamentals-of-infrared-detector-materials)
