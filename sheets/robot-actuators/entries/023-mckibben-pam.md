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
A rubber bladder in a braided sleeve: inflate it and the braid geometry converts radial expansion into axial contraction — up to ~25% strain with force-per-weight that embarrasses electric motors. Invented for prosthetics in the 1950s (McKibben), the pneumatic muscle contracts, softens, and springs like the biological original, and costs almost nothing to make. It remains soft robotics' default power source and the perennial "muscle" of biomimetic projects.

## Strengths and weaknesses
Excellent force density and inherent compliance, naturally safe around humans, tolerant of misalignment (it's a rope that pulls), water- and dirt-proof, absurdly cheap. Weaknesses: needs compressed air — the compressor, valves, and tether are the real system; force fades nonlinearly with contraction; antagonistic pairs are needed for bidirection; hysteresis and air compressibility make precision a lost cause; and bladder fatigue is a genuine wear item.

## Examples
Festo's Fluidic Muscle (the industrial productization) and its Airic's-arm demos, Shadow Robot's original air-muscle hand, countless bio-inspired legged and wearable prototypes, exosuit research (Harvard's soft exosuit lineage uses related pneumatics), Bridgestone's 1980s "rubbertuators."

## Economic profile
The muscle itself is nearly free; the pneumatic infrastructure is the entire cost and the reason no untethered robot uses them at scale. Commercially they persist in niches Festo serves (compliant tensioning, special machines) and in research. The investable adjacency is the valve-and-micro-compressor problem: whoever makes soft-robot pneumatics battery-portable revives this whole class.

## Suppliers
[Festo](https://www.festo.com/) — the Fluidic Muscle, the industrial McKibben productization
