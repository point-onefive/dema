import { NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email =
    body && typeof body === "object" && "email" in body
      ? String((body as Record<string, unknown>).email).trim()
      : "";

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[waitlist] RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const from = process.env.FROM_EMAIL ?? "Dema <onboarding@resend.dev>";
  const notifyEmail = process.env.NOTIFY_EMAIL;
  const timestamp = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from,
      to: email,
      subject: "You're on the Dema early access list",
      html: `
        <div style="font-family: ui-sans-serif, system-ui, sans-serif; color: #14130f; max-width: 480px; margin: 0 auto; padding: 32px 24px;">
          <div style="font-size: 20px; font-weight: 600; margin-bottom: 16px;">You're in.</div>
          <p style="font-size: 15px; line-height: 1.6; color: #5c5a52; margin: 0 0 16px;">
            Thanks for joining the Dema early access list. You'll be among the first to set up your vault when we open the doors.
          </p>
          <p style="font-size: 15px; line-height: 1.6; color: #5c5a52; margin: 0 0 24px;">
            Early access members keep their plan free forever. We'll send you a note the moment your spot is ready.
          </p>
          <p style="font-size: 13px; color: #8a877d; margin: 0;">
            Dema - a digital executor for the life you built.
          </p>
        </div>
      `,
    });

    if (notifyEmail) {
      await resend.emails.send({
        from,
        to: notifyEmail,
        subject: `New Dema waitlist signup: ${email}`,
        html: `
          <div style="font-family: ui-sans-serif, system-ui, sans-serif; color: #14130f; max-width: 480px; margin: 0 auto; padding: 32px 24px;">
            <div style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">New waitlist signup</div>
            <p style="font-size: 15px; line-height: 1.6; color: #2c2a24; margin: 0 0 8px;">
              <strong>${email}</strong>
            </p>
            <p style="font-size: 13px; color: #8a877d; margin: 0;">
              ${timestamp}
            </p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[waitlist]", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
