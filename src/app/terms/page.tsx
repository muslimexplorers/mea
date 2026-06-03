import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of the Muslim Explorers Academy website and programs.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Last updated: June 2026"
        title="Terms of"
        highlight="service"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]}
      />

      <section className="relative bg-ink py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 article-prose">
          <p>
            Welcome to {siteConfig.fullName}. By accessing our website or enrolling in our programs,
            you agree to these terms. Please read them carefully.
          </p>

          <h2>Acceptance of terms</h2>
          <p>
            By using this website you confirm that you accept these terms and agree to comply with
            them. If you do not agree, please do not use the site.
          </p>

          <h2>Use of the site</h2>
          <p>
            You may use our website for lawful, personal, and educational purposes. You agree not to
            misuse the site, disrupt its operation, or attempt to access it in unauthorised ways.
          </p>

          <h2>Programs, enrolment & payments</h2>
          <ul>
            <li>Program details, schedules, and fees may change; we will communicate updates where possible.</li>
            <li>Where fees apply, they are due as described at enrolment. We offer support for those unable to afford fees.</li>
            <li>Enrolment for minors should be completed by a parent or guardian.</li>
          </ul>

          <h2>Intellectual property</h2>
          <p>
            Content on this site — including text, booklets, images, and branding — belongs to{" "}
            {siteConfig.name} or its licensors. You may download free resources for personal and
            educational use, but may not republish or sell them without permission.
          </p>

          <h2>User conduct</h2>
          <p>
            We ask all participants to engage with respect, integrity, and good character (akhlaq) in
            line with the values of our community.
          </p>

          <h2>Disclaimers & limitation of liability</h2>
          <p>
            Our content is provided for educational purposes. While we strive for accuracy, we make
            no warranties that the site will be error-free or uninterrupted, and we are not liable
            for any loss arising from its use to the fullest extent permitted by law.
          </p>

          <h2>Third-party links</h2>
          <p>
            Our site may link to external resources. We are not responsible for the content or
            practices of third-party websites.
          </p>

          <h2>Changes to these terms</h2>
          <p>
            We may revise these terms from time to time. Continued use of the site after changes
            constitutes acceptance of the updated terms.
          </p>

          <h2>Governing law</h2>
          <p>These terms are governed by the laws of the Islamic Republic of Pakistan.</p>

          <h2>Contact us</h2>
          <p>
            Questions about these terms? Email us at{" "}
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
