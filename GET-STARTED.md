# Get Started with Dema

Hey Taina - welcome! This is your complete guide to taking over your Dema website.

It's written for someone with **zero coding experience**. Read it top to bottom. Don't worry if some words look new - every step has a "what is this?" explanation right next to it.

If anything is confusing, you can also ask Cursor (the AI tool we'll set up below) to explain it. Cursor is patient. It will not judge you for asking the same question five times.

---

## Table of contents

1. [The big picture - what you own](#1-the-big-picture--what-you-own)
2. [Install Cursor (your AI editor)](#2-install-cursor-your-ai-editor)
3. [Get the website onto your computer](#3-get-the-website-onto-your-computer)
4. [Run the site on your own computer (preview mode)](#4-run-the-site-on-your-own-computer-preview-mode)
5. [Set up Resend (the email service)](#5-set-up-resend-the-email-service)
6. [Put the site on the internet with Vercel](#6-put-the-site-on-the-internet-with-vercel)
7. [Connect your domain name (optional)](#7-connect-your-domain-name-optional)
8. [Editing the site with Cursor - the everyday workflow](#8-editing-the-site-with-cursor--the-everyday-workflow)
9. [Common requests, copy-paste ready](#9-common-requests-copy-paste-ready)
10. [Saving and publishing your changes (git basics)](#10-saving-and-publishing-your-changes-git-basics)
11. [Your personal info checklist](#11-your-personal-info-checklist)
12. [If something breaks](#12-if-something-breaks)

---

## 1. The big picture - what you own

You own three things:

1. **A folder on your computer** with the website code in it (your local copy).
2. **A GitHub repository** where the official version of the code lives in the cloud, called `point-onefive/dema`. Think of GitHub as Google Drive for code.
3. **A live website on the internet**, hosted by Vercel, that automatically updates every time you save changes to GitHub.

The flow looks like this:

```
You make a change on your computer
        ↓
You save it to GitHub
        ↓
Vercel sees the new version on GitHub
        ↓
Vercel rebuilds and publishes your live site (takes 30-60 seconds)
```

Cursor is the editor where you make the changes. You chat with it like a person, and it edits the files for you. You almost never have to write any code yourself.

---

## 2. Install Cursor (your AI editor)

Cursor is a desktop app - like Word or Google Chrome - except it's for editing code with the help of an AI assistant.

### Steps

1. Go to [https://cursor.com](https://cursor.com) and click **Download**.
2. Open the file that downloads and drag the Cursor icon into your **Applications** folder (on Mac) or run the installer (on Windows).
3. Open Cursor.
4. Sign in or create a free account when prompted.
5. When asked about settings, just click through with the defaults. You can change anything later.

That's it. You're set up.

> Cursor includes Claude or another AI by default. You can ask it to do anything in natural language - it will do the technical work.

---

## 3. Get the website onto your computer

Right now, the code lives on GitHub at `https://github.com/point-onefive/dema`. You need to download a copy onto your computer. This is called **cloning**.

### Easiest way: do it through Cursor

1. Open Cursor.
2. Press `Cmd + Shift + P` on Mac (`Ctrl + Shift + P` on Windows). A search bar opens at the top.
3. Type `Git: Clone` and press Enter.
4. Paste this URL when prompted:
   ```
   https://github.com/point-onefive/dema.git
   ```
5. Pick a folder to save it in. A good choice on Mac: your `Documents` folder.
6. When it finishes, click **Open** to open the project.

You'll now see a sidebar on the left full of folders and files. Don't panic - you only need to know about a few of them.

### Folder map (only the parts you care about)

```
dema/
├── web/                ← The website lives here
│   ├── app/            ← The actual page (very rarely touched)
│   └── components/     ← All the visual parts of the page
│       └── sections/   ← The big blocks: hero, problem, FAQ, etc.
├── GET-STARTED.md      ← This document
└── README.md           ← Quick overview
```

You don't need to memorize this. When you ask Cursor "change the headline", it will find the right file for you.

---

## 4. Run the site on your own computer (preview mode)

Before you publish changes to the internet, you can preview them privately on your own computer. This is called running it **locally**.

### One-time setup

You need a small tool called **Node.js** installed. Check first if you have it:

1. Open the built-in **Terminal** inside Cursor. Go to the top menu: **Terminal → New Terminal**.
2. Type this and press Enter:
   ```
   node --version
   ```
3. If it prints something like `v20.10.0`, you already have it - skip the next step.
4. If it says "command not found", download and install Node.js from [https://nodejs.org](https://nodejs.org) (pick the **LTS** version).

### Every time you want to preview the site

In the Cursor terminal:

```
cd web
npm install
npm run dev
```

(The first command says "go into the website folder". The second downloads the website's parts (only takes a minute, only the first time). The third starts the preview.)

Wait for a line that says `Ready in...`, then open [http://localhost:3000](http://localhost:3000) in your browser. You should see the site.

**To stop the preview:** click in the terminal and press `Ctrl + C`.

> If you ever just want to ask Cursor to do this for you, type into the chat: *"Start the site so I can preview it locally."* It will run the commands for you.

---

## 5. Set up Resend (the email service)

When someone enters their email on your site's waitlist, two things should happen:

1. They get a friendly welcome email.
2. You get notified that someone signed up.

Resend is the service that sends those emails. It's free for your scale of usage.

### Step 1: Create a Resend account

1. Go to [https://resend.com](https://resend.com) and click **Sign Up**.
2. Use your email to create a free account.
3. Verify your email when prompted.

### Step 2: Create your API key

An API key is like a password for software. It lets your website talk to Resend.

1. In Resend, click **API Keys** in the left sidebar.
2. Click **Create API Key**.
3. Name it something memorable like `Dema Production`.
4. Set permission to **Full access**.
5. Click **Add**.
6. **Copy the key right away.** It starts with `re_`. You can only see it this one time.

Paste that key into a notes app or a sticky note for now. You'll need it in the next step and again later when setting up Vercel.

### Step 3 (optional, do this later): Use your own domain for emails

By default, emails will come from `onboarding@resend.dev`. That works fine for testing.

When you're ready to look more professional and have emails come from `hello@yourdomain.com`, follow Resend's domain setup guide in the **Domains** section. Or - easier - ask Cursor: *"Walk me through adding my domain `yourdomain.com` to Resend."*

---

## 6. Put the site on the internet with Vercel

Vercel is the company that will host your website. Free for what you need. Every time you save changes, they automatically update the live site.

### Step 1: Create a Vercel account

1. Go to [https://vercel.com](https://vercel.com).
2. Click **Sign Up**.
3. Choose **Continue with GitHub**. (This is the easiest path - it links Vercel to your GitHub account.)
4. Authorize Vercel when prompted.

### Step 2: Import your repository

1. Once logged in, click **Add New… → Project**.
2. Find `dema` in the list and click **Import**.
3. On the configuration screen:
   - **Framework Preset:** Should auto-detect as "Next.js" - leave it.
   - **Root Directory:** Click **Edit** and change it to `web`. This is important - the website lives in the `web` folder, not the top level.
   - Leave everything else as-is.
4. Click **Deploy**.

The first deploy will succeed in about a minute. But emails won't work yet - let's fix that.

### Step 3: Add your environment variables

Environment variables are settings the website needs to function (like your Resend API key). You enter them in Vercel so the live site can use them.

1. In your Vercel project, click **Settings** in the top tabs.
2. In the left sidebar, click **Environment Variables**.
3. Add each of these three, one at a time. Apply them to all three environments (Production, Preview, Development) - just leave all three checked.

| Name | Value | What it does |
|------|-------|--------------|
| `RESEND_API_KEY` | The `re_...` key you copied from Resend | Lets the site send emails |
| `NOTIFY_EMAIL` | Your own email address | This is where you get notified every time someone joins the waitlist |
| `FROM_EMAIL` | `Dema <onboarding@resend.dev>` (paste exactly) | The sender address on the emails. Replace later with your own domain. |

4. Once all three are saved, you need to redeploy so they take effect. Go to **Deployments** tab → click the **…** menu on the most recent deployment → click **Redeploy**.

After about a minute, your site is live with working email. Try it - go to your live URL and enter an email. You should get a welcome email, and your `NOTIFY_EMAIL` should get a notification.

> **Where is my live URL?** It's at the top of your Vercel project dashboard. It will look like `dema-xyz123.vercel.app` until you add a custom domain.

---

## 7. Connect your domain name (optional)

If you have a domain like `getdema.com`:

1. In Vercel, go to your project → **Settings → Domains**.
2. Type your domain (e.g. `getdema.com`) and click **Add**.
3. Vercel will give you instructions to update your DNS settings. You'll do this on whatever site you bought the domain from (GoDaddy, Namecheap, Google Domains, etc.).
4. It takes 5 minutes to a few hours for the change to propagate.

> Stuck? Ask Cursor: *"Help me set up my domain `getdema.com` to point to my Vercel site."* It can walk you through your specific DNS provider.

---

## 8. Editing the site with Cursor - the everyday workflow

This is the part you'll do most often. It's much simpler than it sounds.

### Open the project in Cursor

1. Open Cursor.
2. Go to **File → Open Folder** and pick your `dema` folder.

### Open the chat sidebar

On the right side, you'll see a chat panel. If you don't, press `Cmd + L` on Mac (`Ctrl + L` on Windows) to open it.

### Talk to Cursor like a person

This is the magic. You don't need to know which file to edit, or what code to write. You just describe what you want, and Cursor will figure it out and make the change.

Try things like:

- *"Change the main headline on the homepage to say 'Your story, looked after.'"*
- *"Update the email address that gets notified when someone signs up to `taina@example.com`."*
- *"Add a fourth FAQ question: 'Can I cancel anytime?' with the answer 'Yes, at any time.'"*
- *"Make the button in the hero section say 'Reserve my spot' instead of 'Get early access'."*

Cursor will:
1. Tell you what it's about to do.
2. Find the right file.
3. Make the change.
4. Often, it will start the preview server automatically so you can see the result.

You can review the change visually in your browser preview at [http://localhost:3000](http://localhost:3000).

### Preview before saving

Always preview a change locally before saving it to GitHub. If something looks wrong, just tell Cursor: *"That's not quite right - make the button bigger and center it."*

### When you're happy, save and publish

See [section 10](#10-saving-and-publishing-your-changes-git-basics) below.

---

## 9. Common requests, copy-paste ready

Below are examples of things you can copy and paste into the Cursor chat. Edit the placeholder details (in `[brackets]`) before sending.

### Changing the hero image

> "In the hero section of the homepage, replace the lifestyle photo with this image: `[paste image URL]`. Make sure it's a high-resolution photo of a family in a warm, candid moment."

If you have your own image file:

> "I'm dragging in an image called `family.jpg`. Use it as the hero photo on the homepage."

(Then literally drag the image file into the Cursor chat. Cursor will save it and update the code.)

### Updating contact info

> "Update the contact email on the site to `hello@yourdomain.com` and add a phone number `(555) 123-4567` in the footer."

### Adding a new testimonial

> "Add a new testimonial in the social proof section. Quote: 'Setting up Dema gave me peace of mind I didn't know I needed.' Name: 'Jennifer L.' Role: 'Early access member'. Use a tasteful photo of a 50-year-old woman."

### Adding a new FAQ

> "Add a new question to the FAQ: 'How do I update my executor later?' with the answer 'You can change your executor at any time from your dashboard. The change takes effect immediately.'"

### Changing a section's copy

> "In the 'How it works' section, change Step 2's description to: 'Pick someone you trust completely. A spouse, a sibling, your best friend. They won't see anything until the moment requires it.'"

### Changing colors (be specific)

> "I'd like the forest green color on the site to be slightly warmer and more olive. Change it from `#2f4f46` to `#3d5b4b` and show me how it looks."

### Adding social media links to the footer

> "Add my Instagram (`@dema_app`), LinkedIn (`https://linkedin.com/company/dema`), and X/Twitter (`@dema_app`) to the footer."

### Removing a section temporarily

> "Hide the testimonials section for now, but keep the code so we can put it back later."

### Reverting a change

> "I don't like what you just did. Put it back the way it was."

> "Show me what the previous version looked like."

### Asking for help / advice

> "Look at the homepage and tell me three things that could be improved visually."

> "Is my site mobile-friendly? Open it at iPhone size and check."

### Anything else

You can literally type anything. There's no wrong way to ask. If Cursor doesn't understand, it will ask a clarifying question - answer that question and it will try again.

---

## 10. Saving and publishing your changes (git basics)

When you've made changes and you're happy with them, you need to save them to GitHub. Once they're on GitHub, Vercel sees the new version and updates your live site automatically.

### The simplest way: ask Cursor

The easiest workflow is just to tell Cursor:

> "Save all my changes and push them to GitHub with a short message describing what changed."

Cursor will do everything for you. It will run the right commands.

### What's actually happening (if you're curious)

There are three git steps every time you publish:

1. **Stage** - pick which changes to save (usually: all of them)
2. **Commit** - write a short note describing the change
3. **Push** - upload the change to GitHub

Cursor does all three when you ask.

### Doing it manually (if you ever want to)

In the Cursor terminal:

```
git add .
git commit -m "describe what changed here"
git push
```

That's it.

### Watching the deploy

After you push, go to your Vercel dashboard. You'll see a new deploy appear in the **Deployments** tab. When it shows a green "Ready" badge (usually 30-60 seconds), your live site is updated.

---

## 11. Your personal info checklist

These are the things you (and only you) need to provide. Fill them out before you go live.

### Required for the site to function

- [ ] **Your email address** - for `NOTIFY_EMAIL` in Vercel. Tells the site where to send signup notifications.
- [ ] **A Resend API key** - for `RESEND_API_KEY` in Vercel. Created in [Step 5](#5-set-up-resend-the-email-service).
- [ ] **Sender email address** - for `FROM_EMAIL` in Vercel. Use `Dema <onboarding@resend.dev>` to start. Switch later if you set up a custom domain.

### Optional, for personalization

- [ ] **A domain name** like `getdema.com`. Buy from Namecheap, GoDaddy, or Google Domains if you don't have one. Add to Vercel in [Step 7](#7-connect-your-domain-name-optional).
- [ ] **A phone number** if you want one displayed on the site.
- [ ] **Social media accounts** - Instagram, LinkedIn, Twitter/X. Send them to Cursor to add to the footer.
- [ ] **A logo** if you have a custom one. Default is the green "D" mark, which is clean and professional. Send your file to Cursor to swap it.
- [ ] **A real "About" page** and **Contact page** if you want them. Right now those footer links are placeholders. Ask Cursor: *"Create an About page with [the text you want]."*
- [ ] **Privacy policy and Terms of Service** pages. These are legally important for collecting email addresses. You can generate them at [https://www.termsfeed.com](https://www.termsfeed.com) for free, then ask Cursor to add them to your site.
- [ ] **Your own photos** if you want to swap the stock images. Drop any photo into the Cursor chat and tell it where to use it.
- [ ] **Real testimonials** when you have them. Currently the testimonials are placeholders that look real but aren't.

### Where the placeholders currently live

If you want to find every spot that needs your personal touch, ask Cursor:

> "Show me everywhere on the site that has placeholder content I should replace with real information."

It will give you a list.

---

## 12. If something breaks

### The website isn't loading

- Check your Vercel dashboard for a red "Failed" deployment. Click into it and read the error.
- Ask Cursor: *"My latest deploy on Vercel failed. Here's the error: [paste the error]. What's wrong?"*

### I made a change and now nothing works

- Go to GitHub (`https://github.com/point-onefive/dema`).
- Click **Commits** to see the history.
- You can always go back to a previous version. Ask Cursor: *"Undo my last commit and put the site back the way it was an hour ago."*

### Emails aren't sending

- Double-check the three environment variables in Vercel are spelled exactly right.
- Make sure you **redeployed** after adding them.
- Check Resend's dashboard for any errors - go to [resend.com/emails](https://resend.com/emails) to see the recent email log.

### I forgot what I was doing

- Ask Cursor: *"What changes do I have in progress that haven't been saved yet?"*
- It will tell you exactly where you stand.

### Anything else

The agent in Cursor is the right first stop for any question. It can read every line of your code and explain anything. It can also Google for you if it doesn't know something - just say *"look it up."*

If Cursor genuinely can't help, reach out to Tyler. He built this and knows the codebase intimately.

---

## You're ready

That's everything. The site is built, tested, and ready to go live. The only steps left:

1. Sign up for Resend → get your API key
2. Sign up for Vercel → connect your GitHub → deploy
3. Add the three environment variables in Vercel → redeploy
4. (Optional) connect your domain
5. Make any small personalizations through Cursor

Welcome to the team. Have fun with it.

- Tyler
