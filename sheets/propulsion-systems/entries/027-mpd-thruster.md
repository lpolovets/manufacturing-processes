---
number: 27
name: Magnetoplasmadynamic thruster
part: 4
group: Electromagnetic
regimes: [space]
thrust: [small]
isp: high
maturity: rd
cost: low
---

## Description
A magnetoplasmadynamic thruster runs a very high current — thousands of amperes — between a central cathode and an annular anode through an ionized propellant. The current's own magnetic field crosses the current itself, producing a Lorentz force that accelerates the plasma out at 15–60 km/s. Because the accelerating force scales with the square of the current, an MPD thruster gets more efficient as it gets more powerful, which is the opposite of most electric propulsion. That property makes it the natural choice for the megawatt-class systems that nuclear electric propulsion would enable, and irrelevant for anything smaller.

## Strengths and weaknesses
Thrust density is far higher than any other electric thruster: tens of newtons rather than fractions of one, at high Isp. The hardware is also simple, with no grids and no precise magnetic circuit in the self-field version. The problems are power and electrodes. Efficient operation needs hundreds of kilowatts to megawatts, and no spacecraft has ever had that; at the 100 kW levels that have been tested, efficiency sits around 30–40%. Cathode erosion at kiloampere currents limits life to hundreds of hours in most tests. Ground testing is also hard, because vacuum facilities struggle to handle the gas load.

## When to use
Treat MPD as a technology that waits on power. It becomes the right choice if a spacecraft ever carries a megawatt-class reactor and needs to move substantial mass — crewed Mars transfer stages and large cargo tugs are the standing examples. For anything powered by solar arrays at today's scale, Hall and ion thrusters are better matched. If you are evaluating a program that proposes MPD, the questions that matter are the power source and the cathode life demonstration, not the thruster physics, which has been understood since the 1960s.

## Key numbers
Isp 2,000–5,000 s · thrust 1–100 N at multi-hundred-kilowatt power · efficiency 30–50% at high power, poor below about 100 kW · discharge currents 1,000–20,000 A · demonstrated ground runs generally under 1,000 hours before electrode wear.

## Examples
Princeton's long-running MPD research program, NASA Lewis and JPL testing through the 1980s and 90s, Japan's MS-T4 and Space Flyer Unit experiments, Russian and Chinese institute work, and lithium-fed applied-field designs that improved efficiency at the cost of a condensable propellant.

## Economic profile
There is no market. MPD is a research technology whose commercial timeline is tied entirely to space nuclear power, which itself has been perpetually a decade out. Renewed interest in fission surface power and nuclear electric propulsion has brought some funding back through NASA and DARPA programs. For anyone assessing it, the honest framing is that the thruster is not the hard part and never was — the reactor, the power conversion, and the radiators are.

## Further reading

[MPD Thruster Technology (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/19930009450) · [Electric propulsion research (NASA Glenn Research Center)](https://www1.grc.nasa.gov/space/electric-propulsion/)
