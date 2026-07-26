---
number: 23
name: Pneumatic Artificial Muscles (McKibben)
part: 7
group: Artificial muscle
applications: [soft, legged]
density: high
backdrive: exc
precision: coarse
cost: vlow
---

## Description
A McKibben muscle is a rubber bladder in a braided sleeve. Inflate it and the braid geometry converts radial expansion into axial contraction, up to ~25% strain, with force-per-weight far above what electric motors manage. It was invented for prosthetics in the 1950s (McKibben). The pneumatic muscle contracts, softens, and springs like the biological original, and it costs almost nothing to make. It remains soft robotics' default power source and the usual "muscle" in biomimetic projects.

## Strengths and weaknesses
Force density and inherent compliance are both excellent, the muscle is naturally safe around humans, it tolerates misalignment (it's a rope that pulls), it's water- and dirt-proof, and it's extremely cheap. The weaknesses: it needs compressed air, so the compressor, valves, and tether are the real system. Force fades nonlinearly as the muscle contracts. You need antagonistic pairs to move in both directions. Hysteresis and air compressibility make precision very hard. And bladder fatigue is a genuine wear item.

## When to use
Use McKibben muscles when compliance and force-per-gram dominate, precision doesn't, and compressed air is already on site or a tether is acceptable: compliant tensioning and special machines on factory air, wearable and rehabilitation prototypes, bio-inspired research where muscle-like springiness is the point. Design in antagonistic pairs and treat bladder fatigue as a scheduled consumable. Avoid them on untethered robots, where the compressor, valves, and hoses are the real system and cancel the mass advantage. Avoid them for anything needing repeatable position or force, too, since hysteresis and air compressibility get in the way. In that case use electric QDD joints or plain cylinders running to stops.

## Examples
Festo's Fluidic Muscle (the industrial productization) and its Airic's-arm demos, Shadow Robot's original air-muscle hand, countless bio-inspired legged and wearable prototypes, exosuit research (Harvard's soft exosuit lineage uses related pneumatics), Bridgestone's 1980s "rubbertuators."

## Economic profile
The muscle itself is nearly free. The pneumatic infrastructure is the entire cost, and it's the reason no untethered robot uses them at scale. Commercially they persist in the niches Festo serves (compliant tensioning, special machines) and in research. The investable adjacency is the valve and micro-compressor problem: whoever makes soft-robot pneumatics battery-portable would bring this whole class back.

## Suppliers
[Festo](https://www.festo.com/) — the Fluidic Muscle, the industrial McKibben productization

## Further reading

[A Review of Pneumatic Artificial Muscle Actuators: Force Model and Application (Actuators via Virginia Tech)](https://vtechworks.lib.vt.edu/items/39bcc6a1-ad15-45ed-81d4-3e456070338b)
