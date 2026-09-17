# Chapter IX part II — Of Witnesses: professional privilege, production, self-incrimination, and accomplice evidence (ss. 132-139)

This second part of Chapter IX finishes the witness-privilege family with the richest single provision in the chapter — advocate-client privilege under section 132, and its two companion sections on waiver and the client's own confidentiality — before moving to three further protections against being forced to produce documents or incriminate oneself, and closing with the two short, frequently-cited rules on accomplice evidence and the number of witnesses needed to prove a fact.

## Sections 132 to 134 — professional and legal-adviser privilege

### The dispute this solves

::: oneminute
A client tells her advocate, in confidence, the full and sometimes unflattering truth about her case, trusting that what she says will not be repeated in court. If the law did not protect that confidence, no client could ever speak candidly to counsel, and no advocate could give properly informed advice. Section 132 is that protection: an advocate cannot, without the client's express consent, disclose communications made in the course of professional service, the contents of documents seen in that service, or advice given — subject to two narrow exceptions for communications made in furtherance of an illegal purpose, and for facts the advocate observes showing a crime or fraud committed since the service began. Section 133 then makes clear that a client does not lose this protection simply by giving evidence in the suit, and section 134 gives the client a separate, parallel privilege over confidential communications with a legal adviser, which the client alone can waive by offering himself as a witness.
:::

::: story
Sections 132 and 134 look similar and are often confused, but they protect two different people's silence. Section 132 binds the *advocate* — he cannot disclose, whatever the client wants, except with the client's express consent. Section 134 binds compulsion *of the client* — the client cannot be forced to disclose the confidential communication, though the client can choose to open the door himself by offering to testify. Section 133 sits between them as a reassurance: a client who testifies about her own case has not thereby forfeited the section 132 protection over communications with her advocate.
:::

### The Act, decompiled

> **132.** (1) No advocate, shall at any time be permitted, unless with his client's express consent, to [[!disclose any communication made to him in the course and for the purpose of his service]] as such advocate, by or on behalf of his client, or to state the contents or condition of any document with which he has become acquainted in the course and for the purpose of his professional service, or to disclose any advice given by him to his client in the course and for the purpose of such service:
>
> Provided that nothing in this section shall protect from disclosure of — (a) any such communication made in furtherance of any [[!illegal purpose]]; (b) any fact observed by any advocate, in the course of his service as such, showing that any [[!crime or fraud has been committed]] since the commencement of his service.
>
> (2) It is immaterial whether the attention of such advocate referred to in the proviso to sub-section (1), was or was not directed to such fact by or on behalf of his client.
>
> *Explanation.* — The obligation stated in this section [[!continues after the professional service has ceased]].
>
> (3) The provisions of this section shall apply to [[!interpreters, and the clerks or employees of advocates]].
>
> **133.** If any party to a suit gives evidence therein at his own instance or otherwise, he shall not be deemed to have consented thereby to such disclosure as is mentioned in section 132; and, if any party to a suit or proceeding calls any such advocate, as a witness, he shall be deemed to have consented to such disclosure only if he [[?questions such advocate, on matters which, but for such question, he would not be at liberty to disclose]].
>
> **134.** No one shall be compelled to disclose to the Court any confidential communication which has taken place between him and his legal adviser, unless [[!he offers himself as a witness]], in which case he may be compelled to disclose any such communications as may appear to the Court necessary to be known in order to explain any evidence which he has given, but no others.

| Text | What it does | Why it matters |
|---|---|---|
| S. 132(1)'s "unless with his client's express consent" | Makes the privilege the client's to give or withhold, even though the section binds the advocate's mouth | The advocate cannot unilaterally decide disclosure is harmless — only the client's express consent opens the door |
| S. 132(1) proviso (a) — illegal purpose | Removes protection from a communication made *in furtherance of* an illegal purpose | Seeking legitimate legal advice about a past illegal act (even guilt itself) is still protected — see the section's own illustrations; only communications advancing a future or ongoing illegal scheme fall outside |
| S. 132(1) proviso (b) — crime or fraud observed | Removes protection only for a *fact observed* by the advocate showing a crime or fraud committed *since* the service began | Narrower than it sounds — it is not a general fraud exception, and does not reach facts about crimes committed before the professional relationship started |
| S. 132's Explanation (survives the relationship) | The privilege does not lapse when the retainer ends | A former client's confidences remain protected indefinitely, not just for the life of the engagement |
| S. 132(3) (interpreters, clerks, employees) | Extends the same privilege to the support staff who necessarily see or hear privileged material | Closes an obvious leak — the privilege would be worthless if it stopped at the advocate but not the people the advocate works with |
| S. 133's two limbs | Clarifies that a client testifying about her own case has not waived privilege; but a party who calls the advocate as a witness waives it only to the extent of the actual questions asked that would otherwise be off-limits | Waiver is precise and question-specific, not an all-or-nothing event triggered by any contact with the witness box |
| S. 134's "unless he offers himself as a witness" | The client's own confidentiality privilege can be self-waived only by testifying, and even then only to the extent necessary to explain evidence already given | A much narrower waiver trigger than a general "testified, so privilege is gone" rule |

::: proviso The illegal-purpose exception looks backward for guilt, forward for the scheme
The Act's own illustrations under section 132 make the boundary precise: a client confessing past forgery and asking for a defence is fully protected, because defending a person known to be guilty is not itself an illegal purpose. A client asking the advocate to help use a forged deed to sue someone is not protected, because that communication is in furtherance of a future illegal act. The dividing line is whether the communication is about seeking help *for* an illegal purpose going forward, not whether it confesses to guilt already incurred.
:::

::: proviso Section 134's waiver is bounded by necessity, not by the fact of testifying
Offering oneself as a witness opens the door to compelled disclosure of confidential communications only "as may appear to the Court necessary to be known in order to explain any evidence which he has given, but no others." A client who testifies about one narrow issue has not thrown open every confidential conversation ever had with a legal adviser — only what is genuinely necessary to make sense of the specific evidence given.
:::

### How this actually runs

<MicroTree
  input="A party seeks to compel disclosure of a communication, document content, or advice passing between a client and an advocate or other legal adviser"
  :gates="[
    { q: 'Is the disclosure sought from the advocate (or an interpreter, clerk, or employee covered by section 132(3)) rather than from the client directly?', yes: 'section 132 applies — the advocate cannot disclose without the client’s express consent, unless the communication was in furtherance of an illegal purpose, or is a fact the advocate observed showing a crime or fraud committed since the service began' },
    { q: 'Has the client given express consent to that disclosure, or does one of the two proviso exceptions to section 132 apply?', no: 'the advocate remains barred from disclosing, and the professional-service ending does not remove the bar' },
    { q: 'If the disclosure is instead sought by compelling the client to testify about a confidential communication with a legal adviser, has the client offered himself as a witness?', no: 'section 134 protects the client from compelled disclosure entirely' },
    { q: 'Having offered himself as a witness, is the specific disclosure sought actually necessary to explain evidence the client has already given?', no: 'the client remains protected as to communications beyond what is necessary for that explanation' }
  ]"
  result="the communication, document content, or advice remains privileged and cannot be compelled or, for the advocate, voluntarily disclosed"
  caveat="giving evidence about one's own case under section 133 does not, by itself, waive the section 132 privilege — waiver of either privilege is always narrow and tied to the specific consent given or the specific evidence already offered, never a blanket forfeiture"
  resultKind="mixed"
/>

### In plain English

**Two people hold two different privileges here, and the law is careful to keep them separate.** The advocate is bound by section 132 not to disclose client confidences — a duty that survives the retainer, extends to support staff, and yields only to the client's own express consent or to the two narrow illegal-purpose and crime-or-fraud exceptions. The client, separately, is protected by section 134 from being compelled to disclose confidential communications with a legal adviser at all — unless the client chooses to testify, and even then only to the extent genuinely necessary to explain the evidence given.

Section 133 exists to stop a common misunderstanding: a client does not lose privilege merely by testifying in her own case, and a client who calls her own former advocate as a witness waives privilege only on the specific matters actually questioned, not wholesale.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping stated here — Indian Evidence Act, 1872, s. 126 (professional communications) together with s. 127 (privilege extended to interpreters, clerks, employees) folding into BSA s. 132 as its subsections (1)-(3); s. 128 (privilege not waived by volunteering evidence) to BSA s. 133; and s. 129 (confidential communications with legal advisers) to BSA s. 134 — is the commonly reported correspondence. This reading is consistent with the offset shifting from six sections (through BSA s. 131) to five sections from BSA s. 132 onward, on the hypothesis that the old Act's separate s. 127 was absorbed as a subsection of the new s. 132 rather than kept as its own section. No verified local Indian Evidence Act source text exists in `reference/` to check this against; treat it as a flagged hypothesis until such a source is added.
:::

| Indian Evidence Act (reported) | BSA | What appears to have changed |
|---|---|---|
| Ss. 126-127 | S. 132 (as subsections (1)-(3)) | **Likely structural consolidation** — two old sections appear folded into one new section with three subsections, rather than a pure renumbering; flagged as the standout structural change in this cluster |
| S. 128 | S. 133 | Renumbered only, on the reported mapping |
| S. 129 | S. 134 | Renumbered only, on the reported mapping |

The consolidation of the old interpreters/clerks/employees section into section 132(3) is the one point worth double-checking against a verified source before relying on it in argument — the substance (that the privilege extends to support staff) appears preserved either way, but the section-number citation for that specific point changes depending on whether the practitioner is working from the old Act or the new one.

### Test your instinct

::::instinct Scenario 8 — the confessed forger seeking a defence
A client tells her advocate, "I did commit the forgery, and I need you to defend me at trial." The prosecution later seeks to compel the advocate to disclose this statement as an admission. Can the advocate be compelled?
:::ruling
No. This tracks the Act's own illustration precisely: defending a person known to be guilty is not itself an illegal purpose, so the communication remains protected under section 132. The advocate cannot be compelled to disclose it, and cannot even volunteer it, without the client's express consent. The client's honesty with her own lawyer is exactly the candour section 132 exists to protect, not to punish.
:::
::::

::::instinct Scenario 9 — the client who asks for help suing on a forged deed
A different client tells his advocate, "I want to obtain possession of property using a forged deed — please sue on it for me." Is this communication protected?
:::ruling
No. This is the Act's own second illustration: a communication made in furtherance of a criminal purpose is not protected from disclosure. Unlike the first scenario, this client is not confessing past wrongdoing and seeking a defence — he is enlisting the advocate's help to carry out a future illegal scheme. Proviso (a) to section 132(1) removes the privilege for exactly this kind of forward-looking illegal purpose.
:::
::::

::::instinct Scenario 10 — testifying about the case without losing privilege
A client testifies extensively about the facts of her own commercial dispute, including conversations she had with the opposing party. The opposing side argues she has thereby waived privilege over everything she ever told her own advocate. Is that right?
:::ruling
No. Section 133 says exactly the opposite: a party who gives evidence in her own suit, at her own instance or otherwise, is not deemed to have consented to disclosure of section 132 communications merely by doing so. Testifying about the underlying facts of the dispute is not the same as consenting to disclosure of confidential advocate communications — the two remain separate, and privilege over the latter survives untouched.
:::
::::

::::instinct Scenario 11 — offering herself as a witness under section 134
A client offers herself as a witness and testifies that she relied on legal advice in taking a particular action, referring generally to "advice I received." The opposing side seeks to compel disclosure of the full, detailed content of every conversation she ever had with her lawyer on the entire matter, arguing she opened the door by mentioning the advice at all. Should the Court allow this?
:::ruling
Only in part, and only if necessary. Section 134 allows compelled disclosure, once the client has offered herself as a witness, only to the extent the Court considers necessary to explain the evidence she has actually given — "but no others." If she referred generally to having received advice on a narrow point, the Court should confine compelled disclosure to what is needed to explain that specific reference, not throw open the entire course of dealings with her lawyer. A sweeping request for everything overreaches what section 134 permits.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
No single authority is promoted here. The illegal-purpose and crime-or-fraud exceptions, and the waiver mechanics of sections 133-134, are worked out directly from the Act's own detailed text and its own illustrations, which are unusually precise for this cluster; no specific citation is held with the certainty this project's rule requires.

#### Sword and shield
| | As a sword (seeking disclosure) | As a shield (resisting disclosure) |
|---|---|---|
| S. 132 | Build the case for the illegal-purpose or crime-or-fraud exception with specific facts, not a general suspicion of wrongdoing | Object promptly to any attempt to call the advocate, or the advocate's interpreter, clerk, or employee, absent express client consent or a genuine proviso exception |
| S. 133 | Recognise that calling an opposing party's former advocate as a witness only opens the door on the specific matters actually questioned | Prepare the client to testify about the underlying facts of her own case without fear that doing so alone waives privilege over legal advice |
| S. 134 | Argue precisely for what is "necessary to explain" evidence already given — not a blanket disclosure order — when a client has referred to legal advice while testifying | Confine a client's own testimony carefully to avoid inadvertently opening broader confidential ground than intended |

#### The limitation clock
None of its own. Both privileges are asserted within whatever proceeding is otherwise before the Court, and the Explanation to section 132 confirms the advocate's obligation has no time limit of its own — it survives the professional relationship indefinitely.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 132 (advocate privilege) | Advocates Act, 1961, and applicable Bar Council rules of professional conduct | The evidentiary privilege in section 132 works alongside, and is reinforced by, the advocate's independent professional and ethical duty of confidentiality under the Advocates Act and Bar Council rules |
| S. 134 (client's confidentiality) | This Act, s. 132 | The two sections protect the same underlying relationship from two directions — one binding the advocate's mouth, the other protecting the client from compelled disclosure — and are almost always pleaded together |

#### The authorities
No confidently recalled leading authority is promoted for this cluster with the certainty this project's citation rule requires.

#### Strategy and drafting
When advising a client to be candid, explain the illegal-purpose and crime-or-fraud boundary in plain terms up front — a client who understands the difference between confessing past guilt (protected) and seeking help with a future scheme (not protected) will communicate more usefully and more safely. When calling an opposing party's former advocate as a witness, frame questions narrowly and precisely, since section 133's waiver tracks the questions actually asked, not the advocate's general knowledge of the matter. And when a client must testify about facts touching on legal advice, prepare her testimony to reference the advice only as far as necessary — every additional detail volunteered risks being treated as evidence the Court needs to "explain," widening what can be compelled under section 134.

## Sections 135 to 139 — production, self-incrimination, and accomplice evidence

### The dispute this solves

::: oneminute
A non-party witness holding a mortgagee's title-deeds is asked to produce them in someone else's litigation; a witness is asked to produce a document that a third party — not the witness — could have refused to produce; and a witness is asked a question whose honest answer would incriminate the witness personally. Sections 135 to 137 handle these three production-and-compulsion problems, each with its own precise boundary. Sections 138 and 139 then close the chapter with two short, heavily-litigated rules: an accomplice is a fully competent witness against the accused, and no particular number of witnesses is ever required to prove any fact — quality, not headcount, is what the law asks for.
:::

::: story
These five sections share a common thread: each stops a witness's legitimate interest — in their own property, in someone else's confidentiality, or in their own liberty — from being casually overridden by the demands of someone else's litigation, while making sure none of these protections becomes an excuse to hide the truth altogether. Section 137, in particular, strikes a careful bargain: the witness must still answer, even at the risk of self-incrimination, but the answer itself cannot later be used against them in a criminal proceeding, except for giving false evidence. That is the price of the system's honesty — no witness gets to simply refuse the truth, but no witness is punished merely for telling it.
:::

### The Act, decompiled

> **135.** No witness who is not a party to a suit shall be compelled to [[!produce his title-deeds to any property]], or any document in virtue of which he holds any property as pledgee or mortgagee or any document the production of which might tend to criminate him, unless he has agreed in writing to produce them with the person seeking the production of such deeds or some person through whom he claims.
>
> **136.** No one shall be compelled to produce documents in his possession or electronic records under his control, [[!which any other person would be entitled to refuse to produce]] if they were in his possession or control, unless such last-mentioned person consents to their production.
>
> **137.** A witness [[!shall not be excused from answering any question]] as to any matter relevant to the matter in issue in any suit or in any civil or criminal proceeding, upon the ground that the answer to such question will criminate, or may tend directly or indirectly to criminate, such witness, or that it will expose, or tend directly or indirectly to expose, such witness to a penalty or forfeiture of any kind:
>
> Provided that no such answer, which a witness shall be compelled to give, shall [[!subject him to any arrest or prosecution]], or be proved against him in any criminal proceeding, except a prosecution for giving false evidence by such answer.
>
> **138.** An accomplice shall be a [[!competent witness]] against an accused person; and a conviction is not illegal if it proceeds upon the [[?corroborated testimony of an accomplice]].
>
> **139.** No particular number of witnesses shall in any case be [[!required for the proof of any fact]].

| Text | What it does | Why it matters |
|---|---|---|
| S. 135's three categories (title-deeds, pledgee/mortgagee documents, self-incriminating documents) | Protects a non-party witness's own documentary interests from being conscripted into someone else's litigation | The witness's own written agreement is the only way around the protection — the section is not overridden by a mere court order compelling a stranger to litigation |
| S. 136's "which any other person would be entitled to refuse to produce" | Lets a document-holder stand in the shoes of a third party's own privilege | Prevents an end-run around another person's privilege by simply demanding the document from whoever happens to physically hold it |
| S. 137's "shall not be excused" | Makes self-incrimination *not* a ground for refusing to answer at all — the opposite of a blanket privilege against self-incrimination | This is the section most likely to surprise a witness expecting an absolute right to silence outside the criminal-accused context |
| S. 137's proviso (use immunity) | In exchange for compelled testimony, guarantees the answer cannot found an arrest, prosecution, or be used against the witness in a criminal proceeding, except for a false-evidence prosecution based on that very answer | The trade-off that makes compulsion fair: truth is compelled, but the price of telling it is capped |
| S. 138's two limbs | An accomplice is competent to testify against the accused, and a conviction resting on corroborated accomplice testimony is not illegal | Confirms competency first, then addresses the practical safeguard (corroboration) that governs how much weight such testimony should carry |
| S. 139 | Removes any fixed evidentiary headcount requirement | The law asks for credible, sufficient evidence — one truthful and reliable witness can outweigh many unreliable ones |

::: proviso Section 137's use-immunity is narrow and specific
The proviso protects the witness only from an arrest, a prosecution, or the answer being *proved against him* in a criminal proceeding based on that compelled answer — with one express carve-out for a prosecution for giving false evidence by that very answer. It does not immunise the witness from every consequence of the underlying facts generally; if independent evidence of the same wrongdoing exists, that evidence remains usable. The immunity attaches to the compelled answer itself, not to a general amnesty for whatever it reveals.
:::

::: proviso Section 138's "not illegal" is a floor, not an endorsement
Saying a conviction is not illegal merely because it rests on corroborated accomplice testimony does not mean uncorroborated accomplice testimony is automatically insufficient, nor does it mean corroborated accomplice testimony is always enough on its own. The section states a legal floor — the conviction is not vitiated as a matter of law solely because an accomplice's corroborated testimony was used — while leaving the practical caution around accomplice evidence (an accomplice has an obvious motive to shift blame) to be worked out through settled practice and case law rather than the section's bare text.
:::

### How this actually runs

<MicroTree
  input="A witness (often a non-party) is asked to produce a document or electronic record, or to answer a question whose truthful answer might incriminate them"
  :gates="[
    { q: 'Is the witness not a party to the suit, and is the document sought their own title-deed, a pledgee/mortgagee document, or a document that might criminate them?', yes: 'section 135 protects the witness from compelled production, unless the witness has agreed in writing to produce it with the person seeking production or someone claiming through them' },
    { q: 'Is the document instead one that some other, third person would be entitled to refuse to produce if it were in that third person’s own possession or control?', yes: 'section 136 lets the document-holder decline production too, unless that third person consents' },
    { q: 'Is the witness instead being asked an oral question, on a relevant matter, and objecting that a truthful answer would tend to incriminate them or expose them to a penalty or forfeiture?', yes: 'section 137 requires the witness to answer anyway — self-incrimination is not a valid ground to refuse — but the compelled answer cannot found an arrest or prosecution, or be proved against the witness in a criminal proceeding, except for a prosecution for giving false evidence by that answer' }
  ]"
  result="production or the answer is compelled or excused precisely as sections 135-137 individually provide, with section 137’s use-immunity attaching wherever an answer is actually compelled on self-incrimination grounds"
  caveat="none of these three sections operates as a general right of silence — each is a narrow, specific rule about a particular kind of production or a particular kind of question, and section 137 in particular compels rather than excuses the answer"
  resultKind="mixed"
/>

### In plain English

**Sections 135 and 136 are about paper (and now, electronic records), not about testimony.** They stop a non-party witness's own documents, or documents a third party could have shielded, from being produced on demand — subject to written agreement or the third party's consent. Section 137 is about the spoken answer, and works in the opposite direction from what many witnesses expect: it does *not* create a right to refuse an incriminating answer. Instead, it forces the answer while promising the witness that the answer itself cannot be turned into a weapon against them later, except if they lied.

Sections 138 and 139 then round out the chapter with two settled, practical points: an accomplice can testify against the accused and a conviction resting on corroborated accomplice evidence is lawful, and no fixed number of witnesses is ever required — one credible witness can carry a case that ten unreliable ones could not.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping stated here — Indian Evidence Act, 1872, s. 130 (production of title-deeds) to BSA s. 135, s. 131 (production of documents another person could refuse) to BSA s. 136, s. 132 (witness not excused from answering on incrimination grounds) to BSA s. 137, s. 133 (accomplice) to BSA s. 138, and s. 134 (number of witnesses) to BSA s. 139 — is the commonly reported one-to-one correspondence, continuing the five-section offset already noted for ss. 132-134 above. No verified local Indian Evidence Act source text exists in `reference/` to check the old sections' exact wording against the new ones; treat the mapping as a flagged hypothesis until such a source is added. Section 136's express reference to "electronic records under his control," alongside documents, is flagged as a possible modernising addition rather than assumed to be a pure carry-over, consistent with the same-pattern flag used elsewhere in this project for similarly worded electronic-inclusion language.
:::

| Indian Evidence Act (reported) | BSA | What appears to have changed |
|---|---|---|
| S. 130 | S. 135 | Renumbered only, on the reported mapping |
| S. 131 | S. 136 | Renumbered with a likely modernising addition — express inclusion of electronic records under the witness's control, flagged above |
| S. 132 | S. 137 | Renumbered only, on the reported mapping |
| S. 133 | S. 138 | Renumbered only, on the reported mapping |
| S. 134 | S. 139 | Renumbered only, on the reported mapping |

Sections 138 and 139, in particular, are among the most frequently cited sections in the entire Evidence Act tradition — "an accomplice is a competent witness" and "no particular number of witnesses is required" are propositions every criminal-law practitioner will have argued from memory under their old numbers. The one discipline that changes is making sure the new numbers are what actually get pleaded and cited from the date this Act applies.

### Test your instinct

::::instinct Scenario 12 — the mortgagee dragged into someone else's suit
A bank holds a mortgage document on a property that is now the subject of an unrelated ownership dispute between two other parties. One of those parties wants to compel the bank, as a non-party witness, to produce the mortgage document. The bank has never agreed in writing to produce it. Can it be compelled?
:::ruling
No, not on this alone. Section 135 protects a non-party witness from being compelled to produce a document by virtue of which the witness holds property as a mortgagee, unless the witness has agreed in writing to produce it with the person seeking production or someone claiming through them. The bank's mortgage document falls squarely within this protection, and without the required written agreement, production cannot be compelled under this section.
:::
::::

::::instinct Scenario 13 — the honest witness who admits to a crime on the stand
A witness in a civil suit is asked a question whose truthful answer would reveal that the witness personally committed a minor offence years earlier, unrelated to anyone else's case but relevant to a fact in issue. The witness refuses to answer, citing the risk of self-incrimination. Is the refusal valid?
:::ruling
No. Section 137 is explicit: a witness shall not be excused from answering a relevant question merely because the answer would tend to criminate the witness. The witness must answer. What the witness receives in exchange is the proviso's protection — that compelled answer cannot be used to arrest or prosecute the witness, or be proved against the witness in a criminal proceeding, except in a prosecution for giving false evidence through that very answer. The witness cannot use the risk of self-incrimination as a shield to silence, but is shielded from the compelled answer being weaponised afterward.
:::
::::

::::instinct Scenario 14 — convicting on an accomplice's word alone
An accused is convicted substantially on the testimony of an accomplice, which the trial court found to be corroborated in material particulars by independent evidence. The defence argues the conviction is illegal because it rests on an accomplice's word. Is the defence right?
:::ruling
No. Section 138 states directly that an accomplice is a competent witness against an accused person, and that a conviction is not illegal merely because it proceeds upon the corroborated testimony of an accomplice. Since the trial court found the accomplice's testimony corroborated in material particulars, the conviction is not rendered illegal on this ground. The defence's real avenue, if any, is to attack the sufficiency or quality of the corroboration on the facts — not to argue that accomplice evidence can never sustain a conviction as a matter of law.
:::
::::

::::instinct Scenario 15 — the single witness against a crowd of the unconvinced
A fact in a civil trial is proved by the testimony of a single, credible witness, while the opposing side produces three witnesses whose accounts are inconsistent and evasive. The opposing side argues that numbers should favour them. Should they?
:::ruling
No. Section 139 states plainly that no particular number of witnesses is required to prove any fact. What matters is the quality and credibility of the testimony, not the headcount on either side. A single reliable witness can prove a fact that three unreliable ones cannot displace. Counting witnesses, rather than weighing their credibility, is not how the law asks a Court to decide a case.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
No single authority is promoted here. The production protections in sections 135-136, the compel-but-immunise structure of section 137, and the settled propositions in sections 138-139 are worked out directly from the sections' own clear text; no specific leading judgment for any of the five is held with the certainty this project's rule requires — though a practitioner working an accomplice-corroboration argument in practice will typically also draw on the substantial body of settled case law on what "corroboration in material particulars" requires, which this project holds back rather than cite without full confidence in a specific reference.

#### Sword and shield
| | As a sword (seeking production or an answer) | As a shield (resisting production or an answer) |
|---|---|---|
| S. 135-136 | Seek the witness's written agreement, or the relevant third party's consent, as the actual route to compel production | Decline production of one's own title-deeds, pledgee/mortgagee documents, self-incriminating documents, or documents a third party could itself have shielded, absent that agreement or consent |
| S. 137 | Press a relevant question to its full answer, reminding a reluctant witness that self-incrimination is not a valid ground to refuse | Advise a compelled witness clearly on the scope of the proviso's protection, so the witness answers fully without fearing an unprotected consequence beyond what the proviso actually excludes |
| S. 138 | Build the corroboration record carefully where the case depends on accomplice testimony, rather than leaving competency to do all the work | Attack the sufficiency of corroboration in material particulars, not the bare competency of the accomplice as a witness |
| S. 139 | Focus resources on the credibility of fewer, stronger witnesses rather than the sheer number produced | Do not assume a numerical disadvantage is fatal — challenge the quality of the opposing witnesses directly |

#### The limitation clock
None of its own. Each of these five provisions operates within whatever suit or proceeding is otherwise before the Court, and none carries an independent limitation period.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 136 (documents/electronic records another could refuse) | This Act, Chapter V (documentary evidence generally, especially ss. 61-63 on electronic records) | Where the document sought is an electronic record, the production question under section 136 sits alongside, and does not displace, the certificate and authentication regime for electronic records generally |
| S. 137 (self-incrimination) | Constitution of India, Article 20(3), and Bharatiya Nagarik Suraksha Sanhita, 2023 | Article 20(3)'s protection against being compelled to be a witness against oneself operates primarily for an accused person; section 137's use-immunity is the evidentiary mechanism that lets ordinary witnesses (not accused persons in their own trial) be compelled to answer without offending that broader constitutional value |
| S. 138 (accomplice evidence) | Bharatiya Nyaya Sanhita, 2023 (substantive offences an accomplice's testimony is typically used to prove) | Accomplice evidence is a recurring proof mechanism precisely in prosecutions for offences under the BNS involving multiple participants — conspiracy, organised crime, and similar group offences |

#### The authorities
No further authority beyond what is stated above is confidently recalled for this cluster with the certainty this project's citation rule requires.

#### Strategy and drafting
When resisting production under sections 135 or 136, put the objection on record immediately and precisely — identify which of the named categories (title-deed, pledgee/mortgagee document, self-incriminating document, or a third party's privileged document) applies, rather than making a general relevance-based objection that invites an easy rebuttal. When a witness must answer an incriminating question under section 137, make sure the record reflects that the answer was compelled, so the proviso's protection is unambiguously available if the same subject matter later surfaces in a criminal proceeding. When the case turns on accomplice testimony, build corroboration in material particulars methodically before trial — identify the specific independent facts that will corroborate the accomplice's account, rather than hoping the testimony will be found sufficient on its own. And never structure a case strategy around producing the greater number of witnesses — section 139 means the opposing side's numerical advantage, if their witnesses are weak, is not itself a threat.

## Chapter IX part II consolidation — whose privilege, and whose burden, is actually in play?

1. **Is the disclosure sought from the advocate, under section 132, or compelled from the client, under section 134?** These are two different privileges belonging to two different people, and each has its own waiver mechanics.
2. **Does one of section 132's two narrow exceptions — illegal purpose, or a crime or fraud observed since the service began — actually apply on these specific facts?** Neither exception is a general licence to pierce privilege on mere suspicion.
3. **If production of a document or electronic record is sought from a non-party witness, does section 135 or section 136 protect it, absent the witness's written agreement or a third party's consent?**
4. **If an oral answer risks self-incrimination, remember section 137 compels the answer rather than excusing it** — the protection lies entirely in the proviso's use-immunity, not in a right to refuse.
5. **If the case rests on accomplice testimony or a numerically thin set of witnesses, is the real question corroboration and credibility (sections 138-139), rather than competency or headcount?**

This closes Chapter IX (ss. 124-139) and Phase 8's first half. Chapter X, on the examination of witnesses — order of examination, examination-in-chief, cross-examination, re-examination, leading questions, and hostile witnesses — is next.
