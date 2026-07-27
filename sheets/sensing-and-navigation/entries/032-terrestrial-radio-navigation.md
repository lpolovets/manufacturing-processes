---
number: 32
name: Terrestrial radio navigation
part: 5
group: Terrestrial radio
functions: [nav]
jamming: fair
cost: vlow
---

## Description
Terrestrial radio navigation uses ground transmitters instead of satellites. TACAN and VOR/DME give aircraft bearing and distance to a station within a few hundred kilometres. Enhanced Loran transmits at 100 kHz and about 250 kW from a few large stations, giving 10–20 m accuracy over a thousand kilometres and precise timing as a backup to GNSS. Newer approaches use signals of opportunity — cellular base stations, broadcast towers, and low-Earth-orbit satellite downlinks — where the receiver derives position from signals never designed for navigation.

## Strengths and weaknesses
Ground transmitters deliver signals many orders of magnitude stronger than GNSS at the receiver, so jamming them requires vastly more power and far closer proximity. Low-frequency signals like eLoran propagate around terrain and into buildings and underground. Receivers are cheap. The weaknesses are coverage and infrastructure: someone has to build, power, and defend the transmitters, coverage is regional rather than global, and accuracy is worse than GNSS. Skywave interference at night degrades low-frequency systems, and cross-rate interference between stations requires careful management.

## When to use
Use terrestrial radio navigation as the resilient backup layer for critical infrastructure timing and for aviation and maritime navigation in regions that fund it. It is the most practical answer to the systemic problem that power grids, financial timestamps, and telecom networks all depend on GNSS timing with no fallback. If you need global coverage or centimetre accuracy, it does not deliver either. The policy question — whether to fund eLoran — has been debated for two decades in the US and UK, and the answer has changed several times.

## How it is defeated
High-power jamming close to the receiver still works, it is just much harder than jamming GNSS. Destroying or disabling the small number of high-power transmitters removes regional coverage, and they are large fixed targets. Skywave interference degrades accuracy at night. The deeper vulnerability is political rather than technical: these systems get switched off when budgets tighten, and Loran-C was decommissioned in the US in 2010 precisely because GPS seemed to have made it redundant.

## Examples
VOR/DME and TACAN networks worldwide, eLoran services in South Korea and the UK's trials, the Russian Chayka system, cellular-based positioning used in phones, and commercial LEO signals-of-opportunity navigation from companies working with Iridium and Starlink downlinks.

## Economic profile
The economics are public-infrastructure economics: high fixed cost, no direct revenue, and a benefit that only becomes visible when GNSS fails. That has made funding chronically unstable. The commercial alternative gaining traction is LEO-based navigation and timing from dedicated smallsat constellations, which transmit far more power than medium-orbit GNSS and can be funded as a subscription service. Several such ventures are now funded, and critical-infrastructure demand for GNSS-independent timing is the clearest driver.

## Further reading

[GPS.gov: official U.S. government information about GPS](https://www.gps.gov/)
