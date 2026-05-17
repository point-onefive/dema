# Dema

A digital executor platform. When someone passes away or becomes incapacitated,
their family or chosen executor can securely access and manage the parts of
their digital life they were given permission to handle — subscriptions,
important documents, photos and memories, financial accounts, passwords, and
more.

The whole idea is to organize someone's digital life so loved ones aren't left
scrambling trying to figure out what exists, what matters, and what needs
attention.

---

## Status

Two parallel branches exist while we settle on the visual direction:

- **`main`** — the original Webflow HTML export, untouched. Useful as a visual
  baseline.
- **`proposed-redesign`** ← *you are likely here* — a fresh Next.js + Tailwind
  rebuild of the landing page under `web/`. This is the proposed visual
  direction: tokenized design system, real product UIs inside each
  "How it works" step, fully responsive, ~90% smaller payload.

Once we agree on direction, the winner becomes the source of truth on `main`.

## Quick start (this branch — the proposed redesign)

```bash
git clone https://github.com/point-onefive/dema.git
cd dema
git checkout proposed-redesign
cd web
npm install
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321).

You should see the new Dema landing page (hero → "How it works" with four
real product mockups → features → security → pricing → FAQ → final CTA →
footer). Use this to evaluate the aesthetic and flag what feels right vs.
what needs to change.

> Requires Node.js 18+ and npm. Nothing else.

### Comparing to the original

If you want to view the original Webflow export for side-by-side comparison,
switch back to `main`:

```bash
git checkout main
npm install
npm run dev
```

Same port (`4321`), same command, different design. Stop one before starting
the other.

## Repo layout (this branch)

```text
dema/
├── web/                    ← new Next.js 16 + Tailwind v4 landing page
│   ├── app/
│   │   ├── layout.tsx       (fonts, metadata)
│   │   ├── page.tsx         (composes the sections)
│   │   └── globals.css      (design tokens — the whole system)
│   ├── components/
│   │   ├── layout/          (Nav, Footer)
│   │   ├── sections/        (Hero, HowItWorks, Features, Security,
│   │   │                     PricingTeaser, FAQ, FinalCTA)
│   │   ├── mockups/         (DigitalLife, Executor, Permissions,
│   │   │                     RequestAccess — the visual centerpiece)
│   │   ├── ui/              (Container, Eyebrow, Button, ServiceTile,
│   │   │                     Avatar)
│   │   └── icons/           (DemaMark / wordmark)
│   ├── lib/cn.ts
│   ├── package.json         (dev / build / start / lint / typecheck)
│   └── tsconfig.json
├── webflow/                ← original Webflow HTML export (reference)
├── package.json             (root — runs the legacy webflow export only)
├── .gitignore
└── README.md
```

## Design system at a glance

Everything visual is governed by tokens in `web/app/globals.css`:

- **One brand color** — forest green `#2F4F46`, used sparingly (CTA, active
  toggles, success states). No gradients, no glows.
- **One neutral ramp** — warm cream background (`#FAF8F3`), white surfaces,
  five ink shades, two border weights.
- **Type pair** — Instrument Serif (display) + Inter Tight (UI). Same fonts
  as the original Webflow export, so the typographic intent carries through.
- **One spacing rhythm** — Tailwind defaults (4 px base), section paddings
  in multiples of 8.
- **Restrained elevation** — 4 shadow tokens, most surfaces use only a
  hairline border.

If you need to adjust the look, the tokens are the single place to change.

## Roadmap

1. **Foundation** — repo, hosting ← *done*
2. **Design direction** — agree on aesthetic via the `proposed-redesign`
   branch ← *we are here*
3. **Merge & cleanup** — once approved, merge into `main`, scrub the leftover
   Webflow template metadata, retire the static export
4. **Product surfaces** — executor onboarding, permissions/access UI, vault
   organization (these live in `web/app/` next to the marketing pages)
5. **Ship** — deploy, custom domain, analytics

## Contributing / feedback

For aesthetic feedback while reviewing locally, screenshots of the section
plus a one-line suggestion are perfect.
