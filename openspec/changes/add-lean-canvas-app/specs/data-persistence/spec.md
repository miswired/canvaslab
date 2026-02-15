## ADDED Requirements

### Requirement: Auto-Save to localStorage
The application SHALL automatically save all canvas data to localStorage after each input change, with a debounce of 300ms to avoid excessive writes.

#### Scenario: Auto-save on typing
- **WHEN** the user types in any section and pauses for 300ms
- **THEN** the complete canvas state is saved to localStorage under the key `leancanvas_data`
- **AND** a "Saved" indicator is briefly shown

#### Scenario: Data restored on page load
- **WHEN** the user reopens the page after previously entering data
- **THEN** all previously entered content is restored into the editor fields

### Requirement: Save Status Indicator
The application SHALL display a save status indicator showing "Saving..." during the debounce period and "Saved" after a successful save.

#### Scenario: Save indicator updates
- **WHEN** the user types in a field
- **THEN** the indicator shows "Saving..."
- **AND** after the debounced save completes, it shows "Saved"

### Requirement: JSON Export
The application SHALL provide an "Export JSON" button that downloads the complete canvas data as a `.json` file.

#### Scenario: User exports canvas
- **WHEN** the user clicks "Export JSON"
- **THEN** a file named `lean-canvas-[title-slug]-[date].json` is downloaded
- **AND** the file contains the complete canvas data in a human-readable JSON format

### Requirement: JSON Import
The application SHALL provide an "Import JSON" button that allows the user to load canvas data from a previously exported `.json` file.

#### Scenario: User imports canvas
- **WHEN** the user clicks "Import JSON" and selects a valid export file
- **THEN** the editor fields are populated with the imported data
- **AND** the imported data is saved to localStorage
- **AND** any previously entered data is replaced (with a confirmation prompt)

#### Scenario: User imports invalid file
- **WHEN** the user selects a file that is not a valid Lean Canvas export
- **THEN** an error message is shown: "Invalid file format. Please select a Lean Canvas JSON export."
- **AND** existing data is not modified
