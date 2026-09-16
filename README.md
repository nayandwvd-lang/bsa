# BSA Guide — Project Handoff Kit

A portable, self-contained kit for building a **Bharatiya Sakshya Adhiniyam, 2023** website on the same architecture as the CPC Master Practitioner & Academic Guide and the BNSS Cognitive & Living Bare Act Guide.

Move this whole folder wherever you want the BSA project to live. Nothing in here depends on the CPC or BNSS repos being nearby — though the sibling `bareact-ai` landing page (see the last section below) does eventually need this site's live URL.

---

## What is in this kit

| File | What it is |
|---|---|
| `README.md` | This file. Start here. |
| `CLAUDE.md` | Drop this at the root of the new repo. It is the standing project directive Claude reads automatically every session. |
| `PROMPTS.md` | The prompt library. Copy-paste prompts, phase by phase, from scaffolding to the hundredth provision. |
| `reference/01-cognitive-schema.md` | The five-stage schema, plus the BSA-only sixth stage (Indian Evidence Act concordance). The single most important file. |
| `reference/02-component-system.md` | Containers, badges, MicroTree. Exact syntax, and every trap that has actually bitten. |
| `reference/03-authoring-pipeline.md` | How to write a 500-line provision without hitting the output-token ceiling. Guarded splice scripts. |
| `reference/04-content-standards.md` | Voice, intellectual-honesty rules, case-law discipline, the invented cast. |
| `reference/05-bsa-roadmap.md` | The verified 12-chapter / 3-Part structure, the concordance seed table, sidebar architecture, and the order of work. |
| `reference/bare-act/` | The actual source: the MHA gazette PDF, a full plain-text extraction, and a section index (1–170, zero gaps) built and verified during this kit's own setup. |
| `starter/` | Real working files, not descriptions of them. Copy them in verbatim. Includes `example-provision.md`, a worked sketch of BSA s. 63 (electronic records) to use as the starting point for the pilot. |

---

## The five-minute setup

1. Move this folder to wherever the project should live, and rename it if you like.
2. Copy `CLAUDE.md` to the repo root (it is already at the right level if you work inside this folder).
3. Open Claude Code in that folder.
4. Paste the **Phase 0 kickoff prompt** from `PROMPTS.md`.

That prompt tells Claude to read the `reference/` files first, scaffold VitePress, install the component system from `starter/`, and build one pilot provision end-to-end before touching anything else.

---

## What this kit is actually for

This is not a reference manual with nice styling. It is a **teaching machine** with a specific claim: a reader who has never opened a bare Act should be able to arrive cold at any provision and leave able to argue it.

That claim is enforced by an architecture, not by good intentions:

- **Stage 1 puts a human dispute before the section number.** The reader knows what is at stake before they meet any legal language.
- **Stage 2 decompiles the bare Act inline** — mandatory words, discretionary words and gating provisos are visually distinguished as you read, not summarised afterwards.
- **Stage 3 reduces the provision to a mechanical decision tree** so the reader can see exactly where a piece of evidence gets admitted, excluded, or comes in only conditionally.
- **Stage 4 makes the reader commit to an answer before revealing the ruling.** Recall beats re-reading.
- **Stage 5 is the operational layer** — sword/shield, admissibility timing, drafting pitfalls, and one promoted winning ratio.
- **Stage 6 tells an Indian Evidence Act practitioner exactly what changed**, so thirty years of case law does not get applied blind to a renumbered, and in places substantively altered, text.

Everything in `reference/` exists to keep those six stages honest across hundreds of provisions written in different sessions.

---

## Why BSA is not just "the Evidence Act with different numbers"

Read `reference/05-bsa-roadmap.md` before writing any content. The things that genuinely differ:

1. **BSA has no Orders**, same as BNSS. It is 170 sections across 12 chapters in 3 Parts, verified directly against the bare Act text. The sidebar must be **chapter-based**, and two chapters (II and V) are long enough to need splitting across multiple files.
2. **Almost all authority is Indian Evidence Act-era**, and in the electronic-evidence area it is a single, live, still-evolving line of Supreme Court authority (*Navjot Sandhu → Anvar P.V. → Arjun Panditrao*) that every BSA site absolutely must get right. A site that cites *Anvar P.V.* without saying what happened to s. 65B is worse than useless. Hence the **sixth stage**.
3. **The interlocks are different statutes.** BSA interlocks with the **BNS 2023** and the **BNSS 2023** — not the IPC and the CrPC. Every Interlocking Matrix must point outward at those two, the mirror image of the BNSS kit's own matrix (which points at BNS and BSA).
4. **Sections split, not just renumber.** The old Act's s. 65B alone becomes BSA ss. 61–63. This is the most dangerous single fact for a mapping table to get wrong — see `reference/05`.
5. **The limitation-clock stage is genuinely thinner here than in BNSS.** Evidence law is mostly not a law of deadlines. Do not manufacture a timeline where the honest entry is "none" — see the hard rule in `CLAUDE.md`.

---

## Non-negotiables

These are the rules that, when broken in the CPC and BNSS projects, cost real time to undo.

- **Content lives in markdown, never inside a Vue component.** VitePress local search indexes rendered markdown. Anything you hide in a component's internals silently disappears from search. This is why the containers are hand-written markdown-it rules and why the accordion is a native `<details>`.
- **Never invent a citation.** Cite only judgments you are certain exist. If unsure, describe the proposition and mark it for verification. See `reference/04`.
- **Verify the rendered output, not the source.** Run the build and count the rendered classes. The check block is in `reference/02`.
- **One promoted winning ratio per provision.** Not three. The discipline of choosing is the value.
- **Every section number is a claim.** The bare Act is already in `reference/bare-act/` with a verified index — there is no excuse for writing a BSA number from memory. See `reference/05`.

---

## A note on tooling

The CPC project ran on a machine with no `npm`, `npx`, `node` or `gh` on the PATH, using an ad-hoc Node binary at `.tooling/node`. The BNSS project reused the same fallback. If your new environment has a normal Node install, ignore all of that and use plain `npm`. `reference/03` covers both paths.

---

## The bareact.ai connection

**bareact.ai** is the master landing page tying together this whole family of sites. It already lives, live and deployed, as a separate sibling project (`../bareact-ai/`, a plain static HTML/CSS/JS site with no build step, no framework, and no dependency on this repo). It currently links out to two live tiles — the BNSS guide and the CPC guide — and was deliberately built with a CSS Grid `auto-fit, minmax(280px, 1fr)` tile layout specifically so that a third, fourth, and fifth tile can be added later with a content-only change and zero CSS changes.

**This BSA site is meant to become that third tile.** Concretely, once this site is built and deployed to its own GitHub Pages URL (most likely `https://nayandwvd-lang.github.io/bsa/` or similar, matching whatever `DOCS_BASE` ends up set to in `deploy.yml`):

1. A new tile is added to `bareact-ai/index.html`, following the exact markup pattern already used for the BNSS and CPC tiles — label (`BSA, 2023`), one-line description, and a link to this site's live URL.
2. The tile carries `data-brand="bsa"`, and `bareact-ai/css/style.css` gets one new CSS custom-property rule, `--bsa-accent: #3b2f6b`, matching the colour already reserved for this project (see `reference/02-component-system.md`) so the sub-brand hover/focus accent is consistent with what a visitor sees once they click through.
3. No other change is required. The grid reflows automatically.

**This is a change to the `bareact-ai` repo, not to this one.** Nothing in this kit needs to be built with that connection in mind beyond two things: keep the theme colour `#3b2f6b` (already set in `starter/config.mjs`), and keep the deployed URL stable once it exists, since the landing page will link to it directly rather than through any kind of registry or redirect.
