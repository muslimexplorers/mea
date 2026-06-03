"use client";

import { useState } from "react";
import {
  CaretDown,
  BookOpen,
  Target,
  UserPlus,
  CalendarBlank,
  Sun,
  CurrencyDollar,
  ArrowRight,
} from "@phosphor-icons/react";
import { faqs, type FaqIcon } from "@/data/faqs";
import { siteConfig } from "@/data/site";

const icons: Record<FaqIcon, typeof BookOpen> = {
  BookOpen,
  Target,
  UserPlus,
  CalendarBlank,
  Sun,
  CurrencyDollar,
};

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section className="relative bg-ink-1 py-20 sm:py-28 overflow-hidden border-t border-white/5">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gold/[0.06] blur-[120px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass text-gold text-xs font-600 px-3.5 py-1.5 rounded-full mb-5">
            Common Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-200 tracking-tight text-white mb-5">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-[50ch] mx-auto">
            Everything you need to know about our curriculum, sessions, and learning approach.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => {
            const Icon = icons[faq.icon];
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`glass rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen ? "border-gold/30" : "hover:border-white/20"
                }`}
              >
                <button
                  className="w-full flex items-center gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="inline-flex items-center text-[10px] font-700 uppercase tracking-wider text-emerald bg-emerald/10 border border-emerald/20 px-2.5 py-1 rounded-full shrink-0">
                    {faq.tag}
                  </span>
                  <span className="flex-1 text-sm font-600 text-white">{faq.question}</span>
                  <CaretDown
                    className={`w-4 h-4 text-gold shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    weight="bold"
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <div className="flex gap-4">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold/20 to-emerald/20 border border-white/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-gold" weight="duotone" />
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed pt-1.5">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center glass rounded-3xl p-8">
          <p className="text-base font-700 text-white mb-1">Still have questions?</p>
          <p className="text-sm text-slate-400 mb-6">
            Our team is here to help you find the right program.
          </p>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-soft to-gold text-ink px-6 py-3 rounded-xl text-sm font-700 hover:shadow-[0_0_20px_-8px_rgba(245,197,66,0.35)] active:scale-[0.98] transition-all"
          >
            Contact Us Directly
            <ArrowRight className="w-4 h-4" weight="bold" />
          </a>
        </div>
      </div>
    </section>
  );
}
