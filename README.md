
# Thrust Insights: Analyzing the Economics of Spaceflight

A modern data science landing page showcasing analysis of spaceflight economics and launch metrics. Built with React, TypeScript, and Tailwind CSS v4.

## 🚀 Project Overview

Thrust Insights presents compelling data visualizations and insights about rocket launch costs, reliability scaling, and the economic impact of reusable booster technology. This project demonstrates how data science findings can be communicated through an engaging, professionally-designed web interface.

**Project**: Data science analysis of spaceflight economics

## 📋 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS v4 (with custom CSS properties)
- **Routing**: React Router v7
- **Build Tool**: Vite 6
- **Data Visualization**: Recharts
- **Icons**: Lucide React
- **UI Components**: Custom components + Radix UI primitives

## 🎨 Design System

The project uses a cohesive space-themed color palette with custom CSS variables:

| Color | Usage | Hex Value |
|-------|-------|-----------|
| Deep Space | Background | `#0B0E14` |
| Command Slate | Cards/Surfaces | `#1A1F2B` |
| Stellar White | Primary Text | `#F8FAFC` |
| Nebula Gray | Body Text | `#94A3B8` |
| Ignition Orange | CTAs/Highlights | `#FF5C00` |
| Orbit Blue | Data Accents | `#00A3FF` |
| Stable Green | Success Metrics | `#10B981` |

All colors are defined as CSS custom properties in `src/styles/theme.css`.

## 📁 Project Structure

```
src/
├── app/
│   ├── App.tsx              # Router setup
│   ├── routes.tsx           # Route configuration (Landing, About)
│   ├── pages/
│   │   ├── Landing.tsx      # Main page with 4 hero sections
│   │   └── About.tsx        # Project background & methodology
│   ├── components/
│   │   ├── Navigation.tsx   # Header with smooth scroll links
│   │   ├── Footer.tsx       # Footer with social links
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Problem.tsx      # The Data Gap problem statement
│   │   ├── Solution.tsx     # Thrust Insights solution intro
│   │   ├── KeyInsights.tsx  # Data visualizations
│   │   └── ui/              # Radix UI component library
│   └── data/
│       └── projectData.ts   # Falcon-9 launch data (TypeScript module)
├── styles/
│   ├── index.css            # Main stylesheet
│   ├── theme.css            # CSS custom properties
│   ├── fonts.css            # Font imports
│   └── tailwind.css         # Tailwind directives
└── main.tsx                 # React entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The development server runs at `http://localhost:5173` by default.

## 📝 Data Structure

Data is stored as a TypeScript module (not via external API) in `src/app/data/projectData.ts`:

```typescript
export const projectData = {
  project_metadata: { /* ... */ },
  summary_stats: { /* ... */ },
  market_comparison: [ /* ... */ ],
  milestones: [ /* ... */ ]
}
```

This approach allows you to:
- Import data directly in components
- Version control all data with the code
- Avoid external API dependencies
- Update data without server changes

## 🔄 Workflow: Adding Content

### 1. Update Section Content
Edit the relevant component file:
- `src/app/components/Hero.tsx` - Hero section messaging
- `src/app/components/Problem.tsx` - Problem statement
- `src/app/components/Solution.tsx` - Solution description
- `src/app/components/KeyInsights.tsx` - Insights & visualizations

### 2. Add/Update Data
Modify `src/app/data/projectData.ts` with new data:
```typescript
export const projectData = {
  // ... existing data
  new_metric: { /* your data */ }
}
```

### 3. Use Data in Components
Import and use in any component:
```typescript
import { projectData } from '../data/projectData';

export function MyComponent() {
  return <div>{projectData.summary_stats.total_launches}</div>;
}
```

## 📊 Adding Visualizations

When ready to integrate Jupyter Notebook visualizations:

1. **Export from Jupyter**: Use `matplotlib.savefig()` or `plotly.to_html()`
2. **Place in Public**: Save charts to `public/` directory
3. **Reference in Components**: Import as images or embed HTML

Example:
```typescript
import { projectData } from '../data/projectData';

export function MyChart() {
  return (
    <div className="bg-[#1A1F2B] rounded-lg p-6">
      <img 
        src="/data.json" 
        alt="Chart description" 
        className="w-full"
      />
    </div>
  );
}
```

## 🌐 Navigation & Routing

The site uses **smooth scroll** for sections on the landing page and **React Router** for page navigation:

- **Landing Page** (`/`) - Hero, Problem, Solution, Key Insights
- **About Page** (`/about`) - Project methodology & background

Navigation uses `onClick` handlers with `scrollIntoView()` for smooth scrolling to section IDs.

## 🎯 Development Guidelines

### Styling
- Use Tailwind classes for layout and responsive design
- Use CSS custom properties for colors (defined in `theme.css`)
- No custom font-size/weight/line-height Tailwind classes (use theme.css)
- Default `h1`, `h2`, etc. styles are in `theme.css`

### TypeScript
- All components are TypeScript (`.tsx`/`.ts` files)
- You can add JavaScript if needed (though all files here use TypeScript)
- Install `@types/*` packages for any third-party libraries

### Performance
- Tailwind v4 with Vite provides excellent build performance
- CSS is minified at build time
- JavaScript bundle is optimized for production

## 📦 Dependency Notes

Some unused Figma-generated dependencies exist (e.g., `@mui/material`, `@emotion/react`). These can be removed if not needed, but are harmless for now while you're developing.

## 🔐 Security

- ✅ All npm vulnerabilities fixed (as of latest audit)
- Build process verified
- TypeScript catches many errors at compile time

## 📤 Deployment

When ready to deploy:

### SEO Meta Tags (add to `index.html`)
```html
<meta name="description" content="Analyzing Falcon-9 reusability economics">
<meta property="og:title" content="Thrust Insights">
<meta property="og:description" content="...">
<meta property="og:image" content="">
```

### GitHub Setup
```bash
git init
git add .
git commit -m "Initial commit: Thrust Insights landing page"
git remote add origin https://github.com/yourusername/thrust-insights.git
git push -u origin main
```

### Hosting Options
- **Netlify**: Connect Git repo, auto-deploys on push
- **Cloudflare Pages**: Similar GitHub integration
- **Vercel**: Optimized for React projects

Deploy command:
```bash
npm run build  # Creates optimized build in /dist
```

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [React Router](https://reactrouter.com/)
- [Vite Guide](https://vitejs.dev/guide/)

## 📝 License

This project is for portfolio purposes.

---

**Questions?** Check the [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md) for additional technical details.
  