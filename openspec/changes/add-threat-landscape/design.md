## Context
The Lean Canvas framework (Ash Maurya) has 9 standard boxes. CanvasLab currently implements these as a 5-column x 2-row CSS Grid with 12 editor steps (sub-sections broken out as standalone editor cards). This change adds a CanvasLab-exclusive "Threat Landscape" section that is not part of the standard framework, requiring careful visual differentiation.

## Goals / Non-Goals
- Goals:
  - Add threat identification and defensive strategy as guided workflow steps
  - Maintain the classic Lean Canvas grid as rows 1-2, with the extension clearly separated in row 3
  - Preserve backward compatibility with existing saved canvases
  - Follow existing patterns for help content, AI prompts, and research tools
- Non-Goals:
  - Replacing or modifying any standard Lean Canvas sections
  - Building a full IP/legal analysis framework (this is a lightweight prompt, not an FTO)
  - Supporting multiple threat assessment methodologies

## Decisions

### Grid Layout: Full-width 3rd row
- Decision: Add a single full-width row 3 (`grid-column: 1 / 6; grid-row: 3`) containing a split cell with Threats (top) and Defensive Strategy (bottom) sub-sections
- Alternatives considered:
  - Sub-section of Unfair Advantage — rejected: too cramped, conflates "your moat" with "their weapons"
  - Separate panel outside grid — rejected: wouldn't print naturally with the canvas
- Rationale: A 3rd row is honest about provenance (not standard Lean Canvas), prints naturally, and gives the content adequate space

### Visual Differentiation
- Decision: The 3rd row uses a subtle visual indicator (e.g., a small "CanvasLab" label or distinct border style) to signal this is not part of the standard Lean Canvas
- Rationale: Users should understand which parts are Ash Maurya's framework and which are CanvasLab additions

### Fill Order Placement
- Decision: Threats (step 9) and Defensive Strategy (step 10) go immediately after Unfair Advantage (step 8)
- Rationale: Unfair Advantage asks "what's your moat?" — the natural follow-up is "what are their weapons?" and "how do you defend?" This creates a complete competitive analysis block before moving to go-to-market (Channels) and financials (Cost/Revenue)

### Data Model
- Decision: Add `threats: { content: '' }` and `defensiveStrategy: { content: '' }` to `canvasData.sections`
- Migration: Existing canvases missing these keys get empty defaults on load (same pattern used for existing sub-section migration in `loadFromLocalStorage()`)

### Sub-section Scope
- `threats` — display title: "Threats"
  - Covers: patent/IP exposure, litigation patterns of incumbents, coercive licensing programs, regulatory capture, predatory market tactics
- `defensiveStrategy` — display title: "Defensive Strategy"
  - Covers: design-arounds, defensive patents, IP insurance, industry alliances (LOT Network, OIN), regulatory engagement, prior art documentation

## Risks / Trade-offs
- Risk: Adding a non-standard section may confuse users expecting a pure Lean Canvas
  - Mitigation: Visual differentiation label; help content explains this is a CanvasLab extension
- Risk: 3rd row may overflow single printed page when all sections are filled
  - Mitigation: Print styles use reduced min-height for row 3; split layout keeps it compact
- Risk: Existing saved canvases won't have the new fields
  - Mitigation: Migration adds empty defaults on load (proven pattern already in codebase)

## Open Questions
- None (resolved during pre-proposal discussion)
