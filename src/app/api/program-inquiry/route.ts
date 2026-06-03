import { NextResponse } from "next/server";
import { getResendClient, isDummyResendKey } from "@/lib/resend";
import { siteConfig } from "@/data/site";

interface InquiryPayload {
  programId?: string;
  programTitle?: string;
  parentName?: string;
  email?: string;
  phone?: string;
  studentAge?: string;
  preferredMode?: string;
  message?: string;
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value?: string) {
  return value?.trim() ?? "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function row(label: string, value: string) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:10px 0;color:#64748b;font-size:13px;width:150px;">${escapeHtml(label)}</td>
      <td style="padding:10px 0;color:#0f172a;font-size:14px;font-weight:600;">${escapeHtml(value)}</td>
    </tr>
  `;
}

function buildEmailHtml(payload: Required<InquiryPayload>) {
  return `
    <div style="margin:0;padding:0;background:#f8fafc;font-family:Inter,Arial,sans-serif;">
      <div style="max-width:640px;margin:0 auto;padding:32px 18px;">
        <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:18px;overflow:hidden;">
          <div style="background:#07111f;padding:28px 30px;">
            <div style="color:#f5c542;font-size:12px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;">Program Inquiry</div>
            <h1 style="margin:10px 0 0;color:#ffffff;font-size:26px;line-height:1.25;">${escapeHtml(payload.programTitle)}</h1>
          </div>
          <div style="padding:28px 30px;">
            <table style="width:100%;border-collapse:collapse;">
              ${row("Parent / guardian", payload.parentName)}
              ${row("Email", payload.email)}
              ${row("Phone", payload.phone)}
              ${row("Student age", payload.studentAge)}
              ${row("Preferred mode", payload.preferredMode)}
            </table>
            <div style="margin-top:22px;padding-top:22px;border-top:1px solid #e2e8f0;">
              <div style="color:#64748b;font-size:13px;margin-bottom:8px;">Message</div>
              <div style="color:#0f172a;font-size:15px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(payload.message)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  let body: InquiryPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const payload = {
    programId: clean(body.programId),
    programTitle: clean(body.programTitle),
    parentName: clean(body.parentName),
    email: clean(body.email),
    phone: clean(body.phone),
    studentAge: clean(body.studentAge),
    preferredMode: clean(body.preferredMode),
    message: clean(body.message),
  };

  if (
    !payload.programTitle ||
    !payload.parentName ||
    !payload.email ||
    !emailRe.test(payload.email) ||
    !payload.phone ||
    payload.message.length < 10
  ) {
    return NextResponse.json({ ok: false, error: "Validation failed." }, { status: 422 });
  }

  if (isDummyResendKey()) {
    console.warn("[program-inquiry] Resend is using a dummy key. Inquiry captured but email was not sent.", payload);
    return NextResponse.json({ ok: true, id: null, mode: "dummy" });
  }

  const resend = getResendClient();
  const from = process.env.RESEND_FROM_EMAIL || "Muslim Explorers Academy <onboarding@resend.dev>";
  const to = process.env.PROGRAM_INQUIRY_TO_EMAIL || siteConfig.contact.email;

  const { data, error } = await resend.emails.send({
    from,
    to,
    replyTo: payload.email,
    subject: `Program inquiry: ${payload.programTitle}`,
    html: buildEmailHtml(payload),
  });

  if (error) {
    console.error("[program-inquiry] Resend failed", error);
    return NextResponse.json({ ok: false, error: "Could not send inquiry." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, id: data?.id ?? null });
}
