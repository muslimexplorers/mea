import type { Metadata } from "next";
import { Images } from "@phosphor-icons/react/dist/ssr";
import PageHeader from "@/components/layout/PageHeader";
import ResourceGallery from "@/components/resources/ResourceGallery";
import { getResourceCategories, type ResourceCategory } from "@/lib/pcloudResources";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Browse Muslim Explorers infographics and educational resources, grouped by category and served directly from pCloud.",
};

export default async function ResourcesPage() {
  let categories: ResourceCategory[] = [];
  let total = 0;

  try {
    categories = await getResourceCategories();
    total = categories.reduce((sum, category) => sum + category.count, 0);
  } catch {
    categories = [];
  }

  return (
    <>
      <PageHeader
        eyebrow="Download & Share"
        title="Resource"
        highlight="library"
        description="Infographics and visual learning resources grouped by category and streamed directly from pCloud."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
        accent="emerald"
      />

      <section className="relative bg-ink py-16 sm:py-20 overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-1/4 w-[460px] h-[320px] rounded-full bg-emerald/[0.06] blur-[120px]" />
          <div className="absolute bottom-10 left-1/5 w-[360px] h-[260px] rounded-full bg-gold/[0.05] blur-[110px]" />
        </div>

        <div className="relative max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold/20 to-emerald/20 border border-white/10 flex items-center justify-center">
                <Images className="w-6 h-6 text-gold" weight="duotone" />
              </span>
              <div>
                <div className="text-sm font-600 text-white">Infographic Resources</div>
                <div className="text-xs text-slate-500">
                  {total ? `${total} images across ${categories.length} categories` : "Loaded from pCloud"}
                </div>
              </div>
            </div>
          </div>

          <ResourceGallery categories={categories} />
        </div>
      </section>
    </>
  );
}
