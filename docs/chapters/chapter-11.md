# Chapter XI-XII — Improper admission and rejection of evidence, and repeal and savings (ss. 169-170)

These final two chapters close the Act. Chapter XI's single section is a harmless-error safeguard that protects a correct result from being undone by a technical evidentiary misstep. Chapter XII's single section is the Act's own hinge: it repeals the Indian Evidence Act, 1872 outright, but freezes that repeal for every matter already pending the moment before this Act commenced — the single most practically important transitional rule in the entire statute, and the one every litigator needed to get right from 1 July 2024 onward.

## Section 169 — the harmless-error rule for evidentiary admission and rejection

### The dispute this solves

::: oneminute
A trial court admits evidence it should have excluded, or excludes evidence it should have admitted. The losing party seizes on that single ruling to demand an entirely fresh trial or a reversal on appeal — even where the ruling made no real difference to the outcome. Section 169 is the Act's answer: improper admission or rejection of evidence is not, by itself, ground for a new trial or reversal, if the reviewing Court can see either that there was sufficient evidence independent of the wrongly admitted material to justify the decision, or that the wrongly rejected evidence, had it been received, ought not to have varied the decision. The rule protects correct results from being undone by errors that did not actually matter — while leaving genuinely outcome-determinative errors fully correctable.
:::

::: story
This section does not say the improper ruling was actually proper — it was still an error. What section 169 does is separate the question "was there an error?" from the question "did the error matter?" A new trial or reversal is reserved for the second question, not triggered automatically by the first. A litigant hunting for a technical evidentiary slip to overturn an otherwise well-supported decision will find this section standing squarely in the way.
:::

### The Act, decompiled

> **169.** The improper admission or rejection of evidence shall not be ground of itself for a new trial or reversal of any decision in any case, if it shall appear to the Court before which such objection is raised that, [[!independently of the evidence objected to and admitted, there was sufficient evidence to justify the decision]], or that, if the rejected evidence had been received, [[?it ought not to have varied the decision]].

| Text | What it does | Why it matters |
|---|---|---|
| "shall not be ground of itself" | Confirms the error alone is insufficient — something more (actual effect on the outcome) is required | Stops a pure technical-error appeal from succeeding without any showing of real prejudice |
| The independent-sufficiency limb (improper admission) | Lets the reviewing Court set the improperly admitted evidence aside mentally and ask whether the remaining evidence alone would justify the decision | The test is retrospective and evidence-specific — it asks what the record independently supports, not what the trial court subjectively relied on |
| The would-not-have-varied limb (improper rejection) | Lets the reviewing Court ask whether receiving the wrongly excluded evidence would actually have changed the result | A rejected-evidence error is harmless only if its likely effect, once considered, would not have moved the needle |

::: proviso Section 169 protects the result, not the error itself
Nothing in this section retroactively makes an improper ruling proper. A trial court that wrongly admitted or excluded evidence still made a mistake, and that mistake remains open to correction wherever it actually affected the outcome. Section 169 only closes the door on using a harmless mistake as a free-standing ground for reopening an otherwise sound decision — it is a doctrine of consequence, not a doctrine of forgiveness.
:::

### How this actually runs

<MicroTree
  input="A party seeks a new trial or reversal on the ground that evidence was improperly admitted or improperly rejected at trial"
  :gates="[
    { q: 'Was the complaint that evidence was improperly admitted?', yes: 'ask whether, independently of that evidence, there was sufficient evidence on the record to justify the decision' },
    { q: 'Is there sufficient independent evidence justifying the decision?', yes: 'the improper admission alone is not ground for a new trial or reversal' },
    { q: 'Was the complaint instead that evidence was improperly rejected?', yes: 'ask whether receiving that evidence, had it been admitted, ought to have varied the decision' },
    { q: 'Would receiving the rejected evidence have varied the decision?', no: 'the improper rejection alone is not ground for a new trial or reversal' }
  ]"
  result="a new trial or reversal is granted only where the specific evidentiary error was actually outcome-determinative, not merely technically improper"
  caveat="the error itself is never excused — only its consequence for the ultimate result is what section 169 actually screens for"
  resultKind="mixed"
/>

### In plain English

**Section 169 is a harmless-error rule, plain and simple.** An evidentiary mistake — wrongly letting something in, or wrongly keeping something out — is not, by itself, enough to unravel a decision. What matters is whether the record, stripped of the wrongly admitted evidence, still supports the outcome, or whether the wrongly excluded evidence would genuinely have changed the result if it had been let in. A losing party cannot win a new trial merely by finding an error; they must show the error actually mattered.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping stated here — Indian Evidence Act, 1872, s. 167 (no new trial for improper admission or rejection of evidence) to BSA s. 169 — is the reported correspondence. No verified local Indian Evidence Act source text exists in `reference/` to check the old section's exact wording against the new one; treat the mapping as a flagged hypothesis until such a source is added.
:::

| Indian Evidence Act (reported) | BSA | What appears to have changed |
|---|---|---|
| S. 167 | S. 169 | Renumbered only, on the reported mapping; the substance appears unchanged |

This is one of the oldest and most settled doctrines in the entire Evidence Act tradition — the harmless-error principle for evidentiary rulings predates most of the rest of the statute's modern reworking, and nothing in this section's text suggests any substantive change beyond the number itself.

### Test your instinct

::::instinct Scenario 1 — the improperly admitted statement that didn't matter
At trial, the Court improperly admits a hearsay-adjacent statement over objection. On appeal, the record shows overwhelming independent evidence — eyewitness testimony, forensic evidence, and an undisputed confession — that alone fully supports the conviction. Should the improper admission alone justify a new trial?
:::ruling
No. Section 169 is squarely on point: since there was sufficient evidence, independent of the improperly admitted statement, to justify the decision, the improper admission alone is not ground for a new trial or reversal. The error occurred, but it did not matter to the outcome, and that is the precise question section 169 asks.
:::
::::

::::instinct Scenario 2 — the wrongly rejected document that would not have changed anything
A party's document is wrongly rejected at trial. On appeal, it becomes clear that even if the document had been admitted, it would only have corroborated a minor, undisputed point and could not plausibly have altered the outcome given the weight of the remaining evidence. The party, genuinely wronged by the erroneous rejection, argues for a new trial. Should the appeal succeed on this ground?
:::ruling
No — and this is a case where being genuinely wronged by an error is not enough. Section 169's second limb asks whether the rejected evidence, if received, ought to have varied the decision. Since it would not have, on the facts described, the improper rejection alone cannot justify a new trial, however real the underlying evidentiary mistake was. The party's remedy, if any, lies elsewhere — not in reopening a decision the missing document would not have changed.
:::
::::

::::instinct Scenario 3 — the improperly admitted evidence that was the whole case
At trial, the Court improperly admits a key piece of evidence, and without it, the remaining evidence on the record is genuinely insufficient to support the decision reached. Should a new trial or reversal follow?
:::ruling
Yes. Section 169's protection only applies where the record, independent of the improperly admitted evidence, is itself sufficient to justify the decision. Where it is not — where the improperly admitted evidence was actually doing the work of proving the case — the error is not harmless, and section 169 provides no shelter for it.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
No single authority is promoted here. The harmless-error doctrine embodied in section 169 is one of the oldest and most consistently applied principles in the Evidence Act tradition, worked out here directly from the section's own precise two-limb text; no specific leading judgment is held with the certainty this project's citation rule requires, though the doctrine itself is amply developed in settled appellate practice that a practitioner should research directly for the current matter.

#### Sword and shield
| | As a sword (resisting an appeal based on an evidentiary error) | As a shield (pressing an appeal based on one) |
|---|---|---|
| S. 169 | Marshal the independent evidence on the record affirmatively, showing the decision stands without the challenged evidence at all | Show precisely why the excluded evidence, or the absence of the wrongly admitted evidence, would actually have changed the outcome — a bare assertion of error is not enough |

#### The limitation clock
None of its own. Section 169 operates within whatever appellate or revisional timeline otherwise governs the challenge to the decision; it creates no independent limitation period.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 169 | The appellate and revisional framework under the Bharatiya Nagarik Suraksha Sanhita, 2023 | Section 169 is invoked as a substantive evidentiary defence within whatever appeal or revision the BNSS's own procedural provisions make available |

#### The authorities
No further authority beyond what is stated above is confidently recalled for this cluster with the certainty this project's citation rule requires.

#### Strategy and drafting
When defending a decision against an evidentiary-error appeal, lead with the independent sufficiency of the remaining record — do not simply argue the ruling was correct, argue in the alternative that even if it was wrong, it did not matter. When prosecuting such an appeal, resist the temptation to stop at identifying the error; build the affirmative case for why the error was outcome-determinative, since section 169 makes that showing the entire battle.

## Section 170 — repeal of the Indian Evidence Act, and the savings clause for pending matters

### The dispute this solves

::: oneminute
Every new evidence code must answer one transitional question precisely: what happens to matters already underway when the old law is repealed? Section 170 answers it in two parts. Subsection (1) repeals the Indian Evidence Act, 1872 outright. Subsection (2) then freezes that repeal for a defined category: any application, trial, inquiry, investigation, proceeding, or appeal that was pending immediately before this Act's commencement continues to be governed entirely by the Indian Evidence Act, 1872, as it stood immediately before that commencement — as if this Act had never come into force. The line drawn is a hard one: pendency is measured at a single moment, and which side of that moment a matter falls on determines which Act governs it for the whole of its remaining life.
:::

::: story
Section 170(2) does not merely preserve old evidence already led under the old Act — it preserves the entire governing framework for the whole remaining life of a pending matter, including stages that occur well after this Act's commencement. A trial that was already underway keeps running entirely under the 1872 Act's rules, from its next witness to its final appeal, never switching horses mid-stream merely because a new Act happened to commence in the interim. The practical stakes could not be higher: get the pendency question wrong, and a practitioner may cite the wrong Act's numbering, and possibly the wrong Act's substance, for an entire proceeding.
:::

### The Act, decompiled

> **170.** (1) The [[!Indian Evidence Act, 1872 is hereby repealed]].
>
> (2) Notwithstanding such repeal, if, immediately before the date on which this Adhiniyam comes into force, there is any [[!application, trial, inquiry, investigation, proceeding or appeal pending]], then, such application, trial, inquiry, investigation, proceeding or appeal shall be [[!dealt with under the provisions of the Indian Evidence Act, 1872, as in force immediately before such commencement, as if this Adhiniyam had not come into force]].

| Text | What it does | Why it matters |
|---|---|---|
| S. 170(1) | Repeals the Indian Evidence Act, 1872 in its entirety | A clean, unqualified repeal — nothing of the 1872 Act survives except through subsection (2)'s savings clause |
| S. 170(2)'s "immediately before" | Fixes a single, precise moment for measuring pendency | No gradual transition — a matter either was pending at that moment or it was not |
| S. 170(2)'s exhaustive list (application, trial, inquiry, investigation, proceeding, appeal) | Covers every stage and form a legal matter might take, not just trials narrowly | Ensures the savings clause cannot be defeated by arguing a matter was some other, uncovered species of proceeding |
| S. 170(2)'s "as if this Adhiniyam had not come into force" | Makes the old Act govern the pending matter completely, not merely as to evidence already led | The pending matter's entire remaining course — not just its past stages — proceeds under the old Act |

::: proviso Section 170(2) is a bright-line pendency test, not a facts-arose-under-the-old-Act test
The trigger is whether an application, trial, inquiry, investigation, proceeding, or appeal was pending immediately before commencement — not when the underlying facts occurred. A matter concerning events from years before commencement, but instituted only after this Act came into force, is governed by this Act, not the 1872 Act, because it was not itself pending at the relevant moment. Conversely, a matter validly pending before commencement continues under the old Act even though later stages occur well after the new Act is in force. Institution timing, not fact timing, is what section 170(2) actually asks about.
:::

### How this actually runs

<MicroTree
  input="A question arises as to whether the Indian Evidence Act, 1872 or this Act governs a particular legal matter"
  :gates="[
    { q: 'Was an application, trial, inquiry, investigation, proceeding, or appeal already pending immediately before this Act’s commencement?', yes: 'section 170(2) preserves the Indian Evidence Act, 1872, as it stood immediately before commencement, for that entire matter, as if this Act had never come into force' },
    { q: 'Was the matter instead only instituted on or after this Act’s commencement, regardless of when the underlying facts occurred?', yes: 'this Act governs, since section 170(2)’s savings clause applies only to matters actually pending at the relevant moment, not to matters concerning older facts' }
  ]"
  result="the governing Act is determined entirely by whether the specific application, trial, inquiry, investigation, proceeding, or appeal was pending immediately before commencement — not by when the underlying facts arose"
  caveat="a fresh appeal or proceeding arising from an already-concluded, pre-commencement matter raises a genuinely harder question that this section’s text does not resolve with certainty — see the note below"
  resultKind="mixed"
/>

::: proviso An open question this section's text does not fully resolve
Section 170(2) is clear where a matter was itself pending immediately before commencement. It is less clear how to treat a wholly new proceeding — such as a fresh appeal — filed only after commencement, but arising out of a trial that was conducted, and concluded, entirely under the old Act before commencement. The section's literal words ask only whether that specific appeal was "pending" at the relevant moment, which a not-yet-filed appeal was not. Whether courts read the savings clause to extend by necessary implication to such a downstream proceeding, so that the whole matter continues under one consistent regime, is a genuine interpretive question this page does not resolve with confidence — practitioners facing this fact pattern should research the point specifically rather than assume either answer.
:::

### In plain English

**Section 170 is the hinge the entire Act turns on.** It repeals the old law completely, but for anyone already inside the system — a pending application, trial, inquiry, investigation, proceeding, or appeal — nothing changes. That matter rides out its entire remaining course under the old Act, untouched by the new one. The test is not when the facts happened; it is whether the matter itself was already pending the moment before the new Act took effect. Get that timing question right, and everything else about which Act's numbering, procedure, and substance applies to a given matter follows automatically.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping here is necessarily one-directional — section 170 is entirely new; it has no equivalent within the 1872 Act itself, since that Act is the one being repealed, not one containing its own forward-looking transitional provision to this Act. No further concordance mapping applies to this section.
:::

This is, by definition, the one section in the entire Act with nothing to map against the old numbering — it is the provision that ends the old numbering's operative life for every matter not saved by its own subsection (2).

### Test your instinct

::::instinct Scenario 4 — the trial already underway on commencement day
A criminal trial began, and several witnesses had already been examined, before this Act's commencement date. The trial concludes months after commencement. Which Act governs the evidence led in the remaining hearings — the Indian Evidence Act, 1872, or this Act?
:::ruling
The Indian Evidence Act, 1872, for the whole trial. Section 170(2) preserves the old Act for any trial pending immediately before commencement, and applies to the entire matter "as if this Adhiniyam had not come into force" — not merely to the evidence already led before commencement. The trial does not switch evidentiary regimes partway through merely because the new Act came into force while it was underway; it runs its full course under the 1872 Act.
:::
::::

::::instinct Scenario 5 — the new complaint about old conduct
A complaint is filed, and a proceeding instituted, only after this Act's commencement date, alleging conduct that occurred well before that date. The accused argues the Indian Evidence Act, 1872 should govern, since the underlying facts predate this Act. Is the accused right?
:::ruling
No. Section 170(2)'s savings clause turns on whether the application, trial, inquiry, investigation, proceeding, or appeal was itself pending immediately before commencement — not on when the underlying facts occurred. Since this proceeding was instituted only after commencement, it was not pending at the relevant moment, and this Act governs it in full, regardless of how old the underlying conduct is.
:::
::::

::::instinct Scenario 6 — the fresh appeal from an old-Act trial
A trial concluded, and judgment was pronounced, entirely under the Indian Evidence Act, 1872, before this Act's commencement. The losing party files an appeal only after commencement. Does the appeal itself proceed under the old Act or this Act?
:::ruling
This is genuinely uncertain on the section's text alone, and is flagged above as an open question. Read literally, section 170(2) saves the old Act only for a matter that was itself "pending" immediately before commencement — and an appeal not yet filed at that moment was not pending. That literal reading would point toward this Act governing the appeal, even though the trial below ran entirely under the old Act. Whether the savings clause should instead be read, by necessary implication, to keep the whole matter — trial and appeal together — under one consistent regime is a real interpretive question this page does not resolve with confidence. A practitioner in this exact position should research the specific point rather than assume either answer, and should not be surprised if the two levels of a single matter end up governed by two different evidentiary regimes unless a court holds otherwise.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
No single authority is promoted here. Section 170 is a legislative transitional provision without an equivalent predecessor to compare it against, and the one genuinely open interpretive question it raises — the fresh-appeal-from-an-old-trial scenario — is precisely the kind of point where an invented citation would be professional damage; it should be researched directly against current authority rather than answered from this page with false confidence.

#### Sword and shield
| | As a sword (arguing this Act should apply) | As a shield (arguing the old Act should apply) |
|---|---|---|
| S. 170(2) | Show the specific application, trial, inquiry, investigation, proceeding, or appeal was not itself pending immediately before commencement | Show the specific matter was already pending immediately before commencement, and press that its entire remaining course — not just its already-completed stages — continues under the old Act |

#### The limitation clock
This is the one provision in the whole Act where the limitation clock is not thin — it is the entire point. The single operative date is this Act's own commencement date (widely reported as 1 July 2024, but confirm the exact notified commencement date for the specific state or matter before relying on it), and pendency is measured at the instant immediately before that date. Every subsequent procedural deadline in a given matter flows from correctly answering this one threshold, one-time question.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 170 | Bharatiya Nagarik Suraksha Sanhita, 2023, and Bharatiya Nyaya Sanhita, 2023, each carrying their own repeal-and-savings provisions for the Code of Criminal Procedure, 1973 and the Indian Penal Code, 1860 respectively | All three 2023 codes share the same commencement transition line, and a matter's evidentiary regime, procedural code, and substantive offence definitions typically need to be checked together against the same pendency question, not evidence-law alone |

#### The authorities
No confidently recalled leading authority is promoted for this cluster with the certainty this project's citation rule requires; the transitional questions this section raises are actively being litigated and should be researched against current authority for any live matter.

#### Strategy and drafting
The single most important practical habit this section demands: at the very first stage of any new matter, before drafting a single pleading or making a single evidentiary argument, determine precisely whether the specific application, trial, inquiry, investigation, proceeding, or appeal was pending immediately before this Act's commencement. Get that one fact right, and the correct Act's numbering and substance follows automatically for the rest of the matter. Get it wrong, and every citation that follows may be to the wrong Act entirely. Where a matter presents the genuinely unresolved fresh-appeal-from-an-old-trial scenario, flag the issue explicitly for the Court at the earliest opportunity rather than silently assuming an answer either way.

## Chapters XI-XII consolidation — did the error matter, and which Act actually governs?

1. **Was the evidentiary ruling under challenge actually outcome-determinative, or merely technically improper?** Section 169 protects only against the former mattering in the appeal — the latter, standing alone, changes nothing.
2. **Was the specific application, trial, inquiry, investigation, proceeding, or appeal actually pending immediately before this Act's commencement?** This single question, asked and answered correctly at the outset, determines which Act's entire framework governs the matter.
3. **Does the matter present the genuinely unresolved fresh-appeal-from-an-old-trial question?** If so, flag it explicitly rather than assuming either regime applies by default.

This closes Chapters XI and XII (ss. 169-170) and Phase 9 of the roadmap — and with it, every substantive chapter of the Bharatiya Sakshya Adhiniyam, 2023 (Chapters I through XII, ss. 1-170) now has a corresponding page in this guide. Phase 10 — the drafting toolkit — and the continuous Indian Evidence Act → BSA concordance page are next.
