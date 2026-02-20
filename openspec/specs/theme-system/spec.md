# theme-system Specification

## Purpose
TBD - created by archiving change add-lean-canvas-app. Update Purpose after archive.
## Requirements
### Requirement: Theme Selection
The application SHALL provide at least 4 selectable visual themes:
1. **Light** (default) — Clean white background, dark text, subtle borders
2. **Dark** — Dark background, light text, reduced eye strain
3. **Blueprint** — Blue and white engineering-drawing aesthetic
4. **Warm** — Cream and brown tones, approachable feel

#### Scenario: User selects a theme
- **WHEN** the user selects "Dark" from the theme selector
- **THEN** the entire application (editor and generated canvas) switches to the dark color scheme
- **AND** the theme preference is saved to localStorage

#### Scenario: Theme persists across sessions
- **WHEN** the user selects "Blueprint" and later reopens the page
- **THEN** the Blueprint theme is automatically applied on page load

### Requirement: Theme Implementation via CSS Custom Properties
All theme-configurable values (colors, backgrounds, borders, shadows) SHALL be defined as CSS custom properties on `:root` or theme-specific selectors. Theme switching SHALL work by changing a class on `<body>`.

#### Scenario: Theme class controls appearance
- **WHEN** the body element has class `theme-dark`
- **THEN** CSS custom properties resolve to dark theme values
- **AND** all styled elements reflect the dark theme without JavaScript-driven inline styles

### Requirement: Print Theme Override
When printing, the application SHALL use print-optimized colors regardless of the selected screen theme. Print output SHALL use high-contrast, ink-efficient colors.

#### Scenario: Dark theme prints legibly
- **WHEN** the user has the dark theme selected and prints the canvas
- **THEN** the printed output uses light background with dark text for readability
- **AND** unnecessary background colors are suppressed

