# Chapter V (part III) — Of Documentary Evidence: notice, execution and comparison (ss. 64-73)

Chapter V, "Of Documentary Evidence," runs ss. 56-93. Part I (`chapter-05a.md`) covered primary and secondary evidence generally, and Part II (`chapter-05b.md`) covered the electronic-records certificate regime. This third file covers the two clusters that sit between them and the public-documents provisions that follow: section 64, the notice-to-produce mechanism that section 60, clause (a) expressly cross-refers to and that this file finally supplies; and sections 65 to 73, the group of provisions that answer a single practical question — once a document is in front of the Court, how is it actually proved that the person alleged to have signed, written, or executed it really did?

## Section 64 — the notice-to-produce gateway

### The dispute this solves

::: oneminute
A tenant wants to prove what a lease said, but the signed original is in the landlord's possession, not hers. She simply stands up at trial and tenders a photocopy. The landlord objects: she never asked him to produce the original, so how does the Court know he would not have produced it if asked, or that his copy might have shown something different? Section 60, clause (a) already lets secondary evidence in when the original is in an opponent's possession and he fails to produce it after notice — but "after notice" is doing real work in that sentence. Section 64 is the section that says what that notice must look like and when it can be skipped.
:::

::: story
Before you can tell a court "he wouldn't hand it over," you have to have actually asked. A courtroom is not the first time the other side should be hearing that you want the document — by then it is too late to give them a fair chance to produce it, and too easy to claim later that they simply forgot where they left it.
:::

### The Act, decompiled

> **64.** Secondary evidence of the contents of the documents referred to in clause (a) of section 60, [[!shall not be given unless]] the party proposing to give such secondary evidence has previously given to the party in whose possession or power the document is, or to his advocate or representative, such notice to produce it as is prescribed by law; and if no notice is prescribed by law, then such notice as the Court considers reasonable under the circumstances of the case:
>
> Provided that such notice shall not be required in order to render secondary evidence admissible in any of the following cases, or in any other case in which the Court [[?thinks fit to dispense with it]]:— (a) when the document to be proved is itself a notice; (b) when, from the nature of the case, the adverse party must know that he will be required to produce it; (c) when it appears or is proved that the adverse party has obtained possession of the original by fraud or force; (d) when the adverse party or his agent has the original in Court; (e) when the adverse party or his agent has admitted the loss of the document; (f) when the person in possession of the document is out of reach of, or not subject to, the process of the Court.

| Text | What it does | Why it matters |
|---|---|---|
| "shall not be given unless...notice to produce" | Makes prior notice a mandatory precondition to leading secondary evidence under the s. 60(a) gateway specifically | A party cannot ambush the other side at trial with secondary evidence and only then explain that the original was never produced — the request has to come first |
| "as is prescribed by law...or...as the Court considers reasonable" | Supplies a fallback standard where no specific procedural rule fixes the form of notice | The absence of a prescribed form is not itself a defect — the Court can assess reasonableness on the facts |
| Clauses (a)-(f) | Six named situations where notice is dispensed with as a matter of course | Recognises that formal notice would be pointless or unjust in each — the document is itself a notice, the opponent already knows, the opponent obtained it wrongfully, it is already in Court, loss is already admitted, or the holder is beyond the Court's process |
| "or in any other case in which the Court thinks fit to dispense with it" | A residual, open-ended judicial discretion beyond the six named clauses | Prevents the list from being read as exhaustive of every situation where insisting on notice would be pointless |

::: proviso The six clauses are examples of one idea, not the only escape route
Each of clauses (a) to (f) answers the same question differently: is there a plausible reason to think notice would have made no difference, or would have been unfair to demand? Where a case does not fit any of the six but the same underlying reasoning applies, the residual "any other case" branch is available — but it depends on the Court's own view of the facts, not a party's assertion that notice would have been futile.
:::

### How this actually runs

<MicroTree
  input="A party wants to lead secondary evidence of a document under the section 60, clause (a) gateway (original in an opposing or bound party's possession)"
  :gates="[
    { q: 'Was notice to produce given in the form prescribed by law, or, absent a prescribed form, a form the Court considers reasonable?', no: 'check whether one of the six named exceptions or the residual judicial-discretion branch applies before assuming the gateway is closed' },
    { q: 'If no notice was given, does one of the six named clauses apply, or has the Court exercised its residual discretion to dispense with notice on these facts?', no: 'the section 60, clause (a) gateway is not yet open, whatever else is true about the document' }
  ]"
  result="the notice precondition to the section 60, clause (a) gateway is satisfied, and secondary evidence may be tendered on that gateway"
  caveat="section 64 governs only the clause (a) gateway; the other section 60 gateways — admitted contents, genuine loss, immovability, public-document status, permitted certified copies, voluminous accounts — carry no notice requirement of their own"
  resultKind="mixed"
/>

### In plain English

**You have to ask before you can complain that they did not answer.** Section 64 exists only to police one specific route into secondary evidence — the route where the original sits with the opposing side or someone bound to produce it. Before that route opens, the party wanting secondary evidence must first have given proper notice to produce, in whatever form the law prescribes or, failing that, whatever form is reasonable in the circumstances.

The six named exceptions and the residual discretion exist because formal notice would sometimes be theatre: if the opponent has already admitted losing the document, or already has it in Court, or obtained it by fraud, there is nothing a notice would add. But none of the six exceptions is presumed — a party who skips notice must actually show one applies, or persuade the Court that some other, equally good reason exists to dispense with it.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping stated here — Indian Evidence Act, 1872, s. 66 (rules as to notice to produce) to BSA s. 64 — is offered as the commonly reported correspondence, continuing loosely from the five-section offset confirmed for ss. 51-60, though that clean numeric offset breaks once the old Act's ss. 65-A and 65-B (the electronic-records provisions BSA ss. 61-63 replace) are accounted for. No verified local Indian Evidence Act source text exists in `reference/` to check the old section's exact wording against the new one; treat the mapping as a flagged hypothesis until such a source is added.
:::

| Indian Evidence Act (reported) | BSA | What appears to have changed |
|---|---|---|
| S. 66 | S. 64 | Renumbered, on the reported mapping — the mandatory-notice rule, its six named exceptions, and the residual judicial discretion appear unchanged in substance |

For a practitioner trained on the old Act, the notice-to-produce discipline is unchanged: the section number has moved, and moved further than the clean five-section offset seen earlier in this chapter because of the intervening electronic-records split, but the six exceptions and the underlying logic read as a straightforward carry-over.

### Test your instinct

::::instinct Scenario 1 — the notice that was never sent
A party wants to prove the contents of a partnership deed she says is in her former partner's possession. She never sent a notice to produce, and no exception obviously applies — the former partner has not admitted losing it, has not brought it to Court, and is not beyond the Court's reach. Can she still lead secondary evidence of its contents?
:::ruling
Not yet. Section 64 is a precondition to the section 60, clause (a) gateway specifically, and none of the six named exceptions is shown on these facts. Unless she can persuade the Court to exercise its residual discretion to dispense with notice — which requires more than simply having skipped the step — the gateway remains closed. The document's genuine existence does not cure the missing notice; she must either give notice now and allow a reasonable opportunity to produce, or show why notice should be dispensed with.
:::
::::

::::instinct Scenario 2 — the document that is itself a notice
A landlord wants to prove the contents of a notice to quit he sent his tenant, now unproduced by the tenant despite request. Must he still separately serve a fresh notice to produce before leading secondary evidence of what the notice to quit said?
:::ruling
No. Clause (a) dispenses with notice precisely where "the document to be proved is itself a notice" — asking a party to give notice to produce a notice would be circular. The landlord may proceed to secondary evidence of the notice to quit's contents on the strength of this named exception, without the separate step section 64 would otherwise require.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
No single authority is promoted here. Section 64's notice mechanism and its six exceptions are worked out through the Act's own text.

#### Sword and shield
| | As a sword (offering evidence) | As a shield (resisting evidence) |
|---|---|---|
| Main rule | Send a clear, dated notice to produce well before trial, and keep proof it was served | Challenge whether notice was actually given, in what form, and whether it reached the right person or their advocate |
| Clauses (a)-(f) | Identify which named exception applies on the facts, rather than simply asserting notice was unnecessary | Test each exception strictly — an opponent's general awareness of a document is not the same as knowing "he will be required to produce it" |
| Residual discretion | Ask the Court to dispense with notice where the facts are functionally equivalent to a named exception even if none applies exactly | Resist an invitation to dispense with notice as a matter of course — the residual branch depends on the Court's assessment, not convenience |

#### The limitation clock
None of its own, but practically decisive: notice must be given, and a reasonable opportunity to produce must pass, before secondary evidence can be tendered on the clause (a) gateway. Leaving this to the eve of trial risks the gateway simply not being open yet when the evidence is offered.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 64 | Ch. V part I, s. 60, clause (a) (`chapter-05a.md`) | **RESOLVED.** Section 60(a) expressly cross-refers to "the notice mentioned in section 64" — this section is the debt that cross-reference created, and it is now paid in full. |
| S. 64, clause (f) | Ch. V of this Act, ss. 61-63 (`chapter-05b.md`, electronic records) | Where the person holding the original is out of reach of the Court's process and the document in question is an electronic record, the notice exception here and the certificate regime's proof route may both come into play together; they answer different questions (whether notice was needed at all, versus how the record is actually proved) and should not be conflated. |

#### The authorities
No confidently recalled leading authority is promoted for this section.

#### Strategy and drafting
Make sending a notice to produce a standard early step whenever a document you need is in the other side's hands, even if you suspect an exception might apply — a notice sent and later shown to be unnecessary costs little, while a missing notice with no clean exception can sink the entire secondary-evidence route. Keep proof of service. When resisting secondary evidence, always check the notice's form and timing before conceding the point, and test each of the six exceptions on its own specific wording rather than accepting a general assertion that "notice would have been pointless."

## Sections 65 to 73 — proving execution: signatures, attestation, and comparison

### The dispute this solves

::: oneminute
A signed promissory note is produced in Court. The person alleged to have signed it denies doing so. Proving a document exists and proving that a particular person executed it are two different tasks — the document could be genuine paper with a forged signature, or a genuine signature obtained by fraud, or a document that was never meant to bind anyone at all. Sections 65 to 73 supply the toolkit for the second task: proving handwriting and signatures generally, proving execution where the law demands an attesting witness, and using expert or judicial comparison where direct testimony runs out.
:::

::: story
Anyone can produce a piece of paper. What turns that paper into evidence against a particular person is proof that the person actually put their name, mark, or signature to it — and the law does not take a bare "that's their signature" on faith any more readily than it takes a bare "that's what my colleague told me" under the directness rule in Chapter IV.
:::

### The Act, decompiled

> **65.** If a document is alleged to be signed or to have been written wholly or in part by any person, the signature or the handwriting of so much of the document as is alleged to be in that person's handwriting [[!must be proved to be in his handwriting]].
>
> **66.** Except in the case of a secure electronic signature, if the electronic signature of any subscriber is alleged to have been affixed to an electronic record, the fact that such electronic signature is the electronic signature of the subscriber [[!must be proved]].
>
> **67.** If a document is required by law to be attested, it [[!shall not be used as evidence]] until one attesting witness at least has been called for the purpose of proving its execution, if there be an attesting witness alive, and subject to the process of the Court and capable of giving evidence:
>
> Provided that it shall not be necessary to call an attesting witness in proof of the execution of any document, not being a will, which has been registered in accordance with the provisions of the Indian Registration Act, 1908, [[?unless its execution by the person by whom it purports to have been executed is specifically denied]].
>
> **68.** If no such attesting witness can be found, it must be proved that the attestation of one attesting witness at least is in his handwriting, and that the signature of the person executing the document is in the handwriting of that person.
>
> **69.** The admission of a party to an attested document of its execution by himself shall be [[=sufficient proof]] of its execution as against him, though it be a document required by law to be attested.
>
> **70.** If the attesting witness denies or does not recollect the execution of the document, its execution [[?may be proved by other evidence]].
>
> **71.** An attested document not required by law to be attested [[?may be proved as if it was unattested]].
>
> **72.**(1) In order to ascertain whether a signature, writing or seal is that of the person by whom it purports to have been written or made, any signature, writing, or seal admitted or proved to the satisfaction of the Court to have been written or made by that person [[?may be compared]] with the one which is to be proved, although that signature, writing or seal has not been produced or proved for any other purpose.
>
> (2) The Court [[?may direct]] any person present in Court to write any words or figures for the purpose of enabling the Court to compare the words or figures so written with any words or figures alleged to have been written by such person.
>
> (3) This section applies also, with any necessary modifications, to finger impressions.
>
> **73.** In order to ascertain whether a digital signature is that of the person by whom it purports to have been affixed, the Court [[?may direct]]— (a) that person or the Controller or the Certifying Authority to produce the Digital Signature Certificate; (b) any other person to apply the public key listed in the Digital Signature Certificate and verify the digital signature purported to have been affixed by that person.

| Text | What it does | Why it matters |
|---|---|---|
| S. 65 | Sets the default rule: signature or handwriting alleged to be a person's own must be proved to be theirs | This is the general rule every other section in this cluster either supplements or displaces for a specific situation |
| S. 66 | Extends the same proof requirement to an ordinary electronic signature | "Secure" electronic signatures are carved out because they attract a statutory presumption of authenticity elsewhere in this chapter, not because they need no proof at all |
| S. 67 and its proviso | Makes calling an attesting witness mandatory for documents the law requires to be attested — unless the document is registered and not a will, in which case the requirement lifts unless execution is specifically denied | Attestation is a formality the law sometimes insists on independently of ordinary handwriting proof; registration is treated as a strong-enough substitute, but only until the other side actually disputes execution |
| S. 68 | Supplies a fallback where no attesting witness can be found: prove the witness's own handwriting and the executant's signature instead | Prevents an untraceable witness from making an otherwise genuine document unprovable |
| S. 69 | Lets the executant's own admission of execution stand in for calling an attesting witness, against that person | A party who admits signing something cannot then insist the other side jump through the attestation-proof hoops purely to prove what has already been conceded |
| S. 70 | Where the attesting witness is called but denies or cannot recall execution, other evidence may still prove it | A hostile or forgetful witness does not automatically defeat an otherwise genuine document |
| S. 71 | An attested document the law did not require to be attested may simply be proved as an ordinary unattested document | Voluntary attestation beyond what the law demands does not import the mandatory attesting-witness rule where it would not otherwise apply |
| S. 72 | Lets the Court compare a disputed signature, writing, seal, or finger impression against an admitted or already-proved exemplar, and lets the Court itself direct a handwriting sample be taken in Court | A direct comparison technique, independent of calling any particular witness |
| S. 73 | For digital signatures specifically, lets the Court direct production of the Digital Signature Certificate or verification against the public key it lists | A technical verification route suited to digital rather than handwritten signatures |

::: proviso Section 67's registration exception has its own trigger for switching back on
The proviso to section 67 does not permanently retire the attesting-witness requirement for registered, non-will documents — it only lifts the requirement until execution is "specifically denied." The moment the person alleged to have executed the document actually disputes having done so, the ordinary rule reasserts itself and an attesting witness must be called, exactly as if the document had never been registered.
:::

::: proviso Comparison under section 72 is an additional technique, not the only route
Sections 65 to 71 describe who must be called and what must be shown to prove execution through witnesses and admissions. Section 72's comparison mechanism, and section 73's digital-signature verification, sit alongside that witness-based scheme as independent tools the Court or a party can use at any stage — they do not replace the attestation requirements of section 67 where those requirements actually apply.
:::

### How this actually runs

<MicroTree
  input="A party needs to prove that a particular person signed, wrote, or executed a document"
  :gates="[
    { q: 'Is the document one that the law requires to be attested?', no: 'ordinary signature or handwriting proof under section 65 (or section 66 for an electronic signature) suffices, and sections 67 to 71 do not apply' },
    { q: 'If attestation is required, is the document registered under the Indian Registration Act, 1908 and not a will, with execution not specifically denied?', no: 'an attesting witness must actually be called if one is alive, traceable, and competent, or the section 68 fallback used if none can be found' },
    { q: 'If an attesting witness was called, did that witness confirm the execution rather than deny or fail to recollect it?', no: 'execution may still be proved by other evidence under section 70, and is not defeated merely by a hostile or forgetful attesting witness' }
  ]"
  result="execution of the document is proved through whichever of these routes actually succeeds on the facts"
  caveat="comparison of signatures, writing, seals, or finger impressions under section 72, and digital-signature verification under section 73, remain available as additional proof techniques at any stage, independently of which gate above governs the document"
  resultKind="mixed"
/>

### In plain English

**Proving a document exists is not the same as proving who executed it, and the two get separate rulebooks.** Section 65 sets the baseline: if you say it is someone's signature or handwriting, prove it. For documents the law requires to be attested — a category of document, not a matter of the parties' choice — sections 67 to 71 layer on a further, more formal requirement: an actual attesting witness, unless the document is registered and undisputed, or the witness cannot be found, or the executant has already admitted execution, or the witness is called but turns out to be unhelpful.

Sections 72 and 73 sit apart from all of this as comparison and verification tools. They do not tell a party whom to call — they tell the Court how it may test a disputed signature or digital signature against something already established, whether or not any witness has been called at all.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping stated here — Indian Evidence Act, 1872, ss. 67, 67A, 68, 69, 70, 71, 72, 73, and 73A to BSA ss. 65 to 73 respectively — is offered as the commonly reported correspondence. This range no longer follows the clean numeric offset seen in ss. 51-60, because the intervening electronic-records provisions (old ss. 65-A and 65-B, now BSA ss. 61-63) shift the count. No verified local Indian Evidence Act source text exists in `reference/` to check the old sections' exact wording against the new ones; treat the entire mapping in this cluster as a flagged hypothesis until such a source is added.
:::

| Indian Evidence Act (reported) | BSA | What appears to have changed |
|---|---|---|
| S. 67 | S. 65 | Renumbered, on the reported mapping — the general handwriting/signature proof rule appears unchanged in substance |
| S. 67A | S. 66 | Renumbered, on the reported mapping — the electronic-signature proof rule, with its "secure electronic signature" carve-out, appears unchanged in substance |
| S. 68 | S. 67 | Renumbered, on the reported mapping — the attesting-witness requirement and the registration proviso appear unchanged in substance |
| S. 69 | S. 68 | Renumbered, on the reported mapping — the no-attesting-witness-found fallback appears unchanged in substance |
| S. 70 | S. 69 | Renumbered, on the reported mapping — the admission-of-execution rule appears unchanged in substance |
| S. 71 | S. 70 | Renumbered, on the reported mapping — the hostile-or-forgetful-witness rule appears unchanged in substance |
| S. 72 | S. 71 | Renumbered, on the reported mapping — the not-required-to-be-attested rule appears unchanged in substance |
| S. 73 | S. 72 | Renumbered, on the reported mapping — the comparison-of-signature/writing/seal/finger-impression mechanism appears unchanged in substance |
| S. 73A | S. 73 | Renumbered, on the reported mapping — the digital-signature verification mechanism appears unchanged in substance |

For a practitioner trained on the old Act, nothing in this cluster should feel substantively unfamiliar — the discipline that changes is again procedural rather than textual: confirm the current section number before citing it, since this stretch has shifted further from the old numbering than the earlier, cleaner five-section offset in ss. 51-60.

### Test your instinct

::::instinct Scenario 1 — registered, but now disputed
A sale deed, duly registered and not a will, is produced. Ordinarily the section 67 proviso would excuse calling an attesting witness. But the defendant now specifically denies having executed it at all. Must an attesting witness still be called?
:::ruling
Yes. The proviso's exemption from calling an attesting witness lasts only "unless its execution... is specifically denied." A specific denial of execution switches the ordinary rule back on precisely because the exemption was premised on there being no real dispute about who signed — once that premise fails, the formal safeguard the proviso otherwise dispenses with is required again.
:::
::::

::::instinct Scenario 2 — the untraceable witness
A will requiring attestation is genuine, but both attesting witnesses have since died, and no further witness can be found. The propounder has no living attesting witness to call. Is the will now unprovable?
:::ruling
No. Section 68 supplies exactly this fallback: where no attesting witness can be found, it must instead be proved that the attestation of at least one witness is in that witness's own handwriting, and that the executant's signature is in the executant's handwriting. The will is not automatically defeated by the witnesses' deaths — the proof simply shifts to handwriting evidence about both the witness and the executant.
:::
::::

::::instinct Scenario 3 — admitted execution, hostile witness
A borrower admits in his written statement that he signed the mortgage deed, which required attestation. At trial, the one attesting witness who is called nonetheless says he does not recall witnessing the signing. Does the witness's poor memory defeat proof of execution?
:::ruling
No, for two independent reasons. First, section 69 makes the borrower's own admission of execution sufficient proof against him, attestation requirement notwithstanding. Second, even without that admission, section 70 lets execution be proved by other evidence once the attesting witness denies or fails to recollect it — a lapse of memory in the witness box does not, by itself, unmake a genuine document.
:::
::::

::::instinct Scenario 4 — the document nobody had to attest
A promissory note was, unusually, attested by two witnesses even though the law does not require attestation for a promissory note at all. The signatory later disputes execution, and no attesting witness is readily available at trial. Must the holder nonetheless satisfy sections 67 and 68's attesting-witness machinery?
:::ruling
No. Section 71 provides that a document attested but not required by law to be attested may be proved as if it were unattested altogether. The voluntary, unnecessary attestation does not import the mandatory-witness regime; the holder may fall back on ordinary signature and handwriting proof under section 65, or comparison under section 72, without needing to produce or account for either attesting witness.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
No single authority is promoted here. The execution-proof scheme across sections 65 to 73 is worked out through the Act's own text rather than through a specific leading judgment recalled with the certainty this project's citation rule requires.

#### Sword and shield
| | As a sword (offering evidence) | As a shield (resisting evidence) |
|---|---|---|
| S. 65/66 | Lead direct handwriting, signature, or electronic-signature evidence early, rather than assuming it will go unchallenged | Put the opposing party to strict proof of signature or handwriting the moment it is not admitted |
| S. 67 and proviso | If relying on the registration exception, confirm the document is registered and not a will, and watch for any specific denial of execution that reactivates the full requirement | Specifically deny execution, on the record, if genuinely disputed — this alone reopens the attesting-witness requirement even for a registered document |
| S. 68 | Where an attesting witness is genuinely untraceable, prepare handwriting evidence of both the witness's attestation and the executant's signature in advance | Test whether the untraceability is genuine, not merely inconvenient, before conceding the section 68 fallback applies |
| S. 69/70 | Point to any prior admission of execution to avoid the attestation machinery altogether, or fall back on other evidence if the attesting witness turns hostile | Do not assume a hostile attesting witness alone defeats execution — be ready to meet whatever "other evidence" is offered under section 70 |
| S. 72/73 | Use comparison of admitted exemplars, or in-Court writing samples, to strengthen a disputed signature case; use the Certifying Authority route for digital signatures | Challenge the reliability of the exemplar used for comparison, or the chain of custody for a Digital Signature Certificate |

#### The limitation clock
None of its own. As elsewhere in this chapter, the operative timing discipline is that a specific denial of execution — which reactivates the full section 67 requirement despite registration — should be raised clearly and early in pleadings, not sprung for the first time at trial.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 66 (electronic signature, "secure electronic signature" carve-out) | BSA ss. 78-93 of this Act (presumptions as to documents) — not yet written | Section 66 excludes secure electronic signatures because they are expected to carry a statutory presumption of authenticity elsewhere in this chapter's presumptions cluster; when that cluster is written, it must actually supply that presumption, or this cross-reference is left dangling. |
| S. 73 (digital-signature verification) | Ch. V of this Act, ss. 61-63 (`chapter-05b.md`, electronic records) | Verifying who affixed a digital signature and satisfying the s. 63 certificate regime for an electronic record are related but distinct tasks; a verified digital signature does not by itself supply the s. 63 certificate, and the two should not be conflated in practice. |

#### The authorities
No confidently recalled leading authority is promoted for this cluster.

#### Strategy and drafting
Decide early whether a document is one the law requires to be attested — this single classification question determines whether sections 67 to 71's machinery applies at all, and misclassifying it either way wastes preparation. Where relying on the section 67 registration proviso, watch pleadings closely for any specific denial of execution, since that single sentence in the other side's written statement reopens the entire attesting-witness requirement. Keep admitted exemplars of signatures or handwriting on hand well before trial if comparison under section 72 is likely to be needed — a comparison exercise improvised in the witness box is far weaker than one prepared with a properly proved exemplar in advance.

## Chapter V (part III) consolidation — has execution actually been proved?

1. **Is ordinary signature or handwriting proof under section 65 (or section 66 for an electronic signature) enough, or does the document belong to a category the law requires to be attested?** This threshold question decides whether sections 67 to 71 apply at all.
2. **If attestation is required, has an attesting witness actually been called — or does a recognised exception apply:** registration without a specific denial of execution, genuine untraceability of every attesting witness, or an admission of execution by the executant?
3. **If an attesting witness was called but denied or could not recollect execution, has execution nonetheless been proved by other evidence?**
4. **Where a signature, digital signature, or document in an opposing party's possession is in dispute, has section 64's notice been given (for the section 60(a) secondary-evidence route), and have the comparison or verification tools in sections 72 and 73 been used where they would help?**
