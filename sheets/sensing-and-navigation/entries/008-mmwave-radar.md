---
number: 8
name: Millimeter-wave radar
part: 1
group: Fire-control radar
functions: [track, term, id]
range: [short, med]
stealth: fair
jamming: good
cost: med
---

## Description
Millimeter-wave radar operates from roughly 30 to 100 GHz, most often at 35 GHz (Ka-band) or 94 GHz (W-band). The short wavelength allows a narrow beam from a small antenna, which is exactly what a missile seeker or a small vehicle radar needs — an aperture a few centimetres across gives an angular resolution that would require a metre-scale dish at X-band. Resolution is good enough to discriminate a tank from a truck by its return profile. Atmospheric absorption is the price: oxygen and water vapor attenuate these frequencies sharply, so useful range is a few kilometres to a few tens of kilometres.

## Strengths and weaknesses
The combination of small aperture, fine resolution, and all-weather operation is what makes mmWave the standard for autonomous terminal seekers and for helicopter fire-control radar. It penetrates dust, smoke, and light foliage that defeat infrared. It also gives direct velocity measurement through Doppler. The weaknesses are range and rain. Attenuation at 94 GHz runs several dB per kilometre in clear air and much worse in heavy rain, so this is inherently a short-range sensor. Components have historically been expensive, though automotive volume at 77 GHz has changed that dramatically.

## When to use
Pick mmWave radar for terminal seekers on anti-armor weapons, for helicopter mast-mounted fire control, for automotive and robotic sensing, and for short-range counter-drone tracking. If range beyond about 30 km is needed, drop to X-band or lower. If you need to classify targets visually or confirm identity, pair it with an infrared imager — the standard dual-mode seeker does exactly this, using mmWave to find the target through obscurants and imaging infrared to confirm the aimpoint. Automotive silicon has made this pairing affordable in a way it was not fifteen years ago.

## How it is defeated
Heavy rain cuts range severely. Chaff cut for the band works. Corner reflectors and decoys are effective because the seeker's discrimination logic is simple by necessity. Because the beam is narrow, a small pointing error or a late target maneuver can put the target outside the acquisition basket. Jamming is harder than at lower frequencies mostly because few opponents field mmWave jammers, which is an economic obstacle rather than a physical one.

## Examples
The Longbow radar on the AH-64D/E and the Longbow Hellfire seeker, the Brimstone dual-mode seeker, SADARM and BONUS submunition sensors, automotive 77 GHz radar from Bosch and Continental, and counter-UAS tracking radars from a number of suppliers.

## Economic profile
Automotive demand transformed this segment. Radar-on-chip devices from TI, NXP, and Infineon at 77 GHz cost tens of dollars in volume, and defense applications now ride that supply chain for components even when the system is bespoke. That has cut seeker sensor costs and made mmWave viable in cheap munitions and counter-drone systems. The remaining defense-specific cost is in the antenna, packaging, and the discrimination software, not in the RF silicon.

## Further reading

[The Fundamentals of Millimeter Wave Sensors (Texas Instruments)](https://www.ti.com/lit/wp/spyy005a/spyy005a.pdf) · [Recommendation ITU-R P.676: Attenuation by atmospheric gases (ITU)](https://www.itu.int/rec/R-REC-P.676/en)
