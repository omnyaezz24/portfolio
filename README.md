# Portfolio — Full-Stack Software & Systems Engineer

Modern dark portfolio built with **Next.js**, **React**, and **Tailwind CSS**.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

Edit identity, copy, skills, and projects in:

```
src/data/site.ts
```

## Project pages

Each project has its own page at `/projects/<slug>` (click any card).

## Project screenshots

SVG covers ship in `public/assets/`. To use your own screenshots, replace the matching file (keep the same basename) and update `image` in `src/data/site.ts` if you switch to `.png`:

| Project | File / slug |
|---|---|
| MySmartCoach | `mysmartcoach-ui.svg` → `/projects/mysmartcoach` |
| moi analytics | `moi-analytics-ui.svg` → `/projects/moi-analytics` |
| MT5 EAs | `mt5-eas-ui.svg` → `/projects/mt5-eas` |
| Multi-Agent AI | `multi-agent-ai-ui.svg` → `/projects/multi-agent-ai` |
| Educational Software | `edu-software-ui.svg` → `/projects/edu-software` |
| Security Auditor | `security-auditor-ui.svg` → `/projects/security-auditor-dashboard` |

## Deploy

```bash
npm run build
npm start
```

Or connect the repo to [Vercel](https://vercel.com) for one-click deploy.
