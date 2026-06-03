/** Distinguished guest speakers and scholars. */

export interface Speaker {
  name: string;
  title: string;
  description: string;
  image: string;
  specialty: string;
  experience: string;
  qualifications: string[];
  expertise: string[];
  /** Tailwind class for the card's accent bar. */
  accent: string;
}

export const speakers: Speaker[] = [
  {
    name: "Imam Faisal Ahmad",
    title: "Community Imam & Youth Mentor",
    description:
      "A respected community imam known for engaging youth and promoting Islamic education through local mosque programs.",
    image: "/speakers/faisal.jpg",
    specialty: "Youth Engagement & Islamic Education",
    experience: "15+ years of community leadership",
    qualifications: ["Master's in Islamic Studies", "Certified Youth Counselor"],
    expertise: ["Youth Development", "Islamic Education", "Community Building"],
    accent: "bg-blue-600",
  },
  {
    name: "Sheikh Ahmad Abdo",
    title: "Qur'anic Reciter & Tajweed Expert",
    description:
      "An esteemed Qur'anic reciter famous for his eloquent Tajweed delivery in religious gatherings across Pakistan.",
    image: "/speakers/ahmad.jpg",
    specialty: "Quranic Recitation & Tajweed",
    experience: "20+ years of Quranic recitation and teaching",
    qualifications: ["Ijazah in Quranic Recitation", "Master of Tajweed Sciences"],
    expertise: ["Quranic Recitation", "Tajweed Sciences", "Spiritual Guidance"],
    accent: "bg-emerald-600",
  },
  {
    name: "Imam Mustafa",
    title: "Scholar & Spiritual Teacher",
    description:
      "A prominent Gujranwala-based scholar and founder of Idara-tul-Mustafa International, renowned for his spiritual teachings.",
    image: "/speakers/mustafa.jpg",
    specialty: "Spiritual Development & Islamic Scholarship",
    experience: "25+ years of Islamic scholarship",
    qualifications: ["PhD in Islamic Philosophy", "Founder of Idara-tul-Mustafa"],
    expertise: ["Islamic Philosophy", "Spiritual Development", "Academic Research"],
    accent: "bg-amber-600",
  },
  {
    name: "Ustadh Abu Ayub",
    title: "Hadith & Sunnah Specialist",
    description:
      "A dedicated Islamic teacher recognized for his impactful lectures on Hadith and Sunnah in Urdu-speaking communities.",
    image: "/speakers/abu-ayub.jpg",
    specialty: "Hadith Studies & Prophetic Traditions",
    experience: "18+ years of Hadith research and teaching",
    qualifications: ["Master's in Hadith Sciences", "Certified Islamic Teacher"],
    expertise: ["Hadith Authentication", "Prophetic Traditions", "Islamic Jurisprudence"],
    accent: "bg-slate-700",
  },
  {
    name: "Shuja Uddin Sheikh",
    title: "Qur'an Scholar & TV Host",
    description:
      "A chartered accountant-turned-Qur'an scholar, Ameer of Tanzim-e-Islami and host of the ARY QTV show Baseerat-ul-Quran.",
    image: "/speakers/shuja.jpg",
    specialty: "Quranic Commentary & Islamic Leadership",
    experience: "30+ years of Islamic leadership and media presence",
    qualifications: ["Chartered Accountant", "Ameer of Tanzim-e-Islami"],
    expertise: ["Quranic Commentary", "Islamic Leadership", "Media Presentation"],
    accent: "bg-teal-600",
  },
  {
    name: "Sheikh Yousuf A. Jabbar",
    title: "Religious Orator & Interfaith Advocate",
    description:
      "A seasoned religious orator specializing in spiritual upliftment and interfaith harmony across Islamic forums.",
    image: "/speakers/yousuf.jpg",
    specialty: "Interfaith Dialogue & Spiritual Growth",
    experience: "22+ years of interfaith dialogue and counseling",
    qualifications: ["Master's in Comparative Religion", "Peace Ambassador Award"],
    expertise: ["Interfaith Relations", "Spiritual Counseling", "Public Speaking"],
    accent: "bg-rose-600",
  },
  {
    name: "Sh Adnan Rashid",
    title: "PhD Linguist & Historical Scholar",
    description:
      "A PhD linguist and historical scholar active in academia, noted for his research in gender discourse and Islamic history.",
    image: "/speakers/adnan.jpg",
    specialty: "Islamic History & Academic Research",
    experience: "12+ years of academic research",
    qualifications: ["PhD in Linguistics", "Published Academic Author"],
    expertise: ["Islamic History", "Linguistic Analysis", "Historical Documentation"],
    accent: "bg-indigo-600",
  },
  {
    name: "Nader Khamis Hafez Alturk",
    title: "Deputy Head of Mission",
    description:
      "Deputy Head of Mission at the Palestinian Embassy in Pakistan, instrumental in strengthening diplomatic and cultural ties.",
    image: "/speakers/nader.jpg",
    specialty: "Diplomacy & Cultural Relations",
    experience: "16+ years of diplomatic service",
    qualifications: ["Master's in International Relations", "Cultural Ambassador"],
    expertise: ["International Diplomacy", "Cultural Exchange", "Strategic Relations"],
    accent: "bg-green-700",
  },
];
