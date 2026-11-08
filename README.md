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
| OmniRetail POS | `cloud-retail-ui.jpg` → `/projects/cloud-retail-pos` |
| Security Auditor | `security-auditor-ui.png` → `/projects/security-auditor-dashboard` |
| Enterprise Case Analytics | `enterprise-analytics-ui.jpg` → `/projects/enterprise-case-analytics` |
| MySmartCoach | `mysmartcoach-ui.jpg` → `/projects/mysmartcoach` |
| MT5 EAs | `mt5-eas-ui.png` → `/projects/mt5-eas` |

## Deploy

```bash
npm run build
npm start
```

Or connect the repo to [Vercel](https://vercel.com) for one-click deploy.
