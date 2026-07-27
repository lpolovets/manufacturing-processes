---
number: 30
name: Celestial navigation
part: 5
group: Celestial and field
functions: [nav]
jamming: strong
cost: high
---

## Description
Automated celestial navigation measures the angular position of stars with a small telescope and computes position from the known positions of those stars and a precise time reference. Modern star trackers work in daylight, using narrowband filters and sensitive detectors to pull a star out of the bright sky background. Combined with an inertial unit, the result is a stellar-inertial system: the inertial unit provides continuity and attitude, and periodic star fixes bound its drift. Accuracy of tens to hundreds of metres over long flights is achievable with no external signal whatsoever.

## Strengths and weaknesses
It is unjammable and unspoofable in any practical sense — you cannot fake the fixed stars — and it requires no infrastructure at all. Accuracy is stable regardless of flight duration, which is what makes it valuable for very long-range systems where inertial drift would otherwise accumulate. The weaknesses are clouds, cost, and mechanical complexity. A star tracker needs a clear view of the sky, which rules out low-altitude flight under overcast. The optics and the stabilization to point them from a moving vehicle are expensive, and the whole system requires very accurate time and attitude to convert a star sighting into a position.

## When to use
Use stellar-inertial navigation for systems that must be accurate over very long distances with no external reference: ballistic missiles, strategic bombers, high-altitude reconnaissance aircraft, and spacecraft. If the platform flies low or in weather, celestial navigation will not have sky access and terrain or visual matching is the answer. The renewed interest in this old technology is entirely driven by GNSS vulnerability, and daytime star trackers small enough for tactical aircraft are now being marketed on exactly that argument.

## How it is defeated
Cloud cover is the complete counter for any platform below it. The systems are expensive and heavy enough that they will never be fitted broadly. Accurate time is required, and if the time reference is derived from GNSS the system inherits a GNSS dependency that partly defeats the purpose — good implementations carry an independent atomic or oven-controlled oscillator. Beyond that, there is no known way to attack the technique remotely, which is the reason it persists.

## Examples
The stellar-inertial guidance on Trident II D5 and on Soviet and Russian SLBMs, the astro-tracker on the SR-71 and the B-2, the star trackers on essentially every spacecraft, and modern compact daytime star trackers being offered for aircraft and munitions as GNSS alternatives.

## Economic profile
Historically this was a strategic-systems technology with very small production runs and high unit costs. The current commercial angle is that spacecraft star trackers have become cheap and small — a smallsat unit costs tens of thousands of dollars — and several companies are adapting that supply chain to atmospheric use. Whether daytime performance at tactical aircraft altitudes justifies the cost against cheaper terrain and visual methods is the open commercial question.

## Further reading

[Guidance, Navigation, and Control: State of the Art of Small Spacecraft Technology (NASA)](https://www.nasa.gov/smallsat-institute/sst-soa/guidance-navigation-and-control/) · [Celestial Navigation Resources (US Naval Observatory)](https://aa.usno.navy.mil/faq/celnav)
