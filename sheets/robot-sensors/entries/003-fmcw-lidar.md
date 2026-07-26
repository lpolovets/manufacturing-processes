---
number: 3
name: FMCW LiDAR
part: 1
group: Coherent LiDAR
uses: [perception, nav]
range: [mid, far]
compute: high
adoption: emerging
cost: high
---

## Description
FMCW LiDAR borrows radar's approach. Instead of timing a pulse, frequency-modulated continuous-wave LiDAR chirps its laser and interferes the return with a local copy. Coherent detection buys two properties pulsed LiDAR can't offer: per-point instantaneous velocity via Doppler (no more inferring motion across frames), and near-immunity to sunlight and other LiDARs, because only light coherent with the local oscillator registers. The price is photonic complexity, since every channel needs a long-coherence laser and interferometric optics.

## Strengths and weaknesses
It measures velocity directly, so a moving pedestrian separates from the static world immediately. Interference immunity comes from the physics rather than from coding tricks, range at eye-safe power is better, and retroreflectors don't blind it. The weaknesses: each channel is a coherent photonic system, so silicon-photonics integration is the whole manufacturing story. Point rates have historically trailed ToF, processing coherent returns takes a lot of DSP, and the technology carries a decade of "next year" scheduling history.

## When to use
Pick FMCW only when its physics is decisive: per-point velocity for separating movers from the static world at highway closing speeds (trucking is the proving ground), immunity to interference in dense multi-LiDAR fleets, or long range at eye-safe power. Even then, pick it only if your program can absorb few-vendor, young-silicon supply risk on a multi-year timeline. Avoid it for near-term production or anything needing high point rates and a mature ecosystem. ToF LiDAR (spinning or solid-state) remains the default until silicon-photonics integration actually lands, and Mobileye's wind-down is the cautionary reference.

## Failure modes
FMCW shares fog and rain attenuation with all optical sensing, though coherent gain helps. Rough surfaces produce speckle noise. Doppler ambiguity requires careful chirp design. Laser coherence degrades with temperature and aging. Ecosystem risk counts as a failure mode too: there are few vendors and the silicon is young, which matters for any program betting on it.

## Examples
Aeva (Daimler Trucks design-in, the flagship program), Mobileye's internal FMCW program (wound down in 2024), Scantinel, SiLC; academic silicon-photonic beam-steering demos aiming at chip-scale units.

## Economic profile
The bet is that LiDAR ends up as a silicon-photonics chip. If that happens, FMCW's extra physics comes nearly free and ToF incumbents face a discontinuity. Until that integration matures, units stay expensive and design-ins stay scarce; Aeva's truck win is the category's existence proof. Watch silicon-photonics fab partnerships rather than demo videos.

## Further reading

[Coherent Lidar for Ride-Hailing Autonomous Vehicles (arXiv)](https://arxiv.org/abs/2502.09736) · [Photonic-Electronic Integrated Coherent LiDAR Engine (arXiv)](https://arxiv.org/abs/2306.07990)
