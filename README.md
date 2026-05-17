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

Foundation only. This repo currently hosts the **landing page design** as a
static Webflow export under `webflow/`. No backend, no auth, no product
surfaces yet. The Webflow files are treated as the visual source of truth while
we decide what to port into a proper codebase.

## Quick start

Clone, install, and run the landing page locally:

```bash
git clone https://github.com/point-onefive/dema.git
cd dema
npm install
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321).

You should see the Dema landing page (hero → "How it works" → features →
security → pricing → FAQ → footer). Use this to evaluate the aesthetic and
flag what feels right vs. what needs to change.

> Requires Node.js 18+ and npm. Nothing else.

## Repo layout

```text
dema/
├── webflow/                ← current landing page (Webflow HTML export)
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── images/
├── package.json            ← `npm run dev` serves webflow/ on :4321
├── .gitignore
└── README.md
```

The `webflow/` folder is the raw export from Webflow with light hand-edits
(forest-green color overrides, refined "How it works" cards). Treat it as
reference material — anything new should eventually move into a proper
component-based codebase (Next.js + Tailwind is the likely target).

## Roadmap

1. **Foundation** — repo, hosting, design review ← *we are here*
2. **Port the landing page** to Next.js + Tailwind so spacing, type, and color
   are governed by a real design system rather than hand-edited Webflow CSS
3. **Build the product surfaces**: executor onboarding, permissions/access
   system, vault organization
4. **Ship** — deploy, domain, analytics, the rest

## Contributing / feedback

Open an issue or comment in a PR. For visual feedback while reviewing locally,
screenshots of the section + suggested change are perfect.
