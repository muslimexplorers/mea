/**
 * Free downloadable booklets. Covers live in /public/images/books and
 * PDFs in /public/res/pdfs. Each entry has a verified cover + PDF.
 */

export type BookletTag = "Workbook" | "Guide" | "Science" | "Nature" | "Activity";

export interface Booklet {
  id: string;
  title: string;
  subtitle: string;
  tag: BookletTag;
  cover: string;
  pdf: string;
  /** Tailwind gradient used as the cover fallback wash. */
  gradient: string;
}

export const booklets: Booklet[] = [
  { id: "al-kahf", title: "Surah Al-Kahf", subtitle: "The Cave", tag: "Workbook", cover: "/images/books/al-kahf.jpg", pdf: "/res/pdfs/surah-al-kahaf-book.pdf", gradient: "from-amber-900 to-amber-700" },
  { id: "al-mulk", title: "Surah Al-Mulk", subtitle: "The Sovereignty", tag: "Workbook", cover: "/images/books/al-mulk.jpg", pdf: "/res/pdfs/surah-al-mulk-workbook.pdf", gradient: "from-blue-900 to-blue-700" },
  { id: "yasin", title: "Surah Yasin", subtitle: "Heart of the Quran", tag: "Workbook", cover: "/images/books/yasin.jpg", pdf: "/res/pdfs/surah-yasin-workbook.pdf", gradient: "from-teal-900 to-teal-700" },
  { id: "perfect-wisdom", title: "The Perfect Wisdom", subtitle: "Divine Guidance", tag: "Guide", cover: "/images/books/the-perfect-wisdom.jpg", pdf: "/res/pdfs/surah-yasin-workbook.pdf", gradient: "from-slate-800 to-slate-600" },
  { id: "honey-bees", title: "The Honey Bee", subtitle: "Nature's Miracle", tag: "Science", cover: "/images/books/honey-bees.jpg", pdf: "/res/pdfs/honey-bees.pdf", gradient: "from-amber-600 to-yellow-500" },
  { id: "iron", title: "Iron in the Quran", subtitle: "Strength & Foundation", tag: "Science", cover: "/images/books/iron.jpg", pdf: "/res/pdfs/iron.pdf", gradient: "from-zinc-800 to-zinc-600" },
  { id: "masjid", title: "The Sacred Mosque", subtitle: "House of Worship", tag: "Guide", cover: "/images/books/masjid-2.jpg", pdf: "/res/pdfs/masjid-2.pdf", gradient: "from-emerald-700 to-teal-600" },
  { id: "water", title: "Water of Life", subtitle: "Source of All Living", tag: "Science", cover: "/images/books/water.jpg", pdf: "/res/pdfs/water.pdf", gradient: "from-cyan-700 to-blue-600" },
  { id: "space", title: "The Expanding Universe", subtitle: "Cosmic Wonders", tag: "Science", cover: "/images/books/space.jpg", pdf: "/res/pdfs/space.pdf", gradient: "from-violet-800 to-purple-700" },
  { id: "science", title: "Science in Islam", subtitle: "Knowledge & Discovery", tag: "Science", cover: "/images/books/science.jpg", pdf: "/res/pdfs/science.pdf", gradient: "from-teal-700 to-cyan-600" },
  { id: "plants", title: "Plant Kingdom", subtitle: "Green Miracles", tag: "Nature", cover: "/images/books/plants.jpg", pdf: "/res/pdfs/plants.pdf", gradient: "from-green-600 to-emerald-700" },
  { id: "nature", title: "Nature's Signs", subtitle: "Divine Creation", tag: "Nature", cover: "/images/books/nature.jpg", pdf: "/res/pdfs/nature.pdf", gradient: "from-lime-700 to-green-600" },
  { id: "mountains", title: "Mighty Mountains", subtitle: "Earth's Anchors", tag: "Science", cover: "/images/books/mountains.jpg", pdf: "/res/pdfs/mountains.pdf", gradient: "from-stone-700 to-gray-600" },
  { id: "soil", title: "The Living Earth", subtitle: "Foundation of Life", tag: "Nature", cover: "/images/books/soil.jpg", pdf: "/res/pdfs/soil.pdf", gradient: "from-amber-800 to-yellow-700" },
  { id: "astronomy", title: "Astronomy", subtitle: "Reading the Heavens", tag: "Science", cover: "/images/books/astronomy.jpg", pdf: "/res/pdfs/astronomy.pdf", gradient: "from-indigo-900 to-blue-800" },
  { id: "stars", title: "The Stars", subtitle: "Lights of the Night", tag: "Science", cover: "/images/books/stars.jpg", pdf: "/res/pdfs/stars.pdf", gradient: "from-slate-900 to-indigo-800" },
  { id: "aerodynamics", title: "Aerodynamics", subtitle: "The Science of Flight", tag: "Science", cover: "/images/books/aerodynamics.jpg", pdf: "/res/pdfs/aerodynamics.pdf", gradient: "from-sky-700 to-cyan-600" },
  { id: "dna", title: "The Code of Life", subtitle: "Wonders of DNA", tag: "Science", cover: "/images/books/dna.jpg", pdf: "/res/pdfs/dna.pdf", gradient: "from-fuchsia-800 to-purple-700" },
  { id: "energy", title: "Energy", subtitle: "Power in Creation", tag: "Science", cover: "/images/books/energy.jpg", pdf: "/res/pdfs/energy.pdf", gradient: "from-orange-700 to-red-600" },
  { id: "gardens", title: "Gardens of Paradise", subtitle: "Glimpses of Jannah", tag: "Guide", cover: "/images/books/gardens.jpg", pdf: "/res/pdfs/gardens.pdf", gradient: "from-emerald-600 to-green-700" },
  { id: "healthy-foods", title: "Halal & Healthy Foods", subtitle: "Nourishment & Purity", tag: "Guide", cover: "/images/books/healthy-foods.jpg", pdf: "/res/pdfs/healthy-food.pdf", gradient: "from-orange-600 to-red-500" },
  { id: "history", title: "Islamic History", subtitle: "Lessons from the Past", tag: "Guide", cover: "/images/books/history.jpg", pdf: "/res/pdfs/history.pdf", gradient: "from-amber-800 to-orange-700" },
  { id: "al-quds", title: "Al-Quds", subtitle: "The Sacred City", tag: "Guide", cover: "/images/books/al-quds.jpg", pdf: "/res/pdfs/al-quds-1.pdf", gradient: "from-stone-700 to-amber-700" },
  { id: "hajj", title: "Hajj Activity Book", subtitle: "The Sacred Journey", tag: "Activity", cover: "/images/books/hajj-activity-book.jpg", pdf: "/res/pdfs/hajj-activity-book.pdf", gradient: "from-indigo-700 to-purple-600" },
];
