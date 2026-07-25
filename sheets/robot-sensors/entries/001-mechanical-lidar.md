---
number: 1
name: Mechanical Spinning LiDAR
part: 1
group: Time-of-flight LiDAR
uses: [perception, nav]
range: [mid, far]
compute: high
adoption: common
cost: high
---

## Description
The sensor that made autonomous driving imaginable: a rotating head of pulsed lasers and detectors painting the world with time-of-flight measurements, delivering 360° point clouds with centimeter range accuracy at 10–20 Hz. Velodyne's spinning "coffee can" defined the category (and the DARPA-challenge aesthetic); modern descendants pack 32–128 beams into smaller, cheaper, sealed units. Direct geometric measurement — no inference, no learning — remains its unanswerable virtue.

## Strengths and weaknesses
True 360° coverage from one unit, dense direct 3D geometry, works in darkness, mature SLAM and detection ecosystems. Weaknesses: a precision opto-mechanical assembly spinning continuously — bearings and encoders wear, shock and vibration are enemies; big and conspicuous; per-unit cost stayed stubbornly high for years; and resolution concentrates in horizontal lines, leaving sparse vertical detail at range.

## Failure modes
Rain, snow, fog, and dust return spurious points and absorb signal; glass and mirrors are invisible or teleporting surfaces; retroreflectors bloom and ghost; wet black asphalt absorbs returns; multi-LiDAR interference at scale; bearing wear ends in dead sectors or total loss — usually gradually, occasionally not.

## Examples
Velodyne HDL-64 (the icon, retired), Ouster OS-series digital LiDAR, RoboSense and Hesai mechanical lines on countless robotaxis, delivery robots, and mining trucks; survey and mapping backpacks.

## Economic profile
From $75k (HDL-64) to sub-$1k (Chinese 32-beam units) in fifteen years — one of robotics' steepest cost collapses, driven by Hesai/RoboSense automotive volume. Mechanical spinning units increasingly serve robotics and mapping while automotive design-ins shift to solid-state; the spinning form factor's moat is 360° coverage per dollar, which remains unbeaten.
