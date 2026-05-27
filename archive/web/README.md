# Dema — web

The Next.js + Tailwind v4 landing page for [Dema](../README.md).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Scripts

- `npm run dev` — Next.js dev server with Turbopack on port 4321
- `npm run build` — production build
- `npm run start` — serve production build on port 4321
- `npm run lint` — ESLint
- `npm run typecheck` — `tsc --noEmit`

## Structure

```
web/
├── app/                     Routes, layout, global styles
│   ├── layout.tsx           Fonts (Inter Tight + Instrument Serif), metadata
│   ├── page.tsx             Landing page composition
│   └── globals.css          Design tokens (colors, type, radii, shadows)
├── components/
│   ├── layout/              Nav, Footer
│   ├── sections/            Hero, HowItWorks, Features, Security,
│   │                        PricingTeaser, FAQ, FinalCTA
│   ├── mockups/             DigitalLife, Executor, Permissions,
│   │                        RequestAccess  ← the "How it works" centerpiece
│   ├── ui/                  Container, Eyebrow, Button, ServiceTile, Avatar
│   └── icons/               DemaMark, DemaWordmark
└── lib/
    └── cn.ts                Tailwind class merger
```

## Design tokens

All visual decisions live in `app/globals.css` under `@theme`. To adjust the
look across the entire site, edit those CSS variables. Component files should
reference them via `var(--color-…)` / `var(--radius-…)` / `var(--shadow-…)`.
