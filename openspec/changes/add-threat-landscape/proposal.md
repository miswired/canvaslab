# Change: Add Threat Landscape Section

## Why
No widely-adopted startup framework systematically addresses competitive legal threats — patent infringement risk, aggressive licensing programs, predatory business tactics, or regulatory capture by incumbents. The Lean Canvas's "Unfair Advantage" faces outward (your moat) but never asks founders to scan inward for threats that could destroy the business before it starts. This is a real gap: patent defense alone averages $1-3M per suit, and programs like Signify's EnabLED have forced 1,500+ companies into mandatory licensing.

CanvasLab should fill this gap by adding a "Threat Landscape" section — a CanvasLab-exclusive extension to the standard Lean Canvas that helps founders systematically identify competitive threats and plan defensive strategies.

## What Changes
- Add two new editor sections after Unfair Advantage: **Threats** (step 9) and **Defensive Strategy** (step 10)
- Shift Channels, Cost Structure, Revenue Streams, Key Metrics to steps 11-14 (14 total)
- Add a new **3rd row** to the printable canvas grid spanning full width, containing both sub-sections in a single "Threat Landscape" cell (split layout, like Cost/Revenue)
- Add help content for both sections with FreshPlate examples, AI prompts, and research tools
- Add `threats` and `defensiveStrategy` keys to the data model with backward-compatible migration
- Visually differentiate the 3rd row as a CanvasLab extension (not standard Lean Canvas)

## Impact
- Affected specs: `canvas-editor`, `canvas-generator`, `help-system`, `data-persistence`
- Affected code: `index.html`, `styles.css`, `app.js`
- Depends on: `add-lean-canvas-app` (must be complete before this change)
- **Not a standard Lean Canvas section** — this is a CanvasLab extension and must be visually distinguished
