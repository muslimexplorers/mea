"use client";

import { useState } from "react";
import { Play, X } from "@phosphor-icons/react";
import { mediaVideos, type MediaVideo } from "@/data/mediaVideos";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function formatViews(views: string) {
  return `${views} ${views === "1" ? "view" : "views"}`;
}

export default function MediaGallery() {
  const [active, setActive] = useState<MediaVideo | null>(null);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mediaVideos.map((video) => (
          <button
            key={video.id}
            onClick={() => setActive(video)}
            className="group text-left"
            aria-label={`Play: ${video.title}`}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden glass p-1.5 mb-3 transition-all duration-300 group-hover:border-gold/30 group-hover:shadow-[0_16px_38px_-24px_rgba(0,0,0,0.6)]">
              <img
                src={video.thumbnail}
                alt={video.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-xl group-hover:scale-[1.04] transition-transform duration-700"
              />
              <span className="absolute bottom-3 right-3 rounded-md bg-ink/85 px-2 py-1 text-[11px] font-700 text-white">
                {video.duration}
              </span>
              <div className="absolute inset-1.5 rounded-xl bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="w-14 h-14 rounded-full bg-gold/90 text-ink flex items-center justify-center shadow-lg">
                  <Play className="w-6 h-6 ml-0.5" weight="fill" />
                </span>
              </div>
            </div>
            <h3 className="text-sm font-600 text-white leading-snug line-clamp-2 group-hover:text-gold transition-colors px-0.5">
              {video.title}
            </h3>
            <p className="text-[11px] text-slate-500 font-mono mt-1 px-0.5">
              {formatDate(video.publishedAt)} &middot; {formatViews(video.views)}
            </p>
          </button>
        ))}
      </div>

      <p className="text-center text-xs text-slate-500 font-mono pt-8">
        Showing {mediaVideos.length} videos from the Muslim Explorers YouTube channel
      </p>

      {active && (
        <div
          className="fixed inset-0 z-[60] bg-ink/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Close video"
            className="absolute top-5 right-5 w-11 h-11 glass rounded-full flex items-center justify-center text-white hover:border-gold/40 transition-all"
          >
            <X className="w-5 h-5" weight="bold" />
          </button>
          <div className="w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
            <div className="aspect-video rounded-2xl overflow-hidden glass p-1.5">
              <iframe
                src={`https://www.youtube.com/embed/${active.id}?autoplay=1&rel=0`}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-xl"
              />
            </div>
            <p className="text-center text-sm text-slate-300 font-300 mt-4 px-6">{active.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}
