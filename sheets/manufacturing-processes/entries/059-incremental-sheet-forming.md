---
number: 59
name: "Incremental sheet forming"
part: 2
group: "Sheet-Metal Forming"
materials: [metal]
volumes: [proto, low]
tooling: min
---

## Description

A CNC-controlled tool progressively deforms sheet without a full matched die.

## Strengths and weaknesses

It avoids expensive tooling, which makes it useful for prototypes and custom parts. It's slow, and dimensional accuracy is usually modest.

## When to use

Pick incremental forming for one-offs and runs under roughly 100 pieces (prototype panels, patient-specific implants, replacement parts for out-of-production vehicles), where die cost would dominate and a CNC toolpath is the only tooling you need. Expect cycle times of minutes to hours per part and accuracy around plus or minus 0.5-1 mm, unless you add a partial die and compensation passes. Avoid it for production volumes or tight-tolerance skins. Stamping takes over once quantities justify dies, and stretch forming handles large smooth aerospace contours.

## Examples

Custom medical implants, prototype body panels, low-volume enclosures.

## Videos

- https://www.youtube.com/watch?v=0xOANlj_O88 — Incremental Sheet Forming (ISF) Machine (Eurecat, 3 minutes, 100k+ views)
- https://www.youtube.com/watch?v=eOwEgEDOaak — Forming Titanium Sheet - SPIF vs. Stamping (Russell Makes, 6 minutes, 1k+ views)
- https://www.youtube.com/watch?v=jQRwOyeBF8s — Incremental Sheet Forming: real-time experiments for manufacturing a variable… (Learn with Crazy Engineers, 10 minutes, 1k+ views)

## Further reading

[Single Point Incremental Forming: State-of-the-Art and Prospects (Duflou et al., KU Leuven)](https://lirias.kuleuven.be/retrieve/e5ddf445-8e73-46eb-b351-bcfe47b0c77a)
