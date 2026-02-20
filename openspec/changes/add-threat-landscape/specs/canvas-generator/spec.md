## ADDED Requirements

### Requirement: Threat Landscape Grid Row
The generated canvas SHALL include a 3rd row spanning the full grid width, containing a single "Threat Landscape" cell with two sub-sections:

- **Threats** — upper portion
- **Defensive Strategy** — lower portion, separated by a dashed border

The 3rd row SHALL be visually differentiated from the standard Lean Canvas rows 1-2 with a label indicating it is a CanvasLab extension.

#### Scenario: Threat Landscape row renders below standard grid
- **WHEN** the user generates the canvas
- **THEN** a full-width 3rd row appears below the Key Metrics / Channels / Cost-Revenue row
- **AND** the cell contains Threats content in the upper portion and Defensive Strategy content in the lower portion
- **AND** the two sub-sections are separated by a dashed border

#### Scenario: Threat Landscape visually marked as extension
- **WHEN** the user views or prints the generated canvas
- **THEN** the 3rd row displays a visual indicator (label or distinct styling) signaling it is a CanvasLab extension

#### Scenario: Threat Landscape prints on same page
- **WHEN** the user prints the canvas
- **THEN** the 3rd row fits on the same US Letter landscape page as rows 1-2
- **AND** print styles use compact sizing to ensure single-page fit
