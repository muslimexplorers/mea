import type { Metadata } from "next";
import { YoutubeLogo } from "@phosphor-icons/react/dist/ssr";
import PageHeader from "@/components/layout/PageHeader";
import MediaGallery from "@/components/media/MediaGallery";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Watch lectures, reflections, and episodes from the Muslim Explorers YouTube channel - Islamic scholarship meets modern science.",
};

export default function MediaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Watch & Learn"
        title="Media &"
        highlight="videos"
        description="Lectures, reflections, and episodes from our YouTube channel, available here without an API dependency."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Media" }]}
        accent="azure"
      />

      <section className="relative bg-ink py-16 sm:py-20 overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-1/4 w-[460px] h-[320px] rounded-full bg-gold/[0.06] blur-[120px]" />
        </div>

        <div className="relative max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold/20 to-emerald/20 border border-white/10 flex items-center justify-center">
                <YoutubeLogo className="w-6 h-6 text-gold" weight="duotone" />
              </span>
              <div>
                <div className="text-sm font-600 text-white">Latest from our channel</div>
                <div className="text-xs text-slate-500">@muslimexplorers on YouTube</div>
              </div>
            </div>
            <a
              href={siteConfig.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 glass text-white px-5 py-3 rounded-xl font-600 text-sm hover:border-gold/30 hover:bg-white/[0.08] transition-all shrink-0"
            >
              <YoutubeLogo className="w-5 h-5 text-gold" weight="fill" />
              Visit channel
            </a>
          </div>

          <MediaGallery />
        </div>
      </section>
    </>
  );
}
