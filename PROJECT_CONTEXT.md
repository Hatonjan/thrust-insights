# Project Context: Thrust Insights Landing Page

## Overview
This is a data science project landing page presenting findings about Falcon-9 launch rockets and their reusability economics. Built with React, TypeScript, Tailwind CSS v4, and React Router.

## Tech Stack
- React 18 with TypeScript
- Tailwind CSS v4 (note: using v4, not v3)
- React Router (react-router package, NOT react-router-dom)
- Vite for bundling
- Recharts for data visualizations
- Lucide React for icons

## Design System - Space Theme Color Palette
**CRITICAL: Use these exact color values throughout the project**

- Deep Space (Background): `#0B0E14`
- Command Slate (Surfaces/Cards): `#1A1F2B`
- Stellar White (Primary Text): `#F8FAFC`
- Nebula Gray (Body Text): `#94A3B8`
- Ignition Orange (Accents/CTAs): `#FF5C00`
- Orbit Blue (Data Accents): `#00A3FF`
- Stable Green (Success Metrics): `#10B981`

These colors are defined as CSS custom properties in `/src/styles/theme.css`.

## Project Structure

### Main Pages (React Router)
1. **Landing Page** (`/`) - 4 sections:
   - Hero: "Beyond the Smoke: Decoding the Economics of the New Space Race"
   - Problem: "The Data Gap" in space telemetry
   - Solution: "Thrust Insights" Python statistical modeling intro
   - Key Insights: Reliability scaling, reusability dividends, payload evolution

2. **About Page** (`/about`) - Project background and methodology

### Key Files
- `/src/app/App.tsx` - RouterProvider setup
- `/src/app/routes.tsx` - Route configuration
- `/src/app/pages/Home.tsx` - Landing page with all 4 sections
- `/src/app/pages/About.tsx` - About page
- `/src/app/components/` - Reusable components (Navigation, Footer, etc.)
- `/src/app/data/projectData.ts` - **TypeScript module** containing all Falcon-9 launch data (exported as default object, NOT fetched via API)
- `/src/styles/theme.css` - CSS custom properties for color palette
- `/src/styles/fonts.css` - Font imports (Inter font family)

## Data Structure
The project uses data in `/src/app/data/projectData.ts` which contains:
- Launch statistics
- Reusability metrics
- Payload data
- Success rates
- Cost analysis

**Important**: Data is imported as a TypeScript module:
```typescript
import projectData from '../data/projectData';