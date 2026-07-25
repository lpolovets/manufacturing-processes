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
Electromagnetism at its bluntest: energize a coil, and an iron plunger snaps in. Binary, fast, and nearly free, the solenoid is the industrial world's electric muscle-twitch — it opens valves, throws latches, kicks parts off conveyors, and fires pinball flippers. Force is highly nonlinear (weak at full extension, strong near closure), so solenoids do impacts and holds, not motion control.

## Strengths and weaknesses
Cheapest electric actuator per unit, millisecond response, no electronics beyond a switch, utterly reliable in on/off duty. Weaknesses: essentially uncontrollable mid-stroke; force-stroke curve is punishingly nonlinear; continuous energization overheats coils (latching variants fix this with magnets); stroke is short; and efficiency in sustained duty is poor. It is a switch that moves, not an actuator that positions.

## When to use
Use a solenoid when the requirement is genuinely binary and short-stroke: throw a latch, fire a valve, kick a part, engage a brake — millisecond response, cents to dollars, and nothing to tune. If the state must be held for minutes or unpowered, specify a latching (permanent-magnet) variant before the coil cooks itself. Avoid it the moment the spec mentions position, speed, or proportional force anywhere between the endpoints — the force-stroke curve won't cooperate — and reach for a voice coil for controlled short-stroke force or a small gearmotor for controlled travel instead.

## Examples
Every fluid solenoid valve (the largest actuator population on earth), door locks and vending machines, part-reject flippers on sorting lines, pinball machines, camera shutters, automotive starter engagement.

## Economic profile
A fully mature commodity measured in cents to dollars, with no robotics story of its own — but omnipresent in robot peripherals: pneumatic valve manifolds, tool-changer locks, and safety brakes are all solenoid-actuated. Worth an entry mainly so its niche is recognized and respected: when the requirement is truly binary, nothing cheaper or more reliable exists.

## Suppliers
[TLX Technologies](https://www.tlxtech.com/) — custom solenoids and electromagnetic actuators · [Johnson Electric](https://www.johnsonelectric.com/) — motors and solenoids by the hundred million
