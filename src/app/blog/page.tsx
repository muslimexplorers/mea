import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import BlogList, { type PostSummary } from "@/components/blog/BlogList";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on Islamic scholarship, spirituality, history, and modern living from the Muslim Explorers journal.",
};

// Pass only summary fields to the client — never the full article HTML.
const posts: PostSummary[] = [...blogPosts]
  .sort((a, b) => +new Date(b.date) - +new Date(a.date))
  .map(({ slug, title, excerpt, date, readTime, category, image }) => ({
    slug,
    title,
    excerpt,
    date,
    readTime,
    category,
    image,
  }));

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Journal"
        title="Stories, reflections &"
        highlight="ideas"
        description="Insights on Islamic scholarship, spirituality, history, and modern living — written to inform, inspire, and connect."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="relative bg-ink py-16 sm:py-20 overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-1/4 w-[460px] h-[320px] rounded-full bg-gold/[0.06] blur-[120px]" />
        </div>
        <div className="relative max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12">
          <BlogList posts={posts} />
        </div>
      </section>
    </>
  );
}
