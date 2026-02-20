# Project Context

## Purpose
An interactive web-based Lean Canvas tool that helps entrepreneurs think through and structure business ideas using Ash Maurya's standard 9-box Lean Canvas framework (from "Running Lean"), plus a CanvasLab-exclusive Threat Landscape extension for competitive risk analysis. The tool provides guided input, educational content, reference links, and generates a polished, printable one-page canvas.

## Tech Stack
- **HTML5** - Semantic markup, single-page application
- **CSS3** - Custom properties for theming, CSS Grid for canvas layout, `@media print` for print styles
- **Vanilla JavaScript (ES6+)** - No frameworks, no build tools, no dependencies
- **localStorage** - Auto-save persistence
- **JSON** - Export/import format for canvas data

## Project Conventions

### Code Style
- Modern ES6+ (const/let, arrow functions, template literals, modules where appropriate)
- BEM-like CSS class naming: `.canvas__section`, `.canvas__section--problem`
- CSS custom properties for all theme-configurable values
- Semantic HTML elements (`<main>`, `<section>`, `<header>`, `<aside>`)
- Accessible: ARIA labels, keyboard navigation, sufficient contrast ratios

### Architecture Patterns
- Single HTML file with linked CSS and JS files (no bundler)
- Separation of concerns: `index.html`, `styles.css`, `app.js`
- Additional files only if complexity warrants it (e.g., `themes.css`, `help-content.js`)
- State management via a single JavaScript object, synced to localStorage
- Event-driven UI updates

### Testing Strategy
- Manual browser testing (Chrome, Firefox, Safari)
- Print preview testing for paper output
- No automated test framework (vanilla project)

### Git Workflow
- `main` branch for stable releases
- Feature branches for new work
- Conventional commit messages: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`

## Domain Context
The Lean Canvas is a 1-page business model template created by Ash Maurya, adapted from Alexander Osterwalder's Business Model Canvas. It has 9 boxes:

1. **Problem** (+ Existing Alternatives sub-section) - Top 1-3 customer pain points
2. **Customer Segments** (+ Early Adopters sub-section) - Who you're building for
3. **Unique Value Proposition** (+ High-Level Concept sub-section) - Why you're different and worth attention
4. **Solution** - Top 3 features addressing the problems
5. **Channels** - How you reach customers
6. **Revenue Streams** - How you make money
7. **Cost Structure** - Costs to operate
8. **Key Metrics** - Key numbers that tell you how the business is doing
9. **Unfair Advantage** - What can't be easily copied or bought

**CanvasLab Extension** (not part of the standard Lean Canvas):
10. **Threats** - Competitive threats: patent/IP exposure, litigation patterns, coercive licensing, regulatory capture, predatory tactics
11. **Defensive Strategy** - How to defend: design-arounds, defensive patents, IP insurance, industry alliances, regulatory engagement

The recommended fill order (14 steps): Problem → Existing Alternatives → Ideal Customer → Customer Segments → Solution → UVP → High-Level Concept → Unfair Advantage → Threats → Defensive Strategy → Channels → Cost Structure → Revenue Streams → Key Metrics

## Important Constraints
- **Zero dependencies** - Must work by opening index.html in any modern browser
- **No build step** - No npm, no bundler, no transpiler
- **Single canvas** - One canvas at a time (export/import to switch ideas)
- **Print target** - US Letter landscape (8.5" x 11"), single page
- **Accessible** - WCAG 2.1 AA compliance for color contrast and keyboard nav
- **Offline-capable** - Everything works without internet (except external reference links)

## External Dependencies
- None (all self-contained)
- External links to reference materials are informational only, not required for functionality
