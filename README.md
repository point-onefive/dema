# Dema

A digital executor platform. Securely organize, share, and pass on the digital pieces of life that matter most.

---

## For Taina - start here

Read **[GET-STARTED.md](./GET-STARTED.md)** first. It's the complete, non-technical handoff guide. Everything you need to take this site live, edit it yourself, and run it day-to-day is in there.

---

## Project structure

```
dema/
├── web/                ← The Next.js website (this is what deploys)
├── archive/            ← Original Webflow export and early Next.js build (reference only)
├── GET-STARTED.md      ← Start here. Complete handoff guide.
├── SETUP.md            ← Older shorter setup guide (superseded by GET-STARTED.md)
├── QUESTIONNAIRE.md    ← Personal-info checklist
└── README.md           ← You are here
```

## Quick reference (technical)

Local development:

```bash
cd web
cp .env.example .env.local   # fill in your Resend API key
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
cd web
npm run build
npm run start
```

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for animation
- [Resend](https://resend.com) for transactional email
- [Vercel](https://vercel.com) for hosting

## Repository

- GitHub: [`point-onefive/dema`](https://github.com/point-onefive/dema)
- Deploy: connect to Vercel with **Root Directory** set to `web`
- Required environment variables on Vercel: `RESEND_API_KEY`, `NOTIFY_EMAIL`, `FROM_EMAIL`
