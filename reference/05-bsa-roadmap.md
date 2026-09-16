# 05 — BSA Roadmap and Concordance Rules

What is different about this statute, how the site is structured around it, and the order of work.

Adapted from the BNSS project's `reference/05-bnss-roadmap.md`. The verification gate, the "no Orders" structural note, and the cross-reference discipline are carried over as generic method. The chapter table, the concordance seed table, the sidebar grouping, the "what is genuinely new" section and the phased order of work are rewritten from scratch for BSA, using the section index this project actually built — see "Provenance" below.

---

## The statute

The **Bharatiya Sakshya Adhiniyam, 2023** (Act No. 47 of 2023) replaced the Indian Evidence Act, 1872 with effect from **1 July 2024**. It runs to **170 sections across 12 chapters, grouped into 3 Parts**, with no Schedules of substantive content.

It arrived as one of three linked statutes, published together (gazette numbers 250882–250884, all dated 25 December 2023), and they must be treated as a set:

| New statute | Replaces |
|---|---|
| **Bharatiya Nyaya Sanhita, 2023** (BNS) | Indian Penal Code, 1860 |
| **Bharatiya Nagarik Suraksha Sanhita, 2023** (BNSS) | Code of Criminal Procedure, 1973 |
| **Bharatiya Sakshya Adhiniyam, 2023** (BSA) | Indian Evidence Act, 1872 |

**Every Interlocking Matrix on this site points at the BNS and the BNSS.** The Indian Evidence Act appears only inside `### What changed from the Indian Evidence Act`, when explaining what a judgment was decided under. This is the mirror image of the BNSS kit's own rule, which points its matrix at BNS and BSA.

---

## Provenance — what has actually been verified so far

Before any content is written, this project already did the following, and it is recorded here so a later session does not redo it or, worse, distrust it without checking:

- The official MHA gazette PDF (Act No. 47 of 2023) was downloaded and is at `reference/bare-act/mha-bsa.pdf`.
- The full text was extracted page-by-page and is at `reference/bare-act/bsa-2023-full-text.txt`, with `===== PAGE N =====` markers.
- A section index was built by regex over that text and is at `reference/bare-act/section-index.md`. It found **exactly 170 sections, numbered 1 to 170, with zero gaps and zero false positives.**
- The chapter boundaries below were read directly off `CHAPTER` headings in the extracted text (`grep -n -i "^CHAPTER"`), and the Part boundaries off `PART` headings (`grep -n "^PART"`), not assumed from outside knowledge.

Everything past this point that is stated as fact rather than hypothesis was checked this way. Anything still marked "to verify" was not, and must be before it is used on a page.

---

## The verification gate — read this before writing any section number

**Every BSA section number you write is a claim, and every claim must be verified against the bare Act text before it is committed.**

This is the hardest rule in the project and the reason for it is specific: the Indian Evidence Act was renumbered wholesale, the numbers are superficially plausible in either direction, and a practitioner will copy a number from this site into a written submission or an objection memo. A wrong Evidence Act section number is embarrassing. A wrong BSA section number relied on in a live matter is professional damage.

### Procedure

1. **The bare Act is already in the repo** — see Provenance above. Nothing gets written from memory; grep `reference/bare-act/bsa-2023-full-text.txt` or look the section up in `reference/bare-act/section-index.md` first.
2. **Verify by reading the section text, not by trusting a mapping table.** Confirm that the section number you are about to write actually carries the content you say it carries. This applies even to the "commonly cited mappings" table below — several of its rows were checked this session, but check the actual sub-section wording again before it goes on a live page, because the section-level match does not guarantee every sub-section lines up.
3. **If it is not verified, mark it.** Use the flagged form and never silently drop the flag:

   ```markdown
   > **Indian Evidence Act, 1872, s. 65B → BSA 2023, s. 63.** ⚠️ *Sub-section-level correspondence unverified — confirm against the bare Act before citing.*
   ```
4. **Never launder a mapping.** If chunk A says "verify" and chunk D quietly asserts the number as fact, the flag has done nothing. Grep for the flag before committing.

### Commonly cited mappings — seeded from this session's own verification, still requiring sub-section-level confirmation

These were checked against `reference/bare-act/bsa-2023-full-text.txt` at the **section level** during this project's setup. Treat the section-level correspondence as solid; treat every sub-section-level claim inside it as unverified until the provision is actually written.

| Topic | Indian Evidence Act, 1872 | BSA 2023 (section-level verified; sub-sections still to confirm) |
|---|---|---|
| Confessions to police / while in police custody | ss. 25–26 | ss. 22–23 |
| Dying declaration | s. 32(1) | s. 26 |
| Admissibility of electronic records / the certificate requirement | s. 65B | ss. 61–63 |
| Burden of proof | ss. 101, 103 | ss. 104, 107 |
| Court's power to presume | s. 114 | s. 119 |
| Accomplice evidence | s. 133 | s. 138 |
| Leading questions | s. 141 | s. 146 |

Note the trap that the electronic-evidence row illustrates generally: **the old Act's single s. 65B has become three sections (61, 62, 63) in BSA**, not a simple renumbering. Splits like this are exactly the case the concordance stage in `01-cognitive-schema.md` exists to handle — say so explicitly on the page rather than picking one number and calling it "the" successor.

---

## Structural difference: there are no Orders

The CPC site is built on a two-track sidebar — Sections in the body of the Code, Orders in the First Schedule. BNSS has no equivalent either. **Neither does BSA.** Its entire content is in the 170 sections themselves; there is no First Schedule of procedural detail.

Consequences:

- The content directory is **`docs/chapters/`**, not `docs/sections/` + `docs/orders/`.
- The sidebar is **chapter-based**, grouped into functional parts.
- Do not reproduce the CPC's `sec-*` / `order-*` filename convention. Use `chapter-<n>.md` or `chapter-<n>-<m>.md` for clustered chapters — and see the file-splitting note below for the one chapter that will not fit in a single file.

### The 12 chapters, 3 Parts, verified against the bare Act

Extracted directly from `reference/bare-act/bsa-2023-full-text.txt` (source: MHA Gazette PDF, Act No. 47 of 2023). Section ranges are derived from the confirmed 1–170 section index; each range runs up to (but not including) the first section of the next chapter.

| Part | # | Chapter | Title | Sections |
|---|---|---|---|---|
| I | 1 | I | Preliminary | ss. 1–2 |
| II | 2 | II | Relevancy of Facts | ss. 3–50 |
| III | 3 | III | Facts Which Need Not Be Proved | ss. 51–53 |
| III | 4 | IV | Of Oral Evidence | ss. 54–55 |
| III | 5 | V | Of Documentary Evidence | ss. 56–93 |
| III | 6 | VI | Of the Exclusion of Oral Evidence by Documentary Evidence | ss. 94–103 |
| III | 7 | VII | Of the Burden of Proof | ss. 104–120 |
| III | 8 | VIII | Estoppel | ss. 121–123 |
| III | 9 | IX | Of Witnesses | ss. 124–139 |
| III | 10 | X | Of Examination of Witnesses | ss. 140–168 |
| III | 11 | XI | Of Improper Admission and Rejection of Evidence | s. 169 |
| III | 12 | XII | Repeal and Savings | s. 170 |

**Part III ("On Proof") is one Part covering ten of the twelve chapters.** This is not an artefact of extraction — it was confirmed by grepping for `PART` headings in the raw text and finding exactly three (`PART I` before Chapter I, `PART II` before Chapter II, `PART III` — labelled "ON PROOF" — before Chapter III, and no further Part heading before Chapter XII). Do not invent a Part IV; there isn't one.

**A filename-splitting note.** Chapter II alone runs 48 sections (ss. 3–50) and will not fit sensibly in one file at 400–600 lines per provision — even clustered, that is a multi-thousand-line file. Split it across `chapter-02a.md`, `chapter-02b.md`, etc. by natural sub-topic (relevancy of facts forming part of the same transaction, admissions, confessions, dying declarations, character evidence, and so on — read the chapter's own internal structure off the bare Act before deciding the split, rather than dividing by a fixed section count). Chapter V (ss. 56–93, documentary and electronic evidence) is the other chapter likely to need the same treatment.

### Sidebar architecture

Five functional groups, matching what is already sketched in `starter/config.mjs`'s `themeConfig.sidebar` — this table is the authority the config's comments refer back to:

1. **Preliminary and relevancy** — Ch. I (Preliminary), Ch. II (Relevancy of Facts)
2. **Proof: facts, oral and documentary evidence** — Ch. III (Facts Which Need Not Be Proved), Ch. IV (Of Oral Evidence), Ch. V (Of Documentary Evidence — including the electronic-records cluster, ss. 61–63), Ch. VI (Of the Exclusion of Oral Evidence by Documentary Evidence)
3. **Burden of proof and estoppel** — Ch. VII (Of the Burden of Proof), Ch. VIII (Estoppel)
4. **Witnesses and their examination** — Ch. IX (Of Witnesses), Ch. X (Of Examination of Witnesses)
5. **Improper admission, repeal and savings** — Ch. XI (Of Improper Admission and Rejection of Evidence), Ch. XII (Repeal and Savings)

Plus, outside the chapter sidebar: **Drafting toolkit** — model objections, certificates, and applications, no chapter of its own.

---

## What is genuinely new — the highest-value content on the site

A practitioner already knows the law of evidence. What he does not know is what changed. The following are known, verified-at-the-section-level candidates for priority treatment — each still needs its sub-section text read before any specific claim is written, per the verification gate above.

**The electronic-records certificate regime (ss. 61–63) is the headline item.** This is the BSA provision with the deepest, most actively contested case-law history of any provision on the site, because it inherits the entire *Navjot Sandhu* → *Anvar P.V.* → *Arjun Panditrao* line decided under the old Act's s. 65B, and because the old Act's single section has become three BSA sections rather than one. Treat this as the natural pilot provision — see "Order of work" below — even though it does not sit in Chapter I.

**The express inclusion of electronic and digital records in the core definitions.** BSA's definitions section (s. 2) and its evidence and document provisions were widely reported, at the time of enactment, to have folded "electronic or digital record" explicitly into the definitions of "document" and "evidence" rather than leaving it to rest on s. 65B-style special provisions alone. **This is a hypothesis pending verification against s. 2 and the opening sections of Chapters IV–V — confirm the actual text before asserting it as a change**, and if confirmed, it deserves its own prominent treatment in Chapter I or II's concordance stage as much as in Chapter V, since it is a structural change to how "evidence" is defined, not only a documentary-evidence-chapter change.

**Joint trials and the treatment of confessions by co-accused.** Reported at enactment to have been clarified or altered around s. 23 (successor to old s. 30, confession by co-accused affecting others jointly tried). Verify against the actual text before writing.

**Presumptions relating to electronic records.** BSA is reported to have added or expanded presumption provisions specific to electronic records (paralleling the old Act's ss. 85A–90A cluster). Locate the actual successor sections in Chapter VII/VIII's presumption material before treating this as confirmed.

**Witness protection and deposition by electronic means.** Given the BNSS's own parallel expansion of video-conferencing and electronic modes of appearance, check Chapter IX and X for a BSA-side counterpart provision — this is exactly the kind of cross-statute consistency point the Interlocking Matrix stage exists to catch.

For every one of these: **verify the section number and read the text before writing.** New or reportedly-new material is exactly where confident-sounding error is most likely, because the temptation is to write from what "everyone knows" the Act changed rather than from the text in `reference/bare-act/`.

---

## Order of work

Evidence law's natural teaching order is closer to the statute's own chapter sequence than BNSS's case-lifecycle order was — relevancy has to be understood before proof, and proof before witnesses, in a way that arrest does not have to precede bail in the reader's head. Build chapter-sequentially, with one deliberate exception for the pilot.

### Phase 1 — Pilot (one provision, end to end)

Pick the **electronic-records cluster, BSA ss. 61–63**, even though it sits in Chapter V rather than Chapter I. It is the right pilot for the same reason the BNSS project picked the FIR provision out of chapter order: it is the provision with the richest, most immediately relevant case law (*Navjot Sandhu*, *Anvar P.V.*, *Arjun Panditrao*), so building it first proves the concordance format, the delta-bucket discipline, and the container/badge pipeline on the hardest and highest-value case before applying the same template thirty more times. `starter/example-provision.md` already contains a worked sketch of s. 63 for exactly this reason — use it as a starting point, not as the finished page.

Build it through all six stages, build the site, run the verification block, deploy. Do not start Phase 2 until the pilot renders clean.

### Phase 2 — Chapter I, Preliminary
Short title, extent and commencement; applicability to judicial proceedings and the express carve-outs (affidavits, arbitration). Two sections; the natural warm-up after the pilot proves the toolchain.

### Phase 3 — Chapter II, Relevancy of Facts
The largest chapter (ss. 3–50). Split across multiple files by internal sub-topic — see the file-splitting note above. Work sub-topic by sub-topic: facts forming part of the same transaction; motive, preparation and conduct; admissions; confessions (cross-referencing the pilot's electronic-evidence material where a confession is recorded electronically); statements by persons who cannot be called as witnesses, including dying declarations; opinions of experts; character evidence.

### Phase 4 — Chapter III, Facts which need not be proved
Judicial notice — short, but high-value for the drafting toolkit (what an advocate can simply assert rather than prove).

### Phase 5 — Chapters IV–VI, Oral evidence, documentary evidence, and their interaction
Oral evidence's "must be direct" rule; primary and secondary evidence; the remainder of the documentary-evidence chapter not already covered by the electronic-records pilot; the exclusion of oral evidence by documentary evidence — the parol evidence rule and its exceptions.

### Phase 6 — Chapter VII, Burden of proof
General burden; burden as to particular facts; presumptions (including the electronic-records presumption cluster flagged above); the “may presume” / “shall presume” / “conclusive proof” taxonomy, which is one of the most consistently confused distinctions in the whole subject and deserves an especially careful Stage 3b.

### Phase 7 — Chapter VIII, Estoppel
Short chapter, self-contained, low cross-reference load.

### Phase 8 — Chapters IX–X, Witnesses and their examination
Competency and compellability; privileged communications; examination-in-chief, cross-examination and re-examination; leading questions; hostile witnesses; corroboration and accomplice evidence.

### Phase 9 — Chapters XI–XII, Improper admission and rejection, repeal and savings
Short chapters. The repeal-and-savings chapter (s. 170) is where the transitional position for pending matters lives — treat it as practically important despite its brevity, since it is the provision a practitioner checks first when a matter straddles 1 July 2024.

### Phase 10 — Drafting toolkit
Model objection to admissibility (mode of proof vs. relevance, argued separately); model s. 63-equivalent certificate; model application to summon a document; model cross-examination checklist for challenging authenticity. Each cross-linked to its provision page.

### Continuous
An **Indian Evidence Act → BSA concordance page**, built up as provisions are written, never written speculatively ahead of them. Only verified rows go on it. It will become one of the most-visited pages on the site, which is exactly why it must contain nothing unverified.

---

## Cross-reference discipline

The CPC and BNSS projects' recurring maintenance cost was two blocks in different files describing the same rule and drifting apart. BSA is if anything more exposed to this than BNSS was, because relevancy (Chapter II) and proof (Chapters III–VI) constantly refer back to each other, and the electronic-records material touches almost every later chapter.

Prevent it:

- When provision X is discussed inside provision Y's block, **link to X and keep the treatment in Y short**. One canonical treatment per rule. The electronic-records cluster (ss. 61–63) in particular should be treated *once*, in Chapter V, and linked from everywhere else it is relevant (confessions recorded on video in Chapter II, presumptions in Chapter VII, examination of a digitally-deposed witness in Chapter X) rather than re-explained.
- Keep a running list of cross-references in `TASKS.md` as you create them, so the later provision knows it has an existing commitment to honour.
- The concordance page links to provisions; provisions do not restate the concordance page.

---

## Connection to bareact.ai

This site is built to be linked as a third tile from the **bareact.ai** landing page (a separate, sibling static-HTML project at `../bareact-ai/`, not a VitePress site), alongside the already-live BNSS and CPC guides. The landing page's tile grid is CSS Grid `auto-fit, minmax(280px, 1fr)`, so adding this tile is a content change to `bareact-ai/index.html` only — no CSS changes required. When this site is live at its own GitHub Pages URL, add a `data-brand="bsa"` tile there using accent colour `#3b2f6b` (already reserved for BSA and distinct from BNSS's `#1d4e5f` and CPC's `#8b1a1a` — see `02-component-system.md`). That is a change to the `bareact-ai` repo, not to this one; nothing in this kit needs to change to support it.
