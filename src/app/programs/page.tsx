import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Clock,
  BookOpen,
  Atom,
  Binoculars,
  Heart,
} from "@phosphor-icons/react/dist/ssr";
import PageHeader from "@/components/layout/PageHeader";
import { programs, type ProgramIcon } from "@/data/programs";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Muslim Explorers learning programs — from Islamic Sciences and Quran with Meaning to STEAM & Islam, Astronomy, History & Seerah, and Deen & Its Spirit.",
};

const icons: Record<ProgramIcon, typeof BookOpen> = { BookOpen, Atom, Binoculars, Clock, Heart };

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Curriculum"
        title="Learning"
        highlight="programs"
        description="Programs that blend traditional Islamic knowledge with modern learning methodologies — built for curious minds at every stage."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Programs" }]}
      />

      <section className="relative bg-ink py-20 sm:py-28 overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 -left-20 w-[460px] h-[460px] rounded-full bg-emerald/[0.06] blur-[120px]" />
          <div className="absolute bottom-10 right-0 w-[400px] h-[400px] rounded-full bg-gold/[0.06] blur-[120px]" />
        </div>

        <div className="relative max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => {
              const Icon = icons[program.icon];
              return (
                <Link
                  key={program.id}
                  href={`/programs/${program.id}`}
                  className="group glass rounded-3xl overflow-hidden hover:border-gold/30 hover:shadow-[0_18px_44px_-26px_rgba(0,0,0,0.65)] transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img loading="lazy" decoding="async" src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                    <span className="absolute top-3 left-3 glass text-white text-xs font-600 px-2.5 py-1 rounded-full">
                      {program.level}
                    </span>
                    <div className="absolute top-3 right-3 w-9 h-9 glass rounded-xl flex items-center justify-center">
                      <Icon className="w-4 h-4 text-gold" weight="duotone" />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-[11px] text-slate-400 mb-3 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-emerald" weight="duotone" />
                        {program.students}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-emerald" weight="duotone" />
                        {program.duration}
                      </span>
                    </div>
                    <h3 className="text-lg font-600 text-white mb-2 tracking-tight group-hover:text-gold transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-sm text-slate-400 font-300 leading-relaxed mb-5 flex-1">
                      {program.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-600 text-gold group-hover:gap-2.5 transition-all">
                      Explore Program
                      <ArrowRight className="w-4 h-4" weight="bold" />
                    </span>
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
