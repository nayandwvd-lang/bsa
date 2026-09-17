# Chapter II, part VI — Character evidence (ss. 46-50)

This sixth and final file in Chapter II covers sections 46 to 50: when a person's character — their reputation, or their general disposition — can itself be led as evidence. The default the Act sets is deliberately strict: in a civil case, character is ordinarily irrelevant to whether someone did the thing they are accused of, because litigating a party's whole life story is exactly the kind of sprawling, unfair, time-consuming inquiry that a focused civil trial is not built for. Criminal cases relax that default, but asymmetrically and for a reason: an accused facing the state's machinery may lead evidence of good character freely, while the prosecution may only meet bad character with bad character once the accused has opened that door. And one specific, sensitive category — an alleged victim's previous sexual experience or character in a prosecution for a sexual offence — is expressly walled off altogether. Sections 3 to 45 cover relevancy generally and opinion evidence; character evidence closes out the chapter before Chapter III's proof rules begin at section 51.

## Section 46 — character generally irrelevant to conduct in civil cases

### The dispute this solves

::: oneminute The landlord who was rude to everyone
In a civil suit for breach of contract, the defendant wants to lead evidence that the plaintiff has a well-known reputation in the neighbourhood for being dishonest in business dealings generally, to make it more likely the plaintiff is lying about this particular contract. Is that reputation evidence admissible simply because it makes the plaintiff's story less believable?
:::

::: story A civil trial decides one dispute, not a person's whole character
Section 46 states the general civil-case rule bluntly: character is irrelevant to proving that a person behaved a particular way on a particular occasion. The rule exists because character evidence is notoriously unreliable as proof of a specific act, disproportionately prejudicial once admitted, and would turn every civil trial into a referendum on the parties' whole lives rather than the transaction actually in dispute.
:::

### The Act, decompiled

> **46.** In civil cases the fact that the character of any person concerned is such as to render probable or improbable any conduct imputed to him, is [[!irrelevant]], except in so far as such character appears from facts otherwise relevant.

| Text | What it does | Why it matters |
|---|---|---|
| "irrelevant" | Sets the default rule for civil cases — character cannot be led to make imputed conduct more or less probable | The starkest exclusion word this Act uses; there is no discretion to admit it once it falls within the rule |
| "except in so far as such character appears from facts otherwise relevant" | The single carve-out — character that surfaces incidentally through facts already admissible on some other ground is not excluded | Preserves genuinely relevant facts that happen to reveal character as a side-effect, without opening a door to freestanding character evidence |

::: proviso The carve-out is about the source of the fact, not a second route to lead character evidence
Section 46's exception does not let a party lead character evidence deliberately by finding some "otherwise relevant" peg to hang it on. It excuses only facts that are independently relevant for a reason that has nothing to do with proving character, and which happen to disclose something about character along the way.
:::

### How this actually runs

<MicroTree
  input="A party in a civil case wants to lead evidence of the opposing party's general character or reputation"
  :gates="[
    { q: 'Is the character evidence being offered to make some imputed conduct more or less probable?', no: 'section 46 does not apply — the evidence may still be relevant on some other ground entirely' },
    { q: 'Does the character fact genuinely appear from facts that are otherwise relevant for an independent reason?', no: 'the character evidence is irrelevant under section 46 and is excluded' }
  ]"
  result="the character fact may be considered, but only because it rides in on an independently relevant fact, never on its own footing"
  caveat="section 46 is confined to civil cases — the criminal-case rules in sections 47 and 49 run on a different, asymmetrical logic"
  resultKind="mixed"
/>

### In plain English

**Civil trials are about the transaction, not the person.** Section 46 protects that focus by refusing to let a party's general reputation for honesty, temper, or reliability substitute for actual proof of what happened in the specific dispute before the court.

**The exception is narrow by design.** It does not reward creative pleading that dresses up character evidence as something else — a fact must be genuinely relevant for its own, independent reason before the fact that it also happens to reveal character stops mattering.

### What changed from the Indian Evidence Act

**Indian Evidence Act, 1872, s. 52 → BSA 2023, s. 46.**

::: info Verify before citing
The marginal note printed against this provision in the bare Act ("In civil cases character to prove conduct imputed, irrelevant") matches the marginal note commonly reported for IEA s. 52, supporting a one-to-one renumbering. No verified local copy of the 1872 Act's text is held in `reference/`. Confirm before quoting in a filing.
:::

**Delta bucket: renumbered only**, on the currently available information — the text and the marginal note both appear unchanged apart from the section number.

### Test your instinct

::::instinct The reputation for dishonesty
In a suit for breach of a supply contract, the defendant seeks to lead evidence that the plaintiff has a general reputation in the trade for dishonest dealing, purely to suggest the plaintiff is more likely lying about the specific contract terms in dispute.

Is this reputation evidence relevant under section 46?

:::ruling Reveal the ruling
No. This is precisely what section 46 excludes — character offered to make imputed conduct (lying about this contract) more probable. However genuinely held the trade reputation may be, it cannot substitute for actual evidence about what the parties agreed and did on this specific transaction.
::::

::::instinct The reference letter that was already in evidence
In the same suit, a business reference letter the plaintiff wrote about a third party — independently relevant because it fixes the date the parties' business relationship began — happens to reveal that the plaintiff has an exacting, meticulous style of documenting deals.

Does section 46 exclude the incidental glimpse of character in that letter?

:::ruling Reveal the ruling
No. The letter is relevant for an independent reason — fixing the date the relationship began — and section 46's exception preserves it. The fact that it incidentally shows something about the plaintiff's character does not retroactively make the letter irrelevant; the character point simply rides along without needing separate justification.
::::

### Practitioner HUD — operational realities

#### The winning ratio

No single case is promoted here. The rule that character is generally irrelevant to conduct in civil cases is foundational and uncontested in Indian evidence law, but no specific citation is recalled with the certainty this project's citation rule requires, so none is promoted rather than risking an imprecise one.

#### Sword and shield

| As a sword | As a shield |
|---|---|
| Identify and lead facts that are independently relevant for a reason unconnected to character, even where they incidentally favour your client's reputation — the incidental benefit survives scrutiny precisely because it was never the point. | Object promptly and specifically whenever an opponent's "otherwise relevant" fact looks engineered mainly to smuggle in character evidence, forcing the opponent to justify the fact's relevance on its own, character-independent terms. |

#### The limitation clock

None. This is a pure relevance rule with no procedural timing element beyond the general rule that a relevance objection should be raised when the evidence is tendered.

#### Interlocking matrix

| This provision | Interlocks with | Why |
|---|---|---|
| S. 46 | Section 50 of this same file | Section 46's blanket civil-case exclusion has its own express carve-out in section 50 — character affecting the quantum of civil damages — covered later in this file. |

#### The authorities

No confidently recalled leading authority is promoted for this section.

#### Strategy and drafting

Before offering any fact that touches on a party's reputation or disposition in a civil matter, be ready to articulate the independent, non-character reason the fact is relevant — a court alert to section 46 will ask exactly that question, and an advocate without a ready answer risks the fact being excluded outright.

## Sections 47 and 49 — good character and bad character in criminal proceedings

### The dispute this solves

::: oneminute The accused with an unblemished record, and the one the prosecution wants to paint black
An accused facing a criminal charge wants to lead evidence of a lifetime of good conduct, community standing, and an unblemished record, to make the charge seem inherently less believable. In a different trial, the prosecution — without the accused having said a word about character — wants to lead evidence that the accused has a bad reputation and a prior conviction, to make the charge more believable. Are both attempts on the same footing?
:::

::: story The criminal trial protects the accused's door, and lets the prosecution answer only if it is opened
Sections 47 and 49 are a deliberately asymmetrical pair. Good character is always relevant for an accused — the law lets a person's record speak in their own defence. Bad character is the opposite: ordinarily excluded, and admitted only once the accused has put their own good character in issue, at which point the prosecution may answer in kind. The asymmetry is the whole design — it protects the presumption of innocence from being undermined by roving prosecutorial attacks on the accused's reputation.
:::

### The Act, decompiled

> **47.** In criminal proceedings the fact that the person accused is of a [[=good character]], is relevant.
>
> **49.** In criminal proceedings, the fact that the accused has a [[=bad character]], is [[!irrelevant]], unless evidence has been given that he has a good character, in which case it becomes relevant.
>
> *Explanation 1.—*This section does not apply to cases in which the bad character of any person is itself a fact in issue.
>
> *Explanation 2.—*A previous conviction is relevant as evidence of bad character.

| Text | What it does | Why it matters |
|---|---|---|
| "good character... is relevant" (s. 47) | An unconditional, always-available relevance rule for an accused's good character | No trigger or precondition — the accused may lead it as a matter of course |
| "bad character... is irrelevant, unless" (s. 49) | The default excludes bad-character evidence against the accused, with one trigger that lifts the exclusion | Protects the accused from a bad-character attack unless the accused has first put good character in issue |
| Explanation 1 — bad character as a fact in issue | Removes the section's protection where bad character is not being used to smear but is itself what the case is about | E.g. a habitual-offender or character-based charge where bad character is the very allegation, not collateral evidence |
| Explanation 2 — previous conviction | Deems a previous conviction to be bad-character evidence | Once the door under s. 49 is open, a previous conviction is one concrete, ready-made way through it |

::: proviso The section 49 trigger is evidence of good character, not merely an assertion in argument
The door under section 49 opens only once evidence of good character has actually been given — a bare submission in argument, or a suggestion put to a witness without an evidentiary foundation, does not by itself trigger the prosecution's right to answer with bad character.
:::

### How this actually runs

<MicroTree
  input="A party in a criminal proceeding wants to lead evidence of the accused's character"
  :gates="[
    { q: 'Is the accused leading evidence of their own good character?', no: 'go to the bad-character branch — has the prosecution led, or does it want to lead, evidence of the accused bad character?' },
    { q: 'Has evidence of the accused good character already been given, or is the bad character itself a fact in issue under Explanation 1?', no: 'bad-character evidence against the accused is irrelevant under section 49 and is excluded' }
  ]"
  result="good character is always relevant for the accused; bad character becomes relevant against the accused only once the door is opened, or where it is itself a fact in issue"
  caveat="a previous conviction is deemed bad-character evidence under Explanation 2, but only once the section 49 door is otherwise open — it is not a freestanding exception of its own"
  resultKind="mixed"
/>

### In plain English

**Good character is a one-way street open to the accused alone.** Section 47 lets an accused lead evidence of good character without needing to justify why — a clean record or strong community standing is treated as genuinely probative of innocence, and the law does not make the accused earn the right to say so.

**Bad character is the mirror image, and deliberately harder to get in.** The prosecution cannot lead it as a matter of course; it must wait until the accused has put good character in issue, and then it may only answer, not attack first. This stops criminal trials from degenerating into character assassination untethered from the actual charge.

**Explanation 1 exists because sometimes bad character is not collateral — it is the charge itself.** Where the law makes a person's bad character (for example, habitual criminality) directly relevant to an element of the offence charged, section 49's usual protection would make no sense, so the Explanation lifts it.

### What changed from the Indian Evidence Act

**Indian Evidence Act, 1872, s. 53 → BSA 2023, s. 47; s. 54 → s. 49.**

::: info Verify before citing
The marginal notes printed against these provisions in the bare Act ("In criminal cases previous good character relevant" and "Previous bad character not relevant, except in reply") match the marginal notes commonly reported for IEA ss. 53 and 54, supporting a one-to-one renumbering for both. No verified local copy of the 1872 Act's text is held in `reference/`. Confirm before quoting in a filing.
:::

**Delta bucket: renumbered only**, on the currently available information for both sections.

### Test your instinct

::::instinct The unblemished record
An accused facing a criminal charge leads evidence, through several character witnesses, of a lifetime of good conduct and standing in the community, without the prosecution having said anything about the accused's character first.

Is this good-character evidence relevant under section 47?

:::ruling Reveal the ruling
Yes. Section 47 makes good character relevant for an accused unconditionally — there is no requirement that the prosecution have raised character first, or any other precondition. The accused may lead this evidence as of right.
::::

::::instinct The prosecution that struck first
Before the accused has said a single word about character, the prosecution attempts to lead evidence that the accused has a reputation in the community for dishonesty and violence, to make the charged offence seem more believable.

Is this bad-character evidence relevant under section 49?

:::ruling Reveal the ruling
No. Section 49's default is that bad character is irrelevant, and the trigger that lifts that default — evidence of good character having been given — has not occurred. Unless the bad character is itself a fact in issue under Explanation 1, the prosecution cannot lead this evidence at this stage, however genuinely believed the reputation may be. The prosecution must wait for the accused to open the door, if it opens at all.
::::

### Practitioner HUD — operational realities

#### The winning ratio

No single case is promoted here. The asymmetrical good-character/bad-character structure is foundational and well settled in Indian criminal-evidence practice, but no specific citation is recalled with the certainty this project's citation rule requires, so none is promoted rather than risking an imprecise one.

#### Sword and shield

| As a sword | As a shield |
|---|---|
| For the defence, lead good-character evidence early and confidently where a genuinely clean record exists — section 47 gives it unconditional relevance and it costs nothing to raise. | For the defence, resist any prosecution attempt to lead bad-character evidence unless it can point either to good-character evidence already on record or to Explanation 1's fact-in-issue exception — object at the first hint of a premature bad-character attack. |

#### The limitation clock

None. This is a pure relevance rule with no procedural timing element beyond the general rule that a bad-character objection should be raised the moment such evidence is tendered, before it reaches the record.

#### Interlocking matrix

| This provision | Interlocks with | Why |
|---|---|---|
| S. 49 Explanation 2 | Chapter II, ss. 34-38 of this Act (`chapter-02d.md`) | A previous conviction used as bad-character evidence under s. 49 is distinct from a previous conviction used as a judgment relevant in its own right under ss. 34-38 — the two routes serve different purposes and should not be conflated in argument. |
| S. 48 of this same file | Sections 47 and 49 | Section 48 (the sexual-offence character bar, covered next in this file) operates as a specific, overriding exception carved out of the general good/bad-character framework set by ss. 47 and 49. |

#### The authorities

No confidently recalled leading authority is promoted for this section.

#### Strategy and drafting

Before leading any good-character evidence for an accused, weigh the trade-off explicitly: it is unconditionally relevant, but it also opens the section 49 door to a prosecution bad-character response, including any previous conviction under Explanation 2 — a decision to raise character should never be made without confirming there is nothing damaging waiting on the other side of that door.

## Section 48 — the sexual-offence character and previous-sexual-experience bar

### The dispute this solves

::: oneminute A trial about consent, not about who the complainant is
In a prosecution for a sexual offence where consent is the central issue, the defence wants to lead evidence about the complainant's general character and past sexual history with other people, to suggest consent was more likely on this occasion. Does the Act allow that line of attack?
:::

::: story A deliberate, named wall against a historically abusive line of defence
Section 48 answers that question with a flat prohibition, not a balancing test. For a defined list of sexual offences under the Bharatiya Nyaya Sanhita, 2023, where consent is in issue, evidence of the victim's character or previous sexual experience with any person is simply not relevant to that issue — full stop. This is the Act's most explicit character-evidence carve-out, responding to a historically abusive line of defence that put the complainant's own life on trial instead of the accused's conduct.
:::

### The Act, decompiled

> **48.** In a prosecution for an offence under section 64, section 65, section 66, section 67, section 68, section 69, section 70, section 71, section 74, section 75, section 76, section 77 or section 78 of the Bharatiya Nyaya Sanhita, 2023 or for attempt to commit any such offence, where the question of consent is in issue, evidence of the [[=character of the victim]] or of such person's [[!previous sexual experience]] with any person shall not be relevant on the issue of such consent or the quality of consent.

| Text | What it does | Why it matters |
|---|---|---|
| The named list of BNS sections | Defines exactly which sexual-offence prosecutions trigger the bar | The bar is not general to every case with sexual overtones — it is tied to a specific, closed list of offence sections |
| "where the question of consent is in issue" | The bar operates only when consent is actually contested | If consent is not disputed at all (for example, where the defence is complete denial of the act), the section's specific trigger does not arise |
| "character of the victim or... previous sexual experience with any person" | Two distinct categories, both barred | Covers both general reputation-style character evidence and specific prior-sexual-history evidence, closing off both routes to the same forbidden inference |
| "shall not be relevant on the issue of such consent or the quality of consent" | An absolute exclusion on this specific issue, phrased in relevance terms rather than as a discretionary bar | Removes any judicial discretion to weigh the evidence in — it is excluded as a matter of law, not as a matter of the trial court's judgment call |

::: proviso The bar is confined to the issue of consent, not every use of the underlying facts
Section 48 excludes character and previous-sexual-experience evidence specifically on the question of consent or its quality. It does not, on its own express terms, purport to exclude such evidence if it were genuinely relevant to some entirely different, properly pleaded issue in the same trial — though in practice such collateral relevance is rare given how central consent typically is in these prosecutions.
:::

### How this actually runs

<MicroTree
  input="The defence in a prosecution under one of the listed Bharatiya Nyaya Sanhita, 2023 sexual-offence sections wants to lead evidence of the complainant's character or previous sexual experience"
  :gates="[
    { q: 'Is the prosecution under one of the sections named in section 48, or an attempt to commit such an offence?', no: 'section 48 does not apply by its own terms — check the general character rules in sections 46, 47, and 49 instead' },
    { q: 'Is the question of consent, or the quality of consent, actually in issue in the case?', no: 'section 48 still applies only on the consent issue — if consent is not disputed at all, the bar as specifically framed has no live issue to attach to' }
  ]"
  result="evidence of the complainant's character or previous sexual experience with any person is not relevant on the issue of consent, and is excluded"
  caveat="the exclusion is absolute on the consent issue named in the section — it leaves no room for a judicial weighing exercise the way a discretionary relevance rule would"
  resultKind="mand"
/>

### In plain English

**This section names the offences it protects, rather than speaking generally.** By listing specific Bharatiya Nyaya Sanhita, 2023 sections, the Act ties the bar to a defined category of sexual offences rather than leaving it to case-by-case judicial characterisation of what counts as "a sexual case."

**The prohibition covers two different things that often travelled together in older, now-discredited defence practice.** "Character" evidence (a general reputation for promiscuity, for instance) and "previous sexual experience" evidence (specific past partners or conduct) are both named and both barred — closing off the two most common routes advocates once used to suggest that a complainant's past made present consent more likely.

**The exclusion is framed as an absence of relevance, not a discretionary balancing test.** This is deliberate: the law does not ask a trial judge to weigh probative value against prejudice here, the way it might for some other evidentiary question — it simply removes the evidence from the relevance calculus on the consent issue entirely.

### What changed from the Indian Evidence Act

**Indian Evidence Act, 1872, s. 53A → BSA 2023, s. 48.**

::: info Verify before citing
The marginal note printed against this provision in the bare Act ("Evidence of character or previous sexual experience not relevant in certain cases") matches the marginal note commonly reported for IEA s. 53A, a provision itself inserted into the 1872 Act by a later criminal-law amendment rather than present in its original 1872 text. No verified local copy of either the 1872 Act's original text or the amending Act that is believed to have inserted s. 53A is held in `reference/`. The specific Bharatiya Nyaya Sanhita, 2023 section numbers listed in s. 48 (64, 65, 66, 67, 68, 69, 70, 71, 74, 75, 76, 77, 78) are quoted verbatim from the bare Act text itself and are BSA-side certain; what is not independently verified here is which Indian Penal Code sections the equivalent IEA s. 53A list corresponded to. Confirm both points before quoting in a filing.
:::

**Delta bucket: renumbered with an updated cross-reference** — the substantive rule (character and previous sexual experience are not relevant to consent in these prosecutions) is understood to carry forward from IEA s. 53A, but the list of offence-defining sections it points to has necessarily been updated to the Bharatiya Nyaya Sanhita, 2023's own numbering, since the Indian Penal Code that the old provision would have pointed to no longer applies to conduct after this Act's commencement.

### Test your instinct

::::instinct The past relationship the defence wanted to lead
In a prosecution under one of the sections listed in section 48, where the defence is that the complainant consented, the defence seeks to lead evidence that the complainant had prior consensual sexual relationships with other partners, to suggest consent was more likely on the occasion in question.

Is this previous-sexual-experience evidence relevant to the consent issue?

:::ruling Reveal the ruling
No. Section 48 expressly excludes evidence of the complainant's previous sexual experience with any person on the issue of consent or its quality, in a prosecution under one of the named sections. However the defence frames the inference it wants the court to draw, the evidence is not relevant to that issue as a matter of law, and no judicial balancing exercise can let it in on this specific point.
::::

::::instinct The reputation evidence outside the named list
In a prosecution for an offence that is not among those listed in section 48, where the defence still wishes to argue consent, the defence seeks to lead evidence of the complainant's general reputation.

Does section 48 bar this evidence?

:::ruling Reveal the ruling
No, not under section 48 specifically — the section's bar is tied to the named list of Bharatiya Nyaya Sanhita, 2023 sections, and this prosecution falls outside that list. This does not automatically mean the evidence is admissible, however: it would still have to clear the ordinary relevance and character-evidence rules in sections 46, 47, and 49, which may exclude it on entirely separate grounds. Section 48 simply is not the provision doing the work here.
::::

### Practitioner HUD — operational realities

#### The winning ratio

No single case is promoted here. The policy rationale for excluding character and previous-sexual-experience evidence on the consent issue is well established in Indian criminal-law reform history, but no specific citation is recalled with the certainty this project's citation rule requires, so none is promoted rather than risking an imprecise one.

#### Sword and shield

| As a sword | As a shield |
|---|---|
| For the prosecution, object immediately and specifically to any defence line of questioning that touches on the complainant's character or sexual history once the prosecution is confirmed to fall within section 48's named list. | For the defence, confirm at the outset whether the specific charged section actually appears in section 48's list before assuming the bar applies, since a wrongly assumed bar can needlessly foreclose a legitimate line of cross-examination on a genuinely different, unlisted offence. |

#### The limitation clock

None. This is an absolute relevance exclusion with no procedural timing element beyond the general rule that the objection should be raised the moment the barred line of questioning or evidence is attempted.

#### Interlocking matrix

| This provision | Interlocks with | Why |
|---|---|---|
| S. 48 | Bharatiya Nyaya Sanhita, 2023, ss. 64-71, 74-78 | The bar's scope is defined entirely by reference to this named list; confirming the exact content of each listed BNS section is necessary before either relying on or resisting the section 48 bar. |
| S. 48 | Sections 47 and 49 of this same file | Section 48 functions as a specific, overriding carve-out from the general good/bad-character framework — it must be checked first, before falling back on the general rules, whenever a sexual-offence prosecution is in play. |

#### The authorities

No confidently recalled leading authority is promoted for this section.

#### Strategy and drafting

Draft cross-examination and evidence plans in sexual-offence prosecutions with section 48's named list open beside the charge sheet — a line of questioning that would be entirely permissible in a prosecution outside the list can be an immediate, serious objection risk inside it, and the difference turns on nothing more than which specific section the charge is framed under.

## Section 50 — character affecting damages in civil cases

### The dispute this solves

::: oneminute The defamation claimant with a history the defendant wants heard
A claimant sues for defamation, seeking substantial damages for harm to reputation. The defendant wants to lead evidence that the claimant already had a poor general reputation before the alleged defamatory statement, to argue that any further damage to that reputation — and therefore the damages payable — should be modest. Section 46 says character is generally irrelevant in civil cases: does that shut this argument down too?
:::

::: story The one deliberate hole in section 46's civil-case wall
Section 50 is section 46's express, named exception: where a civil case turns on the amount of damages a person ought to receive, character becomes relevant precisely because it bears directly on the quantum question, not on liability. The shared Explanation that closes out this cluster then does one more piece of work — it tells the court, across every character-evidence section in this file, what "character" actually means, and how it may be proved.
:::

### The Act, decompiled

> **50.** In civil cases, the fact that the character of any person is such as to affect the amount of damages which he ought to receive, is relevant.
>
> *Explanation.—*In this section and sections 46, 47 and 49, the word "[[=character]]" includes both reputation and disposition; but, except as provided in section 49, evidence may be given only of [[!general reputation and general disposition]], and not of particular acts by which reputation or disposition has been shown.

| Text | What it does | Why it matters |
|---|---|---|
| "affect the amount of damages... is relevant" (s. 50) | Names damages-quantum as the specific context where character becomes relevant in a civil case | The narrow, named exception to section 46's general civil-case exclusion |
| "character... includes both reputation and disposition" (shared Explanation) | Defines "character" for ss. 46, 47, 49, and 50 collectively | One definition governs the whole cluster, avoiding inconsistent readings across the four sections |
| "except as provided in section 49, evidence may be given only of general reputation and general disposition, and not of particular acts" | Restricts how character is proved — general standing, not a catalogue of specific incidents — except where s. 49 (bad character in reply) permits more | Prevents character evidence, once admissible, from turning into a trial-within-a-trial over individual past episodes |

::: proviso The mode-of-proof restriction is the Explanation's real teeth
Even where character is relevant under sections 47, 49, or 50, the Explanation confines how it may be proved: general reputation and general disposition, not a list of specific past acts. A party that has cleared the relevance hurdle can still lose the evidence at the mode-of-proof stage if it tries to lead particular incidents rather than general standing.
:::

### How this actually runs

<MicroTree
  input="A party in a civil case wants to lead character evidence bearing on the amount of damages, or wants to know how any admissible character evidence in this cluster may be proved"
  :gates="[
    { q: 'Does the character evidence bear on the amount of damages a person ought to receive in a civil case?', no: 'section 50 does not supply relevance here — fall back on section 46 general civil-case exclusion, subject to its own narrow carve-out' },
    { q: 'Is the evidence offered in the form of general reputation or general disposition, rather than a catalogue of particular past acts?', no: 'the evidence is not admissible in this form under the shared Explanation, unless section 49 specifically permits it' }
  ]"
  result="character evidence bearing on damages is relevant, but only provable through general reputation or general disposition, not through particular incidents"
  caveat="the section 49 exception to the particular-acts restriction is confined to that section's own reply mechanism and does not expand the mode of proof available under section 50"
  resultKind="mixed"
/>

### In plain English

**Damages quantum is the one place a civil case genuinely needs character.** Section 50 recognises that some heads of civil damages — reputational harm chief among them — cannot sensibly be quantified without looking at the character the harm actually damaged, which is why this narrow exception exists alongside section 46's general wall.

**The shared Explanation is a single rulebook for four different sections.** Rather than defining "character" separately each time it is used, the Act defines it once, for sections 46, 47, 49, and 50 together — a drafting choice that keeps the whole character-evidence cluster internally consistent.

**"General reputation" is not a euphemism for a highlight reel of specific incidents.** Even once character evidence clears the relevance hurdle somewhere in this cluster, the Explanation insists it be proved through general standing, not a curated list of particular acts — the one express exception being section 49's own reply mechanism.

### What changed from the Indian Evidence Act

**Indian Evidence Act, 1872, s. 55 → BSA 2023, s. 50; the shared Explanation attached to IEA ss. 52-55 → the shared Explanation attached to BSA ss. 46, 47, 49, 50.**

::: info Verify before citing
The marginal note printed against this provision in the bare Act ("Character as affecting damages") matches the marginal note commonly reported for IEA s. 55, supporting a one-to-one renumbering, and the shared Explanation's substance (reputation and disposition, general evidence only except in reply) tracks the structure commonly reported for the old Act's equivalent Explanation. No verified local copy of the 1872 Act's text is held in `reference/`. Confirm before quoting in a filing.
:::

**Delta bucket: renumbered only**, on the currently available information, for both the operative section and the shared Explanation.

### Test your instinct

::::instinct The defamation claimant's pre-existing reputation
In a defamation suit, the defendant leads evidence that the claimant already had a poor general reputation for dishonesty before the allegedly defamatory statement was published, to argue that the claimant's reputational damages should be assessed as modest.

Is this character evidence relevant under section 50?

:::ruling Reveal the ruling
Yes. Section 50 makes character relevant precisely where it bears on the amount of damages a person ought to receive, and a pre-existing poor reputation is directly probative of how much additional reputational harm the defamatory statement could plausibly have caused. This falls squarely within section 50's named exception to the general civil-case rule.
::::

::::instinct The list of specific incidents
Still relying on section 50, the defendant then tries to prove the claimant's poor reputation by leading a detailed list of three specific past incidents in which the claimant allegedly acted dishonestly, rather than evidence of the claimant's general standing in the community.

Does the shared Explanation permit this mode of proof?

:::ruling Reveal the ruling
No. The Explanation confines proof of character, outside section 49's reply mechanism, to general reputation and general disposition — not particular acts. However genuinely damaging the three specific incidents might be, this is the wrong mode of proof; the defendant must instead lead evidence of the claimant's general reputation, not a curated list of specific episodes.
::::

### Practitioner HUD — operational realities

#### The winning ratio

No single case is promoted here. The general-reputation-not-particular-acts mode-of-proof restriction is well settled in Indian evidence practice, but no specific citation is recalled with the certainty this project's citation rule requires, so none is promoted rather than risking an imprecise one.

#### Sword and shield

| As a sword | As a shield |
|---|---|
| In a damages-quantum dispute, lead character evidence framed explicitly as general reputation or general disposition, never as a list of specific incidents, to avoid the evidence being struck for using the wrong mode of proof. | Object specifically to any character evidence, however relevant it may be on its face, that is actually presented as a catalogue of particular past acts rather than general standing — the mode-of-proof objection survives even where the underlying relevance point is conceded. |

#### The limitation clock

None. This is a pure relevance and mode-of-proof rule with no procedural timing element beyond the general rule that a mode-of-proof objection should be raised when the evidence is tendered.

#### Interlocking matrix

| This provision | Interlocks with | Why |
|---|---|---|
| S. 50 | Section 46 of this same file | Section 50 is section 46's own express, named exception — the two must always be read together, not in isolation. |
| The shared Explanation | Sections 47 and 49 of this same file | The Explanation's definition of "character" and its general-reputation-only restriction govern those two sections as well, closing out the cluster's internal cross-references. |

#### The authorities

No confidently recalled leading authority is promoted for this section.

#### Strategy and drafting

When pleading a damages claim where reputational harm is a head of loss, anticipate the defendant's section 50 response by marshalling your own general-reputation evidence early, in the correct mode of proof, rather than waiting to react defensively once the defendant has already framed the quantum debate.

## Chapter II (part VI) consolidation — is this character evidence, and can it be proved this way?

1. **Is this a civil case?** If so, character is irrelevant to conduct under section 46 unless it appears incidentally from an otherwise-relevant fact, or unless the case is specifically about the amount of damages, in which case move to section 50.
2. **Is this a criminal case, and is the accused leading evidence of their own good character?** If so, section 47 makes it relevant unconditionally — no trigger is needed.
3. **Is the prosecution instead trying to lead bad-character evidence against the accused?** Check whether the accused has already given evidence of good character, or whether bad character is itself a fact in issue under Explanation 1 to section 49 — without one of those, the evidence is excluded.
4. **Is this a prosecution under one of the sexual-offence sections named in section 48, with consent in issue?** If so, evidence of the complainant's character or previous sexual experience is not relevant to consent, full stop, regardless of how the general rules in gates 2 and 3 would otherwise apply.
5. **Whatever character evidence survives gates 1 to 4, how is it being proved?** Check the shared Explanation — general reputation and general disposition only, not particular acts, except where section 49's reply mechanism specifically permits more.
