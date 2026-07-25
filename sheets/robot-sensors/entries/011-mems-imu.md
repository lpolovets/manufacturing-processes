---
number: 11
name: MEMS IMU
part: 4
group: Inertial
uses: [nav]
compute: low
adoption: std
cost: vlow
---

## Description
The robot's inner ear: micromachined accelerometers and gyroscopes on a chip, measuring specific force and angular rate at hundreds to thousands of hertz for under a dollar at phone volume. The IMU is the only sensor that works everywhere, always — no line of sight, no lighting, no infrastructure — which makes it the backbone of every state estimator. Its flaw is equally universal: it measures derivatives, so position comes from double integration, and every bias error grows quadratically into drift.

## Strengths and weaknesses
Tiny, cheap, kilohertz-fast, environment-proof; the glue of every sensor-fusion stack (VIO, GNSS-INS, leg odometry) and the flight-control heartbeat of every drone. Weaknesses: unbounded drift alone — consumer parts lose meters within seconds of dead reckoning; bias wanders with temperature and time; vibration aliases into the signal (drone props are brutal); scale-factor and axis-misalignment errors need calibration; grade stratification spans four orders of magnitude in price.

## When to use
Every robot gets one; the real decision is grade. Consumer parts (cents to tens of dollars) are correct whenever external fixes arrive every second or faster — VIO, GNSS-INS, encoder odometry — which is nearly all of robotics; spend on tactical-grade ADIS-class parts ($1k–20k) only when dead-reckoning gaps stretch to tens of seconds or vibration is severe. Isolate it mechanically from props and motors before buying a better one. Avoid trusting any MEMS IMU standalone for position beyond a few seconds, and avoid jumping to FOG prices before checking whether better fusion or learned inertial odometry closes the gap in software.

## Failure modes
Vibration rectification silently biases estimates on any platform with motors; temperature transients swing bias faster than estimators track; saturation during impacts corrupts everything downstream; magnetometer-aided headings (the usual yaw fix) break near steel and current; and estimator divergence after GPS/vision dropout is really the IMU's drift being unmasked.

## Examples
Bosch/TDK-InvenSense/STMicro consumer parts in every phone and drone flight controller; tactical-grade MEMS (Honeywell HG series, Analog Devices ADIS) in robots and munitions at $1k–20k; VectorNav and Xsens integrated AHRS units as robotics staples.

## Economic profile
Consumer silicon costs cents; each 10× improvement in bias stability costs roughly 10× more, up through export-controlled navigation grades. The interesting frontier is software eating grade: learned IMU odometry and better fusion extract tactical-grade performance from consumer parts, compressing the pyramid from below.
