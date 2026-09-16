// docs/.vitepress/theme/index.js
//
// Minimal theme entry for the BSA guide. Registers MicroTree globally so it
// can be used from any markdown file, and loads the custom stylesheet.
//
// The five containers (oneminute, story, proviso, instinct, ruling) and the
// three badges ([[!…]] [[?…]] [[=…]]) are NOT components — they are markdown-it
// rules wired up in config.mjs. Nothing to register for them here.

import DefaultTheme from 'vitepress/theme'
import MicroTree from './components/MicroTree.vue'
import './custom.css'

export default {
  extends: DefaultTheme,

  enhanceApp({ app }) {
    app.component('MicroTree', MicroTree)
  }
}

// ---------------------------------------------------------------------------
// If you later add layout-slot components (a reading-progress bar, a floating
// glossary, a view-mode switch), the CPC project mounted them like this:
//
//   import { h } from 'vue'
//   import ReadingProgress from './components/ReadingProgress.vue'
//   import ViewMode from './components/ViewMode.vue'
//
//   Layout() {
//     return h(DefaultTheme.Layout, null, {
//       'layout-top':  () => [h(ReadingProgress)],
//       'doc-before':  () => h(ViewMode)
//     })
//   }
//
// Add them only once there is content to justify them. Registering components
// that render nothing costs bundle size and gives the false impression that a
// feature exists.
// ---------------------------------------------------------------------------
