# Chapter V (part V) — Of Documentary Evidence: presumptions as to certified, official and institutional documents (ss. 78-85)

Chapter V, "Of Documentary Evidence," runs ss. 56-93. Parts I-IV (`chapter-05a.md` through `chapter-05d.md`) covered how documents are proved — primary and secondary evidence, electronic records, execution and comparison, and public documents. From here, the Act's own "Presumptions as to documents" sub-heading opens a different kind of provision: instead of telling a party how to prove something, sections 78 to 93 tell the Court what it may, or must, simply presume once certain formal conditions are met — without the party leading any further evidence. This file covers the first eight of those sixteen sections: the general presumption of genuineness for certified and judicial-record documents (ss. 78-79), and six further categories of institutional document each carrying its own genuineness presumption (ss. 80-85). The remaining eight sections (ss. 86-93) — the electronic-signature-specific presumptions, the discretionary presumptions, and the document-age presumptions — follow in `chapter-05f.md`.

## Sections 78 to 79 — presuming certified and judicial-record documents genuine

### The dispute this solves

::: oneminute
A party has gone to the trouble of obtaining a certified copy under section 75, exactly as that section requires — dated, subscribed, sealed. Must she now call the certifying officer as a witness to prove the certificate is genuine, defeating the entire point of the shortcut? Section 78 says no: once a document purports to be a properly certified document of the kind the law makes admissible, and purports to be certified by a government officer, the Court presumes it genuine on its face. Section 79 extends the same logic to documents purporting to record evidence, statements, or confessions taken in a judicial proceeding.
:::

::: story
A certificate that has to be proved genuine before it can do its job as a certificate defeats its own purpose. The law's answer is to trust the institutional signature and seal themselves, as a starting point — not as the final word, since presumptions can be rebutted, but as the default so the certifying mechanism is not self-defeating.
:::

### The Act, decompiled

> **78.**(1) The Court [[!shall presume]] to be genuine every document purporting to be a certificate, certified copy or other document, which is by law declared to be admissible as evidence of any particular fact and which purports to be duly certified by any officer of the Central Government or of a State Government:
>
> Provided that such document is substantially in the form and purports to be executed in the manner directed by law in that behalf.
>
> (2) The Court [[!shall also presume]] that any officer by whom any such document purports to be signed or certified, held, when he signed it, the official character which he claims in such paper.
>
> **79.** Whenever any document is produced before any Court, purporting to be a record or memorandum of the evidence, or of any part of the evidence, given by a witness in a judicial proceeding or before any officer authorised by law to take such evidence or to be a statement or confession by any prisoner or accused person, taken in accordance with law, and purporting to be signed by any Judge or Magistrate, or by any such officer as aforesaid, the Court [[!shall presume]] that— (i) the document is genuine; (ii) any statements as to the circumstances under which it was taken, purporting to be made by the person signing it, are true; and (iii) such evidence, statement or confession was duly taken.

| Text | What it does | Why it matters |
|---|---|---|
| S. 78(1) | Presumes genuine any document that purports to be a certificate, certified copy, or other law-declared-admissible document certified by a Central or State Government officer | This is the direct payoff for section 75's certificate requirements — a properly certified copy does not need its own genuineness separately proved |
| S. 78(1), proviso | Withholds the presumption unless the document is substantially in the form and manner the law directs | A document that is certified but does not follow the prescribed form or manner does not get the automatic presumption |
| S. 78(2) | Presumes that the certifying officer held the official character he claimed, at the time he signed | Removes the need to separately prove the officer's post or authority every time a certified document is tendered |
| S. 79, clauses (i)-(iii) | Presumes genuineness, truth of recorded circumstances, and due taking for documents purporting to record judicial evidence, statements, or confessions signed by a Judge, Magistrate, or authorised officer | Goes further than section 78 — it presumes not just genuineness but the truth of how the document says it was taken, for this specific class of judicial-record document |

::: proviso A presumption of genuineness is not a presumption that the contents are true
Sections 78 and 79 presume that a document is what it purports to be — genuinely certified, genuinely signed by the officer it names. Section 79 goes one step further for judicial-record documents, additionally presuming the truth of statements about the circumstances of recording. Neither section presumes that the underlying facts stated in the document's substance are correct merely because the document is presumed genuine — genuineness and truth-of-contents are different questions, and only section 79's narrow extension touches the second at all, and only as to recording circumstances, not substantive truth generally.
:::

### How this actually runs

<MicroTree
  input="A party tenders a certified document and wants the court to presume it genuine without separately proving genuineness"
  :gates="[
    { q: 'Does the document purport to be a certificate, certified copy, or other document declared admissible by law, purporting to be certified by a Central or State Government officer?', no: 'section 78 supplies no presumption on these facts — genuineness must be proved the ordinary way, though section 79 may still apply if the document is a judicial record' },
    { q: 'Is the document substantially in the form and executed in the manner the law directs for that kind of certified document?', no: 'the proviso withholds the presumption even though the document is otherwise the right kind of certified document' },
    { q: 'Separately, does the document purport to be a judicial record of evidence, a statement, or a confession, signed by a Judge, Magistrate, or an officer authorised to take it?', no: 'the wider section 79 presumption of genuineness, truth of recording circumstances, and due taking does not apply, though section 78 may still apply on its own facts' }
  ]"
  result="the court presumes the document genuine under section 78, and, where section 79 also applies, additionally presumes the truth of its recorded circumstances and that the evidence, statement, or confession was duly taken — all without the tendering party separately proving these facts"
  caveat="both are presumptions, not conclusive proof — the opposing party remains free to lead evidence rebutting genuineness, or, under section 79, rebutting the truth of the recorded circumstances"
  resultKind="mandatory"
/>

### In plain English

**A properly certified document proves its own genuineness, until someone shows otherwise.** Section 78 is the direct reward for following section 75's certificate checklist — a document that is dated, subscribed, and sealed the way the law requires does not need a witness to swear it is genuine; the certification itself does that work, subject to the opposing party's right to rebut it.

Section 79 recognises that judicial-record documents — depositions, statements, confessions recorded by a Judge, Magistrate, or authorised officer — carry an extra layer of institutional reliability, and presumes not just that the document is genuine but that what it says about how it was taken is true. This is a mandatory presumption ("shall presume"), not a discretionary one, though like any presumption it can be displaced by contrary evidence.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping stated here — Indian Evidence Act, 1872, s. 79 (presumption as to genuineness of certified copies) to BSA s. 78, and s. 80 (presumption as to documents produced as record of evidence) to BSA s. 79 — is offered as the commonly reported correspondence. No verified local Indian Evidence Act source text exists in `reference/` to check the old sections' exact wording; treat this mapping as a flagged hypothesis until a verified source is added.
:::

| Indian Evidence Act (reported) | BSA | What appears to have changed |
|---|---|---|
| S. 79 | S. 78 | Renumbered, on the reported mapping — the certified-document genuineness presumption and the officer's-official-character presumption appear unchanged in substance |
| S. 80 | S. 79 | Renumbered, on the reported mapping — the judicial-record genuineness and truth-of-circumstances presumption appears unchanged in substance |

For a practitioner trained on the old Act, this cluster's substance should feel entirely familiar — on the reported mapping, this is a pure renumbering with no drafting or substantive change identified.

### Test your instinct

::::instinct Scenario 1 — the certificate with no seal
A public officer authorised by law to use an official seal issues a certified copy under section 75, but the copy carries no seal, only a signature and date. The party tenders it and asks the court to presume it genuine under section 78. Does the presumption apply?
:::ruling
No, not automatically. Section 75 requires the certificate to be sealed wherever the officer is authorised to use a seal, and section 78's proviso withholds the presumption unless the document is substantially in the form and manner the law directs. A certificate missing a seal the officer was authorised and required to affix is not substantially in the required form, so the section 78 presumption does not arise on these facts — the party is back to proving genuineness the ordinary way, or must obtain a properly sealed copy.
:::
::::

::::instinct Scenario 2 — the recorded confession with a genuine but false backstory
A confession recorded by a Magistrate in accordance with law states that the accused was informed of his rights and confessed voluntarily. The document is genuinely signed by the Magistrate. The accused now says the recorded circumstances are false — he was never actually informed of his rights, whatever the document says. Can he challenge this despite section 79?
:::ruling
Yes. Section 79 presumes the truth of statements as to the circumstances under which the document was taken — but a presumption is not conclusive proof, and the accused remains free to lead evidence rebutting it. He must actually displace the presumption with contrary evidence; the mere assertion is not enough, but a genuine factual dispute about what happened at the recording is exactly the kind of question the presumption yields to once real contrary evidence is on the table.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
No single authority is promoted here. Sections 78 and 79 are worked out through the Act's own presumption mechanics and their interaction with section 75's certificate requirements.

#### Sword and shield
| | As a sword (offering evidence) | As a shield (resisting evidence) |
|---|---|---|
| S. 78 | Tender a properly certified document and rely on the presumption instead of calling the certifying officer | Scrutinise the certificate against section 75's and section 78's form requirements before conceding the presumption applies; lead rebuttal evidence if genuinely disputed |
| S. 79 | Rely on the presumption of genuineness, truth of recording circumstances, and due taking for judicial-record documents | Challenge the recorded circumstances with actual contrary evidence — a bare denial does not displace a statutory presumption |

#### The limitation clock
None of its own. As with the rest of this chapter, an objection to the form or completeness of a certified document should be raised when it is tendered, not reserved for later.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 78 | Ch. V part IV, s. 75 (`chapter-05d.md`) | **RESOLVED.** S. 75's certificate requirements are exactly what s. 78 presumes genuine once met — this section is the forward debt that page logged. |
| S. 79 | Ch. V part III, ss. 65-73 (execution proof, `chapter-05c.md`) | Not a debt, but worth noting: s. 79's presumption applies to a narrower class (judicial-record documents) than the general execution-proof regime in ss. 65-73, and the two should not be conflated — an ordinary private document does not get s. 79's presumption merely because it is later filed in a judicial proceeding. |

#### The authorities
No confidently recalled leading authority is promoted for this cluster.

#### Strategy and drafting
When relying on section 78, check the certifying officer's form compliance (date, subscription, seal where required) before trial, not after an objection is raised — a defect discovered early can often be cured by requesting a fresh certified copy. When resisting a section 79 presumption, do not simply assert the recorded circumstances are false; have concrete contrary evidence ready, since a bare denial will not survive a properly taken judicial record.

## Sections 80 to 85 — presumptions for Gazettes, kept documents, maps, law books, powers-of-attorney, and electronic agreements

### The dispute this solves

::: oneminute
A party wants to prove what a government notification in the Official Gazette said, or what a particular country's law provides, or that a power-of-attorney was validly executed before a Notary Public — without separately proving the genuineness of each of these institutional documents from scratch every time. Sections 80 to 85 supply exactly that: a run of specific, narrow genuineness presumptions for six named categories of document, each chosen because the document's own institutional pedigree — Gazette, statutorily-kept record, government-made map, published law book, notarised power-of-attorney, or digitally-signed agreement — already does most of the work of proving it is what it claims to be.
:::

::: story
Nobody wants to call a government printer to prove that a Gazette notification is genuine, or a cartographer to prove a government-issued map is accurate. Once a document's institutional source already carries its own guarantee of reliability, the law trusts that guarantee as a starting point, rather than insisting on a live witness every time.
:::

### The Act, decompiled

> **80.** The Court [[!shall presume]] the genuineness of every document purporting to be the Official Gazette, or to be a newspaper or journal, and of every document purporting to be a document directed by any law to be kept by any person, if such document is kept substantially in the form required by law and is produced from proper custody.
>
> Explanation.—For the purposes of this section and section 92, [[=document is said to be in proper custody]] if it is in the place in which, and looked after by the person with whom such document is required to be kept; but no custody is improper if it is proved to have had a legitimate origin, or if the circumstances of the particular case are such as to render that origin probable.
>
> **81.** The Court [[!shall presume]] the genuineness of every electronic or digital record purporting to be the Official Gazette, or purporting to be electronic or digital record directed by any law to be kept by any person, if such electronic or digital record is kept substantially in the form required by law and is produced from proper custody.
>
> Explanation.—For the purposes of this section and section 93 electronic records are said to be in proper custody if they are in the place in which, and looked after by the person with whom such document is required to be kept; but no custody is improper if it is proved to have had a legitimate origin, or the circumstances of the particular case are such as to render that origin probable.
>
> **82.** The Court [[!shall presume]] that maps or plans purporting to be made by the authority of the Central Government or any State Government were so made, and are accurate; but maps or plans made for the purposes of any cause must be proved to be accurate.
>
> **83.** The Court [[!shall presume]] the genuineness of, every book purporting to be printed or published under the authority of the Government of any country, and to contain any of the laws of that country, and of every book purporting to contain reports of decisions of the Courts of such country.
>
> **84.** The Court [[!shall presume]] that every document purporting to be a power-of-attorney, and to have been executed before, and authenticated by, a Notary Public, or any Court, Judge, Magistrate, Indian Consul or Vice-Consul, or representative of the Central Government, was so executed and authenticated.
>
> **85.** The Court [[!shall presume]] that every electronic record purporting to be an agreement containing the electronic or digital signature of the parties was so concluded by affixing the electronic or digital signature of the parties.

| Text | What it does | Why it matters |
|---|---|---|
| S. 80 + Explanation | Presumes genuine every Official Gazette, newspaper, journal, or statutorily-kept document, kept substantially in the required form and produced from proper custody | The Explanation's "proper custody" test is shared with s. 92 (thirty-year-old documents) — the same standard governs both |
| S. 81 | Extends the identical presumption of s. 80 to the electronic or digital counterpart of the same categories | Deliberately paired with s. 80 so the physical and electronic forms of the same institutional documents get parallel treatment, not a weaker electronic-only regime |
| S. 82 | Presumes government-authority maps or plans were made by that authority and are accurate — but requires separate proof of accuracy for litigation-specific maps | Carves out maps made specifically for the case at hand, which get no free presumption of accuracy regardless of who made them |
| S. 83 | Presumes the genuineness of government-published law books and court-decision report books | Lets foreign or other jurisdictions' law be proved through a published book rather than a certified extract from the foreign government itself |
| S. 84 | Presumes a notarised or judicially/consularly authenticated power-of-attorney was validly executed and authenticated | Removes the need to call the Notary or authenticating officer as a witness every time a power-of-attorney is tendered |
| S. 85 | Presumes an electronic agreement bearing the parties' electronic or digital signatures was concluded by their affixing those signatures | The electronic-contracting counterpart to ordinary signature-based execution presumptions |

::: proviso A general presumption of accuracy for a government map does not extend to a litigation-made one
Section 82 draws a line between maps made by government authority in the ordinary course (presumed accurate) and maps made specifically for the purposes of a pending case, however professionally prepared (not presumed accurate — accuracy must be proved). A map commissioned by a party's own surveyor for trial gets no benefit from this section merely because the surveyor is a government employee.
:::

### How this actually runs

<MicroTree
  input="A party tenders one of six specific categories of institutional document and wants the court to presume it genuine or accurate"
  :gates="[
    { q: 'Does the document fall within one of the six named categories — Gazette or kept document (physical or electronic, sections 80-81), Government-authority map or plan (section 82), Government law book or law-report book (section 83), notarised or authenticated power-of-attorney (section 84), or electronically signed agreement (section 85)?', no: 'none of sections 80 to 85 supplies a presumption — genuineness or accuracy must be proved the ordinary way' },
    { q: 'For a Gazette or kept-document claim under sections 80 or 81, is the document kept substantially in the required form and produced from proper custody?', no: 'the presumption fails on these facts even though the document is the right general kind' },
    { q: 'For a map or plan under section 82, was it made by Government authority in the ordinary course rather than specifically for the purposes of this case?', no: 'a litigation-made map gets no presumption of accuracy under section 82, however accurate it may in fact be' }
  ]"
  result="the court presumes the document genuine (or, for section 82 maps, both genuine and accurate) without the tendering party separately proving it"
  caveat="each of these six presumptions is narrow to its own named category — a document that resembles one of these categories but does not actually meet its specific conditions gets no benefit from sections 80 to 85 at all"
  resultKind="mandatory"
/>

### In plain English

**Six specific kinds of institutional document each get their own tailored genuineness shortcut.** Gazettes, newspapers, and statutorily-kept records (sections 80 and 81, covering both physical and electronic versions identically) are presumed genuine if kept in proper form and proper custody. Government maps are presumed accurate — but only when made in the ordinary course of government business, not when commissioned for a lawsuit. Government-published law books, notarised powers-of-attorney, and electronically signed agreements each get their own matching presumption.

The pairing of sections 80 and 81, and again of sections 92 and 93 later in this chapter, is deliberate: wherever the Act creates a genuineness presumption for a physical document, it creates the identical presumption for the electronic or digital counterpart in the next section, so that the shift to electronic records does not quietly weaken proof standards that already existed for paper.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping stated here — Indian Evidence Act, 1872, s. 81 (Gazettes, newspapers, private Acts of Parliament) to BSA s. 80, with s. 81 apparently gaining an electronic-record counterpart at new BSA s. 81 that did not exist as a separate section in the 1872 Act; s. 83 (maps or plans made by Government authority) to BSA s. 82; s. 84 (collections of laws and reports of decisions) to BSA s. 83; s. 85 (powers-of-attorney) to BSA s. 84; and BSA s. 85 (electronic agreements) appearing to be an entirely new provision with no direct 1872-era counterpart — is offered as the commonly reported correspondence. No verified local Indian Evidence Act source text exists in `reference/` to check the old sections' exact wording or confirm whether s. 81's electronic counterpart is genuinely new machinery rather than a renumbered carry-over; treat the entire mapping as a flagged hypothesis until a verified source is added.
:::

| Indian Evidence Act (reported) | BSA | What appears to have changed |
|---|---|---|
| S. 81 | S. 80 | Renumbered, on the reported mapping — the Gazette/newspaper/kept-document genuineness presumption appears unchanged in substance |
| (no direct counterpart identified) | S. 81 | Flagged as a likely **new provision** — an electronic-or-digital-record counterpart to s. 80, extending the identical presumption to electronic Gazettes and electronically-kept records |
| S. 83 | S. 82 | Renumbered, on the reported mapping — the Government-map presumption, including the litigation-map carve-out, appears unchanged in substance |
| S. 84 | S. 83 | Renumbered, on the reported mapping — the law-book/law-report genuineness presumption appears unchanged in substance |
| S. 85 | S. 84 | Renumbered, on the reported mapping — the power-of-attorney presumption appears unchanged in substance |
| (no direct counterpart identified) | S. 85 | Flagged as a likely **new provision** — a presumption specific to electronically signed agreements, which could not have existed in the 1872-drafted original |

For a practitioner trained on the old Act, sections 80, 82, 83, and 84 should feel entirely familiar on the reported mapping; sections 81 and 85 are the two genuinely new additions in this cluster and deserve separate attention rather than being assumed to be mere renumbering.

### Test your instinct

::::instinct Scenario 1 — the Gazette notification kept in a private lawyer's file
A lawyer keeps a photocopy of an Official Gazette notification in her own case file, not in any government custody. She tenders it years later and asks the court to presume its genuineness under section 80. Does the presumption apply?
:::ruling
No, not on section 80 alone. The presumption requires the document to be produced from proper custody — the place where, and the person with whom, such a document is required by law to be kept. A lawyer's personal case file is not the custody the Explanation contemplates for an Official Gazette, unless she can show a legitimate origin or circumstances making that origin probable. She would need either the Gazette from its proper government-custodial source, or specific facts bringing her custody within the Explanation's saving clause.
:::
::::

::::instinct Scenario 2 — the electronically signed settlement agreement
Two parties conclude a settlement over email, with both affixing electronic signatures to a PDF agreement. One party later claims she never truly agreed to the terms, though her electronic signature appears on the document. Does section 85 resolve the dispute in the other party's favour outright?
:::ruling
Not outright. Section 85 presumes that the agreement was concluded by the parties affixing their electronic or digital signatures — it addresses the mechanics of conclusion, not whether the party's underlying consent was genuine, free, or informed. A challenge going to consent (fraud, coercion, mistake) is a separate question the presumption does not resolve; section 85 only presumes that the electronic act of signing is what concluded the document, not that every ordinary ground for setting aside a contract is unavailable.
:::
::::

::::instinct Scenario 3 — the litigation map presented as a Government survey
A party commissions a government survey department to prepare a map specifically for use at trial, showing a disputed boundary. She tenders it and argues section 82 presumes it accurate because a Government authority made it. Is she right?
:::ruling
No. Section 82 expressly withholds the presumption of accuracy for maps or plans made for the purposes of a cause, regardless of who makes them — even a Government department's own survey wing. Accuracy for a litigation-commissioned map must be separately proved, typically by calling the surveyor to testify to the methodology and results, exactly as with any other expert evidence.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
No single authority is promoted here. This cluster of six document-specific presumptions is worked out through the Act's own text and the parallel structure between physical and electronic counterparts.

#### Sword and shield
| | As a sword (offering evidence) | As a shield (resisting evidence) |
|---|---|---|
| Ss. 80-81 | Rely on the presumption for a Gazette, newspaper, or statutorily-kept document (or its electronic counterpart) instead of separately proving genuineness | Challenge proper custody or proper form specifically — the presumption fails if either condition is not met |
| S. 82 | Rely on a Government-authority map's presumed genuineness and accuracy for non-litigation maps | Point out that a map was made for the purposes of the case to defeat any claimed presumption of accuracy |
| S. 83 | Prove foreign or other jurisdictions' law through a published Government law book or report volume, without a certified extract | Challenge whether the book genuinely purports to be published under Government authority |
| S. 84 | Rely on a notarised or judicially/consularly authenticated power-of-attorney without calling the authenticating officer | Verify the authenticating body is one of the named categories — Notary Public, Court, Judge, Magistrate, Indian Consul or Vice-Consul, or Central Government representative |
| S. 85 | Rely on an electronically signed agreement's presumed conclusion by signature, but be ready to separately address consent challenges | Attack consent, capacity, or fraud directly — section 85 does not foreclose these grounds |

#### The limitation clock
None of its own. Objections to custody, form, or the litigation-purpose carve-out under section 82 should be raised when the document is tendered.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 80 and s. 81 | Ch. V, s. 92 and s. 93 (thirty-year-old document / five-year electronic-record presumptions) — not yet written | Both pairs of sections share the identical "proper custody" Explanation text by express cross-reference in the Act itself; when ss. 92-93 are written, the proper-custody test must not be redefined, only applied. |
| S. 85 | Ch. V part II, ss. 61-63 (electronic records certificate regime, `chapter-05b.md`) | Not a debt, but worth noting: section 85's presumption of conclusion-by-signature is narrower than, and does not substitute for, the ss. 61-63 certificate regime where the underlying electronic record's admissibility itself is challenged, not merely how it was concluded. |

#### The authorities
No confidently recalled leading authority is promoted for this cluster.

#### Strategy and drafting
Where relying on sections 80 or 81, be ready to show proper custody affirmatively if challenged — do not assume the presumption is self-executing once the document is produced. Where a map is tendered under section 82, ask early whether it was made for the purposes of the case; if so, plan to call the surveyor rather than relying on the presumption. Where an electronically signed agreement is challenged, separate the section 85 conclusion-by-signature question from any consent-based challenge, since conceding the former does not concede the latter.

## Chapter V (part V) consolidation — does this document's institutional pedigree carry its own presumption?

1. **Does the document fall within one of the eight specific categories covered in this file — general certified/judicial-record documents (ss. 78-79), Gazette/newspaper/kept documents physical or electronic (ss. 80-81), Government maps (s. 82), Government law books (s. 83), powers-of-attorney (s. 84), or electronically signed agreements (s. 85)?** If not, no presumption in this cluster applies, and genuineness or accuracy must be proved the ordinary way.
2. **Are the specific formal conditions each section attaches — proper form, proper custody, the litigation-purpose carve-out for maps, the named authenticating bodies for powers-of-attorney — actually met?** A document of the right general type but missing the specific formal conditions gets no presumption.
3. **Is the presumption being over-read as proof of something it does not cover — the truth of contents generally, or a party's genuine consent — rather than the narrower fact it actually presumes?** Genuineness, official character, and proper execution are not the same as truth of substance or valid consent.
4. **Has the opposing party been given a fair opportunity to rebut the presumption with actual contrary evidence, rather than the presumption being treated as conclusive?** These are rebuttable presumptions throughout this cluster.
