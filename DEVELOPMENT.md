# Thrust Insights Development Guide

This guide helps you understand the codebase structure and how to add new content, data, and visualizations safely.

## Table of Contents

1. [Project Architecture](#project-architecture)
2. [Working with Components](#working-with-components)
3. [Managing Data](#managing-data)
4. [Styling & Theme](#styling--theme)
5. [Adding Visualizations](#adding-visualizations)
6. [Common Tasks](#common-tasks)
7. [TypeScript Basics for JavaScript Developers](#typescript-basics-for-javascript-developers)
8. [Troubleshooting](#troubleshooting)

---

## Project Architecture

### React + TypeScript Basics

**React** is a JavaScript library for building UIs with reusable components. **TypeScript** adds type safety — it catches errors at compile time instead of runtime.

Basic component pattern:
```typescript
import { ComponentType } from 'react';

export function MyComponent() {
  return <div>Hello</div>;
}
```

### Routing Structure

Routes are defined in `src/app/routes.tsx`:
```typescript
export const router = createBrowserRouter([
  { path: "/", Component: Landing },
  { path: "/about", Component: About },
]);
```

This creates:
- **`/`** → Landing page (all 4 hero sections)
- **`/about`** → About page

### Landing Page Sections

The landing page (`src/app/pages/Landing.tsx`) is composed of 5 stacked sections:

```
Landing
├── Navigation (fixed header)
├── Hero (main headline)
├── Problem (data gap statement)
├── Solution (Thrust Insights intro)
├── KeyInsights (visualizations & data)
└── Footer (social links)
```

Each section is a separate component file in `src/app/components/`.

---

## Working with Components

### Component File Structure

Every component file has this basic structure:

```typescript
// 1. Imports at the top
import { ComponentType } from 'react';

// 2. Component definition
export function MyComponent() {
  // 3. JSX return statement
  return (
    <div className="bg-[#1A1F2B] p-6">
      <h2>My Content</h2>
    </div>
  );
}
```

### Example: Modifying Hero Section

File: `src/app/components/Hero.tsx`

```typescript
export function Hero() {
  return (
    <section className="min-h-screen bg-[#0B0E14] flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold text-[#F8FAFC] mb-6">
          Your headline here
        </h1>
        <p className="text-xl text-[#94A3B8]">
          Your subheading here
        </p>
      </div>
    </section>
  );
}
```

**What to change:**
- `<h1>...</h1>` — Main headline
- `<p>...</p>` — Secondary text
- className values — Keep `bg-[#0B0E14]` for background colors but can adjust layout classes

### Adding New Components

Create `src/app/components/NewComponent.tsx`:

```typescript
interface NewComponentProps {
  title: string;
  content: string;
}

export function NewComponent({ title, content }: NewComponentProps) {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0B0E14] to-[#1A1F2B]">
      <h2 className="text-4xl font-bold text-[#F8FAFC]">{title}</h2>
      <p className="text-[#94A3B8]">{content}</p>
    </section>
  );
}
```

Then import it in `Landing.tsx`:
```typescript
import { NewComponent } from "../components/NewComponent";

export function Landing() {
  return (
    <div>
      <Navigation />
      <Hero />
      <NewComponent title="Title" content="Content" />
      {/* ... */}
    </div>
  );
}
```

---

## Managing Data

### Data Storage

All project data lives in `src/app/data/projectData.ts`:

```typescript
export const projectData = {
  project_metadata: {
    name: "Thrust Insights Analytics",
    version: "1.0.0",
    last_updated: "March 2026"
  },
  summary_stats: {
    total_launches: 312,
    overall_success_rate: "98.4%",
    boosters_recovered: 264
  },
  // ... more data
};
```

**Why this approach?**
- No external API needed
- Data loads instantly
- Easy to version with Git
- Static typing with TypeScript

### Updating Data

Example: Change success rate

```typescript
// Before
overall_success_rate: "98.4%"

// After
overall_success_rate: "99.2%"
```

### Using Data in Components

```typescript
import { projectData } from '../data/projectData';

export function MyComponent() {
  const stats = projectData.summary_stats;
  
  return (
    <div>
      <p>Total Launches: {stats.total_launches}</p>
      <p>Success Rate: {stats.overall_success_rate}</p>
    </div>
  );
}
```

### Adding New Data Fields

If you add a new Jupyter visualization metric:

```typescript
export const projectData = {
  // ... existing data
  new_visualization_data: [
    { x: 2015, y: 10 },
    { x: 2016, y: 25 },
    // ... more data points
  ]
};
```

Then use it in a component:
```typescript
import { projectData } from '../data/projectData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

export function MyVisualization() {
  return (
    <LineChart data={projectData.new_visualization_data}>
      <CartesianGrid stroke="#94A3B8"/>
      <XAxis dataKey="x" />
      <YAxis />
      <Line type="monotone" dataKey="y" stroke="#FF5C00" />
    </LineChart>
  );
}
```

---

## Styling & Theme

### CSS Custom Properties (Variables)

Defined in `src/styles/theme.css`:

```css
:root {
  --deep-space: #0B0E14;
  --ignition-orange: #FF5C00;
  --stellar-white: #F8FAFC;
  /* ... more colors */
}
```

Use in inline Tailwind classes:
```tsx
<button className="bg-[#FF5C00] text-[#F8FAFC]">
  Click Me
</button>
```

### Color Palette Guide

| Name | Usage | CSS Class |
|------|-------|-----------|
| Deep Space | Background sections | `bg-[#0B0E14]` |
| Command Slate | Cards & containers | `bg-[#1A1F2B]` |
| Ignition Orange | Buttons & CTAs | `text-[#FF5C00]` or `bg-[#FF5C00]` |
| Orbit Blue | Data accents | `text-[#00A3FF]` |
| Stellar White | Primary text | `text-[#F8FAFC]` |
| Nebula Gray | Secondary text | `text-[#94A3B8]` |

### Responsive Design

Tailwind breakpoints:
```tsx
<div className="text-lg md:text-2xl lg:text-4xl">
  {/* text-lg on mobile, text-2xl on tablets+, text-4xl on desktops */}
</div>
```

### Typography

Default heading styles are in `theme.css`. All `<h1>`, `<h2>`, etc. use those styles. Don't need custom Tailwind font classes.

---

## Adding Visualizations

### From Jupyter Notebooks

When you export charts from your Jupyter project:

**Option 1: Static Images**
```bash
# In Jupyter
import matplotlib.pyplot as plt
plt.savefig('chart.png', dpi=300)
```

Place in `public/` folder and reference:
```tsx
<img src="/chart.png" alt="Chart title" className="w-full rounded-lg"/>
```

**Option 2: Recharts (Already Installed)**

Create a reusable chart component:
```typescript
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

export function LaunchChart() {
  const data = [
    { year: 2015, launches: 12 },
    { year: 2016, launches: 18 },
    { year: 2017, launches: 25 },
    { year: 2023, launches: 96 },
  ];

  return (
    <LineChart data={data} width={600} height={300}>
      <CartesianGrid stroke="#94A3B8" />
      <XAxis dataKey="year" stroke="#94A3B8" />
      <YAxis stroke="#94A3B8" />
      <Line type="monotone" dataKey="launches" stroke="#FF5C00" strokeWidth={2} />
    </LineChart>
  );
}
```

**Option 3: Plotly HTML**

Export from Jupyter as HTML and embed:
```tsx
<div className="bg-[#1A1F2B] p-6 rounded-lg">
  <iframe 
    src="/plot.html" 
    width="100%" 
    height="500"
    frameBorder="0"
  ></iframe>
</div>
```

---

## Common Tasks

### Task 1: Update Hero Headline

File: `src/app/components/Hero.tsx`

```tsx
// Find this line
<h1 className="text-5xl font-bold text-[#F8FAFC] mb-6">
  Beyond the Smoke: Decoding the Economics of the New Space Race
</h1>

// Change to your new headline
<h1 className="text-5xl font-bold text-[#F8FAFC] mb-6">
  Your new headline
</h1>
```

### Task 2: Add a New Section Below Key Insights

Edit `src/app/pages/Landing.tsx`:

```tsx
import { MyNewSection } from "../components/MyNewSection";

export function Landing() {
  return (
    <div className="min-h-screen bg-[#0B0E14]">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <KeyInsights />
      <MyNewSection />  {/* Add here */}
      <Footer />
    </div>
  );
}
```

Then create `src/app/components/MyNewSection.tsx`.

### Task 3: Change CTA Button Color

Button styling is in `src/app/components/Navigation.tsx`. Look for the CTA button class:

```tsx
<button className="bg-[#FF5C00] hover:bg-[#FF7C2A] text-[#F8FAFC] px-6 py-3 rounded-lg font-semibold">
  Get Started
</button>
```

Change `bg-[#FF5C00]` to any color from the palette.

### Task 4: Update About Page Content

File: `src/app/pages/About.tsx`

Simply edit the text content — it's a standard React component. The structure is already there.

---

## TypeScript Basics for JavaScript Developers

If you're coming from JavaScript, TypeScript adds type annotations. Here's what you need to know:

### Basic Types

```typescript
// Primitives
const name: string = "Scott";
const age: number = 22;
const active: boolean = true;

// Arrays
const numbers: number[] = [1, 2, 3];
const names: Array<string> = ["Alice", "Bob"];

// Objects
interface User {
  name: string;
  age: number;
}

const user: User = { name: "Scott", age: 22 };

// Functions
function greet(name: string): string {
  return `Hello, ${name}`;
}

const add = (a: number, b: number): number => a + b;
```

### React Component Props

```typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
}

export function CustomButton({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
```

### Key Difference: TypeScript Catches Errors

**JavaScript** (fails at runtime):
```javascript
function greet(name) {
  return name.toUpperCase();  // Error if name is null
}
greet(null);  // ❌ Error happens when code runs
```

**TypeScript** (catches before running):
```typescript
function greet(name: string): string {
  return name.toUpperCase();
}
greet(null);  // ❌ Error caught by TypeScript compiler
```

### Using External Libraries

When you `npm install` a library, TypeScript needs type definitions. Most modern libraries include them. If not:

```bash
npm install --save-dev @types/library-name
```

For example: `npm install --save-dev @types/node`

### Type Inference

You don't always need to write types — TypeScript infers them:

```typescript
const count = 5;  // TypeScript knows count is a number
const user = { name: "Scott" };  // TypeScript knows the shape

count.toUpperCase();  // ❌ Error — count is number, not string
```

---

## Troubleshooting

### Problem: "Cannot find module..." error

**Solution**: Check import path is correct:
```typescript
// ❌ Wrong
import { projectData } from '../../data/projectData.ts';

// ✅ Correct (no .ts extension)
import { projectData } from '../../data/projectData';
```

### Problem: Build fails with TypeScript errors

Run the type checker:
```bash
npx tsc --noEmit
```

This shows all TypeScript errors. Fix them before rebuilding.

### Problem: Tailwind classes not working

Make sure you're using the correct syntax:
```tsx
{/* ❌ Wrong */}
<div className="text-size-lg">

{/* ✅ Correct */}
<div className="text-lg">
```

For custom colors, use bracket notation:
```tsx
<div className="text-[#FF5C00]">  {/* Custom color */}
<div className="text-orange-500"> {/* Tailwind color */}
```

### Problem: "React is not defined" error

Add the import:
```typescript
import { ComponentType, ReactNode } from 'react';
```

Actually, modern React doesn't need this in `.tsx` files, so this error is rare.

### Problem: Data not showing in component

1. Check import path: `import { projectData } from '../data/projectData';`
2. Check key exists: `projectData.summary_stats.total_launches`
3. Check component renders: Add `console.log(projectData)` to debug

---

## Running Commands

```bash
# Install dependencies (run once)
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Check for TypeScript errors
npx tsc --noEmit

# Check for security vulnerabilities
npm audit
```

---

## Need Help?

1. **React questions**: [react.dev](https://react.dev)
2. **TypeScript questions**: [typescriptlang.org](https://www.typescriptlang.org)
3. **Tailwind CSS**: Check [tailwindcss.com](https://tailwindcss.com)
4. **Component patterns**: Look at existing components in `src/app/components/`

Good luck with your project! 🚀
