# starter/ — working files, not descriptions of them

Everything here is live code lifted from the BNSS project (which itself lifted it from the CPC project, with `cpc-` renamed to `bnss-`), with `bnss-` renamed to `bsa-` throughout. Copy it in and use it. Do not reimplement it — every one of these files encodes a decision that was made after something went wrong, twice over now.

## Where each file goes

| File here | Destination in the new repo |
|---|---|
| `markdown/containers.mjs` | `docs/.vitepress/markdown/containers.mjs` |
| `components/MicroTree.vue` | `docs/.vitepress/theme/components/MicroTree.vue` |
| `theme-index.js` | `docs/.vitepress/theme/index.js` |
| `custom.css` | `docs/.vitepress/theme/custom.css` |
| `config.mjs` | `docs/.vitepress/config.mjs` |
| `deploy.yml` | `.github/workflows/deploy.yml` |
| `package.json.sample` | `package.json` (rename) |
| `example-provision.md` | nowhere — reference only |

## After copying, check these three things

1. **`config.mjs` imports and calls `bsaContainers`.** Without the `markdown.config` hook, every `:::` block leaks into the page as literal text. This is the single most common setup failure.
2. **Class names agree.** `containers.mjs` emits `bsa-*`; `custom.css` styles `.vp-doc .bsa-*`; `MicroTree.vue` uses `bsa-tree*`. A stray `cpc-` anywhere means unstyled output that still builds cleanly — so it will not be caught by the build, only by looking at the page.
3. **`DOCS_BASE` in `deploy.yml` matches the repository name.** It is set to `/bsa/`. If the repo is called something else, change it, or every asset URL on the deployed site is wrong.

## Notes on individual files

**`containers.mjs`** — hand-written markdown-it block rules plus one inline rule. `MIN_MARKERS = 3`. The `ruling` container renders a native `<details>`, deliberately: keyboard accessible, works before hydration and with JavaScript off, prints open, and the hidden text stays in the markdown stream where local search can reach it.

**`custom.css`** — carried over whole, so it still contains styles for CPC-era components that are not shipped in this kit (`ReadingProgress`, `LegalGlossary`, `SelfTest`, `KeyTerms`, `Flow`, `ViewMode`, `CivilSuitNavigator`). Those rules are inert. Prune them once the BSA component set has settled; do not prune them on day one, because you may well want the same components.

The blocks that matter are the container styles, the three badge styles, the MicroTree styles and the `@media print` overrides near the end. **Do not delete the print block.** Practitioners print these pages and take them to court: the accordions must open in print, the tree must not fragment across a page break, and the badges must stay distinguishable in greyscale — which is why the "term of art" badge is a dotted underline rather than a third colour.

**`theme-index.js`** — deliberately minimal. Registers `MicroTree` and nothing else. The commented block at the bottom shows how the CPC project mounted layout-slot components, for when you want them.

**`deploy.yml`** — push to `main` builds and publishes to GitHub Pages. Requires Pages to be enabled in the repository settings with **GitHub Actions** as the source. Nothing in the workflow can do that for you.

**`example-provision.md`** — a skeleton of one provision with every container, badge and MicroTree in its correct place, and the traps annotated inline. Read it once before writing your first block, then work from `reference/01` rather than from it.
