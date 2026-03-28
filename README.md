
# Thrust Insights: Analyzing the Economics of Spaceflight

A modern data science web application showcasing interactive analysis of spaceflight economics and launch metrics. Built with React, TypeScript, and Tailwind CSS v4.

## 🚀 Project Overview

Thrust Insights combines a data-driven landing page, interactive dashboard, and methodology documentation. The project demonstrates how Python data science findings can be transformed into a professionally-designed web interface with interactive visualizations.

**Features**:
- Landing page with 4 sections (Hero, Problem, Solution, Key Insights)
- Interactive dashboard with real-time data filtering and Recharts visualizations
- About page with project methodology
- Fully responsive mobile design
- Link to Analysis Repository for transparency on data sourcing

**Data Pipeline**: Raw launch telemetry → Python analysis → JSON export → React Dashboard

## 📋 Tech Stack

**Frontend**:
- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS v4 (with custom CSS properties)
- **Routing**: React Router v7
- **Build Tool**: Vite 6
- **Data Visualization**: Recharts for interactive charts
- **Icons**: Lucide React

**Data Science** (upstream):
- Python for data analysis and processing
- Output: JSON formatted launch data
- Stored in: `src/app/data/launchData.json`

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
│   ├── routes.tsx           # Route configuration
│   ├── pages/
│   │   ├── Landing.tsx      # Main page with 4 hero sections
│   │   ├── About.tsx        # Project background & methodology
│   │   └── Dashboard.tsx    # Interactive data dashboard with Recharts
│   ├── components/
│   │   ├── Navigation.tsx   # Header with smooth scroll + Analysis Repo link
│   │   ├── Footer.tsx       # Footer with social links
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Problem.tsx      # The Data Gap problem statement
│   │   ├── Solution.tsx     # Thrust Insights solution intro
│   │   └── KeyInsights.tsx  # Data visualizations with modals
│   └── data/
│       ├── projectData.ts      # Landing page data
│       └── launchData.ts       # Dashboard launch records (from Python analysis)
├── styles/
│   ├── index.css            # Main stylesheet
│   ├── theme.css            # CSS custom properties
│   ├── Dashboard.css        # Dashboard-specific styles
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

## � Data Pipeline

### Data Sources
- Launch data is obtained through **Python data science analysis**
- Raw data is processed, cleaned, and analyzed
- Results are exported to JSON format

### Data Structure
Processed data is stored as TypeScript modules in `src/app/data/`:

**Landing Page Data** (`projectData.ts`):
```typescript
export const projectData = {
  project_metadata: { /* version, last_updated */ },
  summary_stats: { /* total_launches, success_rate */ },
  market_comparison: [ /* cost comparisons */ ],
  milestones: [ /* timeline events */ ]
}
```

**Dashboard Data** (`launchData.ts`):
```typescript
export const launchData = [
  {
    flightNumber: 1,
    launchSite: "CCAFS",
    orbit: "LEO",
    payloadMass: 3700,
    outcome: 0  // 0 = Failure, 1 = Success
    // ... more fields
  }
  // ... 400+ launch records
]
```

### Why JSON in Code?
- ✅ Version control - track data changes with commits
- ✅ No external API needed - works offline
- ✅ Type safety - TypeScript exports provide autocomplete
- ✅ Fast loading - bundled with the app
- ✅ Transparency - all data is visible in the repository

### Contributing Analysis
To add new data or update existing data:
1. Update your Python analysis
2. Export results to JSON
3. Update `src/app/data/launchData.json` or `projectData.ts`
4. Commit and push
5. Analytics page automatically reflects changes on rebuild

## � Interactive Dashboard

The `/dashboard` page provides real-time analysis of SpaceX launch data:

**Features**:
- **Launch Site Filter** - Select specific launch sites or view all sites
- **Payload Range Slider** - Filter launches by payload mass (in kg)
- **Scatter Chart** - Visualize launch outcomes vs payload mass by orbit type
- **Pie Chart** - Show success rates by launch site or outcome breakdown
- **Stats Cards** - Display key metrics: successful launches, total launches, success rate %
- **Responsive Design** - Scatter chart hidden on mobile for better UX (shows explanatory message)

**Data Interaction**:
```typescript
// Filters work in real-time
const filteredData = launchData.filter(launch =>
  (selectedSite === "All" || launch.launchSite === selectedSite) &&
  launch.payloadMass >= payloadRange[0] &&
  launch.payloadMass <= payloadRange[1]
)
```

## 🔬 Analysis Repository

The **Analysis Repo button** in the navigation bar links to a separate repository containing:
- Python Jupyter notebooks with data science analysis
- Raw data sources and cleaning procedures
- Statistical models and methodology
- Visualization code and explanations
- Literature references and assumptions

This promotes **transparency** - users can trace how all dashboard numbers were derived.

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

- **Landing Page** (`/`) - Hero, Problem, Solution, Key Insights sections
- **Dashboard** (`/dashboard`) - Interactive data visualization & filtering
- **About Page** (`/about`) - Project methodology & background
- **Analysis Repo Button** - Navigation bar link to external repository with detailed Python analysis

Navigation features:
- Smooth scrolling to sections on landing page
- Mobile hamburger menu (hidden on desktop, responsive)
- Analysis Repo button links to external GitHub repository with data science methodology

## 🎯 Development Guidelines

### Styling
- Use Tailwind classes for layout and responsive design
- Use CSS custom properties for colors (defined in `src/styles/theme.css`)
- Default `h1`, `h2`, etc. styles are in `src/styles/theme.css`
- Dashboard has responsive padding and sizing in `src/styles/Dashboard.css`

### TypeScript
- All components are TypeScript (`.tsx` files)
- Data files use `.ts` extension
- Type-safe data structures for launch records and project data

### Responsive Design
- Mobile-first approach using Tailwind breakpoints: `sm:`, `md:`, `lg:`
- Hamburger menu on mobile, full navigation on desktop
- Dashboard scatter chart hidden on mobile (shows explanatory message)
- All cards and layouts adapt to screen size

### Performance
- Tailwind v4 with Vite provides excellent build performance
- CSS is minified at build time (~34.87 kB gzipped)
- JavaScript bundle optimized for production (~772 kB gzipped)
- No external API calls - all data is bundled with the app

## 📦 Dependencies

**Key Dependencies**:
- `react` & `react-dom` - UI library
- `react-router` - SPA routing
- `recharts` - Data visualization
- `lucide-react` - Icon library
- `tailwindcss` - CSS framework
- `typescript` - Type safety
- `vite` - Build tool

**Removed** (unused Figma-generated components):
- ✅ All unused Radix UI components removed
- ✅ `figma/` component folder removed
- ✅ Documentation files cleaned up

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

**Next Steps**:
1. Add your Analysis Repository URL to the Navigation component
2. Deploy to Netlify, Vercel, or Cloudflare Pages
3. Share your dashboard with stakeholders!
  