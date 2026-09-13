# Md Sami Alam — Portfolio

A dark-luxury, motion-forward developer portfolio built with React, TypeScript,
Tailwind CSS v4, and Framer Motion — showcasing Data Science, Machine
Learning, and Generative AI projects.

**Live site:** https://portfolio-md-sami-alam1.vercel.app

---

## Tech stack

| Layer | Choice |
|---|---|
| Build tool | Vite |
| Framework | React 19 + TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme` tokens, no config file) |
| Animation | Framer Motion, CSS keyframes for continuous/infinite loops |
| Smooth scroll | Lenis |
| Icons | react-icons |
| Containerization | Docker (multi-stage build → Nginx) |
| CI/CD | GitHub Actions (lint + build on every push, Docker image published to GHCR) |
| Hosting | Vercel |

---

## Getting started

```bash
git clone https://github.com/MdSamiAlam/portfolio.git
cd portfolio
npm install
npm run dev
```

Visit `http://localhost:5173`.

### Other scripts

```bash
npm run build     # type-check (tsc -b) + production build → dist/
npm run preview   # serve the production build locally
npm run lint      # oxlint
```

### Adding your photo

The hero currently shows an empty placeholder frame. To add a real photo:

1. Drop the image file into `public/` (e.g. `public/profile.jpg`).
2. In `src/data/resume.ts`, set:
   ```ts
   photo: "/profile.jpg",
   ```

All other content — projects, skills, certifications, education — is
centralized in `src/data/resume.ts` as well. Edit that one file to update
the whole site; no component needs to change.

---

## Folder structure

```
.
├── .github/
│   └── workflows/
│       ├── ci.yml               # lint + type-check + build on every push/PR
│       └── docker-publish.yml   # builds & pushes the Docker image to GHCR
├── public/
│   ├── resume.pdf               # served at /resume.pdf (Download Resume button)
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── layout/              # app-shell pieces used once each
│   │   │   ├── AuroraBackground.tsx   # animated gradient blobs behind the hero
│   │   │   ├── CustomCursor.tsx       # dot + ring cursor (desktop only)
│   │   │   ├── Loader.tsx             # splash screen on first load
│   │   │   └── ScrollProgress.tsx     # top progress bar
│   │   ├── sections/            # one file per page section, in scroll order
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Certifications.tsx
│   │   │   ├── Achievements.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/                  # reusable primitives, used by 1+ sections
│   │       ├── MagneticButton.tsx
│   │       ├── PhotoFrame.tsx
│   │       ├── OrbitVisual.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── ProjectModal.tsx
│   │       ├── SkillBadge.tsx
│   │       ├── StatCounter.tsx
│   │       ├── EducationTimeline.tsx
│   │       ├── SocialIcons.tsx
│   │       ├── ScrollIndicator.tsx
│   │       └── BackToTop.tsx
│   ├── data/
│   │   └── resume.ts            # single source of truth for all content
│   ├── hooks/
│   │   ├── useLenis.ts           # smooth-scroll setup
│   │   └── useTypingEffect.ts    # hero role-cycling text
│   ├── lib/
│   │   └── utils.ts              # small classnames helper
│   ├── index.css                 # design tokens (@theme) + base styles
│   ├── App.tsx                   # composes all sections
│   └── main.tsx                  # React entry point
├── Dockerfile                    # multi-stage: Node build → Nginx serve
├── nginx.conf                    # SPA fallback, gzip, cache headers
├── docker-compose.yml
├── .dockerignore
├── vite.config.ts
└── tsconfig*.json
```

---

## Design tokens

All colors, fonts, radii, and easing curves live in `src/index.css` under the
`@theme` block — Tailwind v4's CSS-first config, so there's no separate
`tailwind.config.js`. Palette: near-black void background, indigo/violet/
electric-blue accent gradient, glassmorphic cards (`.glass` / `.glass-flat`
utility classes).

---

## Docker

```bash
docker compose up --build
```

Open `http://localhost:8080`. Full command reference (build, run, exec,
logs, compose up/down) is in the Milestone 8 notes; the short version:

```bash
docker build -t md-sami-portfolio .     # build the image
docker run -p 8080:80 md-sami-portfolio # run it directly
docker compose down                     # stop & remove the compose container
```

The image is a two-stage build: a Node stage compiles the Vite app, and only
the static output is copied into a lightweight `nginx:alpine` final image —
`node_modules` and source never ship in the runtime image.

---

## CI/CD

Two GitHub Actions workflows in `.github/workflows/`:

- **`ci.yml`** — on every push and pull request: installs dependencies,
  lints, type-checks, and builds. Fails the check if any of those fail —
  intended to back a branch-protection rule on `main`.
- **`docker-publish.yml`** — triggered once CI succeeds on `main` (via
  `workflow_run`), builds the Docker image and pushes it to
  `ghcr.io/<owner>/<repo>`, tagged with both the commit SHA and `latest`.

No secrets to configure — both use the repository's built-in
`GITHUB_TOKEN`. You do need **Settings → Actions → General → Workflow
permissions → Read and write** enabled for the Docker push to succeed.

---

## Deployment

Hosted on **Vercel** (free tier, no card required):

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com), **Add New → Project**, select the repo.
3. Vercel auto-detects the Vite preset (`npm run build`, output `dist`) — no
   config needed. Click **Deploy**.
4. Every push to `main` auto-deploys; every pull request gets a preview URL.

---

## Screenshots

_Add screenshots here once deployed — e.g.:_

```markdown
![Hero section](./docs/screenshots/hero.png)
![Projects section](./docs/screenshots/projects.png)
```

A simple way to generate these: open the deployed site, use your browser's
full-page screenshot tool (or `Cmd/Ctrl+Shift+P → "Capture full size
screenshot"` in Chrome DevTools), and save them into a `docs/screenshots/`
folder.

---

## Future improvements

- [ ] Wire the contact form to a real backend (Formspree, EmailJS, or a
      serverless function) instead of the current `mailto:` fallback
- [ ] Add a sticky nav bar with active-section highlighting
- [ ] Add real project screenshots/GIFs to project cards in place of the
      icon-on-gradient covers
- [ ] Add a light-mode toggle
- [ ] Add a 404 page
- [ ] Add unit tests for form validation and data-rendering logic

---

## License

MIT — feel free to fork this for your own portfolio, but please swap out the
content in `src/data/resume.ts` for your own.

---

## Author

**Md Sami Alam**  
B.Tech Computer Science, Lovely Professional University (2024–2028)

- GitHub: https://github.com/MdSamiAlam
- LinkedIn: https://linkedin.com/in/mdsamialam
- Email: [aryansami480@gmail.com](mailto:aryansami480@gmail.com)
