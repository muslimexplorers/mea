import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  Users,
  Clock,
  GraduationCap,
  Check,
  CalendarBlank,
  BookOpen,
  Atom,
  Binoculars,
  Heart,
} from "@phosphor-icons/react/dist/ssr";
import { programs, type ProgramIcon } from "@/data/programs";
import { programDetails } from "@/data/program-details";
import ProgramInquiryForm from "@/components/forms/ProgramInquiryForm";

const icons: Record<ProgramIcon, typeof BookOpen> = { BookOpen, Atom, Binoculars, Clock, Heart };

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.id === slug);
  if (!program) return { title: "Program not found" };
  return { title: program.title, description: program.description };
}

export default async function ProgramDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const program = programs.find((p) => p.id === slug);
  const detail = programDetails[slug];
  if (!program || !detail) notFound();

  const Icon = icons[program.icon];
  const related = programs.filter((p) => p.id !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink border-b border-white/5">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 starfield opacity-50 animate-twinkle" />
          <div className="absolute inset-0 grid-faint opacity-40" />
          <div className="absolute -top-32 right-0 w-[520px] h-[520px] rounded-full bg-gold/10 blur-[120px] animate-glow" />
          <div className="absolute top-20 left-1/4 w-[320px] h-[320px] rounded-full bg-emerald/[0.07] blur-[110px]" />
        </div>

        <div className="relative max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12 pt-32 pb-16 sm:pt-36 sm:pb-20">
          <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-7">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/programs" className="hover:text-gold transition-colors">Programs</Link>
            <span>/</span>
            <span className="text-slate-300">{program.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold/20 to-emerald/20 border border-white/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gold" weight="duotone" />
                </div>
                <span className="glass text-white text-xs font-600 px-3 py-1.5 rounded-full">
                  {program.level}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-200 text-white tracking-tight leading-[1.04] mb-6">
                {program.title}
              </h1>
              <p className="text-lg text-slate-400 font-300 leading-relaxed max-w-[54ch] mb-8">
                {detail.overview}
              </p>

              <div className="flex flex-wrap gap-3 mb-9">
                {[
                  { icon: Clock, label: program.duration },
                  { icon: Users, label: `${program.students} students` },
                  { icon: GraduationCap, label: program.level },
                ].map(({ icon: Chip, label }) => (
                  <span key={label} className="inline-flex items-center gap-2 glass text-slate-300 text-xs font-500 px-3.5 py-2 rounded-full">
                    <Chip className="w-3.5 h-3.5 text-emerald" weight="duotone" />
                    {label}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-soft to-gold text-ink px-7 py-3.5 rounded-xl font-700 text-sm hover:shadow-[0_0_20px_-8px_rgba(245,197,66,0.35)] active:scale-[0.98] transition-all"
                >
                  Enroll / Enquire
                  <ArrowRight className="w-4 h-4" weight="bold" />
                </Link>
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center gap-2 glass text-white px-7 py-3.5 rounded-xl font-600 text-sm hover:bg-white/[0.08] transition-all"
                >
                  <ArrowLeft className="w-4 h-4 text-gold" weight="bold" />
                  All Programs
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden glass p-2">
                <img loading="lazy" decoding="async" src={program.image} alt={program.title} className="w-full h-[360px] object-cover rounded-2xl" />
              </div>
              <div className="absolute -bottom-5 left-6 glass-nav-solid rounded-2xl px-5 py-3 flex items-center gap-3 animate-float">
                <CalendarBlank className="w-5 h-5 text-emerald" weight="duotone" />
                <div className="text-xs text-slate-300 max-w-[14rem]">{detail.format}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes + info */}
      <section className="relative bg-ink py-20 sm:py-28 overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-[460px] h-[320px] rounded-full bg-emerald/[0.06] blur-[120px]" />
        </div>
        <div className="relative max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-300 tracking-tight text-white mb-8">
              What you&apos;ll <span className="text-gradient-gold">learn</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {detail.outcomes.map((o) => (
                <div key={o} className="flex items-start gap-3 glass rounded-2xl p-5">
                  <span className="w-7 h-7 rounded-full bg-gradient-to-br from-gold/20 to-emerald/20 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-emerald" weight="bold" />
                  </span>
                  <span className="text-sm text-slate-300 font-300 leading-relaxed">{o}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="glass rounded-3xl p-6 h-fit">
            <h3 className="text-sm font-600 text-white mb-5 uppercase tracking-[0.15em] text-gold/90">
              At a glance
            </h3>
            <dl className="space-y-4">
              {[
                { icon: Clock, term: "Duration", desc: program.duration },
                { icon: GraduationCap, term: "Level", desc: program.level },
                { icon: Users, term: "Who it's for", desc: detail.audience },
                { icon: CalendarBlank, term: "Format", desc: detail.format },
              ].map(({ icon: DIcon, term, desc }) => (
                <div key={term} className="flex items-start gap-3">
                  <DIcon className="w-5 h-5 text-emerald shrink-0 mt-0.5" weight="duotone" />
                  <div>
                    <dt className="text-[11px] text-slate-500 uppercase tracking-wider">{term}</dt>
                    <dd className="text-sm text-slate-300 font-300">{desc}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* Inquiry */}
      <section className="relative bg-ink-1 py-20 sm:py-24 border-t border-white/5 overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-1/4 w-[460px] h-[320px] rounded-full bg-gold/[0.06] blur-[120px]" />
          <div className="absolute bottom-0 left-1/5 w-[420px] h-[280px] rounded-full bg-emerald/[0.05] blur-[120px]" />
        </div>
        <div className="relative max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12">
          <ProgramInquiryForm
            programId={program.id}
            programTitle={program.title}
            programLevel={program.level}
            programDuration={program.duration}
          />
        </div>
      </section>

      {/* Related */}
      <section className="relative bg-ink-1 py-20 sm:py-24 border-t border-white/5">
        <div className="max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-2xl sm:text-3xl font-300 tracking-tight text-white mb-10">
            Other <span className="text-gradient-gold">programs</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p) => {
              const RIcon = icons[p.icon];
              return (
                <Link
                  key={p.id}
                  href={`/programs/${p.id}`}
                  className="group glass rounded-3xl overflow-hidden hover:border-gold/30 transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img loading="lazy" decoding="async" src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                    <div className="absolute top-3 right-3 w-9 h-9 glass rounded-xl flex items-center justify-center">
                      <RIcon className="w-4 h-4 text-gold" weight="duotone" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-600 text-white group-hover:text-gold transition-colors">{p.title}</h3>
                    <p className="text-xs text-slate-400 font-300 mt-1.5 line-clamp-2">{p.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
