# Chapter VII part I — Burden of Proof: the general theory (ss. 104-114)

Chapter VII opens the Act's third great subject — after relevancy (Chapter II) and proof (Chapters III-VI) comes the question of *who has to convince the court, of what, and when*. This first part covers the general theory: how the burden of proof is defined and located (ss. 104-107), how it sits on an accused person who invokes a General Exception to a criminal charge (s. 108), and a run of specific, fact-pattern-driven burden allocations — special knowledge, survival after an absence, continuing relationships, possession-based ownership, and good faith in confidential dealings (ss. 109-114). Part II of this chapter (`chapter-07b.md`) covers the Act's specific statutory presumptions, ss. 115-120.

## Sections 104 to 107 — the general theory of burden of proof

### The dispute this solves

::: oneminute
Every civil suit and every criminal trial eventually asks the same background question before it asks anything else: if neither side proves anything at all, who loses? That is what "burden of proof" means, and sections 104 to 107 build the concept up in four short moves. Section 104 defines it — whoever wants the court to act on a fact must prove that fact. Section 105 locates it in a suit — it falls on whoever would lose if no evidence were given by either side. Section 106 locates it as to any one particular fact — whoever wants the court to believe that fact exists must prove it, unless a specific law says otherwise. Section 107 extends it sideways — even the burden of proving a *foundational* fact needed to make some other evidence admissible at all sits on whoever wants to use that other evidence.
:::

::: story
None of this is really new law to anyone who has watched a trial: a plaintiff who called no witnesses and produced no documents simply loses, whatever the truth of the matter might secretly be. Sections 104-107 exist to make that intuition precise enough to argue about — precise enough to answer, mid-trial, the practical question "whose job was it to prove that?"
:::

### The Act, decompiled

> **104.** Whoever desires any Court to give judgment as to any legal right or liability dependent on the existence of facts which he asserts [[!must prove]] that those facts exist, and when a person is bound to prove the existence of any fact, it is said that the [[=burden of proof]] lies on that person.
>
> Illustrations.
>
> (a) A desires a Court to give judgment that B shall be punished for a crime which A says B has committed. A must prove that B has committed the crime.
>
> (b) A desires a Court to give judgment that he is entitled to certain land in the possession of B, by reason of facts which he asserts, and which B denies, to be true. A must prove the existence of those facts.
>
> **105.** The [[=burden of proof]] in a suit or proceeding [[!lies]] on that person who would fail if no evidence at all were given on either side.
>
> Illustrations.
>
> (a) A sues B for land of which B is in possession, and which, as A asserts, was left to A by the will of C, B's father. If no evidence were given on either side, B would be entitled to retain his possession. Therefore, the burden of proof is on A.
>
> (b) A sues B for money due on a bond. The execution of the bond is admitted, but B says that it was obtained by fraud, which A denies. If no evidence were given on either side, A would succeed, as the bond is not disputed and the fraud is not proved. Therefore, the burden of proof is on B.
>
> **106.** The burden of proof as to any particular fact [[!lies]] on that person who wishes the Court to believe in its existence, unless it is provided by any law that the proof of that fact shall lie on any particular person.
>
> Illustration.
>
> A prosecutes B for theft, and wishes the Court to believe that B admitted the theft to C. A must prove the admission. B wishes the Court to believe that, at the time in question, he was elsewhere. He must prove it.
>
> **107.** The burden of proving any fact necessary to be proved in order to enable any person to give evidence of any other fact [[!is]] on the person who wishes to give such evidence.
>
> Illustrations.
>
> (a) A wishes to prove a dying declaration by B. A must prove B's death.
>
> (b) A wishes to prove, by secondary evidence, the contents of a lost document. A must prove that the document has been lost.

| Text | What it does | Why it matters |
|---|---|---|
| S. 104 | Defines "burden of proof" itself: whoever wants a judgment resting on a fact must prove that fact | The foundational definition every later section in the chapter builds on |
| S. 105 | Locates the burden in a suit or proceeding on whoever would lose if neither side led any evidence | Turns the abstract definition into a practical litmus test — imagine an evidence-free trial and ask who loses it |
| S. 106 | Locates the burden as to any one particular fact on whoever wants the court to believe that fact exists, unless a specific law assigns it elsewhere | Confirms the burden is not always one single, whole-case burden — it can be tracked fact by fact |
| S. 107 | Puts the burden of proving a foundational, admissibility-enabling fact (like a declarant's death, or a document's loss) on whoever wants to rely on the resulting evidence | Prevents a party from leaning on secondary or exceptional evidence (a dying declaration, secondary evidence of a lost document) without first proving the fact that makes that evidence admissible at all |

::: proviso Section 106 yields to a specific statutory allocation
Section 106's default rule — the burden as to a particular fact sits on whoever wants the court to believe it — is itself subject to any law that assigns proof of that fact to a specific person. Sections 108 and onward in this very chapter are examples of exactly that kind of specific statutory override; where one applies, it displaces section 106's default, not the other way round.
:::

### How this actually runs

<MicroTree
  input="A party needs the court to accept a fact, and the question is who had to prove it"
  :gates="[
    { q: 'Is the question simply who loses the whole suit or proceeding if neither side led any evidence at all (section 105)?', no: 'the inquiry is narrower than the whole case — move to the next gate' },
    { q: 'Is the question instead about one particular fact, and does any specific law assign proof of that fact to a named person, displacing section 106’s default?', no: 'section 106’s default applies — the burden as to that particular fact sits on whoever wants the court to believe it exists' },
    { q: 'Is the fact in question itself only a gateway fact needed to make some other piece of evidence admissible (a declarant’s death, a document’s loss), engaging section 107?', no: 'sections 104-106 govern the allocation directly, without section 107’s admissibility-gateway layer' }
  ]"
  result="the burden of proof sits on whoever asserts the fact underlying the judgment sought, on whoever would lose an evidence-free trial, on whoever wants a particular fact believed absent a contrary statutory allocation, or on whoever wants to rely on evidence that itself depends on a foundational fact being proved first"
  caveat="these four sections are cumulative lenses on the same underlying concept, not four competing tests — a single dispute is usually best analysed through section 105 first, then narrowed with sections 106 and 107 as needed"
  resultKind="mandatory"
/>

### In plain English

**If the courtroom went completely silent and neither side said a word, who would walk out having lost? That person carried the burden of proof.** Section 105 is the most useful of the four sections precisely because it gives you this test: imagine the trial with zero evidence on either side, and ask who the law's default position would defeat. That person had the burden all along, and everything they later prove is really just discharging a burden the law had already placed on them before the first witness was called.

Section 104 supplies the underlying definition — whoever asserts a fact that a judgment depends on must prove it — and section 106 confirms that this is not always one single burden for the whole case; different particular facts inside the same case can carry different burdens, resting on whichever side wants that specific fact believed. Section 107 then reaches one layer deeper: sometimes proving fact X is not the real goal, but merely the price of admission for leading some other piece of evidence Y — proving a witness is dead before that witness's dying declaration can be used, or proving a document is lost before secondary evidence of its contents can be led. The burden of clearing that gateway fact falls on whoever wants to use the evidence behind it, not on the opposing side.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping stated here — Indian Evidence Act, 1872, ss. 101 through 104 corresponding one-to-one to BSA ss. 104 through 107 — is offered as the commonly reported correspondence, consistent with the roughly uniform "+3" renumbering visible across this chapter. No verified local Indian Evidence Act source text exists in `reference/` to confirm the old sections' exact wording or illustrations; treat this mapping as a flagged hypothesis until a verified source is added.
:::

| Indian Evidence Act (reported) | BSA | What appears to have changed |
|---|---|---|
| S. 101 | S. 104 | Renumbered, on the reported mapping — the definition of burden of proof appears unchanged in substance |
| S. 102 | S. 105 | Renumbered, on the reported mapping — the on-whom-burden-lies test appears unchanged in substance |
| S. 103 | S. 106 | Renumbered, on the reported mapping — the particular-fact allocation appears unchanged in substance |
| S. 104 | S. 107 | Renumbered, on the reported mapping — the admissibility-gateway burden appears unchanged in substance |

For a practitioner trained on the old Act, this run of four sections should be immediately recognisable — the classic illustrations (the will, the bond obtained by fraud, the theft admission, the dying declaration) all appear to carry over unchanged.

### Test your instinct

::::instinct Scenario 1 — the silent courtroom test
A sues B claiming title to a shop, saying B is a trespasser. B has been in settled possession for years. Neither side leads a shred of evidence. Who loses, and what does that tell you about the burden of proof?
:::ruling
B keeps the shop, and A loses — a person found in settled possession keeps it in the absence of evidence displacing that possession. Applying section 105's test, since A is the one who would fail if no evidence at all were given, the burden of proof was on A from the very start of the suit, regardless of how confident A's counsel felt about the merits going in.
:::
::::

::::instinct Scenario 2 — the admitted bond and the fraud defence
A sues B on a promissory note. B admits signing it but claims it was obtained by fraud. Both sides then present no further evidence at all. Who succeeds, and who carried the burden?
:::ruling
A succeeds, because the note's execution is admitted and the alleged fraud remains unproved on an evidence-free record — this mirrors the Act's own illustration to section 105. The burden of proving the fraud was always on B, the party who asserted it, not on A merely because A is the plaintiff.
:::
::::

::::instinct Scenario 3 — the dying declaration without proof of death
A wants to put in evidence a written statement B made shortly before B allegedly died, as a dying declaration. A leads the statement but never actually proves that B has died. Can the statement be used?
:::ruling
No — and this is section 107 doing real work. Before A can use B's statement as a dying declaration at all, A must first prove the foundational fact that makes that category of evidence admissible in the first place: that B is in fact dead. Without that proof, the statement is not before the court as a dying declaration regardless of how reliable its contents might otherwise appear.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
No single authority is promoted here. This cluster is foundational statutory theory, worked out through the Act's own text and illustrations rather than through case law.

#### Sword and shield
| | As a sword (asserting a burden is met) | As a shield (arguing a burden was never discharged) |
|---|---|---|
| S. 105 | Run the evidence-free hypothetical explicitly in argument to show the opponent bore the burden all along | Invoke the same hypothetical to show that, absent the opponent's evidence, the opponent's own case fails on its face |
| S. 107 | Prove the gateway fact (death, loss of a document) affirmatively and early, before leading the dependent evidence | Object to the dependent evidence at the point it is tendered if the gateway fact has not yet been proved |

#### The limitation clock
None of its own. These are allocation rules, not deadlines; the practical clock is that a failure to discharge a burden is usually only fatal at judgment, but an evidentiary objection tied to section 107's gateway-fact requirement should be raised the moment the dependent evidence is tendered.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 107 | Ch. II part III, ss. 26-33 (`chapter-02c.md`) | Section 107's illustration of proving a dying declarant's death is the burden-of-proof counterpart to the unavailable-witness-statement provisions already treated there — the admissibility test lives in Chapter II, this section only fixes who must prove the gateway fact. |
| S. 107 | Ch. V part I, ss. 56-60 (`chapter-05a.md`) | Likewise, proving a document's loss before leading secondary evidence of its contents is this section's burden-allocation mirror of the secondary-evidence gateway already treated in Chapter V. |

#### The authorities
No confidently recalled leading authority is promoted for this cluster.

#### Strategy and drafting
Run the section 105 "silent courtroom" hypothesis explicitly in written submissions when the real dispute is about which party had to move first — judges respond well to the test being spelled out rather than asserted. Before tendering any evidence that depends on a gateway fact under section 107 (a declarant's death, a document's loss), prove that gateway fact on the record first and separately, so the dependent evidence cannot be excluded later for want of foundation.

## Section 108 — burden of proving that the case of the accused comes within the General Exceptions

### The dispute this solves

::: oneminute
A criminal prosecution proves the physical elements of an offence, but the accused claims the case actually falls within one of the General Exceptions to the Bharatiya Nyaya Sanhita, 2023 — insanity, private defence, and the like — or within a special exception or proviso found elsewhere in that Sanhita or in the law defining the offence. Who has to prove that the exception applies? Section 108 answers: the accused does, and until he does, the court presumes the exception's circumstances are absent.
:::

::: story
The prosecution's burden to prove the offence beyond reasonable doubt never shifts. What section 108 shifts is a narrower, second-stage burden: once the offence's elements are otherwise made out, it is the accused — not the prosecution — who must establish the extraordinary circumstance that would excuse or reduce what would otherwise be a completed offence, and the burden he carries there is the ordinary civil standard of preponderance of probability, not the prosecution's higher standard.
:::

### The Act, decompiled

> **108.** When a person is accused of any offence, the burden of proving the existence of circumstances bringing the case within any of the General Exceptions in the Bharatiya Nyaya Sanhita, 2023 or within any special exception or proviso contained in any other part of the said Sanhita, or in any law defining the offence, [[!is]] upon him, and the Court [[!shall presume]] the absence of such circumstances.
>
> Illustrations.
>
> (a) A, accused of murder, alleges that, by reason of unsoundness of mind, he did not know the nature of the act. The burden of proof is on A.
>
> (b) A, accused of murder, alleges that, by grave and sudden provocation, he was deprived of the power of self-control. The burden of proof is on A.
>
> (c) Section 117 of the Bharatiya Nyaya Sanhita, 2023 provides that whoever, except in the case provided for by sub-section (2) of section 122, voluntarily causes grievous hurt, shall be subject to certain punishments. A is charged with voluntarily causing grievous hurt under section 117. The burden of proving the circumstances bringing the case under sub-section (2) of section 122 lies on A.

| Text | What it does | Why it matters |
|---|---|---|
| S. 108 | Places the burden of proving a General Exception, or a special exception or proviso, on the accused, and directs the court to presume the exception's circumstances absent until the accused discharges that burden | Marks the one place in ordinary criminal trial practice where a defined, statutory burden sits squarely on the accused, distinct from the prosecution's unshifting burden to prove the offence itself |

::: proviso The prosecution's burden never moves; only a second, narrower burden does
Section 108 does not relieve the prosecution of proving every element of the offence beyond reasonable doubt. It creates a separate, second-stage burden that arises only once the accused affirmatively raises a General Exception, special exception, or proviso — and even then, the accused's burden is discharged on the civil standard of preponderance of probability, not on the prosecution's higher criminal standard. Confusing the two standards is one of the most common analytical errors made with this section.
:::

### How this actually runs

<MicroTree
  input="An accused person raises a General Exception, or a special exception or proviso, to a charge"
  :gates="[
    { q: 'Has the prosecution otherwise proved the elements of the offence beyond reasonable doubt?', no: 'the prosecution has not made out its case; section 108’s accused-side burden never comes into play' },
    { q: 'Does the accused affirmatively raise circumstances bringing the case within a General Exception under the Bharatiya Nyaya Sanhita, 2023, or a special exception or proviso in that Sanhita or in the law defining the offence?', no: 'no accused-side burden under section 108 arises on these facts; the prosecution’s proof stands' },
    { q: 'Has the accused proved those circumstances on a preponderance of probability, displacing the court’s presumption that they are absent?', no: 'the presumption of absence stands, and the accused’s exception fails, even though the prosecution’s standard of proof for the offence itself is unaffected' }
  ]"
  result="the accused bears the burden of proving a General Exception, special exception, or proviso to a preponderance of probability once he raises it, and the court presumes its circumstances absent until he does so"
  caveat="this shifted burden never lowers the prosecution’s own burden to prove the offence beyond reasonable doubt in the first place"
  resultKind="mandatory"
/>

### In plain English

**The prosecution still has to prove the crime; the accused has to prove the excuse.** If A is shown to have killed B, the prosecution's job of proving that killing is done. But if A then says "I was legally insane at the time," or "I was under grave and sudden provocation," section 108 puts the job of proving *that* onto A, not back onto the prosecution — and the court starts from the presumption that no such excusing circumstance existed. A does not have to prove insanity or provocation beyond reasonable doubt, the way the prosecution had to prove the killing; a preponderance of probability is enough. But prove it he must, on the evidence, not merely assert it from the dock.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping stated here — Indian Evidence Act, 1872, s. 105 to BSA s. 108 — is offered as the commonly reported correspondence. The old section referred to the General Exceptions and provisos of the Indian Penal Code, 1860; the BSA text instead refers to the Bharatiya Nyaya Sanhita, 2023, consistent with that Sanhita having replaced the Penal Code. No verified local Indian Evidence Act or Indian Penal Code source text exists in `reference/` to confirm the old section's exact wording or illustrations; treat this mapping, and the specific illustration cross-reference to BNS s. 117 and s. 122(2), as a flagged hypothesis until a verified source is added.
:::

| Indian Evidence Act (reported) | BSA | What appears to have changed |
|---|---|---|
| S. 105 | S. 108 | Renumbered, on the reported mapping, with its reference to the Indian Penal Code's General Exceptions updated to the Bharatiya Nyaya Sanhita, 2023's equivalent General Exceptions — the burden-shifting rule itself appears unchanged in substance |

For a practitioner trained on the old Act, the shift here is entirely consequential on the criminal-code side, not the evidence-law side: this section's own test is unchanged, but every cross-reference it carries — the General Exceptions, and the specific illustration citing what was IPC s. 326A/335-equivalent material — must now be checked against the Bharatiya Nyaya Sanhita, 2023's own section numbers before being relied on in a live matter.

### Test your instinct

::::instinct Scenario 1 — the bare assertion of insanity
A is charged with murder. The prosecution proves the killing conclusively. A's counsel argues, without leading any evidence, that A "must have been insane" given the brutality of the act, and asks the court to acquit on that basis alone. Does this discharge A's burden under section 108?
:::ruling
No. Section 108 requires A to prove the circumstances of the General Exception — here, unsoundness of mind at the time of the act — and a bare submission from counsel, unsupported by evidence, does not discharge that burden. However brutal the act, brutality alone does not prove insanity; A must lead actual evidence (medical, behavioural, or otherwise) capable of establishing the exception on a preponderance of probability. Without it, the presumption of absence under section 108 stands and the exception fails.
:::
::::

::::instinct Scenario 2 — provocation proved, but does it undo the prosecution's case?
A is charged with murder of B. A proves, to the court's satisfaction, that B's conduct amounted to grave and sudden provocation depriving A of self-control. Does this mean the prosecution has failed to prove murder?
:::ruling
No — and this is the trap section 108 is built to expose. The prosecution's proof that A killed B remains intact; what changes is the legal characterisation of that proved killing, because a General Exception of this kind typically operates to reduce the offence rather than to erase the underlying act. A's success under section 108 does not mean the prosecution's case has collapsed; it means A has discharged a separate, narrower burden that affects the outcome without touching what the prosecution already proved.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
*Dahyabhai Chhaganbhai Thakker v. State of Gujarat*, AIR 1964 SC 1563 — facts: the accused killed his wife and raised a defence of unsoundness of mind under the General Exceptions to the Penal Code. **Ratio decidendi:** the burden on an accused to prove a General Exception under the Evidence Act's equivalent burden-shifting provision is discharged on the standard of preponderance of probability, not beyond reasonable doubt, and the accused's failure to discharge that burden does not by itself relieve the prosecution of its own unshifting burden to prove the offence's elements beyond reasonable doubt — the two burdens, and their two different standards, operate on entirely separate tracks. **Practitioner takeaway:** "The burden on the accused under section 108 is discharged like a civil issue, on preponderance of probability — I do not have to negate the exception beyond reasonable doubt to defeat it, and my client does not have to prove it beyond reasonable doubt to establish it."

#### Sword and shield
| | As a sword (raising the exception) | As a shield (resisting it) |
|---|---|---|
| Accused | Lead affirmative evidence — medical, circumstantial, or testimonial — capable of establishing the exception on a preponderance of probability; do not rely on submission alone | — |
| Prosecution | — | Press the court to hold the accused to the actual evidentiary burden under section 108, and resist any suggestion that the prosecution must additionally disprove the exception beyond reasonable doubt |

#### The limitation clock
None of its own. The exception is ordinarily raised during the trial itself, typically through the accused's evidence or cross-examination of prosecution witnesses, rather than at any fixed procedural deadline.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 108 | General Exceptions, Bharatiya Nyaya Sanhita, 2023 | Direct cross-reference — section 108 only allocates the burden; the substantive content of each General Exception (unsoundness of mind, private defence, and the rest) is defined entirely in the BNS, not here. |
| S. 108 | Ch. II part II, ss. 15-25 (`chapter-02b.md`) | Not a debt, but worth flagging: where the accused's own confession or admission is part of the evidence relied on to establish a General Exception, the admissibility tests already treated there apply before section 108's burden question is even reached. |

#### The authorities
No further authority is promoted beyond the winning ratio above.

#### Strategy and drafting
Never rest a General Exception on submission alone — lead affirmative evidence capable of independently establishing it, since section 108 places the actual burden of proof, not merely the burden of raising an argument, on the accused. When resisting an exception, resist the temptation to argue the prosecution must "rule out" the exception beyond reasonable doubt; the correct submission is that the accused has simply failed to meet the lower preponderance standard the section itself sets.

## Sections 109 to 114 — shifting burdens on special knowledge and status

### The dispute this solves

::: oneminute
Some facts are genuinely hard for one side to prove and easy for the other to disprove — because only one side actually knows the truth, or because a status quo has already been shown to exist and it would be perverse to make the party relying on that status quo re-prove it every time. Sections 109 to 114 are the Act's list of exactly these situations: a fact especially within a person's own knowledge (s. 109); whether a person shown alive within thirty years is now dead (s. 110); whether a person unheard-of for seven years is still alive (s. 111); whether a shown relationship — partnership, landlord-tenant, principal-agent — has ended (s. 112); whether a person shown in possession is not the true owner (s. 113); and the good faith of a transaction where one party held a position of active confidence over the other (s. 114).
:::

::: story
Each of these six sections follows the same underlying logic: once a particular starting fact has been shown — special knowledge, recent life, long silence, an acting relationship, possession, or a position of active confidence — the law puts the burden of proving the *departure* from what that starting fact would ordinarily suggest onto whichever party is asserting the departure, because that party is usually the one actually claiming something has changed.
:::

### The Act, decompiled

> **109.** When any fact is especially within the knowledge of any person, the burden of proving that fact [[!is]] upon him.
>
> Illustrations.
>
> (a) When a person does an act with some intention other than that which the character and circumstances of the act suggest, the burden of proving that intention is upon him.
>
> (b) A is charged with travelling on a railway without a ticket. The burden of proving that he had a ticket is on him.
>
> **110.** When the question is whether a man is alive or dead, and it is shown that he was alive within thirty years, the burden of proving that he is dead [[!is]] on the person who affirms it.
>
> **111.** When the question is whether a man is alive or dead, and it is proved that he has not been heard of for seven years by those who would naturally have heard of him if he had been alive, the burden of proving that he is alive [[!is shifted]] to the person who affirms it.
>
> **112.** When the question is whether persons are partners, landlord and tenant, or principal and agent, and it has been shown that they have been acting as such, the burden of proving that they do not stand, or have ceased to stand, to each other in those relationships respectively, [[!is]] on the person who affirms it.
>
> **113.** When the question is whether any person is owner of anything of which he is shown to be in possession, the burden of proving that he is not the owner [[!is]] on the person who affirms that he is not the owner.
>
> **114.** Where there is a question as to the good faith of a transaction between parties, one of whom stands to the other in a position of active confidence, the burden of proving the good faith of the transaction [[!is]] on the party who is in a position of active confidence.
>
> Illustrations.
>
> (a) The good faith of a sale by a client to an advocate is in question in a suit brought by the client. The burden of proving the good faith of the transaction is on the advocate.
>
> (b) The good faith of a sale by a son just come of age to a father is in question in a suit brought by the son. The burden of proving the good faith of the transaction is on the father.

| Text | What it does | Why it matters |
|---|---|---|
| S. 109 | Puts the burden of proving a fact especially within a person's own knowledge on that person | Recognises that the person best (or only) placed to know a fact should be the one required to prove it — an evidentiary fairness rule as much as an allocation rule |
| S. 110 | Once a person is shown alive within thirty years, puts the burden of proving death onto whoever asserts it | A short-window presumption of continued life, defeasible only by proof |
| S. 111 | Once a person has genuinely been unheard-of for seven years by those who would naturally have heard from him, shifts the burden of proving continued life onto whoever asserts it | The mirror image of section 110 — long, genuine silence flips the default the other way |
| S. 112 | Once persons are shown to have acted as partners, landlord-tenant, or principal-agent, puts the burden of proving that relationship has ended (or never existed as claimed) on whoever asserts that | Protects a shown, acting relationship from being casually unwound without proof |
| S. 113 | Once a person is shown in possession, puts the burden of proving that person is not the true owner on whoever makes that assertion | Possession is treated as presumptive evidence of ownership, displaceable only by proof to the contrary |
| S. 114 | Where a transaction is questioned between parties in a relationship of active confidence, puts the burden of proving the transaction's good faith on the party who held that position of confidence | Protects the weaker party in a fiduciary-type relationship from having to prove the other side's bad faith affirmatively — the confided-in party must instead prove good faith |

::: proviso Section 114 reverses the ordinary default entirely
Unlike sections 109-113, where the burden sits on whoever is asserting a change from a shown starting point, section 114 puts the burden of proving good faith on the very party who benefited from the transaction and held the position of confidence — even though that party is, in an ordinary sense, "defending" the transaction rather than attacking it. This is a genuine reversal of the more familiar default, not a variation on the same theme, and it exists specifically because the position of active confidence makes it unrealistic to expect the weaker party to prove bad faith from the outside.
:::

### How this actually runs

<MicroTree
  input="A party seeks to displace a shown starting fact — special knowledge, recent life, long absence, an acting relationship, possession, or a confidential position"
  :gates="[
    { q: 'Is the fact in dispute one especially and exclusively within one party’s own knowledge (section 109)?', no: 'move to the next gate — a different shown-starting-fact rule may apply instead' },
    { q: 'Is the dispute about whether a person shown alive within thirty years is now dead (section 110), or shown unheard-of for seven years is still alive (section 111)?', no: 'move to the next gate' },
    { q: 'Is the dispute about whether a shown acting relationship (partnership, landlord-tenant, principal-agent) has ended (section 112), or whether a person shown in possession is not the true owner (section 113)?', no: 'move to the next gate' },
    { q: 'Is the dispute instead about the good faith of a transaction where one party held a position of active confidence over the other (section 114)?', no: 'none of sections 109-114 is engaged on these facts; look to sections 104-108 for the applicable general rule instead' }
  ]"
  result="whoever asserts the departure from the shown starting fact — that the knowledgeable person’s stated fact is false, that the recently-alive person is dead, that the long-absent person is alive, that the acting relationship has ended, or that the possessor is not the owner — bears the burden of proving that departure; the sole reversal is section 114, where the burden of proving good faith sits on the party in the position of active confidence, not on the party challenging the transaction"
  caveat="each of these six rules is fact-pattern specific — a case must fit the shown starting fact precisely (special knowledge, the thirty-year or seven-year window, an acting relationship, possession, or active confidence) before its burden allocation applies"
  resultKind="mandatory"
/>

### In plain English

**Five of these six rules protect a status quo; the sixth protects the weaker party in an unequal relationship.** Sections 109 through 113 all work the same way: once something has already been shown to be true — that a fact is uniquely within someone's knowledge, that a person was recently alive, that a person has been silent for years, that people have been acting as partners or as landlord and tenant, that someone is in possession — the law will not make the party relying on that shown fact re-prove it. Instead, whoever wants to say the shown fact no longer holds has to prove that.

Section 114 breaks the pattern on purpose. Where one party — an advocate, a father, anyone occupying a position of active confidence over the other — benefits from a transaction with the person who trusts them, the law does not ask the trusting party to prove the transaction was tainted. It asks the trusted party to prove it was clean. That is a deliberate, protective reversal, because a client or a newly adult son is rarely well-placed to gather proof of an advocate's or a father's bad faith, while the advocate or father is well-placed to show the transaction was fair.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping stated here — Indian Evidence Act, 1872, ss. 106 through 111 corresponding one-to-one to BSA ss. 109 through 114 — is offered as the commonly reported correspondence, consistent with this chapter's roughly uniform "+3" renumbering. No verified local Indian Evidence Act source text exists in `reference/` to confirm the old sections' exact wording or illustrations; treat this mapping as a flagged hypothesis until a verified source is added.
:::

| Indian Evidence Act (reported) | BSA | What appears to have changed |
|---|---|---|
| S. 106 | S. 109 | Renumbered, on the reported mapping — the special-knowledge burden appears unchanged in substance |
| S. 107 | S. 110 | Renumbered, on the reported mapping — the thirty-year alive-or-dead rule appears unchanged in substance |
| S. 108 | S. 111 | Renumbered, on the reported mapping — the seven-year unheard-of rule appears unchanged in substance |
| S. 109 | S. 112 | Renumbered, on the reported mapping — the acting-relationship burden appears unchanged in substance |
| S. 110 | S. 113 | Renumbered, on the reported mapping — the possession-implies-ownership burden appears unchanged in substance |
| S. 111 | S. 114 | Renumbered, on the reported mapping — the active-confidence good-faith burden appears unchanged in substance |

For a practitioner trained on the old Act, this entire six-section run — including the client-advocate and father-son illustrations to what is now section 114 — should read as directly familiar, carried over without apparent substantive change.

### Test your instinct

::::instinct Scenario 1 — the seven-year disappearance
A left his village nine years ago and has not been heard of since by his family, who would ordinarily have heard from him. A's brother now claims A's property, asserting A is dead. Who bears the burden on the alive-or-dead question?
:::ruling
The burden of proving A is *alive* would fall on anyone asserting that — but here it is the brother asserting A is *dead*, which is the opposite of what section 111 governs. Section 111 only shifts the burden of proving continued life onto whoever affirms it, after seven years' genuine silence; it does not itself require the brother to prove death. In practice this means the brother benefits from the seven-year silence — a presumption of death is what courts commonly draw in this fact pattern once the seven-year absence is proved, and it would be A (or anyone asserting A is alive) who would bear the burden of displacing it, not the brother.
:::
::::

::::instinct Scenario 2 — the sale to one's own advocate
A client sells her only residential property to her long-standing advocate for a price the client later claims was far below market value. The client sues to set the sale aside. Who must prove the sale was made in good faith?
:::ruling
The advocate must. This is section 114's own illustration precisely: the advocate stood in a position of active confidence over the client, so the burden of proving the transaction's good faith — that the price was fair, that the client was fully informed, that no undue influence was exerted — sits on the advocate, not on the client to prove the reverse. The client does not have to affirmatively prove bad faith to succeed; she succeeds unless the advocate proves good faith.
:::
::::

::::instinct Scenario 3 — the tenant who claims sudden ownership
A has been paying rent to B as B's tenant for over a decade, by clear and repeated conduct. A now claims, mid-dispute, that the landlord-tenant relationship in fact ended two years ago and that A has since held the premises independently. Who must prove this claimed change?
:::ruling
A must. Section 112 puts the burden of proving that a shown acting relationship — here, landlord and tenant, proved by a decade of rent payments — has ceased on whoever asserts that it has. A cannot simply assert the relationship ended and require B to prove it continues; A carries the burden of proving the claimed change, and absent that proof the relationship is taken to continue.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
*State of West Bengal v. Mir Mohammad Omar*, (2000) 8 SCC 382 — facts: the accused were last seen with the deceased shortly before the deceased was killed, and gave no explanation for what happened afterward. **Ratio decidendi:** where a fact is especially within the accused's own knowledge — here, what happened to the victim after being last seen in the accused's company — the burden of explaining that fact shifts to the accused under the special-knowledge burden-of-proof rule, and an unexplained silence in the face of that burden may properly be weighed against the accused. **Practitioner takeaway:** "What happened next was known only to my opponent, not to me — under section 109, the burden of explaining it was always theirs, and their silence on it should be weighed accordingly."

#### Sword and shield
| | As a sword (relying on the shown starting fact) | As a shield (asserting the departure) |
|---|---|---|
| Ss. 109-113 | Establish the shown starting fact clearly on the record (the knowledge, the recent life, the long silence, the acting relationship, the possession) and rest on the resulting presumption without over-proving | Affirmatively prove the claimed departure — do not merely assert it; each of these five sections requires actual proof, not argument, to displace the shown starting fact |
| S. 114 | — | If in a position of active confidence, prove the transaction's fairness, the other party's full information, and the absence of undue influence affirmatively and early, rather than waiting to be challenged |

#### The limitation clock
None of its own for these six sections. The practical timing point is that a party relying on section 114's reversed burden should raise the confidential relationship at the earliest opportunity in pleadings, since the burden allocation itself depends on that relationship being established as a threshold fact.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 109 | Ch. II part I, ss. 8-9 (`chapter-02a.md`) | Not a debt, but worth flagging: conduct and silence in the face of a special-knowledge burden under section 109 is often led as relevant conduct evidence under the provisions already treated there — the two operate together in practice. |
| S. 114 | Ch. II part II, ss. 15-25 (`chapter-02b.md`) | Where the transaction under section 114 is itself evidenced by an admission (for instance, the client's own prior acknowledgment of the price), the admissibility tests already treated there apply before section 114's burden allocation becomes relevant. |

#### The authorities
No further authority is promoted beyond the winning ratio above.

#### Strategy and drafting
When relying on sections 109-113, resist the temptation to lead unnecessary proof of the shown starting fact once it is not genuinely disputed — the burden has already shifted, and over-proving it wastes court time better spent forcing the other side to discharge their own burden. When acting for a party in a position of active confidence under section 114, build the good-faith record — independent advice obtained, full disclosure made, fair valuation secured — contemporaneously with the transaction itself, because reconstructing that proof after a dispute has arisen is far harder than creating it at the time.

## Chapter VII part I consolidation — reading the general burden-of-proof rules together

1. **Start with section 105's "silent courtroom" test.** Whoever would lose an evidence-free trial carried the burden all along — this is the single most useful diagnostic across the whole chapter.
2. **Narrow to the particular fact in dispute using section 106**, checking first whether any specific law (including section 108, or one of ss. 109-114) displaces its default allocation.
3. **If a criminal General Exception, special exception, or proviso is raised, apply section 108** — the accused's burden is real but is measured on preponderance of probability, and never substitutes for the prosecution's own unshifting burden.
4. **If the dispute fits one of the six shown-starting-fact patterns in ss. 109-114, apply that specific rule** rather than falling back on section 106's general default — remembering that section 114 alone reverses the ordinary direction of the burden.

**Chapter VII part I, "Burden of Proof: the general theory" (ss. 104-114), is complete in this file.** Part II, "Specific statutory presumptions" (ss. 115-120), continues in `chapter-07b.md`.
