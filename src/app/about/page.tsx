import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Lightbulb,
  Heart,
  Globe,
  ArrowRight,
  CaretDown,
  Check,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import PageHeader from "@/components/layout/PageHeader";
import StatsSection from "@/components/sections/StatsSection";
import TeachersSection from "@/components/sections/TeachersSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Muslim Explorers bridges classical Islamic scholarship with modern science through immersive programs and a thriving global community of learners.",
};

const pillars = [
  { icon: BookOpen, title: "Traditional Scholarship", description: "Rooted in authentic Islamic knowledge and classical scholarship for accuracy, isnād, and integrity." },
  { icon: Lightbulb, title: "Modern Innovation", description: "Contemporary pedagogy, digital delivery, and interactive formats that make learning accessible and engaging." },
  { icon: Heart, title: "Spiritual Growth", description: "A curriculum that nurtures ihsān through practice, reflection, and steady community support." },
  { icon: Globe, title: "Global Community", description: "A connected network of learners and teachers spanning more than fifteen countries." },
];

const highlights = [
  "Authentic sources, modern method",
  "Spiritually grounded, intellectually rigorous",
  "Online & hybrid — learn from anywhere",
];

const timeline = [
  { year: "2020", title: "Foundation", description: "Launched to bridge Islamic knowledge with contemporary scientific understanding." },
  { year: "2021", title: "First Programs", description: "Inaugural Quran & Science cohorts engaged 500+ students across regions." },
  { year: "2022", title: "Global Expansion", description: "Scaled internationally with multilingual delivery and community partnerships." },
  { year: "2023", title: "Digital Innovation", description: "Introduced immersive online platforms and modular, outcomes-based curricula." },
  { year: "2024", title: "Future Vision", description: "Advancing mentorship and guided learning paths for the next generation of explorers." },
];

const faqs = [
  { q: "What makes Muslim Explorers different?", a: "We blend authentic classical sources with modern scientific thinking — programs that are spiritually grounded and intellectually rigorous, without compromising either." },
  { q: "Do you operate internationally?", a: "Yes. While our HQ is in Islamabad, Pakistan, we serve learners worldwide through online and hybrid experiences." },
  { q: "How can I join a program?", a: "Explore our Programs page and reach out — our team will follow up with cohort dates and onboarding details." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Est. 2020 · Islamabad"
        title="Where tradition meets"
        highlight="innovation"
        description="We bridge classical Islamic scholarship and modern science — building confident, ethical, and future-ready learners through immersive programs and a thriving global community."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Mission */}
      <section className="relative bg-ink py-20 sm:py-28 overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 -left-20 w-[440px] h-[440px] rounded-full bg-gold/[0.06] blur-[120px]" />
        </div>
        <div className="relative max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 glass text-gold text-[11px] font-600 uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-6">
              Our Mission
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-200 tracking-tight text-white leading-[1.1] mb-6">
              Harmonizing <span className="text-gradient-gold font-300">dīn and ʿilm</span>
            </h2>
            <p className="text-lg text-slate-400 font-300 leading-relaxed mb-8">
              Where traditional Islamic knowledge and contemporary science empower personal growth,
              critical inquiry, and lasting benefit to society.
            </p>
            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-gold/20 to-emerald/20 border border-white/10 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-emerald" weight="bold" />
                  </span>
                  <span className="text-sm text-slate-300 font-300">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden glass p-1.5 mt-8">
                <img loading="lazy" decoding="async" src="/images/deen-and-its-spirit-me.jpg" alt="Muslim Explorers learning session" className="w-full h-56 object-cover rounded-xl" />
              </div>
              <div className="rounded-2xl overflow-hidden glass p-1.5">
                <img loading="lazy" decoding="async" src="/images/muslim-kids-intro.jpg" alt="The Muslim Explorers team" className="w-full h-56 object-cover rounded-xl" />
              </div>
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 glass-nav-solid rounded-2xl px-5 py-3 flex items-center gap-3 animate-float">
              <Sparkle className="w-5 h-5 text-gold" weight="fill" />
              <div>
                <div className="text-sm font-600 text-white">Faith × Science</div>
                <div className="text-[11px] text-slate-400">United in every program</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative bg-ink-1 py-20 sm:py-28 border-y border-white/5 overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-1/4 w-[460px] h-[320px] rounded-full bg-emerald/[0.06] blur-[120px]" />
        </div>
        <div className="relative max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-200 tracking-tight text-white mb-4">
              What we <span className="text-gradient-gold font-300">stand for</span>
            </h2>
            <p className="text-slate-400 font-300 text-base leading-relaxed">
              Four pillars guide everything we build and teach.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group glass rounded-2xl p-6 hover:border-gold/30 hover:shadow-[0_16px_38px_-24px_rgba(0,0,0,0.6)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-emerald/20 border border-white/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-gold" weight="duotone" />
                </div>
                <h3 className="text-base font-600 text-white mb-2 tracking-tight">{title}</h3>
                <p className="text-sm text-slate-400 font-300 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <StatsSection />

      {/* Journey */}
      <section className="relative bg-ink py-20 sm:py-28 overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-[400px] h-[300px] rounded-full bg-azure/[0.06] blur-[120px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-200 tracking-tight text-white mb-4">
              Our <span className="text-gradient-gold font-300">journey</span>
            </h2>
            <p className="text-slate-400 font-300 text-base leading-relaxed max-w-[48ch] mx-auto">
              From a spark to a movement — the milestones that shaped our path.
            </p>
          </div>

          <ol className="relative border-l border-white/10 ml-3 space-y-10">
            {timeline.map((t) => (
              <li key={t.year} className="relative pl-8">
                <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-gold to-emerald ring-4 ring-ink" />
                <div className="flex items-baseline gap-3 mb-1.5">
                  <span className="text-2xl font-200 text-gold tracking-tight font-mono">{t.year}</span>
                  <h3 className="text-base font-600 text-white">{t.title}</h3>
                </div>
                <p className="text-sm text-slate-400 font-300 leading-relaxed">{t.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <TeachersSection />

      {/* FAQs */}
      <section className="relative bg-ink py-20 sm:py-28 overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-200 tracking-tight text-white mb-10 text-center">
            Common <span className="text-gradient-gold font-300">questions</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group glass rounded-2xl px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-600 text-white">
                  {faq.q}
                  <CaretDown className="w-4 h-4 text-gold shrink-0 transition-transform duration-200 group-open:rotate-180" weight="bold" />
                </summary>
                <p className="mt-3 text-sm text-slate-400 font-300 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-ink-1 border-t border-white/5 py-20 sm:py-24 overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[280px] rounded-full bg-gold/[0.07] blur-[120px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-200 tracking-tight text-white mb-5">
            Join our <span className="text-gradient-gold font-300">community</span>
          </h2>
          <p className="text-slate-400 font-300 text-base leading-relaxed max-w-[50ch] mx-auto mb-9">
            Be part of a movement transforming Islamic education for the next generation of explorers
            and leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-soft to-gold text-ink px-7 py-3.5 rounded-xl font-700 text-sm hover:shadow-[0_0_20px_-8px_rgba(245,197,66,0.35)] active:scale-[0.98] transition-all"
            >
              Explore Programs
              <ArrowRight className="w-4 h-4" weight="bold" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 glass text-white px-7 py-3.5 rounded-xl font-600 text-sm hover:bg-white/[0.08] active:scale-[0.98] transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
