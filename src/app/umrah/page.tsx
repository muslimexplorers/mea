import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  MapTrifold,
  Mosque,
  Mountains,
  Path,
  Sparkle,
  Star,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import PageHeader from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Umrah Journeys",
  description:
    "A Muslim Explorers spiritual expedition across the sacred routes of Arabia, from Makkah and Madinah to the Southern Heights and Ancient North.",
};

const features = [
  {
    icon: Mosque,
    title: "Worship at the centre",
    description: "Begin in Makkah with spiritual grounding, complete Umrah, and return for a second night of devotion in the Haram.",
  },
  {
    icon: MapTrifold,
    title: "Sacred routes",
    description: "Trace the journey from Makkah to Madinah through Darb Al Anbiya, reflecting on Hijrah and prophetic history.",
  },
  {
    icon: UsersThree,
    title: "Guided expedition",
    description: "A curated group experience combining logistics, learning, reflection, and historical exploration.",
  },
];

const routeStops = [
  { place: "Makkah", note: "The epicentre" },
  { place: "Al Baha -> Abha", note: "The Southern Heights" },
  { place: "Makkah", note: "Spiritual renewal" },
  { place: "Madinah", note: "The peaceful sanctuary" },
  { place: "AlUla -> Tabuk -> Jabal Toor -> Madayan -> Haql", note: "The Ancient North" },
];

const journey = [
  {
    title: "Arrival in Makkah",
    eyebrow: "2 nights",
    icon: Mosque,
    description:
      "Step into the heart of the Islamic world. These first nights are dedicated to arrival, spiritual preparation, and grounding the heart before the wider expedition begins.",
    details: ["Focus on spiritual preparation", "Time in the Haram", "Orientation for the journey ahead"],
  },
  {
    title: "The Southern Heights",
    eyebrow: "4 days / 3 nights",
    icon: Mountains,
    description:
      "From Makkah, ascend toward Al Baha and Abha for a luxury road expedition through misty mountains, ancient stone villages, lush peaks, and high-altitude landscapes.",
    details: ["Makkah -> Al Baha -> Abha -> Makkah", "Mountain terrain and fog", "Nature, heritage, and reflection"],
  },
  {
    title: "Return to the Heart",
    eyebrow: "1 night",
    icon: Sparkle,
    description:
      "Descend from the mountains back to the sacred sanctuary for a second Umrah, a night of renewed devotion under the golden lights of the Haram.",
    details: ["Second Umrah", "Renewed worship", "A quieter moment of devotion before departure"],
  },
  {
    title: "The Sacred Hijrah",
    eyebrow: "3 days / 2 nights",
    icon: Path,
    description:
      "Travel from Makkah to Madinah along Darb Al Anbiya, retracing desert trails connected to the greatest migration in history.",
    details: ["Makkah to Madinah", "Route: Darb Al Anbiya", "History, endurance, and prophetic memory"],
  },
  {
    title: "The City of Light",
    eyebrow: "5 days",
    icon: Star,
    description:
      "Enter the sanctuary of peace. Spend unhurried days in Madinah with reflection in Masjid Nabawi and an expansive exploration of historical Ziyaraat sites.",
    details: ["Stay in Madinah", "Reflection in Masjid Nabawi", "Exploration of 100 Ziyaraat sites"],
  },
  {
    title: "The Ancient North",
    eyebrow: "4-5 days",
    icon: MapTrifold,
    description:
      "Continue from Madinah into the canyons, coasts, and ancient routes of northern Arabia: AlUla, the Ghazwah Tabuk route, Jabal Toor, Madayan, and Haql.",
    details: ["Madinah -> AlUla -> Tabuk -> Jabal Toor -> Madayan -> Haql", "Nabataean heritage and sacred geography", "Canyons, coasts, and desert routes"],
  },
];

export default function UmrahPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tours"
        title="Umrah"
        highlight="journeys"
        description="A spiritual expedition across the sacred routes of Arabia: worship in Makkah, reflection in Madinah, mountain roads, Hijrah trails, and ancient northern landscapes."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Umrah" }]}
        accent="emerald"
      />

      <section className="relative bg-ink py-20 sm:py-28 overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-[460px] h-[320px] rounded-full bg-emerald/[0.06] blur-[120px]" />
          <div className="absolute bottom-20 right-1/5 w-[420px] h-[280px] rounded-full bg-gold/[0.05] blur-[120px]" />
        </div>
        <div className="relative max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center mb-16">
            <div>
              <div className="inline-flex items-center gap-2 glass text-gold text-[11px] font-600 uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-6">
                Muslim Explorers Expedition
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-200 tracking-tight text-white leading-[1.1] mb-6">
                Explore history. <span className="text-gradient-gold font-300">Experience spirituality.</span>
              </h2>
              <p className="text-lg text-slate-400 font-300 leading-relaxed mb-8">
                This journey is more than a package itinerary. It is a guided movement through sacred memory:
                the awe of Makkah, the peace of Madinah, the courage of Hijrah, and the landscapes where history
                still feels close enough to touch.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-soft to-gold text-ink px-7 py-3.5 rounded-xl font-700 text-sm hover:shadow-[0_0_20px_-8px_rgba(245,197,66,0.35)] active:scale-[0.98] transition-all"
                >
                  Register Interest
                  <ArrowRight className="w-4 h-4" weight="bold" />
                </Link>
                <a
                  href="#journey-plan"
                  className="inline-flex items-center justify-center gap-2 glass text-white px-7 py-3.5 rounded-xl font-600 text-sm hover:bg-white/[0.08] active:scale-[0.98] transition-all"
                >
                  View Route
                </a>
              </div>
            </div>

            <div className="glass-nav-solid rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-7">
                <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-emerald/20 border border-white/10 flex items-center justify-center">
                  <MapTrifold className="w-6 h-6 text-gold" weight="duotone" />
                </span>
                <div>
                  <div className="text-sm font-600 text-white">The Expedition Route</div>
                  <div className="text-xs text-slate-500">A sacred arc across Arabia</div>
                </div>
              </div>
              <ol className="relative border-l border-white/10 ml-3 space-y-6">
                {routeStops.map((stop) => (
                  <li key={`${stop.place}-${stop.note}`} className="relative pl-7">
                    <span className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-gold to-emerald ring-4 ring-ink" />
                    <h3 className="text-base font-600 text-white">{stop.place}</h3>
                    <p className="text-sm text-slate-400 font-300 mt-1">{stop.note}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="glass rounded-2xl p-6 hover:border-emerald/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-emerald/20 border border-white/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-emerald" weight="duotone" />
                </div>
                <h3 className="text-base font-600 text-white mb-2 tracking-tight">{title}</h3>
                <p className="text-sm text-slate-400 font-300 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          <div id="journey-plan" className="mb-16">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-200 tracking-tight text-white mb-4">
                Journey <span className="text-gradient-gold font-300">narrative</span>
              </h2>
              <p className="text-slate-400 font-300 text-base leading-relaxed">
                Each stage is designed to move the traveller from preparation to worship, from worship to history,
                and from history to a renewed sense of purpose.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {journey.map(({ icon: Icon, title, eyebrow, description, details }) => (
                <article key={title} className="glass rounded-2xl p-6 sm:p-7 hover:border-gold/30 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-5">
                    <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-emerald/20 border border-white/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-gold" weight="duotone" />
                    </span>
                    <div>
                      <div className="text-[11px] font-700 uppercase tracking-[0.18em] text-emerald mb-1">{eyebrow}</div>
                      <h3 className="text-xl font-500 text-white tracking-tight">{title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 font-300 leading-relaxed mb-5">{description}</p>
                  <ul className="space-y-2.5">
                    {details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br from-gold/20 to-emerald/20 border border-white/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-emerald" weight="bold" />
                        </span>
                        <span className="text-sm text-slate-300 font-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="glass-nav-solid rounded-3xl p-8 sm:p-10 text-center">
            <div className="inline-flex items-center gap-2 glass text-gold text-[11px] font-600 uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-5">
              <Sparkle className="w-3.5 h-3.5" weight="fill" />
              Dates announced seasonally
            </div>
            <h2 className="text-2xl sm:text-3xl font-300 tracking-tight text-white mb-3">
              Register your <span className="text-gradient-gold">interest</span>
            </h2>
            <p className="text-sm text-slate-400 font-300 leading-relaxed max-w-[54ch] mx-auto mb-7">
              Be first to hear about upcoming expedition dates, package details, and group availability.
              Leave us a message and our team will follow up with the next Umrah journey plan.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-soft to-gold text-ink px-7 py-3.5 rounded-xl font-700 text-sm hover:shadow-[0_0_20px_-8px_rgba(245,197,66,0.35)] active:scale-[0.98] transition-all"
            >
              Register Interest
              <ArrowRight className="w-4 h-4" weight="bold" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
