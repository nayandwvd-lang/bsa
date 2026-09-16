# Tasks

Copy this to `TASKS.md` at the repo root. It is gitignored — it is a working scratchpad, not a deliverable.

Keep three things in it religiously, because they are what a future session cannot reconstruct:

1. **Which provision is next**, so a resumed session does not re-derive the roadmap.
2. **Cross-references already made**, so a later provision honours a commitment an earlier one created. This was the single biggest maintenance cost on both the CPC and the BNSS projects, and BSA's chapters lean on each other more than either of those did.
3. **Unverified section numbers still carrying a `⚠️` flag**, so none of them reaches a reader unresolved.

---

## Active

- [ ] **Scaffold the project** — VitePress, `starter/` files copied in, test page builds and renders all five containers
- [ ] **Re-verify the bare Act ingestion** — `reference/bare-act/` already has the gazette PDF, full-text extraction and section index (1–170, no gaps); re-derive the chapter/Part boundaries once and confirm against `reference/05-bsa-roadmap.md`
- [ ] **Pilot provision: BSA ss. 61–63, electronic records** — all six stages, verification block clean, deployed. Starting sketch already at `starter/example-provision.md`.
- [ ] **Template review** — seven-question checklist answered honestly; format changes made before Phase 2

## Waiting On

- [ ] **GitHub Pages** — enable in repo settings with GitHub Actions as the source (cannot be done from the workflow)
- [ ] **Confirm `DOCS_BASE`** in `deploy.yml` matches the repository name (`starter/deploy.yml` ships with `/bsa/`)
- [ ] **bareact.ai third tile** — once this site is deployed and stable, add its tile to the sibling `bareact-ai` landing-page repo (`data-brand="bsa"`, accent `#3b2f6b`). That change happens in the `bareact-ai` repo, not here.

## Unverified section numbers

Every row here is a `⚠️` flag live on a page. Empty this list before it grows.

| Page | Line | Claim | Status |
|---|---|---|---|
| | | | |

## Cross-references made

When provision A points at provision B, log it here so B honours the commitment.

| From | To | What was promised |
|---|---|---|
| | | |

## Someday

- [ ] Prune the unused CPC/BNSS-era component styles from `custom.css` once the BSA component set has settled
- [ ] Build the Indian Evidence Act → BSA concordance page (verified rows only, as provisions land)
- [ ] Consider a build + markup-leak check hook to automate the `:::` / `[[` verification
- [ ] Layout-slot components — reading progress, floating glossary — once there is enough content to justify them
- [ ] Verify the "what is genuinely new" hypotheses in `reference/05-bsa-roadmap.md` (electronic/digital records folded into core definitions; joint-trial confession treatment; expanded electronic-record presumptions; deposition by electronic means) against the actual bare Act text, and promote each from hypothesis to confirmed fact or drop it

## Done

<!-- One line per provision. Record the promoted winning ratio and the delta
     bucket — those are the two facts most likely to be needed again and most
     likely to be misremembered. -->
