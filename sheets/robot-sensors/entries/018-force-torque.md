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
The wrist's sense of effort: a machined flexure instrumented with strain gauges (or capacitive/optical gaps) resolving the full contact wrench — three forces, three torques — at kilohertz rates. Mounted between arm and tool, it turns position-controlled robots into force-controlled ones: polishing with constant pressure, inserting pins that would otherwise jam, teaching by hand-guiding, and detecting collisions by their signature.

## Strengths and weaknesses
Complete, calibrated contact truth at the tool; the enabling sensor for assembly, finishing, and teleoperation with force feedback; drop-in integration on standard wrist flanges. Weaknesses: precision flexures are expensive ($2–15k traditional); overload during crashes is a warranty event — the sensor protecting the process is itself fragile; thermal drift demands zeroing rituals; the added compliance and mass sit exactly where dynamics hate them; and cheap versions historically weren't, in every sense.

## When to use
Pick a wrist F/T sensor when the process needs calibrated wrench truth: precision insertion beyond what compliance devices capture, polishing and finishing at specified pressure, teleoperation with force feedback, and product test stands — sub-$1k entrants have dropped the ante from the traditional $2–15k. Spec overload protection if the cell can crash, and budget the zeroing ritual into cycle plans. Avoid it where coarse contact detection is enough — current-based sensing is free and every cobot ships it — or where the arm's built-in joint-torque sensing (iiwa, Franka class) already covers the fidelity you need; reserve the dedicated sensor for tasks where force accuracy visibly pays.

## Failure modes
Overload from collisions (the classic: the sensor dies protecting the experiment); thermal drift misread as force — gauges are thermometers with side jobs; cable fatigue at a constantly-moving wrist; gravity/payload compensation errors masquerade as phantom contact forces; capacitive types sensitive to temperature and humidity; slow zero-drift silently corrupting long tasks.

## Examples
ATI (the industrial standard, now Novanta), Robotiq FT-300, Bota Systems and Wacoh compact units, built-in joint-torque sensing on Kuka iiwa and Franka arms (the integrated alternative), Apple-supplier assembly lines full of them.

## Economic profile
A profitable niche being squeezed from two directions: integrated joint-torque sensing (every cobot now ships some version) and current-based sensorless estimation (free but crude). New entrants (Bota, Chinese vendors) have pulled entry prices under $1k. The bull case is humanoids doing contact-rich work — potentially two wrists' worth per robot at volume pricing; the bear case is "good enough" proprioception eating the mid-market.
