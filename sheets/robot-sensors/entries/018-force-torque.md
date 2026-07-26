---
number: 18
name: Six-Axis Force-Torque Sensors
part: 6
group: Force & touch
uses: [manip, safety]
range: [contact]
compute: low
adoption: common
cost: high
---

## Description
A six-axis F/T sensor is a machined flexure instrumented with strain gauges (or capacitive/optical gaps) that resolves the full contact wrench, three forces and three torques, at kilohertz rates. Mounted between the arm and the tool, it turns a position-controlled robot into a force-controlled one. That enables polishing at constant pressure, inserting pins that would otherwise jam, teaching by hand-guiding, and detecting collisions by their force signature.

## Strengths and weaknesses
You get complete, calibrated contact measurements right at the tool, which is what makes assembly, finishing, and force-feedback teleoperation work, and the sensors drop straight onto standard wrist flanges. The weaknesses: precision flexures are expensive (traditionally $2–15k), and overload during a crash is a warranty event, so the sensor that protects the process is itself fragile. Thermal drift means you have to re-zero regularly, the added compliance and mass sit right where the dynamics are most sensitive to them, and cheap versions have historically been a false economy.

## When to use
Pick a wrist F/T sensor when the process needs calibrated wrench data: precision insertion beyond what passive compliance devices handle, polishing and finishing at a specified pressure, teleoperation with force feedback, and product test stands. Sub-$1k entrants have brought the entry price down from the traditional $2–15k. Spec overload protection if the cell can crash, and budget the re-zeroing into cycle plans. If coarse contact detection is enough, use current-based sensing instead (it's free and every cobot ships it). If the arm has built-in joint-torque sensing (iiwa, Franka class) that already meets your fidelity needs, use that. Save the dedicated sensor for tasks where force accuracy visibly pays.

## Failure modes
Collisions overload the sensor, which is the most common way these die. Thermal drift gets misread as force, since strain gauges respond to temperature as well as strain. Cables fatigue at a wrist that moves constantly. Errors in gravity and payload compensation show up as phantom contact forces. Capacitive types are sensitive to temperature and humidity. Slow zero-drift corrupts long tasks without any obvious symptom.

## Examples
ATI (the industrial standard, now Novanta), Robotiq FT-300, Bota Systems and Wacoh compact units, built-in joint-torque sensing on Kuka iiwa and Franka arms (the integrated alternative), Apple-supplier assembly lines full of them.

## Economic profile
This is a profitable niche getting squeezed from two directions: integrated joint-torque sensing (every cobot now ships some version) and current-based sensorless estimation (free but crude). New entrants (Bota, Chinese vendors) have pulled entry prices under $1k. The bull case is humanoids doing contact-rich work, which could mean two wrists' worth of sensors per robot at volume pricing. The bear case is that "good enough" proprioception takes over the mid-market.

## Further reading

[How Force/Torque Sensors Are Enhancing Automation (ATI Industrial Automation)](https://ati.novanta.com/how-force-torque-sensors-are-enhancing-automation/) · [What Is a Force Torque Sensor? (Bota Systems)](https://botasys.com/post/force-torque-sensor/)
