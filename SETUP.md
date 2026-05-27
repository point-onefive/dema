# Dema - Setup Guide

> **Note:** This document has been superseded by [GET-STARTED.md](./GET-STARTED.md), which is the master handoff guide. SETUP.md is kept as a shorter quick reference. For everything you need to go live, use GET-STARTED.md.

Hey Taina! This guide walks you through everything you need to get your site live.
Read through it top to bottom. It's written for someone with zero coding experience, so there are no steps skipped.

---

## What's already done

- A fully built landing page for Dema is in the `web/` folder
- It has your hero, how-it-works steps, features, security section, pricing, FAQ, and a waitlist form
- When someone enters their email, it sends them a welcome message and sends you a notification

---

## What you need to do

There are two parts:

1. Set up **Resend** so emails work
2. Deploy to **Vercel** so the site goes live on the internet

Start with Resend, then Vercel.

---

## Part 1 - Set up Resend (email collection)

Resend is the service that handles sending emails when someone joins your waitlist.
It's free for your level of usage.

### Step 1: Create a Resend account

1. Go to [resend.com](https://resend.com) and click **Sign Up**
2. Create an account with your email
3. Verify your email address when prompted

### Step 2: Get your API key

1. In Resend, click **API Keys** in the left menu
2. Click **Create API Key**
3. Name it "Dema production" or anything you like
4. Set **Permission** to "Full access"
5. Click **Add**
6. Copy the key that starts with `re_` - you'll need it soon

> Important: save this key somewhere safe. You can only see it once. If you lose it, you can always create a new one.

### Step 3: Note your "from" address

For emails to send, Resend needs to know what email address they come from.

The easiest option to start: use `onboarding@resend.dev` - this is Resend's default and works immediately without any setup.

Later, if you want emails to come from your own domain (like `hello@getdema.com`), you can add your domain in Resend under **Domains**. That part is optional for now.

---

## Part 2 - Deploy to Vercel

Vercel is the hosting platform. It takes your site and puts it on the internet for free.

### Step 1: Create a GitHub account (if you don't have one)

1. Go to [github.com](https://github.com) and sign up for a free account

### Step 2: Push this repo to GitHub

If Tyler hasn't already set up the GitHub repo:

1. Go to [github.com/new](https://github.com/new)
2. Name it `dema`
3. Keep it private
4. Click **Create repository**
5. Follow the instructions on screen to push the existing code

If Tyler set it up for you already, skip this step.

### Step 3: Create a Vercel account

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** and choose **Continue with GitHub** (easiest option)
3. Authorize Vercel to access your GitHub account

### Step 4: Deploy your site

1. In Vercel, click **Add New Project**
2. Find the `dema` repository and click **Import**
3. On the configuration screen:
   - Set **Root Directory** to `web`
   - Leave everything else as-is
4. Click **Deploy**

The first deploy will succeed but emails won't work yet - that's expected. You need to add your environment variables next.

### Step 5: Add your environment variables

This is where you give Vercel your Resend API key and other settings.

1. After deploying, go to your project in Vercel
2. Click **Settings** (top menu)
3. Click **Environment Variables** (left menu)
4. Add each of the following, one at a time:

| Name | Value |
|------|-------|
| `RESEND_API_KEY` | The `re_...` key you copied from Resend |
| `NOTIFY_EMAIL` | Your email address (where you get notified on each signup) |
| `FROM_EMAIL` | `Dema <onboarding@resend.dev>` (copy this exactly, for now) |

5. After adding all three, click **Redeploy** in Vercel (under the Deployments tab) so the site picks up the new settings

### Step 6: Add a custom domain (optional)

If you have a domain name like `getdema.com`:

1. In Vercel, go to your project and click **Settings > Domains**
2. Type your domain and click **Add**
3. Follow the instructions to update your DNS settings with your domain registrar (GoDaddy, Namecheap, etc.)

---

## Running the site locally on your computer

This lets you see changes before they go live.

You'll need to have Node.js installed. If you don't have it:
1. Go to [nodejs.org](https://nodejs.org) and download the LTS version
2. Install it like any other Mac app

Then:

1. Open **Terminal** (search for it with Spotlight - cmd + space)
2. Type the following and press Enter each time:

```
cd ~/path/to/dema/web
cp .env.example .env.local
```

3. Open `.env.local` with a text editor and fill in your values (see the questionnaire below)
4. Then run:

```
npm install
npm run dev
```

5. Open your browser and go to `http://localhost:3000`

You should see your site running locally.

---

## Making changes

The site is set up so you can describe any change you want to your Cursor agent and it will make it.

Examples of things you can say:

- "Change the headline to say..."
- "Add a new FAQ question: ..."
- "Change the color of the button to..."
- "Add my Instagram link to the footer"
- "Update my contact email to..."

The agent works in the `web/` folder. Open that folder in Cursor and start chatting.

---

## Questions?

If anything is confusing or broken, reach out to Tyler. He set this up and can help you troubleshoot.
