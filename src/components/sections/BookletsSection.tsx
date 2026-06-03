import Link from "next/link";
import { ArrowRight, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { booklets } from "@/data/booklets";

const featured = booklets.slice(0, 6);

export default function BookletsSection() {
  return (
    <section className="relative bg-ink-1 py-20 sm:py-28 overflow-hidden border-y border-white/5">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-faint opacity-30" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] rounded-full bg-gold/[0.07] blur-[120px]" />
      </div>

      <div className="relative max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass text-gold text-xs font-600 px-3.5 py-1.5 rounded-full mb-5">
            Free Resources
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-200 tracking-tight text-white mb-4">
            Booklets <span className="text-gradient-gold">Library</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-[48ch] mx-auto">
            Beautifully illustrated workbooks connecting the Quran with the natural world. Download
            any title instantly — no sign-up required.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {featured.map((booklet) => (
            <div key={booklet.id} className="group flex flex-col">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden glass p-1.5 mb-3 transition-all duration-300 group-hover:border-gold/30 group-hover:shadow-[0_16px_38px_-24px_rgba(0,0,0,0.6)]">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-b ${booklet.gradient}`} />
                  <img
                    src={booklet.cover}
                    alt={booklet.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <div className="text-[9px] font-700 uppercase tracking-[0.15em] text-gold/90 mb-1">
                      {booklet.tag}
                    </div>
                    <div className="text-sm font-700 text-white leading-tight">{booklet.title}</div>
                  </div>
                </div>
              </div>

              <div className="mb-2 px-0.5">
                <div className="text-xs font-600 text-slate-200 leading-tight">{booklet.title}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{booklet.subtitle}</div>
              </div>

              <a
                href={booklet.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 w-full glass text-slate-300 hover:text-gold hover:border-gold/30 text-[11px] font-600 py-2 rounded-lg transition-all active:scale-[0.97]"
              >
                <DownloadSimple className="w-3.5 h-3.5" weight="bold" />
                Download PDF
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/booklets"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-soft to-gold text-ink px-8 py-3.5 rounded-xl font-700 text-sm hover:shadow-[0_0_20px_-8px_rgba(245,197,66,0.35)] active:scale-[0.98] transition-all"
          >
            View All {booklets.length} Booklets
            <ArrowRight className="w-4 h-4" weight="bold" />
          </Link>
        </div>
      </div>
    </section>
  );
}
