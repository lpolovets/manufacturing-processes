---
number: 1
name: Counter-UAS radar
part: 1
group: Radar and RF
threats: [g12, g35, swarm, cm]
effectiveness: good
collateral: none
exchange: good
cost: med
---

## Description
A counter-UAS radar is a short-range surveillance radar optimized for very small, slow, low-flying targets — the opposite of what most air-defense radars were designed for. Detecting a 0.01 m² radar cross-section object moving at 15 m/s against ground clutter requires high update rates, fine Doppler resolution, and processing that can separate a drone from a bird, a car, or a swaying tree. Most systems use X-band or Ku-band electronically scanned arrays with 360° coverage, detecting a small quadcopter at 3–8 km and a Group 3 aircraft at 15–30 km.

## Strengths and weaknesses
Radar is the only sensor that gives range, bearing, and elevation continuously in all weather and darkness, which is what a fire-control solution needs. It works regardless of whether the drone transmits. The weaknesses are clutter and classification. Birds outnumber drones and look similar, so false alarm rates are the practical performance metric rather than detection range. Terrain masking and urban multipath cut coverage badly. And a radar is an emitter, so it can be detected and attacked, which matters more as anti-radiation loitering munitions proliferate.

## When to use
Use radar as the backbone sensor for any fixed-site or vehicle-mounted counter-UAS system, cued and confirmed by an electro-optical sensor before engaging. If the site is in a city with heavy clutter and spectrum restrictions, passive RF detection may be easier to deploy and is worth pairing. For very small drones at close range, acoustic sensing fills a genuine gap. The number to interrogate in any procurement is the false alarm rate in the intended environment across a full day, not the maximum detection range in a clear test.

## Limits and failure modes
Bird traffic drives false alarms, and operators quickly learn to ignore an alarm-heavy display, which is a failure mode in its own right. Ground clutter and buildings create shadows where drones fly deliberately. Very low and slow flight profiles hug terrain to exploit exactly this. Spectrum licensing for a transmitting radar is a genuine obstacle for civil deployments near airports, which is where the need is often greatest.

## Examples
SRC AN/TPQ-50 and LSTAR, Robin Radar Elvira and Iris designed specifically for bird and drone discrimination, DRS RADA multi-mission hemispheric radars widely used on vehicle-mounted systems, Blighter and Echodyne compact arrays, and the radars integrated into systems like Coyote and L-MADIS.

## Economic profile
Radar is usually the most expensive single sensor in a counter-UAS system, at $500k–5M per unit, and it is where most integrators buy rather than build. Automotive and commercial radar silicon has cut component costs, and compact electronically scanned arrays from newer entrants have brought prices down substantially. The recurring economic problem is that fixed-site coverage requires many radars for terrain and clutter reasons, so the cost of protecting an area scales worse than a single system's price suggests.

## Further reading

[Department of Defense Counter-Unmanned Aircraft Systems (Congressional Research Service)](https://www.everycrsreport.com/reports/IF11426.html) · [Radar Principle (Radar Tutorial)](https://www.radartutorial.eu/01.basics/Radar%20Principle.en.html)
