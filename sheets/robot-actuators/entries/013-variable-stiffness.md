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
In a variable stiffness actuator, mechanical stiffness is a controlled variable. Each joint uses two motors: one sets position, and the other adjusts the preload on a nonlinear spring. The joint can be rigid for precision one moment and soft for impact the next, and the compliance is physical rather than simulated by the controller. The biological argument for this is straightforward, since muscles co-contract to modulate stiffness all the time. The engineering cost is a second actuator's mass, cost, and complexity in every joint.

## Strengths and weaknesses
The compliance is physical, so it still works when control fails, which is a safety case software impedance can't fully match. Energy storage can be tuned to the gait or task, and impact response is smooth. Weaknesses: you roughly double actuator mass and cost per joint to get a property that QDD approximates in software. The nonlinear spring mechanisms are intricate and prone to wear, and controlling the coupled system is a research field of its own. After two decades of prominence in EU research projects, no volume application has adopted it.

## When to use
Specify a full VSA only when physically guaranteed, control-independent compliance is a hard requirement. That usually means a safety case where software impedance on a failed controller isn't an acceptable answer, or research studying stiffness modulation itself. If you only need one tunable axis (gait-dependent stiffness in a prosthetic ankle, or a clutch that disengages on impact), use the single-motor, selective versions of the idea instead of two motors per joint. Otherwise avoid it. The second actuator's mass and roughly 2× joint cost buy a property a QDD joint approximates in software for free, and two decades of prototypes with no volume adoption is a base rate worth taking seriously.

## Examples
DLR's Hand Arm System and FSJ joints (the field's flagship), IIT's AwAS and CompAct series, qbrobotics' commercial VSA modules (the rare productization), MACCEPA-based prosthetics research.

## Economic profile
The category is scientifically rich but commercially stalled, because the extra safety and efficiency over software-compliant QDD hasn't justified 2× joint cost anywhere at scale. The ideas do show up in simpler forms that work: clutches, adjustable ankles in prosthetics, and single-motor nonlinear springs. A good rule of thumb is to treat full two-motor VSA pitches as research instruments, and to look for the commercial opportunity in selective, single-axis stiffness modulation.

## Suppliers
[qbrobotics](https://qbrobotics.com/) — commercial variable-stiffness actuators and soft hands

## Further reading

[Variable Impedance Actuators: A Review (Robotics and Autonomous Systems)](https://www.centropiaggio.unipi.it/sites/default/files/2013_VABBCCCEFGGGGHHJLLPSTVVVW_RAS.pdf)
