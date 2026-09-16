# 04 — Content Standards

Voice, honesty, and case-law discipline. This file is what keeps two hundred provisions written across forty sessions sounding like one author.

Adapted from the BNSS project's `reference/04-content-standards.md`. The voice rules and the five intellectual-honesty rules are unchanged — they are statute-agnostic. The citation-discipline section is rewritten for the Indian Evidence Act → BSA transition specifically, and the invented cast is rebuilt around evidence-law roles rather than criminal-procedure roles.

---

## Voice

**Write as a senior practitioner explaining something to a capable junior**, not as a textbook and not as a blog.

Concretely:

- **Declarative sentences.** "Miss the certificate and the printout is not evidence at all." Not "it may be observed that the absence of the requisite certificate could potentially prove fatal to admissibility."
- **Short sentences carry the load.** Long ones are allowed when the thought is genuinely long, but a paragraph of only long sentences means you have not decided what matters.
- **Second person for the practitioner, third person for the parties.** "You cannot tender a photocopy and call it primary evidence." "Anita produced a printout of the ledger."
- **Name the mechanism, not the vibe.** "The certificate requirement is a condition precedent to admissibility, not a rule going to weight" beats "the certificate requirement is quite strict."
- **No hedging filler.** Cut "it is important to note", "it may be argued", "generally speaking", "in essence". If a proposition is genuinely uncertain, say what is uncertain and why — that is different from hedging.
- **No exclamation marks. No rhetorical questions except as the closing line of an instinct scenario.**
- **Indian English and Indian legal register.** ₹ for rupees. "Adhiniyam" where the statute uses it. "Learned trial court". Dates as `1 July 2024`.

**Bold is for structural leads and operative words**, not for emphasis-by-shouting. A paragraph opening with a bolded lead phrase is navigable by scanning; a paragraph with six bolded words in the middle is not.

---

## Intellectual honesty

This is the standard that distinguishes the site from every other Evidence Act resource, and it is easy to quietly abandon under time pressure.

**1. Some scenarios must end with the sympathetic party losing.**

If every instinct block ends with the reader's intuition vindicated, the site teaches nothing about litigation. Write scenarios where a party has a document that is plainly authentic and still loses because the mode of proof was wrong — and then explain why the law is built that way. A reader who understands *why* a technically-correct party loses understands the provision; a reader who only collects wins does not.

**2. Steelman the opponent before answering him.**

When a judgment is routinely misquoted, concede that the opponent is quoting it **accurately** and attack the *use*, not the quotation. "Opposing counsel is reading *Anvar P.V.* correctly for the proposition that a s. 65B(4)-equivalent certificate is mandatory. What he is not reading is the paragraph in *Arjun Panditrao* that qualifies who must produce it and when." This is more useful and more honest than pretending the opposing citation is bad.

**3. Name the limits of your own best authority.**

Every promoted winning ratio gets its limits written into the block. A reader who is ambushed in court by the obvious counter to the proposition you handed him has been failed by the site.

**4. Where the law is genuinely unsettled, say so.**

"There is no Supreme Court decision squarely on this yet; the High Courts are divided, and the argument on each side is as follows." Do not manufacture certainty. Do not paper over a split with "courts have held".

**5. Distinguish admissibility from weight, everywhere.**

A point about **admissibility** disposes of whether the court may look at a piece of evidence at all, is frequently a matter of law rather than fact, and — for objections going to the *mode* of proof — must usually be raised at the time the evidence is tendered or it is waived. A point about **weight** is what the admitted evidence is actually worth, and is fact-sensitive, argued at the end of trial, and can go either way. Readers conflate them constantly, most often by treating a weight argument as though it could exclude the evidence outright. Every time both are in play, separate them explicitly. This is the evidence-law analogue of BNSS's power/discretion distinction, and it earns the same discipline.

---

## Case-law discipline

**The rule: never invent a citation.** Not the case name, not the year, not the SCC volume, not the bench strength.

This is not a style preference. A reader will copy a citation from this site into a written submission. A hallucinated citation put before a court is professional damage to the reader and reputational damage to the project.

**The operating procedure:**

1. Cite only judgments you are **certain** exist, with a citation you are **certain** of.
2. If you are confident of the proposition but not the citation, **state the proposition and describe the case without a citation**, and add:

   ```markdown
   ::: info Verify before citing
   The citations in this block are given from memory and must be checked against
   SCC Online or the Supreme Court's own reports before being placed before a court.
   :::
   ```

3. If you are not certain the case exists at all, **do not mention it**. Write the proposition on principle instead. A well-reasoned unattributed proposition is worth more than a confident fake.
4. Prefer very well-known judgments. The best-known cases are the ones you are least likely to be wrong about, and they are also the ones a court will accept without argument.
5. Never state a bench strength you are not sure of. "Constitution Bench" is a specific claim.

**Each case entry contains:** name in bold, citation, bench strength, one line of facts, the **ratio** as an operative test, and how it is actually used.

**Do not front-load a block with a case.** The reasoning comes first and the case supports it. A page that reads as a citation list is the academic reference manual this project exists to replace.

---

## The BSA-specific citation problem

**Almost every authority you will cite is Indian Evidence Act, 1872-era.** This is not a defect to be hidden; it is the central fact about the subject right now, and handling it well is the site's competitive advantage — the Evidence Act ran unbroken for 152 years, so the body of authority behind it is enormous, deeply settled in places, and in one area (electronic evidence) still actively unsettled at the moment BSA took over.

**Rules:**

1. **Always give the judgment's own statutory frame.** *Anvar P.V. v. P.K. Basheer* is about **Indian Evidence Act s. 65B**. Say so, then give the BSA successor. Never silently rewrite a judgment as though it had been decided under the Adhiniyam.

2. **State the survival position explicitly.** Use the delta bucket from `01-cognitive-schema.md`:
   - *Renumbered only* → "the reasoning applies unchanged to BSA s. X."
   - *Renumbered with drafting changes* → "the reasoning applies; the words it construed now read as follows."
   - *Substantively amended* → "the reasoning survives only to the extent it does not depend on the changed words. It construed the requirement of Y, which the Adhiniyam has replaced with Z. To that extent it no longer runs."
   - *New provision* → "there is no direct authority. The nearest analogy is …, and it is only an analogy."

3. **Never write that a judgment has been "overruled by the BSA."** A statute does not overrule a judgment; it can remove the text the judgment construed. The honest form is: *"the reasoning turned on the words 'X', which no longer appear. Whether it survives on the new text is open."*

4. **The electronic-evidence line of cases needs special care.** *State (NCT of Delhi) v. Navjot Sandhu*, *Anvar P.V. v. P.K. Basheer*, and *Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal* form a single evolving line under the old Act's s. 65B, with *Arjun Panditrao* being the most recent and most authoritative word on the certificate requirement. Wherever BSA s. 63 is discussed, this line is the backbone of the concordance stage — do not treat any one of the three as freestanding without situating it against the other two.

5. **Do not assume a High Court has already ruled on a BSA provision.** The statute is recent. If you do not know of a decision, say there appears to be none, rather than inventing one.

6. **Where a settled Evidence Act practice is displaced by a new BSA category, presumption, or certificate mechanism**, that is the single most valuable paragraph on the page. Give it its own bolded lead in `#### Strategy and drafting` — a practitioner running on muscle memory is exactly who will miss it.

---

## The invented cast

Reuse the same names across the whole site. Recurring characters make scenarios instantly parseable and stop every block opening with "A, B and C". Evidence law cuts across both civil and criminal proceedings, so the cast is written to work in either register — keep the role generic ("the party tendering the document") in the surrounding prose even while the named character sits in a specific role for a given scenario.

| Name | Role |
|---|---|
| **Anita** | party tendering evidence — plaintiff, complainant, or prosecution witness, depending on the scenario |
| **Bharat** | party objecting to evidence — defendant or accused |
| **Chetan** | third party — the scribe, the forensic examiner, the bank official, the person in whose custody a document or device sat |
| **Deepa / Deepak** | co-party, or the second-round litigant on appeal or revision |
| **Advocate Farhan** | counsel, used where the scenario turns on a drafting or objection-timing choice rather than on the underlying facts |
| **Judge Gokhale** | the trial court |

Every `::: story` container is labelled "Worked example · invented facts" by the renderer, so the reader is never at risk of taking a scenario for a reported case. Keep it that way: **never give an invented scenario a citation**, and never name an invented party after a real litigant.

Scenarios need **dates, amounts and the specific artefact in issue**. "Anita produced a document and Bharat objected to it" is not answerable. "On 14 February, Anita tendered a WhatsApp chat export as a PDF, printed from her own phone, with no certificate" is.

---

## Formatting conventions

- **Tables** for anything with a repeating shape — statutory mechanics, deltas, limitation, interlocks, sword/shield. Three or four columns maximum; wider tables are unreadable on a phone.
- **Numbered lists** only where order or count matters — cumulative conditions, grounds in an objection or application, steps in a procedure. Readers copy numbered grounds directly, so number them the way they should appear in a petition or objection memo.
- **Bulleted lists sparingly.** Bullets fragment reasoning. Stage 3b (`In plain English`) in particular must be prose with bolded leads, not a bullet farm.
- **Blockquotes are for statutory text only.** Never for emphasis, never for a case extract. If a reader sees a blockquote, it must be the Act.
- **Headings are fixed by the schema.** Do not invent new `###` levels. Sub-structure inside a stage uses bolded leads.

---

## Length

A single well-litigated section runs 400–600 lines. A cluster of two or three related sections runs 500–800 — BSA's evidence clusters (primary/secondary evidence, the electronic-records trio of ss. 61–63, the presumption clusters) tend to interlock tightly enough that clustering will be the norm rather than the exception in several chapters. A chapter file with several provisions plus a consolidation runs 2,500–3,500 lines, reflecting that some BSA chapters (Chapter II, Relevancy of Facts, running ss. 3–50) are considerably longer than a typical BNSS or CPC chapter and may need to be split across more than one file — see the file-naming guidance in `05-bsa-roadmap.md`.

**Do not pad to reach these numbers, and do not truncate a stage to stay under them.** They are calibration, not targets. The real test is the seven-question checklist at the end of `01-cognitive-schema.md`.

The one place to resist compression is `#### Strategy and drafting`. It is the last block on the page and therefore the first casualty of fatigue — and it is the block practitioners actually use.
