---
number: 17
name: Linear Encoders & Scales
part: 5
group: Position feedback
uses: [manip]
compute: low
adoption: common
cost: med
---

## Description
A linear encoder is a graduated scale (glass, steel tape, or magnetic stripe) fixed along the axis, plus a read head on the moving part. It reports true load position instead of inferring it from motor turns through a compliant, backlashed drivetrain. That difference between direct and inferred measurement is the whole value, and machine tools sell it as "closed-loop glass scales" and charge accordingly. Resolution runs from microns (magnetic tape) to nanometers (interferential glass).

## Strengths and weaknesses
The measurement leaves out drivetrain error (backlash, screw pitch error, thermal growth). Nanometer-class options exist for stages, and tape versions can be cut to any length on site. The weaknesses: the scale has to be mounted, aligned, and protected along the full travel, so installation is most of the work. Exposed scales collect shop contamination, cost scales with length, and most robot arms can't use them at all because their joints are rotary. That confines linear scales to gantries, stages, and machine axes.

## When to use
Pick a linear scale when a linear axis has to hit tolerances the drivetrain can't guarantee: gantries, stages, and machine axes chasing tens of microns or better, where backlash, screw error, and thermal growth would otherwise show up in the part. Use glass scales for precision work, cut-to-length magnetic tape for long or dirty axes, and interferential scales for nanometer stages. If a motor-side encoder plus a stiff, well-mapped drivetrain already meets spec, stay with that, because installation, alignment, and full-travel protection are the real cost. And keep in mind that none of this applies to rotary-joint arms, which is most robots.

## Failure modes
Contamination scratches or obscures the gratings, and sealed scales trade protection for friction. Mounting stress and thermal mismatch between the scale and the machine bend accuracy. The read-head gap drifts from wear or after a crash. Strong fields or physical dings corrupt magnetic scales. Incremental types lose their reference mark after a power cycle. Cable carriers fatigue on fast axes.

## Examples
Heidenhain glass scales on every serious CNC and CMM, Renishaw tape systems on gantry robots and large-format machines, magnetic tape (SIKO, Balluff) on presses and actuators, interferential scales inside wafer steppers and metrology stages.

## Economic profile
The market is close to a duopoly (Heidenhain, Renishaw), with instrument margins at the top and commodity magnetic tape at the bottom. Robotics exposure is indirect but real, since every gantry-based logistics system, quality 3D printer, and semiconductor handler carries them. The strategic point is that as robots chase machine-tool accuracy for machining and assembly, direct measurement gets popular again.

## Further reading

[Linear Encoders Overview (HEIDENHAIN)](https://www.heidenhain.us/products/linear-encoders/) · [Linear Encoders for Numerically Controlled Machine Tools (HEIDENHAIN)](https://www.heidenhain.us/wp-content/uploads/2022/06/PR_Linear_Encoders_for_Numerically_Controlled_Machine_Tools_ID571470_en.pdf)
