# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the Project

No build step required. Open `index.html` directly in a modern browser. React 18, Babel (JSX transpilation), and all dependencies load from CDN at runtime.

There are no npm scripts, test suites, or linting tools configured.

## Architecture

**AIR/23** is a single-page editorial website showcasing Air Jordan sneaker history (AJ1–AJ4, 1985–1989). It uses React via CDN with in-browser Babel transpilation — no bundler.

### Key Files

- `index.html` — entry point; also stores the default tweaks JSON between `EDITMODE-BEGIN` / `EDITMODE-END` markers
- `app.jsx` — all React components (Cursor, Nav, Hero, Marquee, IntroReveal, Chapter, Final, Footer) and the `useTweaks` hook
- `sneakers.jsx` — `CHAPTERS` data array + `Sneaker` display component
- `tweaks-panel.jsx` — floating settings panel with toggle/slider/radio/color controls
- `styles.css` — all styling (~1000 lines); uses CSS custom properties heavily for theming

### Component Tree

```
App
├── Cursor (dual-ring custom pointer + interaction labels via data-cursor attrs)
├── Nav
├── Hero (mouse-parallax shoe)
├── Marquee (scroll-velocity text loop)
├── IntroReveal (4-card stagger grid)
├── Chapter × 4  (one per sneaker: Origin / Cultural / Product moments)
└── TweaksPanel (draggable floating UI, bottom-right)
```

### Data Model (`sneakers.jsx`)

`CHAPTERS` is an array of 4 shoe objects, each with:
- Metadata: `key`, `name`, `model`, `year`, `designer`
- `mood` object: CSS variable overrides applied per section (`--mood-bg`, `--mood-fg`, etc.)
- `origin`, `cultural`, `product` objects: narrative text, quotes, and image references
- `variants` array (3 per shoe): `image`, `glow`, `stage`, and a full color palette object used for SVG fallback rendering

### Theming

CSS custom properties (prefixed `--mood-*`, `--aura`, `--glow`) drive per-chapter color themes. Variant swaps animate outgoing/incoming shoe layers and update `--aura` for ambient radial gradients.

### Animation Patterns

- **Scroll reveals**: `useReveal` hook wraps `IntersectionObserver` (15% threshold)
- **Cursor / marquee**: `requestAnimationFrame` loops
- **Color transitions**: CSS transitions on custom properties
- **Shoe swap**: Scale + drift + fade on outgoing layer; reverse on incoming

### Tweaks Panel & Edit Mode

`useTweaks` in `app.jsx` manages runtime design overrides (cursor on/off, smooth scroll, etc.). The panel communicates with a parent frame via `postMessage` (`__activate_edit_mode`, `__edit_mode_available`, `__edit_mode_set_keys`). Default values are persisted in `index.html` between the `EDITMODE-BEGIN` / `EDITMODE-END` comment markers.

### Sneaker Component Modes

`Sneaker` in `sneakers.jsx` renders either a PNG product shot (primary) or an SVG silhouette built from the variant's palette object (fallback). The SVG uses `<linearGradient>` / `<radialGradient>` elements driven by palette colors.
