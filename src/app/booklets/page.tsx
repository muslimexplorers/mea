import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import BookletLibrary from "@/components/booklets/BookletLibrary";

export const metadata: Metadata = {
  title: "Booklets Library",
  description:
    "Download free, beautifully illustrated Muslim Explorers booklets — workbooks connecting the Quran with the natural world, science, and Islamic heritage.",
};

export default function BookletsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free Resources"
        title="Booklets"
        highlight="library"
        description="Beautifully illustrated workbooks connecting the Quran with the natural world. Download any title instantly — no sign-up required."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Booklets" }]}
      />

      <section className="relative bg-ink py-16 sm:py-20 overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-[460px] h-[320px] rounded-full bg-gold/[0.06] blur-[120px]" />
        </div>
        <div className="relative max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12">
          <BookletLibrary />
        </div>
      </section>
    </>
  );
}
