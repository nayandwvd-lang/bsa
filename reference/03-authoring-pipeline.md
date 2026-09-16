# 03 — The Authoring Pipeline

How to write a 400–600 line provision without hitting the output-token ceiling and without corrupting the file.

This file is almost entirely statute-agnostic tooling, carried over from the BNSS project's `reference/03-authoring-pipeline.md` with only the chunk-C heading name and the `DOCS_BASE` example updated for BSA.

---

## The problem

A full provision block at the required depth is 400–600 lines of markdown. That does not fit in one model output. If you try, the output truncates **mid-container** — an unclosed `:::`, a half-written MicroTree prop — and the file is left broken in a way that is tedious to diagnose.

Writing straight into the file with successive `Edit` calls fails differently: each edit must match unique surrounding context, and after five or six edits the surrounding context is text you wrote in the same session, so mismatches compound.

## The solution

**Write each provision as four temp-file chunks, then splice each chunk into place with a guarded script.**

The guard is the point. Every script asserts its anchors before mutating anything and exits non-zero on mismatch. A script that cannot find its anchor must never fall through to "insert at line 1".

---

## The four chunks

| Chunk | Covers | Splice type |
|---|---|---|
| **A** | Stage 1 (`The dispute this solves`) + Stage 2 (`The Act, decompiled`) | replace one heading line |
| **B** | Stage 3 (`How this actually runs`) + Stage 3b (`In plain English`) | replace one heading line |
| **C** | Stage 6 (`What changed from the Indian Evidence Act`) + Stage 4 (`Test your instinct`) | replace a range |
| **D** | Stage 5 (the full HUD) | replace a range, plus heading renames |

Each chunk is written to `.tmp-<id><letter>.md`, spliced by `.tmp-splice-<id><letter>.cjs`, and both are deleted once the build verifies.

If a single chunk is still too large — the HUD for a heavily-litigated provision often is — split it further into D1/D2. There is no virtue in four; the virtue is in each piece fitting comfortably in one output with room to spare.

---

## TRAP — the `.cjs` extension

`package.json` has `"type": "module"`. A helper script named `.js` that uses `require()` throws:

```
ReferenceError: require is not defined in ES module scope
```

**Always name the splice scripts `.cjs`.** This will bite once per project if forgotten.

---

## Script templates

Set `F` to the chapter file. All scripts run from the repo root.

### Chunk A — replace a single heading, with an offset assertion

```js
const fs = require('fs');
const F = 'docs/chapters/chapter-02.md';
const l = fs.readFileSync(F, 'utf8').split('\n');
const chunk = fs.readFileSync('.tmp-s63a.md', 'utf8').replace(/\n$/, '').split('\n');

// Bound the search to this provision only.
const a = l.indexOf('## Section 63 — Admissibility of electronic records');
const end = l.indexOf('## Chapter consolidation — when does a screenshot actually prove anything?');
if (a === -1 || end === -1 || end <= a) { console.error(`anchors wrong: a=${a} end=${end}`); process.exit(1); }

const i = l.findIndex((x, k) => k > a && k < end && x === '### The dispute this solves');
if (i === -1) { console.error('stage-1 heading not found in range'); process.exit(1); }
if (i !== a + 2) { console.error(`heading at unexpected offset: ${i} vs ${a + 2}`); process.exit(1); }

l.splice(i, 1, ...chunk);
fs.writeFileSync(F, l.join('\n'));
console.log(`spliced chunk A: ${chunk.length} lines at ${i}`);
```

**Why the range bound matters.** `### The dispute this solves` appears once per provision. A bare `indexOf` finds the *first* one in the file and will happily splice chunk A for section 63 into section 56's block. The `a`/`end` bounds make that impossible.

**Why the offset assertion matters.** `i !== a + 2` catches the case where the heading exists but something has already been written under it — i.e. you are re-running a script that already ran.

### Chunk B — same shape, no offset assertion

```js
const i = l.findIndex((x, k) => k > a && k < end && x === '### How this actually runs');
if (i === -1) { console.error('stage-3 heading not found in range'); process.exit(1); }
l.splice(i, 1, ...chunk);
```

### Chunk C — range replacement, with a span guard

```js
const i = l.findIndex((x, k) => k > a && k < end && x === '### What changed from the Indian Evidence Act');
const j = l.findIndex((x, k) => k > a && k < end && x === '### Practitioner HUD — operational realities');
if (i === -1 || j === -1 || j <= i) { console.error(`range wrong: i=${i} j=${j}`); process.exit(1); }
if (j - i < 20 || j - i > 45) { console.error(`range span implausible: ${j - i}`); process.exit(1); }
l.splice(i, j - i, ...chunk);
```

**The span guard is not decoration.** A range splice deletes everything between two anchors. If the second anchor is wrong, you silently delete hundreds of lines. Bound the expected span, and read the actual span off the file first so the bound is real rather than guessed.

### Chunk D — HUD splice with case promotion and heading renames

Order-critical. **Mutate the highest index first**, so earlier indices stay valid.

```js
const inRange = (needle) => l.findIndex((x, k) => k > a && k < end && x === needle);
const h4 = inRange('### Practitioner HUD — operational realities');
const h5 = inRange('#### The authorities');
if (h4 === -1 || h5 === -1 || h5 <= h4) { console.error(`headings missing: ${h4} ${h5}`); process.exit(1); }

// Promote one case out of the authorities block into the winning ratio.
const sa = l.findIndex((x, k) => k > h5 && k < end && x.startsWith('**Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal**'));
const sb = l.findIndex((x, k) => k > sa && k < end && x.startsWith('**Anvar P.V.'));
if (sa === -1 || sb === -1) { console.error(`promotion anchors wrong: sa=${sa} sb=${sb}`); process.exit(1); }
if (sb - sa < 5 || sb - sa > 20) { console.error(`promotion span implausible: ${sb - sa}`); process.exit(1); }

l.splice(sa, sb - sa);          // highest index first
l.splice(h4, 1, ...chunk);      // then the lower one
fs.writeFileSync(F, l.join('\n'));
```

Note the apostrophe rule for JS source: a needle containing an ASCII apostrophe (`### The Court's Own Record`) must sit in a **double-quoted** JS string.

---

## Badge application as a separate pass

Do not hand-write badges into the chunk. Write the statutory blockquote clean, then apply badges in a **counted find-and-replace pass** scoped to that blockquote. Counting is what makes it safe: if a phrase appears three times and you expected one, the script aborts rather than badging the wrong occurrence.

```js
const fs = require('fs');
const F = 'docs/chapters/chapter-02.md';
const src = fs.readFileSync(F, 'utf8');

const START = '> **63. Admissibility of electronic records.**';
const STOP  = '**Statutory mechanics.**';
const sa = src.indexOf(START); const sb = src.indexOf(STOP, sa);
if (sa === -1 || sb === -1 || sb <= sa) { console.error(`scope wrong: sa=${sa} sb=${sb}`); process.exit(1); }
if (sb - sa > 5200) { console.error(`scope too wide: ${sb - sa} chars`); process.exit(1); }

let seg = src.slice(sa, sb);
const pairs = [
  ['shall be deemed to be also a document', '[[!shall be deemed to be also a document]]', 1],
  ['may be proved',  '[[?may be proved]]', 1],
  ['electronic record', '[[=electronic record]]', 2]
];

let fail = false;
for (const [find, repl, n] of pairs) {
  const count = seg.split(find).length - 1;
  if (count !== n) { console.error(`MISMATCH (${count} vs ${n}): ${find.slice(0, 70)}`); fail = true; continue; }
  seg = seg.split(find).join(repl);
}
if (fail) process.exit(1);

fs.writeFileSync(F, src.slice(0, sa) + seg + src.slice(sb));
console.log(`badged ${pairs.length} patterns`);
```

The `sb - sa` character bound is a second safety net: it catches the case where `STOP` was not found where you thought and the scope ran to the end of the file.

---

## The per-provision loop

1. Read the surrounding lines of the target file. Note the real anchors and the real spans — do not write guards from memory.
2. Write chunk A to `.tmp-<id>a.md`.
3. Write and run `.tmp-splice-<id>a.cjs`. Confirm the reported line count is plausible.
4. Repeat for B, C, D.
5. Run the badge pass.
6. Run `grep -n "[A-Za-z]'[A-Za-z]"` on the file to catch ASCII apostrophes inside MicroTree props.
7. Build.
8. Run the verification block from `02-component-system.md`. Both leak counts `0`; the container ratios 4× / 2×.
9. Delete every `.tmp-*` file.
10. Commit, naming the provision in the message.

Do not batch two provisions before building. A build failure that spans two provisions costs more to bisect than it saves.

---

## Build and serve

**Normal environment:**

```sh
npm install
npm run build      # vitepress build docs
npm run dev        # vitepress dev docs
npm run preview
```

**Constrained environment (no `npm`/`node` on PATH).** The CPC project ran with an ad-hoc codesigned Node binary at `.tooling/node`, and the BNSS project reused the pattern:

```sh
./.tooling/node ./node_modules/vitepress/bin/vitepress.js build docs
./.tooling/node ./node_modules/vitepress/bin/vitepress.js dev docs
```

with matching `package.json` scripts:

```json
"local:build": "./.tooling/node node_modules/vitepress/bin/vitepress.js build docs",
"local:dev":   "./.tooling/node node_modules/vitepress/bin/vitepress.js dev docs"
```

If `npm` is unavailable in the new environment, do not stop and ask. Diagnose it, find or vendor a Node binary, and record what you did in the project's memory notes so the next session does not rediscover it.

---

## Deployment

`.github/workflows/deploy.yml`, copied from `starter/`. Push to `main` → GitHub Pages.

Shape: `on: push [main]` + `workflow_dispatch`; permissions `contents: read`, `pages: write`, `id-token: write`; `concurrency: { group: pages, cancel-in-progress: false }`. Build job: `checkout@v4` (fetch-depth 0) → `setup-node@v4` node 20 → `npm install` → build with `DOCS_BASE: /bsa/` → `configure-pages@v5` → `upload-pages-artifact@v3` with path `docs/.vitepress/dist`. Deploy job: `deploy-pages@v4`.

`config.mjs` must read the base from the environment so local builds are not broken by the Pages path:

```js
base: process.env.DOCS_BASE ?? '/'
```

Set `DOCS_BASE` in the workflow to match the repository name. It is already set to `/bsa/` in `starter/deploy.yml` — change it only if the actual GitHub repo ends up with a different name.

---

## Git hygiene

- Stage named files, not `git add -A`. An `-A` sweeps in `.tmp-*` scripts, `node_modules` accidents and stray tool directories.
- One commit per provision, with the provision named: `Migrate Sections 62 and 63 to the six-stage cognitive schema`.
- Match the existing message style — check `git log -1 --format='%B'` before writing a new one.
- Add to `.gitignore` early: `node_modules/`, `docs/.vitepress/dist/`, `docs/.vitepress/cache/`, `.tmp-*`, `TASKS.md`, `dashboard.html`.
