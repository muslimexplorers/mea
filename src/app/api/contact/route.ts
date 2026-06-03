import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !emailRe.test(email) || !message || message.length < 10) {
    return NextResponse.json({ ok: false, error: "Validation failed." }, { status: 422 });
  }

  // TODO: wire up an email provider (e.g. Resend, Nodemailer, or a CRM webhook)
  // to actually deliver the enquiry. For now we log it server-side so the form
  // flow is fully functional end-to-end.
  console.log("[contact] New enquiry:", {
    name,
    email,
    phone: body.phone?.trim() || null,
    subject: body.subject?.trim() || null,
    message,
  });

  return NextResponse.json({ ok: true });
}
