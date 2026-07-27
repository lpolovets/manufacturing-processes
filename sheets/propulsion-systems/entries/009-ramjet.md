---
number: 9
name: Ramjet
part: 2
group: Ram compression
regimes: [super, hyper]
thrust: [small, med]
isp: vhigh
maturity: common
cost: low
---

## Description
A ramjet has no moving parts in the flowpath. The inlet decelerates supersonic air to subsonic speed through a shock system, which compresses it by a factor of 10–30 at Mach 3, fuel burns in that subsonic stream, and a converging-diverging nozzle expands it back out. Because compression comes from the vehicle's own speed, a ramjet produces no static thrust at all — it has to be boosted to roughly Mach 2 before it will run. Above that it works well to about Mach 5, where the temperature after deceleration gets high enough that the air dissociates and further compression stops paying.

## Strengths and weaknesses
The advantages are simplicity and specific impulse. With no turbomachinery, a ramjet is cheap, light, and tolerant of high inlet temperatures, and its Isp of 1,000–2,000 s is roughly four times a solid rocket's, which translates into two to four times the range for the same propellant mass. The weaknesses are equally structural. It cannot start itself, so every ramjet vehicle carries a booster stage or an integrated booster grain. It works over a narrow Mach band, since the inlet is optimized for one flight condition. And thrust falls off sharply at altitude, so the flight profile is constrained in a way that rocket-powered missiles are not.

## When to use
Pick a ramjet for a sustained Mach 3–5 vehicle where range matters and the launch platform can supply the initial boost: air-to-air missiles that need endgame energy at long range, anti-ship cruise missiles, and hypersonic first stages. If the flight is short and mostly ballistic, a solid rocket motor is simpler and cheaper. If the vehicle must take off from rest, you need a turbine or a combined cycle. The clearest current case is long-range air-to-air: a ramjet-powered missile still has thrust at the end of its flight, so its no-escape zone is much larger than an equivalent rocket's even at the same nominal range.

## Key numbers
Operating band roughly Mach 2–5 · Isp 1,000–2,000 s · inlet pressure ratio 10–30 at Mach 3 · combustor entry temperature 600–900 K · typical missile-scale thrust 5–50 kN · engine cost well under $1M in production quantities.

## Examples
MBDA Meteor (throttleable solid-fuel ducted ramjet), the Bomarc and Talos ramjet interceptors, the ASMP-A French nuclear standoff missile, the Indo-Russian BrahMos sustainer, and Russian 3M22 Zircon and Kh-32 propulsion.

## Economic profile
Ramjet engines themselves are cheap; the cost sits in integration, boosters, and the thermal structure. The technology is old and widely held, so proliferation is limited more by fuel-control and materials know-how than by the cycle itself. The commercially interesting motion is in solid-fuel ducted ramjets, where throttling a solid fuel gas generator gives most of the range benefit at close to solid-rocket simplicity, and in reusable Mach 4–5 testbed vehicles from companies pursuing hypersonic flight test as a service.

## Further reading

[Ramjet Propulsion (NASA Glenn Beginner's Guide to Propulsion)](https://www.grc.nasa.gov/www/k-12/airplane/ramjet.html) · [Ramjet Propulsion for Single-Stage-to-Orbit Vehicles (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/19780039934)
