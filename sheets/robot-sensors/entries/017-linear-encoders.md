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
Position measured where it matters: a graduated scale (glass, steel tape, or magnetic stripe) fixed along the axis and a read head on the moving part, reporting true load position rather than inferring it from motor turns through a compliant, backlashed drivetrain. The distinction — direct versus inferred measurement — is the entire value: machine tools call it "closed-loop glass scales" and charge accordingly. Resolution runs from microns (magnetic tape) to nanometers (interferential glass).

## Strengths and weaknesses
Eliminates drivetrain error (backlash, screw pitch error, thermal growth) from the measurement; nanometer-class options for stages; tape versions cut to any length on site. Weaknesses: must be mounted, aligned, and protected along the full travel — installation is the product; exposed scales collect the shop's filth; cost scales with length; and most robot arms can't use them (rotary joints), confining linear scales to gantries, stages, and machine axes.

## When to use
Pick a linear scale when a linear axis must hit tolerances the drivetrain cannot guarantee — gantries, stages, and machine axes chasing tens of microns or better, where backlash, screw error, and thermal growth would otherwise land in the part. Glass scales for precision work, cut-to-length magnetic tape for long or dirty axes, interferential scales for nanometer stages. Avoid them when a motor-side encoder plus a stiff, well-mapped drivetrain already meets spec — installation, alignment, and full-travel protection are the real cost — and remember they simply do not apply to rotary-joint arms, which is most robots.

## Failure modes
Contamination scratches or obscures gratings — sealed scales trade protection for friction; mounting stress and thermal mismatch between scale and machine bend accuracy; read-head gap drift from wear or crash; magnetic scales corrupted by strong fields or physical dings; reference-mark loss after power cycling on incremental types; cable-carrier fatigue on fast axes.

## Examples
Heidenhain glass scales on every serious CNC and CMM, Renishaw tape systems on gantry robots and large-format machines, magnetic tape (SIKO, Balluff) on presses and actuators, interferential scales inside wafer steppers and metrology stages.

## Economic profile
A precision duopoly-flavored market (Heidenhain, Renishaw) with instrument margins at the top and commodity magnetic tape at the bottom. Robotics exposure is indirect but real: every gantry-based logistics system, 3D printer at quality, and semiconductor handler carries them. The strategic note is metrological: as robots chase machine-tool accuracy for machining and assembly, direct measurement returns to fashion.

## Further reading

[Linear Encoders Overview (HEIDENHAIN)](https://www.heidenhain.us/products/linear-encoders/) · [Linear Encoders for Numerically Controlled Machine Tools (HEIDENHAIN)](https://www.heidenhain.us/wp-content/uploads/2022/06/PR_Linear_Encoders_for_Numerically_Controlled_Machine_Tools_ID571470_en.pdf)
