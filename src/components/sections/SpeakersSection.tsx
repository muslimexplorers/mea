import { Users, Quotes } from "@phosphor-icons/react/dist/ssr";
import { speakers, type Speaker } from "@/data/speakers";

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <div className="group relative w-[330px] shrink-0 glass rounded-2xl p-6 hover:border-gold/30 transition-all duration-300">
      <Quotes className="absolute top-5 right-5 w-7 h-7 text-white/10" weight="fill" />
      <div className="flex items-center gap-4 mb-5">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-16 h-16 rounded-full object-cover ring-2 ring-white/10"
        />
        <div className="min-w-0">
          <h3 className="text-base font-700 text-white leading-tight group-hover:text-gold transition-colors">
            {speaker.name}
          </h3>
          <p className="text-xs text-emerald mt-1 leading-snug">{speaker.title}</p>
        </div>
      </div>
      <p className="text-sm text-slate-400 leading-relaxed mb-5 line-clamp-3">{speaker.description}</p>
      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
        {speaker.expertise.slice(0, 3).map((e) => (
          <span key={e} className="text-[10px] text-slate-300 bg-white/5 border border-white/10 px-2 py-1 rounded-md">
            {e}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SpeakersSection() {
  const loop = [...speakers, ...speakers];
  return (
    <section className="relative bg-ink-1 py-20 sm:py-28 overflow-hidden border-y border-white/5">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-1/4 w-[460px] h-[300px] rounded-full bg-azure/[0.07] blur-[120px]" />
      </div>

      <div className="relative">
        <div className="max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12 text-center mb-14">
          <div className="inline-flex items-center gap-2 glass text-azure text-xs font-600 px-3.5 py-1.5 rounded-full mb-5">
            <Users className="w-3.5 h-3.5" weight="fill" />
            Distinguished Scholars & Leaders
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-200 tracking-tight text-white mb-4">
            Meet Our <span className="text-gradient-gold">Speakers</span>
          </h2>
          <p className="text-slate-400 text-base max-w-[56ch] mx-auto leading-relaxed">
            Scholars and educators dedicated to nurturing faith, knowledge, and spiritual growth in
            communities worldwide.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-ink-1 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-ink-1 to-transparent z-10 pointer-events-none" />
          <div className="flex gap-5 w-max animate-marquee pause-on-hover px-4">
            {loop.map((speaker, i) => (
              <SpeakerCard key={`${speaker.name}-${i}`} speaker={speaker} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
