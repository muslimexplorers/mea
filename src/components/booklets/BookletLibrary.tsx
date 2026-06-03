"use client";

import { useMemo, useState } from "react";
import { MagnifyingGlass, DownloadSimple, BookOpen } from "@phosphor-icons/react";
import { booklets } from "@/data/booklets";

const tags = ["All", ...Array.from(new Set(booklets.map((b) => b.tag)))];

export default function BookletLibrary() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return booklets.filter((b) => {
      const matchTag = activeTag === "All" || b.tag === activeTag;
      const matchQuery =
        !q || b.title.toLowerCase().includes(q) || b.subtitle.toLowerCase().includes(q);
      return matchTag && matchQuery;
    });
  }, [query, activeTag]);

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
            placeholder="Search booklets…"
            className="w-full bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-500 text-sm pl-11 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/40 transition-all"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => {
            const active = tag === activeTag;
            return (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`text-xs font-600 px-4 py-2 rounded-full border transition-all ${
                  active
                    ? "bg-gradient-to-r from-gold-soft to-gold text-ink border-transparent"
                    : "glass text-slate-300 hover:text-white hover:border-white/20"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        <p className="text-xs text-slate-500 font-mono">
          {filtered.length} of {booklets.length} booklets
        </p>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center glass rounded-3xl py-20 px-6">
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
            <BookOpen className="w-7 h-7 text-slate-500" weight="duotone" />
          </div>
          <h3 className="text-base font-600 text-white mb-1">No booklets found</h3>
          <p className="text-sm text-slate-400 font-300 mb-6">
            Try a different search term or category.
          </p>
          <button
            onClick={() => {
              setQuery("");
              setActiveTag("All");
            }}
            className="text-sm font-600 text-gold hover:underline underline-offset-4"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {filtered.map((booklet) => (
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
      )}
    </div>
  );
}
