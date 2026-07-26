---
number: 4
name: mmWave Radar
part: 2
group: Radar
uses: [perception, safety, nav]
range: [near, mid, far]
compute: med
adoption: std
cost: low
---

## Description
mmWave radar puts radio waves at 60–77 GHz out of a chip the size of a fingernail. FMCW radar measures range and velocity directly (velocity via Doppler), it sees through the rain, fog, dust, and darkness that blind every optical sensor, and it costs tens of dollars because hundreds of millions of cars carry it. Modern "4D imaging" radars use large virtual antenna arrays to add elevation and enough angular resolution to sketch object shapes, which moves radar from a detection sensor toward a perception sensor.

## Strengths and weaknesses
It works in any weather and any lighting, gives velocity directly for each detection, and is cheap, solid-state, and automotive-hardened. It also penetrates plastic, so it mounts invisibly behind bumpers. The weaknesses: angular resolution is far below LiDAR, so classic units report "something, 40 m, closing at 3 m/s" rather than shapes. Multipath ghosts and clutter mean the tracking layer has to treat detections skeptically, stationary objects have historically been filtered out (the stopped-firetruck problem), and metal dominates returns while pedestrians return very little.

## When to use
Pick radar whenever operation must continue through rain, fog, dust, or darkness, when direct velocity simplifies tracking, or when the BOM allows tens of dollars for long-range sensing. Use it as the redundancy layer beside cameras or LiDAR in safety cases, mounted invisibly behind plastic. It is the cheapest way to know something is closing at 3 m/s at 40 m. Avoid it as a sole perception sensor wherever classification or shape matters, because it cannot tell a pedestrian from a pole. Never ship the default static-return filtering unaudited. Pair it with a camera for semantics, and check whether imaging-radar resolution has caught up to your use case since you last looked.

## Failure modes
Multipath reflections create ghost objects under bridges and in tunnels. Guardrails and manhole covers get reported as obstacles. Radar-to-radar interference grows with fleet density. Bumper paint and ice attenuate the signal. Angular ambiguity smears adjacent objects into one. Over-filtering static returns deletes real stopped obstacles, which is the failure behind several accident reports.

## Examples
Every AEB/ACC-equipped car (Bosch, Continental, Denso corner radars), TI IWR/AWR chips powering robot and drone radars, imaging-radar vendors (Arbe, Zendar, Bosch Gen6), Google Soli's micro-gesture radar, industrial level sensors.

## Economic profile
Radar is the cheapest long-range sensing per dollar in existence, on the back of TI/NXP/Infineon silicon economics: a single-chip radar is now a $10–40 part. Robotics adoption lags its merits mostly for software reasons (the data is sparse and unusual, and open-source tooling is thin). Imaging radar is the segment to watch. If resolution keeps climbing at radar prices, it will take over LiDAR's mid-range use cases from below.

## Further reading

[The Fundamentals of Millimeter Wave Radar Sensors (Texas Instruments)](https://www.ti.com/lit/wp/spyy005a/spyy005a.pdf) · [4D Millimeter-Wave Radar in Autonomous Driving: A Survey (arXiv)](https://arxiv.org/abs/2306.04242)
