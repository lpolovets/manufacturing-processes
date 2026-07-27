---
number: 26
name: Self-protection jamming and DRFM
part: 7
group: Radar jamming
threats: [air, cm]
effectiveness: good
collateral: low
exchange: good
cost: high
---

## Description
Self-protection jamming defends the platform carrying it. The central technology is digital radio frequency memory: the jammer digitizes an incoming radar pulse, stores it, modifies it, and retransmits it so the returning signal looks like a genuine echo from a target that is not there. Range-gate pull-off walks the radar's tracking gate away from the real aircraft; velocity-gate pull-off does the same in Doppler; false-target generation fills the radar's display with plausible contacts. Because the replayed signal is coherent with the radar's own waveform, it passes filters that reject noise.

## Strengths and weaknesses
Coherent deception is far more effective than noise jamming and requires far less power, which is what makes self-protection jamming feasible in a pod or an internal installation. It works against the specific radar attacking the aircraft rather than trying to cover an area. The weaknesses are that it depends on correctly identifying the threat waveform, which requires a current threat library, and that modern radars use waveform diversity and coherent processing specifically designed to detect DRFM artifacts. Against an AESA hopping frequency pulse to pulse, the jammer's task is much harder.

## When to use
Every combat aircraft operating in a threat environment needs self-protection jamming, and the decision is how capable a system to buy. Against older radar-guided threats a basic system suffices; against modern AESA-guided missiles, a wideband digital system with a current library is necessary and costs several times as much. Treat mission data file currency as an operational requirement with its own tempo, because the best jammer with a stale library will attempt the wrong technique against a new threat.

## Limits and failure modes
Unknown waveforms cannot be countered effectively. Modern radars detect DRFM artifacts through waveform diversity and pulse-to-pulse agility. Home-on-jam seeker modes turn the jammer into a beacon. Multiple simultaneous threats can exceed the system's ability to respond. And the whole capability depends on an intelligence pipeline that most procurement processes treat as an afterthought.

## Examples
The AN/ALQ-131 and ALQ-184 pods, the internal systems in the F-35's AN/ASQ-239 and the F-22's ALR-94, SPECTRA on the Rafale, Praetorian on the Typhoon, and the DRFM-based systems that most modern combat aircraft now carry internally.

## Economic profile
Self-protection systems cost $2–10M per aircraft and are among the more tightly controlled export items, since they encode detailed knowledge of threat radars. The value has shifted decisively from hardware to the threat library and the reprogramming pipeline, and organizations that can characterize a new emitter and push an update to the fleet within days hold a real advantage over those that take months. That capability is largely invisible in procurement budgets and is where much of the actual capability lives.

## Further reading

[Defense Primer: Electronic Warfare (Congressional Research Service)](https://www.everycrsreport.com/reports/IF11118.html) · [U.S. Airborne Electronic Attack Programs (Congressional Research Service)](https://www.everycrsreport.com/reports/R44572.html)
