# Chapter II — Relevancy of Facts (V): opinions of experts

This fifth file in Chapter II covers sections 39 to 45: the narrow, carefully bounded carve-out that lets a court receive someone's *opinion* as evidence at all. Ordinary witnesses testify to what they perceived, not what they conclude — this cluster is the deliberate exception, built around people whose specialised skill or special means of knowledge makes their conclusions themselves worth hearing. Character evidence, the final file in this chapter, follows next.

## Section 39 — opinions of experts: foreign law, science, art, handwriting, finger impressions, and electronic evidence

### The dispute this solves

::: oneminute A toxicologist's opinion, and a hacked server nobody can explain without help
In a murder trial, the prosecution wants to lead the opinion of a forensic toxicologist, Dr. Mehra, on the symptoms a particular poison produces, to support the theory that the victim was poisoned. In a separate cybercrime case, the question is whether a company's server was accessed without authorisation, and neither side has the technical background to explain what the server logs actually show. The defence in the murder trial objects that opinion evidence is inherently suspect — witnesses are supposed to say what they saw, not what they think it means. The prosecution answers that this Act does not ban opinion evidence outright; it carves out a specific, named class of people whose specialised skill makes their conclusions themselves a relevant fact, precisely because the court cannot be expected to independently master toxicology, or forensic computer science, on its own.
:::

::: story A named class of people, for a named class of questions
Section 39 does not open the door to opinion evidence generally. It opens a narrow, specific door: when a court has to form an opinion on a point of foreign law, science, art, or any other field, or on the identity of handwriting or finger impressions, the opinions of persons specially skilled in that subject are relevant, and such persons are called experts. A second, separate limb extends the same treatment to a distinct modern problem — when the court has to form an opinion on information transmitted or stored in a computer resource or other electronic or digital form, the opinion of the Examiner of Electronic Evidence, a role created under the Information Technology Act, 2000, is itself made relevant, and that Examiner is deemed an expert for this purpose without needing to separately prove specialised skill each time.
:::

### The Act, decompiled

> **Section 39(1).** When the Court has to form an opinion upon a point of [[=foreign law]] or of science or art, or any other field, or as to identity of [[=handwriting or finger impressions]], the opinions upon that point of persons [[!specially skilled]] in such foreign law, science or art, or any other field, or in questions as to identity of handwriting or finger impressions are relevant facts and such persons are called experts.
>
> **Section 39(2).** When in a proceeding, the court has to form an opinion on any matter relating to any information transmitted or stored in any computer resource or any other electronic or digital form, the opinion of the [[=Examiner of Electronic Evidence]] referred to in section 79A of the Information Technology Act, 2000, is a relevant fact.
>
> *Explanation.*—For the purposes of this sub-section, an Examiner of Electronic Evidence shall be an expert.

*Illustrations.* The question is, whether the death of A was caused by poison — the opinions of experts as to the symptoms produced by the poison are relevant. The question is, whether A was, by reason of unsoundness of mind, incapable of knowing the nature of an act, or that it was wrong or contrary to law — the opinions of experts on whether A's symptoms commonly show unsoundness of mind, and whether such unsoundness usually has that effect, are relevant. The question is, whether a certain document was written by A, and another document is proved to have been written by A — the opinions of experts on whether the two documents were written by the same or different persons are relevant.

| Statutory phrase | Deconstruction | Practical effect |
|---|---|---|
| "specially skilled" | **The qualifying threshold for every expert except the electronic-evidence Examiner** | A witness must show genuine specialised training, study, or experience in the relevant field — casual familiarity or enthusiasm is not enough. |
| "foreign law... science or art, or any other field" | **A deliberately open-ended list**, closed only by the skill requirement | The subject-matter categories are broad; what keeps section 39 narrow is not the list of fields but the insistence on specialised skill within whichever field is invoked. |
| "the Examiner of Electronic Evidence... shall be an expert" | **A statutory shortcut for one specific, modern category** | Unlike every other kind of expert under this section, the Examiner's expert status is deemed by the Explanation itself, not established case by case through proof of qualification. |

::: proviso Expert opinion is advisory, not conclusive
Section 39 makes an expert's opinion relevant — it does not make that opinion binding on the court. A court remains free to weigh an expert's conclusions against the rest of the evidence, and to prefer a different view, provided it does so on a rational basis rather than by simply disregarding qualified opinion evidence without reason.
:::

### How this actually runs

<MicroTree
  input="A party wants to lead a witness's opinion, rather than their direct perception, on a point before the Court"
  :gates="[
    { q: 'Does the question require specialised knowledge — foreign law, science, art, any other field, handwriting or finger-print identity, or information in electronic or digital form?', no: 'not expert-opinion evidence under section 39 — an ordinary witness may still testify to what they directly perceived' },
    { q: 'Is the witness specially skilled in that field, or, for electronic or digital-form matters, the statutorily designated Examiner of Electronic Evidence under section 79A of the Information Technology Act, 2000?', no: 'the opinion is not relevant under section 39 — a lay opinion on a specialised question does not qualify merely because the witness is confident in it' }
  ]"
  result="the opinion is relevant as expert evidence"
  caveat="relevance under section 39 only gets the opinion through the door — the Court still independently weighs it, and is never bound to accept even a genuinely qualified expert's conclusion over other evidence"
  resultKind="mixed"
/>

### In plain English

**This is the one place ordinary witnesses are deliberately overridden.** Everywhere else in this Act, a witness testifies to what they saw, heard, or otherwise perceived — section 39 is the specific, bounded exception that lets a witness's conclusion itself become evidence, because some questions genuinely cannot be answered from lay perception alone.

**The electronic-evidence limb is a modern graft onto an old doctrine.** Toxicology and handwriting identification were always obvious candidates for expert opinion; the Examiner of Electronic Evidence reflects a newer problem — computer forensics — solved by pointing directly at an office already created under a different statute rather than litigating each witness's qualifications afresh.

**Being an expert never means being believed automatically.** Qualification under section 39 answers only whether the opinion is relevant; whether the court actually accepts it is a completely separate question the court answers by weighing the opinion against everything else in the case.

### What changed from the Indian Evidence Act

**Indian Evidence Act, 1872, ss. 45, 45A → BSA 2023, s. 39(1), (2).**

::: info Verify before citing
The commonly reported mapping is IEA s. 45 (opinions of experts, including foreign law, science, art, handwriting, and finger impressions) → BSA s. 39(1), and IEA s. 45A (opinion of Examiner of Electronic Evidence, inserted into the old Act by later information-technology-related amendments) → BSA s. 39(2). No verified local copy of the 1872 Act's text, or of the amending provision that is believed to have inserted s. 45A, is held in `reference/`. Confirm both before quoting either in a filing.
:::

**Delta bucket: renumbered with drafting changes.** Two previously separate old-Act sections (45 and 45A, if the reported history is accurate) appear consolidated into two numbered sub-sections of one BSA section; treat this as a structural consolidation similar in kind, though smaller in scale, to the merger already flagged at BSA s. 23 in the confessions cluster, until the old Act's actual text confirms or corrects this.

### Test your instinct

::::instinct Dr. Mehra's toxicology opinion
Dr. Mehra is a qualified forensic toxicologist with years of specialised training and experience in identifying poison-related symptoms. She offers her opinion on the symptoms consistent with the poison the prosecution alleges was used.

Is Dr. Mehra's opinion relevant under section 39?

:::ruling Reveal the ruling
Yes. The question — the symptoms produced by a particular poison — is a point of science, and Dr. Mehra is specially skilled in that field through her professional training and experience. Her opinion is relevant expert evidence, though the court will still separately weigh how persuasive it is against the rest of the evidence in the case.
::::

::::instinct The confident amateur
A witness with no formal training, but who has read extensively online about a particular field of forensic science as a hobby, wants to offer a confident opinion on the same technical question Dr. Mehra was asked about.

Does the amateur's opinion qualify as expert evidence under section 39?

:::ruling Reveal the ruling
No. However confident or well-read the witness may be, section 39 requires the witness to be specially skilled in the relevant field, which ordinarily means genuine specialised training, study, or professional experience — not general enthusiasm or self-directed reading. The amateur's opinion is not relevant as expert evidence under this section; it does not become expert testimony merely because the witness believes it to be accurate.
::::

### Practitioner HUD — operational realities

#### The winning ratio

No single case is promoted here. The proposition that expert opinion is advisory and never binds the court is well established in Indian evidence law, but no specific citation is recalled with the certainty this project's citation rule requires, so none is promoted rather than risking an imprecise one.

#### Sword and shield

| Used offensively (party relying on expert opinion) | Used defensively (party resisting it) |
|---|---|
| Establish the witness's specific qualifications, training, and experience in the precise field the opinion concerns, rather than relying on general credentials in an adjacent area. | Challenge the witness's actual specialised skill in cross-examination before attacking the substance of the opinion — a successful qualification challenge removes the opinion from evidence entirely. |
| For electronic or digital-form matters, invoke the section 39(2) shortcut directly through the statutorily designated Examiner of Electronic Evidence rather than separately proving that individual's expert qualifications. | Even where the opinion is admitted, argue for its weight to be discounted by testing the underlying methodology and data on cross-examination, since relevance is never the same as conclusiveness. |

#### The limitation clock

None as a filing deadline. The practical timing point is that a challenge to a witness's expert qualifications should be raised at the point the opinion is tendered, so the court can rule on admissibility before the substance of the opinion has already shaped the record.

#### Interlocking matrix

| This provision | Interlocks with | Why |
|---|---|---|
| S. 39(2) | Chapter V's electronic-records cluster, BSA ss. 61–63 | An Examiner of Electronic Evidence's opinion under s. 39(2) is a separate question from whether the underlying electronic record itself has been properly proved under Chapter V's certificate regime — both hurdles must be cleared independently. |
| S. 39 | Section 45 of this same file | Once an expert's opinion is relevant under s. 39, s. 45 separately makes the grounds on which that opinion is based relevant too — the two sections work as a pair, covered further later in this file. |

#### The authorities

No confidently recalled leading authority is promoted for this cluster; practitioners should verify current commentary and recent decisions on the standard for qualifying an expert witness, and on the role of the Examiner of Electronic Evidence, before relying on any specific precedent in argument.

#### Strategy and drafting

Lead a witness's qualifications thoroughly and early, before any substantive opinion is elicited — a court that has not been shown why a witness is specially skilled may treat the entire opinion as inadmissible rather than merely unpersuasive. When resisting expert evidence, prefer a focused qualification challenge over a broad relevance objection; the qualification route removes the opinion outright, while a relevance objection alone rarely succeeds once the subject-matter plainly falls within science, art, or one of section 39's other named fields.

## Section 40 — facts that support or contradict an expert's opinion

### The dispute this solves

::: oneminute Did the same poison do this to other people too?
Continuing the poisoning trial, the defence wants to introduce evidence that other people who were separately exposed to the same poison exhibited symptoms the prosecution's expert says are consistent with it — supporting the expert's opinion. In an unrelated harbour-obstruction dispute, one side wants to show that other harbours, similarly situated but without the disputed sea-wall, also became obstructed around the same time — a fact that would undercut the opposing expert's opinion that the sea-wall specifically caused the obstruction.
:::

::: story Facts that would otherwise be irrelevant, admitted because an expert opinion is in play
Section 40 is short but operationally important: it makes facts relevant — facts that would not otherwise matter to the case at all — purely because they support or are inconsistent with an expert opinion that is itself already relevant under section 39. Without section 40, a party testing an expert's opinion would be confined to cross-examining the expert directly; this section allows independent factual evidence to be brought in specifically to corroborate or undercut that opinion.
:::

### The Act, decompiled

> **Section 40 — Facts bearing upon opinions of experts.** Facts, not otherwise relevant, are relevant if they support or are [[!inconsistent with]] the opinions of experts, when such opinions are relevant.

*Illustrations.* The question is, whether A was poisoned by a certain poison. The fact that other persons, who were poisoned by that poison, exhibited certain symptoms which experts affirm or deny to be the symptoms of that poison, is relevant. The question is, whether an obstruction to a harbour is caused by a certain sea-wall. The fact that other harbours similarly situated in other respects, but where there were no such sea-walls, began to be obstructed at about the same time, is relevant.

| Statutory phrase | Deconstruction | Practical effect |
|---|---|---|
| "not otherwise relevant" | **Section 40 is itself the source of relevance**, not a mere procedural gateway | Without this section, the corroborating or contradicting fact would have no independent basis for admission at all. |
| "support or are inconsistent with" | **Symmetrical — cuts both ways** | The section is equally available to the party relying on the expert opinion and to the party attacking it. |

::: proviso Section 40 depends entirely on the expert opinion already being relevant
This section has no independent life of its own — it only operates once an expert opinion has already cleared section 39's threshold. A fact offered to support or contradict a lay opinion that was never properly qualified as expert evidence in the first place gets no assistance from section 40.
:::

### How this actually runs

<MicroTree
  input="A party wants to lead a fact that would not otherwise be relevant to the case"
  :gates="[
    { q: 'Is there an expert opinion already relevant under section 39 in this proceeding?', no: 'section 40 has nothing to operate on — the fact must find some other basis for relevance, if any exists' },
    { q: 'Does the fact support, or is it inconsistent with, that expert opinion?', no: 'not relevant under section 40 — an unrelated fact does not become relevant merely because an expert has given evidence somewhere in the case' }
  ]"
  result="the fact is relevant under section 40, purely because of its bearing on the expert opinion"
  caveat="section 40 is available to both sides equally — the party relying on the opinion may corroborate it, and the party resisting it may use the same section to undercut it"
  resultKind="mixed"
/>

### In plain English

**Section 40 is the tool for fighting an expert opinion with facts, not just cross-examination.** Rather than being limited to attacking the expert's credibility or reasoning directly, a party can bring in entirely independent factual evidence that either backs up or undermines what the expert concluded.

**It only works while the expert opinion itself is still standing.** If the underlying opinion is never properly qualified as expert evidence under section 39, there is no opinion for a section 40 fact to support or contradict.

### What changed from the Indian Evidence Act

**Indian Evidence Act, 1872, s. 46 → BSA 2023, s. 40.**

::: info Verify before citing
The commonly reported mapping is IEA s. 46 → BSA s. 40, with both illustrations (the poisoning-symptom illustration and the harbour sea-wall illustration) reported as carried over essentially unchanged. No verified local copy of the 1872 Act's text is held in `reference/`. Confirm before quoting.
:::

**Delta bucket: renumbered only.** No drafting change of substance is apparent in the decompiled text against the commonly reported old-Act wording.

### Test your instinct

::::instinct The sea-wall counter-evidence
The plaintiff's expert opines that the disputed sea-wall caused the harbour obstruction. The defendant wants to show that other, similarly situated harbours without any such sea-wall became obstructed at about the same time.

Is this counter-evidence relevant?

:::ruling Reveal the ruling
Yes, under section 40, exactly as the Act's own illustration describes. The fact that comparable harbours without the sea-wall suffered the same obstruction around the same time is inconsistent with the plaintiff's expert opinion that the sea-wall specifically was the cause, and is therefore relevant even though it would otherwise have nothing to do with this particular harbour dispute.
::::

### Practitioner HUD — operational realities

#### The winning ratio

No single case is promoted here. Section 40 is a short, mechanical provision whose two illustrations do essentially all of the interpretive work; no specific authority is confidently recalled for this narrow point.

#### Sword and shield

| Used offensively (party relying on the opinion) | Used defensively (party attacking it) |
|---|---|
| Proactively gather corroborating factual evidence — comparable cases, comparable conditions elsewhere — to reinforce a favourable expert opinion before it can be undercut. | Search for comparable situations that produced a different outcome without the factor the opposing expert blames, exactly as in the harbour illustration, to directly undercut the opinion's causal claim. |

#### The limitation clock

None. This is a pure relevance rule with no procedural timing element beyond the general rule that evidence should be led during the appropriate stage of trial.

#### Interlocking matrix

| This provision | Interlocks with | Why |
|---|---|---|
| S. 40 | Section 39 of this same file | Section 40 has no independent operation without a section 39 expert opinion already on the record — the two provisions must be read and pleaded together. |

#### The authorities

No confidently recalled leading authority is promoted for this section.

#### Strategy and drafting

When challenging an expert opinion, do not rely solely on cross-examination — actively search for comparable real-world instances that either support or contradict the opinion's underlying causal or diagnostic claim, since section 40 makes such facts independently admissible regardless of how the cross-examination goes.

## Sections 41 to 42 — handwriting, electronic signatures, and general custom or right

### The dispute this solves

::: oneminute Kiran's disputed signature
Kiran contests a will, insisting the signature on it is not her late uncle's. No handwriting examiner ever saw the uncle write. But his usual banker had corresponded with him for years and instantly recognises the signature style from that correspondence — is that banker's opinion good enough to prove or disprove the signature, without ever having watched the uncle hold a pen?
:::

::: story Familiarity earned through paper, not through watching a pen move
Sections 41 and 42 both answer the same underlying question from different angles: when nobody with formal forensic training is available, whose ordinary, real-world familiarity with a person's handwriting, signature system, or community custom is good enough for the court to hear as opinion evidence? The Act's answer is broader than instinct suggests — correspondence and habitual business dealing count exactly as much as having watched the act itself.
:::

### The Act, decompiled

> **41.(1)** When the Court has to form an opinion as to the person by whom any document was written or signed, the opinion of any person [[=acquainted with the handwriting]] of the person by whom it is supposed to be written or signed that it was or was not written or signed by that person, is a relevant fact.
>
> *Explanation.—*A person is said to be acquainted with the handwriting of another person when he has seen that person write, or when he has received documents purporting to be written by that person in answer to documents written by himself or under his authority and addressed to that person, or when, [[=in the ordinary course of business]], documents purporting to be written by that person have been habitually submitted to him.
>
> *Illustration.* The question is, whether a given letter is in the handwriting of A, a merchant in Itanagar. B is a merchant in Bengaluru, who has written letters addressed to A and received letters purporting to be written by him. C is B's clerk whose duty it was to examine and file B's correspondence. D is B's broker, to whom B habitually submitted the letters purporting to be written by A for the purpose of advising him thereon. The opinions of B, C and D on the question whether the letter is in the handwriting of A are relevant, though neither B, C nor D ever saw A write.
>
> **(2)** When the Court has to form an opinion as to the electronic signature of any person, the opinion of the [[=Certifying Authority]] which has issued the Electronic Signature Certificate is a relevant fact.
>
> **42.** When the Court has to form an opinion as to the existence of any general custom or right, the opinions, as to the existence of such custom or right, of persons who would be likely to know of its existence if it existed, are relevant.
>
> *Explanation.—*The expression "general custom or right" includes customs or rights common to any considerable class of persons.
>
> *Illustration.* The right of the villagers of a particular village to use the water of a particular well is a general right within the meaning of this section.

| Text | What it does | Why it matters |
|---|---|---|
| "acquainted with the handwriting" (s. 41(1)) — three routes in the Explanation | Defines who may give a handwriting opinion without ever having watched the person write | Personal observation is only one of three qualifying routes; correspondence and habitual business submission qualify equally |
| "in the ordinary course of business... habitually submitted" | The business-familiarity route to handwriting acquaintance | Mirrors the trustworthiness logic already seen in s. 26(b)'s business-record exception — repetition substitutes for direct observation |
| "electronic signature... Certifying Authority" (s. 41(2)) | The digital-age counterpart to s. 41(1) | The statutorily designated issuer of the certificate, not any technician, is the relevant opinion-giver |
| "general custom or right... likely to know" (s. 42) | Lets community-knowledge opinion prove the existence of a custom or right | The opinion-giver need not be a party or a professional — only someone plausibly positioned to know |

::: proviso The Explanation to s. 41(1) is exhaustive of the routes it names, not of every conceivable route
The three routes given — seeing the person write, corresponent's-eye familiarity, and habitual business submission — are the ones the Act spells out. A witness who satisfies none of them, however confident, has not shown the "acquaintance" section 41(1) requires.
:::

### How this actually runs

<MicroTree
  input="A party wants a witness's opinion on whose handwriting or signature a document bears, or on the existence of a general custom or right"
  :gates="[
    { q: 'Is the question about handwriting or an electronic signature?', no: 'go to the section 42 branch — is the question instead about the existence of a general custom or right likely to be known by persons in that position?' },
    { q: 'For handwriting: has the witness seen the person write, corresponded with them directly, or habitually received documents from them in the ordinary course of business? For an electronic signature: is the opinion that of the Certifying Authority that issued the certificate?', no: 'the opinion does not qualify under section 41 — a secondhand or general impression of a handwriting style, without any of the three routes, is not acquaintance within the section' }
  ]"
  result="the opinion is relevant under section 41 or section 42, as applicable"
  caveat="qualifying under sections 41 or 42 makes the opinion admissible evidence — it does not compel the court to accept it over other proof, including a forensic handwriting comparison under section 39"
  resultKind="mixed"
/>

### In plain English

**Handwriting acquaintance is broader than most people assume.** A banker who has exchanged years of correspondence, or a clerk who has habitually filed someone's incoming letters, qualifies just as much as someone who has literally watched the person hold a pen — the statute values reliable familiarity over the accident of having been physically present.

**Section 41(2) simply modernises section 41(1) for a signature that has no handwriting at all.** An electronic signature cannot be visually compared the way ink can; the Act routes the opinion to the Certifying Authority that issued the certificate, because that is the entity with actual technical knowledge of the signature's validity.

**Section 42 borrows the same logic for customs and rights.** Nobody signs a custom, so there is no handwriting to examine — but someone embedded in the community that lives by the custom is positioned to know whether it genuinely exists, and that positional knowledge is what the section values.

### What changed from the Indian Evidence Act

**Indian Evidence Act, 1872, s. 47 → BSA 2023, s. 41(1); s. 47A → s. 41(2); s. 48 → s. 42.**

::: info Verify before citing
The commonly reported mapping places IEA s. 47 (opinion as to handwriting) at BSA s. 41(1), IEA s. 47A (opinion as to electronic signature, itself an information-technology-era insertion into the old Act) at BSA s. 41(2), and IEA s. 48 (opinion as to existence of general custom or right) at BSA s. 42, continuing the same offset pattern already observed running through this chapter. No verified local copy of the 1872 Act's text is held in `reference/`. Confirm each mapping before quoting it in a filing.
:::

**Delta bucket: renumbered only**, on the currently available information — the substantive tests for handwriting acquaintance, electronic-signature opinion, and custom-or-right opinion each appear to carry forward without drafting change, only the section numbers shift.

### Test your instinct

::::instinct The broker who never watched A write
D is a broker who, in the ordinary course of business, habitually received letters purporting to be written by A and advised B on their basis — but D never once saw A write or correspond with A directly.

Can D give a relevant opinion under section 41(1) on whether a disputed letter is in A's handwriting?

:::ruling Reveal the ruling
Yes. The Explanation to section 41(1) recognises habitual business submission as an independent, self-sufficient route to acquaintance — it does not require that the witness have also seen the person write or corresponded with them directly. D's opinion is relevant precisely as illustrated in the Act's own example.
::::

::::instinct The secondhand impression
A witness recalls a colleague once mentioning, in passing years ago, that a certain person "writes with a very distinctive slant." The witness has never seen a sample of that handwriting and has never corresponded with or received documents from that person.

Does the witness's impression qualify as an acquainted opinion under section 41(1)?

:::ruling Reveal the ruling
No. None of the Explanation's three routes are satisfied — the witness has not seen the person write, has not corresponded with them, and has not habitually received their documents in the ordinary course of business. A secondhand, hearsay-level impression of someone else's handwriting style does not amount to the acquaintance section 41(1) requires, however sincerely the witness holds it.
::::

### Practitioner HUD — operational realities

#### The winning ratio

No single case is promoted here. The three-route test in the Explanation to section 41(1) is well settled in Indian evidence practice, but no specific citation is recalled with the certainty this project's citation rule requires, so none is promoted rather than risking an imprecise one.

#### Sword and shield

| As a sword | As a shield |
|---|---|
| Establish a witness's qualifying acquaintance under one of the Explanation's three routes before eliciting the substantive handwriting opinion, so the opinion is not later struck as unqualified. | Attack the specific route claimed — for example, showing the alleged correspondence was in fact one-way, or that the "habitual" submission was in truth a single isolated instance — to defeat acquaintance before the opinion is ever weighed. |

#### The limitation clock

None. This is a relevance rule with no procedural timing element beyond the general rule that a challenge to a witness's qualifying acquaintance should be raised when the opinion is tendered.

#### Interlocking matrix

| This provision | Interlocks with | Why |
|---|---|---|
| S. 41(1) | Section 39 of this same file | A forensic handwriting-expert opinion under section 39 and a lay-acquaintance opinion under section 41(1) can both be led on the same disputed document; they are independent, cumulative routes to the same conclusion, not alternatives that exclude each other. |
| S. 41(2) | Section 63 of this Act (electronic records) | A disputed electronic signature typically also raises the certificate-and-authentication requirements for electronic records generally; the two are commonly litigated together. |

#### The authorities

No confidently recalled leading authority is promoted for this section.

#### Strategy and drafting

Plead the specific Explanation route relied upon by name — "seen write," "corresponded with," or "habitually submitted in the ordinary course of business" — rather than asserting bare "acquaintance," since a vague claim invites a focused cross-examination that can knock out the opinion entirely by showing no single route is actually satisfied.

## Sections 43 to 45 — usages and tenets, relationship by conduct, and grounds of opinion

### The dispute this solves

::: oneminute A trust nobody wrote a rulebook for, and a couple everyone assumed were married
A dispute over who governs a small religious trust turns on customary practice nobody ever wrote down — who has special knowledge of how such foundations are usually run? Separately, in a family-property dispute, a party wants to prove two people were married purely because their entire social circle always treated them as husband and wife. In a third, unrelated matter, an expert is challenged: why should the court believe the opinion at all, rather than just the conclusion?
:::

::: story Community reputation proves some things and is deliberately barred from proving one thing
Sections 43 and 44 both let opinion built from lived community familiarity — of a body's usages, a foundation's governance, or a family's own conduct — stand in for direct proof. Section 44 then draws one sharp, deliberate line: that same reputation-by-conduct opinion is not enough, by itself, to prove a marriage in a Divorce Act proceeding or in a Bharatiya Nyaya Sanhita bigamy prosecution. Section 45 closes the cluster by making the grounds of any opinion — not just the conclusion — independently relevant, so an opinion can always be tested against its own reasoning.
:::

### The Act, decompiled

> **43.** When the Court has to form an opinion as to—(i) the usages and tenets of any body of men or family; (ii) the constitution and governance of any religious or charitable foundation; or (iii) the meaning of words or terms used in particular districts or by particular classes of people, the opinions of persons having [[=special means of knowledge]] thereon, are relevant facts.
>
> **44.** When the Court has to form an opinion as to the relationship of one person to another, the opinion, expressed by conduct, as to the existence of such relationship, of any person who, as a member of the family or otherwise, has special means of knowledge on the subject, is a relevant fact: [[!Provided that such opinion shall not be sufficient to prove a marriage in proceedings under the Divorce Act, 1869, or in prosecution under sections 82 and 84 of the Bharatiya Nyaya Sanhita, 2023]].
>
> *Illustrations.* (a) The question is, whether A and B were married. The fact that they were usually received and treated by their friends as husband and wife, is relevant. (b) The question is, whether A was the legitimate son of B. The fact that A was always treated as such by members of the family, is relevant.
>
> **45.** Whenever the opinion of any living person is relevant, the [[=grounds on which such opinion is based]] are also relevant.
>
> *Illustration.* An expert may give an account of experiments performed by him for the purpose of forming his opinion.

| Text | What it does | Why it matters |
|---|---|---|
| "usages and tenets... religious or charitable foundation... meaning of words" (s. 43(i)-(iii)) | Three named categories where community-embedded special knowledge is relevant opinion | Covers exactly the questions a formal expert is unlikely to be trained in, but a community insider plainly is |
| "opinion, expressed by conduct... relationship" (s. 44) | Lets reputation-by-conduct stand in for direct proof of a family relationship | The general rule is broad — reputation is usually good enough |
| The section 44 proviso — Divorce Act, 1869 and BNS ss. 82/84 | Carves out marriage-proof specifically in those two contexts | A deliberate, named exception, not an oversight — bigamy and matrimonial-status cases demand a stricter mode of proof than everyday reputation |
| "grounds on which such opinion is based" (s. 45) | Makes the reasoning behind any relevant opinion independently relevant | Lets a party test the opinion's foundation, not just take the conclusion on faith |

::: proviso Section 44's proviso does not touch section 43 or the general rule in section 44 itself
Reputation-by-conduct remains good evidence of a family relationship in the ordinary run of civil cases — inheritance, maintenance, and the like. The proviso removes only two named contexts: proving a marriage under the Divorce Act, 1869, and prosecutions under the two named Bharatiya Nyaya Sanhita, 2023 sections. Outside those two contexts, illustration (a) still applies at full strength.
:::

### How this actually runs

<MicroTree
  input="A party wants to lead an opinion on community usage, foundation governance, a family relationship shown by conduct, or the grounds behind an already-relevant opinion"
  :gates="[
    { q: 'Does the witness have special means of knowledge on a body usage, a foundation constitution, or a district or class meaning of words, or special means of knowledge on a family relationship shown through conduct?', no: 'the opinion is not relevant under section 43 or section 44 — general familiarity without a special means of knowledge on the specific subject does not qualify' },
    { q: 'If the relationship-by-conduct opinion under section 44 is being used to prove a marriage, is the proceeding a Divorce Act, 1869 matter or a prosecution under Bharatiya Nyaya Sanhita sections 82 or 84?', no: 'the section 44 opinion may stand on its own to prove the relationship' }
  ]"
  result="the opinion is relevant, but in the two named marriage-proof contexts it cannot stand alone"
  caveat="section 45 separately makes the grounds behind any of these opinions relevant too, so a bare conclusion without disclosed reasoning invites a direct challenge to the reasoning itself"
  resultKind="mixed"
/>

### In plain English

**Sections 43 and 44 both trust the community over the stranger.** Whether the question is a religious foundation's internal governance, the meaning of a local term, or whether a family always treated two people as married, the Act prefers the opinion of someone actually embedded in that community over a formally credentialed outsider who has never encountered the specific practice.

**The section 44 proviso is a deliberate, narrow exception, not a general suspicion of reputation evidence.** Marriage proof in a Divorce Act proceeding or a bigamy prosecution needs a firmer foundation than "everyone treated them as married" — because the legal and criminal consequences of getting marital status wrong in those two specific settings are severe enough that the Act insists on something more than social reputation alone.

**Section 45 is the safety valve on every opinion in this cluster, and in section 39 too.** An opinion is never just a bare conclusion to be accepted or rejected wholesale — the grounds behind it are always independently fair game, so a court (and the opposing advocate) can test the reasoning rather than merely the label.

### What changed from the Indian Evidence Act

**Indian Evidence Act, 1872, s. 49 → BSA 2023, s. 43; s. 50 → s. 44; s. 51 → s. 45.**

::: info Verify before citing
The commonly reported mapping places IEA s. 49 (opinion as to usages, tenets, etc.) at BSA s. 43, IEA s. 50 (opinion on relationship, when relevant) at BSA s. 44, and IEA s. 51 (grounds of opinion, when relevant) at BSA s. 45, continuing the same section-shift pattern already observed through this chapter. The Divorce Act, 1869 reference in the section 44 proviso is understood to carry forward from the old Act; the Bharatiya Nyaya Sanhita, 2023 ss. 82 and 84 reference replaces whatever the corresponding Indian Penal Code bigamy sections were in the old Act's proviso. No verified local copy of the 1872 Act's text, and no verified cross-reference table for the Bharatiya Nyaya Sanhita's own sections 82 and 84, is held in `reference/`. Confirm all of this before quoting it in a filing.
:::

**Delta bucket: renumbered only**, on the currently available information for ss. 43 and 45; **renumbered with an updated cross-reference** for s. 44, whose proviso now points to the Bharatiya Nyaya Sanhita, 2023 rather than whatever criminal-code provision the old Act's proviso pointed to — the underlying rule that reputation alone cannot prove marriage in these two contexts appears unchanged.

### Test your instinct

::::instinct The trust nobody wrote a rulebook for
A senior member of a small religious trust, who has spent decades participating in and observing how the trust selects its trustees and manages its charitable funds, is asked for an opinion on the trust's customary governance practice, which was never reduced to a written constitution.

Is that opinion relevant under section 43?

:::ruling Reveal the ruling
Yes. Section 43(ii) makes the opinion of a person with special means of knowledge on the constitution and governance of a religious or charitable foundation relevant, and decades of direct participation and observation is exactly the kind of special means of knowledge the section contemplates — a formal written constitution is not a precondition.
::::

::::instinct The couple everyone assumed were married — in a bigamy prosecution
In a bigamy prosecution under the Bharatiya Nyaya Sanhita, 2023, the prosecution wants to prove the accused's first marriage purely by showing that the accused and the first partner were always received and treated by their friends and family as husband and wife.

Is that reputation-by-conduct evidence, standing alone, sufficient to prove the first marriage under section 44?

:::ruling Reveal the ruling
No. The proviso to section 44 specifically excludes reliance on this kind of opinion, standing alone, to prove a marriage in a prosecution under Bharatiya Nyaya Sanhita sections 82 or 84. However genuine and widespread the social reputation was, the prosecution must prove the first marriage through some firmer mode of proof — the reputation evidence, by itself, is not enough in this particular proceeding, even though the identical evidence would freely support a marriage finding in an ordinary civil dispute over property or maintenance.
::::

### Practitioner HUD — operational realities

#### The winning ratio

No single case is promoted here. The rule that reputation evidence cannot stand alone to prove marriage in a bigamy prosecution is well established in Indian criminal-evidence practice, but no specific citation is recalled with the certainty this project's citation rule requires, so none is promoted rather than risking an imprecise one.

#### Sword and shield

| As a sword | As a shield |
|---|---|
| In an ordinary civil dispute, lead reputation-by-conduct evidence of a family or marital relationship early and confidently — section 44 gives it real, freestanding weight outside the two excluded contexts. | In a bigamy prosecution or Divorce Act proceeding, object specifically to any attempt to prove the marriage through reputation evidence alone, and insist the proponent produce the firmer proof the proviso demands. |

#### The limitation clock

None. This is a pure relevance rule with no procedural timing element beyond the general rule that objections to the mode of proving a relationship should be raised when that evidence is tendered.

#### Interlocking matrix

| This provision | Interlocks with | Why |
|---|---|---|
| S. 44 proviso | Bharatiya Nyaya Sanhita, 2023, ss. 82 and 84 | The proviso's marriage-proof exclusion is defined by reference to these two BNS sections; confirming their content is necessary before relying on or resisting the proviso. |
| S. 45 | Section 39 of this file | Section 45 makes the grounds behind any relevant opinion independently relevant, which applies with particular force to expert opinions already admitted under section 39 — the two provisions are routinely pleaded together. |

#### The authorities

No confidently recalled leading authority is promoted for this section.

#### Strategy and drafting

When relying on section 44 to prove a marriage, check first whether the proceeding falls within the proviso's two named exceptions — a Divorce Act, 1869 matter or a Bharatiya Nyaya Sanhita ss. 82/84 prosecution — before building a case on reputation evidence alone, since discovering the exclusion applies only after the reputation evidence has been led wastes the opportunity to marshal firmer proof in time.

## Chapter II (part V) consolidation — is this opinion evidence, and can it stand on its own?

1. **Is the question one a lay witness could answer from direct perception alone?** If yes, no expert-opinion provision in this cluster is needed — ordinary witness testimony governs. If the question needs specialised knowledge (foreign law, science, art, handwriting, finger impressions, or electronic/digital-form matters), move to section 39.
2. **Is the witness offering the opinion actually qualified under section 39** — specially skilled in the named field, or, for electronic evidence, the statutorily designated Examiner? If not qualified, the opinion does not get through the door at all, regardless of confidence.
3. **Once a section 39 opinion is on the record, is there independent factual evidence that would support or contradict it?** If so, section 40 makes that evidence relevant even though it would otherwise have nothing to do with the case.
4. **If the opinion instead concerns handwriting, an electronic signature, a general custom or right, community usages, foundation governance, word meaning, or a relationship shown by conduct**, check the specific qualifying route under sections 41 to 44 — acquaintance, Certifying Authority status, or special means of knowledge, as applicable.
5. **If the section 44 opinion is being used to prove a marriage**, check whether the proceeding is a Divorce Act, 1869 matter or a Bharatiya Nyaya Sanhita ss. 82/84 prosecution — if so, the opinion cannot stand alone and firmer proof is required.
6. **Whatever opinion survives gates 1 to 5, has its underlying reasoning been disclosed?** Section 45 makes the grounds of the opinion independently relevant, so the opinion's foundation — not just its conclusion — is always open to scrutiny.