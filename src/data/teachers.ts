/** Core teaching faculty of Muslim Explorers Academy. */

export interface Teacher {
  name: string;
  role: string;
  qualification: string;
  experience: string;
  image: string;
  specialties: string[];
  active?: boolean;
}

export const teachers: Teacher[] = [
  {
    name: "Ayesha Haleem",
    role: "CEO & Visionary Educator",
    qualification: "Founder of Muslim Explorers Academy",
    experience: "7+ years in Islamic educational leadership",
    image: "/images/ayesha-haleem.jpg",
    specialties: [
      "STEAM-based Children's Education",
      "Islamic Heritage Integration",
      "Accessible Learning",
    ],
    active: true,
  },
  
  {
    name: "Sir Abdul Hannan",
    role: "Research & Development Expert",
    qualification: "Islamic Sciences & Social Theorist",
    experience: "Consultant at Al Mishkat Trust",
    image: "/images/abdul-hannan.webp",
    specialties: ["Islamic Philosophy", "History & Social Theory", "Educational Development"],
  },
  {
    name: "Sir Talha Ahmed Gill",
    role: "CMO @ JobQuest.ai | Marketing Psychologist",
    qualification: "BS, Psychology",
    experience: "5+ years in education",
    image: "/images/talha-ahmad-gill.jpg",
    specialties: [
      "Digital Marketing Psychology",
      "Content Strategy & SEO",
      "Community Engagement",
    ],
  },
  {
    name: "Dr. Saba Masoud",
    role: "Lifestyle Medicine Physician",
    qualification: "Board-Certified in Lifestyle Medicine, PG Dip Islamic Psychology",
    experience: "Holistic wellness expert & life coach",
    image: "/images/dr-saba-masoud.jpg",
    specialties: [
      "Faith-Based Lifestyle Medicine",
      "Islamic Psychology & Therapy",
      "Transformative Life Coaching",
    ],
  },
];
