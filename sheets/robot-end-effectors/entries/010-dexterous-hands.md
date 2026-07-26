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
This is the anthropomorphic bet: hands with articulated fingers, opposable thumbs, and (increasingly) dense tactile sensing, built to manipulate anything a human hand can, including reorienting objects in-hand, using human tools, and exploiting the full grasp taxonomy. The category spans two very different animals with the same silhouette. Research instruments maximize articulation to explore what's possible. Production humanoid hands deliberately subtract articulation until reliability and unit cost work at fleet scale. Together they exist to answer the field's deepest question: whether general manipulation is a hardware problem, a learning problem, or both.

## Strengths and weaknesses
This is the only effector class that can attempt the full human task distribution, and it is the substrate for manipulation learning (in-hand reorientation, tool use, imitation from human video). The weaknesses are mostly about wear. Fingers meet the world first and hardest, so hands are the least reliable subsystem of every humanoid, and tendons, joints, and tactile surfaces are all wear items. Research units are lab-fragile by construction. For any *known* task, simpler tooling (jaws, suction, changers) remains cheaper, faster, and more reliable, so dexterity has to earn its premium on task generality alone.

## When to use
Pick a dexterous hand only when task generality is itself the product: humanoid platforms facing open-ended task distributions, manipulation research, and teleoperated data collection for learned policies. LEAP-class $2k open hardware suits research budgets, and production-style underactuated hands suit cases where fleet reliability matters. If your task set can be enumerated, which covers nearly all deployed automation, a parallel jaw, suction, or a tool-changer portfolio beats a hand on cost, cycle time, and MTBF. Before specifying one, answer honestly what fraction of your tasks needs more than a pinch.

## Variants
### Research-grade instruments
16–24 actuated DoF, tendon-driven, maximal sensing: Shadow Dexterous Hand (~$100k+, OpenAI's Rubik's-cube work), Wonik Allegro (the decade-long research default), LEAP Hand ($2k open-source, the cost collapse that put dexterity research within reach of ordinary lab budgets). They get maintained like lab instruments, with regular retensioning and rebuilds.

### Production humanoid hands
6–16 DoF, underactuated and compliance-protected, engineered for manufacture, service-swap, and consumable fingertips: Tesla Optimus's tendon-driven hands, Figure's iterations, Sanctuary's hydraulic fingers, 1X's compliant design. These ship attached to robots rather than being sold as hands, though a component-supplier tier is now forming.

## Examples
OpenAI's cube manipulation (Shadow), academic in-hand-reorientation and tool-use research on Allegro/LEAP, teleoperated data collection for manipulation foundation models, Optimus/Figure demos folding laundry and sorting objects — the public benchmarks of the production camp.

## Economic profile
Two economies share one anatomy. The first is a tiny research-instrument market (~$10–50M/yr) that matters far more than its size suggests, because it is the R&D bench and the training-data source for the production wave. The second is a potential tens-of-millions-of-units component market if general-purpose humanoids ship, with razor-blade fingertip economics. One open question prices both: what fraction of deployed humanoid tasks actually needs more than a pinch? If the answer is "most," hands become the strategic component of the era. If it's "few," humanoids ship with two-finger grippers and the premium collapses.

## Further reading

[Shadow Dexterous Hand Series (Shadow Robot)](https://shadowrobot.com/dexterous-hand-series/) · [Learning Dexterous In-Hand Manipulation (arXiv)](https://arxiv.org/abs/1808.00177)
