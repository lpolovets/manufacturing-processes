---
number: 40
name: Hybrid-electric turbogenerator
part: 7
group: Hydrogen and hybrid
regimes: [sub]
thrust: [small, med]
isp: vhigh
maturity: emerging
cost: low
---

## Description
A hybrid-electric powertrain uses a combustion engine — usually a small turbine or a piston engine — to drive a generator, and the electricity drives motors that turn propellers or fans. In a series hybrid there is no mechanical connection from engine to propeller at all, so the engine can run continuously at its most efficient point while the motors handle every transient. A battery buffers peaks, allowing the engine to be sized for cruise rather than for takeoff, which typically lets it shrink by 30–50%. Parallel hybrids keep the mechanical link and add electric boost.

## Strengths and weaknesses
The gains come from decoupling. Running a turbine at a fixed optimal point avoids the severe part-load fuel penalty that makes small turbines inefficient, and sizing it for cruise instead of takeoff saves both weight and fuel. Distributed electric fans then become possible on a vehicle with liquid-fuel endurance. The weaknesses are conversion losses and mass. Every step — engine to generator to power electronics to motor — costs a few percent, so a series hybrid loses 10–15% of the engine's output before the propeller sees it, and the electrical machines and cooling add weight that a direct-drive system does not carry.

## When to use
Pick a hybrid when the mission needs both long endurance and either hover capability or distributed propulsion: VTOL drones that must then cruise for hours, eVTOL aircraft that want range beyond battery limits, and military ISR platforms that benefit from a quiet electric-only mode. If the aircraft is conventional and cruises steadily, a direct-drive engine is lighter and more efficient, and the hybrid adds complexity for nothing. As a rule of thumb, hybrids pay when the ratio of peak power to cruise power is above roughly 3:1, which is exactly the case for anything that hovers.

## Key numbers
Series conversion losses 10–15% engine-to-propeller · engine downsizing 30–50% versus a takeoff-sized engine · generator and motor power density 5–10 kW/kg at aviation grade · typical hybrid VTOL drone endurance 4–12 hours against 30–60 minutes on batteries alone · battery sized for minutes of peak, not hours of cruise.

## Examples
Hybrid VTOL drones from Quantum Systems, Skyfront, and Harris Aerial, the Ampaire Eco Caravan and Electric EEL, VoltAero's Cassio, Rolls-Royce and Siemens' E-Fan X program (cancelled 2020), and turbogenerator products from Turbotech and PBS.

## Economic profile
Hybrid powertrains are the pragmatic middle of electrified aviation and the segment where products are actually shipping, mostly in drones. The business is assembly-oriented: engines, generators, inverters, and batteries all come from existing supply chains, and the value is in integration and control software. That keeps barriers to entry low and margins thin. For military buyers the appeal is concrete — endurance of a combustion aircraft with an electric-only quiet mode over the target — and that requirement is driving most of the current procurement.

## Further reading

[Electrified Aircraft Propulsion (NASA Glenn Research Center)](https://www1.grc.nasa.gov/aeronautics/eap/) · [Visions of the Future: Hybrid Electric Aircraft Propulsion (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/20170002633)
