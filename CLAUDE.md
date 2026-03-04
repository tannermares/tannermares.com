# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Tanner Mares. Static HTML + Tailwind CSS v3 + Alpine.js, deployed to GitHub Pages.

## Commands

- **Dev server:** `yarn start` (concurrent PostCSS watch + BrowserSync with live reload)
- **Build CSS:** `yarn build` (production PostCSS with cssnano minification)
- **Deploy:** `yarn deploy` (builds then pushes to gh-pages branch)
- **Format:** `yarn format` (Prettier on HTML files)

## Architecture

Single-page static site with no framework or bundler — just PostCSS for Tailwind compilation.

- `index.html` — Main portfolio page (hero, about, work experience, videos, contact)
- `post.html` — Blog post template (with highlight.js for code blocks)
- `assets/styles/main.css` — Tailwind directives only, compiles to `main.min.css`
- `assets/js/main.js` — Currently empty; JS comes from CDN (Alpine.js, Alpine Toolkit)
- `tailwind.config.js` — Custom theme: colors, fonts, spacing extensions
- `postcss.config.js` — Tailwind + autoprefixer + cssnano pipeline

## Styling Conventions

- All styling is Tailwind utility classes — no custom CSS beyond the directives in `main.css`
- Custom color palette: `primary` (#5540af), `yellow` (#f9e71c), `lila`, `grey-10` through `grey-70`
- Fonts: `font-header` (Raleway), `font-body` (Open Sans) — loaded from Google Fonts
- Icons: Boxicons via CDN (`bx bxl-*` classes)
- Container is centered with 1rem padding (`container` class in tailwind config)

## Alpine.js Patterns

- Mobile menu toggle via `x-data="{ mobileMenu: false }"` on `<body>`
- Smooth scroll navigation using `$scroll(id)` from Alpine Collective Toolkit
- No custom Alpine components or stores
