---
number: 2
name: Pneumatic Jaw Grippers
part: 1
group: Mechanical grippers
tasks: [asm, pick, metal]
versatility: narrow
reliability: proven
maturity: std
cost: low
---

## Description
These do most of the industrial gripping and get very little attention. Compressed air drives two or three jaws through a wedge or piston mechanism. They are either open or closed with nothing in between, they actuate very fast, and they are close to perfectly reliable. Custom-machined fingers adapt the standard body to the specific part, which is the design philosophy in miniature: the gripper is a commodity, and the fingers are the engineering. Millions of them serve in machine-tending, molding, and assembly cells, cycling every few seconds for years.

## Strengths and weaknesses
They're cheap, fast (tens of milliseconds), and immensely reliable, because the moving parts are just a piston and a wedge. Grip force per unit size is high, and dust and coolant don't bother them. The main weakness is binary operation: you get open or closed, with no force or position modulation unless you add hardware. They need plant air, which costs money and tethers the robot. One finger set covers one part family, so SKU diversity means changeovers. And you get no feedback beyond end-of-stroke switches unless you add sensors.

## When to use
Pick pneumatic jaws for high-cycle, known-geometry handling when you already have plant air (machine tending, molding, and assembly cells gripping the same part family every few seconds for years), and put the engineering into custom fingers rather than into the gripper. At $100–800 with tens-of-millisecond actuation, nothing matches its cost per million cycles. If grip force has to modulate for delicate or variable parts, if SKU churn makes finger changeovers the bottleneck, or if you're in an air-free environment like a lab or electronics assembly, the electric parallel-jaw gripper earns its 5–20× premium.

## Examples
Schunk PGN-plus (the archetype, in its millions), SMC and Festo catalogs, three-jaw centric versions for round stock, sprue pickers on every injection-molding machine, CNC machine-tending cells worldwide.

## Economic profile
This is a mature, profitable European/Japanese component oligopoly, with typical prices of $100–800 and margins coming from precision manufacturing and distribution. The shift to electric grippers takes bites out of the edges (controllability, air costs), but for high-cycle single-part duty nothing beats its cost-per-million-cycles. For diligence, treat it as the boring benchmark: a clever gripper startup has to beat it on uptime, and beating it on features isn't enough.

## Further reading

[Get a Handle on Gripper Technology (Festo)](https://www.festoblog.com/get-a-handle-on-gripper-technology/) · [Pneumatic Gripper Working Principles and Selection (Tameson)](https://tameson.com/pages/pneumatic-gripper)
