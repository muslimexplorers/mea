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
import { programs, type ProgramIcon } from "@/data/programs";

const icons: Record<ProgramIcon, typeof BookOpen> = { BookOpen, Atom, Binoculars, Clock, Heart };

const featured = programs[0];
const FeaturedIcon = icons[featured.icon];
const rest = programs.slice(1, 3);

function Meta({ students, duration, size = "sm" }: { students: string; duration: string; size?: "sm" | "xs" }) {
  const cls = size === "sm" ? "text-xs" : "text-[11px]";
  return (
    <div className={`flex items-center gap-4 ${cls} text-slate-400 font-mono`}>
      <span className="flex items-center gap-1.5">
        <Users className="w-3.5 h-3.5 text-emerald" weight="duotone" />
        {students}
      </span>
      <span className="flex items-center gap-1.5">
        <Clock className="w-3.5 h-3.5 text-emerald" weight="duotone" />
        {duration}
      </span>
    </div>
  );
}

export default function ProgramsSection() {
  return (
    <section className="relative bg-ink py-20 sm:py-28 overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-20 w-[460px] h-[460px] rounded-full bg-emerald/[0.07] blur-[120px]" />
        <div className="absolute bottom-10 right-0 w-[400px] h-[400px] rounded-full bg-gold/[0.06] blur-[120px]" />
      </div>

      <div className="relative max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 glass text-gold text-xs font-600 px-3.5 py-1.5 rounded-full mb-5">
            Curriculum
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-200 tracking-tight text-white mb-5">
            Our <span className="text-gradient-gold">Learning Programs</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Programs that blend traditional Islamic knowledge with modern learning methodologies —
            built for curious minds at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Feature card */}
          <Link
            href={`/programs/${featured.id}`}
            className="lg:col-span-5 group relative rounded-3xl glass overflow-hidden hover:border-gold/30 hover:shadow-[0_18px_44px_-26px_rgba(0,0,0,0.65)] transition-all duration-300"
          >
            <div className="relative h-60 overflow-hidden">
              <img loading="lazy" decoding="async" src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <span className="absolute top-4 left-4 glass text-white text-xs font-600 px-3 py-1 rounded-full">
                {featured.level}
              </span>
              <div className="absolute top-4 right-4 w-10 h-10 glass rounded-xl flex items-center justify-center">
                <FeaturedIcon className="w-5 h-5 text-gold" weight="duotone" />
              </div>
            </div>
            <div className="p-7">
              <div className="mb-3">
                <Meta students={`${featured.students} students`} duration={featured.duration} />
              </div>
              <h3 className="text-2xl font-700 text-white mb-3 tracking-tight group-hover:text-gold transition-colors">
                {featured.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">{featured.description}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-600 text-gold group-hover:gap-2.5 transition-all">
                Explore Program
                <ArrowRight className="w-4 h-4" weight="bold" />
              </span>
            </div>
          </Link>

          {/* Stacked cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rest.map((program) => {
              const Icon = icons[program.icon];
              return (
                <Link
                  key={program.id}
                  href={`/programs/${program.id}`}
                  className="group relative rounded-3xl glass overflow-hidden hover:border-emerald/30 hover:shadow-[0_18px_44px_-26px_rgba(0,0,0,0.65)] transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img loading="lazy" decoding="async" src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                    <span className="absolute top-3 left-3 glass text-white text-xs font-600 px-2.5 py-1 rounded-full">
                      {program.level}
                    </span>
                    <div className="absolute top-3 right-3 w-9 h-9 glass rounded-xl flex items-center justify-center">
                      <Icon className="w-4 h-4 text-emerald" weight="duotone" />
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="mb-2">
                      <Meta students={`${program.students}`} duration={program.duration} size="xs" />
                    </div>
                    <h3 className="text-base font-700 text-white mb-2 tracking-tight group-hover:text-emerald transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3 flex-1">
                      {program.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-600 text-emerald group-hover:gap-2 transition-all">
                      Explore
                      <ArrowRight className="w-3.5 h-3.5" weight="bold" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 glass text-white px-7 py-3.5 rounded-xl font-600 text-sm hover:bg-white/[0.08] hover:border-gold/30 transition-all"
          >
            View all learning programs
            <ArrowRight className="w-4 h-4 text-gold" weight="bold" />
          </Link>
        </div>
      </div>
    </section>
  );
}
