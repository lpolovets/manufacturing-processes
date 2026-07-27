---
number: 18
name: Electronic support and direction finding
part: 3
group: Warning and support
functions: [search, track, id]
range: [long, strat]
stealth: strong
jamming: good
cost: vhigh
---

## Description
Electronic support measures detect, characterize, and locate emitters. Direction finding gives a bearing, and a bearing from two or more receivers gives a fix. Modern systems use time difference of arrival and frequency difference of arrival between spatially separated receivers, which produces geolocation accuracy far better than amplitude comparison — hundreds of metres rather than tens of kilometres, given adequate baselines and precise time synchronization. Everything is passive, so the emitting side gets no indication it has been located.

## Strengths and weaknesses
Passive geolocation of emitters is enormously valuable: it builds the electronic order of battle, cues other sensors, and produces targets for anti-radiation weapons. Range is limited only by line of sight and receiver sensitivity, so an airborne or space-based receiver covers a very large area. The weaknesses are that the target has to transmit — emission control defeats the whole approach — and that accuracy depends on geometry, requiring several well-separated platforms with precise time and position knowledge. Dense emitter environments make sorting and association hard, and modern low-probability-of-intercept waveforms are difficult to detect at all.

## When to use
Use electronic support as the persistent, always-on layer of any surveillance architecture, because it costs nothing to leave running and it reveals what the opponent is doing. It is the standard cueing sensor for suppression of enemy air defenses. If the target set is deliberately silent, this approach contributes nothing and you need active or optical sensing. Multi-platform geolocation is where the accuracy comes from, so budget for the constellation and the time synchronization rather than for a single very good receiver.

## How it is defeated
Emission control is the complete counter: a radar that is off cannot be located. Operating briefly and shutting down before a fix converges works, which is why modern air-defense doctrine emphasizes short illumination periods and rapid displacement. Decoy emitters draw fixes onto empty ground cheaply. Low-probability-of-intercept and spread-spectrum waveforms reduce detection range substantially, and networked systems that share tracks over directional datalinks emit far less than legacy ones.

## Examples
The Czech VERA-NG and Ukrainian Kolchuga passive tracking systems, the RC-135V/W Rivet Joint and EP-3E aircraft, the US Navy's Ocean Surveillance satellites and their successors, HawkEye 360's commercial RF geolocation constellation, and the ESM suites on most warships.

## Economic profile
The most significant recent change is commercial: HawkEye 360, Kleos, Unseenlabs, and others sell RF geolocation from smallsat clusters, which puts a capability that was strictly national into a subscription product. Maritime applications — finding vessels that have turned off their transponders — drive most of the commercial revenue. Costs for a national system remain in the hundreds of millions, but the commercial layer now provides a useful and much cheaper baseline that many governments buy alongside their own.

## Further reading

[Defense Primer: Electronic Warfare (Congressional Research Service)](https://www.everycrsreport.com/reports/IF11118.html)
