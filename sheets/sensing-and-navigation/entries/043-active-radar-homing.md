---
number: 43
name: Active radar homing
part: 7
group: Radar homing
functions: [term, track]
range: [short, med]
stealth: fair
jamming: fair
cost: high
---

## Description
An active radar homing seeker carries its own radar transmitter and receiver in the missile nose. Typically the missile flies most of the way on inertial navigation with datalink updates from the launching platform, then turns its seeker on in the last 10–20 km and completes the engagement autonomously. That mid-course-plus-terminal architecture is what makes beyond-visual-range air combat work: the launching aircraft can turn away once the missile goes active, instead of holding an illumination lock all the way to impact.

## Strengths and weaknesses
Fire-and-forget at long range is the decisive advantage, and it works in weather that stops infrared. The seeker gives range and closing velocity directly, which supports fuzing and endgame maneuvering. The weaknesses are cost, aperture, and countermeasures. A missile nose is a small antenna, so seeker detection range is limited and the mid-course phase must deliver the missile into a small acquisition basket. DRFM jamming that generates coherent false targets is effective against many seekers, and low-observable targets are hard for a small X-band aperture. The seeker also announces the terminal phase, giving the target warning to maneuver.

## When to use
Use active radar homing for beyond-visual-range air-to-air missiles, anti-ship missiles, and long-range surface-to-air systems where all-weather fire-and-forget performance is needed. If the engagement is within visual range and clear, an imaging infrared seeker is cheaper and gives no terminal warning. Against heavily jammed targets, consider a dual-mode seeker with a passive home-on-jam mode, which turns the jammer into a beacon. Getting the mid-course guidance right matters at least as much as seeker performance, since a good seeker pointed at empty sky finds nothing.

## How it is defeated
DRFM repeater jamming creates false targets and range-gate pull-off. Towed decoys present a more attractive return than the aircraft. Chaff still works against some seekers. Notching — flying perpendicular to the missile so Doppler shift falls into the clutter rejection filter — is a classic and still effective maneuver. Low observability reduces seeker acquisition range enough to break the endgame. Breaking the mid-course datalink leaves the missile searching in the wrong place.

## Examples
The AIM-120 AMRAAM, MBDA Meteor, the R-77, PL-15, the seekers on Harpoon and most modern anti-ship missiles, and the active seekers on Patriot PAC-3 and Aster interceptors.

## Economic profile
Active seekers are among the most expensive components in a missile, and the cost is dominated by the RF front end and the antenna. The important trend is AESA seekers, made viable by falling transmit-receive module prices, which give better jam resistance and multiple simultaneous functions in the same nose volume. Several countries now field or are fielding AESA seekers, and the module cost curve is what determines how far down the missile inventory that capability spreads.

## Further reading

[Defense Primer: U.S. Precision-Guided Munitions (Congressional Research Service)](https://www.everycrsreport.com/reports/IF11353.html) · [Radar Principle (Radar Tutorial)](https://www.radartutorial.eu/01.basics/Radar%20Principle.en.html)
