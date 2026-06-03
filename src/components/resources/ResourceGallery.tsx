"use client";

import { useMemo, useState } from "react";
import { ArrowSquareOut, X } from "@phosphor-icons/react";
import type { ResourceCategory, ResourceItem } from "@/lib/pcloudResources";

function formatSize(bytes: number) {
  if (!bytes) return "";
  const mb = bytes / 1024 / 1024;
  return `${mb.toFixed(mb >= 10 ? 0 : 1)} MB`;
}

export default function ResourceGallery({ categories }: { categories: ResourceCategory[] }) {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id ?? "");
  const [activeItem, setActiveItem] = useState<ResourceItem | null>(null);

  const activeCategory = useMemo(
    () => categories.find((category) => category.id === activeCategoryId) ?? categories[0],
    [activeCategoryId, categories],
  );

  if (!activeCategory) {
    return (
      <div className="glass rounded-3xl px-6 py-16 text-center">
        <h2 className="text-xl font-600 text-white">Resources are unavailable right now</h2>
        <p className="text-sm text-slate-400 mt-2">Please check the pCloud share link and try again shortly.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex gap-3 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategoryId(category.id)}
            className={`shrink-0 rounded-xl border px-4 py-3 text-left transition-all ${
              category.id === activeCategory.id
                ? "border-gold/60 bg-gold/10 text-white"
                : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-gold/30 hover:bg-white/[0.06]"
            }`}
          >
            <span className="block text-sm font-700">{category.label}</span>
            <span className="mt-0.5 block text-[11px] font-mono text-slate-500">{category.count} images</span>
          </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div>
          <h2 className="text-2xl sm:text-3xl font-300 tracking-tight text-white">{activeCategory.label}</h2>
          <p className="text-sm text-slate-500 mt-1">{activeCategory.count} infographics loaded directly from pCloud.</p>
        </div>
        <a
          href="https://u.pcloud.link/publink/show?code=kZphkf5ZaNsQg1XMYhQD1mkMtXvAaFvHetEy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 glass text-white px-5 py-3 rounded-xl font-600 text-sm hover:border-gold/30 hover:bg-white/[0.08] transition-all shrink-0"
        >
          Open pCloud Folder
          <ArrowSquareOut className="w-4 h-4 text-gold" weight="bold" />
        </a>
      </div>

      <div className="columns-1 sm:columns-2 xl:columns-3 2xl:columns-4 gap-6 [column-fill:_balance]">
        {activeCategory.items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group mb-6 w-full break-inside-avoid text-left"
            aria-label={`Open ${item.title}`}
          >
            <span className="block glass rounded-2xl p-1.5 transition-all duration-300 group-hover:border-gold/30 group-hover:shadow-[0_16px_38px_-24px_rgba(0,0,0,0.7)]">
              <img
                src={item.thumbnailUrl}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full rounded-xl object-cover"
              />
            </span>
            <span className="block px-1 pt-3 text-sm font-600 leading-snug text-white group-hover:text-gold transition-colors">
              {item.title || item.filename}
            </span>
            <span className="block px-1 pt-1 text-[11px] font-mono text-slate-500">
              {item.width}x{item.height} {formatSize(item.size) && `- ${formatSize(item.size)}`}
            </span>
          </button>
        ))}
      </div>

      {activeItem && (
        <div
          className="fixed inset-0 z-[60] bg-ink/92 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveItem(null)}
        >
          <button
            onClick={() => setActiveItem(null)}
            aria-label="Close resource preview"
            className="absolute top-5 right-5 w-11 h-11 glass rounded-full flex items-center justify-center text-white hover:border-gold/40 transition-all"
          >
            <X className="w-5 h-5" weight="bold" />
          </button>
          <div className="max-h-full w-full max-w-5xl overflow-auto" onClick={(event) => event.stopPropagation()}>
            <img src={activeItem.previewUrl} alt={activeItem.title} className="mx-auto max-h-[82vh] rounded-2xl object-contain" />
            <p className="text-center text-sm text-slate-300 font-300 mt-4 px-6">{activeItem.title || activeItem.filename}</p>
          </div>
        </div>
      )}
    </div>
  );
}
