/** Frequently asked questions about the academy. */

export type FaqIcon = "BookOpen" | "Target" | "UserPlus" | "CalendarBlank" | "Sun" | "CurrencyDollar";

export interface Faq {
  id: string;
  question: string;
  answer: string;
  tag: string;
  icon: FaqIcon;
  /** Tailwind classes for the category pill. */
  tagColor: string;
  /** Tailwind classes for the answer icon chip. */
  iconColor: string;
}

export const faqs: Faq[] = [
  {
    id: "curriculum",
    question: "What does your main curriculum consist of?",
    answer:
      "Our main curriculum consists of the Quran and Quranic Arabic, Hadith and Sunnah, History of Islam, Science and Islam, Personality Development, and Emotional Intelligence. Alongside these core courses, we run workshops and activities in collaboration with scientific societies and trainers on topics ranging from astronomy to leadership.",
    tag: "Curriculum",
    icon: "BookOpen",
    tagColor: "bg-green-100 text-green-700",
    iconColor: "text-green-600 bg-green-50",
  },
  {
    id: "method-aim",
    question: "What are your method and aim?",
    answer:
      "Science and technology are taught so children become independent learners and thinkers, while nourishing their bond with the Creator by pondering His signs in nature. We use innovative, out-of-the-box methods to foster creativity and give children a strong early foundation in the sciences — helping them become brilliant young scholars.",
    tag: "Methodology",
    icon: "Target",
    tagColor: "bg-blue-100 text-blue-700",
    iconColor: "text-blue-600 bg-blue-50",
  },
  {
    id: "application",
    question: "How do I apply?",
    answer:
      "You can contact us on our Facebook page or the number listed, or email us at the address given. From there, our team will guide you through the application process step by step.",
    tag: "Enrollment",
    icon: "UserPlus",
    tagColor: "bg-blue-100 text-blue-700",
    iconColor: "text-blue-600 bg-blue-50",
  },
  {
    id: "calendar",
    question: "What is your academic calendar?",
    answer:
      "We have two semesters per year — one from September to December, and the second from January to May. These dates are liable to change in extraordinary circumstances.",
    tag: "Schedule",
    icon: "CalendarBlank",
    tagColor: "bg-amber-100 text-amber-700",
    iconColor: "text-amber-600 bg-amber-50",
  },
  {
    id: "summer-sessions",
    question: "Do you have summer sessions?",
    answer: "Yes — we run a yearly summer camp that lasts from parts of July through August.",
    tag: "Programs",
    icon: "Sun",
    tagColor: "bg-rose-100 text-rose-700",
    iconColor: "text-rose-600 bg-rose-50",
  },
  {
    id: "pricing",
    question: "How much do you charge?",
    answer:
      "We charge Rs 7,500 per semester for our regular session, and it is free for those who cannot afford it.",
    tag: "Pricing",
    icon: "CurrencyDollar",
    tagColor: "bg-green-100 text-green-700",
    iconColor: "text-green-600 bg-green-50",
  },
];
