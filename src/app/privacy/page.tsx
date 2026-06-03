import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Muslim Explorers Academy collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Last updated: June 2026"
        title="Privacy"
        highlight="policy"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy" }]}
      />

      <section className="relative bg-ink py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 article-prose">
          <p>
            At {siteConfig.fullName}, we respect your privacy and are committed to protecting the
            personal information you share with us. This policy explains what we collect, why, and
            how we keep it safe.
          </p>

          <h2>Information we collect</h2>
          <p>
            We collect information you provide directly — such as your name, email address, and phone
            number when you contact us, enquire about a program, or subscribe to updates. We also
            collect limited technical data (such as browser type and pages visited) to improve our
            website.
          </p>

          <h2>How we use your information</h2>
          <ul>
            <li>To respond to your enquiries and provide the programs you request.</li>
            <li>To send updates about courses, resources, and events you opt into.</li>
            <li>To improve our website, content, and learning experience.</li>
          </ul>

          <h2>Cookies</h2>
          <p>
            Our site may use essential cookies to ensure core functionality. You can disable cookies
            in your browser settings, though some features may not work as intended.
          </p>

          <h2>Sharing your information</h2>
          <p>
            We do not sell your personal information. We only share data with trusted service
            providers who help us operate (for example, email delivery), and only to the extent
            necessary to provide our services.
          </p>

          <h2>Data security</h2>
          <p>
            We take reasonable measures to protect your information from unauthorised access, loss,
            or misuse. No method of transmission over the internet is fully secure, but we work to
            safeguard your data.
          </p>

          <h2>Your rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information at any
            time by contacting us.
          </p>

          <h2>Children&apos;s privacy</h2>
          <p>
            Many of our programs serve young learners. Where a participant is a minor, we expect
            enrolment and communication to be handled by a parent or guardian.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. Material changes will be reflected on this
            page with a revised date.
          </p>

          <h2>Contact us</h2>
          <p>
            Questions about this policy? Email us at{" "}
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> or write to
            us at {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2}.
          </p>
        </div>
      </section>
    </>
  );
}
