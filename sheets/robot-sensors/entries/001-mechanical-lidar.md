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
This is the sensor that made autonomous driving imaginable. A rotating head of pulsed lasers and detectors sweeps the scene and times each return, which produces 360° point clouds with centimeter range accuracy at 10–20 Hz. Velodyne's spinning "coffee can" defined the category (and the DARPA-challenge aesthetic); modern descendants pack 32–128 beams into smaller, cheaper, sealed units. It measures geometry directly, with no inference and no learning involved, and that's still its main virtue.

## Strengths and weaknesses
One unit gives true 360° coverage and dense direct 3D geometry, it works in darkness, and the SLAM and detection ecosystems around it are mature. The weaknesses come from the hardware: it's a precision opto-mechanical assembly that spins continuously, so bearings and encoders wear out and shock and vibration shorten its life. The units are big and conspicuous, per-unit cost stayed high for years, and resolution concentrates in horizontal lines, so vertical detail gets sparse at range.

## When to use
Pick spinning LiDAR when you need 360° geometry from a single mast-mounted unit at 30–200 m range with centimeter accuracy, and the platform can carry a fist-sized assembly that wears out: outdoor AMRs, off-road and mining vehicles, mapping rigs. Sub-$1k 32-beam units make it the default outdoor navigation sensor. Take it over solid-state whenever full surround coverage from one sensor matters more than point density in a wedge. Avoid it on high-shock or high-vibration platforms, in designs that must embed the sensor flush, and in automotive series production, where one or several solid-state units are the usual answer. If the job is surviving rain, fog, and dust rather than resolving shape, skip LiDAR entirely and use radar.

## Failure modes
Rain, snow, fog, and dust both return spurious points and absorb signal. Glass and mirrors either read as invisible or place the surface somewhere else entirely. Retroreflectors bloom and ghost. Wet black asphalt absorbs returns. Multiple LiDARs interfere with each other once you run them at scale. Bearing wear ends in dead sectors or total loss, usually gradually but sometimes all at once.

## Examples
Velodyne HDL-64 (the iconic early unit, now retired), Ouster OS-series digital LiDAR, RoboSense and Hesai mechanical lines on countless robotaxis, delivery robots, and mining trucks; survey and mapping backpacks.

## Economic profile
Prices went from $75k (HDL-64) to sub-$1k (Chinese 32-beam units) in fifteen years, one of the steepest cost declines in robotics, driven by Hesai/RoboSense automotive volume. Mechanical spinning units increasingly serve robotics and mapping while automotive design-ins shift to solid-state. What keeps the spinning form factor alive is 360° coverage per dollar, which nothing has beaten yet.

## Further reading

[What Is Lidar and How Does It Work? (Ouster)](https://ouster.com/insights/what-is-lidar) · [Lidar for Autonomous Driving: Principles, Challenges, and Trends (arXiv)](https://arxiv.org/abs/2004.08467)
