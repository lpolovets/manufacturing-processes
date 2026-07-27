---
number: 17
name: Radar warning receiver
part: 3
group: Warning and support
functions: [search, id]
range: [med, long]
stealth: good
jamming: fair
cost: high
---

## Description
A radar warning receiver listens across the radar bands, compares detected pulse trains against a stored threat library, and tells the crew which radars are looking at them and roughly where those radars are. Because radar energy travels out and back to the radar but only one way to the receiver, an RWR detects a radar at roughly the square of its detection range against the aircraft — a radar that sees you at 100 km is usually audible at 200 km or more. That asymmetry is the fundamental reason passive warning works.

## Strengths and weaknesses
The one-way advantage means warning generally arrives before engagement, which is the entire point. RWRs are passive, cheap relative to the aircraft, and directly drive the survivability chain: warn, maneuver, jam, dispense countermeasures. Weaknesses come from the threat library and from waveform trends. An unknown or reprogrammed emitter shows as ambiguous, and library updates are a continuous operational burden measured in days, not years. Low-probability-of-intercept radars using low peak power and spread waveforms are much harder to detect, and modern AESAs deliberately exploit this. Angular accuracy from a few small antennas is coarse, typically 10–30°.

## When to use
An RWR is standard equipment on any aircraft expected to operate near threats, and the real decision is how much capability to buy. If the aircraft flies in a well-characterized threat environment, a basic receiver with a good library suffices. If it will face modern AESA and low-probability-of-intercept emitters, you need a digital receiver with wideband channelized processing, which costs several times as much. Treat the mission data file update process as part of the system: an excellent receiver with a stale library is a liability, because it will report a modern threat as unknown.

## How it is defeated
Low-probability-of-intercept waveforms — low peak power, wide bandwidth, long integration — can put a radar below the RWR's detection threshold. Emitters not in the library produce ambiguous warnings. Dense signal environments cause processing overload and false alarms, which trains crews to distrust the display. Passive sensors and infrared-guided weapons trigger no warning at all, which is a growing gap as infrared search and track systems become common.

## Examples
The AN/ALR-56M and ALR-69A on US fighters, the ALR-67(V)3 on the Super Hornet, Praetorian on the Eurofighter, SPECTRA on the Rafale, and the digital receivers integrated into the F-35's AN/ASQ-239 electronic warfare system.

## Economic profile
RWRs sit inside larger electronic warfare suites and are increasingly indistinguishable from them, since the same wideband digital receivers serve warning, electronic support, and targeting. The technology has shifted decisively toward software-defined receivers, which moves the value from hardware to the signal-processing and library-generation pipeline. That pipeline — collecting emitter parameters, characterizing them, and pushing updates to the fleet quickly — is now a defining national capability and is largely invisible in procurement budgets.

## Further reading

[Defense Primer: Electronic Warfare (Congressional Research Service)](https://www.everycrsreport.com/reports/IF11118.html)
