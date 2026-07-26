---
number: 9
name: Ball Screw & Lead Screw
part: 2
group: Transmissions
applications: [prec, heavy, legged]
density: vhigh
backdrive: none
precision: ufine
cost: med
---

## Description
A screw converts rotary motion to linear motion with mechanical advantage in the thousands: the screw turns and the nut advances. Lead screws slide, which makes them cheap, self-locking, and lossy. Ball screws recirculate bearing balls between the threads, which makes them 90%+ efficient, precise, and expensive. Both give the highest force density of any electromechanical option, since a small motor plus a fine-pitch screw can press tonnes. That's why machine tools, presses, and now humanoid knees are built on them.

## Strengths and weaknesses
Force multiplication is very large, ground ball screws position to microns, lead screws self-lock so they hold load with no power, and the whole arrangement is stiff and simple. Weaknesses: the motion is linear only, and speed is capped by screw whip and nut dynamics. Lead screws lose 50–70% of the input to friction. Ball screws are sensitive to shock and contamination. Backdrivability runs from poor (ball) to none (lead), so force control has to be sensed and computed rather than felt through the mechanism.

## When to use
Pick a screw when the joint is fundamentally a linear force problem: humanoid knees and ankles, presses, clamps, and lifts. You get kilonewtons from a modest BLDC, micron repeatability from ground ball screws, and power-off self-locking for free if you use a lead screw. If the same envelope has to carry 3–10× the load and shock, step up to a planetary-roller screw. Avoid screws where the motion is naturally rotary, where speed matters (whip caps travel rates), or where the joint needs to feel contact, since backdrivability runs from poor to none. If you need transparent linear force, use a linear motor or a cable drive. If you need a backdrivable rotary joint, use QDD.

## Examples
Every CNC machine axis and injection-molding press; THK, NSK, Hiwin as the incumbent industry; electric vehicle brake and steering actuators; Tesla Optimus and Figure's linear knee/ankle actuators, reflecting the fact that leg joints are largely linear force problems; aircraft flap actuators.

## Economic profile
Standard grades are a mature bearing-industry commodity, while precision ground screws still carry real margins. Humanoid designers have been choosing planetary-roller screws (the ball screw's high-force cousin, using rollers instead of balls for 3–10× the load capacity and price), which turned a quiet aerospace niche into a fast-growing one. Compact roller screws could end up being the humanoid era's supply chokepoint, in the way harmonic drives were for industrial arms.

## Suppliers
[THK](https://www.thk.com/) — ball screws and linear motion at global scale · [Rollvis](https://www.rollvis.com/) — planetary roller screws for humanoid-class linear joints

## Further reading

[2.72 Elements of Mechanical Design: Lecture Notes incl. Screw Drives (MIT OpenCourseWare)](https://ocw.mit.edu/courses/2-72-elements-of-mechanical-design-spring-2009/pages/lecture-notes/)
