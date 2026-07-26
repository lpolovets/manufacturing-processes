---
number: 19
name: Solenoids
part: 5
group: Linear electromagnetic
applications: [mobile, arm]
density: low
backdrive: good
precision: coarse
cost: vlow
---

## Description
A solenoid is the bluntest form of electromagnetic actuation: energize a coil and an iron plunger snaps in. It's binary, fast, and nearly free, and it does the industrial world's twitch work. Solenoids open valves, throw latches, kick parts off conveyors, and fire pinball flippers. Force is highly nonlinear (weak at full extension, strong near closure), so solenoids are good for impacts and holds, not motion control.

## Strengths and weaknesses
Solenoids are the cheapest electric actuator per unit, respond in milliseconds, need no electronics beyond a switch, and are very reliable in on/off duty. The weaknesses: they're essentially uncontrollable mid-stroke, and the force-stroke curve is severely nonlinear. Continuous energization overheats the coil (latching variants fix this with magnets). Stroke is short, and efficiency in sustained duty is poor. A solenoid is a switch that moves, not an actuator that positions.

## When to use
Use a solenoid when the requirement is genuinely binary and short-stroke: throw a latch, fire a valve, kick a part, engage a brake. You get millisecond response for cents to dollars, with nothing to tune. If the state has to be held for minutes or held with the power off, specify a latching (permanent-magnet) variant before the coil overheats. Avoid solenoids as soon as the spec mentions position, speed, or proportional force anywhere between the endpoints, because the force-stroke curve won't cooperate. If you need controlled short-stroke force, use a voice coil; if you need controlled travel, use a small gearmotor.

## Examples
Every fluid solenoid valve (the largest actuator population on earth), door locks and vending machines, part-reject flippers on sorting lines, pinball machines, camera shutters, automotive starter engagement.

## Economic profile
Solenoids are a fully mature commodity measured in cents to dollars, and they have no robotics story of their own. They are everywhere in robot peripherals, though: pneumatic valve manifolds, tool-changer locks, and safety brakes are all solenoid-actuated. They get an entry here mainly so the niche is recognized. When the requirement is truly binary, nothing cheaper or more reliable exists.

## Suppliers
[TLX Technologies](https://www.tlxtech.com/) — custom solenoids and electromagnetic actuators · [Johnson Electric](https://www.johnsonelectric.com/) — motors and solenoids by the hundred million

## Further reading

[How to Select a Linear Solenoid (Geeplus)](https://www.geeplus.com/selecting-a-linear-solenoid/) · [Shaping the Solenoid Force Curve (TLX Technologies)](https://www.tlxtech.com/articles/shaping-the-solenoid-force-curve)
