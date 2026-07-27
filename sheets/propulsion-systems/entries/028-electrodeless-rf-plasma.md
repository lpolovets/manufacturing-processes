---
number: 28
name: Electrodeless RF plasma thruster
part: 4
group: Electromagnetic
regimes: [space]
thrust: [micro, small]
isp: high
maturity: rd
cost: low
---

## Description
Electrodeless thrusters heat and accelerate plasma using radio-frequency or microwave fields coupled through a dielectric wall, so no electrode ever touches the plasma. Removing electrodes removes the dominant life limit in most electric propulsion. VASIMR is the best-known example: a helicon source ionizes argon, an ion-cyclotron-resonance stage heats it further, and a magnetic nozzle expands it. Because the two stages can be balanced against each other, the thruster can trade thrust for specific impulse in flight — high thrust for a departure burn, high Isp for cruise — which no chemical or conventional electric system can do.

## Strengths and weaknesses
Variable specific impulse and the absence of erodible electrodes are the genuine advantages, and superconducting magnets have let VASIMR run 100 kW for 88 hours continuously in vacuum testing. The weaknesses are power, mass, and efficiency. These thrusters only make sense at 50 kW and above, which no spacecraft power system currently provides outside of concept studies; the magnets and RF hardware are heavy, so system-level thrust-to-weight is poor; and measured efficiency at high Isp has been below early projections. Magnetic nozzle detachment — getting the plasma to actually leave the field lines — remains an area of active argument.

## When to use
Consider electrodeless RF plasma propulsion only in the same context as MPD: high-power, nuclear or very large solar-powered vehicles moving substantial mass, where throttling between thrust and Isp is worth real system complexity. For any near-term mission, Hall and ion thrusters do the job with two decades of flight data. If you are evaluating claims, check demonstrated thruster efficiency at the advertised Isp and the assumed power source separately, because the historical pattern in this field is optimistic system studies attached to power that does not exist.

## Key numbers
Isp 2,000–12,000 s, variable in flight · thrust roughly 5 N at 200 kW in VASIMR projections · demonstrated 100 kW for 88 hours in vacuum (2021) · efficiency 50–70% claimed at high Isp, lower measured · requires cryocooled superconducting magnets in current designs.

## Examples
Ad Astra Rocket Company's VX-200SS VASIMR, helicon double-layer thrusters from ANU and ONERA, ECR thrusters from CNES and ThrustMe, and Japanese and Australian magnetic-nozzle research programs. Smaller electrodeless designs at 10–50 W are reaching cubesat flight.

## Economic profile
Funding comes from space agencies and a small number of private investors, and the field has a long history of schedule slip against ambitious mission concepts. The near-term commercial activity is at the opposite end of the power scale: small ECR and helicon thrusters for cubesats, where electrodeless operation gives long life in a package that does not need cathode heaters or high voltages. That segment is real and shipping; the megawatt-class vision remains contingent on space nuclear power.

## Further reading

[Recent Progress on the VASIMR (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/20000092090) · [Electric propulsion research (NASA Glenn Research Center)](https://www1.grc.nasa.gov/space/electric-propulsion/)
