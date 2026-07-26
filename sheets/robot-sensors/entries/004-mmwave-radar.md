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
Radio waves at 60–77 GHz from a chip the size of a fingernail: FMCW radar measures range and velocity directly (Doppler), sees through rain, fog, dust, and darkness that blind every optical sensor, and costs tens of dollars because hundreds of millions of cars carry it. Modern "4D imaging" radars with large virtual antenna arrays add elevation and enough angular resolution to sketch object shapes, promoting radar from a detection sensor toward a perception one.

## Strengths and weaknesses
All-weather, all-light operation; direct velocity per detection; cheap, solid-state, and automotive-hardened; penetrates plastic (mounts invisibly behind bumpers). Weaknesses: angular resolution remains far below LiDAR — classic units see "something, 40 m, closing at 3 m/s" rather than shapes; multipath ghosts and clutter demand tracking-layer skepticism; stationary objects are historically filtered out (the stopped-firetruck problem); and metal dominates returns while pedestrians whisper.

## When to use
Pick radar whenever operation must continue through rain, fog, dust, or darkness, when direct velocity simplifies tracking, or when the BOM allows tens of dollars for long-range sensing — and always as the redundancy layer beside cameras or LiDAR in safety cases, mounted invisibly behind plastic. It is the cheapest way to know something is closing at 3 m/s at 40 m. Avoid it as a sole perception sensor wherever classification or shape matters — it cannot tell a pedestrian from a pole — and never ship the default static-return filtering unaudited; pair it with a camera for semantics and check whether imaging-radar resolution has caught your use case since you last looked.

## Failure modes
Multipath reflections conjure ghost objects under bridges and in tunnels; guardrails and manhole covers masquerade as obstacles; radar-to-radar interference grows with fleet density; bumper paint and ice attenuate; angular ambiguity smears adjacent objects into one; and over-filtering static returns deletes real stopped obstacles — the failure that wrote several accident reports.

## Examples
Every AEB/ACC-equipped car (Bosch, Continental, Denso corner radars), TI IWR/AWR chips powering robot and drone radars, imaging-radar vendors (Arbe, Zendar, Bosch Gen6), Google Soli's micro-gesture radar, industrial level sensors.

## Economic profile
The cheapest long-range sensing per dollar in existence, riding TI/NXP/Infineon silicon economics — a single-chip radar is now a $10–40 part. Robotics adoption lags its merits mostly for software reasons (sparse, weird data; thin open-source tooling). Imaging radar is the segment to watch: if resolution keeps climbing at radar prices, it eats LiDAR's mid-range use cases from below.

## Further reading

[The Fundamentals of Millimeter Wave Radar Sensors (Texas Instruments)](https://www.ti.com/lit/wp/spyy005a/spyy005a.pdf) · [4D Millimeter-Wave Radar in Autonomous Driving: A Survey (arXiv)](https://arxiv.org/abs/2306.04242)
