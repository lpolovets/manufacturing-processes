---
number: 2
name: PESA radar
part: 1
group: Fire-control radar
functions: [search, track, term]
range: [med, long]
stealth: fair
jamming: fair
cost: high
---

## Description
A passive electronically scanned array uses one central transmitter feeding a large array of phase shifters, so the beam steers electronically but every element radiates the same signal at the same frequency. It was the first practical phased array architecture and dominated from the 1960s through the 1990s. Compared with a mechanically scanned radar it gains beam agility; compared with an AESA it lacks the ability to form multiple independent beams, to hop frequency pulse to pulse, or to degrade gracefully — a transmitter failure takes the whole radar with it.

## Strengths and weaknesses
Cost is the advantage. One high-power transmitter, usually a travelling wave tube, is much cheaper than a thousand solid-state modules, and PESA gives most of the scan-rate benefit of a phased array. Peak power can be very high, which suits long-range search. The weaknesses are single-point failure, limited waveform flexibility, and jamming vulnerability: because the whole array transmits one frequency at a time, a jammer only has one thing to work against. Bandwidth through the central feed is also limited, which constrains resolution and low-probability-of-intercept operation.

## When to use
Pick PESA when you need electronic beam steering at long range on a budget, particularly for ground-based and naval surveillance where size and power are not constraints. If the mission involves contested electromagnetic conditions, AESA's frequency agility is worth the cost difference. If cost is the overriding constraint and the target set is unsophisticated, a mechanically scanned radar is cheaper still. In practice most new Western designs skip PESA entirely, and its continued relevance is largely in legacy fleets and in export systems from suppliers who have not made the transition.

## How it is defeated
Noise jamming is more effective than against an AESA, because the radar's frequency agility is limited to pulse groups rather than individual pulses. Chaff and DRFM false targets work. Anti-radiation missiles home on the single high-power transmitter easily. Sidelobe jamming is a standard approach, since a central-feed array typically has worse sidelobe control than an individually weighted AESA.

## Examples
The Soviet and Russian Zaslon on the MiG-31 (the first airborne phased array in service), Bars and Irbis-E on Su-30/Su-35, the Patriot MPQ-53 and MPQ-65, the AN/SPY-1 Aegis arrays, and the Chinese Type 346 in its earlier variants.

## Economic profile
PESA is a mature and largely sunset architecture in the West, sustained by upgrade programs on fielded systems like Patriot and Aegis, both of which are transitioning to AESA replacements. In export markets it remains commercially significant, because a PESA priced at a third of an AESA is genuinely attractive to buyers facing unsophisticated threats. The economic story is essentially the transmit-receive module cost curve: as modules got cheap, PESA's cost advantage evaporated.

## Further reading

[Phased Array Antenna (Radar Tutorial)](https://www.radartutorial.eu/06.antennas/Phased%20Array%20Antenna.en.html) · [Navy Aegis Ballistic Missile Defense (BMD) Program (Congressional Research Service)](https://www.everycrsreport.com/reports/RL33745.html)
