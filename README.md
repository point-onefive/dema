# Dema

A digital executor platform. Securely organize, share, and pass on the digital pieces of life that matter most.

---

## For Taina

Read **SETUP.md** first. It walks through everything you need to get the site live, including:

- Setting up Resend (email collection / waitlist notifications)
- Deploying to Vercel
- Running the site locally
- Making changes through your Cursor agent

Fill in **QUESTIONNAIRE.md** with your details before the site goes live.

---

## Project structure

```
dema/
├── web/              ← The Next.js site (this is what you deploy)
├── archive/          ← Original Webflow export and early Next.js build (reference only)
├── SETUP.md          ← Start here — full guide for going live
└── QUESTIONNAIRE.md  ← Your personal info checklist
```

## Running locally

```bash
cd web
cp .env.example .env.local   # then fill in your API keys
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321)

## Tech stack

- [Next.js 16](https://nextjs.org) with App Router
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Resend](https://resend.com) for transactional email
- [Vercel](https://vercel.com) for hosting
