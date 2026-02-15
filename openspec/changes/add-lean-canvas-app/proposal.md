# Change: Add Lean Canvas Web Application

## Why
Entrepreneurs need a simple, free, offline-capable tool to think through business ideas using Ash Maurya's Lean Canvas framework. Existing tools are either paywalled, require accounts, or lack educational guidance. This tool combines an editable canvas editor with built-in help content and a polished printable output — all in a zero-dependency, open-in-browser HTML/CSS/JS application.

## What Changes
- Create the complete Lean Canvas web application from scratch (greenfield project)
- **Canvas Editor**: Interactive form with editable sections for all 9 Lean Canvas boxes (plus sub-sections: Existing Alternatives, Early Adopters, High-Level Concept)
- **Canvas Generator**: "Generate Canvas" button that renders a visually appealing, printable 1-page chart (US Letter landscape)
- **Theme System**: Multiple visual themes (light, dark, and additional options) selectable by the user
- **Data Persistence**: Auto-save to localStorage, plus JSON export/import for backup and sharing
- **Help System**: Expandable help content for each section with descriptions, how-to guidance, example text, links to references, and links to research tools

## Impact
- Affected specs: All new (canvas-editor, canvas-generator, theme-system, data-persistence, help-system)
- Affected code: `index.html`, `styles.css`, `app.js` (all new files)
- No existing code affected (greenfield)
