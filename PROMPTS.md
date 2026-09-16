# Prompt Library

Copy-paste prompts, in order. Each is self-contained — Claude does not need to have seen the previous one, because the standing directives live in `CLAUDE.md` and the detail lives in `reference/`.

Adapted from the BNSS project's `PROMPTS.md`. The phase structure is unchanged; the pilot provision, the concordance case, and the diagnostic wording are rewritten for BSA.

---

## Phase 0 — Kickoff

Paste this first, in a fresh Claude Code session opened in the project folder.

> Read `CLAUDE.md` and every file in `reference/` before doing anything else. They define the architecture, the schema and the traps for this project — treat them as binding, not advisory.
>
> Then scaffold the project:
>
> 1. Initialise a VitePress project. `package.json` with `"type": "module"`, VitePress 1.6.3 or later as the only dependency, and scripts for `dev`, `build` and `preview`.
> 2. Create `docs/`, `docs/chapters/`, `docs/drafts/`, `docs/.vitepress/`, `docs/.vitepress/markdown/`, `docs/.vitepress/theme/`, `docs/.vitepress/theme/components/`.
> 3. Copy the working files from `starter/` into place — `containers.mjs`, `MicroTree.vue`, `theme/index.js`, `custom.css`, `config.mjs`, `deploy.yml`. They are working code from live sibling projects (BNSS, CPC), already token-renamed to `bsa-`; use them as they are rather than rewriting them. Confirm every `bsa-` class name is consistent between the CSS and the container renderers.
> 4. Write `.gitignore`: `node_modules/`, `docs/.vitepress/dist/`, `docs/.vitepress/cache/`, `.tmp-*`, `TASKS.md`, `dashboard.html`.
> 5. Confirm the site title is "BSA Practitioner & Academic Guide", local search on, `cleanUrls: true`, `base: process.env.DOCS_BASE ?? '/'`, and the theme colour `#3b2f6b` — distinct from the BNSS site's `#1d4e5f` and the CPC site's `#8b1a1a`.
> 6. Build. Confirm it succeeds and that `MicroTree` and all five containers render on a throwaway test page. Then delete the test page.
>
> Report the sidebar structure you propose before writing any content — compare it against `reference/05-bsa-roadmap.md`'s sidebar architecture and flag any disagreement rather than silently picking one. Do not start on a provision yet.

---

## Phase 0b — Bare Act verification

> The BSA 2023 bare Act text is already in the repo at `reference/bare-act/` — the gazette PDF, a full plain-text extraction, and a section index confirming sections 1–170 with no gaps. Before any content is written:
>
> 1. Confirm the text is complete and machine-searchable, and tell me if it is not.
> 2. Re-derive the chapter and Part boundaries from the text yourself (`grep -n -i "^CHAPTER"` and `grep -n "^PART"`) and check them against the table in `reference/05-bsa-roadmap.md`. Tell me if you find a discrepancy — that table was built the same way, but a second check costs little and catches transcription slips.
> 3. Confirm the "commonly cited mappings" table in `reference/05` is still accurate at the section level, and flag which of its sub-section-level claims you have not yet personally verified.
>
> From this point on, no BSA section number goes into any page unless you have read the section text and confirmed it says what the page claims. If you cannot verify one, use the flagged form. Do not assert from memory, including for the mappings table — that table is a place to look, not a source.

---

## Phase 1 — The pilot provision

> Build the pilot provision, end to end, following the six-stage schema in `reference/01-cognitive-schema.md` exactly.
>
> Provision: **BSA ss. 61–63, the electronic-records cluster**, culminating in the s. 63 certificate requirement. Verify the section numbers and sub-section text from the bare Act first and tell me what you found — in particular, confirm exactly how the old Evidence Act s. 65B maps onto these three sections.
>
> A worked sketch already exists at `starter/example-provision.md` — read it, use it as a starting point, and improve on it rather than starting from nothing. It is explicitly a sketch, not a finished page.
>
> Use the chunked guarded-splice pipeline in `reference/03-authoring-pipeline.md`. Four chunks, `.cjs` scripts with anchor assertions, badges as a separate counted pass.
>
> Requirements specific to the pilot:
> - Stage 1 opens on a piece of digital evidence — a WhatsApp chat, a CCTV clip, a call-detail printout — that everyone in the room believes is genuine, not on a section number.
> - The `### What changed from the Indian Evidence Act` stage must state the delta bucket by name, note explicitly that one old section (s. 65B) has become three new ones, show the relevant IEA and BSA text side by side with the changed words bolded, and say in one paragraph what a practitioner must now do differently.
> - The concordance must deal squarely with the *Navjot Sandhu → Anvar P.V. → Arjun Panditrao* line — what each decided, under which Evidence Act provision, and precisely how much of it survives on the new text. Do not assert that any of it has been displaced unless the text supports it.
> - Five instinct scenarios. At least one where the underlying fact is plainly true and the party still loses because the certificate was missing, with an honest explanation of why that is not a technicality but the whole point of the rule.
>
> Then build, run the verification block from `reference/02`, and show me the class counts. Do not commit until both leak counts are zero and the 4× / 2× ratios hold.
>
> This provision sets the template for the whole site. Take the time.

---

## Phase 1b — Template review

> Show me the rendered pilot page, then answer the seven-question checklist at the end of `reference/01-cognitive-schema.md` honestly for it — including any question where the answer is no.
>
> Then tell me the three things about the format you would change now that you have written one for real, and why. I would rather fix the template on one provision than on thirty.

---

## Phase 2+ — Standard provision prompt

The workhorse. Use it for every provision after the pilot.

> Next provision: **<name / topic>**.
>
> Verify the BSA section number(s) against the bare Act and tell me what you found before writing.
>
> Then build the full six-stage block, following `reference/01-cognitive-schema.md` and using the chunked splice pipeline in `reference/03`. Standards in `reference/04` apply — in particular: no invented citations, at least one scenario where the sympathetic party loses, exactly one promoted winning ratio, and the winning ratio's own limits written into the block.
>
> Before you start, tell me:
> 1. the delta bucket (renumbered only / drafting changes / substantively amended / new),
> 2. the case you intend to promote as the winning ratio and why, and
> 3. any cross-reference this provision has to material already written, so the two stay consistent — this matters more than usual for BSA, since relevancy (Chapter II) and proof (Chapters III–VI) constantly lean on each other.
>
> Then write it, build it, run the verification block, and commit naming the provision.

---

## Phase 2+ — Clustered provisions

> Next: the **<topic>** cluster — <sections>.
>
> These read together, so treat them as one block with a combined heading, the way the electronic-records pilot handled ss. 61–63. One set of six stages covering all of them, not one set per section.
>
> Before writing, tell me how you propose to divide the cluster across the four splice chunks, and where the natural fault lines are. If a single chunk would be too large, say so and split it into D1/D2 rather than compressing the HUD.

---

## Phase 2+ — Splitting a long chapter

Use this for Chapter II (ss. 3–50) and Chapter V (ss. 56–93), which are too long for one file.

> Chapter <II / V> is too long for a single file. Propose a split into `chapter-<n>a.md`, `chapter-<n>b.md`, etc. by internal sub-topic, not by a fixed section count — read the chapter's own structure in the bare Act first (for Chapter II: same-transaction facts, admissions, confessions, statements by unavailable persons including dying declarations, expert opinion, character evidence; for Chapter V: primary/secondary evidence generally, then the electronic-records cluster if not already covered by the pilot, then the remaining documentary-evidence provisions).
>
> Tell me the proposed split and the section ranges in each file before writing any content, so the sidebar in `config.mjs` can be updated once rather than repeatedly.

---

## Chapter consolidation

> The chapter file is now complete. Add the `## Chapter consolidation — <a question a reader actually arrives with>` section at the end.
>
> It is a decision aid, not a summary. It must answer the practical question directly and route the reader to the right provision for each branch. Do not restate what the provisions already say.
>
> Then run the verification block across the whole file and report the totals per container against the number authored.

---

## Concordance page

> Update the Indian Evidence Act → BSA concordance page with the provisions completed since it was last touched.
>
> Only verified rows go on it. Each row: Evidence Act section, BSA section(s) — noting explicitly where one old section has split into several, as s. 65B did into ss. 61–63 — delta bucket, one line on the practical consequence, and a link to the provision page.
>
> If a row is on the page unverified from an earlier session, either verify it now or remove it. Tell me which you did.
>
> Do not add rows for provisions that have not been written yet.

---

## Diagnostic prompts

**When the build fails after a splice:**

> The build failed. Before changing anything, work out whether this is (a) an unclosed container, (b) an ASCII apostrophe inside a MicroTree prop, (c) a badge inside a prop, or (d) a splice that landed in the wrong provision block. Run `grep -n "[A-Za-z]'[A-Za-z]"` on the file and check the container closers first — those are the top two causes. Tell me the cause before you tell me the fix.

**When the class ratios are wrong:**

> The verification block shows `<container>` at `<n>` where I expected `<4 × authored>`. That ratio is almost always a `::: oneminute` or `::: story` opened without an inline title. Find every container opener in the file, list the ones with no title on the opener line, and fix them.

**When an Edit is rejected as stale:**

> That is the expected consequence of the splice scripts rewriting the file. Re-read the narrow affected range and re-issue the identical edit. Do not investigate it further.

**When you are not sure a citation is real:**

> Do not write it. Use the fallback in `reference/04`: state the proposition, describe the case without a citation, and add the `::: info Verify before citing` note. Tell me which propositions you had to handle that way so I can check them.

**When you are not sure whether an Evidence Act section split into multiple BSA sections:**

> Do not assume a one-to-one mapping. Read the actual BSA sections in the neighbourhood of the number you expect, in `reference/bare-act/bsa-2023-full-text.txt`, and confirm which one (or several) actually carries the old section's content. The s. 65B → ss. 61–63 split is not a one-off; check for it every time you map an Evidence Act provision.

---

## Session-resume prompt

For picking up after a break or a context reset.

> Resume the BSA project. Read `CLAUDE.md` and `reference/01-cognitive-schema.md`, then `TASKS.md`, then check `git log --oneline -10` and `git status`.
>
> Tell me: what was last completed, what is next in the roadmap in `reference/05`, and whether the working tree is clean. Then continue with the next provision using the standard provision prompt. Do not re-verify work that is already committed and building clean.

---

## Quality-audit prompt

Run every ten provisions or so.

> Audit the last ten provisions against `reference/04-content-standards.md`. Specifically:
>
> 1. Any citation you are not certain of, and whether it carries a `Verify before citing` note.
> 2. Any provision where every instinct scenario ends with the sympathetic party winning.
> 3. Any provision with more than one promoted winning ratio, or with a winning ratio whose limits are not stated.
> 4. Any `### What changed from the Indian Evidence Act` that does not name its delta bucket, or that asserts a section number without having verified it.
> 5. Any concordance flag (`⚠️ Unverified`) that has been silently dropped in a later chunk of the same provision.
> 6. Any `#### The limitation clock` that invents a deadline where the honest answer is "none".
> 7. Any block that reads as a citation list rather than as reasoning supported by citations.
>
> Report findings as a list with file and line. Do not fix anything yet — I want to see the whole picture first.
