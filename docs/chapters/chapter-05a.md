# Chapter V (part I) — Of Documentary Evidence: primary and secondary evidence (ss. 56-60)

Chapter V, "Of Documentary Evidence," runs ss. 56-93 and is one of the two chapters in the Act too long for a single file — the electronic-records certificate regime (ss. 61-63) already exists as `chapter-05b.md`, written first as the project's pilot provision because it is the hardest sub-cluster in the chapter. This file goes back to the beginning of the chapter and covers the general primary/secondary evidence scheme that ss. 61-63 sit inside: what counts as primary evidence (s. 57), what counts as secondary evidence (s. 58), the default rule that primary evidence is required (s. 59), and the closed list of exceptions where secondary evidence is receivable instead (s. 60).

## Sections 56 and 57 — proof of documents and what counts as primary evidence

### The dispute this solves

::: oneminute
A party to a contract dispute wants to prove what the written agreement says. She has the original, signed by both sides, sitting in her file. She also has a scanned PDF copy on her laptop, and a photocopy she made for her own records. Which of these actually proves the contract's contents? Only the original — the document itself, produced for the court's inspection — is *primary* evidence. The scan and the photocopy are something else entirely, and the Act treats the difference as the starting point for the whole of documentary proof.
:::

::: story
Two business partners sign a lease in triplicate — one copy for the landlord, one for each partner — each copy signed by all three. If a dispute later arises and one partner cannot produce her copy, that is not automatically fatal: the Act treats each fully-executed part of a multi-part document as primary evidence in its own right, not as a lesser stand-in for a single "the" original.
:::

### The Act, decompiled

> **56.** The contents of documents may be proved either by [[=primary evidence]] or by secondary evidence.
>
> **57.** Primary evidence means the document itself produced for the inspection of the Court.
>
> **Explanation 1.** Where a document is executed in several parts, each part is primary evidence of the document.
>
> **Explanation 2.** Where a document is executed in counterpart, each counterpart being executed by one or some of the parties only, each counterpart is primary evidence as against the parties executing it.
>
> **Explanation 3.** Where a number of documents are all made by one uniform process, as in the case of printing, lithography or photography, each is primary evidence of the contents of the rest; but, where they are all copies of a common original, they are not primary evidence of the contents of the original.
>
> **Explanation 4.** Where an electronic or digital record is created or stored, and such storage occurs simultaneously or sequentially in multiple files, each such file is primary evidence.
>
> **Explanation 5.** Where an electronic or digital record is produced from proper custody, such electronic and digital record is primary evidence unless it is disputed.
>
> **Explanation 6.** Where a video recording is simultaneously stored in electronic form and transmitted or broadcast or transferred to another, each of the stored recordings is primary evidence.
>
> **Explanation 7.** Where an electronic or digital record is stored in multiple storage spaces in a computer resource, each such automated storage, including temporary files, is primary evidence.
>
> *Illustration.* A person is shown to have been in possession of a number of placards, all printed at one time from one original. Any one of the placards is primary evidence of the contents of any other, but no one of them is primary evidence of the contents of the original.

| Text | What it does | Why it matters |
|---|---|---|
| "the document itself produced for the inspection of the Court" (s. 57) | Defines primary evidence narrowly — the actual document, not any copy of it | Sets the baseline every other rule in this cluster measures against |
| Explanations 1-2 (multi-part and counterpart documents) | Treats every fully-executed part or counterpart as primary, not as a copy of one true original | Losing one signed counterpart does not force a party down to secondary evidence if another signed part or counterpart survives |
| Explanation 3 (uniform-process copies) | Each copy made by one uniform process — printing, lithography, photography — is primary evidence of the others, but none of them is primary evidence of a separate common original | Distinguishes "identical copies of each other" from "copies of something else"; only the former are mutually primary |
| Explanations 4-7 (electronic and digital records) | Extend "primary evidence" to multi-file electronic storage, records from proper custody, simultaneously stored video recordings, and multi-location automated storage | Recognises that a single electronic record often exists as several technically distinct files or copies by the nature of how computers store data, without demoting all but one of them to secondary evidence |

::: proviso Explanations 4-7 answer a problem paper documents never had
A paper document has one physical original; a paper Explanation 1-3 world is about parts, counterparts, and uniform-process copies of physical things. Electronic records do not work that way — the same record is routinely and unavoidably stored in multiple files, backups, or locations as a normal by-product of how the system operates. Explanations 4-7 exist so that this ordinary technical multiplicity does not, by itself, downgrade every copy but one to secondary evidence; each qualifying file or storage instance stands as primary evidence of the record.
:::

### How this actually runs

<MicroTree
  input="A party wants to prove the contents of a document by producing something in support of it"
  :gates="[
    { q: 'Is the thing produced the document itself, a fully-executed part or counterpart of it, a uniform-process copy of an identical set, or a qualifying electronic-record file or storage instance under Explanations 4 to 7?', no: 'the thing produced is not primary evidence, and the document must instead be proved by secondary evidence, if any route to it is available' }
  ]"
  result="the thing produced is primary evidence under section 57 and directly proves the document's contents"
  caveat="a uniform-process copy is only primary evidence of the other copies in the same set, never of a separate common original those copies were themselves made from"
  resultKind="mixed"
/>

### In plain English

**Primary evidence is the real thing, not an account of it.** Section 57's core definition is deliberately narrow — the document itself. Everything the Explanations add is a recognition that "the document itself" is not always a single physical object: a lease signed in triplicate has three originals, not one original and two copies; a set of placards from the same print run are each primary evidence of one another; and an electronic record, by the nature of how computers store data, often exists as several primary files rather than one.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping stated here — Indian Evidence Act, 1872, s. 62 (primary evidence) to BSA s. 57 — is the commonly reported correspondence, continuing roughly the same offset pattern already seen across Chapters III and IV. No verified local Indian Evidence Act source text exists in `reference/` to check the old section's exact wording, including whether Explanations 1-3 existed there in the same form; treat the mapping, and the claim that Explanations 4-7 are new, as a flagged hypothesis until a verified source is added.
:::

| Indian Evidence Act (reported) | BSA | What appears to have changed |
|---|---|---|
| S. 61 (proof of contents of documents) | S. 56 | Renumbered only, on the reported mapping |
| S. 62 (primary evidence) | S. 57 | The core definition and Explanations 1-3 appear renumbered only; Explanations 4-7 (electronic and digital records) read as new additions, consistent with the wider pattern of BSA folding electronic-record treatment directly into core definitions rather than leaving it to a single stand-alone provision |

If Explanations 4-7 are confirmed genuinely new, the practical consequence for a practitioner is significant: multiple technically-distinct electronic files of the same record no longer need to be triaged into "the one true original" and "mere copies" before they can be treated as primary evidence — several may qualify at once, provided each independently satisfies one of the four Explanations.

### Test your instinct

::::instinct Scenario 1 — the missing counterpart
A lease was executed in three counterparts, one for the landlord and one for each of two tenants. One tenant has lost her copy entirely. Can she still rely on primary evidence to prove the lease's terms?
:::ruling
Yes, provided a counterpart executed by the party against whom it is sought to be proved is available. Explanation 2 makes each counterpart primary evidence against the parties who executed it — the tenant who lost her copy can rely on the landlord's or the other tenant's counterpart as primary evidence against the parties who signed it, without falling back to secondary evidence merely because her own copy is gone.
:::
::::

::::instinct Scenario 2 — the backup file
An employee's chat messages are stored simultaneously in three separate backup files on a company server, purely as a function of the server's automated backup routine. She argues only the "first" file is a true original and the other two are mere copies needing separate proof of authenticity as secondary evidence.
:::ruling
No. Explanation 4 treats each file created by simultaneous or sequential multi-file storage as primary evidence in its own right — there is no single "true" file among functionally identical automated storage instances. Any one of the three backup files may be tendered as primary evidence without first establishing a hierarchy among them.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
No single authority is promoted here. The primary/secondary distinction is worked out through the Act's own text and Explanations rather than through a specific leading judgment recalled with the certainty this project's citation rule requires.

#### Sword and shield
| | As a sword (offering evidence) | As a shield (resisting evidence) |
|---|---|---|
| S. 57 core definition | Produce the actual document wherever possible — it forecloses any secondary-evidence foundation dispute | Object if what is tendered as "the original" is in fact a copy dressed up as one |
| Explanations 1-2 | Rely on any surviving counterpart or executed part if the party's own copy is lost | Challenge whether the counterpart produced was actually executed by the party it is tendered against |
| Explanations 4-7 | Tender any qualifying electronic file or storage instance as primary, without needing to identify a single "master" file | Dispute whether the record was genuinely produced from proper custody under Explanation 5, since a disputed record loses that particular route |

#### The limitation clock
None of its own. As with the electronic-records certificate regime already covered in `chapter-05b.md`, an objection to whether something tendered actually qualifies as primary evidence is a mode-of-proof objection, and should be raised when the evidence is tendered rather than saved for appeal.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 57, Explanation 5 (electronic record from proper custody) | Ch. V, ss. 61-63 of this Act (`chapter-05b.md`, electronic records) | Explanation 5's "unless it is disputed" qualifier and the s. 61-63 certificate regime both go to the reliability of an electronic record; a disputed record that loses Explanation 5's primary-evidence status will typically need to be proved instead through the s. 63 certificate route as secondary evidence |

#### The authorities
No confidently recalled leading authority is promoted for this section.

#### Strategy and drafting
Always produce the actual original where it exists and is available — arguing over secondary-evidence exceptions is unnecessary work if the primary document can simply be brought to court. Where a document exists in multiple executed counterparts, identify early which counterparts are available and against which parties each is primary evidence, since a counterpart executed only by some parties is not primary evidence against the others. For electronic records stored across multiple files or backups, be ready to explain which Explanation each file satisfies rather than treating "electronic record" as a single undifferentiated category.

## Sections 58 and 59 — secondary evidence and the primary-evidence-first rule

### The dispute this solves

::: oneminute
A witness in a debt-recovery suit wants to describe, from memory, what a promissory note said, because the note itself has been lost. Before the court will even consider her account, it asks a prior question: is oral evidence of this kind actually a recognised form of secondary evidence at all, and has the party first shown why primary evidence — the note itself — cannot be produced? Section 58 defines what counts as secondary evidence in the first place; section 59 states the default that primary evidence is required unless one of the recognised exceptions applies.
:::

::: story
A photocopier operator makes a copy of a copy of a will, then compares his second-generation copy against the original itself before certifying it. That comparison against the original is what elevates his copy from a mere reproduction into a form of secondary evidence the Act will actually recognise — an uncompared copy of a copy proves nothing.
:::

### The Act, decompiled

> **58.** Secondary evidence includes— (i) certified copies given under the provisions hereinafter contained; (ii) copies made from the original by mechanical processes which in themselves ensure the accuracy of the copy, and copies compared with such copies; (iii) copies made from or compared with the original; (iv) counterparts of documents as against the parties who did not execute them; (v) oral accounts of the contents of a document given by some person who has himself seen it; (vi) oral admissions; (vii) written admissions; (viii) evidence of a person who has examined a document, the original of which consists of numerous accounts or other documents which cannot conveniently be examined in Court, and who is skilled in the examination of such documents.
>
> *Illustrations.* (a) A photograph of an original is secondary evidence of its contents, though the two have not been compared, if it is proved that the thing photographed was the original. (b) A copy compared with a copy of a letter made by a copying machine is secondary evidence of the contents of the letter, if it is shown that the copy made by the copying machine was made from the original. (c) A copy transcribed from a copy, but afterwards compared with the original, is secondary evidence; but the copy not so compared is not secondary evidence of the original, although the copy from which it was transcribed was compared with the original. (d) Neither an oral account of a copy compared with the original, nor an oral account of a photograph or machine-copy of the original, is secondary evidence of the original.
>
> **59.** Documents [[!shall be proved by primary evidence]] except in the cases hereinafter mentioned.

| Text | What it does | Why it matters |
|---|---|---|
| Clauses (i)-(iv) (certified and mechanical copies, compared copies, counterparts against non-executing parties) | Recognise copies as secondary evidence only where accuracy is independently assured — certification, a mechanical process, or actual comparison with the original | An uncertified, uncompared copy of a copy proves nothing, per Illustration (c) |
| Clauses (v)-(vii) (oral and written accounts and admissions) | Recognise a firsthand oral account by someone who actually saw the document, plus oral and written admissions, as secondary evidence | Connects back to section 55's directness rule — the oral account must come from someone who actually saw the document, not a relayed description |
| Clause (viii) (skilled examiner of voluminous accounts) | Lets a qualified examiner's evidence about numerous accounts stand as secondary evidence of them | Avoids forcing a court to personally wade through documents no one could conveniently examine in court |
| "shall be proved by primary evidence except in the cases hereinafter mentioned" (s. 59) | States the default rule in mandatory terms — secondary evidence is the exception, never the first resort | A party cannot choose secondary evidence merely because it is more convenient; one of section 60's specific gateways must be shown to open first |

::: proviso Section 58's list is closed, not illustrative
Each clause of section 58 answers a different reliability problem — mechanical accuracy, direct comparison, personal firsthand knowledge, or admitted content — and something that does not fit any clause is not secondary evidence at all, however persuasive it might otherwise seem. An uncompared copy of a copy, per Illustration (c), fails every clause and is simply not evidence of the document's contents.
:::

### How this actually runs

<MicroTree
  input="A party has something other than the original document and wants to use it to prove the document's contents"
  :gates="[
    { q: 'Does what the party has fall within one of the eight clauses of section 58 - a certified or mechanically accurate copy, a copy actually compared with the original, a non-executing counterpart, a firsthand oral account, an oral or written admission, or evidence from a skilled examiner of voluminous accounts?', no: 'what the party has is not secondary evidence at all, and cannot be used to prove the contents of the document by this route' },
    { q: 'Has the party shown that one of the recognised exceptions under section 60 applies, justifying secondary evidence instead of the original?', no: 'section 59 requires primary evidence, and secondary evidence cannot be substituted merely because it would be more convenient' }
  ]"
  result="the secondary evidence may be received to prove the document's contents"
  caveat="qualifying as secondary evidence under section 58 and being permitted to use it under section 59 are two separate hurdles - clearing the first does not excuse clearing the second"
  resultKind="mixed"
/>

### In plain English

**Secondary evidence is not simply "anything other than the original" — it is a closed list of specific, reliability-tested substitutes.** And even a qualifying substitute cannot be used just because it exists: section 59 keeps primary evidence as the default, so a party must also show why one of section 60's specific gateways lets secondary evidence in at all. The two sections work together — one defines the acceptable substitutes, the other controls when a substitute may be used in place of the real thing.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping stated here — Indian Evidence Act, 1872, s. 63 (secondary evidence) to BSA s. 58, and s. 64 (proof of documents by primary evidence) to BSA s. 59 — is the commonly reported correspondence. No verified local Indian Evidence Act source text exists in `reference/`; treat this as a flagged hypothesis until a verified source is added.
:::

| Indian Evidence Act (reported) | BSA | What appears to have changed |
|---|---|---|
| S. 63 | S. 58 | Renumbered only, on the reported mapping — the eight clauses and four illustrations appear unchanged in substance |
| S. 64 | S. 59 | Renumbered only, on the reported mapping |

### Test your instinct

::::instinct Scenario 3 — the uncompared second-generation copy
A litigant produces a typed transcript made from a photocopy of a contract, but the transcript was never checked against the original contract itself, only against the photocopy. He argues it should count as secondary evidence because it is, after all, a copy of the contract's terms.
:::ruling
No. This is exactly Illustration (c)'s losing case: a copy transcribed from a copy, but never compared with the original itself, is not secondary evidence of the original — even though the intermediate copy it was transcribed from had itself once been compared with the original. The chain of comparison must reach the actual original at the point the tendered copy was made or checked, not stop one step short of it.
:::
::::

::::instinct Scenario 4 — jumping straight to secondary evidence
A party who has never attempted to locate a lost sale deed simply tenders a witness's oral account of its contents, arguing secondary evidence is available so there is no need to prove anything more.
:::ruling
No, or at least not yet. Clause (v) may well make the oral account a recognised form of secondary evidence in principle, but section 59 still requires primary evidence as the default. Unless the party first establishes one of section 60's specific exceptions — here, most plausibly that the original was lost — the oral account cannot be substituted for the deed merely because it happens to qualify as secondary evidence in the abstract.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
No single authority is promoted here. Both sections are worked out through the Act's own text and illustrations rather than through a specific leading judgment recalled with the certainty this project's citation rule requires.

#### Sword and shield
| | As a sword (offering evidence) | As a shield (resisting evidence) |
|---|---|---|
| S. 58 | Build the comparison chain properly — compare against the actual original, not against an intermediate copy | Object to any copy-of-a-copy that was never itself compared against the original, per Illustration (c) |
| S. 59 | Establish a section 60 gateway before tendering secondary evidence, not after an objection is raised | Object immediately if secondary evidence is tendered without any foundation for why the original was not produced |

#### The limitation clock
None of its own — the same mode-of-proof timing rule applies: an objection that secondary evidence was tendered without a section 60 foundation should be raised when it is offered, not reserved for appeal.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 58, clauses (v)-(vii) (oral and written accounts) | Ch. IV of this Act, s. 55 (`chapter-04.md`, directness rule) | A firsthand oral account of a document's contents under clause (v) must still satisfy section 55's directness rule — it must come from someone who actually saw the document, not from a relayed description |
| S. 59 | S. 60 (this file, immediately below) | S. 59 states the default; s. 60 supplies the closed list of exceptions that alone can displace it — the two must always be read together |

#### The authorities
No confidently recalled leading authority is promoted for this section.

#### Strategy and drafting
Before tendering anything as secondary evidence, check it against section 58's list clause by clause — a copy that was never compared with the original, or an account from someone who did not personally see the document, fails at the threshold regardless of how compelling it looks. Then separately establish a section 60 gateway; pleading practice that jumps straight to secondary evidence without addressing why the original was not produced invites an immediate and often fatal objection.

## Section 60 — when secondary evidence is receivable

### The dispute this solves

::: oneminute
A landlord wants to prove the terms of a lease using a photocopy, because the tenant — who holds the original — refuses to produce it. Simply having a photocopy is not enough on its own; the landlord must first bring himself within one of the specific situations section 60 lists as justifying secondary evidence, here, that the original is in the tenant's possession and the tenant has failed to produce it after being given the required notice.
:::

::: story
A shopkeeper's ledger runs to thousands of individual entries no judge could realistically read line by line in court. Rather than forcing the exercise, the Act lets a skilled examiner summarise the general result of the whole collection — the seventh gateway in section 60's list exists precisely for records too voluminous to examine directly.
:::

### The Act, decompiled

> **60.** Secondary evidence may be given of the existence, condition, or contents of a document in the following cases, namely:— (a) when the original is shown or appears to be in the possession or power— (i) of the person against whom the document is sought to be proved; or (ii) of any person out of reach of, or not subject to, the process of the Court; or (iii) of any person legally bound to produce it, and when, after the notice mentioned in section 64 such person does not produce it; (b) when the existence, condition or contents of the original have been proved to be admitted in writing by the person against whom it is proved or by his representative in interest; (c) when the original has been destroyed or lost, or when the party offering evidence of its contents cannot, for any other reason not arising from his own default or neglect, produce it in reasonable time; (d) when the original is of such a nature as not to be easily movable; (e) when the original is a public document within the meaning of section 74; (f) when the original is a document of which a certified copy is permitted by this Adhiniyam, or by any other law in force in India to be given in evidence; (g) when the originals consist of numerous accounts or other documents which cannot conveniently be examined in Court, and the fact to be proved is the general result of the whole collection.
>
> **Explanation.** For the purposes of— (i) clauses (a), (c) and (d), any secondary evidence of the contents of the document is admissible; (ii) clause (b), the written admission is admissible; (iii) clause (e) or (f), a certified copy of the document, but no other kind of secondary evidence, is admissible; (iv) clause (g), evidence may be given as to the general result of the documents by any person who has examined them, and who is skilled in the examination of such document.

| Text | What it does | Why it matters |
|---|---|---|
| Clause (a) (possession and non-production after notice) | Requires notice under section 64 first, then non-production, before secondary evidence of a withheld original is allowed | A party cannot skip straight to secondary evidence just because an opponent holds the original — the notice-and-refusal sequence must actually happen |
| Clause (c) (destroyed, lost, or genuinely unproducible) | Excuses non-production only where it does not arise from the party's own default or neglect | A party who lost the document through carelessness cannot rely on this gateway to excuse the loss |
| Clauses (e) and (f) (public documents and permitted certified copies) | Limit the *kind* of secondary evidence allowed — only a certified copy, per the Explanation's clause (iii) | Even where the gateway opens, it does not open the door to any and every kind of secondary evidence; the Explanation controls precisely which kind |
| Clause (g) and Explanation clause (iv) (voluminous accounts) | Lets a skilled examiner testify to the general result of documents too numerous to examine conveniently in court | Mirrors section 58, clause (viii)'s recognition of the same category as a form of secondary evidence in the first place |

::: proviso The Explanation does not hand out a blank cheque of secondary evidence
Clearing a section 60 gateway does not mean any kind of secondary evidence will do. The Explanation is deliberately clause-specific: gateways (e) and (f) admit only a certified copy and nothing else, while gateways (a), (c), and (d) are more permissive and allow any secondary evidence of contents. Reading the gateway alone, without checking what kind of secondary evidence the Explanation actually permits for it, is a common and avoidable drafting trap.
:::

### How this actually runs

<MicroTree
  input="A party wants to tender secondary evidence of a document instead of producing the original"
  :gates="[
    { q: 'Does one of the seven gateways in section 60 - non-production after notice, admitted contents, genuine loss or destruction, immovability, public-document status, a permitted certified copy, or voluminous accounts - actually apply on the facts?', no: 'no gateway is open, and section 59 requires primary evidence; secondary evidence cannot be received' },
    { q: 'Does the kind of secondary evidence being offered match what the Explanation permits for that specific gateway?', no: 'the gateway is open but the wrong kind of secondary evidence is being offered - for example, an uncertified copy where only a certified copy is permitted' }
  ]"
  result="the secondary evidence may be received to prove the existence, condition, or contents of the document"
  caveat="a party's own default or neglect in losing or failing to produce the original defeats the clause (c) gateway even where the loss is otherwise genuine"
  resultKind="mixed"
/>

### In plain English

**Section 60 is a closed list of seven specific situations, not a general escape hatch.** Each gateway answers a different practical problem — an uncooperative document-holder, an admitted content, a genuine loss, an immovable original, a public document, a permitted certified-copy regime, or an unmanageable volume of records — and the Explanation then tells you exactly which kind of secondary evidence each gateway lets in. Both steps must be satisfied; opening a gateway is not the same as being free to offer any secondary evidence at all.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping stated here — Indian Evidence Act, 1872, s. 65 (cases in which secondary evidence relating to documents may be given) to BSA s. 60 — is the commonly reported correspondence. No verified local Indian Evidence Act source text exists in `reference/`; treat this as a flagged hypothesis until a verified source is added.
:::

| Indian Evidence Act (reported) | BSA | What appears to have changed |
|---|---|---|
| S. 65 | S. 60 | Renumbered only, on the reported mapping — the seven-gateway structure and the clause-specific Explanation appear unchanged in substance |

### Test your instinct

::::instinct Scenario 5 — the notice that was never sent
A creditor wants to prove a loan agreement using a copy, asserting the debtor holds the original and has refused to hand it over. No notice to produce was ever sent to the debtor.
:::ruling
No, not on this record. Clause (a) requires notice under section 64 to have been given and the original still not produced, before secondary evidence of a withheld original is allowed. Skipping the notice step means the gateway has not actually opened, however likely it is that the debtor really does hold the original. The creditor must send the notice first.
:::
::::

::::instinct Scenario 6 — lost through carelessness
A party seeking to rely on clause (c) admits, under cross-examination, that the original document was almost certainly lost when she cleared out old files without checking their contents.
:::ruling
No. Clause (c) excuses non-production only where it does not arise "from his own default or neglect." A loss traceable to the party's own carelessness in discarding files without checking them falls outside the gateway, however genuinely gone the original now is. The document was true and the loss was real — but the mode by which secondary evidence is sought to be justified fails.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
No single authority is promoted here. Section 60's seven gateways are worked out through the Act's own text and Explanation rather than through a specific leading judgment recalled with the certainty this project's citation rule requires.

#### Sword and shield
| | As a sword (offering evidence) | As a shield (resisting evidence) |
|---|---|---|
| Clause (a) | Send the section 64 notice early and keep proof of service, so non-production can be shown cleanly | Challenge whether notice was actually given, and whether it reached the right person, before secondary evidence is admitted |
| Clause (c) | Document precisely how and when the original was lost or destroyed, to show the loss did not arise from your own default | Cross-examine on the circumstances of the loss to show it was the party's own carelessness |
| Clauses (e)-(f) | Ensure only a certified copy is tendered, matching what the Explanation actually permits | Object if an uncertified copy is offered under a gateway that permits only a certified one |

#### The limitation clock
None of its own — but practically, clause (a)'s notice must be given, and a reasonable opportunity to produce the original must pass, before secondary evidence can be tendered; leaving this until the day of trial risks the gateway not yet being open.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 60, clause (a) | BSA s. 64 (notice to produce) — not yet written | Section 60(a) expressly cross-refers to the notice procedure in section 64; when s. 64 is written, it must supply the actual notice mechanics this gateway depends on |
| S. 60, clause (e) | BSA s. 74 (public document, definition) — not yet written | Section 60(e) expressly cross-refers to section 74's definition of a public document; when s. 74 is written, it must supply the actual definition this gateway depends on |
| S. 60, clauses (e)-(f) and Explanation clause (iii) (certified copies) | Ch. V of this Act, ss. 61-63 (`chapter-05b.md`, electronic records) | Where the "original" in question is itself an electronic record, the certified-copy route here interacts with the certificate-based proof regime already covered for electronic records; a certifying authority for a public electronic record and the s. 63 certificate are not automatically the same thing and should not be conflated |

#### The authorities
No confidently recalled leading authority is promoted for this section.

#### Strategy and drafting
Identify the specific gateway relied on before drafting the notice to produce or the affidavit explaining a document's loss — a vague "the original is unavailable" pleading invites a gateway-by-gateway challenge. Where relying on clause (c), be ready to affirmatively explain the circumstances of loss, since the absence of the party's own default or neglect is itself part of what must be shown, not merely assumed once loss is proved. Cross-check the Explanation before deciding what kind of secondary evidence to actually tender — offering an uncertified copy under clauses (e) or (f) is a common, avoidable, and often fatal drafting error.

## Chapter V (part I) consolidation — primary evidence, or one of the seven doors to secondary evidence?

1. **Is the thing produced the document itself, or a qualifying part, counterpart, uniform-process copy, or electronic-record instance under section 57?** If so, it is primary evidence and the analysis ends there.
2. **If not, does it fall within one of section 58's eight recognised categories of secondary evidence at all?** Something outside every clause is not secondary evidence, whatever else it might be.
3. **Has a section 60 gateway actually been shown to apply on the facts** — non-production after notice, admitted contents, genuine unavoidable loss, immovability, public-document status, a permitted certified copy, or voluminous accounts?
4. **Does the kind of secondary evidence being offered match what the Explanation to section 60 permits for that specific gateway?** Opening the door is not the same as being free to walk through it with any evidence at all.
