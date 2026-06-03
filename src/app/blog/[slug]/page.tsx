import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarBlank, Clock, UserCircle, ArrowLeft, ArrowRight, Tag } from "@phosphor-icons/react/dist/ssr";
import { blogPosts } from "@/data/blog-posts";

type Params = Promise<{ slug: string }>;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

const label = (cat: string) => cat.replace(/-/g, " ");

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: "/og-image.webp",
          width: 1200,
          height: 630,
          alt: "Muslim Explorers Academy",
          type: "image/webp",
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/og-image.webp"],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const sameCategory = blogPosts.filter((p) => p.category === post.category && p.slug !== slug);
  const related = (sameCategory.length >= 3
    ? sameCategory
    : [...sameCategory, ...blogPosts.filter((p) => p.slug !== slug && p.category !== post.category)]
  ).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink border-b border-white/5">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 starfield opacity-40 animate-twinkle" />
          <div className="absolute -top-32 right-0 w-[520px] h-[520px] rounded-full bg-gold/10 blur-[120px] animate-glow" />
          <div className="absolute top-20 left-1/4 w-[320px] h-[320px] rounded-full bg-emerald/[0.07] blur-[110px]" />
        </div>

        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 pt-32 pb-12 sm:pt-36">
          <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-7">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-slate-300 truncate max-w-[16rem]">{post.title}</span>
          </nav>

          <span className="inline-flex items-center gap-1.5 glass text-gold text-[11px] font-700 uppercase tracking-[0.15em] px-3 py-1.5 rounded-full mb-6 capitalize">
            {label(post.category)}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-200 text-white tracking-tight leading-[1.1] mb-7">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-slate-400 font-300">
            <span className="flex items-center gap-2">
              <UserCircle className="w-5 h-5 text-emerald" weight="duotone" />
              {post.author}
            </span>
            <span className="flex items-center gap-2 font-mono text-xs">
              <CalendarBlank className="w-4 h-4 text-emerald" weight="duotone" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2 font-mono text-xs">
              <Clock className="w-4 h-4 text-emerald" weight="duotone" />
              {post.readTime}
            </span>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 pb-4">
          <div className="rounded-3xl overflow-hidden glass p-2">
            <img loading="lazy" decoding="async" src={post.image} alt={post.title} className="w-full h-[260px] sm:h-[420px] object-cover rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="relative bg-ink py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <article className="article-prose" dangerouslySetInnerHTML={{ __html: post.article }} />

          {/* Tags */}
          {post.tags?.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-white/10">
              <Tag className="w-4 h-4 text-slate-500" weight="duotone" />
              {post.tags.map((t) => (
                <span key={t} className="text-xs text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          )}

          <div className="mt-10">
            <Link href="/blog" className="inline-flex items-center gap-2 glass text-white px-5 py-3 rounded-xl font-600 text-sm hover:bg-white/[0.08] hover:border-gold/30 transition-all">
              <ArrowLeft className="w-4 h-4 text-gold" weight="bold" />
              Back to all articles
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="relative bg-ink-1 py-20 sm:py-24 border-t border-white/5">
          <div className="max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12">
            <h2 className="text-2xl sm:text-3xl font-300 tracking-tight text-white mb-10">
              Keep <span className="text-gradient-gold">reading</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group glass rounded-3xl overflow-hidden hover:border-gold/30 transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img loading="lazy" decoding="async" src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                    <span className="absolute top-3 left-3 glass text-gold text-[10px] font-700 uppercase tracking-wider px-2.5 py-1 rounded-full capitalize">
                      {label(p.category)}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-600 text-white group-hover:text-gold transition-colors line-clamp-2">{p.title}</h3>
                    <span className="inline-flex items-center gap-1.5 text-xs font-600 text-gold mt-3 group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-3.5 h-3.5" weight="bold" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
