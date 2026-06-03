"use client";

import { useState } from "react";
import {
  CheckCircle,
  CircleNotch,
  GraduationCap,
  PaperPlaneTilt,
  Sparkle,
  WarningCircle,
} from "@phosphor-icons/react";

interface ProgramInquiryFormProps {
  programId: string;
  programTitle: string;
  programLevel: string;
  programDuration: string;
}

interface Fields {
  parentName: string;
  email: string;
  phone: string;
  studentAge: string;
  preferredMode: string;
  message: string;
}

type Status = "idle" | "submitting" | "success" | "error";

const empty: Fields = {
  parentName: "",
  email: "",
  phone: "",
  studentAge: "",
  preferredMode: "Online cohort",
  message: "",
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldBase =
  "w-full bg-white/[0.04] border text-white placeholder:text-slate-500 text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/40 transition-all";
const labelClass = "text-xs font-600 text-slate-300";

function validate(fields: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (!fields.parentName.trim()) errors.parentName = "Please enter your name.";
  if (!fields.email.trim()) errors.email = "Please enter your email.";
  else if (!emailRe.test(fields.email)) errors.email = "That email doesn't look right.";
  if (!fields.phone.trim()) errors.phone = "Please enter a phone or WhatsApp number.";
  if (fields.message.trim().length < 10) errors.message = "Tell us a little more (10+ characters).";
  return errors;
}

export default function ProgramInquiryForm({
  programId,
  programTitle,
  programLevel,
  programDuration,
}: ProgramInquiryFormProps) {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (key: keyof Fields) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFields((current) => ({ ...current, [key]: event.target.value }));
      if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }));
    };

  const border = (key: keyof Fields) => (errors[key] ? "border-rose-400/50" : "border-white/10");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/program-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, programId, programTitle }),
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      setFields(empty);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="glass-nav-solid rounded-3xl p-8 sm:p-10 text-center min-h-[520px] flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald/25 to-gold/20 border border-white/10 flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-emerald" weight="duotone" />
        </div>
        <h3 className="text-2xl font-300 tracking-tight text-white mb-3">Inquiry sent</h3>
        <p className="text-sm text-slate-400 font-300 leading-relaxed max-w-[42ch] mb-7">
          Thank you for asking about {programTitle}. Our team will review your details and contact you shortly.
        </p>
        <button onClick={() => setStatus("idle")} className="text-sm font-600 text-gold hover:underline underline-offset-4">
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-stretch">
      <div className="glass-nav-solid rounded-3xl p-8 sm:p-10">
        <div className="inline-flex items-center gap-2 glass text-gold text-[11px] font-600 uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-6">
          <Sparkle className="w-3.5 h-3.5" weight="fill" />
          Program Inquiry
        </div>
        <h2 className="text-3xl sm:text-4xl font-200 tracking-tight text-white leading-tight mb-5">
          Ask about <span className="text-gradient-gold font-300">{programTitle}</span>
        </h2>
        <p className="text-sm text-slate-400 font-300 leading-relaxed mb-8">
          Share a few details and we&apos;ll help you with placement, cohort timing, fees, and the best learning path
          for your family.
        </p>
        <div className="space-y-3">
          {[
            ["Level", programLevel],
            ["Duration", programDuration],
            ["Response time", "1-2 working days"],
          ].map(([term, value]) => (
            <div key={term} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <GraduationCap className="w-5 h-5 text-emerald shrink-0 mt-0.5" weight="duotone" />
              <div>
                <div className="text-[11px] uppercase tracking-[0.16em] text-slate-500">{term}</div>
                <div className="text-sm text-slate-200 font-500 mt-0.5">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="glass rounded-3xl p-6 sm:p-8 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor={`${programId}-parentName`} className={labelClass}>
              Parent / guardian name <span className="text-gold">*</span>
            </label>
            <input
              id={`${programId}-parentName`}
              type="text"
              value={fields.parentName}
              onChange={update("parentName")}
              placeholder="Ayesha Haleem"
              className={`${fieldBase} ${border("parentName")}`}
              aria-invalid={!!errors.parentName}
            />
            {errors.parentName && <p className="text-xs text-rose-400">{errors.parentName}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor={`${programId}-email`} className={labelClass}>
              Email <span className="text-gold">*</span>
            </label>
            <input
              id={`${programId}-email`}
              type="email"
              value={fields.email}
              onChange={update("email")}
              placeholder="you@example.com"
              className={`${fieldBase} ${border("email")}`}
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="text-xs text-rose-400">{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="flex flex-col gap-2 sm:col-span-1">
            <label htmlFor={`${programId}-phone`} className={labelClass}>
              WhatsApp / phone <span className="text-gold">*</span>
            </label>
            <input
              id={`${programId}-phone`}
              type="tel"
              value={fields.phone}
              onChange={update("phone")}
              placeholder="+92 321 5161436"
              className={`${fieldBase} ${border("phone")}`}
              aria-invalid={!!errors.phone}
            />
            {errors.phone && <p className="text-xs text-rose-400">{errors.phone}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor={`${programId}-studentAge`} className={labelClass}>
              Student age
            </label>
            <input
              id={`${programId}-studentAge`}
              type="text"
              value={fields.studentAge}
              onChange={update("studentAge")}
              placeholder="9 years"
              className={`${fieldBase} border-white/10`}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor={`${programId}-preferredMode`} className={labelClass}>
              Preferred mode
            </label>
            <select
              id={`${programId}-preferredMode`}
              value={fields.preferredMode}
              onChange={update("preferredMode")}
              className={`${fieldBase} border-white/10`}
            >
              <option className="bg-ink" value="Online cohort">
                Online cohort
              </option>
              <option className="bg-ink" value="In-person / hybrid">
                In-person / hybrid
              </option>
              <option className="bg-ink" value="Not sure yet">
                Not sure yet
              </option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor={`${programId}-message`} className={labelClass}>
            What would you like to know? <span className="text-gold">*</span>
          </label>
          <textarea
            id={`${programId}-message`}
            rows={5}
            value={fields.message}
            onChange={update("message")}
            placeholder="Tell us about the learner, your preferred timing, or any questions about this program."
            className={`${fieldBase} resize-none ${border("message")}`}
            aria-invalid={!!errors.message}
          />
          {errors.message && <p className="text-xs text-rose-400">{errors.message}</p>}
        </div>

        {status === "error" && (
          <div role="alert" className="flex items-start gap-3 rounded-xl border border-rose-400/30 bg-rose-500/10 px-4 py-3">
            <WarningCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" weight="duotone" />
            <p className="text-sm text-rose-200 font-300">
              We couldn&apos;t send your inquiry right now. Please try again, or email us directly.
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
              Sending...
            </>
          ) : (
            <>
              Send Program Inquiry
              <PaperPlaneTilt className="w-4 h-4" weight="fill" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
