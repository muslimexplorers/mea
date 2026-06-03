import { teachers } from "@/data/teachers";

export default function TeachersSection() {
  return (
    <section className="relative bg-ink py-20 sm:py-28 overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[480px] h-[360px] rounded-full bg-emerald/[0.07] blur-[120px]" />
        <div className="absolute top-10 right-1/4 w-[360px] h-[300px] rounded-full bg-gold/[0.05] blur-[120px]" />
      </div>

      <div className="relative max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass text-emerald text-xs font-600 px-3.5 py-1.5 rounded-full mb-5">
            Inspiring Educators
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-200 tracking-tight text-white mb-4">
            Meet Our <span className="text-gradient-gold font-300">Teachers</span>
          </h2>
          <p className="text-slate-400 text-base max-w-[52ch] mx-auto leading-relaxed font-300">
            Educators dedicated to nurturing faith, knowledge, and creativity in the next generation.
          </p>
        </div>

        {/* Four cards in a single row on desktop; 2 / 1 on smaller screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((teacher) => (
            <div
              key={teacher.name}
              className="group glass rounded-3xl p-7 text-center flex flex-col items-center hover:border-gold/30 hover:shadow-[0_18px_44px_-26px_rgba(0,0,0,0.65)] transition-all duration-300"
            >
              {/* Avatar */}
              <div className="relative mb-5">
                <span className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-gold/30 to-emerald/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="relative w-24 h-24 rounded-full object-cover ring-2 ring-white/10"
                />
                {teacher.active && (
                  <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald border-[3px] border-ink rounded-full" />
                )}
              </div>

              {/* Name + role */}
              <h3 className="text-lg font-600 text-white tracking-tight group-hover:text-gold transition-colors">
                {teacher.name}
              </h3>
              <p className="text-sm text-emerald/90 mt-1 leading-snug min-h-[2.5rem] flex items-center">
                {teacher.role}
              </p>

              {/* Qualification */}
              <p className="text-xs text-slate-400 font-300 italic leading-relaxed mt-3 mb-6">
                {teacher.qualification}
              </p>

              {/* Specialties */}
              <div className="mt-auto w-full pt-5 border-t border-white/10">
                <p className="text-[10px] font-700 uppercase tracking-[0.18em] text-gold/80 mb-3">
                  Specialties
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {teacher.specialties.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
