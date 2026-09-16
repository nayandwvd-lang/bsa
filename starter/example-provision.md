# Example provision skeleton

Every container, badge and component in its correct place, with the traps annotated inline. Read it once, then work from `reference/01-cognitive-schema.md`.

Unlike the BNSS kit this was forked from, the skeleton below is **not fully generic** — the worked fragment under "The Act, decompiled" and "How this actually runs" uses the real text of **BSA 2023, s. 63** (electronic records), verified against `reference/bare-act/bsa-2023-full-text.txt`, because a placeholder-only skeleton for evidence law hides exactly the thing that makes this provision hard: the four cumulative conditions in s. 63(2). The HUD, concordance and instinct sections are still placeholders — do not copy any of it into a real page as substance without re-verifying.

---

```markdown
## Section 63 — Admissibility of electronic records

### The dispute this solves

<!-- TRAP: both containers below MUST carry an inline title on the opener line.
     Without one they render at 3x instead of 4x and lose their header. The
     build does not fail; the page is just silently wrong. -->

::: oneminute A WhatsApp screenshot is not evidence just because it is real.

Open on the human situation. A person, a problem, something at stake. No section
number in the first sentence.

State the operative rule in plain words. Three to six short paragraphs.

Close by naming the one thing most people get wrong — here, that a genuine
electronic record can still be inadmissible for want of the s. 63(4) certificate.
:::

::: story Two kinds of X, and why practitioners confuse them

The conceptual map. Longer than the oneminute, and allowed to be genuinely
intellectual — but every proposition must land on a concrete consequence.

This is where a taxonomy goes, or the policy reason behind a rule, or the
distinction that makes the rest of the chapter legible — here, "the record is
authentic" versus "the record is admissible," which is precisely the
distinction *Anvar P.V.* and *Arjun Panditrao* fight about.

Note the renderer labels this block "Worked example · invented facts", so the
reader can never mistake a scenario for a reported case. Never give an invented
scenario a citation.
:::

### The Act, decompiled

A short orienting paragraph: what to watch for in the text below. Section 63
is a single long sentence built on a "notwithstanding" opener, four cumulative
conditions in sub-section (2), and a certificate requirement in sub-section (4)
that a large share of the reported case law is actually about.

<!-- Verbatim statutory text, badged. Badge the OPERATIVE words only — roughly
     five to twelve per sub-section. A blockquote where every third word is
     badged teaches nothing.

     [[!...]] mandatory   [[?...]] discretionary   [[=...]] term of art

     A badge never spans a newline and never nests another badge. -->

> **63. Admissibility of electronic records.** — **(1)** Notwithstanding
> anything contained in this Adhiniyam, any information contained in an
> electronic record which is printed on paper, stored, recorded or copied in
> optical or magnetic media or semiconductor memory which is produced by a
> computer or any communication device [[!shall]] be deemed to be also a
> document ("computer output"), if the conditions mentioned in this section
> [[!are satisfied]] in relation to the information and computer in question,
> and [[!shall]] be admissible in any proceedings, without further proof or
> production of the original, as evidence of any contents of the original or
> of any fact stated therein of which direct evidence would be admissible.
>
> **(2)** The conditions referred to in sub-section (1) in respect of a
> computer output [[!shall]] be [[=the following]] — (a) it was produced
> during the period the device was regularly used to create, store or process
> information for that activity; (b) the information was regularly fed into
> the device in the ordinary course of the activity; (c) the device was
> operating properly throughout, or any malfunction did not affect the record
> or its accuracy; and (d) the information reproduces or is derived from the
> information so fed in.
>
> **(4)** In any proceeding where it is desired to give a statement in
> evidence by virtue of this section, a certificate [[!shall]] be submitted
> along with the electronic record **at each instance where it is being
> submitted for admission**, identifying the record, describing how it was
> produced, and dealing with the sub-section (2) conditions, signed by the
> person in charge of the device and, where applicable, an expert.

**Statutory mechanics.**

| Operative expression | Character | Consequence |
|---|---|---|
| "**shall**" (sub-s. 1, "deemed to be also a document") | **Mandatory** | Once the conditions are met, the record IS a document — no discretion to exclude it on authenticity grounds alone. |
| "**shall**" (sub-s. 2, the four conditions) | **Mandatory, cumulative** | All four must hold. Failure on any one defeats admissibility under this section, full stop. |
| "**shall**" (sub-s. 4, the certificate) | **Mandatory, per instance** | Not a one-time filing — a fresh certificate is needed each time the record is tendered. |
| "*Notwithstanding anything contained in this Adhiniyam*" | **Overriding clause** | This section is a self-contained code for electronic records; the ordinary primary/secondary evidence rules in ss. 57-61 do not supply a back door around it. |

::: proviso The certificate is not paperwork — it is the admissibility gate itself

Use this container for whatever gate actually decides cases — the cumulative
conditions, the exception that swallows the rule, the category missing from a
list. It need not be a literal proviso.

*Arjun Panditrao Khotkar* held the s. 65B(4) certificate (the BSA s. 63(4)
successor provision) is mandatory, subject to a narrow exception for a party
who has done everything within its power to secure it and the person in
control of the device declines to cooperate. Spell out exactly where a case
dies, and why most cases die there — here, a party who simply forgot to ask
for the certificate, not one who was refused it.
:::

### How this actually runs

<!-- TRAP 1: use CURLY quotes inside prop strings. Backslash-escaped ASCII
     quotes do not compile. The single quotes DELIMITING each JS string stay
     ASCII; only the ones inside the text become curly.
       BROKEN:  { q: 'the court\'s power' }
       RIGHT:   { q: 'the court’s power' }
     Check with: grep -n "[A-Za-z]'[A-Za-z]" <file>

     TRAP 1b: a literal " inside a :gates="[...]" attribute breaks the HTML
     attribute parse EVEN IF it is syntactically valid JS nested inside a
     single-quoted string — the template compiler matches the outer double
     quote regardless of JS nesting. Rephrase without quotation marks, or use
     literal curly “quotes”.
       BROKEN:  note: 'the "original device" rule'
       RIGHT:   note: 'the original-device rule'
     Check with a quote-balance script: every :gates="[...]" block must
     contain exactly 2 literal " characters (its own open/close).

     TRAP 2: no [[...]] badges and no markdown inside props. They render literal.

     TRAP 3: resultKind must match the statute. A "may" section with
     resultKind="mandatory" is a substantive error, not a styling one. -->

<MicroTree
  input="A party wants to tender a WhatsApp chat log, printed out, as evidence."
  :gates="[
    { q: 'Is the record an electronic record within s. 63(1) — a computer or communication device output?', note: 'Printouts, optical or magnetic media, or semiconductor memory all qualify. This is a wide gate; almost everything digital passes it.', no: 'Section 63 does not apply — fall back on the ordinary rules for the medium actually used.' },
    { q: 'Were all four sub-section (2) conditions met when the record was created?', note: 'Regular use of the device, regular feeding of information, proper operation throughout, and accurate reproduction — cumulative, not alternative.', no: 'The computer output is not admissible under this section, whatever the certificate says.' },
    { q: 'Is a sub-section (4) certificate being tendered at this instance of admission?', note: 'A certificate filed for an earlier hearing does not cover a later tender of the same record.', no: 'Admissibility fails for want of the certificate, subject to the narrow Arjun Panditrao exception for a party denied cooperation despite doing everything within its power.' }
  ]"
  result="The computer output is admissible as a document, without producing the original device."
  caveat="Admissibility is not weight. The record still has to be proved to the court's satisfaction on the merits once it is let in."
  resultKind="mandatory"
/>

### In plain English

**The first element.** Prose with a bolded lead, then a concrete example. Not a
bullet list — bullets fragment reasoning and this stage is where the reasoning
has to hold together.

**The second element.** Same shape.

**Explanation 1.** Each Explanation gets its own treatment. Never summarise them
collectively as "the Explanations clarify that…".

### What changed from the Indian Evidence Act

<!-- BSA-ONLY STAGE. The reason the site exists for practitioners. -->

> **Indian Evidence Act, 1872, s. 65B → BSA 2023, s. 63.** ⚠️ *Unverified —
> confirm against the bare Act before citing. (Verified in this kit's own
> text extraction that BSA s. 63 covers the same ground as IEA s. 65B; the
> sub-section numbering correspondence still needs a clause-by-clause check
> before it is asserted in a real page.)*

<!-- Drop the flag ONLY after reading the section text. If chunk A says
     "verify" and chunk D quietly asserts the number as fact, the flag has
     done nothing. Grep for the flag before committing. -->

**Delta bucket: <renumbered with drafting changes | substantively amended —
confirm which before writing>.**

<!-- Name the bucket. Do not describe it vaguely. -->

| IEA 1872, s. 65B | BSA 2023, s. 63 |
|---|---|
| "…shall be **deemed to be also a document**…" | carried forward — confirm wording is identical before asserting "renumbered only" |

**What survives.** The reasoning in *Arjun Panditrao Khotkar v. Kailash
Kushanrao Gorantyal*, (2020) 7 SCC 1 construed IEA s. 65B(4) as mandatory
subject to a narrow non-cooperation exception. To the extent BSA s. 63(4)
reproduces the same structure, the ratio should carry over — but this is a
proposition to verify clause-by-clause, not to assert from the case name alone.

<!-- Never write that a judgment has been "overruled by the BSA". A statute
     does not overrule a judgment; it removes the text the judgment construed.
     If it is genuinely open, say it is open. -->

**What a practitioner must now do differently.** One short paragraph, stated as
an instruction: a new deadline to diarise, a new authority to approach, an old
argument that no longer runs. Not "the provision has been modernised".

### Test your instinct

<!-- TRAP: the nesting pattern is exactly this. Four colons on the outer
     opener, three on the inner, and ONE `::::` closer that closes both.
     Do NOT add a `:::` closer as well — you get a stray literal ::: .

     TRAP: never nest ::: info / warning / danger / tip inside :::ruling.
     Put them AFTER the :::: closer. -->

::::instinct A title that is a fact pattern, not a topic

Priya wants to produce a recorded phone call as evidence against Rohan.
She has the recording on her personal phone but no certificate from anyone,
because she made the recording herself and there is no separate "device
custodian" to sign one. Specific facts, not abstractions — a scenario without
them is not answerable.

Two to four paragraphs, ending in a sharp question addressed to the reader.

Can the recording go in without a s. 63(4) certificate?

:::ruling Reveal the ruling
Often yes — and the reason is not the one most people give.

The answer, the reasoning, and the authority. Never "the court will decide on
the facts."
::::

::::instinct A scenario where the sympathetic party loses

At least one scenario per provision must end with the technically-correct party
losing, with an honest explanation of why the law is built that way. A site
where the reader always wins teaches nothing about litigation.

Who succeeds?

:::ruling Reveal the ruling
The other side — even though the first party's chat log was genuine and
unaltered. Here is why that is by design rather than a defect.
::::

::: warning Drafting trap
Goes here, AFTER the `::::` closer. Never inside the ruling.
:::

### Practitioner HUD — operational realities

#### The winning ratio

<!-- EXACTLY ONE case. Prefer the proposition about POWER over the one about
     discretion: it disposes of a matter at the threshold, cannot be cured by
     consent, and is not waived by a respondent who fails to take it. -->

**<Case name>**, <citation> — <bench strength>.

*Facts in one line.*

**Ratio.** The operative test, stated as a test.

**Practitioner takeaway.** The actual sentence to say in court, in quotation marks.

**Its limits.** What this case does *not* decide, and the obvious counter your
opponent will run. A reader ambushed in court by the counter to the proposition
you handed him has been failed by this site.

**BSA status.** IEA-era judgment; provision falls in the <bucket> bucket;
survives <to what extent>.

#### Sword and shield

| Used offensively | Used defensively |
|---|---|
| Concrete move. | Concrete move. |

#### The limitation clock

<!-- Evidence law rarely carries its own limitation clock the way procedure
     does — most timelines here are the Limitation Act 1963 or the BNSS's
     procedural deadlines for WHEN evidence must be tendered, not a clock
     inside the BSA itself. Say plainly when there is none, rather than
     forcing a row into an empty table. -->

| Event | Period | Source | Consequence of default |
|---|---|---|---|
| … | … | … | … |

#### Interlocking matrix

<!-- BNS 2023 and BNSS 2023 — never "IPC" or "CrPC" outside the concordance
     stage. This is the BSA site's own interlock direction, and it is the
     MIRROR IMAGE of the BNSS kit's matrix (which points at BNS and BSA). -->

| Connects to | Provision | Why it matters |
|---|---|---|
| BSA | s. NNN | … |
| BNS 2023 | s. NNN | the offence this evidence is tendered to prove |
| BNSS 2023 | s. NNN | the procedural stage at which this evidence is tendered |
| Application actually filed | … | … |

#### The authorities

**<Case>**, <citation>. *Facts in one line.* **Ratio.** … **Use.** …

<!-- Say here, next to each case, if it is IEA-era and construes changed text.
     Not only in the concordance stage. -->

::: info Verify before citing
The citations in this block are given from memory and must be checked against
the reports before being placed before a court.
:::

#### Strategy and drafting

**The trap that gets applications dismissed at the threshold.** …

**Timing.** …

**Model grounds.** Numbered, because readers copy them straight into a petition:

1. …
2. …
3. …

<!-- This block is the last on the page and therefore the first casualty of
     fatigue — and it is the block practitioners actually use. Do not compress it. -->
```

---

## After writing: verify the rendered output

```sh
f=docs/.vitepress/dist/chapters/<file>.html
for c in bsa-oneminute bsa-story bsa-proviso bsa-instinct bsa-ruling \
         bsa-tree bsa-mand bsa-disc bsa-art; do
  printf '%-18s %s\n' "$c" "$(grep -o "$c" $f | wc -l | tr -d ' ')"
done
printf '%-18s %s\n' 'LEAK :::' "$(grep -o '&gt;:::' $f | wc -l | tr -d ' ')"
printf '%-18s %s\n' 'LEAK [['  "$(grep -o '\[\[' $f | wc -l | tr -d ' ')"
```

The skeleton above authors, per provision: 1 `oneminute`, 1 `story`, 1 `proviso`, 2 `instinct`, 2 `ruling`.

Expected rendered counts — **4×** for `oneminute` / `story` / `proviso` / `instinct`, **2×** for `ruling`:

```
bsa-oneminute       4
bsa-story           4
bsa-proviso         4
bsa-instinct        8
bsa-ruling          4
LEAK :::            0
LEAK [[             0
```

Both leak counts must be exactly zero. If `bsa-oneminute` shows 3, the container is missing its inline title.
