---
number: 20
name: Canister-launched swarm munition
part: 4
group: Long-range
roles: [strike, isr, ew]
endurance: [mins, hours]
payload: [tiny]
autonomy: auto
cost: low
---

## Description
A swarm munition system launches many small drones from a canister or a tube, either from an aircraft, a vehicle, or a ship. The individual aircraft are small and cheap, carry a small warhead or a sensor, and coordinate with each other over a mesh network — sharing detections, dividing a target area, and reallocating when members are lost. The point is not any one aircraft's capability but the collective behavior: dozens of objects arriving from multiple directions saturate defenses that could handle any one of them easily.

## Strengths and weaknesses
Saturation and graceful degradation are the strengths. A defense that can engage four targets per minute is overwhelmed by forty arriving together, and losing half a swarm degrades its output rather than ending the mission. Cost per aircraft is low. The weaknesses are the coordination layer and the policy questions. Mesh networks are jammable, autonomous target selection within a swarm is legally contested, and demonstrating swarm behavior in a test range is much easier than making it work in an environment with jamming, terrain, and unexpected targets. Payload per aircraft is very small.

## When to use
Consider swarm munitions for saturating point defenses, for wide-area search where many cheap sensors beat one good one, and for distributed electronic attack. If the target requires a substantial warhead, a small swarm aircraft cannot carry it and a conventional munition is necessary. If the environment is heavily jammed, the coordination that makes a swarm more than a group of individual drones may not survive, so check what the system does when the mesh degrades — the honest answer is usually that it becomes a set of independent waypoint-following drones.

## How it is countered
Jamming the mesh network reduces a swarm to uncoordinated individuals. High-power microwave weapons are the most promising kinetic counter, because they engage many targets in one shot, which is the only way to match the cost exchange. Guns with programmable airburst ammunition and short-range interceptors both work per target but lose on economics against large numbers. Distributed detection is straightforward given the acoustic and RF signatures.

## Examples
Raytheon Coyote in swarm configurations, the US Navy LOCUST and DARPA OFFSET and Gremlins programs, the Perdix micro-drone demonstration launched from fighter dispensers, the Turkish Kargu swarm demonstrations, and Chinese canister-launched swarm systems shown at exhibitions.

## Economic profile
Swarms are heavily funded on the argument that they invert the cost exchange in the attacker's favor, and the counter-investment in high-power microwave weapons follows the same logic in reverse. Progress has been slower than demonstrations suggest, because the difficult part is robust autonomy in degraded conditions rather than the coordination algorithms shown in clear-weather tests. The systems that field first are likely to be simple ones with modest coordination rather than the fully autonomous swarms of the concept videos.

## Further reading

[Emerging Military Technologies: Background and Issues for Congress (Congressional Research Service)](https://www.everycrsreport.com/reports/R46458.html) · [Research programs (DARPA)](https://www.darpa.mil/research/programs)
