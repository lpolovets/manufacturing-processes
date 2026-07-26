---
number: 7
name: Harmonic (Strain-Wave) Drive
part: 2
group: Transmissions
applications: [arm, prec, legged]
density: high
backdrive: poor
precision: fine
cost: high
---

## Description
The strain-wave drive is the transmission that made the modern robot arm practical. An elliptical wave generator flexes a thin-walled flexspline inside a rigid circular spline, and the two-tooth difference between them gives ratios of 50–160:1 in a single pancake-thin stage with essentially zero backlash. No other transmission packs that much ratio into that little space and mass, which is why six of them sit in nearly every industrial robot and cobot wrist built since the 1980s.

## Strengths and weaknesses
You get zero backlash, very high single-stage ratios, a thin coaxial form factor with a through-hole for cables, and excellent positional repeatability. Weaknesses: the flexing metal spline has finite fatigue life and strict shock-load ceilings, since impacts can ratchet or crack it. Efficiency is mediocre (60–85%) and friction depends strongly on load. Torsional wind-up and resonance make force control harder, and the drive is essentially non-backdrivable. Until recently, one company set the world price.

## When to use
Choose strain-wave when you need 50–160:1 with zero backlash in minimum mass and axial depth. That means arm wrists and distal joints, cobots, positioning duty where trajectories are controlled and impacts are rare, and anywhere a cable pass-through hole is worth having. Design around its limits: derate for shock, since a single hard impact can ratchet the flexspline, and plan for force control through its wind-up and load-dependent friction to be a real controls project. Avoid it for impact-exposed proximal joints, where a cycloidal handles the hits better, and for contact-rich tasks that need backdrivability, where a QDD joint is the modern answer. If you're buying cheap Chinese units, qualify them on fatigue-life data rather than catalog torque.

## Examples
Harmonic Drive Systems (the namesake, ~half the world market), every UR cobot joint, most industrial-robot wrists, space mechanisms from lunar rovers to JWST; Chinese challengers (Leaderdrive, Zhongdadi) scaling with the humanoid boom; Tesla Optimus uses strain-wave stages in high-torque joints.

## Economic profile
This is a textbook precision-manufacturing moat. The know-how in flexspline tooth grinding and material fatigue supported a near-monopoly for decades at $500–2,000+ per unit. Humanoid demand (a dozen or more units per robot) has started a real supply race, with Chinese units now at about a third of incumbent prices and quality closing. Compare fatigue-life data rather than catalog specs, because that's where cheap units still differ.

## Suppliers
[Harmonic Drive](https://www.harmonicdrive.net/) — the strain-wave originator · [Leaderdrive](https://www.leaderdrive.com/) — Chinese strain-wave supplier scaling with humanoid demand

## Further reading

[Strain Wave Gear Operating Principle (Harmonic Drive)](https://www.harmonicdrive.net/technology/harmonicdrive) · [Harmonic Drive Gear Failures in Industrial Robots: An Overview (PHM Society)](https://papers.phmsociety.org/index.php/phme/article/download/2849/1801)
