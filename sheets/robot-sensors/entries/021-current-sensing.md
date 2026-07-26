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
The free force sensor hiding in every motor: torque is proportional to current, so the drive's own current measurement — combined with a dynamics model of the arm — estimates external forces with no added hardware at all. Quasi-direct-drive joints made this respectable (low gearing means external forces actually reach the motor), and every cobot's collision detection, hand-guiding mode, and gentle-contact behavior is some flavor of this technique.

## Strengths and weaknesses
Zero cost, zero added mass, zero wiring — the sensing is software; improves with better dynamics models and learning; works at every joint simultaneously, not just the wrist. Weaknesses: friction, gear losses, and temperature corrupt the torque-current map — high-ratio transmissions bury external forces under friction noise entirely; model errors (payload, inertia) read as phantom forces; resolution is an order of magnitude below real F/T sensors; and it senses joint torque, not contact location.

## When to use
Use it everywhere it comes free: collision detection, hand-guiding, and coarse contact estimation on any arm, and genuinely useful force estimation on QDD and other low-gear joints where external loads actually reach the motor — quadruped touchdown detection and cobot safety stops live here at zero BOM cost. Before trusting it further, measure where the friction floor sits for your transmission. Avoid it as the only force sense for delicate low-speed contact (stiction makes estimates confidently wrong exactly there) or behind high-ratio gearboxes that bury the signal; when the task needs real numbers or contact location, pay for a wrist F/T sensor or tactile.

## Failure modes
Friction hysteresis and stiction generate force estimates that are confidently wrong at low speeds — exactly where delicate contact happens; unmodeled payloads bias everything; temperature-dependent motor constants drift the calibration mid-shift; gearbox wear changes the friction model over fleet life; and collision detection tuned tight enough to be safe false-triggers on aggressive motion — the eternal sensitivity/uptime trade.

## Examples
Universal Robots' collision detection and freedrive, Franka's blended joint-torque/current approach, every QDD quadruped's contact estimation (foot touchdown from current spikes), Tesla Optimus and peers leaning on proprioception to minimize sensor count, admittance-control cobot lifting aids.

## Economic profile
The margin-destroyer of the force-sensing market: free and adequate is a brutal competitor to expensive and precise. Its ceiling is physics (friction masks signal), so the equilibrium is stratified — current sensing for safety and coarse contact everywhere, dedicated F/T and tactile where precision pays. For diligence on "sensor-light" robot pitches, probe exactly where that friction floor sits for their transmissions.

## Further reading

[An Engineer's Guide to Current Sensing (Texas Instruments)](https://www.ti.com/lit/eb/slyy154a/slyy154a.pdf) · [Robot Collisions: A Survey on Detection, Isolation, and Identification (Haddadin et al., IEEE T-RO)](http://www.diag.uniroma1.it/~labrob/pub/papers/TRO_Collision_Dec2017.pdf)
