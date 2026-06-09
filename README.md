# Dharmakshetra International School — Website

A high-end redesign of the website for **Dharmakshetra International School**, a leading CBSE
school in Machilipatnam, Andhra Pradesh (_"A Place of Righteousness"_).

Built with a modern, premium design system: deep navy + heritage gold, an editorial serif
display face, glassmorphism navigation, scroll-reveal motion, and a fully responsive layout.

## Tech stack

- **[Next.js 16](https://nextjs.org)** (App Router, React 19, Turbopack)
- **[Tailwind CSS v4](https://tailwindcss.com)** — design tokens via `@theme`
- **[Motion](https://motion.dev)** (Framer Motion) — scroll reveals & micro-interactions
- **[lucide-react](https://lucide.dev)** — icon set
- **TypeScript**
- Fonts: **Fraunces** (display serif) + **Plus Jakarta Sans** (UI sans) via `next/font`

## Features

- Sticky glass header with scroll state + animated mobile drawer
- Cinematic hero with layered gradients, floating accreditation chip and CBSE badge
- Animated announcement marquee
- Stats band, Vision & Mission, eight "Why Us" differentiators
- Academics, world-class Facilities grid, Leadership profiles, "What We Promise"
- News & gallery, parent testimonials
- Admissions enquiry form (opens a pre-filled email) + embedded campus map
- Full SEO: metadata, Open Graph, JSON-LD `School` schema, sitemap & robots
- Responsive from 375px → desktop, custom favicon, accessible markup

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx        # fonts, global metadata, Open Graph
│  ├─ page.tsx          # page assembly + JSON-LD
│  ├─ globals.css       # Tailwind v4 theme tokens & utilities
│  ├─ sitemap.ts / robots.ts / icon.svg
├─ components/          # Header, Hero, About, WhyUs, Academics, Facilities,
│  │                    # Leadership, News, Testimonials, Contact, Footer ...
│  └─ ui/               # Reveal, SectionHeading, Logo, Icon, SocialIcons
└─ lib/
   └─ data.ts           # all editable site content (school info, sections)
```

## Editing content

All copy — school details, programmes, facilities, leadership, testimonials and contact
information — lives in [`src/lib/data.ts`](src/lib/data.ts). Update that single file to change
the site's text without touching the components.

> Imagery currently uses Unsplash placeholders. Replace the URLs in `src/lib/data.ts` and the
> section components with the school's own photography before going live.

## Deploy

Optimised for [Vercel](https://vercel.com) — import the repo and deploy with zero config.
Remote images are whitelisted in `next.config.ts`.
