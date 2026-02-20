# canvas-generator Specification

## Purpose
TBD - created by archiving change add-lean-canvas-app. Update Purpose after archive.
## Requirements
### Requirement: Canvas Grid Layout
The generated canvas SHALL replicate the classic Lean Canvas 2-row grid layout with the following structure:

Row 1 (5 columns): Problem | Solution | UVP (wide center) | Unfair Advantage | Customer Segments
Row 2 (3 columns): Key Metrics | Channels | Cost Structure / Revenue Streams

Sub-sections (Existing Alternatives, Early Adopters, High-Level Concept) SHALL appear as labeled sub-areas within their parent cells.

#### Scenario: Canvas renders in grid layout
- **WHEN** the user clicks "Generate Canvas"
- **THEN** the canvas displays as a grid matching the classic Lean Canvas layout
- **AND** each cell shows the section title and user-entered content
- **AND** sub-sections are visually distinguished within their parent cells

### Requirement: Visual Polish
The generated canvas SHALL have a professional, clean appearance with:
- Clear section borders and headers
- Readable typography (minimum 10pt equivalent for print)
- Balanced whitespace
- Canvas title displayed prominently above the grid
- Date/timestamp shown below the grid

#### Scenario: Canvas looks professional
- **WHEN** the canvas is generated
- **THEN** sections have clear borders, legible text, and balanced spacing
- **AND** the canvas title appears above the grid
- **AND** a date is shown below the grid

### Requirement: Print Optimization
The generated canvas SHALL be optimized for printing on US Letter landscape (11" x 8.5") paper.

Print styles SHALL:
- Hide all UI chrome (buttons, help panels, theme selector, navigation)
- Fit the entire canvas grid on one page
- Use print-friendly colors (high contrast, no excessive ink usage)
- Set appropriate page margins

#### Scenario: User prints the canvas
- **WHEN** the user triggers the browser's print function (Ctrl+P / Cmd+P) from the generated canvas view
- **THEN** only the canvas grid, title, and date are printed
- **AND** the content fits on a single US Letter landscape page
- **AND** colors are optimized for printing

### Requirement: Print Button
The application SHALL provide a "Print" button in the generated canvas view that triggers the browser's print dialog.

#### Scenario: User clicks print button
- **WHEN** the user clicks the "Print" button
- **THEN** the browser's native print dialog opens with landscape orientation pre-suggested

