---
number: 1
name: Brushed DC Motor
part: 1
group: Electric rotary
applications: [mobile, soft]
density: low
backdrive: good
precision: coarse
cost: vlow
---

## Description
The simplest motor that works: current through a wound rotor, commutated mechanically by carbon brushes on a copper ring. Two wires, proportional torque, no drive electronics required beyond an H-bridge. Brushed DC built the twentieth century's actuation — and still owns the bottom of the market, where a motor must cost a dollar and spin when connected to a battery.

## Strengths and weaknesses
Unbeatable simplicity and cost; torque proportional to current with no commutation electronics; trivially reversible and controllable. Weaknesses: brushes wear out (hundreds to thousands of hours), arc, generate EMI and dust; heat is trapped in the rotor where it's hardest to remove, capping continuous torque; and at any performance level that matters, a BLDC now beats it on every axis except price and simplicity.

## When to use
Pick brushed DC when the axis is intermittent-duty, cost-dominated, and coarse — a few hundred to a few thousand hours of life is acceptable, the BOM allows single dollars, and control is an H-bridge off a battery: toys, lids, low-end grippers, prototype drivetrains. The coreless variant earns its premium where zero cogging and smoothness matter at low power, as in medical pumps and micro-mechanisms. Avoid it for continuous duty, tight thermal budgets, or any joint you'll iterate toward performance — rotor-trapped heat caps sustained torque and brush wear becomes the maintenance item; a small BLDC with a commodity FOC drive is the default upgrade path.

## Examples
Toys, seat adjusters, and appliance actuators by the billion; hobby gearmotors (Pololu-class) in education and prototyping robots; coreless brushed micromotors (Faulhaber, Maxon DCX) surviving in medical devices and precision niches where their zero-cogging smoothness matters.

## Economic profile
A fully commoditized industry with sub-dollar units at volume; the premium coreless niche (Maxon, Faulhaber) holds margins through quality and documentation. In robotics BOMs the brushed motor is the placeholder that gets designed out as requirements harden — but for low-duty, cost-dominated axes it remains the rational choice.

## Suppliers
[maxon](https://www.maxongroup.com/) — premium coreless brushed and BLDC micromotors · [FAULHABER](https://www.faulhaber.com/) — precision micro drive systems
