# Chapter II — Relevancy of Facts (II): admissions and confessions

This second file in Chapter II covers sections 15 to 25: the admissions cluster (what counts as an admission, who can make one that binds a party, how admissions are proved, and their limits in civil cases) and the confessions cluster (the special, stricter exclusionary rules that apply once an admission is made by an accused person in a criminal proceeding). The two clusters share a family resemblance — both are about a person's own out-of-court words being used against them — but confessions carry a much heavier apparatus of protection, because the risk of a coerced or unreliable confession is the oldest and most dangerous failure mode in criminal evidence law. Statements by persons who cannot be called as witnesses, including dying declarations, follow in a later file.

## Sections 15 to 18 — what counts as an admission, and who can make one that binds a party

### The dispute this solves

::: oneminute Bharat's own words are quoted back at him
Farhan, prosecuting Anita's civil claim, wants to read out a text message Bharat sent to a friend: "I never sent the shipment because I was short on stock." Chetan cannot dispute that Bharat sent it, but asks a more basic question — why should Bharat's own casual, out-of-court words to a friend carry any special evidentiary status at all, when an ordinary witness's out-of-court statement would face a much harder road into evidence? The answer is that this Act treats a party's own statement about the matter in dispute as its own named category — an **admission** — with its own definition and its own list of exactly who can make one that binds whom. Whether Bharat's message qualifies, and whether it binds only Bharat or also anyone acting for him, depends entirely on sections 15 to 18, not on how casually or formally it was said.
:::

::: story One definition, three categories of person
Section 15 defines an admission in the abstract: a statement — oral, documentary, or electronic — that suggests an inference about a fact in issue or a relevant fact, made by one of the persons the following sections name. Sections 16 to 18 are that list. Section 16 covers a party to the proceeding, or their authorised agent, with two carve-outs: a statement made by someone suing or sued in a representative capacity (as an executor, trustee, or agent) only counts if made while they held that capacity, and a statement by someone with a proprietary or pecuniary interest in the subject-matter only counts if made while that interest continued. Section 17 covers a third party whose position or liability the case requires proving — their own out-of-court statement about that position or liability can be used against the party who relies on it. Section 18 covers a person a party has expressly pointed the other side toward for information — "go and ask C, C knows all about it" makes C's answer usable against the party who sent the enquirer to C.
:::

### The Act, decompiled

> **Section 15 — Admission defined.** An [[=admission]] is a statement, oral or documentary or contained in electronic form, which suggests any inference as to any fact in issue or relevant fact, and which is made by any of the persons, and under the circumstances, hereinafter mentioned.
>
> **Section 16 — Admission by party to proceeding or his agent.** (1) Statements made by a party to the proceeding, or by an agent to any such party, whom the Court regards, under the circumstances of the case, as expressly or impliedly authorised by him to make them, are admissions.
>
> (2) Statements made by— (i) parties to suits suing or sued in a representative character, are not admissions, unless they were made while the party making them held that character; or (ii)(a) persons who have any proprietary or pecuniary interest in the subject matter of the proceeding, and who make the statement in their character of persons so interested; or (b) persons from whom the parties to the suit have derived their interest in the subject matter of the suit, are admissions, if they are made during the continuance of the interest of the persons making the statements.
>
> **Section 17 — Admissions by persons whose position must be proved as against party to suit.** Statements made by persons whose position or liability, it is necessary to prove as against any party to the suit, are admissions, if such statements would be relevant as against such persons in relation to such position or liability in a suit brought by or against them, and if they are made whilst the person making them occupies such position or is subject to such liability.
>
> **Section 18 — Admissions by persons expressly referred to by party to suit.** Statements made by persons to whom a party to the suit has expressly referred for information in reference to a matter in dispute are admissions.

| Statutory phrase | Deconstruction | Practical effect |
|---|---|---|
| "expressly or impliedly authorised by him to make them" (s. 16(1)) | An **agent's admission only binds if authority is shown** | A stray remark by someone loosely connected to a party does not automatically bind the party — the Court must find actual or implied authority to speak on the matter. |
| "suing or sued in a representative character... unless made while... held that character" (s. 16(2)(i)) | **Capacity-matching requirement** | A person's purely personal statement, made before or unrelated to their taking on a representative role (executor, trustee), does not bind the estate or trust they later represent. |
| "during the continuance of the interest" (s. 16(2)(ii)) | **Interest must be live at the time of the statement** | A predecessor-in-interest's statement only counts as an admission against a successor if it was made while the predecessor still held the interest — a statement made after they had already parted with it does not qualify. |

::: proviso Section 16(2) is a capacity filter, not a credibility filter
The representative-character and continuing-interest carve-outs in section 16(2) do not ask whether the statement is honest or reliable — they ask a narrower, structural question: was the maker wearing the relevant hat, or holding the relevant interest, at the moment they spoke? A perfectly candid statement made by an executor before their appointment, or by a former owner after they sold their interest, still fails this section, because the capacity or interest that would make it binding was not yet, or no longer, present.
:::

### How this actually runs

<MicroTree
  input="A statement is offered as an admission against a party"
  :gates="[
    { q: 'Was it made by the party themselves, or by an agent the Court finds authorised to speak on the matter (s. 16(1))?', note: 'if the party spoke in a representative capacity or from a proprietary/pecuniary interest, s. 16(2) requires that capacity or interest to have been live at the time', no: 'check whether it instead falls under s. 17 or s. 18 before concluding it is not an admission at all' },
    { q: 'If it does not fit s. 16, was it made by a person whose position or liability the case requires proving against the party (s. 17), or by a person the party expressly referred the other side to for information (s. 18)?', no: 'not an admission under sections 15 to 18 — it may still be relevant on some other basis, but not as an admission' }
  ]"
  result="the statement is an admission and may be proved against the party it binds"
  caveat="qualifying as an admission under sections 15 to 18 only answers who it binds — whether and by whom it may be proved is a separate question, answered by section 19"
  resultKind="mixed"
/>

### In plain English

**Section 15 is a definition, not a source of admissibility on its own.** It tells you what an admission looks like in the abstract; sections 16 to 18 tell you whose statements actually qualify.

**The three categories in sections 16 to 18 are not interchangeable routes to the same conclusion — each binds a different person.** A party's own statement binds the party (s. 16); a third party's statement about their own position binds the party relying on that position (s. 17); a referred-to informant's statement binds the party who sent the enquirer there (s. 18). Getting a statement in under the wrong category does not make it usable against the wrong person.

**Representative capacity is a trap for the unwary.** A litigator who assumes any past statement by a person who later became an executor or trustee automatically binds the estate is wrong; section 16(2) requires the statement to have been made while that person already held the representative character.

### What changed from the Indian Evidence Act

**Indian Evidence Act, 1872, ss. 17–20 → BSA 2023, ss. 15–18.**

::: info Verify before citing
The mapping IEA s. 17 → BSA s. 15, IEA s. 18 → BSA s. 16, IEA s. 19 → BSA s. 17, and IEA s. 20 → BSA s. 18 is widely and consistently reported as a straightforward renumbering, but no verified local copy of the 1872 Act's text is held in `reference/`. Confirm the old sections' precise wording before quoting it in a filing.
:::

**Delta bucket: renumbered only.** The definition of an admission and the three categories of person who can make one appear unchanged in substance from the old Act; only the section numbers have moved.

### Test your instinct

::::instinct The agent's collection-run statement
Kavita owns several rental properties and engages Rohan as her rent-collection agent. Rohan tells a tenant's guarantor, "Kavita agreed to waive this month's rent." Kavita later sues the guarantor and denies ever agreeing to any waiver.

Is Rohan's statement automatically an admission binding Kavita, simply because he was her agent?

:::ruling Reveal the ruling
Not automatically. Section 16(1) requires the Court to find that Rohan was expressly or impliedly authorised, under the circumstances, to make statements of that kind on Kavita's behalf. Collecting rent is not the same authority as agreeing to waive it — if Rohan's mandate was limited to collection, his purported waiver may fall outside his authorised scope, and the statement would not bind Kavita as an admission under section 16, whatever other consequences it might have as between Kavita and Rohan.
::::

::::instinct The executor's statement made before the will was even probated
Before her father's death, Meera told a neighbour, in a purely personal conversation, "I think the family owes the neighbour some money from an old loan." After her father's death, Meera becomes executor of his estate, and the neighbour sues the estate, seeking to use Meera's earlier statement as an admission against the estate.

Does section 16(2)(i) let the neighbour use it?

:::ruling Reveal the ruling
No. Meera made the statement before she held the representative character of executor at all — she was speaking personally, not in the capacity the estate now occupies through her. Section 16(2)(i) only treats a representative party's statement as an admission if it was made while they held that representative character; a personal remark made before the estate role even existed does not qualify, however relevant it might otherwise seem.
::::

### Practitioner HUD — operational realities

#### The winning ratio

Sections 15 to 18 are definitional and categorical rather than provisions that attract a single dominant modern ratio — the questions they raise (was there authority, was the capacity live at the time) are fact-specific determinations made case by case, not doctrinal battlegrounds settled by one leading judgment.

::: info Verify before citing
No specific authority is promoted or cited here because none can be recalled with the certainty this project's citation rule requires. If a specific, certain authority on agency authorisation for admissions is later identified, promote it here rather than leaving this gap.
:::

#### Sword and shield

| Used offensively (asserting an admission) | Used defensively (resisting an admission) |
|---|---|
| Identify precisely which of ss. 16, 17, or 18 the statement falls under, and who it therefore binds. | Challenge the maker's authority under s. 16(1), or show the representative character or interest under s. 16(2) was not yet — or no longer — live when the statement was made. |
| Use s. 18 to pull in a referred-to informant's statement without needing independent proof of that informant's authority. | Argue the party never "expressly" referred the other side to the informant — a vague or implied suggestion does not satisfy s. 18's own wording. |

#### The limitation clock

None. Sections 15 to 18 are categorical relevancy rules, not deadlines; an objection that a statement does not qualify as an admission at all should ordinarily be raised when the evidence is tendered.

#### Interlocking matrix

| This provision | Interlocks with | Why |
|---|---|---|
| S. 16 (party/agent admissions) | Section 19, below | Qualifying as an admission under s. 16 only opens the door to the separate question of who may prove it and against whom — s. 19 answers that. |
| S. 17 (third-party position/liability) | Section 26 (statements by persons who cannot be called as witnesses), a later file in this chapter | Both provisions deal with a non-party's out-of-court statement being used in the proceeding, though on entirely different tests and for different purposes. |
| S. 18 (expressly referred-to informants) | Chapter II's later character and expert-opinion sections (ss. 39–50, a later file in this chapter) | A party's own choice of whom to point the other side toward can itself carry evidentiary significance about how much the party trusted that person's knowledge. |

#### The authorities

No further authorities are promoted beyond the honest gap noted above.

#### Strategy and drafting

Before invoking an admission, name the specific section — s. 16, s. 17, or s. 18 — because each binds a different person and requires proof of a different precondition (authority, position/liability, or express reference). Before conceding one, check the representative-character and continuing-interest carve-outs in s. 16(2) — a great many apparently damaging "admissions" against estates, trusts, and successors-in-interest fail this narrow capacity-timing test on close inspection.

## Section 19 — proof of admissions: freely against the maker, rarely by the maker

### The dispute this solves

::: oneminute Bharat wants his own earlier statement read into the record — to help himself
The deed at the centre of a forgery dispute is said by Anita to be genuine and by Bharat to be forged. Bharat's advocate, Chetan, wants to prove that Bharat told several people, well before the dispute arose, "that deed looks forged to me." Farhan objects — not because the statement is false, but because a party is not ordinarily allowed to manufacture evidence in his own favour simply by pointing to his own prior out-of-court remarks. An admission is freely provable *against* the person who made it; proving it *for* that same person is a different, much narrower question, governed by section 19's own short list of exceptions.
:::

::: story The general rule, and the three doors out of it
Section 19 states the general rule plainly: admissions are relevant and may be proved against the person who made them, or their representative in interest, but that same person cannot prove their own admissions on their own behalf — except in three situations. First, where the statement is of the kind that would be relevant between third persons under section 26 if the maker were dead (broadly, statements about the cause of death or particular categories of business or professional record — the Act's own illustrations include a ship captain's contemporaneous logbook, and a letter's own date-line, each provable by the very person who made it, because either would independently qualify under section 26 were that person no longer available). Second, where the statement records the maker's own state of mind or body, made at or about the relevant time, and accompanied by conduct that makes it improbable the statement was false — an accused's own contemporaneous explanation for suspicious conduct, offered as an explanation of that conduct rather than as a bare assertion of innocence. Third, and most simply, where the statement would be relevant for some reason entirely apart from being an admission at all — in which case it comes in on that independent footing, and section 19's restriction never engages in the first place.
:::

### The Act, decompiled

> **Section 19 — Proof of admissions against persons making them, and by or on their behalf.** Admissions are relevant and may be proved as against the person who makes them, or his representative in interest; but they cannot be proved by or on behalf of the person who makes them or by his representative in interest, [[!except]] in the following cases, namely:—
>
> (1) an admission may be proved by or on behalf of the person making it, when it is of such a nature that, if the person making it were dead, it would be relevant as between third persons under section 26;
>
> (2) an admission may be proved by or on behalf of the person making it, when it consists of a statement of the existence of any [[=state of mind or body]], relevant or in issue, made at or about the time when such state of mind or body existed, and is accompanied by conduct rendering its falsehood improbable;
>
> (3) an admission may be proved by or on behalf of the person making it, if it is relevant [[=otherwise than as an admission]].

| Statutory phrase | Deconstruction | Practical effect |
|---|---|---|
| "cannot be proved by or on behalf of the person who makes them" | **The self-serving-statement bar** | A party cannot bolster their own case merely by producing evidence of their own favourable out-of-court remarks — the default assumption is that such statements are self-interested and unreliable. |
| "if the person making it were dead... under section 26" (exception 1) | **A borrowed-relevance test** | The statement is not admissible because it is an admission at all — it is admissible because it independently satisfies a different section's test, one that happens to apply a hypothetical-death standard. |
| "accompanied by conduct rendering its falsehood improbable" (exception 2) | **Contemporaneity plus corroborating conduct**, both required | A bare, unaccompanied assertion of one's own state of mind does not qualify — the statement must be tied to conduct that would make a lie about that state of mind implausible. |

::: proviso Exception (3) is not a general escape hatch
"Relevant otherwise than as an admission" does not mean "relevant for any reason a resourceful advocate can construct." It means the statement independently satisfies some other named relevancy provision in this Act on its own terms — explaining conduct already in issue (as in the Act's own illustration of an accused explaining his refusal to sell suspected stolen goods below value), for instance, rather than merely restating "I am innocent" in different words.
:::

### How this actually runs

<MicroTree
  input="A party seeks to prove their own earlier admission on their own behalf"
  :gates="[
    { q: 'Would the statement be relevant between third persons under section 26 if the maker were dead?', no: 'check the next exception before concluding the statement is barred' },
    { q: 'Does it instead record the maker’s contemporaneous state of mind or body, accompanied by conduct making its falsehood improbable?', no: 'check the last exception before concluding the statement is barred' },
    { q: 'Is it independently relevant for some reason apart from being an admission at all?', no: 'barred under section 19 — the maker may not prove their own admission on their own behalf' }
  ]"
  result="the statement may be proved by or on behalf of the person who made it"
  caveat="each of the three exceptions is narrow and fact-specific — none of them is a general licence to introduce favourable self-statements"
  resultKind="mixed"
/>

### In plain English

**The default rule protects against manufactured evidence.** If parties could freely prove their own favourable out-of-court statements, every dispute would generate a trail of convenient remarks made in anticipation of litigation — section 19 closes that door by default.

**All three exceptions share one feature: none of them rest on the statement simply being an admission.** Exception 1 borrows section 26's test; exception 2 requires contemporaneous conduct corroboration; exception 3 requires the statement to be relevant on some wholly separate basis. An advocate seeking to invoke section 19 in a client's favour must identify which of the three doors is being used, and satisfy that door's own specific requirements — not simply assert that the statement happens to be true.

**Proving one's own admission and proving a fact independently are not the same move.** Exception 3 in particular is often misunderstood as swallowing the rule; it does not — it simply recognises that section 19 was never meant to exclude evidence that would come in anyway on some unrelated ground.

### What changed from the Indian Evidence Act

**Indian Evidence Act, 1872, s. 21 → BSA 2023, s. 19.**

::: info Verify before citing
The mapping IEA s. 21 → BSA s. 19 is widely and consistently reported, including the three-exception structure and the Act's own illustrations, but no verified local copy of the 1872 Act's text is held in `reference/`. Confirm the old section's precise wording before quoting it in a filing.
:::

**Delta bucket: renumbered only.** The general rule and all three exceptions appear carried over in substance; only the section number has moved.

### Test your instinct

::::instinct The captain's logbook
A ship's captain, accused of deliberately steering his vessel off course, wants to prove entries he made in his own logbook, in the ordinary course of his duties, showing the course he actually observed.

Can he prove his own logbook entries on his own behalf?

:::ruling Reveal the ruling
Yes — but not because the entries are his own admission. They qualify under exception (1): a contemporaneous business record of this kind would be relevant as between third persons under section 26 if the captain were dead, so he may prove it himself under that borrowed relevance, exactly as the Act's own illustration contemplates.
::::

::::instinct "I refused to sell them below value" — self-serving, or explanatory?
An accused, charged with knowingly possessing stolen goods, offers to prove that he refused an offer to buy them at well below their real value — evidence he says shows he did not know they were stolen.

Is this barred as a self-serving admission under section 19's general rule?

:::ruling Reveal the ruling
No. It falls within exception (3): the refusal is relevant not because it is an admission at all, but because it is explanatory of conduct that is itself in issue — whether the accused behaved as a knowing receiver of stolen goods would. Once a statement is independently relevant on that footing, section 19's restriction on proving one's own admissions never engages.
::::

### Practitioner HUD — operational realities

#### The winning ratio

The self-serving-statement bar and its three exceptions are applied fact-specifically, illustration by illustration, rather than through a single dominant modern ratio.

::: info Verify before citing
No specific authority is promoted or cited here because none can be recalled with the certainty this project's citation rule requires.
:::

#### Sword and shield

| Used offensively (resisting the other side's self-serving statement) | Used defensively (getting one's own statement in) |
|---|---|
| Object that the statement is being offered by or on behalf of its own maker, triggering section 19's default bar. | Identify which of the three exceptions applies, and be ready to satisfy that exception's own specific test — not merely assert the statement is true. |
| Press the point that exception (3) requires independent relevance, not mere convenience. | Where conduct corroborates a contemporaneous state-of-mind statement, lead the conduct evidence alongside the statement, not the statement alone. |

#### The limitation clock

None beyond the general rule that an objection to a statement's admissibility — here, that it is a self-serving admission falling outside all three exceptions — should be raised when it is tendered.

#### Interlocking matrix

| This provision | Interlocks with | Why |
|---|---|---|
| Exception (1) | Section 26 (statements by persons who cannot be called as witnesses), a later file in this chapter | Exception (1)'s test is borrowed wholesale from section 26 — a working knowledge of section 26's categories is a precondition to using this exception. |
| Exception (2) | Section 12 (facts showing state of mind or body), covered in the previous file in this chapter | Both provisions deal with state-of-mind evidence, though section 12 asks whether the state of mind is relevant at all, while this exception asks the separate question of who may prove a party's own statement about it. |

#### The authorities

No further authorities are promoted beyond the honest gap noted above.

#### Strategy and drafting

Before offering a client's own prior statement in the client's favour, identify in one sentence which of the three section 19 exceptions is being invoked — a business or professional record under exception (1), a contemporaneous state-of-mind statement corroborated by conduct under exception (2), or independent relevance under exception (3). "It's my client's own statement and it's true" is not, by itself, a basis for admitting it on the client's behalf.

## Sections 20 to 21 — oral admissions about documents, and civil-case settlement talk

### The dispute this solves

::: oneminute "I remember what the contract said" is not the same as producing the contract
The original written contract between Anita and Bharat has been lost. Farhan wants to lead Bharat's own oral admission — "the contract said delivery was due by the 1st" — as proof of that term, without first accounting for the missing document. Separately, during a failed settlement conference, Bharat's side said "we'll pay half just to end this," and Farhan now wants to use that statement at trial as an admission of liability. Both attempts run into limits this Act places on admissions specifically — the first because oral evidence of a document's contents has its own foundational requirements, the second because civil litigation depends on parties being able to negotiate candidly without every concession becoming a weapon later.
:::

::: story Two narrow, unrelated limits on otherwise-valid admissions
Section 20 says an oral admission about what a document contains is not relevant unless the party proposing to rely on it first shows they are entitled to give secondary evidence of that document's contents under the rules on documentary proof, or unless the document's own genuineness is what is in question. This is not a special rule against admissions — it is the ordinary secondary-evidence discipline of this Act, applied to the special case where the "secondary evidence" happens to be someone's recollection of what a party once said the document contained. Section 21 addresses something unrelated: in civil cases, an admission made on an express condition that it not be given in evidence, or under circumstances from which the Court can infer the parties agreed not to use it evidentially, is not relevant at all — the settlement-talk protection that lets litigants negotiate without every offer becoming a courtroom weapon. Its Explanation adds one qualification: this protection does not exempt an advocate from evidence they may be compelled to give under section 132's own separate rules on legal-professional privilege.
:::

### The Act, decompiled

> **Section 20 — When oral admissions as to contents of documents are relevant.** Oral admissions as to the contents of a document are not relevant, unless and until the party proposing to prove them shows that he is entitled to give secondary evidence of the contents of such document under the rules hereinafter contained, or unless the genuineness of a document produced is in question.
>
> **Section 21 — Admissions in civil cases when relevant.** In civil cases no admission is relevant, if it is made either upon an express condition that evidence of it is not to be given, or under circumstances from which the Court can infer that the parties agreed together that evidence of it should not be given.
>
> *Explanation.* Nothing in this section shall be taken to exempt any advocate from giving evidence of any matter of which he may be compelled to give evidence under sub-sections (1) and (2) of section 132.

| Statutory phrase | Deconstruction | Practical effect |
|---|---|---|
| "unless... entitled to give secondary evidence... or unless the genuineness... is in question" (s. 20) | **Two independent gateways, either one sufficient** | A party need not satisfy both conditions — showing entitlement to secondary evidence is enough on its own, as is a live genuineness dispute on its own. |
| "express condition... or... circumstances from which the Court can infer" (s. 21) | **Both explicit and implied without-prejudice agreements count** | The protection does not require a party to have used the words "without prejudice" — the Court may infer the parties' mutual understanding from the circumstances of the communication. |
| "nothing in this section shall be taken to exempt any advocate... under section 132" (s. 21, Explanation) | **A privilege carve-out inside a privilege carve-out** | Section 21 protects settlement communications generally; the Explanation clarifies it does not enlarge an advocate's separate, narrower compellability protections under section 132. |

::: proviso Section 21 protects the negotiation, not the underlying facts
An admission made "without prejudice" is inadmissible as an admission — but the underlying facts referred to in that admission, if independently provable through other evidence, are not shielded merely because they were once mentioned in a protected negotiation. Section 21 keeps the negotiation conversation itself out of evidence; it does not immunise every fact that conversation happened to touch on.
:::

### How this actually runs

<MicroTree
  input="A party’s admission is sought to be proved at trial"
  :gates="[
    { q: 'Is it an oral statement about what a document said?', note: 'if yes, it is relevant only if the proponent can give secondary evidence of the document under the ordinary rules, or its genuineness is itself in question', no: 'this gate does not apply — move to the next question' },
    { q: 'In a civil case, was it made under an express or inferable understanding that it would not be used in evidence?', note: 'the s. 132 advocate-compellability carve-out still applies regardless of this understanding', no: 'no bar under section 21' }
  ]"
  result="the admission clears sections 20 and 21 and may be proved, subject to whatever other requirements otherwise apply"
  caveat="clearing sections 20 and 21 does not mean the admission is conclusive proof of anything it states — that question is answered separately by section 25"
  resultKind="mixed"
/>

### In plain English

**Section 20 is not a special hostility to oral admissions — it is the ordinary best-evidence discipline applied to a specific fact pattern.** Whenever someone tries to prove a document's contents through a party's recollection rather than the document itself, the same secondary-evidence rules that would apply to any other route to a document's contents apply here too.

**Section 21 exists to protect the settlement process, not to reward whichever side is more careful with its words.** Litigants who could not speak candidly during negotiations without risking every concession being read back to them at trial would simply stop negotiating — section 21 removes that risk for genuinely without-prejudice communications, while the Explanation makes clear it is not a vehicle for expanding a lawyer's own separate privilege.

### What changed from the Indian Evidence Act

**Indian Evidence Act, 1872, ss. 22 and 23 → BSA 2023, ss. 20 and 21.**

::: info Verify before citing
The mapping IEA s. 22 → BSA s. 20 and IEA s. 23 → BSA s. 21 (including the Explanation's reference to the legal-professional-privilege section) is widely and consistently reported, but no verified local copy of the 1872 Act's text is held in `reference/`. Confirm the old sections' precise wording, and the old section number the Explanation itself cross-referred to, before quoting either in a filing.
:::

**Delta bucket: renumbered only**, on the mapping's face — both provisions appear to carry their old-Act tests forward without substantive change, subject to the verification flag above.

### Test your instinct

::::instinct The burnt contract
The written contract between two traders is destroyed in a fire. One party seeks to prove, through a witness, that the other party once orally admitted "the contract required payment within thirty days."

Is this oral admission automatically relevant, given that the original document genuinely no longer exists?

:::ruling Reveal the ruling
Not automatically — the destruction of the original is exactly the kind of circumstance that can justify secondary evidence under the Act's documentary-proof rules, but the proponent must still actually establish that entitlement (loss or destruction, properly shown) before the oral admission about the contents becomes relevant under section 20. The document's absence is the reason secondary evidence may become available, not a substitute for showing it is.
::::

::::instinct "We'll pay half just to end this"
During a settlement conference expressly convened on a without-prejudice basis, Bharat's representative says, "we'll pay half just to end this." The conference fails, and Farhan later seeks to use the statement at trial as an admission that Bharat owes at least half the claimed amount.

Can Farhan use it?

:::ruling Reveal the ruling
No. The statement was made under an express or clearly inferable understanding that it would not be given in evidence, which is precisely what section 21 protects in civil cases — a settlement offer is not transformed into a courtroom admission of liability merely because the negotiation later collapsed. Farhan must prove Bharat's liability through evidence independent of the protected negotiation itself.
::::

### Practitioner HUD — operational realities

#### The winning ratio

Both provisions apply settled, largely mechanical tests rather than attracting a single dominant modern ratio.

::: info Verify before citing
No specific authority is promoted or cited here because none can be recalled with the certainty this project's citation rule requires.
:::

#### Sword and shield

| Used offensively (asserting the admission) | Used defensively (resisting the admission) |
|---|---|
| For s. 20, lay the secondary-evidence foundation (loss, destruction, or a live genuineness dispute) before tendering the oral recollection. | For s. 20, object that no foundation for secondary evidence has yet been laid — the oral admission is premature. |
| For s. 21, keep genuinely open, non-settlement statements clearly separate from without-prejudice communications, so the without-prejudice statements do not taint otherwise usable evidence. | For s. 21, establish the express or inferable without-prejudice understanding at the time the statement was made, not retrospectively. |

#### The limitation clock

None beyond the general rule that an objection to a statement's mode of proof — that it is oral evidence of a document without a laid foundation, or that it is a protected settlement communication — should be raised when it is tendered.

#### Interlocking matrix

| This provision | Interlocks with | Why |
|---|---|---|
| S. 20 | Chapter V's documentary-evidence rules on primary and secondary evidence (ss. 56 and following, already partly covered at ss. 61–63 in an earlier file) | Section 20's "entitled to give secondary evidence" test is not self-contained — it borrows its content wholesale from those rules. |
| S. 21, Explanation | Section 132 (legal-professional privilege, a later chapter) | The Explanation is a direct textual cross-reference — this page's treatment must not overstate what s. 21 protects once s. 132 is written and can be checked against it. |

#### The authorities

No further authorities are promoted beyond the honest gap noted above.

#### Strategy and drafting

Before relying on an oral admission about a document's contents, be ready to state, in one sentence, why secondary evidence of that document is available — loss, destruction, or a genuineness dispute — rather than assuming the oral account is a shortcut around producing the document. Before treating any settlement-era statement as fair game, confirm whether it was made under an express or inferable without-prejudice understanding; where it was, plan to prove the same facts through independent evidence instead.

## Sections 22 to 24 — confessions: voluntariness, police custody, and joint trials

### The dispute this solves

::: oneminute Vikram tells the police everything — and it still might not be usable
Vikram is arrested for a burglary. While in police custody, without a Magistrate present, he tells the investigating officer, Naveen, that he committed the burglary and that the stolen jewellery is buried under the mango tree in his yard. Police dig there and find the jewellery exactly where he said. At trial, Vikram's advocate, Ritu, argues the entire statement is inadmissible because of who it was made to and where he was when he made it — not because it is untrue. Naveen's side argues that quite apart from the confession's own fate, the fact that the jewellery was found precisely where Vikram said it would be is separately provable. Both positions can be right at once, because confessions carry a much stricter, more mechanical set of exclusion rules than ordinary admissions, precisely because the risk of coercion in a police interrogation room is the oldest and most serious failure mode this Act guards against.
:::

::: story Three sections, three different jobs
Section 22 addresses voluntariness generally: a confession is irrelevant if it was caused by an inducement, threat, coercion, or promise, touching the charge, from a person in authority, sufficient in the Court's opinion to give the accused reasonable grounds to expect an advantage or avoid an evil — but if that impression has since been fully removed, the confession becomes relevant again, and ordinary interrogation features like a promise of secrecy, non-threatening deception, drunkenness, or the absence of a caution do not by themselves taint an otherwise voluntary confession. Section 23 goes further, and does not ask about voluntariness at all: a confession made to a police officer is excluded outright, and a confession made while in police custody is excluded unless made in a Magistrate's immediate presence — both are bright-line exclusions, not case-by-case weighing exercises — subject to one narrow carve-out, the discovery-of-fact proviso, which lets in only the part of an information statement that distinctly relates to a fact thereby discovered, however the rest of the statement is treated. Section 24 addresses a different problem entirely: when two or more people are jointly tried for the same offence, one's confession, if it also affects a co-accused, may be taken into consideration by the Court against that co-accused too — a discretionary, corroborative use, not independent proof on its own.
:::

### The Act, decompiled

> **Section 22 — Confession caused by inducement, threat, coercion or promise, when irrelevant in criminal proceeding.** A confession made by an accused person is [[!irrelevant]] in a criminal proceeding, if the making of the confession appears to the Court to have been caused by any inducement, threat, coercion or promise having reference to the charge against the accused person, proceeding from a person in authority and sufficient, in the opinion of the Court, to give the accused person grounds which would appear to him reasonable for supposing that by making it he would gain any advantage or avoid any evil of a temporal nature in reference to the proceedings against him:
>
> *Provided* that if the confession is made after the impression caused by any such inducement, threat, coercion or promise has, in the opinion of the Court, been fully removed, it is relevant:
>
> *Provided further* that if such a confession is otherwise relevant, it does not become irrelevant merely because it was made under a promise of secrecy, or in consequence of a deception practised on the accused person for the purpose of obtaining it, or when he was drunk, or because it was made in answer to questions which he need not have answered, whatever may have been the form of those questions, or because he was not warned that he was not bound to make such confession, and that evidence of it might be given against him.
>
> **Section 23 — Confession to police officer.** (1) No confession made to a police officer [[!shall be proved]] as against a person accused of any offence.
>
> (2) No confession made by any person while he is in the custody of a police officer, unless it is made in the immediate presence of a Magistrate shall be proved against him:
>
> *Provided* that when any fact is deposed to as discovered in consequence of information received from a person accused of any offence, in the custody of a police officer, so much of such information, whether it amounts to a confession or not, as relates distinctly to the fact discovered, [[?may be proved]].
>
> **Section 24 — Consideration of proved confession affecting person making it and others jointly under trial for same offence.** When more persons than one are being tried jointly for the same offence, and a confession made by one of such persons affecting himself and some other of such persons is proved, the Court [[?may take into consideration]] such confession as against such other person as well as against the person who makes such confession.
>
> *Explanation I.* "Offence", as used in this section, includes the abetment of, or attempt to commit, the offence.
>
> *Explanation II.* A trial of more persons than one held in the absence of the accused who has absconded or who fails to comply with a proclamation issued under section 84 of the Bharatiya Nagarik Suraksha Sanhita, 2023 shall be deemed to be a joint trial for the purpose of this section.

| Statutory phrase | Deconstruction | Practical effect |
|---|---|---|
| "sufficient... to give the accused person grounds... reasonable for supposing... advantage or avoid any evil" (s. 22) | **An objective-reasonableness voluntariness test** | The question is not whether the accused was in fact deceived, but whether a reasonable person in his position would have perceived the stated advantage or threat as real. |
| "no confession made to a police officer shall be proved" (s. 23(1)) | **A bright-line, status-based exclusion** | Voluntariness is irrelevant once the recipient is a police officer — even a demonstrably voluntary confession to a police officer is excluded outright. |
| "so much of such information... as relates distinctly to the fact discovered" (s. 23 proviso) | **A narrow, fact-anchored carve-out**, not a reopening of the whole statement | Only the words that distinctly connect to the physical fact actually discovered come in — any accompanying narrative of motive, method, or guilt remains excluded. |
| "may take into consideration" (s. 24) | **Discretionary and corroborative, not conclusive** | A co-accused's confession is not treated as proof against another person in the way direct evidence would be — it is, at most, additional material the Court may weigh alongside independent evidence. |

::: proviso The discovery-of-fact proviso is narrower than it sounds
"So much of such information... as relates distinctly to the fact discovered" does not mean the whole statement becomes usable once any part of it is confirmed by a discovery. If Vikram says "the jewellery is under the mango tree because I stole it during the burglary," and the jewellery is found there, only the words identifying the jewellery's location are provable under the proviso — the admission of having stolen it remains excluded by section 23(1)/(2) itself, untouched by the discovery. Courts are expected to dissect the statement, not admit it wholesale.
:::

### How this actually runs

<MicroTree
  input="An accused’s out-of-court statement admitting guilt is sought to be proved against its maker"
  :gates="[
    { q: 'Is the confession free of any inducement, threat, coercion, or promise from a person in authority that has not since been fully removed?', note: 'a promise of secrecy, non-threatening deception, drunkenness, or the absence of a caution does not by itself defeat this gate', no: 'irrelevant under section 22 — excluded outright, regardless of who later relies on it' },
    { q: 'Was it made other than to a police officer, and other than while in police custody outside a Magistrate’s immediate presence?', note: 'the sole exception is the discovery-of-fact proviso — only the words distinctly relating to a fact thereby discovered may still be proved', no: 'irrelevant under section 23(1)/(2) as against the accused, subject only to the narrow discovery-of-fact proviso' }
  ]"
  result="the confession is relevant and may be proved against its maker"
  caveat="admissibility against the maker is only the first question — using it against a co-accused in a joint trial is a separate, discretionary question under section 24, not an automatic consequence"
  resultKind="mixed"
/>

### In plain English

**Section 22 asks whether the confession was actually voluntary; section 23 does not ask that question at all.** Once a confession is shown to have been made to a police officer, or in police custody without a Magistrate present, it is excluded as a matter of category, not as a matter of weighing how voluntary it in fact was — the rule assumes the risk of coercion in that setting is too high to trust case-by-case voluntariness findings.

**The discovery-of-fact proviso is a scalpel, not a door.** It lets in exactly the part of a statement that distinctly ties to a fact independently confirmed by discovery — the location of an object, typically — and nothing more. The temptation to read the whole statement in once any part of it checks out must be resisted.

**Section 24 gives a joint confession weak, discretionary weight against a co-accused, not proof.** "May take into consideration" is deliberately soft language; a court is not required to treat it as evidence in the ordinary sense, and is expected to look for independent corroboration before relying on it against anyone other than the person who made it.

### What changed from the Indian Evidence Act

**Indian Evidence Act, 1872, s. 24 → BSA 2023, s. 22; ss. 25, 26 and 27 → BSA 2023, s. 23; s. 30 → BSA 2023, s. 24.**

::: info Verify before citing
The mapping for s. 22 (from old s. 24) and for s. 24 (from old s. 30) is widely and consistently reported, but no verified local copy of the 1872 Act's text is held in `reference/`. Confirm the old sections' precise wording before quoting them in a filing.
:::

**Delta bucket: renumbered with drafting changes, and one structural consolidation.** The standout change in this cluster is not substantive but architectural: three separate old-Act sections — the police-confession bar, the custodial-confession bar, and the discovery-of-fact proviso — appear to have been consolidated into one section (s. 23) with two subsections and a proviso, rather than three standalone sections. The underlying rules appear preserved; only their packaging has changed, subject to the verification flag above. Whether Explanation II's cross-reference to the Bharatiya Nagarik Suraksha Sanhita, 2023's proclaimed-offender machinery is itself new, or a renumbered carry-over of an equivalent old-Act explanation tied to the former Code of Criminal Procedure, is not yet confirmed against verified source text for either the old Act or its companion procedural code — this remains an open item, not an asserted fact either way.

### Test your instinct

::::instinct The mango tree
Vikram, in police custody without a Magistrate present, tells Naveen "the jewellery is buried under the mango tree in my yard, I put it there after the burglary." The jewellery is found exactly there. Ritu argues the entire statement is excluded under section 23.

Is any part of it provable?

:::ruling Reveal the ruling
Yes — but only the part distinctly relating to the fact discovered. "The jewellery is buried under the mango tree" may be proved under the section 23 proviso, because the jewellery's location was independently confirmed by the discovery itself. "I put it there after the burglary" remains excluded under section 23(2) — it is an admission of guilt, not a statement distinctly tying to the physical fact found, and the proviso does not reach it merely because it was said in the same breath.
::::

::::instinct The genuinely voluntary confession, made straight to the police
Vikram walks into the police station of his own accord, with no threats, no promises, and no coercion of any kind, and calmly confesses the entire burglary to Naveen.

Given that it is entirely voluntary, is it admissible against him?

:::ruling Reveal the ruling
No. Section 23(1) excludes any confession made to a police officer, full stop — voluntariness has nothing to do with it, because that inquiry belongs to section 22, and section 23 does not ask it at all. A confession that would easily survive section 22's fairness test is still excluded outright under section 23(1) purely because of who received it. This is a deliberately harsh, bright-line rule, and it is by design: the risk that some confessions made "voluntarily" to police were not truly voluntary is judged too high to trust case-by-case, so the rule excludes the whole category rather than sorting the genuine from the coerced.
::::

### Practitioner HUD — operational realities

#### The winning ratio

***Pulukuri Kottaya v. King-Emperor*, AIR 1947 PC 67 (Privy Council).** The Board's construction of the discovery-of-fact proviso — that only the information distinctly relating to the fact thereby discovered is admissible, and not any accompanying narrative of the discoverer's own guilt or the reasons behind the concealment — remains the foundational authority for how narrowly the proviso must be read. It is the single most-cited authority in Indian criminal practice for stopping prosecutors from reading an accused's entire custodial statement into evidence merely because one physical fact within it was independently confirmed.

#### Sword and shield

| Used offensively (prosecution) | Used defensively (defence) |
|---|---|
| Invoke the discovery-of-fact proviso to get in the narrow, fact-anchored portion of an otherwise-excluded custodial statement. | Insist the Court identify, word by word, exactly which portion "distinctly relates to" the discovered fact, and exclude the remainder rather than admitting the statement as a whole. |
| Argue that ordinary interrogation features — secrecy, non-threatening deception, absence of a caution — do not by themselves defeat section 22. | Object at the threshold, before the confession's contents are even led, that it was made to a police officer or in custody without a Magistrate, triggering section 23's bright-line bar regardless of voluntariness. |

#### The limitation clock

None as a filing deadline, but the practical timing rule is that a challenge to a confession's admissibility — its voluntariness under section 22, or its custody/recipient status under section 23 — is ordinarily raised and resolved before the prosecution is permitted to lead its contents, not reserved for final arguments.

#### Interlocking matrix

| This provision | Interlocks with | Why |
|---|---|---|
| S. 23 | The Bharatiya Nagarik Suraksha Sanhita, 2023's Magistrate-recorded-confession procedure | The safest route to a usable confession is one recorded by a Magistrate under that procedure in the first place, rather than litigating section 23's exclusions after the fact. |
| S. 24, Explanation II | Bharatiya Nagarik Suraksha Sanhita, 2023, s. 84 (the proclaimed-offender provision the BSA's own text cross-refers to) | This is a direct, express statutory cross-reference within the confession section itself, not an inferred link — the deemed-joint-trial fiction only operates through that specific BNSS mechanism. |
| Ss. 22–23 | Section 25, below | Even a confession that clears sections 22 and 23 is not thereby conclusive proof of anything it states — section 25 applies to confessions exactly as it applies to admissions generally. |

#### The authorities

*Pakala Narayan Swami v. Emperor*, AIR 1939 PC 47 (Privy Council) — the classical authority for what counts as a "confession" at all: a statement must either admit the offence in terms, or admit substantially all the facts constituting the offence, to qualify. A statement that merely admits some incriminating fact, short of that threshold, is an admission subject to the ordinary admissions rules, not a confession subject to sections 22 to 24's stricter regime.

#### Strategy and drafting

Challenge a confession's mode of proof — who received it, and under what custody status — as a threshold objection before its contents are led, not as an afterthought in closing arguments. When the prosecution relies on the discovery-of-fact proviso, demand that the Court mark out precisely which words are covered and exclude the rest as a matter of record, so the distinction survives on appeal. When a co-accused's confession is sought to be used under section 24, remind the Court that "may take into consideration" is discretionary and corroborative only, and press for its exclusion where its prejudicial effect on the non-confessing co-accused outweighs its weak evidentiary value.

## Section 25 — admissions are not conclusive proof

### The dispute this solves

::: oneminute "I'll pay by Friday" is not a signed confession of the exact amount owed
Mid-negotiation, a tenant tells his landlord, "I know the rent is late, I'll pay by Friday." The tenancy later ends in litigation over the precise arrears figure, and the landlord argues the tenant's statement conclusively fixes the amount owed at whatever the landlord now claims. The tenant's advocate responds that an admission of being late is not the same as a conclusive admission of a specific sum — and that, absent something more, an admission is only evidence, weighable and explainable, not an automatic and final determination of the fact admitted.
:::

::: story Evidence, not a verdict — unless estoppel independently applies
Section 25 states a short but important limit: admissions, however validly made, are not conclusive proof of the matters they admit. They remain evidence — capable of being explained, contradicted, or outweighed by other evidence — like any other item of proof. The one qualification is that an admission may separately operate as an estoppel, under the provisions of a later chapter of this Act, if the independent elements of estoppel (a representation relied upon to the other party's detriment) are made out — in which case the party may be barred from later denying the admitted fact regardless of what the truth turns out to be. The two consequences are different in kind: one is a question of evidentiary weight, the other is a legal bar that operates whether or not the admitted fact was actually true.
:::

### The Act, decompiled

> **Section 25 — Admissions not conclusive proof, but may estop.** Admissions are not [[!conclusive proof]] of the matters admitted but they may operate as [[=estoppels]] under the provisions hereinafter contained.

| Statutory phrase | Deconstruction | Practical effect |
|---|---|---|
| "not conclusive proof" | **Admissions are ordinary evidence**, subject to being explained or outweighed | A party who has made an admission is not automatically bound to its literal truth — they may still contest it at trial with other evidence. |
| "but they may operate as estoppels" | **A separate, stronger consequence, on separate elements** | Estoppel does not follow automatically from an admission — it requires its own independent showing (representation and detrimental reliance) under the Act's own estoppel provisions. |

::: proviso Do not conflate evidentiary weight with an estoppel bar
An admission that is merely unhelpful evidence for the party who made it can still be explained away at trial — the Court weighs it along with everything else. An admission that has also triggered an estoppel cannot be explained away at all, regardless of what the truth turns out to be, because estoppel operates as a bar on denial, not as a mere item of evidence. Treating the two as the same thing understates how much stronger estoppel is once its own elements are actually satisfied.
:::

### How this actually runs

<MicroTree
  input="A party has made a valid admission, and the other side wants to treat it as binding"
  :gates="[
    { q: 'Has the other party independently shown the elements of estoppel — a representation relied upon to their detriment?', no: 'the admission remains ordinary evidence: it may be explained, contradicted, or outweighed at trial, and is not conclusive of anything it states' }
  ]"
  result="the maker may be estopped from later denying the admitted fact, regardless of what the truth turns out to be"
  caveat="this is a much stronger and different consequence from ordinary evidentiary weight, and requires its own independent proof — it is never automatic"
  resultKind="mixed"
/>

### In plain English

**An admission is a starting point for argument, not the end of it.** Section 25 makes explicit what section 19's own limits on self-serving statements already imply from the other direction: admissions are simply evidence, weighed like any other, not automatically dispositive facts.

**Estoppel is the one route by which an admission's consequence can become final.** But that route runs through an entirely separate body of law, with its own separate elements, not through section 25 itself — section 25 only flags that the possibility exists.

### What changed from the Indian Evidence Act

**Indian Evidence Act, 1872, s. 31 → BSA 2023, s. 25.**

::: info Verify before citing
The mapping IEA s. 31 → BSA s. 25 is widely and consistently reported, but no verified local copy of the 1872 Act's text is held in `reference/`. Confirm the old section's precise wording before quoting it in a filing.
:::

**Delta bucket: renumbered only.** The rule and its estoppel qualification appear unchanged in substance; only the section number has moved.

### Test your instinct

::::instinct The Friday promise
The tenant's "I'll pay by Friday" statement is led at trial. The landlord argues it conclusively fixes the arrears at the exact figure the landlord now claims.

Does section 25 support treating it as conclusive?

:::ruling Reveal the ruling
No. The statement is evidence that the tenant acknowledged being late, but section 25 expressly says an admission is not conclusive proof of the matters admitted — the tenant remains free to contest the precise figure through other evidence, such as payment records, unless the landlord separately establishes the elements of an estoppel.
::::

::::instinct When the landlord actually relied on it
Suppose the landlord, because of the tenant's "I'll pay by Friday" statement, held off filing an eviction application he was otherwise ready to file, and missed a procedural window as a result.

Could the tenant now be barred from denying the statement's implications, regardless of the true arrears figure?

:::ruling Reveal the ruling
Possibly — but only if the independent elements of estoppel are made out: a representation by the tenant, and detrimental reliance on it by the landlord. If those elements are established under the Act's own estoppel provisions, the tenant may be estopped from denying what was represented, a consequence considerably stronger than the ordinary evidentiary weight section 25 otherwise gives an admission.
::::

### Practitioner HUD — operational realities

#### The winning ratio

Section 25 states a settled, narrow distinction rather than one that attracts a single dominant modern ratio.

::: info Verify before citing
No specific authority is promoted or cited here because none can be recalled with the certainty this project's citation rule requires.
:::

#### Sword and shield

| Used offensively (treating an admission as binding) | Used defensively (resisting that treatment) |
|---|---|
| Where the elements of estoppel are independently present, plead estoppel expressly — do not rely on the admission alone to achieve a binding effect section 25 says it does not have. | Remind the Court that an admission, without more, is only evidence — point to section 25's own text if the other side argues otherwise. |

#### The limitation clock

None. Section 25 states an evidentiary principle, not a deadline.

#### Interlocking matrix

| This provision | Interlocks with | Why |
|---|---|---|
| S. 25 | Section 19, earlier in this file | Both provisions temper how much weight an admission actually carries — s. 19 limits who may prove one, s. 25 limits what proving one actually establishes. |
| S. 25's estoppel qualification | Chapter VIII (estoppel, ss. 121–123, a future chapter) | This page states the estoppel qualification exists; the estoppel chapter, when written, must supply the actual elements and must not be treated as already covered here. |

#### The authorities

No further authorities are promoted beyond the honest gap noted above.

#### Strategy and drafting

Do not argue that an admission is "binding" without specifying whether the argument is really about evidentiary weight (which section 25 limits) or about estoppel (which requires independent proof of its own elements). Conflating the two is a common and avoidable drafting weakness — plead estoppel by name, with its elements, if that is the stronger claim being made.

## Chapter II (part II) consolidation — is this statement freely usable, or does a special rule apply?

Sections 15 to 25 answer a single running question in stages: once a statement qualifies as an admission at all, how much can actually be done with it? Start with definition and source — does the statement fall within section 15's definition, and does it come from one of the categories sections 16 to 18 name (a party or authorised agent, a person whose position or liability must be proved, or a person expressly referred to for information)? If it does not fit any of the three, it is not an admission under this Act, whatever else it might be.

If it does qualify, ask who is trying to prove it and against whom. Proof against the maker is straightforward; proof by or on behalf of the maker is barred by section 19 unless one of its three narrow exceptions applies — a hypothetical-death test borrowed from section 26, a contemporaneous state-of-mind statement corroborated by conduct, or independent relevance apart from being an admission at all.

Next, check the two situational limits: is this an oral account of a document's contents, requiring the secondary-evidence foundation of section 20? Is this a civil-case statement made under a without-prejudice understanding, protected by section 21 regardless of how damaging it might otherwise be?

If the accused made the statement in a criminal proceeding and it amounts to a confession — an admission of the offence itself, or substantially all the facts constituting it — a stricter regime displaces the ordinary admissions analysis. Ask first whether section 22's voluntariness test is satisfied; then, regardless of the answer to that question, ask whether section 23's bright-line bars apply because the statement was made to a police officer or in police custody without a Magistrate, subject only to the narrow discovery-of-fact proviso; then, if more than one person is jointly tried, ask what limited, discretionary use section 24 permits against a co-accused.

Finally, whatever the answer to all of the above, remember section 25: even a fully admissible admission or confession is not conclusive proof of what it states — it remains evidence, capable of being explained or outweighed, unless an independent estoppel has separately been established. An advocate who can walk through this sequence by section number, rather than by instinct, has actually made an admissions-and-confessions argument; an advocate who cannot has only gestured at one.
