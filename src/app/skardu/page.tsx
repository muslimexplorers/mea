import type { Metadata } from "next";
import Link from "next/link";
import { Mountains, Atom, Compass, ArrowRight, Sparkle } from "@phosphor-icons/react/dist/ssr";
import PageHeader from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Skardu & Beyond",
  description:
    "Educational expeditions through Allah's creation — reflection, field science, and heritage across Pakistan's most breathtaking landscapes.",
};

const features = [
  { icon: Mountains, title: "Reflection in nature", description: "Tafakkur amidst mountains, valleys, and rivers — reading the signs of the Creator first-hand." },
  { icon: Atom, title: "Science in the field", description: "Hands-on STEAM learning where the classroom becomes the natural world itself." },
  { icon: Compass, title: "Heritage & history", description: "Tracing routes, cultures, and stories that shaped the region across centuries." },
];

const images = [
  "/images/explore/routes/01.jpg",
  "/images/explore/nature/09.jpg",
  "/images/explore/nature/17.jpg",
];

export default function SkarduPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tours"
        title="Skardu &"
        highlight="beyond"
        description="Educational expeditions through Allah's creation — where reflection, field science, and heritage meet across Pakistan's most breathtaking landscapes."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Skardu" }]}
        accent="azure"
      />

      <section className="relative bg-ink py-20 sm:py-28 overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-1/4 w-[460px] h-[320px] rounded-full bg-azure/[0.06] blur-[120px]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Image strip */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            {images.map((src, i) => (
              <div key={src} className={`rounded-2xl overflow-hidden glass p-1.5 ${i === 1 ? "mt-6" : ""}`}>
                <img loading="lazy" decoding="async" src={src} alt="Expedition moment" className="w-full h-40 sm:h-56 object-cover rounded-xl" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="glass rounded-2xl p-6 hover:border-azure/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-azure/20 to-emerald/20 border border-white/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-azure" weight="duotone" />
                </div>
                <h3 className="text-base font-600 text-white mb-2 tracking-tight">{title}</h3>
                <p className="text-sm text-slate-400 font-300 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          <div className="glass-nav-solid rounded-3xl p-8 sm:p-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 glass text-gold text-[11px] font-600 uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-5">
              <Sparkle className="w-3.5 h-3.5" weight="fill" />
              Expeditions announced seasonally
            </div>
            <h2 className="text-2xl sm:text-3xl font-300 tracking-tight text-white mb-3">
              Join the next <span className="text-gradient-gold">expedition</span>
            </h2>
            <p className="text-sm text-slate-400 font-300 leading-relaxed max-w-[46ch] mx-auto mb-7">
              Tell us you&apos;re interested and we&apos;ll share upcoming dates, routes, and how to
              take part.
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
