---
number: 188
name: "Thermal oxidation"
part: 5
group: "Semiconductor & Microscale"
materials: [semi]
volumes: [high, cont]
tooling: mod
---

## Description

Silicon is exposed to oxygen or steam at high temperature to grow silicon dioxide.

## Strengths and weaknesses

Produces high-quality dielectric interfaces and uniform films. Consumes silicon, requires high temperature, and is substrate-specific.

## When to use

Grow thermal oxide whenever the electrical quality of the Si-SiO2 interface matters — gate and tunnel oxides, high-quality passivation, and any dielectric where defect density must be minimal — and for cheap, uniform hard masks on bare silicon early in a flow. Dry oxidation gives dense, slow-growing films for thin critical oxides; wet oxidation grows thick field and masking oxides up to a couple of microns in reasonable furnace time. Because it runs at 900-1200 C and consumes the substrate, it is only usable on exposed silicon before metallization or any dopant profile that cannot tolerate the thermal budget; once those constraints bind, deposit oxide by CVD instead, or use ALD for thin conformal dielectrics on arbitrary materials.

## Examples

Gate oxides, isolation layers, masks, passivation.

## Videos

- https://www.youtube.com/watch?v=8aBDsLOMWDY — Thermal Oxide Growth on Silicon Wafer - 500nm (Sam Zeloof, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=IuVNFI_jDys — EEE435 Furnace Oxidation (EEE435 Fundamentals of CMOS and MEMS, 6 minutes, 5k+ views)
- https://www.youtube.com/watch?v=Kt_z2mX5DfY — Dry Thermal Oxidation Process (Support Center for Microsystems Education, 2 minutes, 5k+ views)

## Further reading

[Deal-Grove Oxide Growth Calculator (BYU Cleanroom)](https://cleanroom.byu.edu/OxideTimeCalc) · [Micro/Nano Processing Technology (MIT OpenCourseWare)](https://ocw.mit.edu/courses/6-152j-micro-nano-processing-technology-fall-2005/)
