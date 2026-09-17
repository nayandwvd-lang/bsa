# Chapter II — Relevancy of Facts (IV): judgments of courts when relevant

This fourth file in Chapter II covers sections 34 to 38: the cluster that decides when a judgment, order, or decree from one case can be used as evidence in a different case. It is a narrower question than it first sounds — most judgments are simply irrelevant to a later, different dispute, and this cluster's real work is marking out the handful of situations where a judgment escapes that general irrelevance, and what effect it carries once it does. Opinions of experts and character evidence follow in later files in this chapter.

## Sections 34 to 36 — cognizance-bar judgments, judgments in rem, and other public-nature judgments

### The dispute this solves

::: oneminute Radha's probate order, and a stranger's right-of-way decree
Radha produces a probate court's final order declaring her the sole heir to her late father's estate, in a dispute with Mohan over title to a specific property. Separately, in an unrelated trespass suit, Bharat wants to use a decree from a completely different lawsuit — one where a third stranger had once litigated and lost a claim to a public right of way over the same land — to help his own defence. Mohan's advocate argues neither judgment should matter: a judgment binds the parties who fought it out, not the world. Radha's and Bharat's advocates each respond that this Act carves out specific categories where a judgment does bind, or at least matters to, people who were never parties to it — but the two categories work very differently, and confusing them is a common and costly mistake.
:::

::: story One conclusive category, one merely relevant category
Section 35 is the narrow, powerful category: a final judgment of a competent court exercising probate, matrimonial, admiralty, or insolvency jurisdiction — the classic "judgments in rem," which declare a legal status or a right good against the whole world rather than merely against a named opponent — is not just relevant but conclusive proof of the legal character or entitlement it declares. Section 36 is the wider, weaker category: any other judgment relating to a matter of public nature is relevant to that inquiry, but is expressly not conclusive proof of what it states — it is evidence to be weighed, not a fact the court must simply accept. Section 34 sits alongside both, covering a narrower, procedural question: a judgment that by law bars a court from even taking cognizance of a suit or holding a trial is relevant to the separate question whether that bar applies.
:::

### The Act, decompiled

> **Section 34 — Previous judgments relevant to bar a second suit or trial.** The existence of any judgment, order or decree which by law prevents any Court from taking cognizance of a suit or holding a trial, is a relevant fact when the question is whether such Court ought to take cognizance of such suit or to hold such trial.
>
> **Section 35 — Relevancy of certain judgments in probate, etc., jurisdiction.** (1) A final judgment, order or decree of a competent Court or Tribunal, in the exercise of probate, matrimonial, admiralty or insolvency jurisdiction, which confers upon or takes away from any person any legal character, or which declares any person to be entitled to any such character, or to be entitled to any specific thing, not as against any specified person but absolutely, is relevant when the existence of any such legal character, or the title of any such person to any such thing, is relevant.
>
> (2) Such judgment, order or decree is [[!conclusive proof]] that—(i) any legal character which it confers accrued at the time it came into operation; (ii) any legal character to which it declares any such person entitled accrued at the time it so declares; (iii) any legal character which it takes away ceased at the time it declares; and (iv) anything it declares any person entitled to was that person's property at the time it declares.
>
> **Section 36 — Relevancy and effect of judgments, orders or decrees other than those mentioned in section 35.** Judgments, orders or decrees other than those mentioned in section 35 are relevant if they relate to matters of a [[=public nature]] relevant to the enquiry; but such judgments, orders or decrees are [[!not conclusive proof]] of that which they state.

*Illustration to section 36.* A sues B for trespass on his land. B alleges the existence of a public right of way over the land, which A denies. The existence of a decree in favour of the defendant, in a suit by A against C for a trespass on the same land, in which C alleged the existence of the same right of way, is relevant, but it is not conclusive proof that the right of way exists.

| Statutory phrase | Deconstruction | Practical effect |
|---|---|---|
| "probate, matrimonial, admiralty or insolvency jurisdiction... not as against any specified person but absolutely" (s. 35) | **The judgment-in-rem test** | Only judgments declaring a status or right good against the world at large — not merely against a named opponent — qualify for section 35's conclusive-proof treatment. |
| "conclusive proof" (s. 35(2)) | **The strongest evidentiary status this Act creates** | Unlike almost every other relevant fact, a court accepts the declared legal character or entitlement outright — it is not open to the opposing party to argue the contrary on the merits, only to attack the judgment itself under section 38. |
| "not conclusive proof of that which they state" (s. 36) | **Relevant, but only ever a piece of evidence** | A section 36 judgment can be outweighed by other evidence in the very inquiry it is offered in; it is a fact for the court to weigh, not a fact the court must accept. |

::: proviso Section 35's "absolutely" requirement is easy to miss
A judgment that determines a right or status only as between the specific parties before that court — even one delivered in a court exercising probate, matrimonial, admiralty, or insolvency jurisdiction — does not automatically qualify for section 35's conclusive-proof treatment. The judgment must declare the character or entitlement absolutely, good against persons generally, not merely resolve who wins as between the two litigants who happened to appear.
:::

### How this actually runs

<MicroTree
  input="A judgment, order, or decree from an earlier proceeding is offered as evidence in a different case"
  :gates="[
    { q: 'Is it a final judgment of a competent Court or Tribunal, exercising probate, matrimonial, admiralty, or insolvency jurisdiction, declaring a legal character or entitlement absolutely rather than merely against a named party?', note: 'if yes, skip directly to conclusive-proof treatment under section 35', no: 'not conclusive under section 35 — check section 36 instead' },
    { q: 'Does the judgment relate to a matter of public nature relevant to this inquiry?', no: 'not relevant under sections 35 or 36 — check whether section 34’s cognizance-bar test, or some other basis, applies instead' }
  ]"
  result="the judgment is admitted — conclusively under section 35 if the first gate is met, or merely as weighable evidence under section 36 if only the second gate is met"
  caveat="both routes remain subject to section 38: a party may still show the judgment was delivered by an incompetent Court, or was obtained by fraud or collusion, defeating reliance on it either way"
  resultKind="mixed"
/>

### In plain English

**"Conclusive" and "relevant" are not the same word doing the same job.** Section 35's conclusive-proof judgments close the question entirely once admitted; section 36's judgments are just another piece of evidence the court weighs alongside everything else — mistaking one for the other is the most common error in this cluster.

**The "against the world" test is what makes a judgment in rem special.** A probate order naming an heir binds everyone precisely because succession law needs a single, settled answer to "who owns this now" — that is a fundamentally different kind of judgment from an ordinary two-party money decree, which section 35 deliberately does not reach.

**Section 36's illustration is a warning against overreading.** A decree favouring a defendant in one right-of-way suit does not settle the right of way for all time even in the next suit on the identical question — it is relevant, persuasive even, but never automatically decisive the way section 35 judgments are.

### What changed from the Indian Evidence Act

**Indian Evidence Act, 1872, ss. 40, 41, 42 → BSA 2023, ss. 34, 35, 36.**

::: info Verify before citing
The commonly reported mapping is IEA s. 40 → BSA s. 34 (cognizance-bar judgments), s. 41 → s. 35 (judgments in rem), and s. 42 → s. 36 (other public-nature judgments), consistent with the same six-section numbering offset already observed running through ss. 27–33 of this chapter. No verified local copy of the 1872 Act's text is held in `reference/`. Confirm each mapping before quoting it in a filing.
:::

**Delta bucket: renumbered only.** No drafting change of substance is apparent in the decompiled text against the commonly reported old-Act wording for this three-section group; treat this as the more confident end of the "renumbered" spectrum compared to the flagged electronic-form additions elsewhere in this chapter.

### Test your instinct

::::instinct The probate order in a stranger's mortgage suit
A bank suing to enforce a mortgage against a deceased borrower's estate wants to rely on a probate court's final order naming a particular relative as the sole legal heir, to establish who now holds title to the mortgaged property.

Can the bank treat the probate order as conclusive proof of the heir's title, even though the bank was not a party to the probate proceeding?

:::ruling Reveal the ruling
Yes. Section 35 does not require the party now relying on the judgment to have been a party to the original proceeding — that is precisely the point of a judgment in rem. Because the probate order declares legal character (heirship) and entitlement to specific property absolutely, and not merely as against a particular named person, it is conclusive proof of the heir's title in any subsequent proceeding where that title is relevant, including the bank's mortgage suit.
::::

::::instinct The second right-of-way suit
Following the Act's own illustration, Bharat wants to treat the earlier right-of-way decree — won by a different defendant against a different plaintiff over the same land — as conclusively settling that the right of way exists in his own, separate trespass suit.

Does the earlier decree conclusively settle the question in Bharat's suit?

:::ruling Reveal the ruling
No. The earlier decree does not fall within section 35 — it was not delivered in probate, matrimonial, admiralty, or insolvency jurisdiction, and does not declare a status absolutely against the world. It is relevant under section 36 because it relates to a matter of public nature, but the section itself expressly denies it conclusive effect. Bharat may lead it as supporting evidence, but the court remains free to reach a different conclusion on the right of way after weighing it against everything else in his own case.
::::

### Practitioner HUD — operational realities

#### The winning ratio

No single case is promoted here. The section 35/section 36 distinction is worked out through the statutory text and its own illustration far more reliably than through a single controlling authority confidently recalled for this specific cluster.

#### Sword and shield

| Used offensively (party relying on the judgment) | Used defensively (party resisting it) |
|---|---|
| Establish affirmatively that the earlier judgment declares a status or entitlement absolutely, not merely as between named parties, to claim section 35's conclusive-proof treatment rather than settling for section 36's weaker relevance. | Where section 35 is claimed, attack the "absolutely" requirement head-on — show the earlier judgment in fact only resolved rights as between the specific litigants before that court. |
| Where section 35 is unavailable, still lead the judgment under section 36 for whatever persuasive weight it carries, rather than abandoning it entirely. | Where section 36 is invoked, actively lead contrary evidence in the current proceeding — the statute itself guarantees the earlier judgment is not conclusive, so silence risks letting it stand unchallenged by default. |

#### The limitation clock

None as a filing deadline. The practical timing point belongs to section 38, addressed in the next cluster: a challenge to the competence of the court that delivered the judgment, or an allegation of fraud or collusion in obtaining it, is best raised as soon as the judgment is tendered rather than after it has already shaped the proceeding.

#### Interlocking matrix

| This provision | Interlocks with | Why |
|---|---|---|
| S. 35 | Chapter VIII (estoppel, ss. 121–123) — not yet written | A conclusive judgment in rem under section 35 and an estoppel by conduct or representation are both devices that stop a party from reopening a settled question, but rest on entirely different foundations; the estoppel chapter must distinguish rather than conflate the two when it is written. |
| S. 36 | Section 6, covered in the first file in this chapter | The Act's own illustration to section 37 in the next cluster shows a judgment's mere existence proving motive under section 6 — section 36's public-nature judgments and section 6's motive-and-conduct doctrine can overlap on the same facts without either displacing the other. |

#### The authorities

No confidently recalled leading authority is promoted for this cluster; practitioners relying on the judgment-in-rem/public-nature-judgment distinction should verify current commentary and any recent decisions on section 35's "absolutely" requirement before argument.

#### Strategy and drafting

When pleading reliance on an earlier judgment, identify at the outset which of sections 34, 35, or 36 is actually being invoked, and plead the specific statutory language that brings the judgment within it — a vague reference to "res judicata" or "the earlier decree" invites exactly the conflation between conclusive and merely relevant effect that this cluster is designed to prevent. When resisting, always test the "absolutely" requirement in section 35 before conceding conclusive effect; it is the single most fact-sensitive term in the whole cluster.

## Sections 37 to 38 — the general bar on other judgments, and proving fraud or incompetency

### The dispute this solves

::: oneminute A's decree against C, and whether it means anything to B
A sues C for a libel and wins, on a finding that C's justification defence failed. Separately, B — who was defamed by the very same publication — wants to use A's decree against C in B's own, later suit against C over the identical libel, to save the trouble of proving the same facts again. C's advocate says the decree is nothing to do with B's case at all. In an entirely different matter, a party facing a judgment relevant under sections 34 to 36 wants to show that the court which delivered it was not actually competent to do so, or that the judgment was procured by an arrangement between the two original parties rather than genuine adversarial litigation.
:::

::: story A default of irrelevance, with two narrow doors back in
Section 37 states the default rule in blunt terms: judgments other than those already covered by sections 34, 35, and 36 are simply irrelevant, full stop — unless the judgment's existence is itself a fact in issue, or is made relevant by some other provision of this Act (the Act's own illustrations include a judgment proving motive under section 6, and a previous conviction that is itself a fact in issue on a repeat-offence charge). Section 38 then supplies the check on all of this: whatever a judgment's status under sections 34 to 37, any party can still show that the court delivering it lacked competence, or that it was obtained by fraud or collusion between the parties to it — a safeguard against a manufactured or defective judgment doing evidentiary work it was never entitled to do.
:::

### The Act, decompiled

> **Section 37 — Judgments, etc., other than those mentioned in sections 34, 35 and 36, when relevant.** Judgments or orders or decrees, other than those mentioned in sections 34, 35 and 36, are [[!irrelevant]], unless the existence of such judgment, order or decree is a [[=fact in issue]], or is relevant under some other provision of this Adhiniyam.
>
> **Section 38 — Fraud or collusion in obtaining judgment, or incompetency of Court, may be proved.** Any party to a suit or other proceeding may show that any judgment, order or decree which is relevant under section 34, 35 or 36, and which has been proved by the adverse party, was delivered by a Court [[!not competent]] to deliver it, or was obtained by [[!fraud or collusion]].

*Illustrations to section 37 (selected).* A and B separately sue C for a libel reflecting on each. A obtains a decree against C for damages. The fact is irrelevant as between B and C. A prosecutes B for stealing a cow; B is convicted; A later sues C, to whom B had sold the cow before conviction — as between A and C, the judgment against B is irrelevant. A has obtained a decree for possession of land against B; C, B's son, murders A in consequence — the existence of the judgment is relevant, as showing motive for the crime. A is charged with theft and with a previous conviction for theft — the previous conviction is relevant as a fact in issue. A is tried for the murder of B; the fact that B prosecuted A for libel and that A was convicted is relevant under section 6 as showing motive.

| Statutory phrase | Deconstruction | Practical effect |
|---|---|---|
| "irrelevant, unless... a fact in issue, or is relevant under some other provision" (s. 37) | **A closed default, with two named exits** | The default is exclusion; a party must affirmatively bring the judgment within one of the two named exceptions, not merely argue it seems useful. |
| "relevant under section 34, 35 or 36... may be shown" incompetent or fraudulent (s. 38) | **A rebuttal, not a re-run of the merits** | Section 38 does not let a party relitigate the facts the earlier judgment decided — it only lets a party attack the judgment's own legitimacy as a judgment. |

::: proviso Section 38 attacks the judgment, not the underlying facts
A party invoking section 38 is not permitted to simply argue that the earlier court reached the wrong conclusion on the merits. The attack must go to the court's competence to deliver the judgment at all, or to fraud or collusion in procuring it — an ordinary disagreement with how the earlier court weighed the evidence is not a ground under this section, however strongly felt.
:::

### How this actually runs

<MicroTree
  input="A judgment, order, or decree that does not fall within sections 34, 35, or 36 is sought to be used as evidence"
  :gates="[
    { q: 'Is the existence of the judgment itself a fact in issue in the current proceeding?', note: 'e.g. a previous conviction charged as part of the current offence', no: 'check the second exit before concluding it is irrelevant' },
    { q: 'Is the judgment made relevant by some other specific provision of this Act — for example, as evidence of motive under section 6?', no: 'irrelevant under section 37 — its existence and content play no part in the current proceeding' }
  ]"
  result="relevant either as a fact in issue or through the other provision relied upon — never simply because one party thinks it would help"
  caveat="even a judgment that is relevant under sections 34, 35, or 36 in the first place remains open to a section 38 challenge — incompetence of the delivering Court, or fraud or collusion in obtaining it, defeats reliance on the judgment regardless of which route made it relevant"
  resultKind="mixed"
/>

### In plain English

**Section 37 is the reminder that most judgments simply do not travel.** A's win against C tells B nothing usable in B's own later case against C on the very same facts — each litigant has to prove their own case, and a favourable judgment someone else obtained is not a shortcut, however tempting it looks.

**The illustrations do the real teaching here.** The motive illustrations show section 37's "relevant under some other provision" exception is not a loophole — it is simply recognising that a judgment's mere existence can itself be a fact bearing on motive or intention under a different, already-established relevancy rule like section 6.

**Section 38 is aimed at the judgment's legitimacy, not a second appeal.** It exists so that a manufactured decree — obtained through collusion between two parties acting in concert against a third, or delivered by a court with no jurisdiction to decide the matter — cannot quietly do evidentiary work in someone else's case merely by being on the record.

### What changed from the Indian Evidence Act

**Indian Evidence Act, 1872, ss. 43, 44 → BSA 2023, ss. 37, 38.**

::: info Verify before citing
The commonly reported mapping is IEA s. 43 → BSA s. 37 (the general irrelevance default and its two exits) and s. 44 → s. 38 (fraud, collusion, or incompetency), continuing the same six-section numbering offset observed across ss. 27–36 of this chapter. No verified local copy of the 1872 Act's text is held in `reference/`. Confirm both mappings before quoting them in a filing.
:::

**Delta bucket: renumbered only.** The general-irrelevance default, its two exceptions, and the fraud/collusion/incompetency rebuttal all appear unchanged in substance from the commonly reported old-Act wording; this cluster sits at the confident end of the "renumbered" spectrum, alongside ss. 34–36.

### Test your instinct

::::instinct B's attempt to borrow A's decree
B was defamed by the same publication that led A to sue C successfully. B now wants to use A's decree against C, in B's own later suit against C, to avoid re-proving that the publication was libellous and that C's justification defence fails.

Can B rely on A's decree against C?

:::ruling Reveal the ruling
No. This is the Act's own illustration, adapted: the decree is a judgment between A and C on A's own claim, and does not fall within sections 34, 35, or 36. Its existence is not a fact in issue in B's suit, and B has not shown it relevant under any other provision. B loses this particular shortcut and must prove the libel and defeat the justification defence afresh in his own case — the earlier decree, however factually similar, is simply irrelevant as between B and C under section 37.
::::

::::instinct The collusive decree
A party facing a section 36 judgment discovers that the two original litigants in that earlier suit were secretly cooperating throughout — the "losing" party had every incentive to lose, by prior arrangement, so as to create a judgment useful against a third person who was never part of that arrangement.

Can the third person defeat reliance on that judgment?

:::ruling Reveal the ruling
Yes. Section 38 exists precisely for this situation. Even though the judgment is relevant under section 36, the third person may show it was obtained by collusion between the two original parties, defeating the adverse party's reliance on it. The attack succeeds not by relitigating who was right about the underlying facts, but by exposing that the judgment itself was never the product of genuine adversarial litigation.
::::

### Practitioner HUD — operational realities

#### The winning ratio

No single case is promoted here, for the same reason as the previous cluster: sections 37 and 38 are worked out primarily through the Act's own five illustrations, which are unusually thorough and do most of the interpretive work themselves.

#### Sword and shield

| Used offensively (party relying on the judgment) | Used defensively (party resisting it) |
|---|---|
| If the judgment falls outside sections 34–36, identify precisely which other provision of this Act makes its existence relevant — do not simply assert relevance in the abstract. | Where a judgment is tendered under section 37's "fact in issue" exit, confirm the fact truly is in issue in the current proceeding, not merely similar to it. |
| Where available, plead a section 37 judgment's relevance through the motive route the Act's own illustrations already validate, rather than inventing a novel theory of relevance. | Investigate the competence of the delivering court and the genuineness of the earlier litigation early — a section 38 challenge is far more persuasive when raised with documentary support than as a bare assertion at the hearing. |

#### The limitation clock

None as a filing deadline, but as a practical matter, a section 38 challenge to a judgment's competence or genuineness should be raised as soon as the adverse party tenders the judgment, so the court can assess it before the judgment has already coloured the rest of the proceeding.

#### Interlocking matrix

| This provision | Interlocks with | Why |
|---|---|---|
| S. 37 | Section 6, covered in the first file in this chapter | The Act's own illustration uses a judgment's existence as proof of motive under section 6 — this is the clearest worked example in the whole Act of one relevancy provision supplying the "other provision" that section 37 requires. |
| S. 37 | Section 26(g), covered in the third file in this chapter | Both provisions test whether a document or judgment "relates to" or is "relevant under" a named external test rather than defining a free-standing relevance rule of their own — the drafting pattern recurs across this chapter. |

#### The authorities

No confidently recalled leading authority is promoted for this cluster; practitioners should verify current commentary on the fraud-or-collusion standard under section 38 before relying on any specific precedent in argument.

#### Strategy and drafting

Before tendering any judgment from an unrelated proceeding, run it through sections 34 to 37 in order rather than assuming relevance — the most common drafting error in this cluster is treating a favourable judgment from another case as self-evidently usable without identifying which specific provision lets it in. When resisting a judgment on section 38 grounds, gather the record of the earlier proceeding itself — pleadings, the pattern of concessions, the speed and manner of its conclusion — since collusion is proved circumstantially far more often than by direct admission.

## Chapter II (part IV) consolidation — does this earlier judgment matter in this case, and how much?

Walking sections 34 to 38 in sequence answers a single practical question: a judgment, order, or decree from a different case is on the table — is it relevant here, and if so, is it merely persuasive or does it settle the point outright?

1. **Does the judgment bar this very court from taking cognizance of this suit or trial?** Section 34 makes that bar itself relevant to the question whether the court should proceed at all.
2. **Was the judgment delivered by a competent court exercising probate, matrimonial, admiralty, or insolvency jurisdiction, declaring a legal character or entitlement absolutely?** If so, section 35 makes it conclusive proof — the strongest evidentiary status in the Act, not merely persuasive weight.
3. **If not, does it relate to a matter of public nature relevant to this inquiry?** Section 36 lets it in as relevant, weighable evidence, expressly denying it conclusive effect.
4. **If none of the first three gates are met, is the judgment's existence itself a fact in issue, or made relevant by some other named provision of this Act?** Section 37's default is irrelevance, and only these two exits lead back in.
5. **Whichever gate the judgment passed through, can it still be shown that the delivering court lacked competence, or that the judgment was obtained by fraud or collusion?** Section 38 is the final checkpoint, capable of defeating reliance on a judgment regardless of which earlier gate let it in.
