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
An IMU is the robot's inner ear. Micromachined accelerometers and gyroscopes on a chip measure specific force and angular rate at hundreds to thousands of hertz, for under a dollar at phone volume. It's the only sensor that works everywhere and always (no line of sight, no lighting, no infrastructure), which makes it the backbone of every state estimator. Its flaw is equally universal: it measures derivatives, so position comes from double integration, and every bias error grows quadratically into drift.

## Strengths and weaknesses
It's tiny, cheap, kilohertz-fast, and works in any environment. It's the glue of every sensor-fusion stack (VIO, GNSS-INS, leg odometry) and the flight-control heartbeat of every drone. The weaknesses: on its own it drifts without bound, and consumer parts lose meters within seconds of dead reckoning. Bias wanders with temperature and time, vibration aliases into the signal (drone props are especially bad), and scale-factor and axis-misalignment errors need calibration. Grades are stratified across four orders of magnitude in price.

## When to use
Every robot gets one, so the real decision is grade. Consumer parts (cents to tens of dollars) are correct whenever external fixes arrive every second or faster, as they do with VIO, GNSS-INS, or encoder odometry, which covers nearly all of robotics. Spend on tactical-grade ADIS-class parts ($1k–20k) only when dead-reckoning gaps stretch to tens of seconds or vibration is severe. Isolate it mechanically from props and motors before buying a better one. Don't trust any MEMS IMU standalone for position beyond a few seconds, and don't jump to FOG prices before checking whether better fusion or learned inertial odometry closes the gap in software.

## Failure modes
Vibration rectification biases estimates on any platform with motors, and it does so without any obvious symptom. Temperature transients swing bias faster than estimators can track it. Saturation during impacts corrupts everything downstream. Magnetometer-aided headings, the usual fix for yaw, break near steel and current. Estimator divergence after GPS or vision dropout is really the IMU's drift being unmasked.

## Examples
Bosch/TDK-InvenSense/STMicro consumer parts in every phone and drone flight controller; tactical-grade MEMS (Honeywell HG series, Analog Devices ADIS) in robots and munitions at $1k–20k; VectorNav and Xsens integrated AHRS units as robotics staples.

## Economic profile
Consumer silicon costs cents, and each 10× improvement in bias stability costs roughly 10× more, up through export-controlled navigation grades. The interesting frontier is software substituting for grade: learned IMU odometry and better fusion extract tactical-grade performance from consumer parts, which compresses the pyramid from below.

## Further reading

[Inertial Navigation Primer (VectorNav)](https://www.vectornav.com/resources/inertial-navigation-primer) · [Using Inertial Sensors for Position and Orientation Estimation (arXiv)](https://arxiv.org/abs/1704.06053)
