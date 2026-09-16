# Chapter II — Relevancy of Facts (I): the transaction chain

Chapter II is the longest chapter in the Adhiniyam — forty-eight sections, sections 3 to 50 — and it is the chapter every later chapter assumes the reader has internalised, because "relevant" is a term this Act defines only by example: a fact is relevant if, and only if, some section of this Chapter says so. There is no free-floating logical relevance in this Act; relevance is a closed list of named categories, and Chapter II is that list. Because forty-eight sections do not fit sensibly in one file, this chapter is split by internal sub-topic. This first file covers sections 3 to 14: the foundational relevancy chain — facts in issue, transaction, occasion/cause/effect, motive/preparation/conduct, explanatory facts, conspiracy, otherwise-irrelevant-but-relevant facts, damages, right or custom, state of mind and body, and two further extensions (series of similar occurrences, course of business). Admissions, confessions, dying declarations, judgments, expert opinion and character evidence follow in later files in this chapter.

## Sections 3 to 5 — the chain every relevancy argument starts from

### The dispute this solves

::: oneminute Anita's lawyer keeps saying "relevant" like it means something on its own
Anita sues Bharat for breach of a supply contract. At trial, Anita's advocate, Farhan, wants to lead evidence that, a week before the contract was signed, Bharat told a mutual friend "I'm only doing this deal to get back at my brother" — a fact that has nothing to do with the contract's terms but a great deal to do with why Bharat might have signed it carelessly. Bharat's advocate, Chetan, objects: "irrelevant, my lord — this isn't in the contract, it isn't a fact in issue." Farhan is not, in fact, arguing that the statement is a fact in issue. He is arguing that it is connected to a fact in issue closely enough that this Act — not general logic, not fairness, not what "feels" probative — says it counts. Whether Farhan is right depends on whether the statement falls inside one of the named categories sections 3 to 14 create. If it does not fit a category, it does not matter how obviously true or how obviously significant it is: it stays out.
:::

::: story Facts in issue vs. everything else
Every proceeding has a short list of **facts in issue** — the propositions the pleadings or the charge actually put in dispute (did Bharat fail to deliver; did the accused strike the blow). Section 3 says evidence may be given of those facts, and of no other fact, **except** facts that some later section of this Chapter specifically declares relevant. Sections 4 and 5 are the first two such declarations: section 4 pulls in facts that are not themselves in issue but happened as part of the same transaction as a fact in issue (what was said and done at the scene, immediately before or after); section 5 pulls in the occasion, cause, effect, surrounding state of things, and opportunity connected with a fact in issue. Neither section asks whether the fact is "interesting" or "circumstantially suggestive" in the abstract — each asks a narrower, textual question, and a fact that fails both questions is inadmissible no matter how persuasive it looks.
:::

### The Act, decompiled

> **Section 3 — Evidence may be given of facts in issue and relevant facts.** Evidence [[!may be given]] in any suit or proceeding of the existence or non-existence of every [[=fact in issue]] and of such other facts as are hereinafter declared to be [[=relevant]], and of no others.
>
> *Explanation.* This section shall not enable any person to give evidence of a fact which he is disentitled to prove by any provision of the law for the time being in force relating to civil procedure.
>
> **Section 4 — Facts forming part of the same transaction.** Facts which, though not in issue, are so connected with a fact in issue or a relevant fact as to form part of the [[=same transaction]], are relevant, whether they occurred at the same time and place or at different times and places.
>
> **Section 5 — Facts which are the occasion, cause or effect of facts in issue.** Facts which are the occasion, cause or effect, immediate or otherwise, of relevant facts, or facts in issue, or which constitute the state of things under which they happened, or which afforded an opportunity for their occurrence or transaction, are relevant.

| Statutory phrase | Deconstruction | Practical effect |
|---|---|---|
| "of no others" (s. 3) | **The closed-list principle** — the single most important six words in the whole Chapter | Relevance under this Act is not a matter of persuasive value; it is a matter of falling within a named category. An advocate who cannot point to which section makes a fact relevant has not yet made a relevancy argument at all. |
| "so connected... as to form part of the same transaction" (s. 4) | **Res gestae** — the transaction test | The "same transaction" is not defined by the Act; it is a question of proximity in time, place and continuity of action, decided case by case, not a bright-line rule. |
| "occasion, cause or effect... state of things... opportunity" (s. 5) | **Four distinct gateways in one section**, not one test | A fact can be relevant under s. 5 for any one of four different reasons — it does not need to satisfy all four, and an advocate should identify which one applies rather than gesturing at the section generally. |

::: proviso Section 3's exception clause is not a loophole — it is the Code of Civil Procedure reaching into this Act
The Explanation to section 3 exists so that a party who failed to plead or disclose a document at the proper stage under civil procedure cannot use "but it's relevant" as a backdoor to introduce it late. Relevance under this Act has never been a licence to bypass procedural default; the two bodies of law operate side by side, and this Explanation is the express textual reminder of that boundary.
:::

### How this actually runs

<MicroTree
  input="A fact is offered in evidence that is not itself a fact in issue"
  :gates="[
    { q: 'Is it declared relevant by a specific section of Chapter II (ss. 4–50)?', no: 'inadmissible under section 3 — no amount of persuasive value substitutes for a textual gateway' },
    { q: 'Does it satisfy that section’s specific test (e.g., part of the same transaction under s. 4; occasion/cause/effect/opportunity under s. 5)?', note: 'identify which of s. 4 or s. 5’s several gateways is actually being invoked before arguing it', no: 'inadmissible — a fact that is merely thematically similar to a relevant fact, without meeting the specific statutory test, still fails' }
  ]"
  result="the fact is relevant and evidence of it may be led"
  caveat="relevance under sections 3 to 5 only gets a fact through the door — it says nothing about how much weight the Court gives it once admitted"
  resultKind="mixed"
/>

### In plain English

**Section 3 is the gate, not a definition.** It does not tell you what makes a fact relevant; it tells you that only facts in issue and facts some other section declares relevant may be led in evidence, and that "of no others" is meant literally.

**Section 4's "same transaction" is about continuity, not mere connection.** Two facts can be related in a hundred loose ways without forming part of the same transaction — the test looks at whether the facts are so bound up in time, place, and continuity of action that they read as one continuous event, not a series of separate ones.

**Section 5 is four gateways wearing one section number.** "Occasion," "cause," "effect," and "opportunity" are four separate, independent routes to relevance — a fact that shows the state of things that made a crime possible (opportunity) does not need to also be its cause.

### What changed from the Indian Evidence Act

**Indian Evidence Act, 1872, ss. 5–7 → BSA 2023, ss. 3–5.**

::: info Verify before citing
The mapping IEA s. 5 → BSA s. 3, IEA s. 6 → BSA s. 4, and IEA s. 7 → BSA s. 5 is widely and consistently reported as a straightforward renumbering across this entire early run of Chapter II, but no verified local copy of the 1872 Act's text is held in `reference/`. Confirm the old sections' precise wording before quoting it in a filing.
:::

**Delta bucket: renumbered only.** The substantive tests — the closed-list principle, the same-transaction test, and the four s. 5 gateways — appear unchanged from the old Act; only the numbering and illustration lettering have moved.

### Test your instinct

::::instinct The "interesting but not in the contract" objection
Farhan wants to lead evidence that Bharat told a friend, a week before signing, "I'm only doing this deal to get back at my brother." Chetan objects that it has nothing to do with the contract's terms.

Is Chetan's objection, framed that way, actually a complete relevancy objection under sections 3 to 5?

:::ruling Reveal the ruling
Not by itself. "It's not about the contract's terms" is not the test; the test is whether the statement is a fact in issue, forms part of the same transaction as one, or is an occasion, cause, effect, or opportunity connected to one. Farhan needs to identify which gateway he says applies (most plausibly s. 5, as a fact bearing on Bharat's state of mind at the time of contracting, connecting to sections 6 and 12 further down this Chapter) — and Chetan's objection succeeds only if Farhan cannot do that, not merely because the statement sits outside the four corners of the contract.
::::

::::instinct The robbery scene, minutes apart
A is accused of robbing B. What A said to a bystander two minutes after fleeing the scene, three streets away, is sought to be led as part of the transaction.

Does two minutes and three streets automatically take it outside section 4?

:::ruling Reveal the ruling
No — section 4 expressly says facts forming part of the same transaction are relevant "whether they occurred at the same time and place or at different times and places." Proximity is evidence of continuity, not a separate precondition; the real question is whether the statement and the robbery read as one continuous event or as two separate ones, which is a question of fact, not of a clock or a map.
::::

### Practitioner HUD — operational realities

#### The winning ratio

Sections 3 to 5 are foundational admissibility-gateway provisions rather than provisions that attract a single dominant modern Supreme Court ratio the way sections 61 to 63 attract *Arjun Panditrao*. The res gestae principle under section 4 has been applied and re-applied across decades of criminal appeals on very fact-specific bases, which is why no single case is promoted here; practitioners argue s. 4 from the specific facts of the precedent closest to their own, not from one master ratio.

::: info Verify before citing
No specific res gestae authority is promoted or cited here because none can be recalled with the certainty this project's citation rule requires. If a specific, certain authority is later identified, promote it here rather than leaving this gap.
:::

#### Sword and shield

| Used offensively (asserting relevance) | Used defensively (resisting relevance) |
|---|---|
| Invoke section 4 to pull in what was said and done immediately around the core event, without having to independently justify each fragment. | Argue the gap in time, place, or continuity is wide enough that the fact reads as a separate event, not part of the same transaction. |
| Invoke section 5's four gateways separately — a fact may fail as "cause" but succeed as "opportunity." | Force the opponent to identify which specific s. 5 gateway is invoked, rather than allowing a vague "it's all connected" argument to stand unchallenged. |

#### The limitation clock

None. Sections 3 to 5 are relevancy rules, not deadlines; the applicable timing rule is the general one that an objection to the *admissibility* of a fact (as opposed to its weight) should ordinarily be raised when the evidence is tendered.

#### Interlocking matrix

| This provision | Interlocks with | Why |
|---|---|---|
| S. 3's closed-list principle | Every other section of Chapter II | S. 3 is not a standalone rule; it is the reason every subsequent section in this Chapter exists — each one is a named exception to "of no others." |
| S. 4 (same transaction) | Section 6 (motive, preparation, conduct), below | The two are frequently pleaded together — what was said or done "as part of the transaction" often doubles as conduct evidence. |
| S. 5 (occasion, cause, effect) | Section 12 (state of mind and body), a later file in this chapter | "State of things" and "opportunity" facts under s. 5 frequently overlap with the state-of-mind facts s. 12 separately makes relevant. |

#### The authorities

No further authorities are promoted beyond the honest gap noted above; res gestae case law is fact-specific enough that a general-purpose citation would mislead more than it would help.

#### Strategy and drafting

A relevancy objection or a relevancy argument under sections 3 to 5 is strongest when it names the specific gateway, not the general concept. "This is res gestae" is not an argument; "this falls within section 4 because it occurred within the same continuous transaction as the fact in issue, being spoken thirty seconds after the act and at the same location" is. Before leading a fact under this cluster, an advocate should be able to state, in one sentence, which of sections 3, 4, or 5 — and if s. 5, which of its four gateways — is being relied on.

## Section 6 — motive, preparation and conduct

### The dispute this solves

::: oneminute Chetan says "running away proves nothing"
A is accused of a crime. After the crime, A absconds. Chetan, defending A, argues that flight proves nothing — people panic and run for all kinds of innocent reasons, and treating flight as evidence of guilt is unfair speculation dressed up as law. Farhan, prosecuting, wants to lead the fact of A's flight, and also the fact that A tried to destroy evidence, and also a statement A made two years earlier expressing hostility to the victim. Are all three admissible, and on what basis — one section, or three different ones?
:::

::: story Motive, preparation and conduct are three different doors, not one
Section 6 does three separate jobs in two sub-sections. Sub-section (1) makes motive and preparation for a fact in issue relevant — why someone might have wanted to do something, and what they did to get ready to do it. Sub-section (2) makes a party's or an accused's *conduct* relevant, before or after the fact in issue, if that conduct influences or is influenced by the fact in issue — but conduct here is narrower than the English word suggests: it does not include a person's own statements, unless those statements accompany and explain a non-statement act (Explanation 1), and it does include a statement made *to* a person or in their presence if that statement affected their conduct (Explanation 2). Flight, destroying evidence, and procuring the absence of a witness are all classic subsequent-conduct illustrations under this section — but a bare assertion "I am innocent" made to police is not "conduct" under s. 6 at all; it is a statement, governed by entirely different sections.
:::

### The Act, decompiled

> **Section 6(1).** Any fact is relevant which [[!shows or constitutes]] a [[=motive]] or [[=preparation]] for any fact in issue or relevant fact.
>
> **Section 6(2).** The conduct of any party, or of any agent to any party, to any suit or proceeding, in reference to such suit or proceeding, or in reference to any fact in issue therein or relevant thereto, and the conduct of any person, an offence against whom is the subject of any proceeding, is relevant, if such conduct [[!influences or is influenced by]] any fact in issue or relevant fact, and whether it was previous or subsequent thereto.
>
> *Explanation 1.* The word "conduct" in this section [[!does not include]] statements, unless those statements accompany and explain acts other than statements; but this explanation is not to affect the relevancy of statements under any other section of this Adhiniyam.
>
> *Explanation 2.* When the conduct of any person is relevant, any statement made to him or in his presence and hearing, which affects such conduct, is relevant.

| Statutory phrase | Deconstruction | Practical effect |
|---|---|---|
| "motive or preparation" (s. 6(1)) | Two distinct, independently sufficient relevancy grounds | A fact can be relevant purely as motive without being preparation, and vice versa — an advocate need not force one fact to satisfy both labels. |
| "conduct... does not include statements" (Explanation 1) | The **conduct/statement boundary** — the single most litigated line in this section | A bare exculpatory or inculpatory statement is not "conduct" under s. 6; it has to be assessed under the admissions/confessions sections that follow, not smuggled in as conduct evidence. |
| "previous or subsequent" (s. 6(2)) | Conduct is relevant on either side of the fact in issue | Pre-offence preparation and post-offence flight or concealment are both within scope; neither is inherently stronger than the other as a matter of the statute's own text. |

::: proviso Flight is relevant conduct — it is not, by itself, proof of guilt
Section 6(2), through its illustrations, treats absconding, destroying evidence, and procuring a witness's absence as relevant conduct. That is a statement about admissibility, not about weight. A Court is free to find that an accused fled out of fear, family pressure, or a well-founded distrust of the process, none of which amounts to a confession of guilt — the section gets the fact of flight through the door; what it means once inside remains for the trier of fact.
:::

### How this actually runs

<MicroTree
  input="A fact about something a party did, or a state of mind they held, is offered in evidence"
  :gates="[
    { q: 'Does it show or constitute motive or preparation for a fact in issue?', note: 'if yes, relevant under s. 6(1) — no need to also satisfy s. 6(2)', no: 'proceed to the conduct question' },
    { q: 'Is it conduct — i.e. something done, not merely said — that influences or is influenced by a fact in issue?', note: 'a statement only counts if it accompanies and explains a non-statement act (Explanation 1), or is a statement made to/in the presence of the person whose conduct is in question (Explanation 2)', no: 'inadmissible under section 6 — a bare statement standing alone must instead be tested under the admissions or confessions sections' }
  ]"
  result="relevant as motive, preparation, or conduct under section 6"
  caveat="relevant conduct is not the same as an admission of guilt — the Court still weighs what the conduct actually shows"
  resultKind="mixed"
/>

### In plain English

**Motive answers "why," preparation answers "how they got ready."** Both are relevant independently — evidence a person had reason to want something, and evidence they took steps toward it, are each their own gateway.

**"Conduct" in this section is deliberately narrower than in ordinary speech.** It excludes bare statements precisely so that this section cannot be used as a backdoor around the more carefully controlled rules for admissions and confessions — a person's own words about the case go through those sections, not this one, unless the words merely accompany and explain something they did.

**Flight, concealment and witness-tampering are all conduct, on either side of the event.** The section draws no distinction in principle between conduct before the fact in issue (preparation-adjacent) and conduct after it (flight, concealment) — both are within its reach if the conduct/fact-in-issue link is shown.

### What changed from the Indian Evidence Act

**Indian Evidence Act, 1872, s. 8 → BSA 2023, s. 6.**

::: info Verify before citing
The mapping IEA s. 8 → BSA s. 6 is widely and consistently reported, and the two-Explanation structure appears carried over verbatim in substance, but no verified local copy of the 1872 Act's text is held in `reference/`. Confirm the old section's precise wording before quoting it in a filing.
:::

**Delta bucket: renumbered only, on present verification.** The motive/preparation/conduct structure and both Explanations appear unchanged in substance; only the section number has moved.

### Test your instinct

::::instinct The accused who said nothing but ran
A is questioned informally by a bystander moments after an incident and says nothing at all, then runs. The prosecution wants to lead the silence and the running as conduct.

Is silence, by itself, "conduct" under section 6?

:::ruling Reveal the ruling
The running is conduct; the silence, standing alone, is at most the absence of a statement, and needs to be approached carefully — it is not itself the kind of "act other than a statement" the section is built around, and treating pure silence as strong conduct evidence risks smuggling in an adverse inference from silence that other provisions of the Act (notice provisions, the right against self-incrimination) are designed to control. The running is safely relevant under s. 6(2); silence needs a more cautious, fact-specific argument to be led the same way.
::::

::::instinct "I didn't do it" — conduct or statement?
Immediately after the incident, A is asked by a police constable what happened, and replies "I didn't do it, I was at home." The prosecution wants to lead this as conduct showing consciousness of guilt because A gave the explanation unprompted.

Is this a section 6 conduct question, or does it belong somewhere else?

:::ruling Reveal the ruling
It is a statement, not conduct, under Explanation 1 — it does not accompany and explain a non-statement act, it is the entire communication. It must instead be tested under the sections governing statements to police and admissions (sections 22–23 and the surrounding cluster), which carry their own, more protective conditions. Treating it as "conduct" under s. 6 to sidestep those conditions is exactly the manoeuvre Explanation 1 exists to block.
::::

### Practitioner HUD — operational realities

#### The winning ratio

Conduct-evidence questions under section 6 are decided overwhelmingly on the specific facts of each case — flight, concealment, and false statements to authorities each carry decades of fact-driven appellate treatment without collapsing into one master ratio. No single case is promoted here for that reason; the honest position is that s. 6 practice is built case by case, not ratio by ratio.

::: info Verify before citing
No specific conduct-evidence authority is promoted or cited here because none can be recalled with the certainty this project's citation rule requires.
:::

#### Sword and shield

| Used offensively (asserting relevance) | Used defensively (resisting relevance) |
|---|---|
| Lead flight, concealment, or witness-tampering as conduct under s. 6(2) without needing to separately prove a confession. | Concede the conduct occurred but argue, on the facts, for an innocent explanation — s. 6 gets the fact admitted, not its adverse interpretation. |
| Lead a party's pre-offence preparation as motive/preparation evidence under s. 6(1). | Object that the "conduct" offered is really a bare statement under Explanation 1, and must instead satisfy the admissions/confessions sections. |

#### The limitation clock

None. The applicable timing discipline is the general rule that an objection to a fact's admissibility as "conduct" (as opposed to its weight) should be raised when the evidence is tendered, not reserved for final arguments.

#### Interlocking matrix

| This provision | Interlocks with | Why |
|---|---|---|
| S. 6(2)'s conduct/statement boundary | Sections 22–23 (confessions) and s. 15 onward (admissions), later files in this chapter | Explanation 1 exists specifically to prevent s. 6 from becoming a backdoor around the more protective admissions/confessions regime. |
| S. 6(1) motive and preparation | Section 8 (conspiracy), below | Preparation evidence and conspiracy evidence frequently overlap where the preparatory acts are themselves joint acts of two or more people. |
| S. 6(2) subsequent conduct (flight, concealment) | Chapter VII's presumption and burden material (not yet written) | How much an adverse inference from flight actually shifts a burden of proof is a Chapter VII question, not a Chapter II one — s. 6 only gets the fact in, it does not fix its weight. |

#### The authorities

No further authorities are promoted beyond the honest gap noted above.

#### Strategy and drafting

When leading conduct evidence, state expressly which sub-section is invoked — motive/preparation under s. 6(1), or conduct under s. 6(2) — because the objections available to the other side differ: a motive objection attacks relevance to the fact in issue directly, while a conduct objection most often attacks the conduct/statement boundary under Explanation 1. An advocate defending against conduct evidence should always ask, before objecting on relevance grounds generally, whether the real objection is narrower and sharper: "this is a statement, not conduct."

## Sections 7 to 11 — explanatory facts, conspiracy, and further extensions of relevance

### The dispute this solves

::: oneminute Why is the state of A's family relevant to whether a will is genuine?
In a will dispute, one side wants to lead evidence about the state of the deceased's property and family relationships at the time the will was allegedly made — facts that do not, by themselves, prove or disprove that the will was signed. The other side objects that this is "background noise," not evidence. The background is admissible, but not because background is generally allowed — it is admissible because section 7 specifically makes facts necessary to explain or introduce a fact in issue relevant, and the will's context is necessary to make sense of its terms. Sections 7 to 11 are a cluster of five separate, narrower extensions of relevance beyond the transaction chain in sections 3 to 6 — each with its own precise trigger.
:::

::: story Five doors, five different keys
Section 7 lets in facts necessary to explain, introduce, identify, date, or place a fact in issue — but only "in so far as they are necessary for that purpose," a built-in limiting phrase that stops this from becoming a general-background exception. Section 8 is narrower still: it makes anything said, done, or written by one alleged conspirator, in reference to the common design, relevant against every other alleged conspirator — a significant departure from the ordinary rule that one person's out-of-court statement does not bind another. Section 9 is a residual category: facts that make a fact in issue highly probable or improbable, even where no other named category fits, become relevant on that basis alone. Section 10 is narrow and practical: in a damages claim, anything bearing on quantum is relevant. Section 11 covers disputes about the existence of a right or custom: transactions creating, asserting, or denying it, and particular instances of its exercise.
:::

### The Act, decompiled

> **Section 7.** Facts [[!necessary]] to explain or introduce a fact in issue or relevant fact, or which support or rebut an inference suggested by a fact in issue or a relevant fact, or which establish the identity of anything or person whose identity is relevant, or fix the time or place at which any fact in issue or relevant fact happened, or which show the relation of parties by whom any such fact was transacted, are relevant [[!in so far as they are necessary]] for that purpose.
>
> **Section 8.** Where there is reasonable ground to believe that two or more persons have [[=conspired]] together to commit an offence or an actionable wrong, anything said, done or written by any one of such persons in reference to their common intention, after the time when such intention was first entertained by any one of them, is a relevant fact as against each of the persons believed to be so conspiring.
>
> **Section 9.** Facts not otherwise relevant are relevant — (1) if they are inconsistent with any fact in issue or relevant fact; (2) if by themselves or in connection with other facts they make the existence or non-existence of any fact in issue or relevant fact highly probable or improbable.
>
> **Section 10.** In suits in which damages are claimed, any fact which will enable the Court to determine the amount of damages which ought to be awarded, is relevant.
>
> **Section 11.** Where the question is as to the existence of any right or custom, the following facts are relevant — (a) any transaction by which the right or custom in question was created, claimed, modified, recognised, asserted or denied, or which was inconsistent with its existence; (b) particular instances in which the right or custom was claimed, recognised or exercised, or in which its exercise was disputed, asserted or departed from.

| Statutory phrase | Deconstruction | Practical effect |
|---|---|---|
| "in so far as they are necessary for that purpose" (s. 7) | A **built-in proportionality limit** unique to this section | S. 7 is not a general licence for background evidence — the moment the explanatory purpose is served, further detail becomes irrelevant, which is why the illustrations specifically caution against exploring the *particulars* of an unrelated dispute beyond the bare fact that a dispute existed. |
| "reasonable ground to believe... conspired" (s. 8) | A **threshold gate before the exception applies** | The exception to the normal rule against binding a person by another's out-of-court statement only opens once reasonable ground for believing a conspiracy exists is independently shown — the conspiracy cannot be proved solely by bootstrapping on the co-conspirator statements it is meant to justify admitting. |
| "highly probable or improbable" (s. 9) | A **residual relevance category**, deliberately open-textured | Unlike ss. 3–8, which name specific relationships, s. 9 is the Act's own acknowledgment that no closed list can anticipate every genuinely probative fact — but "highly" is a real threshold, not a low bar. |

::: proviso Section 8's conspiracy exception is deliberately narrow — it does not open the door to everything a co-conspirator ever said
Section 8 only reaches statements made "in reference to their common intention" and only after that intention was first entertained. A co-conspirator's boast made after the conspiracy has already ended, or a statement about something unrelated to the common design, falls outside the section entirely — the exception tracks the life and scope of the conspiracy itself, not the relationship between the people generally.
:::

### How this actually runs

<MicroTree
  input="A fact does not fit sections 3 to 6 (transaction, occasion/cause/effect, motive/preparation/conduct) but still seems probative"
  :gates="[
    { q: 'Is it necessary to explain, introduce, identify, date, place, or show the relations of parties to a fact in issue?', note: 'if yes, relevant under s. 7 — but only to the extent necessary for that specific purpose', no: 'consider the narrower categories below' },
    { q: 'Is it a statement, act, or writing by a person reasonably believed to be a co-conspirator, made in reference to the common design after the conspiracy began?', note: 'relevant under s. 8 against every person reasonably believed to be a co-conspirator, not just its maker', no: 'consider the residual and specific categories' },
    { q: 'Does it make a fact in issue highly probable or improbable, or is it about damages quantum, or a right/custom dispute?', no: 'not relevant under this cluster — reconsider whether another section of the Chapter applies at all' }
  ]"
  result="relevant under one of sections 7 to 11, on the specific ground identified"
  caveat="s. 7's necessity limit and s. 8's conspiracy threshold are both real constraints, not formalities — courts police the boundary of each"
  resultKind="mixed"
/>

### In plain English

**Section 7 is a "just enough context" rule, not a general background exception.** It exists so that facts in issue do not have to be understood in a vacuum, but its own text caps how far that context can be pushed — necessary to explain, not merely interesting to know.

**Section 8 is the law's answer to how conspiracies are ever proved at all.** Because conspiracies are secret by design, insisting that every co-conspirator's statement be independently proved against every other co-conspirator would make conspiracy nearly unprovable — s. 8 is a deliberate, bounded exception to that difficulty, not a general rule about how statements bind third parties.

**Section 9 is the Act's safety valve.** Where a fact plainly matters but does not fit any specific named category, s. 9 catches it — but "highly probable or improbable" is meant as a real threshold, not an invitation to relabel every mildly suggestive fact as relevant.

**Sections 10 and 11 are narrow, practical rules for specific dispute types** — quantum of damages, and the existence of a right or custom — that would otherwise have to be shoehorned into the more general categories.

### What changed from the Indian Evidence Act

**Indian Evidence Act, 1872, ss. 9–13 → BSA 2023, ss. 7–11.**

::: info Verify before citing
The mapping IEA s. 9 → BSA s. 7, IEA s. 10 → BSA s. 8, IEA s. 11 → BSA s. 9, IEA s. 12 → BSA s. 10, and IEA s. 13 → BSA s. 11 is widely and consistently reported as a straightforward renumbering across this run, but no verified local copy of the 1872 Act's text is held in `reference/`. Confirm the old sections' precise wording before quoting it in a filing.
:::

**Delta bucket: renumbered only, on present verification.** The necessity limit in s. 7, the conspiracy exception in s. 8, the residual category in s. 9, and the damages and right/custom rules in ss. 10–11 all appear unchanged in substance from the old Act.

### Test your instinct

::::instinct The alibi at a distance
A is accused of committing a crime in Chennai on a given day. A wants to lead evidence that he was in Ladakh at the time.

Under which section is this relevant, and is "highly probable" the right test?

:::ruling Reveal the ruling
Section 9 — the fact that A was in Ladakh does not fit the transaction, motive, or conduct categories; it is relevant because it makes it highly improbable that A committed a crime in Chennai at the same time. The "highly probable or improbable" language is exactly the right test here, and it is met on facts like these precisely because physical presence elsewhere at the same moment is about as strong a form of circumstantial exclusion as exists.
::::

::::instinct The co-conspirator's statement made after the plan had already fallen apart
B, an alleged co-conspirator, is proved to have said something about the abandoned plan to a friend six months after every other conspirator had given up on it and gone their separate ways. The prosecution wants to use this against A, a separately alleged co-conspirator, under section 8.

Does section 8 make B's statement admissible against A?

:::ruling Reveal the ruling
No. Section 8 requires the statement to be made in reference to the common intention while that intention was live — a statement made six months after the plan was abandoned is not "in reference to their common intention" in the operative sense the section requires. The prosecution's conspiracy theory does not get to stretch s. 8 to cover statements made after the common design itself had ended; that stretching is exactly what the proviso above warns against.
::::

### Practitioner HUD — operational realities

#### The winning ratio

This cluster spans five structurally distinct relevance categories rather than one coherent doctrine, so no single promoted ratio fits all five; conspiracy-exception case law under section 8 in particular is heavily fact-dependent and decided in the context of specific criminal appeals.

::: info Verify before citing
No specific authority is promoted or cited here for any of sections 7 to 11 because none can be recalled with the certainty this project's citation rule requires.
:::

#### Sword and shield

| Used offensively (asserting relevance) | Used defensively (resisting relevance) |
|---|---|
| Invoke s. 8 to bind a co-conspirator's statement against every other alleged conspirator, once reasonable ground for the conspiracy is independently shown. | Argue the statement falls outside the conspiracy's temporal or subject-matter scope, so s. 8's exception never opens. |
| Invoke s. 9 as a residual fallback when a fact plainly matters but does not fit a named category elsewhere in the Chapter. | Insist "highly probable or improbable" is a real threshold, not met by facts that are merely somewhat suggestive. |

#### The limitation clock

None specific to this cluster. The general rule that an admissibility objection should be raised when the evidence is tendered applies equally here.

#### Interlocking matrix

| This provision | Interlocks with | Why |
|---|---|---|
| S. 8 (conspiracy) | Section 6 (motive and preparation), above | Preparatory acts by one conspirator are frequently led both as s. 6(1) preparation evidence and as s. 8 conspiracy evidence against co-conspirators. |
| S. 8 (conspiracy) | Sections 22–24 (confessions, joint trial), a later file in this chapter | A co-accused's confession implicating another is governed by the separate and more protective joint-trial confession rules, not by s. 8 — the two must not be conflated. |
| S. 10 (damages) | Chapter VII's burden-of-proof material (not yet written) | Who carries the burden of proving quantum, as distinct from what facts are relevant to quantum, is a Chapter VII question. |

#### The authorities

No further authorities are promoted beyond the honest gap noted above.

#### Strategy and drafting

When relying on section 8, lead the independent evidence of reasonable ground to believe a conspiracy existed *before*, or at least alongside, the co-conspirator statement itself — a court that has not yet been given a basis to believe a conspiracy existed will not admit a statement solely on the strength of the conspiracy it is offered to help prove. When resisting a section 9 argument, press the opponent to explain why the fact clears "highly probable or improbable" rather than merely "somewhat suggestive."

## Sections 12 to 14 — state of mind, similar occurrences, and course of business

### The dispute this solves

::: oneminute Deepa is accused of knowingly receiving stolen goods
Deepa is found in possession of one stolen watch. The prosecution also wants to lead evidence that she was, at the same time, in possession of a dozen other stolen items — not to prove she stole all of them, but to show she must have known the watch was stolen, because an innocent person is not typically found holding a houseful of other people's stolen property. Deepa's advocate objects that the other items are a different transaction entirely and should be kept out. The prosecution is not relying on the transaction chain in sections 3–6 at all; it is relying on section 12, which makes facts showing a state of mind — here, knowledge — relevant in their own right, on their own specific test.
:::

::: story State of mind, patterns, and business-as-usual are three more separate doors
Section 12 makes facts showing intention, knowledge, good faith, negligence, ill-will, goodwill, or a state of body or bodily feeling relevant whenever that state of mind or body is itself in issue or relevant — but two Explanations sharpen it considerably: the state of mind shown must relate to the *particular matter in question*, not to the person's character in general (Explanation 1), and where a person's previous commission of an offence is itself relevant under this section, their previous *conviction* for it becomes relevant too (Explanation 2). Section 13 is narrower: where the question is whether an act was accidental or intentional, the fact that it formed part of a series of similar occurrences involving the same person is relevant — this is how "it happened again and again" evidence gets in without becoming impermissible bad-character evidence. Section 14 is narrower still: it lets in evidence of an ordinary course of business to show that a particular act, consistent with that course, probably occurred.
:::

### The Act, decompiled

> **Section 12.** Facts showing the existence of any [[=state of mind]], such as intention, knowledge, good faith, negligence, rashness, ill-will or goodwill towards any particular person, or showing the existence of any state of body or bodily feeling, are relevant, when the existence of any such state of mind or body or bodily feeling is in issue or relevant.
>
> *Explanation 1.* A fact relevant as showing the existence of a relevant state of mind must show that the state of mind exists, not generally, but [[!in reference to the particular matter in question]].
>
> *Explanation 2.* But where, upon the trial of a person accused of an offence, the previous commission by the accused of an offence is relevant within the meaning of this section, the previous conviction of such person [[!shall also be]] a relevant fact.
>
> **Section 13.** When there is a question whether an act was accidental or intentional, or done with a particular knowledge or intention, the fact that such act formed part of a series of similar occurrences, in each of which the person doing the act was concerned, is relevant.
>
> **Section 14.** When there is a question whether a particular act was done, the existence of any course of business, according to which it naturally would have been done, is a relevant fact.

| Statutory phrase | Deconstruction | Practical effect |
|---|---|---|
| "not generally, but in reference to the particular matter in question" (s. 12, Expl. 1) | The **anti-propensity limit** built directly into the state-of-mind gateway | S. 12 cannot be used to prove someone is generally dishonest or generally negligent as a person; it must show the specific state of mind relevant to the specific matter before the Court. |
| "previous conviction... shall also be a relevant fact" (s. 12, Expl. 2) | A **mandatory** relevance rule, not discretionary | Once a previous offence is independently relevant under s. 12 (e.g. as showing knowledge), the conviction for it is relevant as of right — the Court does not weigh whether to admit it, only what weight to give it. |
| "series of similar occurrences" (s. 13) | A **repetition test**, distinct from and narrower than s. 12 | S. 13 does not require a state-of-mind question at large; it requires a specific accidental-vs-intentional question, answered by showing the same person was involved in a pattern of similar events. |

::: proviso Section 12's own illustrations mark the line between "this state of mind" and "this kind of person"
The illustrations to section 12 repeatedly draw the same distinction: evidence that a person previously shot at the same victim is relevant to intent regarding *that* victim (Explanation 1's particular-matter test satisfied); evidence that a person had "a general disposition to commit crimes of that class" is expressly flagged as irrelevant. The gateway is narrow by design — it tracks a specific state of mind toward a specific matter, not a general character trait, and an advocate leading state-of-mind evidence should be ready to show precisely how the fact ties to the matter actually in question, not merely to the kind of person the party is.
:::

### How this actually runs

<MicroTree
  input="A fact is offered to show a person’s state of mind, or to show a pattern, or to show ordinary business practice"
  :gates="[
    { q: 'Is a state of mind or state of body itself in issue or relevant, and does the fact show that state existing toward the particular matter in question (not generally)?', note: 'if the state of mind is a previously relevant offence, its conviction is automatically relevant too, under Explanation 2', no: 'consider the narrower series/course-of-business categories' },
    { q: 'Is the question whether an act was accidental or intentional, and did the same person do similar acts repeatedly?', note: 'relevant under s. 13 as a pattern rebutting accident', no: 'consider course of business' },
    { q: 'Is the question whether a particular act was done, and would it naturally have followed an established course of business?', no: 'not relevant under sections 12 to 14' }
  ]"
  result="relevant under section 12, 13, or 14 depending on which specific question is actually being asked"
  caveat="all three sections require a genuinely particular link — general character, general disposition, or a single unrelated coincidence, do not qualify"
  resultKind="mixed"
/>

### In plain English

**Section 12 lets in state-of-mind evidence, but only on a leash.** The leash is Explanation 1: the evidence must speak to the specific matter in question, not to what kind of person someone generally is — this is the Act's own dividing line between legitimate state-of-mind proof and impermissible propensity reasoning.

**Section 13 is how "this has happened before, in the same way" becomes admissible without being character evidence.** It is triggered only by a specific accidental-vs-intentional dispute, and only by genuinely similar prior occurrences involving the same person — a single, dissimilar coincidence does not qualify.

**Section 14 is a narrow, almost administrative rule.** It lets ordinary business routine stand in for direct proof of a specific act, on the logic that if something always happens a certain way, it probably happened that way this time too.

### What changed from the Indian Evidence Act

**Indian Evidence Act, 1872, ss. 14–16 → BSA 2023, ss. 12–14.**

::: info Verify before citing
The mapping IEA s. 14 → BSA s. 12, IEA s. 15 → BSA s. 13, and IEA s. 16 → BSA s. 14 is widely and consistently reported, including both Explanations to the state-of-mind section, but no verified local copy of the 1872 Act's text is held in `reference/`. Confirm the old sections' precise wording before quoting it in a filing.
:::

**Delta bucket: renumbered only, on present verification.** The state-of-mind gateway, its anti-propensity limit, the mandatory-conviction rule, the series-of-occurrences test, and the course-of-business rule all appear unchanged in substance from the old Act.

### Test your instinct

::::instinct The dozen stolen watches
Deepa is found with one stolen watch on her person, and a dozen other stolen items in her home. The prosecution wants to lead the dozen other items to show she knew the watch was stolen.

Is this state-of-mind evidence, or is it forbidden character evidence in disguise?

:::ruling Reveal the ruling
It is legitimate state-of-mind evidence under section 12, precisely because it goes to a particular matter — Deepa's knowledge that the specific watch was stolen — rather than to her general disposition toward dishonesty. The distinction is exactly the one Explanation 1 draws: if the other items were being led merely to suggest "Deepa is the kind of person who deals in stolen goods," that would fail; led to suggest "an innocent person does not typically hold this much other people's stolen property without knowing," it satisfies the particular-matter test.
::::

::::instinct The letter that was never received
The dispute is whether a particular letter reached its addressee. The sender wants to lead evidence that it is the ordinary practice of their office to post every outgoing letter the same day it is signed, and that this letter was signed and placed in the outgoing tray as usual.

Does section 14 make this relevant, and does it prove the letter arrived?

:::ruling Reveal the ruling
Section 14 makes the ordinary course of business relevant to whether the letter was posted — but posting is not the same question as receipt, and the section only reaches as far as showing that an act "naturally would have been done" according to that course. Whether the letter was actually delivered and received is a separate question the sender still has to address, most likely through evidence of non-return by postal authorities; s. 14 gets the posting fact in, it does not by itself close the receipt question.
::::

### Practitioner HUD — operational realities

#### The winning ratio

State-of-mind and pattern evidence under sections 12 and 13 sit at the boundary between legitimate relevance and impermissible propensity or character reasoning, a boundary policed heavily on the specific facts of each case rather than by one governing ratio.

::: info Verify before citing
No specific authority is promoted or cited here for sections 12 to 14 because none can be recalled with the certainty this project's citation rule requires.
:::

#### Sword and shield

| Used offensively (asserting relevance) | Used defensively (resisting relevance) |
|---|---|
| Lead a pattern of similar prior acts under s. 13 to rebut an "it was an accident" defence. | Object that the state-of-mind evidence offered under s. 12 is really general-character or propensity evidence, failing Explanation 1's particular-matter test. |
| Invoke s. 12, Explanation 2, to get a previous conviction in as of right once the underlying previous offence is independently relevant. | Distinguish prior "similar occurrences" under s. 13 as not similar enough, or too remote in time, to support the pattern inference. |

#### The limitation clock

None specific to this cluster.

#### Interlocking matrix

| This provision | Interlocks with | Why |
|---|---|---|
| S. 12's anti-propensity limit | Chapter II's later character-evidence sections (ss. 46–50, a later file in this chapter) | The two guard the same underlying concern — proof of what a person is like generally, as opposed to what they knew or intended in the particular matter — from opposite directions. |
| S. 12, Explanation 2 (previous conviction) | Section 25 (an admission's status), a later file in this chapter | Both address how prior findings and admissions carry forward into a later proceeding, though on different legal bases. |
| S. 13 (series of similar occurrences) | Section 9, above (facts making a fact highly probable or improbable) | A well-established pattern under s. 13 is frequently also independently relevant under s. 9's general probability test — the two can be pleaded together. |

#### The authorities

No further authorities are promoted beyond the honest gap noted above.

#### Strategy and drafting

Before leading state-of-mind evidence under section 12, be ready to answer the opponent's inevitable objection with the particular-matter link in one sentence — "this shows knowledge of *this* stolen watch, not a general disposition to deal in stolen goods." Before leading a pattern under section 13, be ready to show genuine similarity between the prior occurrences and the act in question — remoteness in time or dissimilarity in method are the standard grounds on which s. 13 evidence is kept out.

## Chapter II (part I) consolidation — is the fact relevant at all, and under which specific gateway?

Before leading or objecting to any fact under sections 3 to 14, work through this in order: **first**, is the fact itself a fact in issue (s. 3) — if so, no further gateway is needed. **Second**, if it is not a fact in issue, can it be tied to a fact in issue through the transaction chain (s. 4's same transaction, or s. 5's occasion/cause/effect/opportunity)? **Third**, if not, does it show motive, preparation, or relevant conduct (s. 6) — remembering the conduct/statement boundary. **Fourth**, if none of the transaction-chain sections fit, does one of the standalone extensions apply — explanatory necessity (s. 7), the conspiracy exception (s. 8), the residual high-probability category (s. 9), damages quantum (s. 10), a right-or-custom dispute (s. 11), state of mind or body (s. 12), a series of similar occurrences (s. 13), or ordinary course of business (s. 14)? A fact that clears none of these fourteen sections is inadmissible under section 3's closed-list principle, however persuasive it might otherwise appear — and naming the specific section relied on, rather than arguing "relevance" in the abstract, is what separates an admissibility argument that succeeds from one that merely sounds intuitive.
