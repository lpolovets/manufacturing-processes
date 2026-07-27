---
number: 37
name: Visual-inertial odometry
part: 6
group: Odometry
functions: [nav]
jamming: good
cost: vlow
---

## Description
Visual-inertial odometry tracks features across camera frames and fuses that with inertial measurements to estimate the platform's motion. The camera supplies drift-free orientation and scaled translation as long as it can see textured surroundings; the inertial unit fills gaps, handles fast rotation, and resolves scale. The result is a relative position estimate that drifts far more slowly than inertial alone — typically 0.1–2% of distance travelled — and needs no external signal. It has become the standard indoor and GPS-denied navigation method for drones and ground robots.

## Strengths and weaknesses
Cost and accuracy are both good: a camera and a MEMS IMU cost tens of dollars and deliver drift rates that would otherwise require a far more expensive inertial unit. It works indoors, underground, and under jamming. The weaknesses are visual: textureless walls, darkness, fog, smoke, and repetitive patterns break feature tracking, and fast motion causes blur. Drift is relative rather than absolute, so error accumulates over distance with no bound unless the system revisits a known place (loop closure) or gets an absolute fix from scene matching or GNSS.

## When to use
Use visual-inertial odometry on any small autonomous vehicle that needs to navigate without GNSS over short to medium distances: indoor drones, warehouse robots, subterranean vehicles, and the terminal phase of strike drones. Combine it with an absolute reference — scene matching against satellite imagery, or occasional GNSS — for anything flying more than a few kilometres, because unbounded relative drift will otherwise dominate. In smoke, dust, or darkness, add a thermal camera or a radar-based alternative, since visual tracking is the first thing to fail in those conditions.

## How it is defeated
Darkness without a thermal or illuminated camera stops it. Smoke, dust, and fog break feature tracking, and these are common in exactly the environments where GNSS is also denied. Featureless surfaces and repetitive patterns cause tracking failures or wrong associations. Rapid motion blurs frames. Deliberate laser dazzling of the camera works. Drift accumulates without bound, so a long enough route degrades the solution regardless of conditions.

## Examples
Skydio's autonomy stack, DJI's vision positioning systems, the navigation on Ingenuity, the Mars helicopter, ArduPilot and PX4 visual-odometry integrations, Intel RealSense and similar modules, and the subterranean robots developed under the DARPA Subterranean Challenge.

## Economic profile
The hardware is commodity and the value is entirely in the software, which has been substantially democratized by open-source implementations like ORB-SLAM and VINS-Mono and by well-supported commercial SDKs. That makes the capability cheap and widely available, and it is a major reason that GNSS jamming is a less complete counter to small drones than it was a few years ago. Differentiation now comes from robustness in degraded conditions rather than from basic capability.

## Further reading

[Machine Learning Based Crater Detection for Terrain Relative Navigation (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/20250000983) · [Ingenuity Mars Helicopter (NASA JPL)](https://www.jpl.nasa.gov/missions/ingenuity/)
