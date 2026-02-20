## ADDED Requirements

### Requirement: Threat Landscape Data Persistence
The canvas data model SHALL include `threats` and `defensiveStrategy` section keys with the same `{ content: '' }` structure as existing sections.

Existing saved canvases missing these keys SHALL be migrated by adding empty defaults on load, preserving all existing data unchanged.

Exported JSON SHALL include the `threats` and `defensiveStrategy` section data. Imported JSON files missing these keys SHALL be handled gracefully with empty defaults.

#### Scenario: New fields saved and restored
- **WHEN** the user enters text in the Threats or Defensive Strategy sections
- **THEN** the data is auto-saved to localStorage and restored on page reload

#### Scenario: Existing canvas migrated on load
- **WHEN** the user loads a canvas saved before this feature existed
- **THEN** empty `threats` and `defensiveStrategy` sections are added automatically
- **AND** all existing section data is preserved unchanged

#### Scenario: Export includes threat landscape data
- **WHEN** the user exports a canvas to JSON
- **THEN** the exported file includes `threats` and `defensiveStrategy` section data

#### Scenario: Import without threat landscape data
- **WHEN** the user imports a JSON file that does not contain `threats` or `defensiveStrategy` keys
- **THEN** the import succeeds with empty defaults for the missing fields
- **AND** all other imported data is loaded normally
