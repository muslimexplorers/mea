"use client";

import { useMemo, useState, useCallback, useEffect } from "react";
import { X, CaretLeft, CaretRight, MagnifyingGlassPlus } from "@phosphor-icons/react";
import { galleryData, type GalleryImage } from "@/data/galleryData";

const categories = Object.keys(galleryData);

function label(key: string) {
  return key
    .split("-")
    .map((w) => (["of", "and"].includes(w) ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");
}

export default function GalleryView() {
  const [activeCat, setActiveCat] = useState(categories[0]);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const images: GalleryImage[] = useMemo(() => galleryData[activeCat] ?? [], [activeCat]);

  const close = useCallback(() => setLightbox(null), []);
  const go = useCallback(
    (dir: 1 | -1) => {
      setLightbox((i) => {
        if (i === null) return i;
        return (i + dir + images.length) % images.length;
      });
    },
    [images.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, close, go]);

  const current = lightbox !== null ? images[lightbox] : null;

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => {
          const active = cat === activeCat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`text-xs font-600 px-4 py-2 rounded-full border transition-all ${
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

      {/* Masonry */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
        {images.map((img, i) => (
          <button
            key={`${activeCat}-${img.id}`}
            onClick={() => setLightbox(i)}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl glass p-1.5 text-left"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-1.5 rounded-xl bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <p className="text-xs text-slate-200 leading-snug mb-2">{img.caption}</p>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-600 text-gold">
                <MagnifyingGlassPlus className="w-3.5 h-3.5" weight="bold" />
                View
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-[60] bg-ink/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-5 w-11 h-11 glass rounded-full flex items-center justify-center text-white hover:border-gold/40 transition-all"
          >
            <X className="w-5 h-5" weight="bold" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); go(-1); }}
            aria-label="Previous"
            className="absolute left-3 sm:left-6 w-11 h-11 glass rounded-full flex items-center justify-center text-white hover:border-gold/40 transition-all"
          >
            <CaretLeft className="w-5 h-5" weight="bold" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); go(1); }}
            aria-label="Next"
            className="absolute right-3 sm:right-6 w-11 h-11 glass rounded-full flex items-center justify-center text-white hover:border-gold/40 transition-all"
          >
            <CaretRight className="w-5 h-5" weight="bold" />
          </button>

          <figure className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={current.alt} className="w-full max-h-[78vh] object-contain rounded-2xl" />
            <figcaption className="text-center text-sm text-slate-300 font-300 mt-4 px-6">
              {current.caption}
              <span className="block text-xs text-slate-500 font-mono mt-1">
                {lightbox! + 1} / {images.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
