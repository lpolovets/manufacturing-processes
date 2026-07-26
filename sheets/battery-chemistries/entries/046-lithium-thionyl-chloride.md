---
number: 46
name: Lithium Thionyl Chloride (Li-SOCl2)
part: 7
group: Primary lithium
applications: [industrial, aero]
energy: vhigh
cost: high
maturity: mass
---

## Description
Li-SOCl2 has the best energy density and shelf life of any practical battery. A lithium anode runs against a liquid thionyl chloride cathode (the electrolyte is the cathode), delivering up to ~500–700 Wh/kg, 3.6 V, and self-discharge under 1% per year. A passivating LiCl film forms on the lithium, which is what enables 20+ year service and also what causes the chemistry's well-known "voltage delay" when a long-dormant cell is suddenly loaded.

## Strengths and weaknesses
Energy density and shelf life are unmatched, the cells run from -55 to +85 °C, and they suit decades-long unattended service. Weaknesses: rate capability is low in bobbin types, so pulse loads need spiral construction or a supercapacitor alongside the cell; voltage delay shows up after storage; thionyl chloride is toxic and corrosive, which makes cells hazardous to ship, puncture, or recycle; and they are strictly non-rechargeable, so charging one is dangerous.

## When to use
Pick Li-SOCl2 for decades-long unattended service at microamp-to-milliamp drains across -55 to +85 °C (utility meters, IoT sensors, downhole tools, ordnance electronics), where sub-1%/year self-discharge is the whole point. If the device pulses, pair bobbin cells with a supercapacitor or specify spiral construction, and design for the voltage delay after dormancy. Avoid it for consumer-handled products, high-rate loads, or anything with a disposal path that can't handle toxic, corrosive cells. If you need decade-scale duty in a consumer-safe cell, use Li-MnO2 instead.

## Examples
Utility meters (the giant volume application — Saft, Tadiran, EVE), toll transponders, downhole oil-and-gas tools, military ordnance electronics, long-lived IoT sensors.

## Economic profile
This is a quietly excellent business. Design-ins are sticky, replacement cycles run 20 years, safety-driven qualification keeps competitors out, and the customer base (metering, defense) doesn't care about $/kWh. EVE Energy's rise on Chinese smart-meter volume shows the scale hiding in "boring" primaries.

## Further reading

[Li-SOCl2 Technical Brochure (Tadiran Batteries)](https://tadiranbatteries.de/wp-content/uploads/2021/05/Technical-Brochure-LTC-Batteries.pdf)
