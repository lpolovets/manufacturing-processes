---
number: 9
name: Protocol takeover and cyber
part: 2
group: Link attack
threats: [g12]
effectiveness: fair
collateral: low
exchange: best
cost: low
---

## Description
Protocol takeover exploits weaknesses in a drone's specific control protocol to send commands the aircraft accepts as legitimate — landing it, returning it to a chosen point, or taking control outright. This differs from jamming in that the drone is captured rather than merely disconnected, which preserves it for forensic examination and avoids debris. It depends entirely on knowing the protocol, so systems in this category ship with a library of supported models and are useless against anything not in that library.

## Strengths and weaknesses
Landing a drone intact is the best possible outcome for law enforcement and site security: no debris, no collateral damage, and the aircraft's flight logs identify the operator's launch point. It is precise, affecting only the targeted model rather than everything in the band. The weaknesses are coverage and durability. It works only against known protocols, manufacturers patch vulnerabilities, and custom or military drones are out of scope entirely. Maintaining the exploit library is an ongoing effort with an adversarial vendor on the other side.

## When to use
Use protocol takeover for civil site protection — airports, prisons, stadiums, critical infrastructure — where the drones are overwhelmingly commercial models and where a controlled landing is far preferable to any kinetic effect. In a military context against purpose-built or improvised drones it will rarely apply. Check the supported-model list against the actual threat before buying, and treat library currency as a subscription cost rather than a one-time purchase.

## Limits and failure modes
Unsupported models are unaffected, which in a military context is most of them. Firmware updates from manufacturers close the vulnerabilities used, so effectiveness decays without continuous development. Encrypted and authenticated links, which the major manufacturers have moved toward, defeat the approach. Legal authority to take control of an aircraft is restricted in most countries even for government users.

## Examples
D-Fend Solutions EnforceAir, which is the best-known system of this type and is used at airports and by protective services, elements of several integrated counter-UAS suites, and research demonstrations against consumer drone protocols.

## Economic profile
This is a niche with a strong civil market, because it is the only defeat mechanism acceptable in most populated environments. Systems cost $200k–1M and are sold with continuing library updates. The business is structurally similar to antivirus software: value depends on keeping pace with an adversary that updates, and the moat is the research pipeline rather than the hardware.

## Further reading

[Department of Defense Counter-Unmanned Aircraft Systems (Congressional Research Service)](https://www.everycrsreport.com/reports/IF11426.html) · [Counter-Unmanned Aircraft Systems (US Department of Homeland Security)](https://www.dhs.gov/science-and-technology/counter-unmanned-aircraft-systems-c-uas)
