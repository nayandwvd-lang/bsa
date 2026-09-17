# Chapter IV — Of Oral Evidence

BSA Chapter IV is the shortest chapter in the Act: two sections, ss. 54 and 55. Section 54 draws the boundary of what oral evidence can prove at all — everything except the contents of documents, which belong to Chapter V's regime instead. Section 55 then lays down the rule that gives oral evidence its shape: it must be *direct*, not relayed through a chain of tellers, with two provisos carving out narrow, deliberate exceptions.

## Sections 54 and 55 — oral evidence and the rule of directness

### The dispute this solves

::: oneminute
A witness in a boundary dispute tells the court, "My neighbour told me that Ravi saw the wall being built last monsoon." That sentence contains a fact the court might care about — but the witness did not see the wall being built. She heard about it from someone else, who heard it from Ravi. The court will not let that sentence in as proof that the wall was built last monsoon: it accepts only the account of a witness who says she personally saw, heard, or otherwise perceived a thing, or who personally holds an opinion — not an account borrowed from someone else along the way. Separately, if the real question is what a written agreement says, the witness cannot simply describe its contents from memory either — that is the job of the document itself, not of oral testimony.
:::

::: story
Every child who has played the whispered-message game knows what happens to a sentence passed from ear to ear — by the tenth listener, it is nothing like what the first person said. Section 55 is the law's refusal to play that game in a courtroom. It insists that the person who actually perceived the fact, or who actually holds the opinion, be the one who tells the court — not the last link in a chain of retellings.
:::

### The Act, decompiled

> **54.** All facts, except the contents of documents may be proved by [[=oral evidence]].
>
> **55.** Oral evidence [[!shall, in all cases whatever, be direct]]; if it refers to,— (i) a fact which could be seen, it must be the evidence of a witness who says he saw it; (ii) a fact which could be heard, it must be the evidence of a witness who says he heard it; (iii) a fact which could be perceived by any other sense or in any other manner, it must be the evidence of a witness who says he perceived it by that sense or in that manner; (iv) an opinion or to the grounds on which that opinion is held, it must be the evidence of the person who holds that opinion on those grounds:
>
> Provided that the opinions of experts expressed in any treatise commonly offered for sale, and the grounds on which such opinions are held, [[?may be proved by the production of such treatises]] if the author is dead or cannot be found, or has become incapable of giving evidence, or cannot be called as a witness without an amount of delay or expense which the Court regards as unreasonable:
>
> Provided further that, if oral evidence refers to the existence or condition of any material thing other than a document, the Court [[?may, if it thinks fit, require the production of such material thing]] for its inspection.

| Text | What it does | Why it matters |
|---|---|---|
| "except the contents of documents" (s. 54) | Removes document contents from the scope of oral proof entirely | A witness cannot describe from memory what a contract says — the document, or its permitted secondary evidence, must do that job |
| "shall, in all cases whatever, be direct" (s. 55) | Makes directness mandatory, with no general exception | Hearsay — an account relayed through someone who did not perceive the fact themselves — fails this rule regardless of how credible the relaying witness seems |
| Clauses (i) to (iv) | Match each type of fact — seen, heard, otherwise perceived, or an opinion — to the one witness who may speak to it: the person who actually saw, heard, perceived, or holds the opinion | Prevents the directness rule from being read as applying only to eyewitness sight evidence; it covers every sense and covers opinions too |
| First proviso (expert treatises) | Lets a published treatise stand in for a living expert only when the author is dead, untraceable, incapacitated, or unreasonably costly or slow to call | A narrow, four-condition exception — not a general licence to prefer a book over a witness whenever convenient |
| Second proviso (production of a material thing) | Gives the Court discretion to demand the actual object be produced for inspection, when oral evidence describes something other than a document | Lets the Court verify a described object directly rather than relying solely on a witness's account of it |

::: proviso First proviso — paper stands in only when the expert genuinely cannot
The treatise exception does not activate merely because calling the expert would be inconvenient or because the treatise is well regarded. It activates only on one of the four named conditions — death, untraceability, incapacity, or delay and expense the Court itself regards as unreasonable. An available, callable expert must still be called; the treatise is a last resort, not a shortcut of first choice.
:::

::: proviso Second proviso — the Court can still insist on seeing the thing itself
This is a discretionary power ("if it thinks fit"), not a mandatory rule, and it applies only to a material thing other than a document — documents already have their own production and secondary-evidence regime in Chapter V. Where the actual condition of an object is genuinely in dispute, the Court is not required to accept a witness's description of it as the last word.
:::

### How this actually runs

<MicroTree
  input="A party wants to rely on a witness account of a fact, or of an opinion, as oral evidence"
  :gates="[
    { q: 'Does the witness speak to a fact within one of the four categories in section 55 — something the witness personally saw, heard, otherwise perceived, or an opinion the witness personally holds?', no: 'the evidence fails the directness rule and is inadmissible on that ground, whatever the underlying fact might actually be' },
    { q: 'If the evidence is instead an expert opinion offered through a treatise rather than a living witness, is the author dead, untraceable, incapacitated, or unreasonably costly or delayed to call?', no: 'the treatise proviso does not apply, and the opinion must come from the person who actually holds it' }
  ]"
  result="the oral evidence is direct and admissible under sections 54 and 55"
  caveat="section 54 excludes only the contents of documents from oral proof, not testimony about a document's existence, execution, or the surrounding facts, and the Court may still separately demand production of a described material thing under the second proviso"
  resultKind="mixed"
/>

### In plain English

**Oral evidence has one job it cannot do and one rule it must always follow.** The job it cannot do is prove what a document says — that belongs to Chapter V. The rule it must always follow is directness: the witness must be the very person who saw, heard, otherwise perceived the fact, or who holds the opinion being described. A witness repeating what someone else told them, however sincerely, is not evidence of the underlying fact — it is only evidence that the telling happened, which is usually not what anyone is trying to prove.

The two provisos are narrow doors in an otherwise firm wall. A treatise can speak for a genuinely unavailable expert, and the Court can always ask to see a disputed object for itself — but neither escape hatch is available just because it would be more convenient than calling the actual witness.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping stated here — Indian Evidence Act, 1872, s. 59 (proof of facts by oral evidence) to BSA s. 54, and s. 60 (oral evidence must be direct) to BSA s. 55 — is the commonly reported one-to-one correspondence, continuing the same five-section offset already confirmed for ss. 51–53 in Chapter III. No verified local Indian Evidence Act source text exists in `reference/` to check the old sections' exact wording against the new ones; treat the mapping as a flagged hypothesis until such a source is added.
:::

| Indian Evidence Act (reported) | BSA | What appears to have changed |
|---|---|---|
| S. 59 | S. 54 | Renumbered only, on the reported mapping — the "except contents of documents" carve-out and the general oral-proof rule appear unchanged in substance |
| S. 60 | S. 55 | Renumbered only, on the reported mapping — the four clauses and both provisos appear unchanged in substance |

For a practitioner trained on the old Act, nothing here should feel unfamiliar in substance: the directness rule, its four clause-categories, and both provisos read as a straightforward renumbering rather than a substantive rewrite. The discipline that changes is procedural, not textual — always confirm the current section number before citing it in a pleading or during examination, since the surrounding chapters have shifted even where this one has not.

### Test your instinct

::::instinct Scenario 1 — the colleague who overheard
A workplace-harassment complainant's witness testifies: "My colleague told me she overheard the respondent admit what he did." The complainant's account is very likely true. Is the witness's testimony admissible to prove the admission was made?
:::ruling
No. The witness did not hear the admission herself — she heard about it from a colleague who did. That is exactly the chain section 55 excludes: the account must come from the person who actually heard the fact, not from someone repeating what a hearer told them. The complainant may well be telling the truth about what her colleague reported, but the mode of proof is wrong, and the underlying truth of the fact does not cure it. The colleague herself would have to be called.
:::
::::

::::instinct Scenario 2 — the object described versus the object produced
In a dispute over whether machinery supplied was rusted on delivery, a witness testifies convincingly to its poor condition from memory. The opposing side argues the machinery itself, still available, should be inspected instead of relying on the description. Can the Court require this?
:::ruling
Yes. The second proviso to section 55 lets the Court, if it thinks fit, require production of a material thing other than a document for its own inspection, where oral evidence refers to its existence or condition. The witness's testimony is not thrown out — but the Court is not required to treat it as the final word when the actual object can be examined directly, and may order that examination.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
No single authority is promoted here. The directness rule and its four clauses are worked out through the Act's own text rather than through a specific leading judgment recalled with the certainty this project's citation rule requires.

#### Sword and shield
| | As a sword (offering evidence) | As a shield (resisting evidence) |
|---|---|---|
| Section 54 | Use oral evidence freely for anything short of a document's contents | Object the moment an opposing witness starts describing what a document says, rather than producing it |
| Section 55 | Call the actual witness who saw, heard, perceived, or holds the opinion — never rely on a relayed account | Object immediately to any secondhand or relayed testimony as failing the directness rule |
| First proviso | Invoke the treatise exception where your own expert is genuinely dead, untraceable, incapacitated, or unreasonably costly to call | Challenge a treatise's use if the opposing expert was in fact available and callable |
| Second proviso | Ask the Court to order production of a disputed object where inspection would help your case | Anticipate this application if your own case rests on an object whose condition is disputed |

#### The limitation clock
None of its own. The one timing discipline that does apply is the general rule that an objection to the *mode* of proof — here, a hearsay objection under section 55, or an objection to unauthorised treatise evidence under the first proviso — must be raised when the evidence is tendered, not for the first time on appeal, or it is treated as waived.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 54 (documents excluded) | Chapter V of this Act (documentary evidence, ss. 56 onward) | Whatever oral evidence cannot do for document contents, Chapter V's primary- and secondary-evidence regime must do instead — the two chapters divide the same terrain rather than overlapping it |
| S. 55, clause (iv) and first proviso (opinion evidence) | Chapter II part V of this Act, ss. 39–40 (`chapter-02e.md`, expert opinion) | The directness rule for opinion evidence and the treatise proviso both operate on the same expert-opinion evidence ss. 39–40 define; a treatise offered under the first proviso must still be the opinion of someone who would otherwise qualify as an expert under s. 39 |

#### The authorities
No confidently recalled leading authority is promoted for this section; the directness rule is well settled but no specific citation is held with the certainty this project's rule requires.

#### Strategy and drafting
Object to hearsay the moment it is offered, on the record, rather than waiting to argue it in closing — a mode-of-proof objection raised late is often treated as waived. When your own expert may become unavailable before trial, build the record early for the first proviso: note the expert's age, health, or location so that unavailability, if it happens, is not a fresh dispute in itself. And remember that section 54 cuts both ways — a favourable witness who starts reciting a document's contents from memory is just as vulnerable to objection as an opponent's witness doing the same.

## Chapter IV consolidation — is this evidence oral proof of the right kind?

1. **Is the fact one that oral evidence can prove at all?** If the real question is what a document says, oral evidence cannot answer it — Chapter V's document-proof regime must be used instead.
2. **Does the witness's account satisfy the directness rule?** The witness must be the person who actually saw, heard, otherwise perceived the fact, or who holds the opinion — not someone relaying what another person said.
3. **If the evidence is an expert opinion from a treatise, does one of the four proviso conditions apply?** Only death, untraceability, incapacity, or unreasonable delay or expense lets a treatise stand in for the living expert.
4. **If a material thing's existence or condition is in dispute, has the Court been asked — or has it decided on its own — to require production for inspection?** This is always discretionary, never mandatory.
