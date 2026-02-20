## 1. Data Model & Section Metadata
- [x] 1.1 Add `threats: { content: '' }` and `defensiveStrategy: { content: '' }` to `createEmptyCanvas()` in app.js
- [x] 1.2 Add `{ key: 'threats', title: 'Threats' }` and `{ key: 'defensiveStrategy', title: 'Defensive Strategy' }` to SECTIONS array after `unfairAdvantage`
- [x] 1.3 Ensure `loadFromLocalStorage()` migration handles missing keys (add empty defaults for canvases saved before this feature)

## 2. Editor UI
- [x] 2.1 Add Threats section card to index.html after Unfair Advantage card (step 9), with textarea `data-field="threats.content"` and help toggle
- [x] 2.2 Add Defensive Strategy section card to index.html after Threats card (step 10), with textarea `data-field="defensiveStrategy.content"` and help toggle
- [x] 2.3 Update step numbers on existing section cards: Channels to step 11, Cost Structure to step 12, Revenue Streams to step 13, Key Metrics to step 14

## 3. Help Content
- [x] 3.1 Add `threats` entry to HELP_CONTENT with what, how, example (FreshPlate), references, tools, and aiPrompt
- [x] 3.2 Add `defensiveStrategy` entry to HELP_CONTENT with what, how, example (FreshPlate), references, tools, and aiPrompt

## 4. Canvas Grid (View Mode)
- [x] 4.1 Add 3rd row HTML to canvas-grid in index.html: a full-width cell with Threats and Defensive Strategy sub-sections (split layout like Cost/Revenue cell)
- [x] 4.2 Add `.cell-threat-landscape` CSS rule: `grid-column: 1 / 6; grid-row: 3;`
- [x] 4.3 Update `.canvas-grid` `grid-template-rows` from `auto auto` to `auto auto auto`
- [x] 4.4 Add visual differentiation label or styling to indicate CanvasLab extension

## 5. Canvas Generation Logic
- [x] 5.1 Add `view-threats` and `view-defensiveStrategy` to viewMap in `generateCanvas()`

## 6. Print Optimization
- [x] 6.1 Add print styles for `.cell-threat-landscape` with reduced min-height to maintain single-page fit
- [x] 6.2 Verify print output fits on US Letter landscape with the new 3rd row

## 7. Theme Compatibility
- [x] 7.1 Verify the new cell renders correctly across all 9 themes (inherits existing `.canvas-cell` styles)
- [x] 7.2 Confirm glow effects apply to the new cell in Neon, Cyberpunk, Synthwave, Matrix, and Aurora themes
