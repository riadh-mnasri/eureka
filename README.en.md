# Eureka

A playful, bilingual web app that trains kids for math olympiads: logic, clever arithmetic, geometry and combinatorics, with progressive hints, a library of solving strategies and a belt-based progression, without ever using real-world rewards as a motivation mechanic.

Copyright (c) 2026 Riadh MNASRI. All rights reserved.

## Features

- **3 child profiles** tailored by age group, each with its own problem bank:
  - **Explorer (age 6)**: visual logic, sequences, simple counting, shapes
  - **Researcher (age 8)**: deductions, clever arithmetic, simple perimeters and areas
  - **Champion (age 11)**: combinatorics, basic number theory, geometry, multi-step problems
- **Daily challenge**: 6 problems randomly drawn from all of the profile's domains.
- **Skill tracks**: focused practice on a single domain (logic, arithmetic, geometry or combinatorics).
- **Hint on demand**: a strategy hint available before answering, never the answer itself.
- **Solving strategy** revealed after each answer (draw a picture, try a small case, work backwards, look for a pattern, try things in an organized way, count without missing anything).
- **Mastery radar**: a visualization of progress across the 4 domains.
- **Belt-based progression** (white to black) instead of a plain numeric level, for a competition feel.
- **Parents area**: a read-only overview of all 3 profiles, with no intrusive tracking.
- **Bilingual**: the full interface exists in French and English.

## Design choice: no real-world rewards

All motivation relies on virtual progression (belts, badges, domain mastery) rather than money or automated material rewards, to avoid the overjustification effect and keep the joy of learning intact.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- [next-intl](https://next-intl.dev) for the bilingual French/English interface
- Local persistence via `localStorage` (no database, no data sent to a server)

## Local development

```bash
npm install
npm run dev
```

The app is served at [http://localhost:3141](http://localhost:3141).

No environment variables are required: all data (profiles, progress, badges) is stored locally in the browser.

## Available scripts

| Command         | Description                                 |
| ---------------- | -------------------------------------------- |
| `npm run dev`     | Development server (Turbopack, port 3141)    |
| `npm run build`   | Production build                             |
| `npm start`       | Runs the production build                    |
| `npm run lint`    | Lints the code with ESLint                   |

## Tests

No automated test suite yet: the pedagogical content and game logic (belts, mastery, badges) are simple and verified manually in the browser. The build (`npm run build`) acts as a type safety net (strict TypeScript) before every deployment.

## Architecture

```
src/
  app/
    [locale]/
      layout.tsx                       header, footer, i18n provider
      page.tsx                         home: child profile picker
      profil/[profileId]/
        page.tsx                        dashboard (mastery radar, belt, streak)
        defi/page.tsx                    daily challenge (mixed problems)
        competence/[domain]/page.tsx     focused practice on one domain
        badges/page.tsx                  full badges grid
      parents/page.tsx                 parents area (read-only)
  components/                          reusable UI (Dashboard, ChallengeFlow, MasteryRadar, RobotMascot, ...)
  i18n/                                 next-intl configuration (routing, navigation, request)
  lib/
    profiles.ts                         the 3 child profiles and their age groups
    domains.ts                          the 4 skill domains (logic, arithmetic, geometry, combinatorics)
    strategies.ts                       the solving strategy library
    content/problems.ts                 bilingual problem bank, by age group and domain
    gamification.ts                     belts, domain mastery, play streak
    badges.ts                           badge definitions
    storage.ts                          reading/writing progress in localStorage
  proxy.ts                              locale routing (fr/en)
messages/
  fr.json, en.json                     UI copy (outside the pedagogical content)
```

## Deployment

Planned on Vercel, linked to the `riadh-mnasri/eureka` GitHub repo (automatic deployment on every push to `main` once linked).

## Progress

- [x] 3 child profiles with an age- and domain-tailored problem bank
- [x] Daily challenge and skill tracks
- [x] Progressive hints and solving strategy library
- [x] Domain mastery radar, belt progression, badges
- [x] Parents area (read-only, no intrusive tracking)
- [x] Bilingual French / English interface
- [ ] Production deployment on Vercel
- [ ] Custom favicon and app icon
- [ ] More pedagogical content (additional problems per age group and domain)

## License

Personal project, not intended for redistribution. All rights reserved, Riadh MNASRI.
