# canvas-editor Specification

## Purpose
TBD - created by archiving change add-lean-canvas-app. Update Purpose after archive.
## Requirements
### Requirement: Canvas Section Editor
The application SHALL display editable sections for all 9 Lean Canvas boxes, each with a title, textarea input, and optional sub-section inputs.

The sections SHALL be:
1. **Problem** — with sub-section "Existing Alternatives"
2. **Customer Segments** — with sub-section "Early Adopters"
3. **Unique Value Proposition** — with sub-section "High-Level Concept"
4. **Solution**
5. **Channels**
6. **Revenue Streams**
7. **Cost Structure**
8. **Key Metrics**
9. **Unfair Advantage**

#### Scenario: User sees all 9 sections on page load
- **WHEN** the user opens index.html
- **THEN** all 9 canvas sections are displayed as editable cards
- **AND** sections with sub-sections show separate input fields for each sub-section

#### Scenario: User types in a section
- **WHEN** the user types text into any section's textarea
- **THEN** the text is captured and reflected in the application state

### Requirement: Canvas Title
The application SHALL provide an editable title field at the top of the editor for naming the canvas/business idea.

#### Scenario: User sets a canvas title
- **WHEN** the user types "My Startup Idea" into the title field
- **THEN** the title is stored in the canvas data and displayed in the generated output

### Requirement: Recommended Fill Order
The editor SHALL present sections in Ash Maurya's recommended fill order: Customer Segments → Problem → Unique Value Proposition → Solution → Channels → Revenue Streams → Cost Structure → Key Metrics → Unfair Advantage.

#### Scenario: Sections displayed in fill order
- **WHEN** the user opens the editor
- **THEN** the sections appear in the recommended fill order from top to bottom

### Requirement: Section Numbering
Each section SHALL display a step number (1-9) indicating its position in the recommended fill order, helping users understand the intended workflow.

#### Scenario: Step numbers visible
- **WHEN** the user views the editor
- **THEN** each section shows its step number (e.g., "Step 1: Customer Segments", "Step 2: Problem")

### Requirement: Generate Canvas Button
The application SHALL provide a prominent "Generate Canvas" button that switches from edit mode to a rendered, visually appealing canvas view.

#### Scenario: User generates the canvas
- **WHEN** the user clicks "Generate Canvas"
- **THEN** the edit form is hidden
- **AND** a formatted Lean Canvas grid is displayed with all entered content

### Requirement: Return to Edit Mode
The application SHALL provide a way to return from the generated canvas view back to edit mode.

#### Scenario: User returns to editing
- **WHEN** the user clicks "Back to Editor" from the generated canvas view
- **THEN** the canvas grid is hidden and the edit form is shown with all previously entered data intact

### Requirement: Clear Canvas
The application SHALL provide a "Clear Canvas" action with a confirmation dialog to reset all fields.

#### Scenario: User clears the canvas
- **WHEN** the user clicks "Clear Canvas"
- **THEN** a confirmation dialog appears asking "Are you sure? This will erase all content."
- **AND** if confirmed, all fields are cleared and localStorage is updated
- **AND** if cancelled, no changes are made

