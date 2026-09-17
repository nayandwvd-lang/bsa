# Chapter X part I — Of Examination of Witnesses: order of production, the Judge's relevancy gate, and leading questions (ss. 140-146)

Chapter X is the Act's longest single chapter and governs everything that happens once a witness is actually in the box — from the order witnesses are called, through the vocabulary of examination-in-chief, cross-examination and re-examination, to the fine mechanics of what a lawyer may and may not ask. This first part covers the opening sequencing rules: who decides the order of witnesses, how the Judge gatekeeps relevance before evidence is even admitted, what the three phases of examination are called and in what order they run, when a mere document-producer becomes a witness, and the pivotal leading-questions rule that separates the friendly latitude of cross-examination from the tighter discipline of examination-in-chief.

## Sections 140 to 142 — order of production, the Judge's relevancy gate, and the three kinds of examination

### The dispute this solves

::: oneminute
A trial is not a free-for-all — someone has to decide which witness goes first, and someone has to decide, before the jury or judge ever hears a fact, whether that fact is even relevant enough to be worth hearing. Section 140 leaves the order of witnesses to procedural law and, failing that, to the Court's discretion. Section 141 gives the Judge an active gatekeeping role: before admitting evidence of a fact, the Judge may ask how it would be relevant if proved, and must exclude it if it would not be. And where one fact's relevance depends on another fact being proved first — a classic chicken-and-egg problem — section 141 lets the Judge sequence the proof sensibly rather than mechanically. Section 142 then supplies the vocabulary the rest of the chapter depends on: examination-in-chief, cross-examination, and re-examination.
:::

::: story
Picture a witness testifying that a person is dead, in order to introduce that dead person's own out-of-court statement as evidence. The statement is only relevant if the person really is dead — so which comes first, the statement or the proof of death? Section 141's own illustrations answer this directly: the death must be proved before the statement is introduced. But not every conditional-relevancy problem is that clean, and where two facts are genuinely intertwined, section 141(3) leaves the sequencing to the Judge's discretion rather than forcing a rigid order onto every case.
:::

### The Act, decompiled

> **140.** The order in which witnesses are produced and examined shall be [[!regulated by the law and practice for the time being relating to civil and criminal procedure respectively]], and, in the absence of any such law, by the discretion of the Court.
>
> **141.** (1) When either party proposes to give evidence of any fact, the Judge may ask the party proposing to give the evidence in what manner the alleged fact, if proved, would be relevant; and the Judge [[!shall admit the evidence if he thinks that the fact, if proved, would be relevant, and not otherwise]].
>
> (2) If the fact proposed to be proved is one of which evidence is admissible only upon proof of some other fact, such last mentioned fact must be proved before evidence is given of the fact first mentioned, unless the party [[?undertakes to give proof of such fact, and the Court is satisfied with such undertaking]].
>
> (3) If the relevancy of one alleged fact depends upon another alleged fact being first proved, the Judge may, in his discretion, either [[?permit evidence of the first fact to be given before the second fact is proved, or require evidence to be given of the second fact before evidence is given of the first fact]].
>
> **142.** (1) The examination of a witness by the party who calls him shall be called his [[=examination-in-chief]].
>
> (2) The examination of a witness by the adverse party shall be called his [[=cross-examination]].
>
> (3) The examination of a witness, subsequent to the cross-examination, by the party who called him, shall be called his [[=re-examination]].

| Text | What it does | Why it matters |
|---|---|---|
| S. 140's default to "discretion of the Court" | Leaves witness order to procedural law first, and to judicial discretion only as a fallback | Rarely litigated on its own, but confirms there is no free-standing statutory sequence a party can demand outside procedural law |
| S. 141(1)'s "shall admit... and not otherwise" | Makes relevance a threshold the Judge actively polices, not a passive assumption | The Judge can and should ask "how is this relevant?" before evidence goes in, not only rule on objections after the fact |
| S. 141(2)'s "unless the party undertakes... and the Court is satisfied" | Lets a party get provisional latitude to prove the foundational fact later, on an undertaking | Avoids forcing every trial into a rigid proof-order where practical sequencing would be inefficient |
| S. 141(3)'s "in his discretion" | Confirms the Judge, not either party, controls the sequencing where two facts are genuinely interlinked | Neither side can dictate proof order merely by asserting logical priority |
| S. 142's three defined terms | Fixes the vocabulary every later section in the chapter depends on | Getting these three terms right is a precondition for understanding every remaining section of Chapter X |

::: proviso The Act's own illustrations show the sequencing choice in action
Section 141 carries four illustrations worth knowing cold. Proving a dead person's out-of-court statement (relevant under section 26) requires the death to be proved first. Proving a document's contents by a copy requires the original's loss to be proved first. Proving a denial of possession of stolen property, where relevancy depends on the property's identity, is left to the Court's discretion as to which comes first. And where a fact is said to be the cause or effect of a fact in issue through several intermediate facts, the Court may permit proof in either order. The pattern: strict sequencing where the law itself conditions relevance (sections 26, secondary evidence), and pure discretion where the facts are merely factually interlinked.
:::

### How this actually runs

<MicroTree
  input="A party proposes to give evidence of a fact whose relevance depends on some other fact being proved"
  :gates="[
    { q: 'Is the fact proposed to be proved relevant only upon proof of some other, foundational fact?', no: 'section 141(1) applies simply — the Judge admits the evidence if the fact, if proved, would be relevant, and not otherwise' },
    { q: 'Has that foundational fact already been proved, or has the party undertaken to prove it to the Court’s satisfaction?', no: 'the evidence of the fact first proposed should not yet be admitted' },
    { q: 'Where the two facts are instead mutually interlinked rather than strictly sequential, has the Judge exercised discretion on which is proved first?', yes: 'the Judge’s chosen sequence governs, and neither party can insist on a different order' }
  ]"
  result="the fact is admitted once the Judge is satisfied of its relevance, in whatever order the Judge has determined the foundational and dependent facts must be proved"
  caveat="section 141(1)’s gate is a relevance gate, not a credibility gate — the Judge asks only whether the fact, if proved, would be relevant, not whether it is likely to be believed"
  resultKind="mixed"
/>

### In plain English

**Three separate ideas sit inside these three sections.** Section 140 is the least contentious — witness order follows procedural law, and failing that, the Court's discretion. Section 141 is the more important one: it makes the Judge an active relevance gatekeeper before evidence is admitted at all, and gives the Judge tools to manage the awkward cases where one fact's relevance is conditional on another fact being proved first. Section 142 is pure vocabulary — examination-in-chief is the calling party's own questioning, cross-examination is the adverse party's questioning, and re-examination is the calling party's follow-up after cross-examination. Every later section in this chapter assumes the reader knows these three terms without being reminded.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping stated here — Indian Evidence Act, 1872, s. 135 (order of production and examination) to BSA s. 140, s. 136 (Judge to decide as to admissibility) to BSA s. 141, and s. 137 (definitions of examination-in-chief, cross-examination, re-examination) to BSA s. 142 — reflects the well-known structure of this part of the old Act, continuing a five-section offset from the ss. 132-139 cluster covered in Chapter IX part II. No verified local Indian Evidence Act source text exists in `reference/` to check the old sections' exact wording against the new ones; treat the mapping, and the offset, as a flagged hypothesis until such a source is added.
:::

| Indian Evidence Act (reported) | BSA | What appears to have changed |
|---|---|---|
| S. 135 | S. 140 | Renumbered only, on the reported mapping |
| S. 136 | S. 141 | Renumbered only, on the reported mapping |
| S. 137 | S. 142 | Renumbered only, on the reported mapping |

Nothing in the substance of these three sections appears to have changed — the order-of-witnesses rule, the Judge's relevancy gate, and the three-term vocabulary all track the old Act closely. The practitioner's task is purely to retrain the numbers, not the concepts.

### Test your instinct

::::instinct Scenario 1 — the dying declaration offered before death is proved
A party wants to introduce a deceased person's out-of-court statement as evidence, relevant under section 26, but has not yet led any evidence that the person is actually dead. The opposing side objects that the statement is being offered out of order. Is the objection sound?
:::ruling
Yes. Section 141's own first illustration addresses exactly this fact pattern: the fact that the person is dead must be proved by the party proposing to prove the statement, before evidence is given of the statement itself. The statement's relevance is entirely conditional on the death being proved, so the foundational fact must come first, not as an afterthought.
:::
::::

::::instinct Scenario 2 — the copy produced before the loss is proved
A party wants to prove the contents of a document by producing a copy, but has not yet shown that the original is lost. Can the copy be produced first, on the promise that the loss will be proved afterward?
:::ruling
Not without the Court's satisfaction. Section 141(2) allows this only if the party undertakes to prove the foundational fact and the Court is satisfied with that undertaking — otherwise, the second illustration to section 141 is direct: the fact that the original is lost must be proved before the copy is produced. A bare promise to "get to it later" is not automatically enough; the Court must actually be satisfied.
:::
::::

::::instinct Scenario 3 — is a follow-up question re-examination or new examination-in-chief?
After cross-examination concludes, the party who originally called the witness wants to ask further questions on a matter never touched in cross-examination. Is this re-examination?
:::ruling
Not in the strict sense contemplated by section 142(3), which defines re-examination as examination "subsequent to the cross-examination, by the party who called him" — the label is about timing and party, not subject matter confinement (that confinement comes later, from section 143(3)). So the questioning is technically re-examination by section 142's definition, but whether new matter may be introduced in it, and what happens if it is, is governed by the next section, not this one — a reminder that the three definitions here are foundational vocabulary, not a complete rulebook on their own.
:::
::::

::::instinct Scenario 4 — the true fact proved in the wrong order
A party has genuine, truthful evidence that a document's original is lost and wants to save time by producing the copy first and proving the loss afterward, without ever asking the Court to accept an undertaking. The Court refuses to admit the copy until the loss is proved. The party argues this is unfair since the loss is, in fact, true. Should the Court's refusal stand?
:::ruling
Yes, and this is a case where being right on the facts does not excuse skipping the procedure. Section 141(2) requires the foundational fact — here, the original's loss — to be proved first, unless the party has secured the Court's satisfaction with an undertaking to prove it later. Simply asserting that the fact is true does not substitute for either proving it first or securing the Court's acceptance of a deferred-proof undertaking. The copy stays out until the sequencing rule is actually satisfied, however confident the party is that the underlying fact is true.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
No single authority is promoted here. These are procedural sequencing mechanics worked out directly from the Act's own text and its own illustrations; no specific leading judgment is held with the certainty this project's citation rule requires.

#### Sword and shield
| | As a sword (offering evidence) | As a shield (resisting evidence) |
|---|---|---|
| S. 141(1) | Be ready to state precisely how a proposed fact, if proved, would be relevant, the moment the Judge asks | Press the Judge to ask exactly that question where the opposing party's offer of proof looks speculative |
| S. 141(2)-(3) | Where proof order is inconvenient, seek the Court's acceptance of an undertaking to prove the foundational fact later, rather than assuming it | Object promptly where a dependent fact is being led before its foundational fact is proved or an undertaking accepted |
| S. 142 | Use the correct label for each phase of questioning when making or responding to objections, since later sections' rules (leading questions, scope) turn on which phase is underway | Object at the right phase — an objection proper to cross-examination may not be available, or may be waived, if raised for the first time in re-examination |

#### The limitation clock
None. These are trial-sequencing rules that operate entirely within the pending proceeding; no independent limitation period attaches to any of the three sections.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 141(2)'s dead-declarant illustration | This Act, ss. 26-27 (statements of persons who cannot be called as witnesses) | The illustration is not incidental — it is the direct proof-order consequence of relying on ss. 26-27, and a practitioner invoking those sections must always be ready to prove unavailability first |
| Ss. 140-142 generally | Bharatiya Nagarik Suraksha Sanhita, 2023 (procedure for recording evidence at trial) | Section 140 expressly defers witness order to "the law and practice for the time being relating to civil and criminal procedure," which today means the BNSS's own trial-procedure provisions |

#### The authorities
No further authority beyond what is stated above is confidently recalled for this cluster with the certainty this project's citation rule requires.

#### Strategy and drafting
Before offering evidence of a fact whose relevance is conditional, identify in advance whether the foundational fact must be proved strictly first (as with a dead declarant's statement or a lost original) or whether the sequencing is instead a matter for the Judge's discretion under section 141(3). Where the convenient trial order would put the dependent fact first, ask the Court explicitly to accept an undertaking under section 141(2) rather than simply proceeding and hoping no objection is raised — a late objection sustained mid-trial is far more damaging than a five-minute procedural request made in advance.

## Sections 143 to 146 — sequence of examination, document-producers, character witnesses, and leading questions

### The dispute this solves

::: oneminute
Once a witness is in the box, four separate mechanical rules govern what happens next. Section 143 fixes the sequence — examination-in-chief, then cross-examination if desired, then re-examination if desired — and confines re-examination to explaining matters raised in cross-examination, while confining examination-in-chief and cross-examination to relevant facts (cross-examination need not be confined to what was raised in chief). Section 144 protects a person who is merely summoned to produce a document from being treated as a witness, and therefore from being cross-examined, unless and until actually called as a witness. Section 145 confirms that character witnesses are not exempt from cross-examination or re-examination. And section 146 supplies the single most consequential mechanical rule in the whole chapter: what a leading question is, and when asking one is and is not permitted.
:::

::: story
The leading-questions rule exists because of a basic asymmetry: a party calling its own witness has every incentive to feed the witness the answer, while a party cross-examining an adverse witness has the opposite incentive — to test, not to prompt. Section 146 encodes that asymmetry directly: leading questions are barred, if objected to, in examination-in-chief and re-examination, but expressly permitted in cross-examination. The middle ground — introductory matters, undisputed matters, or matters already sufficiently proved — gets a carve-out even in examination-in-chief, because there is no risk of coaching where nothing is genuinely contested.
:::

### The Act, decompiled

> **143.** (1) Witnesses shall be first [[!examined-in-chief]], then (if the adverse party so desires) [[!cross-examined]], then (if the party calling him so desires) [[!re-examined]].
>
> (2) The examination-in-chief and cross-examination must relate to relevant facts, but the [[?cross-examination need not be confined to the facts to which the witness testified on his examination-in-chief]].
>
> (3) The re-examination shall be directed to the [[!explanation of matters referred to in cross-examination]]; and, if new matter is, by permission of the Court, introduced in re-examination, the adverse party may further cross-examine upon that matter.
>
> **144.** A person summoned to produce a document [[!does not become a witness by the mere fact that he produces it]], and cannot be cross-examined unless and until he is called as a witness.
>
> **145.** Witnesses to character [[!may be cross-examined and re-examined]].
>
> **146.** (1) Any question suggesting the answer which the person putting it wishes or expects to receive, is called a [[=leading question]].
>
> (2) Leading questions must not, if objected to by the adverse party, be asked in an examination-in-chief, or in a re-examination, [[!except with the permission of the Court]].
>
> (3) The Court shall permit leading questions as to matters which are [[?introductory or undisputed, or which have, in its opinion, been already sufficiently proved]].
>
> (4) Leading questions [[!may be asked in cross-examination]].

| Text | What it does | Why it matters |
|---|---|---|
| S. 143(1)'s fixed sequence | Establishes examination-in-chief first, cross-examination only if the adverse party wants it, re-examination only if the calling party wants it | Neither cross-examination nor re-examination is compulsory — both are elective, at the relevant party's choice |
| S. 143(2)'s asymmetric scope | Confines chief and cross to relevant facts generally, but frees cross-examination from being confined to what chief actually covered | Cross-examination can range far more widely than chief did, subject only to the general relevance requirement |
| S. 143(3)'s confinement of re-examination | Ties re-examination to explaining cross-examination matters, with a Court-permission escape hatch for genuinely new matter | Prevents re-examination from becoming a second bite at examination-in-chief |
| S. 144's "does not become a witness" | Shields a mere document-producer from being treated, and cross-examined, as a witness | A common trap for the unprepared — producing a document under summons is not the same as testifying about it |
| S. 145 | Removes any special immunity for character witnesses | Character evidence is tested by the same examination machinery as any other evidence |
| S. 146(2)-(4)'s asymmetry | Leading questions are barred (on objection) in chief and re-examination, subject to the three-category carve-out in subsection (3), but always permitted in cross-examination | Encodes directly the coaching-risk asymmetry between calling and adverse-testing a witness |

::: proviso Section 146(3)'s carve-out is a coaching-risk test, not a convenience exception
The three permitted categories — introductory matters, undisputed matters, and matters already sufficiently proved — share one feature: none of them carries any real risk that a leading question would coach the witness into a false or embellished answer, because the answer is not genuinely contested. The exception is not a general efficiency shortcut; a genuinely contested fact does not become "introductory" merely because counsel wishes it were.
:::

### How this actually runs

<MicroTree
  input="A question is put to a witness under examination, and the question suggests the answer the questioner wishes or expects to receive"
  :gates="[
    { q: 'Does the question actually suggest the answer the questioner wishes or expects to receive?', no: 'this is not a leading question at all, and section 146 imposes no restriction on it' },
    { q: 'Is the question being put in cross-examination?', yes: 'the question is permitted — section 146(4) removes any restriction on leading questions in cross-examination' },
    { q: 'If put instead in examination-in-chief or re-examination, has the adverse party objected to it?', no: 'the question may proceed regardless of being leading, since section 146(2)’s bar operates only upon objection' },
    { q: 'Having objected, does the matter concern something introductory or undisputed, or something the Court considers already sufficiently proved?', yes: 'the Court shall permit the leading question notwithstanding the objection' }
  ]"
  result="a leading question is barred in examination-in-chief or re-examination only where it is objected to and none of section 146(3)’s permitting categories is satisfied"
  caveat="the default intuition should invert for cross-examination — leading questions are the ordinary tool there, not a suspect exception, and no objection to their leading form can succeed in that phase"
  resultKind="mixed"
/>

### In plain English

**Four rules, one underlying logic.** Section 143 fixes the sequence of examination and confines re-examination's purpose to explaining what cross-examination raised. Section 144 stops a document-producer from being ambushed into cross-examination they never signed up for. Section 145 makes clear character witnesses get no special protection from ordinary examination. And section 146 is the rule every trial advocate internalises early: lead all you want in cross-examination, but in chief or re-examination, leading is barred on objection unless the matter is introductory, undisputed, or already sufficiently proved.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping stated here — Indian Evidence Act, 1872, s. 138 (order of examinations) to BSA s. 143, s. 139 (cross-examination of person called to produce a document) to BSA s. 144, s. 140 (witnesses to character) to BSA s. 145, and ss. 141-143 (definition of a leading question; when leading questions must not be asked; when they may be asked — three separate old sections) folding into the single BSA s. 146 as its four subsections — is the reported correspondence. This reading treats the merger of three old sections into one new section as the reason the five-section offset seen through BSA s. 145 narrows to a three-section offset from BSA s. 146 onward. No verified local Indian Evidence Act source text exists in `reference/` to check this against; treat it as a flagged hypothesis until such a source is added.
:::

| Indian Evidence Act (reported) | BSA | What appears to have changed |
|---|---|---|
| S. 138 | S. 143 | Renumbered only, on the reported mapping |
| S. 139 | S. 144 | Renumbered only, on the reported mapping |
| S. 140 | S. 145 | Renumbered only, on the reported mapping |
| Ss. 141-143 | S. 146 (as subsections (1)-(4)) | **Likely structural consolidation** — three old sections on leading questions appear folded into one new section with four subsections; flagged as the standout structural change in this cluster |

The practical rule itself — leading questions barred on objection in chief and re-examination subject to the three-category carve-out, freely permitted in cross-examination — appears unchanged in substance. What changes is that a practitioner who once cited three separate old sections for these three ideas now cites one section with four subsections.

### Test your instinct

::::instinct Scenario 5 — cross-examining the man who only brought the box
A person is summoned to produce a company's ledger under summons and hands it to the Court. Opposing counsel then tries to cross-examine him about how the ledger was maintained. He has not been called as a witness by either side. Can he be cross-examined?
:::ruling
No, not yet. Section 144 is explicit: a person summoned to produce a document does not become a witness by the mere fact of producing it, and cannot be cross-examined unless and until he is called as a witness. Producing the ledger is not testifying about it — if counsel wants to question him, he must first be called as a witness by one of the parties.
:::
::::

::::instinct Scenario 6 — the character witness who expected an easy ride
A defence witness testifies only to the accused's good character. The prosecution seeks to cross-examine this witness, and the defence objects that character witnesses are meant to be a formality, not subject to hostile questioning. Is the objection sound?
:::ruling
No. Section 145 states plainly that witnesses to character may be cross-examined and re-examined, with no special exemption. A character witness is examined by the same machinery as any other witness; testifying about reputation or disposition does not buy immunity from being tested on it.
:::
::::

::::instinct Scenario 7 — the leading question on an undisputed introductory fact
In examination-in-chief, counsel asks a witness, "You are the branch manager of the bank, are you not?" — a fact neither side disputes. Opposing counsel objects that this is a leading question. Should the Court sustain the objection?
:::ruling
No. While the question does suggest its own answer and is technically leading, section 146(3) requires the Court to permit leading questions on matters that are introductory or undisputed. The witness's job title is exactly this kind of foundational, uncontested detail, and there is no coaching risk in confirming it directly rather than through an open-ended question.
:::
::::

::::instinct Scenario 8 — the truthful witness led through the contested fact
In examination-in-chief, counsel asks a witness, "And it was the defendant who signed the contract in your presence, wasn't it?" — on the central, genuinely disputed issue in the case. Opposing counsel objects. The witness's answer, if given freely and non-leadingly, would in fact have been truthful and identical. Should the objection still be sustained?
:::ruling
Yes, and this is a case where the truth of the answer does not cure the procedural defect. Section 146(2) bars leading questions in examination-in-chief on objection, and section 146(3)'s carve-out only reaches introductory or undisputed matters, or matters already sufficiently proved — not the central contested fact in the case. That the witness would have answered the same way if asked properly is irrelevant to whether the question, as put, was permissible; counsel must re-put the question in a non-leading form, however confident everyone is of the true answer.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
No single authority is promoted here. The sequencing, document-producer, character-witness, and leading-question rules are worked out directly from the Act's own precise text; no specific leading judgment is held with the certainty this project's citation rule requires.

#### Sword and shield
| | As a sword (examining a witness) | As a shield (resisting improper examination) |
|---|---|---|
| S. 143 | Use cross-examination's wider scope deliberately — it need not track what chief actually covered | Object promptly if re-examination strays into genuinely new matter without the Court's permission, since that opens further cross-examination on the new point |
| S. 144 | Do not assume a document-producer is fair game for cross-examination until formally called as a witness | Object immediately if opposing counsel attempts to cross-examine a mere document-producer who has not been called |
| S. 145 | Prepare to cross-examine a character witness with the same rigour as any other witness | Do not expect, or promise a client, that character witnesses are shielded from hostile questioning |
| S. 146 | In cross-examination, lead deliberately and precisely to control the narrative | In chief, phrase contested-fact questions openly, and object immediately to genuinely leading questions on contested matter, categorising clearly why the section 146(3) carve-out does not apply |

#### The limitation clock
None. All four sections operate entirely within the pending examination of a witness at trial; none carries an independent limitation period.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 144 (document-producer not a witness) | This Act, Chapter V (documentary evidence, ss. 56-93) | The document-production machinery and the witness-examination machinery are often confused by unprepared counsel; keeping the two separate matters straight is essential when a document arrives at trial via summons rather than through a sponsoring witness |
| S. 146 (leading questions) | Bharatiya Nagarik Suraksha Sanhita, 2023 (procedure for recording deposition and examination at trial) | The BNSS's trial-recording procedure is the practical setting in which objections to leading questions are made and ruled on in real time |

#### The authorities
No further authority beyond what is stated above is confidently recalled for this cluster with the certainty this project's citation rule requires.

#### Strategy and drafting
Draft examination-in-chief questions in open form on every genuinely contested point, reserving leading form only for introductory or undisputed matters — a habit that survives objection far better than hoping the other side stays silent. When a document arrives at trial through a summons rather than a sponsoring witness, resist any attempt by the opposing side to cross-examine the mere producer, and insist on the formality of actually calling that person as a witness first if testimony is genuinely needed from them. And never assume a friendly witness — including a character witness — is beyond the reach of cross-examination; prepare every witness for it.

## Chapter X part I consolidation — which mechanical rule governs this stage of examination?

1. **Is the dispute about who goes first, or about whether a fact is relevant enough to be admitted at all?** Section 140 governs the former; section 141 governs the latter, and gives the Judge an active gatekeeping role.
2. **If relevance is conditional on another fact, is the sequencing rule strict (as with sections 26-27 statements or lost originals) or genuinely a matter for the Judge's discretion?** Do not assume every conditional-relevancy problem has one right order.
3. **Has the person actually been called as a witness, or merely summoned to produce a document?** Section 144 draws this line sharply, and it is easy for unprepared counsel to blur it.
4. **Is the question leading, and if so, in which phase of examination is it being asked?** The answer to that single question — chief, cross, or re-examination — usually resolves the entire dispute under section 146.

Chapter X part II — covering the proof of document contents through a witness, cross-examination on prior written statements, the lawful boundaries of cross-examination (including the BNS-linked restriction on sexual-history evidence), and the Court's control over credit-shaking questions — is next.
