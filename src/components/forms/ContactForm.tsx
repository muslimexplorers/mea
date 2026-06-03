"use client";

import { useState } from "react";
import { PaperPlaneTilt, CheckCircle, WarningCircle, CircleNotch } from "@phosphor-icons/react";

interface Fields {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const empty: Fields = { name: "", email: "", phone: "", subject: "", message: "" };

type Status = "idle" | "submitting" | "success" | "error";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(fields: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (!fields.name.trim()) errors.name = "Please enter your name.";
  if (!fields.email.trim()) errors.email = "Please enter your email.";
  else if (!emailRe.test(fields.email)) errors.email = "That email doesn't look right.";
  if (fields.message.trim().length < 10) errors.message = "Tell us a little more (10+ characters).";
  return errors;
}

const fieldBase =
  "w-full bg-white/[0.04] border text-white placeholder:text-slate-500 text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/40 transition-all";
const labelClass = "text-xs font-600 text-slate-300";

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFields((f) => ({ ...f, [key]: e.target.value }));
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const border = (key: keyof Fields) => (errors[key] ? "border-rose-400/50" : "border-white/10");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setFields(empty);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center glass rounded-2xl p-10 min-h-[420px]">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald/25 to-gold/20 border border-white/10 flex items-center justify-center mb-5">
          <CheckCircle className="w-7 h-7 text-emerald" weight="duotone" />
        </div>
        <h3 className="text-lg font-600 text-white mb-2">Message sent — jazākAllāhu khayran!</h3>
        <p className="text-sm text-slate-400 font-300 max-w-[36ch] leading-relaxed mb-6">
          Thank you for reaching out. Our team will get back to you within 1–2 working days.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm font-600 text-gold hover:underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClass}>
            Full name <span className="text-gold">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={fields.name}
            onChange={update("name")}
            placeholder="Ayesha Haleem"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`${fieldBase} ${border("name")}`}
          />
          {errors.name && <p id="name-error" role="alert" className="text-xs text-rose-400">{errors.name}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-gold">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={fields.email}
            onChange={update("email")}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`${fieldBase} ${border("email")}`}
          />
          {errors.email && <p id="email-error" role="alert" className="text-xs text-rose-400">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-slate-500 font-400">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={fields.phone}
            onChange={update("phone")}
            placeholder="+92 321 5161436"
            className={`${fieldBase} border-white/10`}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className={labelClass}>
            Subject <span className="text-slate-500 font-400">(optional)</span>
          </label>
          <input
            id="subject"
            type="text"
            value={fields.subject}
            onChange={update("subject")}
            placeholder="Program enquiry"
            className={`${fieldBase} border-white/10`}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={fields.message}
          onChange={update("message")}
          placeholder="How can we help you on your learning journey?"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldBase} resize-none ${border("message")}`}
        />
        {errors.message && <p id="message-error" role="alert" className="text-xs text-rose-400">{errors.message}</p>}
      </div>

      {status === "error" && (
        <div role="alert" className="flex items-start gap-3 rounded-xl border border-rose-400/30 bg-rose-500/10 px-4 py-3">
          <WarningCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" weight="duotone" />
          <p className="text-sm text-rose-200 font-300">
            Something went wrong sending your message. Please try again, or email us directly.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-gold-soft to-gold text-ink px-7 py-3.5 rounded-xl font-700 text-sm hover:shadow-[0_0_20px_-8px_rgba(245,197,66,0.35)] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <CircleNotch className="w-4 h-4 animate-spin" weight="bold" />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <PaperPlaneTilt className="w-4 h-4" weight="fill" />
          </>
        )}
      </button>
    </form>
  );
}
