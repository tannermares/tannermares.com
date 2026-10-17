# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Tanner Mares. Static HTML + Tailwind CSS v3 + Alpine.js, deployed to GitHub Pages.

## Commands

- **Dev server:** `yarn start` (concurrent PostCSS watch + BrowserSync with live reload)
- **Build CSS:** `yarn build` (production PostCSS with cssnano minification)
- **Deploy:** push to `main`. The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the CSS and publishes only `index.html`, `favicon.ico`, `assets/img/`, and `main.min.css` to GitHub Pages. The custom domain is set in the repo's Pages settings, not a CNAME file. New top-level files the page loads must be added to the workflow's "Assemble site" step.
- **Format:** `yarn format` (Prettier on HTML files)

## Architecture

Single-page static site with no framework or bundler — just PostCSS for Tailwind compilation.

- `index.html` — The whole site: hero, projects, work, about, contact
- `assets/styles/main.css` — Tailwind directives plus the theme's custom pieces (sun, grid, chrome text, buttons, timeline); compiles to `main.min.css`
- `assets/img/projects/` — App icons for the project cards
- `assets/img/og-image.png` — Social preview image (1200×630); bump the `?v=` in the meta tag when replacing it
- `assets/img/favicon.svg` — Source for the icons; `favicon.png`, `apple-touch-icon.png` (square corners), and root `favicon.ico` are rendered from it with `rsvg-convert`/`magick`
- No local JS; Alpine.js comes from CDN
- `tailwind.config.js` — Custom theme: colors, fonts
- `postcss.config.js` — Tailwind + autoprefixer + cssnano pipeline

## Styling Conventions

- Synthwave / outrun theme: night-sky background, striped sun, neon grid floor, chrome lettering on the hero name only
- Layout and spacing use Tailwind utilities; effects Tailwind can't express (masks, gradients, glows) live as classes in `main.css`
- Color tokens: `night`, `plum`, `dusk` (backgrounds), `magenta`, `sun`, `ember`, `cyan` (neon accents), `haze`, `muted`, `line` (text and borders)
- Fonts: `font-display`/`font-body` (Kanit), `font-script` (Mr Dafoe, hero only) — loaded from Google Fonts
- Icons: Boxicons via CDN (`bx bxl-*` classes)
- Container is centered with 1rem padding (`container` class in tailwind config)
- Rebuild `main.min.css` after changing classes in HTML; it's committed and served directly

## Alpine.js Patterns

- Mobile menu toggle via `x-data="{ mobileMenu: false }"` on `<body>`
- Navigation uses plain `#anchor` links with CSS smooth scrolling (`scroll-margin-top` clears the sticky nav)
- No custom Alpine components or stores
