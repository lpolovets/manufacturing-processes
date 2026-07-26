# Writing style guide

All text in this repo — entry markdown sections, `guide.html`, `h2h.html` cells, `sheet.json` blurbs and ledes — should read like Leo Polovets's writing (codingvc.com), not like default AI writing. This file defines what that means concretely. When writing or revising, follow these rules; when in doubt, pick the plainer option.

> **Canonical copy: `~/.claude/STYLE.md`**, which applies to all of Leo's published prose across projects. The voice rules below are duplicated from it so this repo stays self-contained. **Change the voice rules there first, then sync here.** The repo-specific parts — which files and sections are in scope — live in "Scope notes" at the bottom and belong only to this file.

## The voice in one paragraph

An engineer explaining something to a smart friend. Plain declarative sentences, concrete numbers, direct advice, honest hedging. Comfortable saying "usually," "roughly," and "it depends on X." Explains *why* with mechanisms and examples, not with rhetoric. Occasionally punchy, but the punch comes from a surprising fact or a blunt short sentence, never from ornate phrasing.

## Reference samples (verbatim Leo)

- "Building a deep tech company is hard. Really hard. You typically need a multidisciplinary team that's exceptional in multiple areas, and that's a very high barrier to entry."
- "Ideas that used to require 50 people, $50m, and 5 years can now be tested with 5 people, $2m, and 2 years."
- "If you're good enough to enter the space and get funded, you'll be one of 1 or 3 or 10 companies fighting for market dominance, not one out of 500."
- "Market risk kills software companies; technical risk kills hardware companies."
- "A good rule of thumb is to set a cap on net burn, like $100k/mo. If you want to spend more than $100k/mo, you'll have to make up the difference with revenue."
- "If you test too few options, you risk making a suboptimal choice. If you test too many, you waste time and lose momentum."
- "You can't cut your way to success. You can extend your runway and be more efficient, but ultimately you have to create something that customers want and will pay for."

Notice what these have in common: subject-verb-object sentences, real numbers, if/then advice, emphasis via repetition or brevity, zero decorative metaphor.

## Do

- **Plain sentences.** Subject, verb, object. One idea per sentence. Vary length: mostly medium sentences, with an occasional very short one for emphasis ("Hardware is different.").
- **Concrete numbers over adjectives.** "Costs fell below $150/kWh in 2024" beats "costs have fallen dramatically." Ratios and ranges are good: "10x cheaper," "one of 3 or 10 companies, not one of 500."
- **Rules of thumb, stated as such.** "A good rule of thumb is..." / "Roughly speaking..." / "As a default..."
- **If/then structure for advice.** "If duration runs past 10 hours, look at flow batteries or CAES instead." When-to-use guidance should read like a decision procedure, not a poem.
- **Honest hedging.** "usually," "typically," "tends to," "in most cases." Precision about uncertainty is part of the voice — vendor claims "are usually measured under favorable conditions," not "are fiction."
- **Mechanism over assertion.** Say *why* something is true in one clause: "every added hour of Li-ion storage means buying more cells, so long duration gets linearly expensive."
- **Comparisons anchored to a familiar baseline.** Leo constantly frames things relative to the known quantity: "compared to standard Li-ion...", "unlike injection molding..."
- **Repetition for emphasis, sparingly.** "Hard. Really hard." works once per sheet, not once per entry.

## Don't

These are the AI tics currently scattered through the guides. Remove on sight:

- **Aphoristic em-dash flourishes.** "There is no best battery — only a best fit." "Wins compound, losses persist." Rewrite as plain statements: "No chemistry is best overall; the application decides which trade-offs matter."
- **Em-dash overuse generally.** Max ~1 per paragraph. Prefer commas, periods, or parentheses (Leo uses parentheses for asides).
- **Dramatic vocabulary.** "ferocious supply chain," "attacks the seam," "riding down a cost curve," "business cases ... are fiction." Use neutral words: "very strong supply chain," "targets this weakness," "costs keep falling."
- **"Not X — but Y" / "not just X, it's Y" constructions.** Almost always rewritable as a direct claim.
- **Compressed noun-stack fragments as sentences.** "88–92% round trip, millisecond response, bankable performance data." Fine inside a list; in prose, give it a subject and verb.
- **Grand summarizing kickers.** Endings that gesture at profundity ("This is why the difficulty is the opportunity") unless the claim is genuinely load-bearing and explained.
- **Elegant-variation synonyms.** Call a thing the same name every time. Don't rotate through "chemistry / technology / route / approach" for variety.

## Before/after examples (from actual entries)

**Before:** "Its weakness is structural — energy capacity and power are coupled, so every added hour means buying more cells — which is precisely the seam every LDES technology attacks."
**After:** "Its main weakness: energy and power are coupled, so every added hour of duration means buying more cells. That's the weakness that every long-duration storage technology is trying to exploit."

**Before:** "LDES business cases that don't model continued lithium decline are fiction."
**After:** "If an LDES business case doesn't model continued Li-ion price declines, it's not a credible business case."

**Before:** "a ferocious supply chain, and deployment speed no mechanical system can match — months, not years."
**After:** "an enormous supply chain, and fast deployment (months instead of the years a mechanical system takes)."

**Before:** "There is no best battery — only a best fit."
**After:** "There's no best battery chemistry. Each one is a bundle of trade-offs, and the application determines which trade-offs matter."

## Scope notes

- **This guide applies to every piece of text a reader sees**, not just paragraphs: entry sections, `## Examples`, `## Suppliers` descriptors, guide/h2h table cells, band labels, and the `lede` / `question` / `blurb` / `groupBlurbs` strings in `sheet.json`.
- **Table cells and band labels may stay compressed, but not AI-flavored.** Compression is a length budget, not a license for flourishes. A cell can drop articles and use fragments; it may not use aphorisms ("wins compound, losses persist"), dramatic vocabulary ("the silent spec killer", "kill list"), or em-dash punchlines. Prefer a plain clause: state the fact, then the consequence.
- Don't pad a short cell into a sentence just to comply. If it already reads plain, leave it.
- **Citation titles are not ours**: `## Further reading` link titles and `## Videos` titles are external publication names. Never reword them.
- Keep the technical density. The fix is tone, not dumbing down — Leo's writing is information-dense, it's just plainly worded.
- These are reference sheets, not blog posts, so first-person asides ("I recently spoke with...") mostly don't apply. Borrow the sentence-level style, not the personal-essay framing. Direct "you" address is fine and encouraged in when-to-use guidance.
