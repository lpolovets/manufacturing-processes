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

## Failure modes
Friction hysteresis and stiction generate force estimates that are confidently wrong at low speeds — exactly where delicate contact happens; unmodeled payloads bias everything; temperature-dependent motor constants drift the calibration mid-shift; gearbox wear changes the friction model over fleet life; and collision detection tuned tight enough to be safe false-triggers on aggressive motion — the eternal sensitivity/uptime trade.

## Examples
Universal Robots' collision detection and freedrive, Franka's blended joint-torque/current approach, every QDD quadruped's contact estimation (foot touchdown from current spikes), Tesla Optimus and peers leaning on proprioception to minimize sensor count, admittance-control cobot lifting aids.

## Economic profile
The margin-destroyer of the force-sensing market: free and adequate is a brutal competitor to expensive and precise. Its ceiling is physics (friction masks signal), so the equilibrium is stratified — current sensing for safety and coarse contact everywhere, dedicated F/T and tactile where precision pays. For diligence on "sensor-light" robot pitches, probe exactly where that friction floor sits for their transmissions.
