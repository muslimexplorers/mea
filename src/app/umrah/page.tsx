import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import PageHeader from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Paths of Revelation | Umrah Journey",
  description:
    "A 21-day family Seerah expedition across Arabia with Umrah, Makkah, Madinah, Al Baha, Abha, Al-Hijr near AlUla, Tabuk, Madyan, and Haql.",
};

const overview = [
  { label: "Duration", value: "21-day family expedition" },
  { label: "Season", value: "August 2026 to February 2027" },
  { label: "Format", value: "Open for families and private groups" },
  { label: "Focus", value: "Umrah, Seerah, Qur'anic history, and reflection" },
];

const routeStops = [
  { place: "Makkah", note: "Arrival, first Umrah, and the beginnings of revelation" },
  { place: "Al Baha and Abha", note: "Southern mountains, family reflection, and nature sessions" },
  { place: "Makkah", note: "Second Umrah and renewed worship in the Haram" },
  { place: "Madinah", note: "Hijrah route learning and the Madinah 100 Ziyarat program" },
  {
    place: "Al-Hijr near AlUla and Tabuk",
    note: "A guided reflection on Mada'in Salih, the people of Thamud, and the Ghazwah Tabuk route",
  },
  { place: "Mount Sinai Region, Madyan, and Haql", note: "Prophetic stories, sacred geography, and northern frontiers" },
];

const journey = [
  {
    title: "The City of Revelation",
    eyebrow: "Part one: Makkah Al-Mukarramah",
    duration: "2 nights",
    description:
      "The journey begins in the sacred city of Makkah, where families reconnect with the House of Allah, perform Umrah, reflect on the beginnings of revelation, and prepare their hearts for the road ahead.",
    details: [
      "The story of Ibrahim (A.S.) and Ismail (A.S.)",
      "The foundations of the Ka'bah",
      "The beginnings of Islam",
      "Sites connected to the Prophet (peace be upon him) and the earliest Muslims",
    ],
  },
  {
    title: "The Mountains of Reflection",
    eyebrow: "Part two: Al Baha to Abha",
    duration: "4 days and 3 nights",
    description:
      "Leaving Makkah behind, families travel south into green mountains, forests, valleys, and cooler weather. This stage slows the pace so families can reflect, reconnect, and appreciate Allah's creation together.",
    details: [
      "Gratitude, tawakkul, and Qur'anic reflections from nature",
      "Family bonding experiences and nature reflection walks",
      "Spiritual journaling for parents, youth, and children",
      "Youth identity and leadership discussions",
    ],
  },
  {
    title: "Returning to the Sacred House",
    eyebrow: "Part three: Abha to Makkah",
    duration: "1 night",
    description:
      "After the southern exploration, the group returns to Makkah for a second Umrah: a powerful opportunity to return to Allah with renewed appreciation, knowledge, and gratitude.",
    details: [
      "Second Umrah in Makkah",
      "One night stay near the sacred sanctuary",
      "A quieter moment of worship before the Hijrah route begins",
    ],
  },
  {
    title: "The Road of Hijrah",
    eyebrow: "Part four: Makkah to Madinah",
    duration: "3 days and 2 nights",
    description:
      "Rather than simply moving between the two sacred cities, families travel through routes associated with the Hijrah and Darb al-Anbiya, turning transportation into education.",
    details: [
      "The story of the migration",
      "The sacrifices of the Sahabah",
      "Lessons of trust, patience, and perseverance",
      "Important historical stops along the route",
    ],
  },
  {
    title: "The City of the Prophet",
    eyebrow: "Part five: Madinah Al-Munawwarah",
    duration: "5 days",
    description:
      "Few places transform hearts like Madinah. Families spend five unforgettable days immersed in the Seerah of the Prophet (peace be upon him), learning how Madinah became the model Islamic society.",
    details: [
      "Historic masajid, homes of the Sahabah, wells, valleys, markets, and mountains",
      "Battle sites and locations connected to the daily life of the Prophet (peace be upon him)",
      "The Madinah 100 Ziyarat program",
      "A living study of Seerah for children, parents, and elders",
    ],
  },
  {
    title: "The Lands of Prophets and Civilizations",
    eyebrow: "Part six: Madinah to Haql",
    duration: "4 to 5 days",
    description:
      "The final stage takes families into some of Arabia's most fascinating regions, combining Seerah, Qur'anic history, prophetic stories, geography, nature exploration, and family reflection.",
    details: [
      "Al-Hijr near AlUla, approached as a place of humility, gratitude, and Qur'anic learning",
      "The Ghazwah Tabuk route",
      "The Mount Sinai region and reflections on the story of Prophet Musa (A.S.)",
      "Madyan and Haql at Saudi Arabia's northern frontier",
    ],
  },
];

const alHijrBlessings = [
  "Extraordinary engineering",
  "Homes carved into mountains",
  "Prosperity and wealth",
  "Advanced craftsmanship",
];

const alHijrNotHereFor = [
  "Seeking entertainment",
  "Treating the site as a theme park",
  "Taking prideful or disrespectful photographs",
  "Mocking, joking about, or trivialising history",
  "Focusing only on architecture while forgetting the lesson",
];

const alHijrHereFor = [
  "Reflecting upon the power of Allah",
  "Learning from the mistakes of previous nations",
  "Strengthening our faith in the Qur'an",
  "Appreciating the reality of prophetic history",
  "Increasing gratitude for Allah's blessings",
  "Connecting Islamic history with the world around us",
];

const reflectionQuestions = [
  "What blessings did Allah give these people?",
  "Why did they fail despite their achievements?",
  "What lessons does modern civilization need to learn from them?",
  "How can I avoid arrogance and ingratitude?",
  "What message is Allah teaching me through this place?",
];

const explorerMindset = [
  "Every mountain is a lesson.",
  "Every valley is a reminder.",
  "Every historical site is a classroom.",
  "We do not merely observe history. We learn from it, reflect upon it, and allow it to bring us closer to Allah.",
];

const alHijrReminders = [
  "Maintain respect and humility at all times",
  "Follow the instructions of your trip leaders",
  "Keep the area clean and do not litter",
  "Make du'a, reflect, and move on",
];

const journeyIntentions = [
  "A journey of the heart, not just the eyes",
  "A journey of reflection, not just photos",
  "A journey of connection, not just collection",
  "A journey that benefits our Deen and Dunya",
];

const familyFeatures = [
  "Family-friendly learning experiences",
  "Children's Seerah storytelling sessions",
  "Parent reflection circles",
  "Youth identity and iman development",
  "Nature exploration and spiritual journaling",
  "Daily Qur'an and du'a sessions",
  "A comfortable pace designed for meaningful learning",
];

const audiences = [
  "Families of all ages",
  "Homeschooling families",
  "Islamic schools and educational groups",
  "Community organisations and youth groups",
  "Reverts and new Muslims",
  "Grandparents travelling with children and grandchildren",
];

const differences = [
  "Travel with purpose",
  "Learn Seerah where it happened",
  "Discover Qur'anic signs in nature",
  "Connect history with geography",
  "Strengthen family bonds",
  "Build memories rooted in faith",
];

export default function UmrahPage() {
  return (
    <>
      <PageHeader
        eyebrow="Muslim Explorers Academy presents"
        title="Paths of"
        highlight="Revelation"
        description="A sacred 21-day family Seerah expedition across Arabia: from Umrah in Makkah to Madinah, the Hijrah routes, the southern mountains, and the lands connected to Prophets, civilizations, and Qur'anic reminders."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Umrah" }]}
        accent="emerald"
      />

      <section className="relative bg-ink py-20 sm:py-28 overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-[460px] h-[320px] rounded-full bg-emerald/[0.06] blur-[120px]" />
          <div className="absolute bottom-20 right-1/5 w-[420px] h-[280px] rounded-full bg-gold/[0.05] blur-[120px]" />
        </div>

        <div className="relative max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center mb-16">
            <div>
              <div className="inline-flex glass text-gold text-[11px] font-600 uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-6">
                The journey of a lifetime
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-200 tracking-tight text-white leading-[1.1] mb-6">
                Not a vacation. <span className="text-gradient-gold font-300">Not a sightseeing tour.</span>
              </h2>
              <div className="space-y-5 text-lg text-slate-400 font-300 leading-relaxed mb-8">
                <p>
                  This is a journey through the lands where revelation descended, Prophets walked, battles were fought,
                  civilizations rose and fell, and families reconnect with Allah through Seerah, reflection, and exploration.
                </p>
                <p>
                  From Makkah to Madinah and beyond, families travel through sacred landscapes, retrace the footsteps of
                  heroes of faith, and connect deeply with the stories of the Qur'an.
                </p>
              </div>
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
                  className="inline-flex items-center justify-center glass text-white px-7 py-3.5 rounded-xl font-600 text-sm hover:bg-white/[0.08] active:scale-[0.98] transition-all"
                >
                  View Journey Plan
                </a>
              </div>
            </div>

            <div className="glass-nav-solid rounded-3xl p-4 sm:p-5">
              <div className="aspect-video overflow-hidden rounded-2xl bg-black border border-white/10">
                <video
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label="Paths of Revelation Umrah expedition video"
                >
                  <source src="/res/umrah-tour-mea.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="px-1 pt-5">
                <p className="text-[11px] font-700 uppercase tracking-[0.2em] text-emerald mb-2">
                  Expedition preview
                </p>
                <h3 className="text-xl sm:text-2xl font-400 text-white tracking-tight">
                  Walk the paths of the Prophets. Strengthen your iman. Create memories for a lifetime.
                </h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-16">
            {overview.map((item) => (
              <div key={item.label} className="glass rounded-2xl p-5">
                <div className="text-[11px] font-700 uppercase tracking-[0.18em] text-gold mb-2">{item.label}</div>
                <p className="text-base text-white font-400 leading-snug">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-10 items-start mb-16">
            <div className="lg:sticky lg:top-28">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-200 tracking-tight text-white mb-4">
                A sacred arc <span className="text-gradient-gold font-300">across Arabia</span>
              </h2>
              <p className="text-slate-400 font-300 text-base leading-relaxed">
                The route is designed as a living classroom. Each stop carries a spiritual, historical, or family
                reflection purpose, so the experience moves from worship to Seerah, and from Seerah to personal growth.
              </p>
            </div>

            <div className="glass-nav-solid rounded-3xl p-6 sm:p-8">
              <ol className="relative border-l border-white/10 ml-4 space-y-7">
                {routeStops.map((stop, index) => (
                  <li key={`${stop.place}-${stop.note}`} className="relative pl-8">
                    <span className="absolute -left-[18px] top-0 w-9 h-9 rounded-full bg-ink border border-gold/35 text-gold flex items-center justify-center text-sm font-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base sm:text-lg font-600 text-white">{stop.place}</h3>
                    <p className="text-sm text-slate-400 font-300 mt-1 leading-relaxed">{stop.note}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div id="journey-plan" className="mb-16">
            <div className="max-w-4xl mb-10">
              <div className="inline-flex glass text-gold text-[11px] font-600 uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-5">
                Six-part expedition
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-200 tracking-tight text-white mb-4">
                Journey <span className="text-gradient-gold font-300">narrative</span>
              </h2>
              <p className="text-slate-400 font-300 text-base leading-relaxed">
                Each stage has been shaped for worship, historical learning, Qur'anic reflection, and family growth.
                Children, parents, and elders are invited to experience Seerah as something lived, walked, and remembered.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {journey.map((stage, index) => (
                <article key={stage.title} className="glass rounded-2xl p-6 sm:p-7 hover:border-gold/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
                    <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/15 to-emerald/15 border border-white/10 text-gold flex items-center justify-center shrink-0 text-sm font-800">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="text-[11px] font-700 uppercase tracking-[0.18em] text-emerald mb-1">
                        {stage.eyebrow}
                      </div>
                      <h3 className="text-xl font-500 text-white tracking-tight">{stage.title}</h3>
                      <p className="text-sm text-gold-soft/80 mt-1">{stage.duration}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 font-300 leading-relaxed mb-5">{stage.description}</p>
                  <ul className="space-y-2.5">
                    {stage.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-gold to-emerald shrink-0" />
                        <span className="text-sm text-slate-300 font-300 leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <section className="mb-16">
            <div className="glass-nav-solid rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-10 items-start mb-10">
                <div>
                  <div className="inline-flex glass text-gold text-[11px] font-600 uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-5">
                    Visitor guidance
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-200 tracking-tight text-white mb-4">
                    Al-Hijr <span className="text-gradient-gold font-300">(Mada'in Salih)</span>
                  </h2>
                  <p className="text-slate-400 font-300 text-base leading-relaxed">
                    The region of Al-Hijr, also known as Mada'in Salih, is associated with the people of Prophet
                    Salih (A.S.) and the nation of Thamud mentioned repeatedly in the Qur'an. While many may view
                    this location as an archaeological wonder, Muslims approach it through the lens of the Qur'an
                    and Sunnah.
                  </p>
                </div>

                <div className="rounded-2xl border border-gold/20 bg-gold/[0.06] p-6 sm:p-7">
                  <p className="text-[11px] font-800 uppercase tracking-[0.2em] text-gold mb-3">
                    This is not a tourist attraction
                  </p>
                  <div className="space-y-4 text-sm sm:text-base text-slate-300 font-300 leading-relaxed">
                    <p>
                      This is a place of reflection, humility, gratitude, and learning. It is not a place for
                      entertainment, amusement, or casual sightseeing.
                    </p>
                    <p>
                      Participants are reminded to approach the site as students of history and seekers of guidance,
                      not as tourists collecting images without absorbing the lesson.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
                <article className="glass rounded-2xl p-6 sm:p-7">
                  <div className="text-[11px] font-800 uppercase tracking-[0.18em] text-emerald mb-3">
                    What happened here
                  </div>
                  <p className="text-sm text-slate-400 font-300 leading-relaxed mb-5">
                    Allah blessed the people of Thamud with remarkable ability and material strength, yet many among
                    them rejected the message brought by Prophet Salih (A.S.). Their story became a lasting reminder
                    for humanity.
                  </p>
                  <ul className="space-y-2.5">
                    {alHijrBlessings.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald shrink-0" />
                        <span className="text-sm text-slate-300 font-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <blockquote className="mt-6 border-l-2 border-gold/50 pl-4 text-sm text-gold-soft font-300 leading-relaxed">
                    "Travel through the earth and observe how was the end of those before."
                    <span className="block text-xs text-slate-500 mt-2">Qur'an</span>
                  </blockquote>
                </article>

                <article className="glass rounded-2xl p-6 sm:p-7">
                  <div className="text-[11px] font-800 uppercase tracking-[0.18em] text-gold mb-3">
                    The Prophet's guidance
                  </div>
                  <p className="text-sm text-slate-400 font-300 leading-relaxed mb-5">
                    When the Prophet Muhammad (peace be upon him) passed through this region during the expedition
                    to Tabuk, he instructed his companions not to enter such places carelessly or with amusement.
                  </p>
                  <p className="text-sm text-slate-300 font-300 leading-relaxed mb-5">
                    Instead, they were to remember Allah, reflect upon His signs, and take lessons from the fate of
                    previous nations.
                  </p>
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-[11px] font-800 uppercase tracking-[0.18em] text-emerald mb-2">
                      The message is clear
                    </p>
                    <p className="text-lg text-white font-300 leading-snug">
                      Do not approach this place as tourists. Approach it as students of history and seekers of
                      guidance.
                    </p>
                  </div>
                </article>

                <article className="glass rounded-2xl p-6 sm:p-7">
                  <div className="text-[11px] font-800 uppercase tracking-[0.18em] text-gold mb-3">
                    Our purpose today
                  </div>
                  <p className="text-sm font-700 uppercase tracking-[0.14em] text-red-300 mb-3">We are not here to</p>
                  <ul className="space-y-2.5 mb-6">
                    {alHijrNotHereFor.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-300 shrink-0" />
                        <span className="text-sm text-slate-300 font-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-700 uppercase tracking-[0.14em] text-emerald mb-3">We are here to</p>
                  <ul className="space-y-2.5">
                    {alHijrHereFor.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald shrink-0" />
                        <span className="text-sm text-slate-300 font-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-5">
                <article className="glass rounded-2xl p-6 sm:p-7">
                  <div className="text-[11px] font-800 uppercase tracking-[0.18em] text-gold mb-5">
                    Questions to reflect on
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {reflectionQuestions.map((question, index) => (
                      <div key={question} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                        <span className="text-sm font-800 text-gold">{String(index + 1).padStart(2, "0")}</span>
                        <p className="text-sm text-slate-300 font-300 leading-relaxed mt-3">{question}</p>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="glass rounded-2xl p-6 sm:p-7">
                  <div className="text-[11px] font-800 uppercase tracking-[0.18em] text-emerald mb-3">
                    A final reflection
                  </div>
                  <p className="text-sm text-slate-400 font-300 leading-relaxed mb-4">
                    As you stand before these magnificent rock-carved dwellings, do not ask only, "How great were
                    these people?" Instead ask, "What lesson is Allah teaching me through their story?"
                  </p>
                  <p className="text-sm text-slate-300 font-300 leading-relaxed">
                    True exploration is not about seeing more places. It is about seeing the signs of Allah more
                    clearly.
                  </p>
                  <p className="mt-5 text-sm text-gold-soft font-300 leading-relaxed">
                    "And We certainly left of it a sign as clear evidence for a people who use reason."
                    <span className="block text-xs text-slate-500 mt-2">Qur'an 29:35</span>
                  </p>
                </article>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
                <article className="glass rounded-2xl p-6 sm:p-7">
                  <div className="text-[11px] font-800 uppercase tracking-[0.18em] text-emerald mb-4">
                    The Muslim Explorer's mindset
                  </div>
                  <ul className="space-y-3">
                    {explorerMindset.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-gold to-emerald shrink-0" />
                        <span className="text-sm text-slate-300 font-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="glass rounded-2xl p-6 sm:p-7">
                  <div className="text-[11px] font-800 uppercase tracking-[0.18em] text-gold mb-4">
                    Important reminders
                  </div>
                  <ul className="space-y-3">
                    {alHijrReminders.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        <span className="text-sm text-slate-300 font-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="glass rounded-2xl p-6 sm:p-7">
                  <div className="text-[11px] font-800 uppercase tracking-[0.18em] text-emerald mb-4">
                    Let our journey be
                  </div>
                  <ul className="space-y-3">
                    {journeyIntentions.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald shrink-0" />
                        <span className="text-sm text-slate-300 font-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-16">
            <section className="glass rounded-2xl p-6 sm:p-7">
              <h2 className="text-xl font-500 text-white tracking-tight mb-3">Designed for families</h2>
              <p className="text-sm text-slate-400 font-300 leading-relaxed mb-5">
                The pace is comfortable and the learning is practical, so every generation can take part meaningfully.
              </p>
              <ul className="space-y-2.5">
                {familyFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald shrink-0" />
                    <span className="text-sm text-slate-300 font-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-7">
              <h2 className="text-xl font-500 text-white tracking-tight mb-3">Open to the Ummah</h2>
              <p className="text-sm text-slate-400 font-300 leading-relaxed mb-5">
                Families may travel from the United Kingdom, United States, Canada, Australia, Europe, Africa, Asia,
                the Gulf, and beyond.
              </p>
              <ul className="space-y-2.5">
                {audiences.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span className="text-sm text-slate-300 font-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-7">
              <h2 className="text-xl font-500 text-white tracking-tight mb-3">Why this journey is different</h2>
              <p className="text-sm text-slate-400 font-300 leading-relaxed mb-5">
                Your children will not simply learn about Islamic history. They will walk through it.
              </p>
              <ul className="space-y-2.5">
                {differences.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-gold to-emerald shrink-0" />
                    <span className="text-sm text-slate-300 font-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="glass-nav-solid rounded-3xl p-8 sm:p-10 text-center">
            <div className="inline-flex glass text-gold text-[11px] font-600 uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-5">
              Available dates
            </div>
            <h2 className="text-2xl sm:text-3xl font-300 tracking-tight text-white mb-3">
              Open from <span className="text-gradient-gold">August 2026 to February 2027</span>
            </h2>
            <p className="text-sm text-slate-400 font-300 leading-relaxed max-w-[62ch] mx-auto mb-7">
              Customised family packages are available for families, educational groups, schools, institutes, and
              private groups. Itineraries can be tailored around interests, schedule, and learning objectives.
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
