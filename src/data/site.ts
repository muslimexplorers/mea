/**
 * Central site configuration — brand, contact details, and navigation.
 * Single source of truth for anything that appears in the header, footer,
 * metadata, or contact surfaces.
 */

export const siteConfig = {
  name: "Muslim Explorers",
  fullName: "Muslim Explorers Academy",
  tagline: "Discover. Learn. Explore.",
  motto: "Ponder. Learn. Glorify.",
  description:
    "Empowering Muslims through scientific and spiritual exploration. Discover the harmony between Islamic scholarship and modern science through expert-led programs for learners of all ages.",
  logo: "/images/muslim-explorers-logo.webp",
  contact: {
    email: "ayesha.haaa@gmail.com",
    phones: ["+92-321-5161436", "+92-51-8448943"],
    whatsapp: "+923215161436",
    address: {
      line1: "House No. 503, Street No. 4",
      line2: "G-11/1, Islamabad, Pakistan",
      locality: "Islamabad",
      country: "PK",
    },
  },
  socials: {
    facebook: "https://www.facebook.com/MuslimExplorers/",
    youtube: "https://www.youtube.com/@muslimexplorers",
  },
} as const;

/** Top-level navigation links (icon attached in the Header). */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "Gallery", href: "/gallery" },
  { label: "Media", href: "/media" },
] as const;

/** Footer quick links. */
export const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Booklets", href: "/booklets" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "Gallery", href: "/gallery" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
] as const;

/** Footer course/program links. */
export const programLinks = [
  { label: "Islamic Sciences", href: "/programs/islamic-sciences" },
  { label: "STEAM & Islam", href: "/programs/steam-islam" },
  { label: "Quran with Meaning", href: "/programs/quran-with-meaning" },
  { label: "History & Seerah", href: "/programs/history-and-seerah" },
  { label: "Deen & Its Spirit", href: "/programs/deen-and-its-spirit" },
] as const;
