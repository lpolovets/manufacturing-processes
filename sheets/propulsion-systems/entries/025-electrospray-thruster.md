---
number: 25
name: Electrospray thruster
part: 4
group: Electrostatic
regimes: [space]
thrust: [micro]
isp: high
maturity: emerging
cost: vlow
---

## Description
An electrospray thruster extracts charged droplets or individual ions directly from the surface of a conductive liquid — usually an ionic liquid salt — using a strong electric field at a sharp emitter tip. There is no plasma discharge and no ionization chamber; the field does the work. Because emitters are microfabricated, a thruster is an array of hundreds or thousands of tips on a chip, and thrust scales by adding tips. The related field-emission electric propulsion approach does the same thing with liquid metal, typically indium. Thrust per unit is measured in micronewtons, and control resolution is correspondingly fine.

## Strengths and weaknesses
The advantages are precision, scalability, and packaging. A complete electrospray system can fit in a cubesat unit with no pressurized tank, since ionic liquids have negligible vapor pressure and can be stored in a wick. Isp of 800–3,000 s is very good, and thrust can be commanded smoothly down to sub-micronewton resolution, which is what drag-free and formation-flying missions need. The weaknesses are lifetime and current maturity: emitter tips degrade, propellant can wet and short the extractor grid, and total impulse per thruster is modest. Flight heritage is growing but still thin compared with Hall and ion engines.

## When to use
Pick electrospray for very small spacecraft and for precision pointing where impulse resolution matters more than total delta-v: cubesat constellations, formation flying, drag-free science payloads, and fine attitude control on larger platforms. If the mission needs more than roughly 100 m/s on a spacecraft above 50 kg, a small Hall thruster will do it with far more heritage. If the requirement is simply detumbling and coarse control, cold gas is cheaper. Confirm lifetime testing carefully, since this is the parameter where the technology is still maturing fastest.

## Key numbers
Isp 800–3,000 s depending on propellant and mode · thrust 1 µN to a few mN per module · power 1–50 W · no pressurized tank required · LISA Pathfinder's colloid thrusters demonstrated sub-micronewton control precision over months.

## Examples
Busek colloid thrusters on NASA's ST7 payload aboard LISA Pathfinder, Accion Systems' TILE modules on commercial cubesats, Enpulsion's indium FEEP thrusters flown on well over a hundred smallsats, and MIT's ion electrospray research that seeded much of the field.

## Economic profile
This is a startup-heavy segment aimed at the smallsat market, where the competition is not other electric thrusters but doing without propulsion at all. Unit prices in the tens of thousands of dollars make propulsion viable on spacecraft that previously flew ballistic. The commercial risk is that Hall thrusters keep scaling down: sub-100 W Hall units have improved, and if they reach acceptable efficiency they will take much of the addressable market on heritage alone.

## Further reading

[NASA Glenn Electrospray Activities Overview (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/20190026649) · [LISA Pathfinder (NASA Science)](https://science.nasa.gov/mission/lisa-pathfinder/)
