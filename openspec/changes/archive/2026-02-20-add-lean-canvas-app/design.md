## Context
Building a single-page Lean Canvas web application with zero dependencies. Must work by opening `index.html` directly in a browser. Targets entrepreneurs who want a guided, educational canvas-building experience with professional printable output.

## Goals / Non-Goals

### Goals
- Intuitive two-mode experience: Edit mode (fill in sections) → Print mode (generated canvas)
- Rich help content integrated inline, not on separate pages
- Polished, professional print output that fits on one US Letter landscape page
- Multiple themes for visual preference
- Data safety via auto-save and export

### Non-Goals
- Multi-user collaboration
- Backend/server functionality
- Account creation or authentication
- Multiple simultaneous canvases (use export/import to switch)
- Mobile-first design (desktop-first, but responsive is nice-to-have)

## Decisions

### File Structure
```
index.html          # Main HTML structure
styles.css          # All styles including themes and print
app.js              # All application logic
```
**Rationale**: Minimal file count, zero build complexity. Additional files (e.g., `help-content.js`) only if `app.js` exceeds ~500 lines.

### Layout Architecture
- **Edit Mode**: Vertical scrolling form layout. Each of the 9 canvas sections is a card with a header, help toggle, and editable textarea(s). Sections ordered by recommended fill order.
- **Print/View Mode**: CSS Grid replicating the classic Lean Canvas 2-row layout:
  ```
  ┌──────────┬──────────┬──────────────────┬──────────┬──────────┐
  │ Problem  │ Solution │       UVP        │ Unfair   │ Customer │
  │          │          │                  │ Advantage│ Segments │
  │ Existing │          │  High-Level      │          │ Early    │
  │ Alts     │          │  Concept         │          │ Adopters │
  ├──────────┴──────────┼──────────────────┼──────────┴──────────┤
  │    Key Metrics      │    Channels      │   Cost Structure    │
  │                     │                  │   Revenue Streams   │
  └─────────────────────┴──────────────────┴─────────────────────┘
  ```
- **Print styles**: `@media print` hides all UI chrome (buttons, help panels, theme selector), shows only the canvas grid, forces white background (or theme-appropriate), fits to one landscape page.

### Theme Implementation
- CSS custom properties (`:root` level) for all colors, fonts, spacing
- Theme classes on `<body>`: `.theme-light`, `.theme-dark`, `.theme-blueprint`, `.theme-warm`
- Theme selection stored in localStorage
- Themes:
  - **Light** (default): Clean white background, dark text, subtle section borders
  - **Dark**: Dark background, light text, good for screen work
  - **Blueprint**: Blue/white engineering-drawing aesthetic
  - **Warm**: Cream/brown tones, approachable feel

### Data Model
```javascript
const canvasData = {
  title: "",                    // Canvas/project name
  lastModified: "",             // ISO timestamp
  sections: {
    problem: { content: "", existingAlternatives: "" },
    customerSegments: { content: "", earlyAdopters: "" },
    uvp: { content: "", highLevelConcept: "" },
    solution: { content: "" },
    channels: { content: "" },
    revenueStreams: { content: "" },
    costStructure: { content: "" },
    keyMetrics: { content: "" },
    unfairAdvantage: { content: "" }
  }
};
```

### Help System
- Each section has a collapsible help panel (toggle button: "?" or "Help")
- Help content includes:
  - **What**: Brief description of what this section is for
  - **How**: Step-by-step guidance on how to fill it out
  - **Example**: Pre-written example text (for a fictional startup)
  - **References**: Links to Ash Maurya's articles, relevant chapters of Running Lean, and other resources
  - **Tools**: Links to free research tools (Google Trends, Statista free tier, SurveyMonkey, etc.)
- Help content is embedded in JS as a data structure (not fetched from external sources)

### Auto-Save Strategy
- Debounced save on every input change (300ms delay)
- Save to `localStorage` key `leancanvas_data`
- Theme preference saved separately as `leancanvas_theme`
- On page load: restore from localStorage if data exists
- Visual indicator: "Saved" / "Saving..." in the UI

## Risks / Trade-offs

- **Risk**: Large help content bloats JS file → **Mitigation**: Keep descriptions concise; move to `help-content.js` if needed
- **Risk**: Print layout varies across browsers → **Mitigation**: Test in Chrome, Firefox, Safari; use explicit dimensions in print CSS
- **Risk**: localStorage cleared by user → **Mitigation**: Prominent export button, reminder to export periodically
- **Trade-off**: No build step means no minification or tree-shaking → Acceptable for the project scope

## Open Questions
- None currently — all major decisions resolved with user input
