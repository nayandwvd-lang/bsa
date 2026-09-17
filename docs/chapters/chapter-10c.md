# Chapter X part III — Of Examination of Witnesses: contradicting credit answers, impeaching credit, corroboration, refreshing memory, document production, and the Judge's own power to question (ss. 156-168)

This final part of Chapter X closes out the examination-of-witnesses machinery. The first cluster deals with what happens after a credit-shaking question has been answered — whether the answer can later be contradicted, and the separate, broader question of how a witness's credit may be impeached altogether. The second cluster gathers the remaining mechanical tools of trial practice: corroborating a witness's testimony, refreshing a witness's memory from a contemporaneous writing, the machinery for compelling and using documents at trial, and, finally, the Judge's own sweeping power to ask questions and order production — subject to the limits the Act itself places on that power.

## Sections 156 to 158 — the rule against contradicting credit answers, and impeaching credit

### The dispute this solves

::: oneminute
Section 149 lets a cross-examiner ask a witness a credit-shaking question that injures the witness's character but is otherwise irrelevant to the case. Section 156 then closes the loop: whatever the witness answers to such a question, no evidence may be given to contradict that answer — with a false answer instead exposing the witness to a separate prosecution for giving false evidence. But two exceptions carve out real space for contradiction: a denied prior conviction, and a denial of facts suggesting the witness's own impartiality is compromised. Section 157 lets the Court permit a party to put cross-examination-style questions to their own witness, without losing the right to rely on that witness's evidence. And section 158 lists the three lawful ways to impeach a witness's credit altogether — reputation evidence, proof of bribery or corrupt inducement, and proof of prior inconsistent statements.
:::

::: story
Section 156's general rule and its two exceptions are best understood through the Act's own illustrations: a fraud claimant who denies a prior fraudulent claim cannot be contradicted with proof that he made one — the matter goes purely to credit, and the finality rule under section 156 governs, even though the claimant might in fact be lying. But a witness who denies having a blood feud with the opposing family *can* be contradicted, because that denial goes to the witness's impartiality, not merely their general character — a distinction the Act treats as different in kind, not degree.
:::

### The Act, decompiled

> **156.** When a witness has been asked and has answered any question which is relevant to the inquiry only in so far as it tends to shake his credit by injuring his character, [[!no evidence shall be given to contradict him]]; but, if he answers falsely, he may afterwards be charged with giving false evidence.
>
> *Exception 1.* — If a witness is asked whether he has been previously convicted of any crime and denies it, [[?evidence may be given of his previous conviction]].
>
> *Exception 2.* — If a witness is asked any question tending to impeach his impartiality, and answers it by denying the facts suggested, [[?he may be contradicted]].
>
> **157.** (1) The Court may, in its discretion, [[?permit the person who calls a witness to put any question to him which might be put in cross-examination]] by the adverse party.
>
> (2) Nothing in this section shall [[!disentitle the person so permitted under sub-section (1), to rely on any part of the evidence of such witness]].
>
> **158.** The credit of a witness may be impeached in the following ways by the adverse party, or, with the consent of the Court, by the party who calls him—(a) by the evidence of persons who testify that they, from their knowledge of the witness, [[!believe him to be unworthy of credit]]; (b) by proof that the witness [[!has been bribed, or has accepted the offer of a bribe, or has received any other corrupt inducement]] to give his evidence; (c) by proof of [[!former statements inconsistent with any part of his evidence]] which is liable to be contradicted.
>
> *Explanation.* — A witness declaring another witness to be unworthy of credit may not, upon his examination-in-chief, [[?give reasons for his belief]], but he may be asked his reasons in cross-examination, and the answers which he gives cannot be contradicted, though, if they are false, he may afterwards be charged with giving false evidence.

| Text | What it does | Why it matters |
|---|---|---|
| S. 156's general rule | Bars contradicting a credit-only answer, channelling a false answer instead into a false-evidence prosecution | Prevents credit-shaking cross-examination from spawning an endless series of satellite disputes about the truth of collateral matters |
| Exception 1 (prior conviction) | Lets a denied prior conviction be proved | A prior conviction is treated as objectively verifiable and important enough to warrant an exception |
| Exception 2 (impartiality) | Lets a denial of impartiality-impeaching facts be contradicted | Impartiality goes to the witness's relationship with the case itself, not just general character, and is treated differently |
| S. 157's discretion | Lets a party cross-examine-style question their own witness with Court permission (a step toward what other systems call declaring a witness hostile), without losing the ability to rely on that witness's testimony | Solves the problem of a calling party's own witness proving unexpectedly uncooperative, without an all-or-nothing forfeiture |
| S. 158(a)-(c) | Three distinct impeachment routes: reputation testimony, proof of corrupt inducement, and prior inconsistent statements | A structured toolkit, not an open-ended license to attack a witness by any means |
| S. 158's Explanation | Confines a reputation witness's own examination-in-chief to the bare belief, reserving reasons for cross-examination, and shields those reasons from being contradicted (subject to a false-evidence charge if false) | Mirrors section 156's finality principle for the reputation witness's own stated reasons |

::: proviso Section 156's exceptions turn on kind, not degree, of imputation
The Act's own illustrations make the line unusually sharp. Denying a past fraudulent claim, or denying a past dismissal for dishonesty, are both purely general-character matters — section 156's main rule bars contradiction of either denial, however convenient contradiction would be. But denying a fact suggesting bias — such as a blood feud with the opposing family — falls under Exception 2 because it bears on the witness's relationship to the specific case, not merely on their character in the abstract. The same is true of a denied prior conviction under Exception 1, which the Act treats as objectively significant enough to warrant its own carve-out.
:::

### How this actually runs

<MicroTree
  input="A witness has answered a credit-only question during cross-examination, and the cross-examiner now wishes to contradict that answer with other evidence"
  :gates="[
    { q: 'Did the witness deny having been previously convicted of a crime?', yes: 'Exception 1 permits evidence of the prior conviction to be given, contradicting the denial' },
    { q: 'Did the witness instead deny facts tending to impeach the witness’s own impartiality in this matter?', yes: 'Exception 2 permits the witness to be contradicted on that denial' },
    { q: 'If neither exception applies, was the question relevant to the inquiry only as to credit, by injuring the witness’s character generally?', yes: 'section 156’s general rule bars any evidence to contradict the answer, however untrue it may in fact be' }
  ]"
  result="a credit-only answer stands unless it falls within one of section 156’s two narrow exceptions, with a false answer addressed only through a separate false-evidence prosecution, not through contradiction at trial"
  caveat="the two exceptions are narrow and specific — a general suspicion that a witness lied about their character does not, by itself, open the door to contradiction"
  resultKind="mixed"
/>

### In plain English

**Section 156 trades the finality of a credit-only answer for the threat of a false-evidence prosecution, with two precise carve-outs.** A witness's denial of general bad character stands, whether true or false, unless it concerns a prior conviction or the witness's own impartiality in the case. Section 157 gives a party a controlled way to challenge their own uncooperative witness without abandoning that witness's evidence altogether. And section 158 supplies the three recognised routes to impeach any witness's credit outright — reputation, corruption, and inconsistency — each with its own procedural discipline.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping stated here — Indian Evidence Act, 1872, s. 153 (exclusion of evidence to contradict answers to questions testing veracity, with its two exceptions) to BSA s. 156, s. 154 (question by party to his own witness) to BSA s. 157, and s. 155 (impeaching credit of witness) to BSA s. 158 — is the reported correspondence, continuing the three-section offset. No verified local Indian Evidence Act source text exists in `reference/` to check this against; treat the mapping as a flagged hypothesis until such a source is added.
:::

| Indian Evidence Act (reported) | BSA | What appears to have changed |
|---|---|---|
| S. 153 | S. 156 | Renumbered only, on the reported mapping |
| S. 154 | S. 157 | Renumbered only, on the reported mapping |
| S. 155 | S. 158 | Renumbered only, on the reported mapping |

This cluster, like the last, appears to be a clean renumbering with the Act's own illustrations carried over unchanged — the discipline required is retraining the numbers, not relearning the substance.

### Test your instinct

::::instinct Scenario 17 — the fraud claimant who denies a past fraudulent claim
A claimant against an insurer is asked whether he made a fraudulent claim on a previous occasion. He denies it. The insurer seeks to prove that he did, in fact, make such a claim. Should the Court admit this contradicting evidence?
:::ruling
No. This tracks the Act's own first illustration to section 156 exactly: the question goes only to the claimant's general character and credit, not to any fact in issue or to impartiality or a prior conviction. Section 156's general rule bars contradicting evidence here — the insurer's only recourse, if the denial was actually false, is a prosecution for giving false evidence, not contradiction within this trial.
:::
::::

::::instinct Scenario 18 — the denied blood feud
A witness giving evidence against a family is asked whether his own family has a blood feud with theirs. He denies it. The opposing side seeks to prove the feud exists. Can they?
:::ruling
Yes. This is the Act's own fourth illustration to section 156: a denial of facts suggesting the witness's own impartiality — here, a blood feud with the family against whom he testifies — falls within Exception 2, and the witness may be contradicted on the ground that the question tends to impeach his impartiality. This is treated differently in kind from a pure general-character imputation, not merely as a matter of degree.
:::
::::

::::instinct Scenario 19 — the party questioning its own hostile witness
A party's own witness begins giving evidence that contradicts what the party expected, and appears to be favouring the opposing side. The party seeks the Court's permission to put pointed, cross-examination-style questions to this witness. Does doing so mean the party can no longer rely on anything this witness said?
:::ruling
No. Section 157(1) lets the Court, in its discretion, permit the calling party to put cross-examination-style questions to its own witness. Section 157(2) is explicit that nothing in this section disentitles the party from relying on any part of that witness's evidence. The party may challenge the unhelpful parts of the testimony while still relying on whatever parts remain useful — this is not an all-or-nothing election.
:::
::::

::::instinct Scenario 20 — the reputation witness who must wait to explain
A witness testifies in examination-in-chief that, from personal knowledge, he believes another witness to be unworthy of credit, and immediately tries to explain in detail why. Should the Court allow the detailed explanation at this stage?
:::ruling
No, not at this stage. The Explanation to section 158 is specific: a witness declaring another unworthy of credit may not, on examination-in-chief, give reasons for that belief — the reasons may only be drawn out in cross-examination. The bare statement of belief is what section 158(a) contemplates for examination-in-chief; the reasoning is reserved for the adverse party to explore (or not) on cross-examination, and even then, the answers given cannot later be contradicted, short of a false-evidence charge if untrue.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
No single authority is promoted here. The finality rule, its two exceptions, and the impeachment mechanics of sections 156-158 are worked out directly from the Act's own precise text and illustrations; no specific leading judgment is held with the certainty this project's citation rule requires.

#### Sword and shield
| | As a sword (impeaching or contradicting) | As a shield (protecting one's own witness) |
|---|---|---|
| S. 156 | Identify, before trial, whether a planned contradiction actually falls within one of the two narrow exceptions, or is barred as a pure credit matter | Object immediately to any attempt to contradict a credit-only answer that does not fall within Exception 1 or 2 |
| S. 157 | Seek the Court's permission early, the moment a called witness turns unhelpful, rather than persisting with a failing examination-in-chief | Prepare witnesses thoroughly enough that section 157 permission is rarely needed against one's own witness |
| S. 158 | Choose the strongest of the three impeachment routes deliberately — reputation, corrupt inducement, or inconsistency — rather than attempting all three thinly | Have an explanation ready for any genuine prior inconsistency, since proof of it is one of the three recognised routes to impeachment |

#### The limitation clock
None. All three sections operate entirely within the pending examination of a witness at trial; no independent limitation period attaches to any of them.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 156 (false-evidence route for a false credit answer) | Bharatiya Nyaya Sanhita, 2023 (offence of giving false evidence) | Section 156's own text expressly channels a false credit-only answer into a false-evidence prosecution rather than in-trial contradiction, making the BNS offence the real consequence for such a lie |
| S. 157 (party questioning own witness) | Bharatiya Nagarik Suraksha Sanhita, 2023 (trial procedure for recording evidence) | The practical mechanics of seeking and recording the Court's permission under section 157 sit within the BNSS's own procedural framework for conducting a trial |

#### The authorities
No confidently recalled leading authority is promoted for this cluster with the certainty this project's citation rule requires.

#### Strategy and drafting
Before attempting to contradict a credit-only answer, check deliberately whether the matter is a prior conviction, an impartiality-impeaching fact, or neither — the third category cannot be salvaged by clever argument, however unfair the result feels in a given case. When a called witness proves unhelpful, seek section 157 permission promptly rather than trying to work around an uncooperative witness through indirect questioning that risks its own objections. And when selecting an impeachment strategy under section 158, commit to the strongest available route rather than diluting the attack across all three — a well-proven prior inconsistent statement typically lands harder than a thin reputation attack stitched on as an afterthought.

## Sections 159 to 168 — corroboration, refreshing memory, document production, and the Judge's own power to question

### The dispute this solves

::: oneminute
The last ten sections of Chapter X gather the remaining mechanical tools of trial practice. Sections 159 to 161 govern corroboration: questioning a witness about surrounding circumstances to corroborate their account (159), proving a witness's own prior consistent statement to corroborate later testimony (160), and the wide-ranging proof permitted in connection with a proved section 26 or 27 statement (161). Sections 162 to 164 govern refreshing memory: a witness may consult a contemporaneous writing — their own, or another's if known correct when read, or a copy where the original's absence is justified, or a professional treatise for an expert — to refresh recollection (162), may testify to facts recorded even without independent memory of them if the record was known correct (163), and the adverse party has an absolute right to see any such writing and cross-examine on it (164). Sections 165 to 167 govern the machinery of compelled document production: a summoned document-holder must bring it regardless of objections to production or admissibility, subject to the Court's own inspection and translation powers and a proviso protecting Presidential-Ministerial communications (165); a document produced on notice and inspected must be given in evidence if the producing party requires it (166); and refusing to produce on notice bars later use of that document without consent or a Court order (167). Section 168 closes the chapter with the Judge's own sweeping power to ask any question, in any form, at any time, of any witness or party, and to order production of any document or thing — subject to two provisos preserving the Act's own relevance-and-proof requirements and the privileges the Act itself grants under sections 127 to 136 and the reasonable-grounds discipline of sections 151-152.
:::

::: story
Section 168 is the capstone of the entire chapter, and its two provisos are worth reading as a single sentence: the Judge may ask anything, at any time, of anyone — but the ultimate judgment must still rest on facts the Act itself declares relevant and duly proved, and the Judge's own power cannot be used to strip away a witness's privilege under sections 127 to 136, or to ask the kind of baseless credit-shaking question sections 151 and 152 would forbid if asked by counsel. The Judge gets more latitude than either party, but not unlimited latitude — the same guardrails that bind the advocates still bind the Bench.
:::

### The Act, decompiled

> **159.** When a witness whom it is intended to corroborate gives evidence of any relevant fact, he may be questioned as to any [[?other circumstances which he observed at or near to the time or place at which such relevant fact occurred]], if the Court is of opinion that such circumstances, if proved, would corroborate his testimony.
>
> **160.** In order to corroborate the testimony of a witness, any [[!former statement made by such witness relating to the same fact]], at or about the time when the fact took place, or before any authority legally competent to investigate the fact, may be proved.
>
> **161.** Whenever any statement, relevant under section 26 or 27, is proved, [[!all matters may be proved either in order to contradict or to corroborate it, or in order to impeach or confirm the credit of the person by whom it was made]], which might have been proved if that person had been called as a witness and had denied upon cross-examination the truth of the matter suggested.
>
> **162.** (1) A witness may, while under examination, refresh his memory by referring to any writing made by himself at the time of the transaction, or so soon afterwards that the Court considers it likely the transaction was then fresh in his memory:
>
> Provided that the witness may also refer to [[?any such writing made by any other person, and read by the witness within the time aforesaid, if when he read it, he knew it to be correct]].
>
> (2) Whenever a witness may refresh his memory by reference to any document, he may, with the permission of the Court, [[?refer to a copy of such document]]:
>
> Provided that the Court be satisfied that there is sufficient reason for the non-production of the original: Provided further that an [[?expert may refresh his memory by reference to professional treatises]].
>
> **163.** A witness may also testify to facts mentioned in any such document as is mentioned in section 162, although he has [[?no specific recollection of the facts themselves]], if he is sure that the facts were correctly recorded in the document.
>
> **164.** Any writing referred to under the provisions of the two last preceding sections shall be [[!produced and shown to the adverse party if he requires it]]; such party may, if he pleases, cross-examine the witness thereupon.
>
> **165.** (1) A witness summoned to produce a document shall, if it is in his possession or power, [[!bring it to Court, notwithstanding any objection]] which there may be to its production or to its admissibility:
>
> Provided that the validity of any such objection shall be decided on by the Court.
>
> (2) The Court, if it sees fit, may [[?inspect the document]], unless it refers to matters of State, or take other evidence to enable it to determine on its admissibility.
>
> (3) If for such a purpose it is necessary to cause any document to be translated, the Court may direct the translator to keep the contents secret, unless the document is to be given in evidence, and disobedience is [[!an offence under section 198 of the Bharatiya Nyaya Sanhita, 2023]]:
>
> Provided that no Court shall require any [[!communication between the Ministers and the President of India to be produced]] before it.
>
> **166.** When a party calls for a document which he has given the other party notice to produce, and such document is produced and inspected by the party calling for its production, he is [[!bound to give it as evidence if the party producing it requires him to do so]].
>
> **167.** When a party refuses to produce a document which he has had notice to produce, he [[!cannot afterwards use the document as evidence without the consent of the other party or the order of the Court]].
>
> **168.** The Judge may, in order to discover or obtain proof of relevant facts, [[!ask any question he considers necessary, in any form, at any time, of any witness, or of the parties]] about any fact; and may order the production of any document or thing; and neither the parties nor their representatives shall be entitled to make any objection to any such question or order, nor, without the leave of the Court, to cross-examine any witness upon any answer given in reply to any such question:
>
> Provided that the [[!judgment must be based upon facts declared by this Adhiniyam to be relevant, and duly proved]]:
>
> Provided further that this section shall not authorise any Judge to [[!compel any witness to answer any question, or to produce any document, which such witness would be entitled to refuse under sections 127 to 136]], both inclusive, if the question were asked or the document called for by the adverse party; nor shall the Judge ask any question which it would be improper for any other person to ask under section 151 or 152; nor shall he dispense with primary evidence of any document, except in the cases hereinbefore excepted.

| Text | What it does | Why it matters |
|---|---|---|
| S. 159 | Lets a Court explore surrounding circumstances to corroborate a witness | Corroboration need not come only from other witnesses — it can come from the same witness's account of neighbouring, unconnected details |
| S. 160 | Lets a prior consistent statement corroborate later testimony | A narrow, specific route — not a general license to bolster every witness with every prior consistent thing they have said |
| S. 161 | Opens up the full range of contradiction, corroboration, and credit-testing proof for a proved s. 26/27 statement, as if the maker had testified and denied the matter on cross-examination | Treats an unavailable declarant's admitted statement almost as if the declarant had actually been cross-examined |
| S. 162(1)-(2) | Permits refreshing memory from one's own contemporaneous writing, another's writing known correct when read, a copy where the original's absence is justified, or an expert's professional treatise | A carefully graduated set of allowances, each with its own condition, rather than one blanket rule |
| S. 163 | Lets a witness testify to a document's recorded facts without independent memory, if sure the record was correct | The book-keeper illustration is the paradigm case — routine, reliable record-keeping substitutes for memory |
| S. 164 | Gives the adverse party an absolute right to see and cross-examine on any writing used to refresh memory | A fairness backstop on the entire refreshing-memory apparatus |
| S. 165(1)-(3) | Compels bringing a summoned document to Court regardless of objections (which the Court then decides), gives the Court inspection and translation-secrecy powers, and shields Presidential-Ministerial communications absolutely | Balances compelled production against both admissibility gatekeeping and a narrow, high-level confidentiality carve-out |
| S. 166 | Converts inspection of a notice-produced document into an evidentiary obligation if the producing party insists | Stops a party from inspecting a document for tactical advantage without any risk of it being used against them |
| S. 167 | Bars later use of a document whose production was refused on notice, absent consent or a Court order | A real cost for refusing production — the refusing party loses the later option to spring the same document as their own evidence |
| S. 168's core power | Gives the Judge unrestricted questioning and production-ordering power, immune from party objection or unauthorised cross-examination | The most expansive single power in the entire chapter |
| S. 168's two provisos | Tether the Judge's power to the Act's own relevance-and-proof rules, and preserve every privilege under ss. 127-136 and the reasonable-grounds discipline of ss. 151-152 | Even the Judge's exceptional power operates inside the Act's own boundaries, not above them |

::: proviso Section 168's power is broad in reach but narrow in ultimate effect
The Judge may ask anything, of anyone, at any time, and neither side may object in the moment or cross-examine on the answer without leave. But the first proviso is the real limit: however wide-ranging the Judge's questioning, the eventual judgment can only rest on facts the Act itself declares relevant and duly proved. A Judge's own curiosity-driven line of questioning cannot, by itself, become the basis for a finding unless it independently satisfies the Act's ordinary relevance-and-proof rules.
:::

### How this actually runs

<MicroTree
  input="A witness needs to refresh recollection, or a document must be produced and its evidentiary status determined, or the Judge wishes to intervene directly with questions"
  :gates="[
    { q: 'Is the witness seeking to refresh memory from a writing?', yes: 'sections 162-164 govern — the writing must meet one of the section 162 conditions (own contemporaneous writing, another’s writing known correct when read, a justified copy, or an expert’s treatise), and must be shown to the adverse party on request under section 164' },
    { q: 'Is a document instead being compelled from a summoned witness, or handled under a notice-to-produce?', yes: 'sections 165-167 govern — production must occur despite objections (which the Court then rules on), and refusing production on notice bars later use of that document without consent or a Court order' },
    { q: 'Is the Judge instead intervening directly with a question or a production order?', yes: 'section 168 gives the Judge wide power to do so, immune from party objection, but the eventual judgment must still rest on relevant, duly proved facts, and the Judge cannot override a section 127-136 privilege or ask what section 151-152 would forbid' }
  ]"
  result="the correct sub-regime — refreshing memory, document production, or the Judge’s own questioning power — governs depending on who is initiating the request and what is actually being sought"
  caveat="the Judge’s section 168 power looks unlimited on its face but is tightly bounded by its own two provisos — read the power and its limits together, never the power alone"
  resultKind="mixed"
/>

### In plain English

**These ten sections are the trial's remaining toolkit, covering four distinct jobs.** Corroboration (159-161) lets a witness's account be reinforced through surrounding circumstances, prior consistent statements, or the full range of proof available for a proved unavailable-declarant statement. Refreshing memory (162-164) lets a witness lean on a reliable contemporaneous record rather than unaided recollection, with the adverse party always entitled to see and cross-examine on that record. Document production (165-167) compels a summoned document to Court regardless of objection, while punishing an unjustified refusal to produce on notice with a later bar on using that same document. And the Judge's own power (168) sits above all of it — broader than any party's, but still tied down by the Act's own relevance, proof, and privilege rules.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping stated here — Indian Evidence Act, 1872, s. 156 (questions tending to corroborate) to BSA s. 159, s. 157 (former statements to corroborate) to BSA s. 160, s. 158 (matters provable re: a proved statement, originally cross-referencing the old ss. 32-33 unavailable-declarant provisions, now BSA ss. 26-27) to BSA s. 161, s. 159 (refreshing memory) to BSA s. 162, s. 160 (testimony to facts in such a document) to BSA s. 163, s. 161 (adverse party's right re: refreshing writing) to BSA s. 164, s. 162 (production of documents) to BSA s. 165, s. 163 (giving as evidence a document called for and produced on notice) to BSA s. 166, s. 164 (using as evidence a document whose production was refused) to BSA s. 167, and s. 165 (Judge's power to put questions or order production, cross-referencing the old ss. 121-131 privilege sections, now BSA ss. 127-136) to BSA s. 168 — is the reported correspondence, continuing the three-section offset for the entire remainder of the chapter. No verified local Indian Evidence Act source text exists in `reference/` to check this against; treat the mapping as a flagged hypothesis until such a source is added. Two textual details are flagged as possible, not certain, modernising additions rather than pure carry-overs: section 165(3)'s reference to a translator's disobedience being an offence under the named Bharatiya Nyaya Sanhita section (a cross-Act reference that necessarily could not have existed in the old Act's own text in this form), and the express Presidential-Ministerial communications proviso in the same section.
:::

| Indian Evidence Act (reported) | BSA | What appears to have changed |
|---|---|---|
| S. 156 | S. 159 | Renumbered only, on the reported mapping |
| S. 157 | S. 160 | Renumbered only, on the reported mapping |
| S. 158 | S. 161 | Renumbered, with its internal cross-reference updated from the old ss. 32-33 to the new ss. 26-27 |
| S. 159 | S. 162 | Renumbered only, on the reported mapping |
| S. 160 | S. 163 | Renumbered only, on the reported mapping |
| S. 161 | S. 164 | Renumbered only, on the reported mapping |
| S. 162 | S. 165 | Renumbered, with its internal offence cross-reference updated to the new Bharatiya Nyaya Sanhita provision — flagged above |
| S. 163 | S. 166 | Renumbered only, on the reported mapping |
| S. 164 | S. 167 | Renumbered only, on the reported mapping |
| S. 165 | S. 168 | Renumbered, with its internal privilege cross-reference updated from the old ss. 121-131 to the new ss. 127-136 |

Every section in this final cluster carries at least one internal cross-reference to another section of the same Act, and every one of those cross-references has necessarily been renumbered along with its target. This is the cluster where a practitioner is most likely to cite a cross-reference by its old number out of habit — double-check every internal "section X" reference here against the current BSA numbering before relying on it.

### Test your instinct

::::instinct Scenario 21 — refreshing memory from a colleague's contemporaneous note
A witness wants to refresh his memory from a note made by a colleague at the time of the transaction, which the witness read shortly afterward and, at the time, believed to be accurate. Is this permitted under section 162?
:::ruling
Yes. The proviso to section 162(1) allows a witness to refer to a writing made by another person, read by the witness within the relevant time, if when he read it he knew it to be correct. The witness need not have written the note himself — knowing it was correct when read is what matters, not authorship.
:::
::::

::::instinct Scenario 22 — the bookkeeper who testifies without remembering
A company's bookkeeper is asked about a transaction recorded in the company's regularly kept books years earlier. She has no independent memory of the specific transaction but is certain the books were correctly kept at the time. Can she testify to the facts recorded?
:::ruling
Yes. This is the Act's own illustration to section 163: a bookkeeper may testify to facts recorded by him in books regularly kept in the course of business, if he knows the books were correctly kept, even though he has forgotten the particular transaction. Certainty about the reliability of the record substitutes for personal recollection of the underlying event.
:::
::::

::::instinct Scenario 23 — refusing production on notice, then trying to use the same document
A party is given notice to produce an agreement and refuses. The opposing side then leads secondary evidence of its contents. At trial, the refusing party now wants to produce the original itself, to contradict the secondary evidence or to show the agreement was not properly stamped. Can it do so?
:::ruling
No, not without consent or a Court order. This is the Act's own illustration to section 167 precisely: having refused to produce the document on notice, the party cannot afterwards use the document as evidence — including to contradict the secondary evidence given, or to raise a stamping objection — without the other party's consent or the Court's order. Refusing to produce on notice carries a real, lasting cost, not merely a delay.
:::
::::

::::instinct Scenario 24 — the Judge's own question that cannot save an unproved fact
During trial, the Judge personally asks a series of pointed questions of a witness, eliciting an answer that appears to support one party's case, but the underlying fact the answer addresses is never otherwise proved as the Act requires and is not one the Act declares relevant to the actual facts in issue. Can the Judge's own question and answer alone support the judgment on that point?
:::ruling
No. However broad section 168's questioning power is, and however sympathetic the party benefiting from the Judge's own line of questioning may be, the first proviso to section 168 is unambiguous: the judgment must be based upon facts declared by the Act to be relevant, and duly proved. A Judge's own question, however probing, cannot substitute for the Act's own relevance-and-proof requirements — the power to ask is not a power to manufacture proof that the Act itself would not otherwise recognise.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
No single authority is promoted here. The corroboration, memory-refreshing, document-production, and Judge's-power provisions are worked out directly from the Act's own detailed text and illustrations; no specific leading judgment is held with the certainty this project's citation rule requires.

#### Sword and shield
| | As a sword (seeking corroboration, production, or the Judge's intervention) | As a shield (resisting or managing the same) |
|---|---|---|
| Ss. 159-161 | Build corroboration deliberately from surrounding circumstances or genuine prior consistent statements, rather than leaving credibility to rest on the primary account alone | Scrutinise a claimed corroborating circumstance or prior statement for whether it genuinely satisfies the section's specific conditions, rather than accepting it as automatically bolstering |
| Ss. 162-164 | Prepare witnesses to refresh memory properly from qualifying writings well before trial | Insist on the section 164 right to see and cross-examine on any writing used to refresh memory — never let this pass unexercised |
| Ss. 165-167 | Use the notice-to-produce mechanism deliberately, knowing a refusal permanently bars the other side's later use of that document | Comply with a legitimate notice to produce, or accept the section 167 consequence knowingly, rather than refusing reflexively |
| S. 168 | Welcome the Judge's own questioning where it can genuinely clarify a relevant, provable fact | Object promptly, and on the correct proviso, if a Judge's question would compel disclosure of a privileged matter under ss. 127-136, or ask what ss. 151-152 would forbid |

#### The limitation clock
None of its own. All ten sections operate entirely within the pending proceeding; none carries an independent limitation period, though section 165's document-production obligation is of course subject to whatever summons timeline the Court sets.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 161 (proof connected with a proved s. 26/27 statement) | This Act, ss. 26-27 (statements of persons who cannot be called as witnesses) | Section 161 has no independent field of operation except in connection with a statement already admitted under these two sections |
| S. 165(3) | Bharatiya Nyaya Sanhita, 2023, s. 198 (offence for the named disobedience) | The secrecy-direction offence is defined entirely by cross-reference to this specific BNS section |
| S. 168's second proviso | This Act, ss. 127-136 (witness privileges) and ss. 151-152 (reasonable-grounds discipline) | The Judge's own questioning power is expressly and directly bounded by these two clusters, tying the whole chapter together at its close |

#### The authorities
No confidently recalled leading authority is promoted for this cluster with the certainty this project's citation rule requires.

#### Strategy and drafting
Where a witness's memory of a key transaction may be uncertain by the time of trial, identify and preserve a qualifying contemporaneous writing early, and be ready to produce it to the adverse party the moment section 164 is invoked — resisting or delaying that disclosure only invites an adverse inference. When serving or responding to a notice to produce, treat the decision to comply or refuse as final and strategic, not provisional — section 167's later-use bar has no grace period. And when a Judge begins questioning a witness directly, listen for whether the line of inquiry risks touching a privileged matter under sections 127 to 136, and object immediately and specifically by reference to the second proviso to section 168 — silence in the moment can be read as acquiescence to a line of questioning that should have been foreclosed.

## Chapter X part III consolidation, and Chapter X as a whole — has the examination stayed inside its own guardrails?

1. **Was a credit-only answer within one of section 156's two narrow exceptions before any attempt was made to contradict it?**
2. **Is a corroboration argument resting on section 159's surrounding circumstances, section 160's prior consistent statement, or section 161's proved unavailable-declarant statement — and does the specific evidence actually satisfy that section's own condition?**
3. **Was a refreshed-memory writing shown to the adverse party the moment section 164 was invoked, with no delay or resistance?**
4. **Did a party comply with, or knowingly accept the consequence of refusing, a notice to produce under sections 165 to 167?**
5. **If the Judge intervened directly under section 168, does the resulting judgment still rest on facts the Act itself declares relevant and duly proved, and did the Judge's questioning respect every privilege under sections 127 to 136 and the reasonable-grounds discipline of sections 151-152?**

This closes Chapter X (ss. 140-168) and the whole of Phase 8's second half. Chapters XI and XII — the short but practically important closing chapters on improper admission and rejection of evidence (s. 169), and the repeal-and-savings transitional provision for matters pending as of 1 July 2024 (s. 170) — are next.
