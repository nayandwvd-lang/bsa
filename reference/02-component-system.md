# 02 — The Component System

Containers, badges, and MicroTree. Exact syntax, and every trap that has actually cost time.

Working code for all of it is in `starter/`. Copy it in; do not reimplement it.

This file is a near-verbatim adaptation of the BNSS project's `reference/02-component-system.md` — the component system itself is statute-agnostic. Only the class-name prefix and the sibling-site colour note differ.

---

## Why these are hand-written

**VitePress local search indexes rendered markdown, not Vue component internals.** Any substantive text you move inside a `.vue` file silently vanishes from the search index. On a 170-section statute, search *is* the product.

So:

- The five containers are hand-written **markdown-it block rules**, not an npm container plugin and not Vue components. Their content stays markdown all the way through.
- The three badges are a hand-written **markdown-it inline rule**. The visible word is emitted as plain text inside a `<span>`, so search still matches it.
- The accordion is a native **`<details>`** element, not a Vue disclosure component. It is keyboard accessible, works with JavaScript disabled and before hydration, prints correctly, and — critically — the hidden answer stays in the markdown stream where search can reach it.
- `MicroTree` **is** a Vue component, because it is pure structure. Its content is short prop strings, and losing them from the index is an acceptable trade for the layout. Never put substantive prose in a MicroTree prop for this reason.

---

## The five containers

Defined in `docs/.vitepress/markdown/containers.mjs`, registered in `config.mjs` via:

```js
import { bsaContainers } from './markdown/containers.mjs'

export default defineConfig({
  markdown: { config: (md) => bsaContainers(md) }
})
```

| Container | Rendered class | Kicker / label | Used in |
|---|---|---|---|
| `oneminute` | `.bsa-oneminute` | "In one minute" | Stage 1 |
| `story` | `.bsa-story` | "Worked example · invented facts" | Stage 1 |
| `proviso` | `.bsa-proviso` | "Gating proviso" | Stage 2 |
| `instinct` | `.bsa-instinct` | "Test your instinct" | Stage 4 |
| `ruling` | `.bsa-ruling` | `<details>` / summary label | inside `instinct` |

Minimum marker count is **3** colons. More than three is allowed and is how nesting works.

### Basic form

```markdown
::: oneminute A title that is a complete sentence.

Body markdown. Tables, lists, blockquotes, badges all work here.
:::
```

### TRAP 1 — `oneminute` and `story` must carry an inline title

Without a title on the opener line they render at 3× instead of 4× in the class count and lose their header entirely. The build does not fail; the page is just wrong. This is the single easiest defect to ship unnoticed.

```markdown
::: oneminute            ← BROKEN, no title
::: oneminute Overview   ← technically valid, but a wasted title
::: oneminute A WhatsApp screenshot is worthless in court without a certificate.   ← right
```

### TRAP 2 — the nesting pattern for instinct + ruling

Exactly this, and nothing else:

```markdown
::::instinct The photocopy everyone trusted and no court could rely on

Anita produces a photocopy of a sale deed at trial. ... <facts> ...

Is it admissible as it stands?

:::ruling Reveal the ruling
No. <reasoning, with the authority.>
::::
```

- Outer opener uses **four** colons and no space: `::::instinct`.
- Inner opener uses **three**: `:::ruling Reveal the ruling`.
- **One closer, `::::`.** It closes the inner `ruling`, and the outer `instinct` auto-closes with it. Do not write a `:::` closer as well; you will get a stray literal `:::` in the output.

### TRAP 3 — never nest a third container inside `:::ruling`

`::: info`, `::: warning`, `::: danger` and `::: tip` inside a `ruling` will leak as literal text. Put them **after** the `::::` closer:

```markdown
:::ruling Reveal the ruling
...
::::

::: warning Drafting trap
...
:::
```

---

## The three badges

A markdown-it **inline** rule registered before `link`:

```js
md.inline.ruler.before('link', 'bsa_badge', fn)
```

| Syntax | Class | Tooltip title |
|---|---|---|
| `[[!shall be admissible]]` | `.bsa-mand` | Mandatory |
| `[[?may presume]]` | `.bsa-disc` | Discretionary |
| `[[=secondary evidence]]` | `.bsa-art` | Term of art |

### Rules the parser enforces

- A badge **never spans a newline**. If your statutory quote wraps, the badge must sit entirely on one line.
- A badge **never contains another `[[`**. No nesting.
- The delimiter is `]]`, found by the first occurrence after the opener. A literal `]]` inside a badge is impossible.
- An empty body (`[[!]]`) is not a badge and is left as literal text.

### TRAP 4 — badges are markdown-level and do not work everywhere

They work in: paragraphs, blockquotes, list items, table cells, container bodies.

They do **not** work in: Vue component props, HTML attributes, fenced code blocks, or headings you intend to link to.

Putting `[[!shall]]` inside a `<MicroTree>` prop produces literal `[[!shall]]` in the rendered page. This is a guaranteed leak and the verification block below catches it.

### TRAP 5 — badge density

Five to twelve badges in a typical sub-section. A blockquote where every third word is badged is visual noise and teaches nothing. Badge the words that *do work*: the command, the discretion, the defined term. Not the nouns.

---

## `<MicroTree>`

```vue
<MicroTree
  input="A question a party actually asks."
  :gates="[
    { q: 'A yes/no question.', note: 'How to answer it.', no: 'What happens if the answer is no — in full.' },
    { q: 'Second gate.', no: 'Consequence.' }
  ]"
  result="What the court does when every gate is passed."
  caveat="The qualification that would otherwise mislead."
  resultKind="mandatory"
/>
```

### Props

| Prop | Type | Required | Notes |
|---|---|---|---|
| `input` | String | yes | The entry question |
| `gates` | Array | yes | of `{ q, note?, no }` — `note` is optional |
| `result` | String | yes | |
| `caveat` | String | no | default `''` |
| `resultKind` | String | no | default `'mandatory'`; `'mandatory'` \| `'discretionary'` |

`resultKind` drives the rendered label: **"Then the court MUST"** vs **"Then the court MAY"**. Match it to the statute — a `may` section (for example, a presumption the court "may" draw) with a mandatory result is a substantive error, not a styling one.

### TRAP 6 — curly quotes, always

Props are double-quoted HTML attributes containing single-quoted JavaScript strings. **Backslash-escaped ASCII quotes do not compile.** Any apostrophe or quotation mark *inside* a prop string must be typographic:

```
'   →   ’        (apostrophe: the court’s power)
"   →   “ ”      (quotation: “secondary evidence”)
```

```
BROKEN:  { q: 'Is it the document\'s original?' }
BROKEN:  { q: "Is it the document's original?" }     ← breaks the outer HTML attribute
RIGHT:   { q: 'Is it the document’s original?' }
```

The single quotes that **delimit** the JS string stay ASCII. Only the ones inside the text become curly.

**Safety check before building.** This finds mid-string ASCII apostrophes while ignoring the legitimate delimiters, because a delimiter is never flanked by letters on both sides:

```sh
grep -n "[A-Za-z]'[A-Za-z]" <file-or-chunk>
```

A naive `grep -c "'"` is useless — it counts the delimiters and tells you nothing.

### TRAP 7 — no badges, no markdown in props

Props render as plain text. No `[[…]]`, no `**bold**`, no links. If a gate needs emphasis, rewrite the sentence so the emphasis is in the word order.

### Registration

Global, in `docs/.vitepress/theme/index.js`:

```js
enhanceApp({ app }) {
  app.component('MicroTree', MicroTree)
}
```

---

## Verification — run after every build

Source-level checks never catch these. Check the **rendered HTML**.

```sh
f=docs/.vitepress/dist/chapters/<the-file>.html
for c in bsa-oneminute bsa-story bsa-proviso bsa-instinct bsa-ruling \
         bsa-tree bsa-mand bsa-disc bsa-art; do
  printf '%-18s %s\n' "$c" "$(grep -o "$c" $f | wc -l | tr -d ' ')"
done
printf '%-18s %s\n' 'LEAK :::' "$(grep -o '&gt;:::' $f | wc -l | tr -d ' ')"
printf '%-18s %s\n' 'LEAK [['  "$(grep -o '\[\[' $f | wc -l | tr -d ' ')"
grep -c '^### [1-6]\. ' docs/chapters/<the-file>.md
```

### Reading the numbers

**Both leak counts must be exactly `0`.** Anything else means a container did not close or a badge landed somewhere it does not parse. Find it before committing — a leaked `:::` in a published page is immediately visible to a reader.

**The last line must be `0`** — legacy numbered stage headings (`### 1. Verbatim Bare Act Text`) must not survive a migration.

**The class counts are ratios, not absolutes.** VitePress emits both an SSR copy and a hydration copy of the page, so:

| Container | Rendered count per authored block |
|---|---|
| `oneminute`, `story`, `proviso`, `instinct` | **4×** |
| `ruling` | **2×** |

So a file with 6 provisions, each with one `oneminute`, shows `24`. If you authored 6 and see `18`, one of them is **missing its inline title** (Trap 1). That ratio is the fastest defect detector you have — check it every time.

`bsa-tree` counts high (hundreds) because the component emits the class on many child elements. Treat it as "non-zero", not as a count.

---

## The stale-file-state gotcha

After a splice script rewrites a markdown file, the editor's file-state tracking is stale, and the next `Edit` on that file is rejected with:

> File has been modified since read, either by the user or by a linter.

This is **expected**, not an error, and it happens reliably. The fix: re-read the narrow affected range, then re-issue the identical edit. It succeeds on the second attempt. Anticipate it rather than investigating it.

---

## Styling

`docs/.vitepress/theme/custom.css` carries all the container, badge, tree and print styles under `.vp-doc .bsa-*` selectors. Copy it from `starter/` and adjust only the accent colour.

Three sibling sites now share this component system, and each has its own theme colour so that all three remain visually distinguishable when open together: the CPC site uses `#8b1a1a` (oxblood), the BNSS site uses `#1d4e5f` (deep teal), and this BSA site uses `#3b2f6b` (deep indigo/violet). Do not reuse either existing colour.

Print styles matter. Practitioners print pages and take them to court. The `ruling` accordions must open in print, the MicroTree must not fragment across pages, and the badges must remain distinguishable in greyscale — which is why the "term of art" badge is a **dotted underline** rather than a third colour.
