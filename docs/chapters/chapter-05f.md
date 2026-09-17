# Chapter V (part VI) — Of Documentary Evidence: presumptions as to electronic signatures, discretionary presumptions, and document age (ss. 86-93)

Chapter V, "Of Documentary Evidence," runs ss. 56-93. Parts I-V (`chapter-05a.md` through `chapter-05e.md`) covered proof of documents generally, electronic records, execution and comparison, public documents, and the first eight presumption sections. This sixth and final file closes out Chapter V with the remaining eight sections: the secure-electronic-signature presumptions that section 66 (`chapter-05c.md`) expressly relied on (s. 86), the Electronic Signature Certificate information presumption (s. 87), four discretionary "may presume" provisions covering foreign judicial records, books/maps/charts, electronic-message forwarding, and — breaking that pattern — the mandatory non-production-after-notice presumption (ss. 88-91), and the paired thirty-year-old-document / five-year-old-electronic-record age presumptions that share the "proper custody" test already defined in sections 80-81 (ss. 92-93).

## Sections 86 to 87 — presumptions specific to secure electronic records, secure electronic signatures, and Electronic Signature Certificates

### The dispute this solves

::: oneminute
Section 66, back in `chapter-05c.md`, excluded "secure electronic signatures" from its ordinary proof requirement — but left open exactly what a party gets in exchange for that carve-out. Section 86 answers this directly: where an electronic record or signature genuinely qualifies as "secure," the Court presumes it has not been altered since the relevant point in time, and presumes the signature was affixed by the subscriber with intent to sign. Section 87 supplies a companion presumption for the correctness of information listed in an Electronic Signature Certificate itself.
:::

::: story
Ordinary electronic signatures still need to be proved like any other disputed fact. A "secure" electronic signature is a different, technically defined category — one that carries its own cryptographic guarantee of integrity — and the law's answer is to let that guarantee do evidentiary work, rather than making every secure signature go through the same proof gauntlet as an unverified one.
:::

### The Act, decompiled

> **86.**(1) In any proceeding involving a secure electronic record, the Court [[!shall presume]] unless contrary is proved, that the secure electronic record has not been altered since the specific point of time to which the secure status relates.
>
> (2) In any proceeding, involving secure electronic signature, the Court [[!shall presume]] unless the contrary is proved that— (a) the secure electronic signature is affixed by subscriber with the intention of signing or approving the electronic record; (b) except in the case of a secure electronic record or a secure electronic signature, nothing in this section shall create any presumption, relating to authenticity and integrity of the electronic record or any electronic signature.
>
> **87.** The Court [[!shall presume]], unless contrary is proved, that the information listed in an [[=Electronic Signature Certificate]] is correct, except for information specified as subscriber information which has not been verified, if the certificate was accepted by the subscriber.

| Text | What it does | Why it matters |
|---|---|---|
| S. 86(1) | Presumes a secure electronic record unaltered since the relevant secure-status point in time, unless the contrary is proved | This is a rebuttable presumption of integrity, tied specifically to the technical status of being "secure" — not a general presumption for ordinary electronic records |
| S. 86(2)(a) | Presumes a secure electronic signature was affixed by the subscriber with intent to sign or approve | Answers exactly what section 66 assumed exists when it carved secure electronic signatures out of its own proof requirement |
| S. 86(2)(b) | Expressly confines the whole section's presumptions to secure electronic records and secure electronic signatures only | Prevents the presumption from being read as extending to authenticity or integrity of ordinary, non-secure electronic records or signatures |
| S. 87 | Presumes the correctness of information listed in an Electronic Signature Certificate, except unverified subscriber information, once the subscriber has accepted the certificate | Narrows the presumption specifically at unverified subscriber-supplied information — the Certificate is trusted for what the issuer actually verified, not blindly for everything it lists |

::: proviso The security status does the work — an ordinary electronic signature borrows nothing from this section
Section 86's presumptions apply only once a record or signature actually qualifies, on its own technical merits, as "secure" in the sense the wider electronic-records regime (ss. 61-63, `chapter-05b.md`) defines. An electronic signature that is not secure gets none of section 86's benefit and must still be proved the ordinary way — under section 66's general rule, or through the ss. 61-63 certificate regime for the underlying record.
:::

### How this actually runs

<MicroTree
  input="A party wants the court to presume an electronic record or signature integrity fact instead of separately proving it"
  :gates="[
    { q: 'Does the record or signature actually qualify as secure in the technical sense the electronic-records regime defines, rather than merely being electronic?', no: 'section 86 supplies no presumption at all on these facts — ordinary electronic-record or electronic-signature proof requirements apply in full' },
    { q: 'Is the claim about a secure electronic record’s lack of alteration since its secure-status point in time, or about a secure electronic signature having been affixed with intent to sign?', no: 'the claim falls outside what section 86 actually presumes, even though the record or signature is secure' },
    { q: 'Separately, is an Electronic Signature Certificate’s listed information being relied on, and was the certificate accepted by the subscriber?', no: 'section 87’s presumption of correctness does not apply, though section 86 may still apply on its own facts' }
  ]"
  result="the court presumes the secure record unaltered, or the secure signature affixed with intent to sign, or the certificate information correct (except unverified subscriber information) — subject in every case to the opposing party proving the contrary"
  caveat="none of this extends to ordinary, non-secure electronic records or signatures — section 86(2)(b) says so expressly, and an unverified item on a Certificate gets no presumption under section 87 either"
  resultKind="mandatory"
/>

### In plain English

**"Secure" is doing all the work in section 86 — it is not a synonym for "electronic."** Once a record or signature meets the technical threshold for security under the wider electronic-records scheme, the Court presumes, rebuttably, that it has not been tampered with and that the signature reflects genuine intent to sign. This is the presumption section 66's secure-electronic-signature carve-out was pointing toward — that carve-out is not a gap in proof, it is a shift from proving authenticity affirmatively to the opposing party disproving it.

Section 87 works similarly for Electronic Signature Certificates: once a subscriber has accepted a Certificate, its contents are presumed correct — except specifically for subscriber-supplied information the issuer never actually verified. A Certificate is trusted for what its issuer checked, not for everything printed on it.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping stated here — treating BSA ss. 86 and 87 as substantially carried over from the Information Technology Act, 2000's evidentiary presumption provisions (commonly cited as IT Act ss. 85B and 85C) rather than from the Indian Evidence Act, 1872 directly — is offered as the commonly reported position, reflecting that these presumptions did not originate in the 1872 Act at all. No verified local Information Technology Act or Indian Evidence Act source text exists in `reference/` to confirm either the exact prior section numbers or whether their substance has changed; treat this entire mapping as a flagged hypothesis until a verified source is added.
:::

| Prior source (reported) | BSA | What appears to have changed |
|---|---|---|
| Information Technology Act, 2000, s. 85B (reported) | S. 86 | Consolidated into the BSA itself, on the reported position — previously a presumption provision sitting in a separate statute, now brought directly into the evidence code |
| Information Technology Act, 2000, s. 85C (reported) | S. 87 | Same pattern — consolidated into the BSA from a separate statute, on the reported position |

For a practitioner trained on the old Act alone, this cluster may be genuinely unfamiliar territory rather than a simple renumbering — these presumptions are reported to have lived in the Information Technology Act, not the Evidence Act, before this consolidation. Verify the prior location before asserting it in submissions.

### Test your instinct

::::instinct Scenario 1 — the encrypted file that was never certified secure
A party produces an encrypted electronic file and argues that because it was encrypted, it must be presumed unaltered under section 86. Is this correct?
:::ruling
No. Section 86's presumption attaches to a record that qualifies as a "secure electronic record" in the technical sense the wider electronic-records scheme defines, not to any file that happens to use encryption. Encryption alone does not establish the specific secure status section 86(1) requires. Without meeting that technical threshold, the party must fall back on the ordinary ss. 61-63 certificate regime, or other proof, to establish the record's integrity.
:::
::::

::::instinct Scenario 2 — the Certificate listing an unverified email address
A subscriber accepts an Electronic Signature Certificate. The Certificate lists an email address that the issuing authority never actually verified, only recorded as supplied by the subscriber. A dispute arises over whether that email address is accurate. Does section 87 presume it correct?
:::ruling
No. Section 87 expressly excludes subscriber-supplied information that has not been verified by the issuer from its presumption of correctness — precisely to avoid extending the presumption to information the Certificate issuer never actually checked. The email address must be proved the ordinary way if disputed.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
No single authority is promoted here. This is a technical, definitionally driven presumption cluster worked out through the Act's own text.

#### Sword and shield
| | As a sword (offering evidence) | As a shield (resisting evidence) |
|---|---|---|
| S. 86 | Establish the technical secure-status threshold first, then rely on the presumption instead of separately proving non-alteration or signing intent | Challenge whether the record or signature genuinely meets the secure-status threshold before conceding either presumption |
| S. 87 | Rely on a Certificate's presumed-correct information once subscriber acceptance is shown | Isolate and challenge specifically the unverified subscriber-supplied items — these carry no presumption at all |

#### The limitation clock
None of its own. As elsewhere in this chapter, objections to the secure-status threshold or to unverified Certificate information should be raised when the evidence is tendered.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 86 | Ch. V part III, s. 66 (`chapter-05c.md`) | **RESOLVED.** S. 66 carved secure electronic signatures out of its general proof requirement on the assumption that a presumption existed elsewhere in this chapter — s. 86 is that presumption. |
| S. 86 and s. 87 | Ch. V part II, ss. 61-63 (`chapter-05b.md`) | These presumptions supplement, but do not replace, the ss. 61-63 certificate regime for the underlying electronic record's basic admissibility — a secure signature presumption under s. 86 does not itself satisfy a still-outstanding s. 63 certificate requirement for the record it is affixed to. |

#### The authorities
No confidently recalled leading authority is promoted for this cluster.

#### Strategy and drafting
Before invoking section 86, be ready to establish the technical secure-status threshold affirmatively — do not assume "electronic" is enough. When relying on an Electronic Signature Certificate under section 87, identify in advance which listed items are issuer-verified versus subscriber-supplied, since only the former carries the presumption of correctness.

## Sections 88 to 91 — discretionary presumptions and the non-production consequence

### The dispute this solves

::: oneminute
Not every institutional document gets the mandatory "shall presume" treatment sections 78 to 87 supply. Foreign judicial records, general-interest reference books, and forwarded electronic messages sit in a greyer zone — genuinely useful shortcuts, but ones the Court is trusted to apply with judgment rather than automatically. Sections 88 to 90 make these "may presume," discretionary. Section 91 breaks that pattern deliberately: where a party is called on to produce a document and simply does not, the Court is required, not merely permitted, to presume it was attested, stamped, and executed as the law requires — turning non-production itself into a evidentiary cost.
:::

::: story
A discretionary presumption tells the Court "you may trust this if the facts support it"; a mandatory one tells the Court "you must trust this unless proved otherwise." Foreign judicial certification practices vary too much to deserve automatic trust — but a party who is asked to produce a document and simply refuses should not be better off for having done so.
:::

### The Act, decompiled

> **88.**(1) The Court [[?may presume]] that any document purporting to be a certified copy of any judicial record of any country beyond India is genuine and accurate, if the document purports to be certified in any manner which is certified by any representative of the Central Government in or for such country to be the manner commonly in use in that country for the certification of copies of judicial records.
>
> (2) An officer who, with respect to any territory or place outside India is a Political Agent therefor, as defined in clause (43) of section 3 of the General Clauses Act, 1897, shall, for the purposes of this section, be deemed to be a representative of the Central Government in and for the country comprising that territory or place.
>
> **89.** The Court [[?may presume]] that any book to which it may refer for information on matters of public or general interest, and that any published map or chart, the statements of which are relevant facts, and which is produced for its inspection, was written and published by the person, and at the time and place, by whom or at which it purports to have been written or published.
>
> **90.** The Court [[?may presume]] that an electronic message, forwarded by the originator through an electronic mail server to the addressee to whom the message purports to be addressed corresponds with the message as fed into his computer for transmission; but the Court shall not make any presumption as to the person by whom such message was sent.
>
> **91.** The Court [[!shall presume]] that every document, called for and not produced after notice to produce, was attested, stamped and executed in the manner required by law.

| Text | What it does | Why it matters |
|---|---|---|
| S. 88(1)-(2) | Lets the Court presume a foreign judicial record's certified copy genuine and accurate if certified in the country's own commonly-used manner, confirmed by a Central Government representative there, including a Political Agent | A discretionary shortcut for foreign judicial records — the Court is not bound to accept every foreign certification practice automatically |
| S. 89 | Lets the Court presume authorship, date, and place of publication for public-interest reference books, published maps, and charts produced for its inspection | Recognises the practical impossibility of separately proving the authorship of every reference work a party wants to rely on |
| S. 90 | Lets the Court presume a forwarded electronic message matches what was originally fed in for transmission, but expressly bars any presumption about who sent it | The correspondence-of-content presumption and the identity-of-sender question are kept strictly separate — this section only ever answers the first |
| S. 91 | Requires the Court to presume a called-for-but-not-produced document was attested, stamped, and executed as the law requires | Converts a party's failure to produce, after being properly called upon, into a mandatory adverse evidentiary consequence rather than a mere discretionary inference |

::: proviso Section 90 never answers who sent the message
Section 90's presumption is narrowly about content correspondence — that what arrived at the addressee's end matches what the originator's computer sent. It says nothing about the sender's identity, and expressly forbids the Court from presuming that. Proving who actually sent a forwarded electronic message remains a separate evidentiary task, typically requiring proof of account control, IP or device metadata, or other identifying evidence — section 90 does none of that work.
:::

### How this actually runs

<MicroTree
  input="A party wants the court to apply a presumption from one of sections 88 to 91"
  :gates="[
    { q: 'Is the claim about a foreign judicial record certified copy (section 88), a public-interest reference book or published map/chart (section 89), or a forwarded electronic message’s content correspondence (section 90)?', no: 'check instead whether section 91’s mandatory non-production presumption applies on these facts' },
    { q: 'For sections 88 to 90, has the Court actually chosen to exercise its discretion to presume, on the facts before it?', no: 'no presumption arises — these are discretionary, not automatic, and the underlying fact must be proved the ordinary way if the court declines' },
    { q: 'Separately, was a document called for from the opposing party and not produced after proper notice to produce?', no: 'section 91’s mandatory presumption of due attestation, stamping and execution does not arise on these facts' }
  ]"
  result="under sections 88 to 90, the court may (but need not) presume the stated fact; under section 91, the court must presume due attestation, stamping and execution once notice to produce has gone unanswered"
  caveat="section 90 never presumes who sent a forwarded message, whatever it presumes about the message’s content — sender identity is always a separate proof burden"
  resultKind="mixed"
/>

### In plain English

**Three of these four presumptions are optional tools for the Court, not automatic entitlements for a party.** Sections 88, 89, and 90 all use "may presume" — the Court weighs the facts and decides whether the shortcut is warranted, rather than being bound to apply it. Section 91 is different by deliberate design: it is the one mandatory presumption in this cluster, and it exists specifically to discourage a party from simply refusing to produce a document once properly called upon to do so. Ignoring a notice to produce does not make the document disappear from the case — it triggers a presumption that the document was validly attested, stamped, and executed exactly as the law required.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping stated here — Indian Evidence Act, 1872, s. 86 (foreign judicial records) to BSA s. 88; s. 87 (books, maps, charts) to BSA s. 89; s. 88 (telegraphic messages) to BSA s. 90, apparently updated from telegraphic to electronic-message correspondence; and s. 89 (due execution of documents not produced) to BSA s. 91 — is offered as the commonly reported correspondence. No verified local Indian Evidence Act source text exists in `reference/` to confirm the old sections' exact wording, including whether s. 88's "telegraphic message" language has genuinely been replaced with "electronic message" or whether this is a modernising redrafting distinct from a pure renumbering; treat the entire mapping as a flagged hypothesis until a verified source is added.
:::

| Indian Evidence Act (reported) | BSA | What appears to have changed |
|---|---|---|
| S. 86 | S. 88 | Renumbered, on the reported mapping — the foreign-judicial-record presumption, including the Political Agent deeming provision, appears unchanged in substance |
| S. 87 | S. 89 | Renumbered, on the reported mapping — the books/maps/charts presumption appears unchanged in substance |
| S. 88 | S. 90 | Flagged as **renumbered with drafting changes** — the old provision is reported to have addressed telegraphic messages specifically; the BSA text addresses electronic messages forwarded by mail server, which reads as a modernised update to the same underlying idea rather than a pure carry-over of identical wording |
| S. 89 | S. 91 | Renumbered, on the reported mapping — the non-production presumption appears unchanged in substance |

For a practitioner trained on the old Act, sections 88, 89, and 91 should feel familiar; section 90 is the one worth reading closely even on the reported mapping, since "telegraphic" to "electronic" is unlikely to be a purely cosmetic change in a world without telegraphs.

### Test your instinct

::::instinct Scenario 1 — the foreign judicial record certified in an unfamiliar manner
A party tenders a certified copy of a foreign court's judicial record. The certification method is genuine but highly unusual, and no Central Government representative in that country has confirmed it as the commonly used method there. Must the court presume it genuine under section 88?
:::ruling
No. Section 88's presumption is conditioned on the certification being confirmed, by a representative of the Central Government in or for that country (including a deemed Political Agent), as the manner commonly in use there. Without that confirmation, the precondition for even a discretionary presumption is not met — and even where the precondition is met, "may presume" leaves the Court free not to, on the facts. The party would need to independently prove the record's genuineness.
:::
::::

::::instinct Scenario 2 — the forwarded email used to identify the sender
A party wants to prove not just that a forwarded email's content matches what was originally sent, but that a specific individual personally typed and sent it. She relies solely on section 90. Does this succeed?
:::ruling
No, not for the sender-identity question. Section 90 expressly forbids the court from presuming who sent the message — it only ever addresses whether the forwarded content corresponds to what was fed in for transmission. Proving the sender's identity requires separate evidence entirely outside this section, such as account-control evidence, device or login records, or admissions.
:::
::::

::::instinct Scenario 3 — ignoring a notice to produce and hoping for silence
A party is served a proper notice to produce a document under section 64 (`chapter-05c.md`). She simply does not respond and does not produce it, calculating that silence is safer than producing a document that might be unhelpful to her case. What happens under section 91?
:::ruling
Her silence works against her, not for her. Section 91 mandatorily presumes that a document called for and not produced was attested, stamped, and executed in the manner required by law. Refusing to produce does not keep the document's status in doubt — it resolves the doubt against the non-producing party by presumption. This is the sharpest illustration in this cluster of how the Act deliberately punishes strategic non-production rather than rewarding it.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
No single authority is promoted here. This cluster is worked out through the discretionary/mandatory distinction the Act's own text draws between sections 88-90 and section 91.

#### Sword and shield
| | As a sword (offering evidence) | As a shield (resisting evidence) |
|---|---|---|
| S. 88 | Secure Central Government representative confirmation of the foreign certification practice before relying on the presumption | Challenge the absence of that confirmation, or urge the court not to exercise its discretion even where the precondition is met |
| S. 89 | Rely on the presumption for public-interest reference books and published maps/charts rather than separately proving authorship | Point to specific facts undermining the presumed authorship, date, or place of publication |
| S. 90 | Rely on the content-correspondence presumption for a forwarded electronic message, but plan separate proof of sender identity | Concede content correspondence if genuinely undisputed, but hold the line on sender identity — it is never presumed |
| S. 91 | Serve a proper section 64 notice to produce, then invoke section 91 if the document is not produced | Produce the document, or explain non-production credibly, since silence triggers a mandatory adverse presumption |

#### The limitation clock
None of its own for ss. 88-90. For s. 91, the operative timing is that the notice to produce must actually have been served and gone unanswered before the presumption is available — not a deadline in the limitation-period sense, but a sequencing precondition worth confirming on the record.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 91 | Ch. V part III, s. 64 (notice to produce, `chapter-05c.md`) | S. 91's presumption is the practical payoff for a properly served s. 64 notice that goes unanswered — the two sections should be read and pleaded together, not in isolation. |
| S. 90 | Ch. V part II, ss. 61-63 (`chapter-05b.md`) | Not a debt, but worth flagging: s. 90's content-correspondence presumption for a forwarded message is narrower than, and does not substitute for, the ss. 61-63 certificate regime where the electronic record's basic admissibility (not just forwarding correspondence) is disputed. |

#### The authorities
No confidently recalled leading authority is promoted for this cluster.

#### Strategy and drafting
Where a foreign judicial record is central to the case, obtain the Central Government representative's confirmation of local certification practice well before trial, since section 88's discretionary presumption is unlikely to be exercised in a vacuum. Where a forwarded electronic message matters, plan sender-identity proof as a wholly separate line of evidence from content correspondence. Most importantly: when the other side fails to produce a document after a proper section 64 notice, affirmatively invoke section 91 rather than simply noting the non-production and moving on — the mandatory presumption has to be asked for to be used.

## Sections 92 to 93 — presumptions for old documents and old electronic records

### The dispute this solves

::: oneminute
A party possesses a decades-old title deed. The person who wrote and signed it is almost certainly dead, and no living witness can testify to its execution. Must her claim fail for want of a witness who does not exist? Section 92 says no: a genuinely old document, produced from custody the Court considers proper, carries its own presumption of authorship and due execution — age and proper custody substitute for a witness who cannot be found. Section 93 extends the identical idea to electronic records, at a shorter five-year threshold reflecting how much faster electronic evidence can become practically unrecoverable to prove by ordinary means.
:::

::: story
The older a genuine document gets, the harder it becomes to find anyone left alive to swear to its making — yet the document's own age and its production from a sensible place are themselves evidence of authenticity. The law's answer is to let time and proper custody do the work a witness would otherwise have had to do.
:::

### The Act, decompiled

> **92.** Where any document, purporting or proved to be thirty years old, is produced from any custody which the Court in the particular case considers proper, the Court [[?may presume]] that the signature and every other part of such document, which purports to be in the handwriting of any particular person, is in that person's handwriting, and, in the case of a document executed or attested, that it was duly executed and attested by the persons by whom it purports to be executed and attested.
>
> Explanation.—The Explanation to section 80 shall also apply to this section.
>
> Illustrations.
>
> (a) A has been in possession of landed property for a long time. He produces from his custody deeds relating to the land showing his titles to it. The custody shall be proper.
>
> (b) A produces deeds relating to landed property of which he is the mortgagee. The mortgagor is in possession. The custody shall be proper.
>
> (c) A, a connection of B, produces deeds relating to lands in B's possession, which were deposited with him by B for safe custody. The custody shall be proper.
>
> **93.** Where any electronic record, purporting or proved to be five years old, is produced from any custody which the Court in the particular case considers proper, the Court [[?may presume]] that the electronic signature which purports to be the electronic signature of any particular person was so affixed by him or any person authorised by him in this behalf.
>
> Explanation.—The Explanation to section 81 shall also apply to this section.

| Text | What it does | Why it matters |
|---|---|---|
| S. 92 | Lets the Court presume the handwriting, execution, and attestation of a document at least thirty years old, produced from proper custody | Age plus proper custody substitute for a live witness to execution, which becomes practically unobtainable after decades |
| S. 92, Explanation | Expressly imports section 80's "proper custody" test rather than defining a fresh one | The identical custody standard governs both the Gazette/kept-document presumption and this document-age presumption — one test, applied consistently |
| S. 92, Illustrations (a)-(c) | Three worked examples of what counts as proper custody — a long-term possessor's own deeds, a mortgagee's deeds while the mortgagor possesses, and a connected party's deeds held for safekeeping | Shows that "proper" custody does not require the document to be held by the person with the strongest formal claim to it — a plausible, explainable custodial arrangement suffices |
| S. 93 | Lets the Court presume an electronic signature on a five-year-old electronic record was affixed by the person it purports to be, produced from proper custody | The electronic-record counterpart to s. 92, at a much shorter age threshold reflecting how quickly electronic evidence can become impossible to prove by direct testimony |
| S. 93, Explanation | Expressly imports section 81's "proper custody" test, the electronic-record counterpart to section 80's | Keeps the physical and electronic age-presumption regimes symmetrical, exactly as ss. 80-81 were kept symmetrical |

::: proviso Thirty years for paper, five years for electronic records — the gap is deliberate, not a typo
Sections 92 and 93 do not use the same age threshold, and this is not an oversight. A thirty-year figure reflects how long it realistically takes for witnesses to a paper document's execution to become unavailable through death or memory loss. A five-year figure reflects how much faster the practical ability to independently verify an electronic record's provenance can erode — devices are replaced, accounts are closed, logs are purged, and personnel turn over far faster in the electronic environment than the human lifespan governs the paper one.
:::

### How this actually runs

<MicroTree
  input="A party produces an old document or electronic record and wants the court to presume its handwriting, execution, or signature genuine"
  :gates="[
    { q: 'For a paper document, is it at least thirty years old (purporting or proved); for an electronic record, is it at least five years old (purporting or proved)?', no: 'neither section 92 nor section 93 is available on age grounds — ordinary proof of execution or signature is required' },
    { q: 'Is the document or electronic record produced from custody the court, on these particular facts, considers proper — applying the section 80 or section 81 Explanation as applicable?', no: 'the age threshold alone is not enough — improper custody defeats the presumption even for a genuinely old document or record' },
    { q: 'Is the specific fact being presumed handwriting/execution/attestation (paper, section 92) or electronic-signature affixation (electronic record, section 93), rather than some other fact about the document?', no: 'the presumption does not extend to facts these sections do not actually cover, however old and properly held the document is' }
  ]"
  result="the court may presume the handwriting and due execution/attestation of the thirty-year-old paper document, or the electronic-signature affixation on the five-year-old electronic record, without separate proof"
  caveat="both presumptions are discretionary (‘may presume’), not automatic, and both depend on the court’s own view that the custody was proper on these particular facts — age alone never suffices"
  resultKind="discretionary"
/>

### In plain English

**Old age plus a sensible custodial story does the work a witness would otherwise have to do.** For paper documents, thirty years and proper custody let the Court presume the document's handwriting and execution genuine. For electronic records, the same idea applies at five years, reflecting how much faster electronic evidence's practical verifiability erodes compared to paper. Both presumptions borrow the identical "proper custody" test already defined for Gazettes and kept documents in sections 80 and 81 — the Act deliberately reuses one custody standard across every provision that needs one, rather than defining it freshly each time.

Both presumptions are discretionary, and both illustrations and Explanations exist specifically to guide the Court's judgment on what counts as "proper" custody on the facts of a given case — a long-term possessor's own title deeds, a mortgagee's retained deeds, or deeds entrusted to a connected party for safekeeping are all given as examples of custody the Act itself calls proper.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping stated here — Indian Evidence Act, 1872, s. 90 (thirty-year-old documents) to BSA s. 92, and s. 90A (electronic records five years old) to BSA s. 93 — is offered as the commonly reported correspondence, with s. 90A itself reported to have been a later insertion into the 1872 Act rather than part of its original 1872 text. No verified local Indian Evidence Act source text exists in `reference/` to confirm either section's exact wording or the insertion history of s. 90A; treat this mapping as a flagged hypothesis until a verified source is added.
:::

| Indian Evidence Act (reported) | BSA | What appears to have changed |
|---|---|---|
| S. 90 | S. 92 | Renumbered, on the reported mapping — the thirty-year-old document presumption, its Explanation, and its three illustrations all appear unchanged in substance |
| S. 90A (reported later insertion) | S. 93 | Renumbered, on the reported mapping — the five-year-old electronic-record presumption appears unchanged in substance, assuming the reported insertion history is accurate |

For a practitioner trained on the old Act, section 92 should feel entirely familiar, illustrations and all. Section 93's own history (a later insertion rather than part of the 1872 Act) is worth confirming rather than assuming, since a provision's insertion history sometimes affects transitional or retrospective arguments in a way a straightforward original provision would not.

### Test your instinct

::::instinct Scenario 1 — the thirty-two-year-old deed found in a stranger's attic
A document is genuinely thirty-two years old, but it is produced from the attic of someone with no explained connection to the parties, the property, or the original signatories. Does section 92 apply?
:::ruling
Not automatically. Age alone satisfies only the threshold condition — the Court must still consider custody proper on the particular facts, and an unexplained stranger's attic, with no connection to the document's subject-matter offered, does not obviously fit the pattern of the Act's own illustrations (a long-term possessor, a mortgagee, or a connected custodian holding for safekeeping). Without some explanation bringing the custody within the Explanation's terms — a legitimate origin, or circumstances rendering that origin probable — the presumption is unlikely to be exercised in the party's favour.
:::
::::

::::instinct Scenario 2 — the four-year-old electronic record
A party wants to invoke section 93 for an electronic record that is four years and eight months old. Can she rely on the presumption?
:::ruling
No. Section 93 requires the electronic record to be at least five years old, purporting or proved. A record short of that threshold, however close, does not qualify — she must prove the electronic signature's affixation by other means, such as the ss. 61-63 certificate regime or direct evidence of the signing process.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
No single authority is promoted here. The document-age presumptions are worked out through the Act's own text, Explanations, and illustrations.

#### Sword and shield
| | As a sword (offering evidence) | As a shield (resisting evidence) |
|---|---|---|
| S. 92 | Establish both the thirty-year age threshold and a custodial story matching one of the Act's own illustrations before relying on the presumption | Challenge either the age claim or the proper-custody characterisation — either failure defeats the presumption |
| S. 93 | Establish the five-year age threshold and proper custody under the section 81 Explanation | Challenge the age threshold precisely — a record just short of five years gets no presumption at all |

#### The limitation clock
None of its own — these sections define age thresholds for the presumption itself, which is a substantive precondition, not a limitation period for bringing a claim.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 92 and s. 93 | Ch. V part V, ss. 80-81 (`chapter-05e.md`) | **RESOLVED.** Ss. 80 and 81's "proper custody" Explanations, expressly cross-referred to by ss. 92 and 93 respectively, are the actual test these sections apply — no separate custody standard is defined here. |
| S. 93 | Ch. V part II, ss. 61-63 (`chapter-05b.md`) | Not a debt, but worth flagging: s. 93's presumption of who affixed an electronic signature on an old record is narrower than, and does not substitute for, the ss. 61-63 certificate regime for the underlying record's basic admissibility. |

#### The authorities
No confidently recalled leading authority is promoted for this cluster.

#### Strategy and drafting
When relying on section 92 or section 93, lead evidence of custody affirmatively and map it explicitly onto one of the Act's own illustrations or an equivalent fact pattern, rather than assuming age alone carries the point. When resisting either presumption, target the age threshold with precision (a document short of thirty years, or a record short of five, gets nothing) before arguing custody, since the age argument is often the cleaner and more easily proved objection.

## Chapter V (part VI) consolidation — and Chapter V, taken as a whole

1. **Does the claim concern a secure electronic record or signature (s. 86) or an Electronic Signature Certificate's listed information (s. 87)?** If so, the relevant mandatory presumption applies, subject to proof of the contrary, but never extends beyond what is genuinely "secure" or issuer-verified.
2. **Does the claim instead concern a foreign judicial record (s. 88), a reference book or published map/chart (s. 89), or a forwarded electronic message's content (s. 90)?** These are discretionary presumptions the Court may decline to apply even where the preconditions are met — and s. 90 never presumes sender identity.
3. **Was a document called for and not produced after a proper notice to produce?** If so, section 91 mandatorily presumes due attestation, stamping, and execution — silence carries a cost, not a benefit.
4. **Is the document or electronic record old enough (thirty years for paper, five years electronic) and produced from custody the court considers proper under the shared section 80/81 test?** If both conditions hold, sections 92 and 93 let age and custody substitute for a witness to execution or signature affixation who can no longer be found.

**Chapter V, "Of Documentary Evidence" (ss. 56-93), is now complete across six files** — `chapter-05a.md` (primary and secondary evidence), `chapter-05b.md` (electronic-records certificate regime), `chapter-05c.md` (notice, execution and comparison), `chapter-05d.md` (public documents), `chapter-05e.md` (presumptions I), and this file (presumptions II). Read together, these thirty-eight sections answer, in sequence, how a document is proved by primary or secondary evidence, how an electronic record clears its own admissibility gateway, how execution and attestation are established, how public documents shortcut the primary-evidence-first default, and finally what the Court will simply presume once the right formal conditions — certification, custody, age, or technical security — are met.
