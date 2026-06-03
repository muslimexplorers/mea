/** Learning programs offered by Muslim Explorers Academy. */

export type ProgramIcon = "BookOpen" | "Atom" | "Binoculars" | "Clock" | "Heart";

export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: ProgramIcon;
  duration: string;
  students: string;
  level: string;
  /** Tailwind classes for the level pill. */
  tagColor: string;
  /** Tailwind classes for the card border accent. */
  accent: string;
  /** Tailwind class for the "Explore" link color. */
  ctaColor: string;
}

export const programs: Program[] = [
  {
    id: "islamic-sciences",
    title: "Islamic Sciences",
    description:
      "Study Quran, Hadith, and Seerah through engaging and modern methods that connect ancient wisdom with contemporary life.",
    image: "/images/courses/islamic-sciences.jpg",
    icon: "BookOpen",
    duration: "12 weeks",
    students: "2.5k+",
    level: "Beginner to Advanced",
    tagColor: "bg-blue-100 text-blue-700",
    accent: "border-blue-200 hover:border-blue-300",
    ctaColor: "text-blue-700",
  },
  {
    id: "steam-islam",
    title: "STEAM & Islam",
    description:
      "Combine science, technology, engineering, arts, and mathematics with Quranic wisdom and Islamic creativity principles.",
    image: "/images/courses/steam-islam.jpg",
    icon: "Atom",
    duration: "16 weeks",
    students: "1.8k+",
    level: "Intermediate",
    tagColor: "bg-green-100 text-green-700",
    accent: "border-green-200 hover:border-green-300",
    ctaColor: "text-green-700",
  },
  {
    id: "astronomy-creation",
    title: "Astronomy & Creation",
    description:
      "Explore the universe through scientific observation and Quranic reflection, discovering Allah's signs in the cosmos.",
    image: "/images/courses/astronomy.jpg",
    icon: "Binoculars",
    duration: "10 weeks",
    students: "3.2k+",
    level: "All Levels",
    tagColor: "bg-slate-200 text-slate-700",
    accent: "border-slate-200 hover:border-slate-300",
    ctaColor: "text-slate-700",
  },
  {
    id: "quran-with-meaning",
    title: "Quran with Meaning",
    description:
      "Learn the Quran with comprehensive tafsir, accurate translation, and practical real-life application guidance.",
    image: "/images/courses/quran-with-meaning.jpg",
    icon: "BookOpen",
    duration: "24 weeks",
    students: "4.1k+",
    level: "All Levels",
    tagColor: "bg-amber-100 text-amber-700",
    accent: "border-amber-200 hover:border-amber-300",
    ctaColor: "text-amber-700",
  },
  {
    id: "history-and-seerah",
    title: "History & Seerah",
    description:
      "Discover the life of Prophet Muhammad ص and explore Islamic civilizations through immersive historical narratives.",
    image: "/images/courses/history-and-seerah.jpg",
    icon: "Clock",
    duration: "14 weeks",
    students: "2.9k+",
    level: "Beginner to Intermediate",
    tagColor: "bg-rose-100 text-rose-700",
    accent: "border-rose-200 hover:border-rose-300",
    ctaColor: "text-rose-700",
  },
  {
    id: "deen-and-its-spirit",
    title: "Deen & Its Spirit",
    description:
      "Help children and families connect to Allah through love, meaningful worship, and beautiful Islamic manners.",
    image: "/images/courses/deen-and-its-spirit.jpg",
    icon: "Heart",
    duration: "8 weeks",
    students: "5.3k+",
    level: "Family Friendly",
    tagColor: "bg-green-100 text-green-700",
    accent: "border-green-200 hover:border-green-300",
    ctaColor: "text-green-700",
  },
];
