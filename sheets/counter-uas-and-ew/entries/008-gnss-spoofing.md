---
number: 8
name: GNSS spoofing
part: 2
group: Navigation attack
threats: [g12, g35, cm]
effectiveness: fair
collateral: high
exchange: best
cost: vlow
---

## Description
Spoofing transmits counterfeit satellite signals that a receiver accepts as genuine, so it reports a confident but wrong position. Done well, it takes over the receiver gradually — matching the real signal, then slowly walking the solution away — so no alarm triggers. Against a drone the effect can be to make it believe it has drifted, causing it to correct in the wrong direction, or to convince it that it is somewhere it must not fly, triggering an automatic landing. Software-defined radios have made spoofing accessible for a few thousand dollars.

## Strengths and weaknesses
Spoofing is more elegant than jamming: it can move a drone rather than merely denying it navigation, and it does not create an obvious interference signature. It works against a wide range of unprotected receivers at once. The weaknesses are that it is harder to execute reliably than jamming, that authenticated military signals resist it, and that the collateral effects are worse than jamming's — a spoofed civil aircraft or ship reports a wrong position rather than no position, which is more dangerous. Its use near shipping and airports has caused documented safety incidents.

## When to use
Spoofing is primarily a state capability used for area denial around sensitive sites, and it has been observed protecting airfields and government facilities in several countries. Consider it where you want drones diverted rather than dropped, and where the affected area does not include civil traffic that would be endangered. For most tactical counter-drone work, jamming is simpler and achieves an adequate effect. For civil sites, spoofing carries legal exposure well beyond jamming and is not a practical option.

## Limits and failure modes
Authenticated signals — GPS M-code, Galileo's OSNMA and PRS — defeat it, and civil authentication is now rolling out. Receivers with inertial coupling detect implausible position jumps and reject them. Multi-constellation receivers are harder to spoof consistently. The safety consequences for civil aviation and shipping in the affected area are severe and have prompted international complaints, which constrains where it can responsibly be used.

## Examples
Widely reported spoofing around Moscow and other Russian sites causing drones and civil receivers to report airport locations, extensive spoofing observed in the eastern Mediterranean and the Black Sea affecting commercial shipping and airliners, and academic demonstrations including the 2013 capture of a yacht's navigation by University of Texas researchers.

## Economic profile
Software-defined radio has put spoofing capability within reach of anyone with a few thousand dollars and the relevant expertise, which is a substantial proliferation change. The defensive response — signal authentication in civil GNSS, and inertial coupling in receivers — is progressing but slowly, and most fielded receivers remain vulnerable. The economics strongly favor the attacker for now.

## Further reading

[Air operations (European Union Aviation Safety Agency)](https://www.easa.europa.eu/en/domains/air-operations)
