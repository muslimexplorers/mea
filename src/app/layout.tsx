import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";

const BASE = "https://www.muslimexplorers.com";
const OG_IMAGE = "/og-image.webp";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: `${siteConfig.fullName} | ${siteConfig.motto}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Islamic education",
    "Quran and science",
    "STEAM and Islam",
    "Muslim learning",
    "Islamic scholarship",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: `${siteConfig.fullName} | ${siteConfig.motto}`,
    description: siteConfig.description,
    type: "website",
    siteName: siteConfig.fullName,
    locale: "en_GB",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: siteConfig.fullName,
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} | ${siteConfig.motto}`,
    description: siteConfig.description,
    images: [OG_IMAGE],
  },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: siteConfig.fullName,
  alternateName: siteConfig.name,
  url: BASE,
  logo: `${BASE}${siteConfig.logo}`,
  description: siteConfig.description,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phones[0],
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address.line1,
    addressLocality: siteConfig.contact.address.locality,
    addressCountry: siteConfig.contact.address.country,
  },
  sameAs: [siteConfig.socials.facebook, siteConfig.socials.youtube],
};

const webSiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.fullName,
  url: BASE,
  inLanguage: "en-GB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteLd) }}
        />
      </body>
    </html>
  );
}
