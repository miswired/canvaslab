## ADDED Requirements

### Requirement: Threat Landscape Editor Sections
The application SHALL display two additional editor sections after Unfair Advantage:

1. **Threats** (step 9) — for identifying competitive threats: patent/IP exposure, litigation patterns, coercive licensing programs, regulatory capture, and predatory business tactics
2. **Defensive Strategy** (step 10) — for documenting planned defenses: design-arounds, defensive patents, IP insurance, industry alliances, and regulatory engagement

These sections are a CanvasLab extension to the standard Lean Canvas framework.

The fill order SHALL be updated to 14 steps:
1. Problem, 2. Existing Alternatives, 3. Ideal Customer, 4. Customer Segments, 5. Solution, 6. UVP, 7. High-Level Concept, 8. Unfair Advantage, **9. Threats**, **10. Defensive Strategy**, 11. Channels, 12. Cost Structure, 13. Revenue Streams, 14. Key Metrics

#### Scenario: User sees Threats section after Unfair Advantage
- **WHEN** the user views the editor
- **THEN** a "Threats" section card appears as step 9, immediately after Unfair Advantage (step 8)
- **AND** it contains a textarea for entering competitive threat information

#### Scenario: User sees Defensive Strategy section after Threats
- **WHEN** the user views the editor
- **THEN** a "Defensive Strategy" section card appears as step 10, immediately after Threats (step 9)
- **AND** it contains a textarea for entering defensive strategy information

#### Scenario: Remaining sections renumbered
- **WHEN** the user views the editor
- **THEN** Channels displays as step 11, Cost Structure as step 12, Revenue Streams as step 13, Key Metrics as step 14
