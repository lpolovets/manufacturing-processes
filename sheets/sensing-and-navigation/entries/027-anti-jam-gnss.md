---
number: 27
name: Anti-jam GNSS
part: 5
group: Satellite navigation
functions: [nav]
jamming: good
cost: med
---

## Description
Anti-jam GNSS combines three separate defenses. Controlled reception pattern antennas use an array of four to sixteen elements to steer nulls toward jammers and beams toward satellites, typically providing 20–50 dB of rejection and handling as many jammers as the array has elements minus one. Encrypted military signals — GPS M-code, Galileo PRS — resist spoofing because the receiver can authenticate them, and M-code's higher power and better structure also improves jam resistance. And tight coupling with an inertial unit lets the navigation solution coast through outages and reject implausible position jumps.

## Strengths and weaknesses
A well-designed anti-jam installation raises the jammer power needed by two to five orders of magnitude, which turns a $50 jammer problem into a serious engineering problem for the opponent. Authenticated signals largely close the spoofing hole. The weaknesses are size, cost, and rollout. A CRPA array needs a clear aperture roughly 20–40 cm across, which does not fit a small munition, and it costs thousands to tens of thousands of dollars. M-code receiver fielding has been slow and expensive across every military that has attempted it, and legacy platforms often cannot take the new hardware without significant modification.

## When to use
Fit anti-jam GNSS on anything that must navigate accurately in contested airspace and can carry the antenna: aircraft, ships, ground vehicles, and larger munitions. For small munitions and cheap drones the antenna does not fit, and the answer is a good inertial unit plus terrain or visual navigation instead. As a rule of thumb, if the platform costs more than about $100k, anti-jam GNSS is worth it; below that, design for GNSS-denied operation from the start rather than trying to protect a signal you cannot adequately defend.

## How it is defeated
Numbers beat nulls: an array with N elements can null N−1 jammers, so enough distributed jammers saturate it. Very high power jamming close in overwhelms the front end. Spoofing that mimics authenticated signals is hard, but replay and meaconing attacks still cause problems for receivers that do not check timing consistency. And the practical defeat is simply that most platforms in most militaries still do not have anti-jam fitted, so the capability exists on paper more than in the field.

## Examples
The GPS Directorate's M-code receivers (MGUE), Raytheon and BAE anti-jam antenna systems, the Digital Anti-Jam Receiver family, Galileo PRS receivers in European programs, and the retrofit programs that most air forces are currently running on their fleets.

## Economic profile
This is a large, slow, expensive modernization market. M-code fielding alone is a multi-billion-dollar effort across US services, and progress has repeatedly slipped. Antenna and receiver suppliers are a small group with strong export controls. The parallel commercial development — low-Earth-orbit navigation and timing services from companies like Xona and TrustPoint, plus fiber and atomic timing for infrastructure — is growing quickly because civil operators have concluded they cannot wait for military solutions.

## Further reading

[GPS.gov: official U.S. government information about GPS](https://www.gps.gov/)
