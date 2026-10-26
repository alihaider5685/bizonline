# Development Guide

## Requirements
Node.js 24, npm 11, Git.

## Commands (run in the project folder)
- npm install        : install packages
- npm run dev        : start the app at http://localhost:3000
- npm run lint       : check code style and common mistakes
- npx tsc --noEmit   : check TypeScript types
- npm run build      : make a production build

## Folders
- src/app                 : pages and routes
- src/components/layout   : sidebar and header
- src/components/ui       : reusable pieces (cards, badges)
- src/components/charts   : charts
- src/modules             : business logic per module (planned)
- src/lib                 : shared helpers
- src/mock-data           : DEMO data only (Phase 2)
- docs                    : planning and guides
- tests                   : automated tests (planned)

## Rules
- Never commit secrets. Use .env.local (ignored by Git) and keep an .env.example.
- Use dummy data only. No real company or customer data.
- Mock data is clearly labelled "Demo" on screen.