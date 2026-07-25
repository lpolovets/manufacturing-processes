---
number: 16
name: Resolvers & Inductive Encoders
part: 5
group: Position feedback
uses: [manip]
compute: low
adoption: common
cost: med
---

## Description
Position sensing for places that destroy everything else: resolvers are wound transformers whose coupling varies with shaft angle — no electronics, no optics, no semiconductors at the sensing point — surviving temperatures, radiation, and vibration that kill encoders. Modern inductive (eddy-current) encoders print the same physics onto PCBs, delivering resolver robustness with encoder convenience and cost, and are quietly taking over EV traction motors and harsh-duty robotics.

## Strengths and weaknesses
Effectively indestructible sensing elements (resolvers fly in engines, reactors, and space); absolute within a revolution; immune to contamination that blinds optical discs; inductive versions are thin, hollow-shaft, cheap. Weaknesses: resolvers need excitation and demodulation electronics (the R/D converter is the real cost) and offer modest accuracy; classic resolvers are heavy copper; inductive encoders are patent- and vendor-concentrated; accuracy trails precision optical by an order of magnitude.

## Failure modes
The sensor rarely dies — its wiring does: excitation shorts, connector corrosion, and cable EMI are the field reality; R/D converter faults read as position noise; inductive types err near large conductive masses or with target-gap runout; temperature drift of electronics (not the sensor) sets practical accuracy; miswired phasing yields plausible-but-wrong angles that pass casual checks.

## Examples
Resolvers in EV traction motors (billions of km proven), aerospace actuators and reactor mechanisms; inductive: Renishaw's induction lines, Zettlex/Celera IncOders in robot joints and gimbals, integrated inductive chips (Microchip, TI) spreading into cobots and humanoid joints.

## Economic profile
Resolvers are a stable legacy market; PCB-based inductive encoding is the growth story — EV volume is driving chipset costs toward magnetic-encoder levels while offering better immunity to the magnetic interference inside motor housings. For humanoid joints packed with magnets, that immunity is turning inductive into the default output-side encoder; watch the chipset vendors.
