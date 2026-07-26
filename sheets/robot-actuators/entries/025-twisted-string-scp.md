---
number: 25
name: Twisted-String & Coiled-Polymer Actuators
part: 7
group: Artificial muscle
applications: [soft, prec]
density: high
backdrive: poor
precision: mod
cost: vlow
---

## Description
These are two muscles made from string. Twisted-string actuators (TSA) spin a pair of cords with a tiny high-speed motor. Twisting shortens the bundle, which converts cheap RPM into high linear force. The result is a transmission that weighs grams, costs cents, and has a ratio that grows as it twists. Supercoiled polymer (SCP) muscles go further: nylon fishing line, twisted until it coils, contracts several percent when heated. That 2014 discovery turned sewing thread into a muscle with 100× the work density of biological tissue.

## Strengths and weaknesses
Force per gram and cost are both remarkable. TSA turns any micro-motor into a tendon puller, which is ideal for prosthetic hands and wearables. The weaknesses: TSA strings fatigue, and the nonlinear ratio complicates control. Travel is limited and speed is modest. SCP muscles inherit SMA's thermal problems (single-digit efficiency, cooling-limited hertz bandwidth) plus polymer creep. They demo well and are rarely used in real applications.

## When to use
Use a twisted-string actuator when a gram-scale, cent-scale mechanism has to pull like a tendon: prosthetic and robotic fingers, exo-gloves, cable tensioners. Anywhere a tiny high-RPM motor plus two cords can replace a gearbox, TSA is worth a look, and the naturally rising ratio suits grasps that start fast and end forceful. Budget for string replacement as a wear item and handle the nonlinear ratio in your controller. Avoid TSA for long-travel or high-cycle continuous axes. Avoid SCP muscles in products entirely, since single-digit thermal efficiency and hertz-class bandwidth confine them to research until a non-Joule heating path appears. For controlled linear force at scale, a screw or voice coil is still the tool.

## Examples
TSA: prosthetic hands and exo-gloves in research (and consumer products quietly — some e-bike and cable-tensioning mechanisms), NASA tendon experiments; SCP: University of Texas/Baughman lab's nylon muscles, haptic and micro-robotics demos, textile-integrated actuator research.

## Economic profile
TSA is an underrated engineering trick with real product wins available today in hands, grippers, and wearables, anywhere a gram-scale motor has to pull like a tendon. SCP remains materials-science upside without a thermal exit, so watch for photonic or chemical (non-Joule) heating breakthroughs before believing product claims. Together they illustrate the pattern in this field: the transmission innovations ship, and the thermal muscles wait.

## Suppliers
[Allonic](https://allonic.co/) — braided/twisted-fiber muscle actuators

## Further reading

[New Twist on Artificial Muscles (PNAS via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC5081609/) · [Data-Driven Twisted String Actuation for Dexterous Hands (Biomimetics via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12467424/)
