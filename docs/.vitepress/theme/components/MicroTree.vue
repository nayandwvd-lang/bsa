<script setup>
/**
 * The mechanical micro-tree: Input → gate → gate → gate → Result.
 *
 * This is the shape almost every CPC provision actually has. Section 10 is
 * the archetype: four conditions, ALL of which must hold, and if any one of
 * them fails the provision simply does not apply. A general flowchart draws
 * that as a branching tree and wastes most of the page on the failure arm;
 * drawing it as a numbered gate chain with the failure written beside each
 * gate is both smaller and truer to how a judge actually works through it.
 *
 * Written natively rather than with Mermaid deliberately:
 *  - the guide is meant to work offline, and Mermaid renders client-side;
 *  - it costs about a megabyte of JS plus d3/dagre/cytoscape;
 *  - Mermaid output is a hostile blob to a screen reader, whereas this is an
 *    ordered list with real text;
 *  - and it prints properly, which a canvas-ish SVG diagram usually does not.
 *
 * Usage:
 *   <MicroTree
 *     input="A suit is filed"
 *     :gates="[
 *       { q: 'Same matter directly and substantially in issue?',
 *         no: 'Section 10 does not apply — both suits proceed',
 *         note: 'Compare the whole subject-matter, not just a shared question' },
 *     ]"
 *     result="The trial of the later suit MUST be stayed"
 *     :caveat="'Institution is not barred — only the trial'" />
 */
const props = defineProps({
  input: { type: String, required: true },
  gates: { type: Array, required: true },
  result: { type: String, required: true },
  // What the result does NOT mean. The commonest source of error is
  // over-reading a consequence, so there is a slot for it by design.
  caveat: { type: String, default: '' },
  resultKind: { type: String, default: 'mandatory' } // mandatory | discretionary
})
</script>

<template>
  <div class="bsa-tree" role="group" aria-label="Decision chain">
    <p class="bsa-tree-input">
      <span class="bsa-tree-inlabel">Input</span>
      <span>{{ props.input }}</span>
    </p>

    <ol class="bsa-tree-gates">
      <li v-for="(g, i) in props.gates" :key="i" class="bsa-tree-gate">
        <span class="bsa-tree-num">{{ i + 1 }}</span>
        <div class="bsa-tree-gbody">
          <p class="bsa-tree-q">{{ g.q }}</p>
          <p v-if="g.note" class="bsa-tree-note">{{ g.note }}</p>
          <p class="bsa-tree-no">
            <span class="bsa-tree-nolabel">If no</span>
            <span>{{ g.no }}</span>
          </p>
        </div>
      </li>
    </ol>

    <p class="bsa-tree-result" :class="`is-${props.resultKind}`">
      <span class="bsa-tree-rlabel">
        {{ props.resultKind === 'mandatory' ? 'Then the court MUST' : 'Then the court MAY' }}
      </span>
      <span>{{ props.result }}</span>
    </p>

    <p v-if="props.caveat" class="bsa-tree-caveat">
      <strong>But not:</strong> {{ props.caveat }}
    </p>
  </div>
</template>

<style scoped>
.bsa-tree {
  margin: 22px 0;
  padding: 16px 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
}

.bsa-tree-input,
.bsa-tree-result {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 6px 10px;
  margin: 0;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 0.95rem;
  line-height: 1.6;
}

.bsa-tree-input {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
}

.bsa-tree-inlabel,
.bsa-tree-nolabel,
.bsa-tree-rlabel {
  flex: none;
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.bsa-tree-inlabel {
  color: var(--vp-c-text-3);
}

/* ---- the chain ---- */

.bsa-tree-gates {
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
}

/* The connector. Sits behind the numbered discs and stops short of the
   result box so the chain reads as flowing into it. */
.bsa-tree-gates::before {
  content: '';
  position: absolute;
  left: 13px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--vp-c-divider);
}

.bsa-tree-gate {
  position: relative;
  display: flex;
  gap: 14px;
  padding: 14px 0;
}

.bsa-tree-num {
  position: relative;
  z-index: 1;
  flex: none;
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  color: #fff;
  font-size: 0.78rem;
  font-weight: 700;
}

.dark .bsa-tree-num {
  color: #1b1717;
}

.bsa-tree-gbody {
  flex: 1;
  min-width: 0;
}

.bsa-tree-q {
  margin: 3px 0 0;
  font-size: 0.96rem;
  font-weight: 600;
  line-height: 1.55;
  color: var(--vp-c-text-1);
}

.bsa-tree-note {
  margin: 4px 0 0;
  font-size: 0.84rem;
  line-height: 1.6;
  color: var(--vp-c-text-3);
}

.bsa-tree-no {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 10px;
  margin: 8px 0 0;
  padding: 7px 11px;
  border-left: 3px solid var(--vp-c-danger-1);
  border-radius: 0 6px 6px 0;
  background: var(--vp-c-danger-soft);
  font-size: 0.86rem;
  line-height: 1.55;
}

.bsa-tree-nolabel {
  color: var(--vp-c-danger-1);
}

/* ---- the result ---- */

.bsa-tree-result {
  margin-top: 4px;
  border: 1px solid transparent;
  font-weight: 600;
}

.bsa-tree-result.is-mandatory {
  background: var(--vp-c-danger-soft);
  border-color: var(--vp-c-danger-1);
}

.bsa-tree-result.is-mandatory .bsa-tree-rlabel {
  color: var(--vp-c-danger-1);
}

.bsa-tree-result.is-discretionary {
  background: var(--vp-c-tip-soft);
  border-color: var(--vp-c-tip-1);
}

.bsa-tree-result.is-discretionary .bsa-tree-rlabel {
  color: var(--vp-c-tip-1);
}

.bsa-tree-caveat {
  margin: 10px 0 0;
  font-size: 0.86rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.bsa-tree-caveat strong {
  color: var(--vp-c-text-1);
}

@media (max-width: 640px) {
  .bsa-tree {
    padding: 14px 12px;
  }

  .bsa-tree-gate {
    gap: 10px;
  }
}

@media print {
  .bsa-tree {
    break-inside: avoid;
    background: none;
    border: 1pt solid #000;
  }

  .bsa-tree-num {
    background: none !important;
    color: #000 !important;
    border: 1pt solid #000;
  }

  .bsa-tree-no,
  .bsa-tree-result {
    background: none !important;
    border: 0.5pt solid #666;
  }
}
</style>
