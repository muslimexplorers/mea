import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import GalleryView from "@/components/gallery/GalleryView";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Moments from Muslim Explorers — nature trips, astronomy workshops, gardening, aerodynamics, heritage tours, and community gatherings.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Moments"
        title="Our"
        highlight="gallery"
        description="Glimpses of learning in action — from stargazing nights and garden sessions to heritage tours and community gatherings."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
        accent="azure"
      />

      <section className="relative bg-ink py-16 sm:py-20 overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-[460px] h-[320px] rounded-full bg-azure/[0.06] blur-[120px]" />
        </div>
        <div className="relative max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12">
          <GalleryView />
        </div>
      </section>
    </>
  );
}
