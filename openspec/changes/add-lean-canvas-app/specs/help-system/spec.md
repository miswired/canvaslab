## ADDED Requirements

### Requirement: Per-Section Help Toggle
Each canvas section SHALL have a help toggle button (e.g., "?" icon) that expands/collapses an inline help panel below the section header.

#### Scenario: User opens help for Problem section
- **WHEN** the user clicks the "?" button on the Problem section
- **THEN** a help panel expands below the section header
- **AND** the panel contains: description, how-to guidance, example text, reference links, and tool links

#### Scenario: User closes help
- **WHEN** the user clicks the "?" button again on an open help panel
- **THEN** the help panel collapses

### Requirement: Help Content Structure
Each section's help panel SHALL contain the following subsections:
1. **What** — 1-2 sentence description of the section's purpose
2. **How to Fill It Out** — Step-by-step practical guidance
3. **Example** — Concrete example text (for a fictional startup, consistent across all sections)
4. **References** — Links to Ash Maurya's articles, "Running Lean" resources, and other authoritative guides
5. **Research Tools** — Links to free tools that help research this section (e.g., Google Trends for Customer Segments, competitive analysis tools for Existing Alternatives)

#### Scenario: Help content is comprehensive
- **WHEN** the user opens help for any section
- **THEN** all 5 subsections (What, How, Example, References, Tools) are present and populated

### Requirement: Consistent Example Startup
All example text across all 9 sections SHALL use the same fictional startup to demonstrate how sections connect and reinforce each other. This helps users understand how the canvas works as a cohesive system.

#### Scenario: Examples are consistent
- **WHEN** the user reads the example for Problem
- **AND** then reads the example for Solution
- **THEN** the Solution example directly addresses the problems described in the Problem example

### Requirement: Help Panels Hidden in Print
Help panels SHALL NOT appear in printed output, regardless of their open/closed state in the editor.

#### Scenario: Help panels excluded from print
- **WHEN** the user prints while help panels are open
- **THEN** the printed output does not include any help panel content
