import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
  const { email, subject, message } = await req.json();

  if (!email || !subject || !message) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.error(
      "Email is not configured: missing RESEND_API_KEY or TO_EMAIL in .env.local"
    );
    return NextResponse.json(
      { error: "Email service is not configured yet." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: subject,
      react: (
        <div>
          <h1>{subject}</h1>
          <p>New message from your portfolio contact form:</p>
          <p>
            <strong>From:</strong> {email}
          </p>
          <p>{message}</p>
        </div>
      ),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}