## 1. Project Setup
- [ ] 1.1 Create `index.html` with semantic HTML structure (header, main, footer)
- [ ] 1.2 Create `styles.css` with CSS reset, custom properties, and base layout
- [ ] 1.3 Create `app.js` with module structure and state management
- [ ] 1.4 Create `.gitignore` for common exclusions

## 2. Canvas Editor (Edit Mode)
- [ ] 2.1 Build HTML structure for all 9 canvas sections as editable cards
- [ ] 2.2 Add sub-section inputs (Existing Alternatives, Early Adopters, High-Level Concept)
- [ ] 2.3 Add canvas title input field
- [ ] 2.4 Add step numbers (1-9) to each section in recommended fill order
- [ ] 2.5 Style editor cards with CSS (spacing, borders, typography)
- [ ] 2.6 Wire up textarea inputs to JavaScript state object
- [ ] 2.7 Add "Generate Canvas" button
- [ ] 2.8 Add "Clear Canvas" button with confirmation dialog

## 3. Canvas Generator (View/Print Mode)
- [ ] 3.1 Build CSS Grid layout matching classic Lean Canvas 2-row structure
- [ ] 3.2 Render canvas data into the grid cells
- [ ] 3.3 Display sub-sections as labeled sub-areas within parent cells
- [ ] 3.4 Add canvas title above grid and date below
- [ ] 3.5 Style generated canvas for visual polish (borders, typography, whitespace)
- [ ] 3.6 Add "Back to Editor" button
- [ ] 3.7 Add "Print" button that triggers window.print()
- [ ] 3.8 Create `@media print` styles: hide UI chrome, fit US Letter landscape, print-friendly colors

## 4. Theme System
- [ ] 4.1 Define CSS custom properties for all theme-configurable values
- [ ] 4.2 Implement Light theme (default)
- [ ] 4.3 Implement Dark theme
- [ ] 4.4 Implement Blueprint theme
- [ ] 4.5 Implement Warm theme
- [ ] 4.6 Add theme selector UI (dropdown or button group in header)
- [ ] 4.7 Wire theme selection to body class toggle
- [ ] 4.8 Add print theme override (force high-contrast print-friendly colors)

## 5. Data Persistence
- [ ] 5.1 Implement debounced auto-save to localStorage (300ms)
- [ ] 5.2 Implement data restoration on page load
- [ ] 5.3 Add save status indicator ("Saving..." / "Saved")
- [ ] 5.4 Implement JSON export (download as file)
- [ ] 5.5 Implement JSON import (file picker + validation + confirmation)
- [ ] 5.6 Save/restore theme preference in localStorage

## 6. Help System
- [ ] 6.1 Create help content data structure with all 9 sections' content
- [ ] 6.2 Write help content: What, How, Example, References, Tools for each section
- [ ] 6.3 Use a consistent fictional startup for all example text
- [ ] 6.4 Build collapsible help panel UI component
- [ ] 6.5 Add "?" toggle button to each section header
- [ ] 6.6 Style help panels (distinct from section content, collapsible animation)
- [ ] 6.7 Ensure help panels are hidden in print styles

## 7. Polish & Testing
- [ ] 7.1 Add keyboard navigation and ARIA labels for accessibility
- [ ] 7.2 Test in Chrome, Firefox, and Safari
- [ ] 7.3 Test print output on US Letter landscape
- [ ] 7.4 Verify all themes render correctly in both edit and view modes
- [ ] 7.5 Verify export/import round-trip preserves all data
- [ ] 7.6 Final visual polish pass
