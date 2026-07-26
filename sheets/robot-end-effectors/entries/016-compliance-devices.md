---
number: 16
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

## When to use
Pick an RCC for defined, repeated insertions with small misalignment — connectors, dowels, bearings, shafts — where a $1–3k passive device replaces a $15k force-control package and reacts in microseconds instead of control-loop time; size the compliance center to the part length and it simply works. Crash-protector variants are cheap insurance on any tool worth more than they are. Avoid it across varied insertion families (each part length wants its own tuning), for misalignments beyond the capture range where a search strategy is needed anyway, and on arms whose built-in force control already handles the insertion — though check the passive device's price before assuming software is cheaper.

## Examples
ATI and Schunk RCC lines descended from the Draper design, insertion stations in connector and bearing assembly, active compliance flanges (FerRobotics, PushCorp — shared with finishing), spring-loaded "crash protectors" (the RCC's cousin that saves tools from collisions), dowel and shaft-fitting cells everywhere.

## Economic profile
A small, permanent market with the best cost-benefit ratio in assembly automation — a $1–3k passive device routinely replaces a $15k force-control package for defined insertions. Its intellectual legacy exceeds its revenue: the RCC's lesson (put intelligence in mechanics when you can) is the founding argument of underactuated hands and soft robotics, making it the philosophical ancestor of half this sheet.

## Further reading

[How Remote Center Compliance Compensators Work (ATI Industrial Automation)](https://www.ati-ia.com/products/compliance/Compensator_product_desc.aspx) · [Selecting a Compensator: Misalignment and Clearance Calculation (ATI Industrial Automation)](https://www.ati-ia.com/products/compliance/compensator_selection_1.aspx)
