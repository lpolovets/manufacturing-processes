---
number: 19
name: Hydrazine monopropellant
part: 3
group: Storable propellants
regimes: [space]
thrust: [micro, small]
isp: vlow
maturity: std
cost: vlow
---

## Description
A monopropellant thruster passes hydrazine over a catalyst bed — usually iridium on alumina, the Shell 405 family — where it decomposes exothermically into ammonia, nitrogen, and hydrogen at roughly 900 °C. The hot gas expands through a nozzle. There is only one fluid, one valve, and no ignition or mixture-ratio control, which makes the system about as simple as a rocket can be. Thrust ranges from 0.5 N attitude-control units to 500 N landing engines, and the same thruster can fire in pulses of a few milliseconds hundreds of thousands of times over a spacecraft's life.

## Strengths and weaknesses
Simplicity and pulse performance are the advantages: minimum impulse bits of a few millinewton-seconds make precise attitude control possible, and the hardware is flight-proven across thousands of spacecraft. Against it, Isp of 220–235 s is poor, the catalyst bed degrades over thousands of cold starts and usually needs a heater, and hydrazine's toxicity carries the same handling burden as hypergolic bipropellants. For a small satellite, the ground handling requirements can cost more than the propulsion system, which is exactly the gap that green monopropellants were developed to fill.

## When to use
Pick hydrazine monopropellant for attitude control and small orbital adjustments on spacecraft where the flight heritage and pulse precision are worth the handling cost, particularly on large or crewed programs. If the spacecraft is a smallsat, a green monopropellant or an electric thruster is now usually the better choice on total cost. If the mission needs large delta-v, use a bipropellant or electric system — hydrazine's Isp makes it expensive in propellant mass for anything beyond station-keeping. Always check whether the launch provider or rideshare host imposes constraints on hydrazine, since several now do.

## Key numbers
Isp 220–235 s · catalyst bed operating temperature about 900 °C, preheated to roughly 315 °C before firing · minimum impulse bit 5–50 mN·s · thrust 0.5–500 N · demonstrated on-orbit lives beyond 15 years and hundreds of thousands of pulses.

## Examples
Aerojet Rocketdyne MR-103 and MR-107 series (Voyager, Cassini, New Horizons), the Curiosity and Perseverance sky crane descent engines, ArianeGroup and Moog attitude-control thrusters, and the reaction control systems on most large GEO communications satellites.

## Economic profile
Hydrazine thrusters are cheap hardware — tens of thousands of dollars for small units — sold into a mature market with a handful of suppliers. Cost has shifted from the thruster to the handling: European REACH authorization requirements have made hydrazine progressively more expensive and administratively burdensome to use, and that regulatory trajectory is the main reason green monopropellants got funded. Expect a slow substitution on new small spacecraft and long persistence on large heritage platforms.

## Further reading

[Long Life Monopropellant Hydrazine Thruster Evaluation (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/19910057064) · [In-Space Propulsion: State of the Art of Small Spacecraft Technology (NASA)](https://www.nasa.gov/smallsat-institute/sst-soa/in-space-propulsion/)
