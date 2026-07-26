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
Resolvers are wound transformers whose coupling varies with shaft angle. There are no electronics, optics, or semiconductors at the sensing point, so they survive temperatures, radiation, and vibration that would kill an encoder. Modern inductive (eddy-current) encoders print the same physics onto PCBs, which gives you resolver robustness at encoder convenience and cost. They are quietly taking over EV traction motors and harsh-duty robotics.

## Strengths and weaknesses
The sensing element is close to indestructible; resolvers fly in engines, reactors, and space. They're absolute within a revolution and immune to the contamination that blinds optical discs, and the inductive versions are thin, hollow-shaft, and cheap. The weaknesses: resolvers need excitation and demodulation electronics (the R/D converter is the real cost) and their accuracy is modest, classic resolvers are heavy copper, and inductive encoders come from a small set of patent-holding vendors. Accuracy trails precision optical by about an order of magnitude.

## When to use
Pick resolvers when the environment kills electronics at the sensing point: traction motors, engine and reactor mechanisms, aerospace actuators, or anywhere temperature, radiation, or vibration exceed encoder ratings. Pick inductive encoders for the growing middle ground of thin hollow-shaft joints, gimbals, and motor housings full of magnetic interference where magnetic chips misbehave. That's why they're becoming the default output-side encoder in humanoid joints. If accuracy is the whole point, use precision optical instead (it's about an order of magnitude better), and if a $5 magnetic chip in a benign environment does the job, use that; otherwise you're paying for robustness you don't need.

## Failure modes
The sensor rarely dies; the wiring does. In the field, most failures are excitation shorts, connector corrosion, and cable EMI. R/D converter faults show up as position noise. Inductive types err near large conductive masses and with target-gap runout. Temperature drift in the electronics, not the sensor, sets practical accuracy. Miswired phasing yields angles that are wrong but plausible enough to pass a casual check.

## Examples
Resolvers in EV traction motors (billions of km proven), aerospace actuators and reactor mechanisms; inductive: Renishaw's induction lines, Zettlex/Celera IncOders in robot joints and gimbals, integrated inductive chips (Microchip, TI) spreading into cobots and humanoid joints.

## Economic profile
Resolvers are a stable legacy market. The growth is in PCB-based inductive encoding, where EV volume is driving chipset costs toward magnetic-encoder levels while giving better immunity to the magnetic interference inside motor housings. For humanoid joints packed with magnets, that immunity is turning inductive into the default output-side encoder, so the chipset vendors are the ones to watch.

## Further reading

[Resolvers: What They Are and How They Work (Dynapar)](https://www.dynapar.com/technology/encoder_basics/resolvers/) · [IncOder Inductive Ring Encoders (Novanta / Celera Motion)](https://novanta.com/robotics-automation/inductive-ring-encoders/)
