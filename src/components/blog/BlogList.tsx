"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { MagnifyingGlass, CalendarBlank, Clock, ArrowRight, Article } from "@phosphor-icons/react";

export interface PostSummary {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function label(cat: string) {
  return cat.replace(/-/g, " ");
}

export default function BlogList({ posts }: { posts: PostSummary[] }) {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((p) => p.category))).sort()],
    [posts],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const matchCat = activeCat === "All" || p.category === activeCat;
      const matchQuery = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [posts, query, activeCat]);

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col gap-5 mb-10">
        <div className="relative max-w-md">
          <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" weight="bold" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles…"
            className="w-full bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-500 text-sm pl-11 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/40 transition-all"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const active = cat === activeCat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`text-xs font-600 px-4 py-2 rounded-full border transition-all capitalize ${
                  active
                    ? "bg-gradient-to-r from-gold-soft to-gold text-ink border-transparent"
                    : "glass text-slate-300 hover:text-white hover:border-white/20"
                }`}
              >
                {label(cat)}
              </button>
            );
          })}
        </div>

        <p className="text-xs text-slate-500 font-mono">
          {filtered.length} of {posts.length} articles
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center glass rounded-3xl py-20 px-6">
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
            <Article className="w-7 h-7 text-slate-500" weight="duotone" />
          </div>
          <h3 className="text-base font-600 text-white mb-1">No articles found</h3>
          <p className="text-sm text-slate-400 font-300 mb-6">Try a different search or category.</p>
          <button
            onClick={() => {
              setQuery("");
              setActiveCat("All");
            }}
            className="text-sm font-600 text-gold hover:underline underline-offset-4"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group glass rounded-3xl overflow-hidden hover:border-gold/30 hover:shadow-[0_18px_44px_-26px_rgba(0,0,0,0.65)] transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img loading="lazy" decoding="async" src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <span className="absolute top-3 left-3 glass text-gold text-[10px] font-700 uppercase tracking-wider px-2.5 py-1 rounded-full capitalize">
                  {label(post.category)}
                </span>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-4 text-[11px] text-slate-500 mb-3 font-mono">
                  <span className="flex items-center gap-1.5">
                    <CalendarBlank className="w-3.5 h-3.5" weight="duotone" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" weight="duotone" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-600 text-white leading-snug mb-3 tracking-tight text-base group-hover:text-gold transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-400 font-300 leading-relaxed flex-1 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-600 text-gold group-hover:gap-2.5 transition-all">
                  Read Article
                  <ArrowRight className="w-4 h-4" weight="bold" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
