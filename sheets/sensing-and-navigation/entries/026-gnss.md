---
number: 26
name: GPS/GNSS receiver
part: 5
group: Satellite navigation
functions: [nav]
jamming: poor
cost: vlow
---

## Description
A GNSS receiver measures the travel time of signals from four or more satellites and solves for position and time. GPS, Galileo, GLONASS, and BeiDou each provide global coverage; a modern multi-constellation, multi-frequency receiver uses all of them, which improves accuracy and availability. Standard positioning gives 3–5 m accuracy, dual-frequency corrections give under a metre, and differential or real-time kinematic techniques give centimetres. The receiver also provides precise time, and that timing function underpins power grids, financial systems, and cellular networks far more than most people realize.

## Strengths and weaknesses
Accuracy, global coverage, and near-zero cost are the reasons GNSS is in everything: a chipset costs a couple of dollars and needs no infrastructure from the user. The weakness is the signal, which arrives from 20,000 km away at about −160 dBW — roughly the power of a 25 W light bulb seen from 20,000 km. That is far below the thermal noise floor and recoverable only through spread-spectrum processing gain. A few watts of jamming denies it over tens of kilometres. Spoofing, which transmits false signals rather than noise, is worse: the receiver reports a confident, wrong position.

## When to use
Use GNSS as the primary position and time reference in any benign environment, which covers nearly all civil use. In contested environments, treat it as a bonus rather than a foundation: assume it will be unavailable, design the system to work on inertial and other references, and use GNSS to bound inertial drift when it happens to be available. That inversion — GNSS-aided inertial rather than inertial-aided GNSS — is the single most important architectural change in military navigation over the past decade, and it is being repeated now in civil aviation as jamming near conflict zones has become routine.

## How it is defeated
Barrage jamming with a few watts denies a wide area, and commercial jammers cost tens of dollars. Spoofing with a software-defined radio produces false positions, and it has been observed at scale near conflict zones and around some ports and airports. Urban canyons and foliage attenuate the signal without any adversary involved. Ionospheric scintillation degrades it at high latitudes and near the equator. Signal outages also break timing in infrastructure that has no backup, which is a systemic civil vulnerability.

## Examples
Every smartphone, vehicle, and precision-guided munition; u-blox and Trimble receiver modules; survey-grade RTK systems; the timing receivers in cellular base stations and power substations; and the widely documented GPS interference around the Baltic, the eastern Mediterranean, and the Black Sea.

## Economic profile
GNSS is free infrastructure paid for by four governments and consumed by a global commercial industry worth hundreds of billions. Receiver chipsets are commodities. The economically interesting layer now is resilience: anti-jam antennas, alternative timing sources, and commercial low-Earth-orbit navigation services that transmit at far higher power than medium-orbit constellations. Several startups are building exactly that, and the demand signal from aviation and critical infrastructure has become substantial since 2022.

## Further reading

[GPS.gov: official U.S. government information about GPS](https://www.gps.gov/)
