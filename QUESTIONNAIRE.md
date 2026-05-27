# Dema — Your Info Checklist

Fill this out before running the site. Some of these go into the actual page.
Some go into Vercel as environment variables. The ones marked as **required** need to be done before the site works properly.

---

## Contact and identity

**Your full name**
_Used in emails and optionally on the site_

> [ fill in here ]

**Your email address** (required)
_This is where you'll receive a notification every time someone joins the waitlist_
_Add this as `NOTIFY_EMAIL` in Vercel_

> [ fill in here ]

**Your phone number** (optional)
_Only needed if you want a phone number listed on the site_

> [ fill in here ]

---

## Branding

**Your website domain** (optional)
_Example: getdema.com or dema.co — needed for a custom domain on Vercel_

> [ fill in here ]

**Social media accounts** (optional)
_List any you want linked in the footer (Instagram, Twitter/X, LinkedIn, etc.)_

> [ fill in here ]

---

## Email setup (required)

**Resend API key**
_Starts with `re_` — you get this from resend.com_
_Add as `RESEND_API_KEY` in Vercel_

> [ fill in here ]

**"From" email address**
_For now, use: `Dema <onboarding@resend.dev>`_
_Later, once you add your domain to Resend, update this to something like `Dema <hello@yourdomain.com>`_
_Add as `FROM_EMAIL` in Vercel_

> [ fill in here ]

---

## Copy and content

**Anything you want to change on the site?**
_Write it out naturally — Tyler or your Cursor agent can make any edits_

> [ write any notes here ]

---

## When you're done

Once you've filled this in:

1. Add `RESEND_API_KEY`, `NOTIFY_EMAIL`, and `FROM_EMAIL` to Vercel (see SETUP.md)
2. Tell your Cursor agent anything you want updated on the actual page
3. Redeploy on Vercel so changes go live
