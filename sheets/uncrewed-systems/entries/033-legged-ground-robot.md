---
number: 33
name: Legged ground robot
part: 7
group: Small robots
roles: [isr, log]
endurance: [hours]
payload: [tiny, small]
autonomy: sup
cost: med
---

## Description
A legged ground robot walks on four legs, negotiating stairs, rubble, and broken ground that stops wheels and tracks. Commercial quadrupeds weigh 30–70 kg, carry 10–15 kg of payload, and run for 60–150 minutes per battery. Onboard autonomy handles balance, footstep planning, and obstacle avoidance, so the operator gives destinations rather than steering. Military and security use has focused on inspection and reconnaissance in structures, on hazardous-site survey, and on perimeter patrol, where the ability to climb stairs and step over debris is what makes the robot useful.

## Strengths and weaknesses
Mobility over terrain that defeats tracked robots is the unique capability, and it is genuinely useful inside damaged buildings, industrial sites, and tunnels. The autonomy stack is mature enough that operation needs little training. The weaknesses are endurance, payload, and cost. Two hours of walking is short, 10 kg is a modest payload, and $75k–150k is expensive for what is essentially a mobile camera. Legs are also mechanically complex and wear faster than tracks, and the robots are loud enough to be noticed.

## When to use
Use legged robots where the terrain genuinely requires legs: stairs, rubble, industrial plant with catwalks and obstacles, and tunnels. If the ground is drivable, a tracked or wheeled robot does the job for a fraction of the cost with better endurance. If the task is aerial observation, a small drone is cheaper and faster. The honest assessment is that legged robots have found solid commercial footing in industrial inspection, where the routes are fixed and the value of avoiding a human visit is clear, and a narrower military niche than early enthusiasm suggested.

## How it is countered
Small arms disable them. Radio links fail underground and inside structures, which is where they are most wanted, so tethered or relay-based operation is common. Short endurance limits mission length. Their noise and gait make them conspicuous. Terrain that is genuinely hostile — deep mud, loose sand, ice — remains difficult for legs as well as for wheels.

## Examples
Boston Dynamics Spot, Ghost Robotics Vision 60 used for base perimeter patrol by several air forces, ANYbotics ANYmal in industrial inspection, Unitree's much cheaper quadrupeds, and armed quadruped demonstrations that have attracted policy attention.

## Economic profile
Chinese manufacturers have driven quadruped prices down by roughly an order of magnitude, with capable platforms available for a few thousand dollars against $75k+ for Western equivalents. That has expanded experimentation enormously while creating the same supply-chain concern as small drones. The durable commercial market is industrial inspection with a clear return on avoided human site visits; the military market remains smaller and focused on base security and hazardous reconnaissance.

## Further reading

[The Army's Robotic Combat Vehicle (RCV) Program (Congressional Research Service)](https://www.everycrsreport.com/reports/IF11876.html) · [Research programs (DARPA)](https://www.darpa.mil/research/programs)
