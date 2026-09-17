// docs/.vitepress/config.mjs
//
// Starter config for the BSA guide.
//
// The one line that matters most is the `markdown.config` hook: without it the
// five containers and the three badges do not exist and every `:::` block leaks
// into the page as literal text.

import { defineConfig } from 'vitepress'
import { bsaContainers } from './markdown/containers.mjs'

export default defineConfig({
  title: 'BSA Practitioner & Academic Guide',
  description:
    'Bharatiya Sakshya Adhiniyam, 2023 — a living digital bare Act, with the Indian Evidence Act concordance.',
  lang: 'en-IN',

  // Local builds serve from '/'; the Pages workflow sets DOCS_BASE=/bsa/.
  base: process.env.DOCS_BASE ?? '/',

  cleanUrls: true,
  lastUpdated: true,
  appearance: true,

  head: [
    // Pick a colour distinct from the BNSS site's #1d4e5f (teal) and the CPC
    // site's #8b1a1a (oxblood) so all three are not confusable when open
    // together, and so the bareact.ai tile can carry its own accent.
    ['meta', { name: 'theme-color', content: '#3b2f6b' }]
  ],

  // REQUIRED. Registers the containers and the badge inline rule.
  markdown: {
    config: (md) => bsaContainers(md)
  },

  themeConfig: {
    siteTitle: 'BSA Guide',

    // Local search indexes RENDERED MARKDOWN. This is the reason the containers
    // are markdown-it rules rather than Vue components — see reference/02.
    search: {
      provider: 'local',
      options: { detailedView: true }
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start here', link: '/start-here' },
      { text: 'IEA → BSA', link: '/concordance' },
      { text: 'Glossary', link: '/glossary' },
      {
        text: 'Chapters',
        items: [
          // Fill in as chapters are written. Do not list a page before it exists.
          { text: 'Chapter I — Preliminary (ss. 1-2)', link: '/chapters/chapter-01' },
          { text: 'Ch. II part I — Relevancy chain (ss. 3-14)', link: '/chapters/chapter-02a' },
          { text: 'Ch. II part II — Admissions & confessions (ss. 15-25)', link: '/chapters/chapter-02b' },
          { text: 'Ch. II part III — Unavailable-witness statements (ss. 26-33)', link: '/chapters/chapter-02c' },
          { text: 'Ch. II part IV — Judgments (ss. 34-38)', link: '/chapters/chapter-02d' },
          { text: 'Ch. II part V — Opinions of experts (ss. 39-45)', link: '/chapters/chapter-02e' },
          { text: 'Ch. II part VI — Character evidence (ss. 46-50)', link: '/chapters/chapter-02f' },
          { text: 'Ch. III — Facts which need not be proved (ss. 51-53)', link: '/chapters/chapter-03' },
          { text: 'Ch. IV — Oral evidence (ss. 54-55)', link: '/chapters/chapter-04' },
          { text: 'Ch. V part I — Primary & secondary evidence (ss. 56-60)', link: '/chapters/chapter-05a' },
          { text: 'Ch. V part II — Electronic records (ss. 61-63)', link: '/chapters/chapter-05b' },
          { text: 'Ch. V part III — Notice, execution & comparison (ss. 64-73)', link: '/chapters/chapter-05c' },
          { text: 'Ch. V part IV — Public documents (ss. 74-77)', link: '/chapters/chapter-05d' },
          { text: 'Ch. V part V — Presumptions I (ss. 78-85)', link: '/chapters/chapter-05e' },
          { text: 'Ch. V part VI — Presumptions II (ss. 86-93)', link: '/chapters/chapter-05f' },
          { text: 'Ch. VI — Exclusion of oral by documentary evidence (ss. 94-103)', link: '/chapters/chapter-06' },
          { text: 'Ch. VII part I — Burden of proof, general theory (ss. 104-114)', link: '/chapters/chapter-07a' },
          { text: 'Ch. VII part II — Burden of proof, presumptions (ss. 115-120)', link: '/chapters/chapter-07b' },
          { text: 'Ch. VIII — Estoppel (ss. 121-123)', link: '/chapters/chapter-08' }
        ]
      },
      { text: 'Drafting toolkit', link: '/drafts/' }
    ],

    // Chapter-based, NOT the CPC's sections + orders split. BSA has no Orders.
    // Group the 12 chapters into the functional parts in reference/05.
    sidebar: {
      '/chapters/': [
        {
          text: 'Preliminary and relevancy',
          collapsed: false,
          items: [
            { text: 'Chapter I — Preliminary (ss. 1-2)', link: '/chapters/chapter-01' },
            { text: 'Ch. II part I — Relevancy chain (ss. 3-14)', link: '/chapters/chapter-02a' },
            { text: 'Ch. II part II — Admissions & confessions (ss. 15-25)', link: '/chapters/chapter-02b' },
            { text: 'Ch. II part III — Unavailable-witness statements (ss. 26-33)', link: '/chapters/chapter-02c' },
            { text: 'Ch. II part IV — Judgments (ss. 34-38)', link: '/chapters/chapter-02d' },
            { text: 'Ch. II part V — Opinions of experts (ss. 39-45)', link: '/chapters/chapter-02e' },
            { text: 'Ch. II part VI — Character evidence (ss. 46-50)', link: '/chapters/chapter-02f' }
            // Chapter II (ss. 3-50) is now complete. Chapter III (ss. 51-53) begins Part III "On Proof".
          ]
        },
        {
          text: 'Proof: facts, oral and documentary evidence',
          collapsed: true,
          items: [
            { text: 'Ch. III — Facts which need not be proved (ss. 51-53)', link: '/chapters/chapter-03' },
            { text: 'Ch. IV — Oral evidence (ss. 54-55)', link: '/chapters/chapter-04' },
            { text: 'Ch. V part I — Primary & secondary evidence (ss. 56-60)', link: '/chapters/chapter-05a' },
            { text: 'Ch. V part II — Electronic records (ss. 61-63)', link: '/chapters/chapter-05b' },
            { text: 'Ch. V part III — Notice, execution & comparison (ss. 64-73)', link: '/chapters/chapter-05c' },
            { text: 'Ch. V part IV — Public documents (ss. 74-77)', link: '/chapters/chapter-05d' },
            { text: 'Ch. V part V — Presumptions I (ss. 78-85)', link: '/chapters/chapter-05e' },
            { text: 'Ch. V part VI — Presumptions II (ss. 86-93)', link: '/chapters/chapter-05f' },
            { text: 'Ch. VI — Exclusion of oral by documentary evidence (ss. 94-103)', link: '/chapters/chapter-06' }
          ]
        },
        {
          text: 'Burden of proof and estoppel',
          collapsed: true,
          items: [
            { text: 'Ch. VII part I — Burden of proof, general theory (ss. 104-114)', link: '/chapters/chapter-07a' },
            { text: 'Ch. VII part II — Burden of proof, presumptions (ss. 115-120)', link: '/chapters/chapter-07b' },
            { text: 'Ch. VIII — Estoppel (ss. 121-123)', link: '/chapters/chapter-08' }
          ]
        },
        { text: 'Witnesses and their examination', collapsed: true, items: [] },
        { text: 'Improper admission, repeal and savings', collapsed: true, items: [] }
      ],
      '/drafts/': [
        { text: 'Drafting toolkit', collapsed: false, items: [] }
      ]
    },

    outline: { level: [2, 3], label: 'On this page' },

    docFooter: { prev: 'Previous', next: 'Next' },

    footer: {
      message:
        'Educational and practice material. Verify every citation and every section number against the bare Act before relying on it in court.',
      copyright: ''
    }
  }
})
