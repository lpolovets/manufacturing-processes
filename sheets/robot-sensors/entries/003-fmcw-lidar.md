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
LiDAR borrowed from radar's playbook: instead of timing a pulse, frequency-modulated continuous-wave LiDAR chirps its laser and interferes the return with a local copy. Coherent detection buys two transformative properties — per-point instantaneous velocity via Doppler (no more inferring motion across frames) and near-immunity to sunlight and other LiDARs, since only light coherent with the local oscillator registers. The price is photonic complexity: long-coherence lasers and interferometric optics per channel.

## Strengths and weaknesses
Direct velocity measurement (a moving pedestrian pops out of the static world instantly), interference-proof by physics, superior range at eye-safe power, resistant to retroreflector blinding. Weaknesses: each channel is a coherent photonic system — silicon-photonics integration is the whole manufacturing story; point rates historically trail ToF; processing coherent returns is DSP-heavy; and the technology carries a decade of "next year" scheduling history.

## When to use
Pick FMCW only when its physics is decisive: per-point velocity for separating movers from the static world at highway closing speeds (trucking is the proving ground), immunity to interference in dense multi-LiDAR fleets, or long range at eye-safe power — and only if the program can absorb few-vendor, young-silicon supply risk on a multi-year timeline. Avoid it for near-term production or anything needing high point rates and a mature ecosystem; ToF LiDAR (spinning or solid-state) remains the default until silicon-photonics integration actually lands, and Mobileye's wind-down is the cautionary reference.

## Failure modes
Shares fog/rain attenuation with all optical sensing (though coherent gain helps); speckle noise on rough surfaces; Doppler ambiguity needs chirp design care; laser coherence degradation with temperature and aging; and the ecosystem risk — few vendors, young silicon — is itself a failure mode for programs betting on it.

## Examples
Aeva (Daimler Trucks design-in — the flagship), Mobileye's internal FMCW program (wound down 2024, a cautionary datapoint), Scantinel, SiLC; academic silicon-photonic beam-steering demos pointing at the chip-scale endgame.

## Economic profile
The bet is that LiDAR's endpoint is a silicon-photonics chip — at which point FMCW's extra physics comes nearly free and ToF incumbents face a discontinuity. Until that integration matures, units stay expensive and design-ins scarce; Aeva's truck win is the category's existence proof. Watch silicon-photonics fab partnerships, not demo videos.
