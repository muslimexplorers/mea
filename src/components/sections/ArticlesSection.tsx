import Link from "next/link";
import { ArrowRight, CalendarBlank, Clock } from "@phosphor-icons/react/dist/ssr";
import { blogPosts } from "@/data/blog-posts";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

const latest = [...blogPosts].sort((a, b) => +new Date(b.date) - +new Date(a.date)).slice(0, 3);

export default function ArticlesSection() {
  return (
    <section className="relative bg-ink py-20 sm:py-28 overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[440px] h-[340px] rounded-full bg-gold/[0.06] blur-[120px]" />
      </div>

      <div className="relative max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 glass text-gold text-xs font-600 px-3.5 py-1.5 rounded-full mb-5">
              From the Journal
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-200 tracking-tight text-white mb-4">
              Latest <span className="text-gradient-gold">Articles</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Insights on Islamic scholarship, spirituality, and modern living.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-2 glass text-white px-5 py-3 rounded-xl font-600 text-sm hover:border-gold/30 hover:bg-white/[0.08] transition-all shrink-0"
          >
            View all
            <ArrowRight className="w-4 h-4 text-gold" weight="bold" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latest.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className="group glass rounded-3xl overflow-hidden hover:border-gold/30 hover:shadow-[0_18px_44px_-26px_rgba(0,0,0,0.65)] transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img loading="lazy" decoding="async" src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <span className="absolute top-3 left-3 glass text-gold text-[10px] font-700 uppercase tracking-wider px-2.5 py-1 rounded-full capitalize">
                  {article.category.replace("-", " ")}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-4 text-[11px] text-slate-500 mb-3 font-mono">
                  <span className="flex items-center gap-1.5">
                    <CalendarBlank className="w-3.5 h-3.5" weight="duotone" />
                    {formatDate(article.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" weight="duotone" />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="font-700 text-white leading-snug mb-3 tracking-tight text-base group-hover:text-gold transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-600 text-gold group-hover:gap-2.5 transition-all">
                  Read Article
                  <ArrowRight className="w-4 h-4" weight="bold" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
