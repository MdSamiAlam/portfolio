# Md Sami Alam — Portfolio

A dark-luxury, motion-forward developer portfolio built with React, TypeScript,
Tailwind CSS v4, and Framer Motion.

> 🚧 Under active build. This README is a stub for Milestone 1 and will be
> filled out in full at Milestone 11 (Documentation) with setup, Docker,
> CI/CD, folder structure, and deployment instructions.

## Stack (so far)

- **Vite + React 19 + TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` token system — see `src/index.css`)
- **Framer Motion**, **GSAP**, **Lenis** (smooth scroll) — installed, wired up from Milestone 2 onward
- **react-icons**

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

## Project structure

```
src/
  components/
    layout/     shared shell: nav, footer, cursor, page transitions
    sections/   landing page sections (hero, about, skills, projects, ...)
    ui/         reusable primitives (buttons, cards, badges)
  data/
    resume.ts   single source of truth, populated from the real resume
  hooks/        custom hooks (scroll progress, magnetic cursor, etc.)
  lib/          utilities
  styles/       (reserved) additional stylesheets
```

## Design tokens

All colors, fonts, radii, and easing curves live in `src/index.css` under the
`@theme` block — Tailwind v4's CSS-first config. No `tailwind.config.js`
needed.

## Roadmap

- [x] Milestone 1 — Project setup
- [x] Milestone 2 — Landing page
- [x] Milestone 3 — About
- [x] Milestone 4 — Skills
- [x] Milestone 5 — Projects
- [x] Milestone 6 — Animations
- [x] Milestone 7 — Responsive design
- [x] Milestone 8 — Docker
- [x] Milestone 9 — GitHub Actions
- [ ] Milestone 10 — Deployment
- [ ] Milestone 11 — Documentation
