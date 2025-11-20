# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **Assured Landing** - a cyber insurance marketing website built as a single-page React application with a Node.js/Express server. The design is inspired by Firecrawl's aesthetic with a dark theme featuring purple accents (#8363e9), sharp edges (no border-radius), and a modular grid system with visible borders (using Black tints from #1a1a19 spectrum).

## Development Commands

### Development
```bash
pnpm dev              # Start Vite dev server on port 3000 (with --host flag)
```

### Building
```bash
pnpm build            # Build frontend with Vite + bundle server with esbuild
pnpm start            # Start production server (NODE_ENV=production)
pnpm preview          # Preview production build
```

### Code Quality
```bash
pnpm check            # Run TypeScript type checking (tsc --noEmit)
pnpm format           # Format code with Prettier
```

## Architecture

### Project Structure

```
assured-landing/
├── client/                    # Frontend React application
│   └── src/
│       ├── App.tsx           # Root component with ThemeProvider, ErrorBoundary, Router
│       ├── main.tsx          # Entry point
│       ├── index.css         # Global styles with CSS variables and Tailwind
│       ├── pages/            # Page components (Home, NotFound)
│       ├── components/       # Reusable React components
│       │   ├── ui/          # shadcn/ui component library
│       │   ├── Map.tsx      # Google Maps component
│       │   ├── ManusDialog.tsx
│       │   └── ErrorBoundary.tsx
│       ├── contexts/         # React contexts (ThemeContext)
│       ├── hooks/           # Custom hooks
│       └── lib/             # Utilities
├── server/                   # Backend Express server
│   └── index.ts             # Simple static file server + client-side routing
├── shared/                   # Shared code between client/server
│   └── const.ts
└── public/                   # Static assets (logos, SVG patterns)
```

### Build System

- **Frontend**: Vite + React + TypeScript
- **Backend**: esbuild bundles `server/index.ts` → `dist/index.js` (ESM format)
- **Output**: `dist/public/` contains frontend build, `dist/index.js` is server entry
- **Module System**: ESM throughout (type: "module" in package.json)

### Routing

- **Client**: `wouter` library for client-side routing (not React Router)
- **Server**: Express serves static files + catch-all route for client-side routing
- Routes defined in `client/src/App.tsx`

### Styling System

- **Framework**: Tailwind CSS v4 with `@tailwindcss/vite` plugin
- **Design System**: shadcn/ui components with Radix UI primitives
- **Theme**: Dark mode only (defaultTheme="dark" in ThemeProvider)
- **CSS Variables**: Defined in `index.css` using OKLCH color space
- **Key Design Principles**:
  - Max width: 1112px for all content containers
  - No border-radius (sharp edges everywhere)
  - Border color: Black tints from #1a1a19 spectrum (approx #484847)
  - Primary purple: oklch(0.58 0.22 290) / #8363e9
  - Modular grid system with vertical lines at container edges

### Typography

Three custom fonts from Google Fonts:
1. **Inter** - Body text and general content
2. **Stack Sans Headline** - Primary headings (h1, h2, h3, h4)
3. **Stack Sans Notch** - Secondary labels (ALL CAPS, small accent text)

### Path Aliases

Configured in both `tsconfig.json` and `vite.config.ts`:
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets/*` → `attached_assets/*`

### Package Manager

**pnpm** (v10.4.1+) with:
- Patched dependency: `wouter@3.7.1`
- Override: `tailwindcss>nanoid` pinned to 3.3.7

## Design System Details

### Color Palette (Dark Mode)
- Background: `oklch(0.107 0.002 60)` - Black (#1a1a19)
- Foreground: `oklch(0.97 0 0)` - Near white
- Primary: `oklch(0.58 0.22 290)` - Purple (#8363e9)
- Border: `oklch(0.28 0.00005 60 / 0.7)` - Black tint (#484847 with transparency)

### Grid System
- Fixed vertical lines at left/right edges of 1112px container
- Horizontal borders between major sections
- Section numbers (01, 02, 03...) positioned on left side
- No rounded corners anywhere (border-radius removed from all components)

### Special Effects
- Purple glow on buttons (shadow-purple-glow)
- Gradient text for hero headlines (text-gradient-purple)
- Animated background grids (hero-grid, hero-glow classes)
- SVG pattern decorations at low opacity

## Component Library

Uses **shadcn/ui** with Radix UI primitives. Components are in `client/src/components/ui/`. Common components include:
- Button, Card, Dialog, Tabs, Tooltip
- Form components (Input, Select, Checkbox, etc.)
- Layout components (Accordion, Collapsible, Separator)

## Key Technical Notes

### Vite Configuration
- Root: `client/` directory
- Build output: `dist/public/`
- Allowed hosts include Manus Computer domains (appears to be deployment platform)
- Strict filesystem access with deny rules for dotfiles

### Server Configuration
- Simple Express server that:
  1. Serves static files from `dist/public`
  2. Handles all routes with `index.html` (for client-side routing)
- Default port: 3000 (configurable via PORT env var)

### TypeScript Configuration
- Strict mode enabled
- Module resolution: "bundler"
- Includes: client/src, shared, server
- JSX: preserve (handled by Vite)

### Special Plugins
- `@builder.io/vite-plugin-jsx-loc` - JSX location tracking
- `vite-plugin-manus-runtime` - Manus platform integration
- `tw-animate-css` - Additional Tailwind animations

### Animations

**Unicorn Studio**: Interactive WebGL animations integrated via `unicornstudio-react` package.

There are two ways to use Unicorn Studio animations:

**Option 1 - Hosted Projects (using projectId):**
```tsx
import UnicornAnimation from "@/components/UnicornAnimation";

<UnicornAnimation
  projectId="YOUR_PROJECT_EMBED_ID"
  width={800}
  height={600}
  className="absolute inset-0"
/>
```

**Option 2 - JSON Export (recommended for this project):**
```tsx
import UnicornAnimation from "@/components/UnicornAnimation";

<UnicornAnimation
  jsonFilePath="/your-animation.json"
  className="absolute inset-0 opacity-30 pointer-events-none"
/>
```

To add a JSON animation:
1. Create an animation at https://www.unicorn.studio/
2. Export > Code (JSON)
3. Save the JSON file in `client/public/` directory
4. Reference it with `jsonFilePath="/filename.json"`

**Current Animations:**
- `assured-background.json` - Footer background animation (100% opacity, z-0)
- `what-we-do-background.json` - "What We Do" section right column (fills the right grid column)

## Design Philosophy

The site follows a "modular grid" aesthetic inspired by Firecrawl:
- Everything sits within a 1112px container
- Sharp edges create a technical, precise feel
- Purple accents provide visual interest against dark background
- Grid lines create structure without cluttering
- Generous whitespace between sections
- Section numbers provide wayfinding

When adding new sections or components, maintain this grid system and visual language.
