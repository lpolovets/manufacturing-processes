---
number: 10
name: Multi-Finger Dexterous Hands
part: 4
group: Dexterous hands
tasks: [dex, pick]
versatility: univ
reliability: mixed
maturity: emerging
cost: high
---

## Description
The anthropomorphic bet: hands with articulated fingers, opposable thumbs, and (increasingly) dense tactile sensing, built to manipulate anything a human hand can — reorienting objects in-hand, using human tools, exploiting the full grasp taxonomy. The category spans two very different animals with the same silhouette: research instruments that maximize articulation to explore what's possible, and production humanoid hands that deliberately subtract articulation until reliability and unit cost work at fleet scale. Together they exist to answer the field's deepest question — whether general manipulation is a hardware problem, a learning problem, or both.

## Strengths and weaknesses
The only effector class that can attempt the full human task distribution, and the substrate for manipulation learning (in-hand reorientation, tool use, imitation from human video). Weaknesses: fingers meet the world first and hardest — hands are the least reliable subsystem of every humanoid; tendons, joints, and tactile surfaces are wear items; research units are lab-fragile by construction; and for any *known* task, simpler tooling (jaws, suction, changers) remains cheaper, faster, and more reliable — dexterity must earn its premium on task generality alone.

## Variants
### Research-grade instruments
16–24 actuated DoF, tendon-driven, maximal sensing: Shadow Dexterous Hand (~$100k+, OpenAI's Rubik's-cube work), Wonik Allegro (the decade-long research default), LEAP Hand ($2k open-source — the cost collapse that democratized dexterity research). Maintained like instruments: retensioned, rebuilt, babied.

### Production humanoid hands
6–16 DoF, underactuated and compliance-protected, engineered for manufacture, service-swap, and consumable fingertips: Tesla Optimus's tendon-driven hands, Figure's iterations, Sanctuary's hydraulic fingers, 1X's compliant design — shipped attached to robots, not sold as hands, with a component-supplier tier now forming.

## Examples
OpenAI's cube manipulation (Shadow), academic in-hand-reorientation and tool-use research on Allegro/LEAP, teleoperated data collection for manipulation foundation models, Optimus/Figure demos folding laundry and sorting objects — the public benchmarks of the production camp.

## Economic profile
Two economies sharing one anatomy: a tiny research-instrument market (~$10–50M/yr) whose importance is wildly disproportionate — it is the R&D bench and training-data source for the production wave — and a potential tens-of-millions-of-units component market if general-purpose humanoids ship, with razor-blade fingertip economics. The open question that prices both: what fraction of deployed humanoid tasks actually needs more than a pinch? If the answer is "most," hands become the strategic component of the era; if "few," humanoids quietly ship with two-finger grippers and the premium collapses.
