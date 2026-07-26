---
number: 21
name: Sensorless Current-Based Sensing
part: 6
group: Force & touch
uses: [manip, safety]
range: [contact]
compute: med
adoption: common
cost: vlow
---

## Description
Every motor already contains a rough force sensor. Torque is proportional to current, so the drive's own current measurement, combined with a dynamics model of the arm, estimates external forces with no added hardware. Quasi-direct-drive joints made this approach credible, because low gearing means external forces actually reach the motor. Every cobot's collision detection, hand-guiding mode, and gentle-contact behavior is some version of this technique.

## Strengths and weaknesses
It costs nothing, adds no mass, and needs no wiring, because the sensing is software. It gets better as dynamics models and learning improve, and it works at every joint at once rather than only at the wrist. The weaknesses: friction, gear losses, and temperature all corrupt the torque-current map, and high-ratio transmissions bury external forces under friction noise completely. Model errors in payload or inertia show up as phantom forces, resolution is about an order of magnitude below a real F/T sensor, and it senses joint torque rather than contact location.

## When to use
Use it everywhere it comes free: collision detection, hand-guiding, and coarse contact estimation on any arm. On QDD and other low-gear joints, where external loads actually reach the motor, the force estimates are genuinely useful, which is how quadruped touchdown detection and cobot safety stops work at zero BOM cost. Before trusting it beyond that, measure where the friction floor sits for your transmission. Don't make it your only force sense for delicate low-speed contact, since stiction makes the estimates confidently wrong in exactly that regime, and don't rely on it behind high-ratio gearboxes that bury the signal. If the task needs real force numbers or contact location, pay for a wrist F/T sensor or a tactile sensor.

## Failure modes
Friction hysteresis and stiction generate force estimates that are confidently wrong at low speeds, which is exactly where delicate contact happens. Unmodeled payloads bias everything. Temperature-dependent motor constants drift the calibration mid-shift. Gearbox wear changes the friction model over fleet life. Collision detection tuned tight enough to be safe will false-trigger on aggressive motion, and that sensitivity-versus-uptime trade never goes away.

## Examples
Universal Robots' collision detection and freedrive, Franka's blended joint-torque/current approach, every QDD quadruped's contact estimation (foot touchdown from current spikes), Tesla Optimus and peers leaning on proprioception to minimize sensor count, admittance-control cobot lifting aids.

## Economic profile
This is what compresses margins across the force-sensing market, because free and adequate competes hard with expensive and precise. Its ceiling is set by physics, since friction masks the signal, so the market settles into layers: current sensing for safety and coarse contact everywhere, dedicated F/T and tactile sensors where precision pays. When doing diligence on a "sensor-light" robot pitch, ask exactly where the friction floor sits for their transmissions.

## Further reading

[An Engineer's Guide to Current Sensing (Texas Instruments)](https://www.ti.com/lit/eb/slyy154a/slyy154a.pdf) · [Robot Collisions: A Survey on Detection, Isolation, and Identification (Haddadin et al., IEEE T-RO)](http://www.diag.uniroma1.it/~labrob/pub/papers/TRO_Collision_Dec2017.pdf)
