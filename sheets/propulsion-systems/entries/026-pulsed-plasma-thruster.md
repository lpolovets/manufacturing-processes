---
number: 26
name: Pulsed plasma thruster
part: 4
group: Electromagnetic
regimes: [space]
thrust: [micro]
isp: high
maturity: common
cost: vlow
---

## Description
A pulsed plasma thruster discharges a capacitor across the face of a solid propellant bar, usually PTFE (Teflon). The arc ablates a thin layer of the surface, ionizes it, and the resulting current sheet is accelerated out by its own magnetic field through the Lorentz force. Each pulse lasts microseconds and produces a tiny, very repeatable impulse bit. The propellant is a solid bar pushed forward by a spring, so there are no tanks, valves, or feed systems of any kind, which makes the whole thruster about as robust as electric propulsion gets.

## Strengths and weaknesses
Simplicity and impulse precision are the advantages. With solid propellant and no fluid system, the thruster survives long dormant periods and there is nothing to leak. Impulse bits of 10–100 µN·s allow very fine control, and the design scales down to a few watts. Weaknesses are efficiency and thrust. Overall efficiency is typically 5–15%, far worse than any other electric option, because much of the discharge energy goes into heating and into ejecting neutral material that never gets accelerated. Average thrust is on the order of micronewtons, so total delta-v accumulates very slowly.

## When to use
Pick a pulsed plasma thruster for small spacecraft that need precise, occasional impulses with minimal system complexity, particularly where a fluid system would be a reliability or contamination concern. If the mission needs efficiency or meaningful delta-v, almost any other electric thruster is better. In practice PPTs have been displaced on most new missions by electrospray and small Hall thrusters, and they persist mainly where their extreme simplicity and long dormancy tolerance matter, or on very low-power spacecraft that cannot support a discharge-based thruster continuously.

## Key numbers
Isp 500–1,500 s · impulse bit 10–100 µN·s · average thrust 1–100 µN · efficiency 5–15% · power 1–100 W · flight-demonstrated since LES-6 in 1968, one of the first electric propulsion systems ever flown operationally.

## Examples
LES-6 and LES-8/9 (1968 onward), NASA's EO-1 mission, the Air Force's TechSat 21 work, Japan's microsatellite PPTs, and a number of university cubesats that chose PPTs for their lack of pressurized components.

## Economic profile
PPTs are cheap and largely commoditized, with no significant commercial supply base because demand is small. Their real value now is historical and pedagogical — they were the first electric propulsion in orbit and they demonstrate that low efficiency can be acceptable when system simplicity is worth more. Expect continued niche use rather than growth, since the smallsat propulsion market has consolidated around electrospray and miniature Hall thrusters.

## Further reading

[Overview of NASA's Pulsed Plasma Thruster Development Program (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/20040139545) · [In-Space Propulsion: State of the Art of Small Spacecraft Technology (NASA)](https://www.nasa.gov/smallsat-institute/sst-soa/in-space-propulsion/)
