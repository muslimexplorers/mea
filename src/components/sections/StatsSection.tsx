import { Users, BookOpen, Globe, Star } from "@phosphor-icons/react/dist/ssr";
import { stats, type IconName } from "@/data/stats";

const icons: Record<IconName, typeof Users> = { Users, BookOpen, Globe, Star };

export default function StatsSection() {
  return (
    <section className="relative bg-ink-1 border-y border-white/5 overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] rounded-full bg-gold/[0.06] blur-[100px]" />
      </div>
      <div className="relative max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x divide-white/10">
          {stats.map(({ icon, value, label }) => {
            const Icon = icons[icon];
            return (
              <div key={label} className="flex items-center gap-4 px-2 lg:px-8 py-4">
                <div className="w-11 h-11 glass rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-gold" weight="duotone" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-800 text-white tracking-tight font-mono">
                    {value}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 uppercase tracking-[0.15em]">
                    {label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
