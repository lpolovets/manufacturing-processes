---
number: 13
name: Variable Stiffness Actuators (VSA)
part: 3
group: Architectures
applications: [soft, arm, legged]
density: low
backdrive: good
precision: mod
cost: vhigh
---

## Description
Actuators whose mechanical stiffness is itself a controlled variable: two motors per joint — one sets position, one adjusts a nonlinear spring's preload — so the joint can be rigid for precision one moment and soft for impact the next, with the compliance real (physical) rather than simulated by control. The biological argument is compelling: muscles co-contract to modulate stiffness constantly. The engineering price is a second actuator's mass, cost, and complexity in every joint.

## Strengths and weaknesses
True physical compliance that works even when control fails (the safety case software impedance can't fully match); energy storage tunable to the gait or task; graceful impact response. Weaknesses: roughly double the actuator mass and cost per joint for a property QDD approximates in software; nonlinear spring mechanisms are intricate and wear-prone; control of the coupled system is a research field in itself; and after two decades of EU-project prominence, no volume application has adopted it.

## When to use
Specify a full VSA only when physically guaranteed, control-independent compliance is a hard requirement — safety cases where software impedance on a failed controller is not an acceptable answer, or research explicitly studying stiffness modulation itself. If the need is one tunable axis (a prosthetic ankle's gait-dependent stiffness, a clutch that disengages on impact), take the single-motor, selective versions of the idea rather than two motors per joint. For everything else, avoid it: the second actuator's mass and roughly 2× joint cost buy a property a QDD joint approximates in software for free, and two decades of prototypes without a volume adoption is the base rate to bet with.

## Examples
DLR's Hand Arm System and FSJ joints (the field's flagship), IIT's AwAS and CompAct series, qbrobotics' commercial VSA modules (the rare productization), MACCEPA-based prosthetics research.

## Economic profile
A scientifically rich, commercially stalled category: the marginal safety and efficiency over software-compliant QDD hasn't justified 2× joint cost anywhere at scale. Its ideas leak productively into simpler forms — clutches, adjustable ankles in prosthetics, single-motor nonlinear springs. Treat full two-motor VSA pitches as research instruments; treat selective, single-axis stiffness modulation as the investable residue.

## Suppliers
[qbrobotics](https://qbrobotics.com/) — commercial variable-stiffness actuators and soft hands
