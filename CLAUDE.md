# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the Project

This project runs with Vite + React.

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
```

There are no test suites or linting tools configured.

## Architecture

**AIR/23** is a single-page editorial website showcasing Air Jordan sneaker history (AJ1-AJ4, 1985-1989). It uses React modules compiled by Vite.

### Key Files

- `index.html` - Vite HTML shell; loads `/src/main.jsx`
- `src/main.jsx` - React entry point and global CSS import
- `src/App.jsx` - app composition and tweak defaults
- `src/components/` - UI components
- `src/data/chapters.js` - `CHAPTERS` data array and `getShoeImage`
- `src/hooks/useReveal.js` - scroll reveal hook
- `styles.css` - all styling; uses CSS custom properties heavily for theming
- `public/` - static assets served at root paths (`logo/...`, `shoes/...`, `MichaelJordan/...`)

### Component Tree

```
App
├── Nav
├── Hero (mouse-parallax shoe)
├── Marquee (scroll-velocity text loop)
├── IntroReveal (4-card stagger grid)
├── Chapter × 4
│   └── ProductStage
├── Final
├── Footer
└── TweaksPanel (draggable floating UI, bottom-right)
```

### Data Model (`src/data/chapters.js`)

`CHAPTERS` is an array of 4 shoe objects, each with:
- Metadata: `key`, `name`, `model`, `year`, `designer`
- `mood` object: CSS variable overrides applied per section (`--mood-bg`, `--mood-fg`, etc.)
- `origin`, `cultural`, `product` objects: narrative text, quotes, and image references
- `variants` array (3 per shoe): `image`, `glow`, `stage`, and a full color palette object used for SVG fallback rendering

### Theming

CSS custom properties (prefixed `--mood-*`, `--aura`, `--glow`) drive per-chapter color themes. Variant swaps animate outgoing/incoming shoe layers and update aura values for ambient radial gradients.

### Animation Patterns

- **Scroll reveals**: `useReveal` hook wraps `IntersectionObserver` (15% threshold)
- **Marquee**: `requestAnimationFrame` loop
- **Color transitions**: CSS transitions on custom properties
- **Shoe swap**: Scale + drift + fade on outgoing layer; reverse on incoming

### Tweaks Panel & Edit Mode

`useTweaks` in `src/components/TweaksPanel.jsx` manages runtime design overrides. The panel communicates with a parent frame via `postMessage` (`__activate_edit_mode`, `__edit_mode_available`, `__edit_mode_set_keys`).

### Sneaker Component Modes

`Sneaker` in `src/components/Sneaker.jsx` renders either a PNG product shot (primary) or an SVG silhouette built from the variant's palette object (fallback). The SVG uses `<linearGradient>` elements driven by palette colors.
