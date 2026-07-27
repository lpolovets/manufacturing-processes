---
number: 7
name: Passive coherent location radar
part: 1
group: Passive radar
functions: [search, track]
range: [med]
stealth: good
jamming: good
cost: med
---

## Description
Passive coherent location uses somebody else's transmitters as its illuminator. A receiver picks up the direct signal from an FM radio station, a digital television transmitter, or a cellular base station, and also picks up the same signal scattered off an aircraft. Correlating the two gives bistatic range and Doppler, and several receivers together produce a track. The system transmits nothing at all. Because these transmitters mostly operate in the VHF and UHF bands, passive radar inherits the counter-stealth advantage of long wavelengths as a side effect.

## Strengths and weaknesses
Emitting nothing is the decisive advantage: there is no signal to detect, no signal to home an anti-radiation missile on, and no spectrum allocation to obtain. Equipment is cheap, mostly commercial receivers and computers, and it can be deployed covertly. Bistatic geometry also produces returns from aspects a monostatic radar never sees, which helps against shaping-based stealth. The weaknesses are dependence and geometry: you get the transmitters you get, coverage is dictated by their locations and power, accuracy is worse than an active radar, and processing is demanding because the direct-path signal is far stronger than the echo.

## When to use
Pick passive radar for covert surveillance, for gap-filling in an integrated air defense network, and for situations where emitting would be dangerous or is not permitted. It is also increasingly used for civil purposes like drone detection near airports, where spectrum licensing for an active radar is difficult. If you need engagement-quality tracks or coverage over ocean where no transmitters exist, an active radar is required. A reasonable architecture uses passive receivers as the always-on layer and turns active radars on only when a track needs refining.

## How it is defeated
Turning off or destroying the illuminators removes the radar, which is one reason broadcast infrastructure is an early target in conflicts. Coverage holes exist wherever transmitters do not. Accuracy is usually insufficient for engagement without handoff. The processing chain can be stressed by clutter and multipath in urban terrain, and low-altitude targets remain hard for the same reasons they are hard for any ground-based sensor.

## Examples
Hensoldt TwInvis, Lockheed Martin Silent Sentry, Thales Homeland Alerter, the Czech VERA-NG (a related emitter-locating system rather than a true PCL), Chinese DWL002, and several university and startup drone-detection systems using DVB-T illumination.

## Economic profile
Hardware costs are low — software-defined receivers and commodity compute — so the barrier is signal processing expertise rather than manufacturing. That has let smaller companies and national research institutes field credible systems, and it makes passive radar unusually proliferation-friendly. The commercial market is growing around counter-drone and airport applications where an active radar's licensing and interference problems are prohibitive. Expect capability to track improvements in general-purpose computing more closely than in radar hardware.

## Further reading

[Radar Principle (Radar Tutorial)](https://www.radartutorial.eu/01.basics/Radar%20Principle.en.html)
