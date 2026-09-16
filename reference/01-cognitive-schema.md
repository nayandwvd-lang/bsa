# 01 — The Cognitive Schema

The architecture that makes the site a teaching machine rather than a styled bare Act. Read this before writing a single line of content.

This file is adapted from the BNSS project's `reference/01-cognitive-schema.md`, which was itself adapted from the CPC project's original. The five generic stages are unchanged. Only Stage 6 and the statute-specific guidance inside Stages 3b and 5 differ — they are rewritten here for evidence law rather than criminal procedure.

---

## The skeleton

Every provision block, without exception, in this order and with these exact heading texts:

```markdown
## <Provision heading>

### The dispute this solves
### The Act, decompiled
### How this actually runs
### In plain English
### What changed from the Indian Evidence Act
### Test your instinct
### Practitioner HUD — operational realities
#### The winning ratio
#### Sword and shield
#### The limitation clock
#### Interlocking matrix
#### The authorities
#### Strategy and drafting
```

`### What changed from the Indian Evidence Act` is **BSA-only**. It does not exist in the CPC project, and it is not the same stage as BNSS's `### What changed from the CrPC` even though it occupies the same slot — the source statute, the delta patterns, and above all the case law being reconciled are entirely different. It is the highest-value thing this site can offer a practitioner who learned evidence law under the 1872 Act.

A "provision" may be a single section or a tight cluster that must be read together (for example, primary and secondary evidence, or the conditions for admitting electronic records together with the certificate requirement). Cluster when the sections genuinely interlock; do not cluster to save effort.

---

## Stage 1 — Ground-Zero Anchor · `### The dispute this solves`

**Purpose.** Put a human being in trouble in front of the reader *before* any statutory language. The reader must know what is at stake before they are asked to care about a section number.

**Contains, in order:**

1. A `::: oneminute` container with an **inline title that is a complete sentence** — a claim, not a topic label.
2. A `::: story` container with an inline title, giving the conceptual map.

**The `oneminute` block.** Three to six short paragraphs. Written so a person who has never opened a bare Act finishes it knowing what the provision does and why anyone fights about it. It must:

- open with the human situation, not the section;
- state the operative rule in plain words;
- name the one thing most people get wrong.

**The `story` block.** This is where the conceptual scaffolding goes — the taxonomy, the "two kinds of X and why lawyers confuse them", the policy reason behind the rule. It is longer than the `oneminute`. It is allowed to be genuinely intellectual. It is not allowed to be abstract: every proposition lands on a concrete consequence.

**Forbidden in Stage 1:** section numbers in the first sentence; the words "this section provides that"; any citation; any statutory quotation.

**Title discipline.** Both containers **must carry an inline title on the opener line**. Without one they render at the wrong nesting depth and lose their header. Titles that work:

> `::: oneminute A WhatsApp screenshot is worthless in court until someone signs a certificate about the phone it came from.`
> `::: story Two kinds of "proof", and why students confuse relevance with weight`

Titles that fail: `::: oneminute Overview`, `::: story Background`.

---

## Stage 2 — The Living Bare Act · `### The Act, decompiled`

**Purpose.** The reader reads the actual statutory text, and the text explains itself as they read it.

**Contains, in order:**

1. A short orienting paragraph — what to watch for in the text below (the double negative, the two "ands", the missing category).
2. The **verbatim statutory text** in a blockquote, with inline badges applied.
3. A **statutory mechanics table**: operative expression → character → consequence.
4. One or two `::: proviso` containers, each with an inline title, unpacking the gate that decides most cases.

**Badge discipline.** This is the heart of the stage.

| Syntax | Renders | Apply to |
|---|---|---|
| `[[!shall be allowed]]` | red, "Mandatory" | commands: *shall*, *shall not*, *no … shall*, *must* |
| `[[?may direct]]` | blue, "Discretionary" | powers: *may*, *it shall be lawful*, *if it thinks fit* |
| `[[=reason to believe]]` | dotted, "Term of art" | defined or judicially loaded expressions |

Badge the **operative words only**. A blockquote where half the words are badged teaches nothing — the eye stops distinguishing. Aim for roughly five to twelve badges in a typical sub-section.

The badged word stays plain text in the rendered HTML, so search still finds it. Never nest a badge inside another badge; never let a badge span a newline.

**Verbatim means verbatim.** Reproduce the statutory text exactly, including the archaic punctuation and the Explanations and Illustrations. BSA carries a large number of Illustrations — `(a)`, `(b)`, `(c)` fact patterns appended directly to a section. Quote them; they are the bare Act's own worked examples and are frequently more useful to a student than anything this site adds. Do not paraphrase inside the blockquote. If the section is very long, quote the sub-sections that matter and note explicitly which ones you have omitted.

**The `proviso` container** is not only for literal provisos. Use it for whatever gate actually decides cases — the cumulative conditions, the exception that swallows the rule, the category conspicuously missing from a list. Give it a title that states the insight:

> `::: proviso The four conditions in s. 63(2) — why almost every electronic-evidence objection wins on the third`
> `::: proviso What "secondary evidence" does not include, and why that list is exhaustive`

---

## Stage 3 — Mechanical Micro-Tree · `### How this actually runs`

**Purpose.** Reduce the provision to the sequence of gates a real case passes through, so the reader can see exactly where a piece of evidence gets admitted, excluded, or comes in only conditionally.

**Contains:** one or two `<MicroTree>` components, each preceded by a one-line framing sentence if needed.

**Design rules.**

- `input` is a **question a party actually asks**, in the voice of the cast — not a restatement of the section. Good: *"Bharat wants to produce a call-detail printout. Does he need anything else, or does the printout speak for itself?"* Bad: *"Application of Section 63."*
- Three to six gates. Fewer than three is not a tree; more than six is a flowchart nobody reads.
- Each gate's `q` is a **yes/no question**. The `note` explains how to answer it. The `no` says what happens if the answer is no — and this is the most valuable field in the component, because the failure branch is where litigation actually lives. In evidence law the failure branch is usually one of: the evidence is inadmissible outright, it is admissible only for a limited purpose, or it is admissible but its weight is now open to attack. Say which. Write the `no` as a full consequence, not "evidence excluded".
- `result` states what the court does if every gate is passed.
- `resultKind` is `'mandatory'` or `'discretionary'` and must match the statute. If the section says *may*, the result is discretionary and the component correctly renders "Then the court MAY".
- `caveat` carries the qualification that would otherwise mislead.

**Syntax traps — these will break your build.** See `02-component-system.md`. Two that must be internalised now:

1. Use **typographic curly quotes** (`’ ‘`) inside prop strings. Backslash-escaped ASCII quotes fail to compile.
2. **Never put a `[[…]]` badge inside a MicroTree prop.** Badges are markdown-level; props are not markdown.

---

## Stage 3b — Conceptual demystification · `### In plain English`

**Purpose.** Break the doctrine into independent sub-modules, each with a bolded lead so the reader can navigate by scanning.

This is where a compound doctrine gets taken apart. Each element gets its own bolded lead paragraph and a concrete example. If the provision has Explanations, each Explanation is dealt with separately — never summarised collectively as "the Explanations clarify that…". Where the provision has Illustrations, at least the two or three most instructive ones should be walked through in prose here, not merely quoted in Stage 2 and left to speak for themselves.

Written as prose with bolded leads, not as a bullet list. Bullets fragment reasoning; this stage is where the reasoning has to hold together.

---

## Stage 6 — Concordance · `### What changed from the Indian Evidence Act`

**BSA-only. This stage is the reason the site exists for practitioners.**

**Purpose.** A practitioner who knows the Indian Evidence Act, 1872 cold arrives with thirty years of case law in his head. Tell him, precisely, whether it still works.

**Contains, in order:**

1. A **concordance line**, unmissable, at the top:

   > **Indian Evidence Act, 1872, s. 65B → BSA 2023, s. 63.** *(verify against bare Act)*

   If the mapping is not one-to-one — a section split across several, several merged into one, or (common in BSA) a sub-section renumbered independently of its parent section — say so explicitly. Renumbering is not the interesting part; splits, merges and sub-section-level drift are.

2. A **delta classification**. Every provision falls into exactly one of four buckets, and the bucket must be stated by name:

   | Bucket | Meaning | What it does to IEA authority |
   |---|---|---|
   | **Renumbered only** | Text materially identical | IEA precedent survives intact. Cite it, and cite the new number alongside. |
   | **Renumbered with drafting changes** | Wording modernised, substance unchanged | Precedent survives, but the argument must be reframed in the new words. Flag the changed words. |
   | **Substantively amended** | A condition, a category, a presumption or a procedural safeguard has changed | Precedent survives **only to the extent the reasoning does not depend on the changed text**. This is the dangerous bucket. Identify precisely which part of the ratio still stands. |
   | **New provision** | No IEA ancestor | No direct authority. Analogous reasoning only, and say so openly. |

3. A **side-by-side text comparison** where the text changed. Table with two columns, IEA text and BSA text, with the altered words bolded in both. Do not describe the change in prose when you can show it.

4. **The practical consequence**, in one short paragraph. Not "the provision has been modernised" — that tells nobody anything. Say what a practitioner must now *do differently*: a certificate that must now be filed at a different stage, a category of document that is now admissible where it previously was not, an old objection that no longer runs.

**The survival rule, stated explicitly wherever it bites.**

> IEA-era authority binds on a BSA provision to the extent the two are *pari materia*. Where the text has changed, the precedent survives only so far as its reasoning is independent of the changed words. Where the change goes to the very condition the judgment construed, the precedent is persuasive at best, and you must say so before your opponent does.

**Never assert that a case has been overruled or displaced by the BSA unless you are certain.** The honest form is: *"the reasoning in X construed the words 'Y', which no longer appear; whether it survives is open."*

**The single most important recurring case for this stage.** *Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal*, (2020) 7 SCC 1, decided the mandatory character of the IEA s. 65B(4) certificate requirement under the old Act. Almost every electronic-evidence provision in Chapters II, IV and V will need to state precisely how much of that reasoning survives onto BSA s. 63 — this is not a one-off, it is the recurring fact pattern of the whole electronic-evidence cluster. See the worked example in `example-provision.md`.

---

## Stage 4 — Test your instinct · `### Test your instinct`

**Purpose.** Force the reader to commit to an answer before seeing it. Retrieval beats re-reading; this is the only stage that produces durable recall.

**Contains:** four to six `::::instinct` blocks, each holding a `:::ruling` accordion.

**Structure of each block:**

```markdown
::::instinct <A title that is a fact pattern, not a topic>

<Two to four paragraphs of facts. Named parties. Dates. Amounts.
Ending in a sharp question addressed to the reader.>

:::ruling Reveal the ruling
<The answer, with reasoning, and the authority.>
::::
```

The outer `::::` closer closes both. **Do not nest a third container inside `:::ruling`** — put any `::: info` / `::: warning` after the `::::` closer.

**Scenario design rules.**

- Facts must be specific enough to be answerable. "A produces a document" is not a scenario.
- Vary the outcome. At least one scenario in every provision must end with **the reader's instinct being wrong**, and at least one must end with **the technically-correct party losing** — with an explanation of why that is by design, not a defect. In evidence law this is often the party with the "obviously true" document who loses because the mode of proof was wrong, not because the fact was false — that distinction (fact vs. mode of proof) is worth teaching explicitly wherever it arises.
- The ruling explains *why*, and names the authority. It never says "the court will decide on the facts."
- Titles are fact patterns: *"The WhatsApp chat everyone believed and no court could look at"*, *"The photocopy that was actually primary evidence."* Not *"Scenario 2"*.

---

## Stage 5 — Practitioner HUD · `### Practitioner HUD — operational realities`

Six `####` sub-blocks, always in this order.

### `#### The winning ratio`

**Exactly one case.** The single proposition a practitioner would want in his written submissions on this provision.

Contains: case name in bold, citation, bench strength, one line of facts, the **ratio** stated as the operative test, and a **practitioner takeaway** — the actual sentence to say in court, in quotation marks.

**Selection principle.** Prefer the proposition that is about **power or admissibility as of right** over the one about a court's discretionary weighing; an admissibility point disposes of a matter at the threshold, cannot be cured by consent in most cases, and is not waived by a party who fails to object at the right moment (though note: objections to the *mode* of proof, unlike objections to relevance, generally must be taken at the time the evidence is tendered — see `#### The limitation clock` below). Prefer the Constitution Bench or the largest available bench. Prefer the case whose ratio is stable over the one that is fact-sensitive.

**BSA caveat.** State whether the winning ratio is an IEA-era judgment and, if so, which delta bucket the provision falls in. A winning ratio in the "substantively amended" bucket must carry an explicit note on the extent of its survival.

### `#### Sword and shield`

A two-column table: how the provision is used offensively (by the party tendering the evidence — plaintiff, prosecution, or complainant, depending on the provision) and defensively (by the party objecting — defendant or accused). Concrete moves, not descriptions.

### `#### The limitation clock`

**This stage is thinner for BSA than for BNSS, and that is an honest fact about the subject, not a gap to paper over.** The Evidence Act is a law of admissibility and proof, not a law of deadlines. It very rarely imposes its own limitation period. Where it genuinely does not, say so directly — "this provision carries no limitation clock of its own" — rather than manufacturing a table entry.

Where a real clock does exist, it is almost always one of these, and the table must say which:

- **The timing of the objection itself.** Many evidentiary objections (particularly to the *mode* of proof, as opposed to the underlying relevance or admissibility) must be taken at the moment the evidence is tendered, or they are treated as waived. This is the single most litigated "limitation" question in evidence law and deserves its own row wherever it applies.
- **The Limitation Act, 1963**, where the provision operates inside a civil suit and the question is really about when the suit or application itself was filed, not about the evidence provision as such.
- **A BNSS 2023 timeline**, where the provision interlocks with a criminal-procedure deadline (for example, the stage at which a certificate under s. 63(4) must accompany an electronic record placed before the investigating or the trial court).

Table form: event → period → source → consequence of default. If the row is genuinely "none", write "none" — do not leave the sub-block empty, because an empty sub-block is indistinguishable from one nobody checked.

### `#### Interlocking matrix`

What this provision connects to. Rows for: other BSA provisions, **BNS 2023** offence provisions (where the evidentiary question arises in a criminal trial — forgery, fabrication of evidence, perjury), **BNSS 2023** procedural provisions (the stage of a criminal proceeding at which this kind of evidence is typically tendered — investigation, framing of charge, trial), the applicable forms and the court-fee or stamp implications where a document's proof is in issue, and the application that is actually filed (for example, an application under Order XIII CPC for production, or an objection recorded at the time of marking an exhibit).

Never write "CrPC" or "Indian Evidence Act" here except in the concordance stage when explaining what changed. This matrix is the mirror image of the BNSS kit's own matrix, which points at BNS 2023 and BSA 2023 — here BSA is the page you are on, and the matrix points outward at BNS 2023 and BNSS 2023 instead.

### `#### The authorities`

The remaining cases. Each with citation, one-line facts, ratio, and how it is used. Followed by a `::: info Verify before citing` note where any citation is not certain.

If a judgment is IEA-era and construes text that has changed, say so **in this block**, next to the case, not only in the concordance stage.

### `#### Strategy and drafting`

The most practical block on the page. Drafting and proof traps that get evidence excluded or a document's authenticity successfully challenged; timing decisions (when to object, when to file a certificate, when to call a witness to prove execution rather than relying on presumption); the model objection or application checklist. Numbered grounds where an application or objection is involved, because a reader will copy them.

---

## Chapter consolidation

At the end of each chapter file, one `## Chapter consolidation — <a question>` section that ties the provisions together and answers the practical question a reader arrives with. Not a summary; a decision aid.

---

## What good looks like — the test

Before committing a provision, ask:

1. Could a reader who has never opened a bare Act follow Stage 1 to the end?
2. Does the badged blockquote let the eye find the operative words in two seconds?
3. Does the MicroTree's failure branch tell me what actually happens to the evidence, or does it say "evidence excluded"?
4. Does the concordance tell an IEA-trained practitioner what to **do differently**?
5. Does at least one instinct scenario end badly for the sympathetic party, with an honest explanation?
6. Is there exactly one winning ratio, and is it the one about admissibility as of right rather than discretionary weight?
7. Would I be comfortable if a judge read this page over my shoulder?

If any answer is no, the provision is not finished.
