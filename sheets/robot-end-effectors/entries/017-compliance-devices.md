---
number: 17
name: Compliance Devices (RCC & Active)
part: 6
group: Infrastructure
tasks: [asm]
versatility: mod
reliability: proven
maturity: common
cost: med
---

## Description
Forgiveness as a component: remote-center-compliance (RCC) devices — elastomer-and-shim structures between wrist and tool — let a slightly-misaligned peg self-center into its hole by placing the compliance's rotation point at the part's tip, converting jamming contact forces into corrective motion. Purely passive, invented at Draper Labs in the 1970s, and still solving insertion problems that vision and force control handle with far more expense. Active versions (voice-coil or pneumatic axes) add controlled compliance and position feedback.

## Strengths and weaknesses
Solves peg-in-hole misalignment mechanically, in microseconds, with zero sensing, zero programming, and zero compute; cheap, robust, maintenance-light. Weaknesses: tuned per task — compliance center location depends on part length, so tool changes may need device changes; passive means uncontrolled (it always complies, including when you wish it wouldn't); limited misalignment capture range; elastomers age; and modern force-controlled robots absorb some of its role in software.

## Examples
ATI and Schunk RCC lines descended from the Draper design, insertion stations in connector and bearing assembly, active compliance flanges (FerRobotics, PushCorp — shared with finishing), spring-loaded "crash protectors" (the RCC's cousin that saves tools from collisions), dowel and shaft-fitting cells everywhere.

## Economic profile
A small, permanent market with the best cost-benefit ratio in assembly automation — a $1–3k passive device routinely replaces a $15k force-control package for defined insertions. Its intellectual legacy exceeds its revenue: the RCC's lesson (put intelligence in mechanics when you can) is the founding argument of underactuated hands and soft robotics, making it the philosophical ancestor of half this sheet.
