/**
 * Extended editorial content for each program's detail page.
 * Keyed by the program `id` in `programs.ts`.
 */

export interface ProgramDetail {
  overview: string;
  outcomes: string[];
  format: string;
  audience: string;
}

export const programDetails: Record<string, ProgramDetail> = {
  "islamic-sciences": {
    overview:
      "A grounding in the classical Islamic sciences taught through clear, modern methods. Students move through the Quran and Quranic Arabic, Hadith and Sunnah, and the broad sweep of Islamic history — connecting timeless scholarship to the questions of today.",
    outcomes: [
      "Read and reflect on the Quran with growing understanding",
      "Grasp the foundations of Hadith and Sunnah",
      "Trace the major events of Islamic history",
      "Build confidence in classical terminology and method",
    ],
    format: "Live online sessions with recordings · two semesters per year",
    audience: "Beginner to advanced · all ages welcome",
  },
  "steam-islam": {
    overview:
      "Science, technology, engineering, arts, and mathematics, explored through the lens of Quranic wisdom. Children become independent thinkers while deepening their bond with the Creator by pondering His signs across the natural world.",
    outcomes: [
      "Approach science and faith as complementary, not opposed",
      "Run hands-on projects across the STEAM disciplines",
      "Reflect on Quranic verses through observable phenomena",
      "Develop creativity, curiosity, and problem-solving",
    ],
    format: "Project-based cohorts · workshops with partner societies",
    audience: "Intermediate learners · curious young minds",
  },
  "astronomy-creation": {
    overview:
      "Look up and reflect. This program pairs scientific observation of the cosmos with Quranic reflection on creation — from the orbits of planets to the vastness of the heavens — discovering Allah's signs written across the sky.",
    outcomes: [
      "Understand core concepts in observational astronomy",
      "Connect cosmic order to Quranic verses on creation",
      "Use stargazing as a practice of reflection (tafakkur)",
      "Appreciate the scale and precision of the universe",
    ],
    format: "Seasonal cohorts · observation sessions and reflection circles",
    audience: "All levels · families encouraged",
  },
  "quran-with-meaning": {
    overview:
      "Move beyond recitation to understanding. Learn the Quran with comprehensive tafsir, accurate translation, and practical guidance for living its message — so the words shape character, choices, and daily worship.",
    outcomes: [
      "Understand the meanings behind frequently recited surahs",
      "Engage with classical tafsir in an accessible way",
      "Apply Quranic guidance to everyday life",
      "Strengthen the heart's connection to the Book of Allah",
    ],
    format: "Structured weekly study · two semesters per year",
    audience: "All levels · adults and older youth",
  },
  "history-and-seerah": {
    overview:
      "Walk through the life of the Prophet Muhammad ﷺ and the civilisations that followed. Immersive historical narratives bring the Seerah to life and draw out the lessons that shaped — and can still shape — the Ummah.",
    outcomes: [
      "Know the key events of the Prophetic biography",
      "Understand the rise of early Islamic civilisation",
      "Draw practical lessons from the Seerah",
      "Place historical events in their wider context",
    ],
    format: "Narrative-led cohorts · discussion and reflection",
    audience: "Beginner to intermediate · all ages",
  },
  "deen-and-its-spirit": {
    overview:
      "Connect to Allah through love, meaningful worship, and beautiful manners. Designed for children and families, this program nurtures the spirit of the deen — turning practice into something joyful and deeply felt.",
    outcomes: [
      "Build a heartfelt connection to worship",
      "Learn the adab (manners) of everyday Muslim life",
      "Grow in sincerity, gratitude, and god-consciousness",
      "Make faith a shared, joyful family practice",
    ],
    format: "Family-friendly sessions · short, warm, and practical",
    audience: "Children and families · all welcome",
  },
};
