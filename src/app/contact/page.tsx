import type { Metadata } from "next";
import { Envelope, Phone, WhatsappLogo, MapPin, Clock } from "@phosphor-icons/react/dist/ssr";
import PageHeader from "@/components/layout/PageHeader";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Muslim Explorers Academy. Reach our Islamabad team by email, phone, or WhatsApp, or send us a message and we'll reply within 1–2 working days.",
};

const { contact } = siteConfig;

const details = [
  { icon: Envelope, label: "Email us", value: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: "Call us", value: contact.phones.join("  ·  "), href: `tel:${contact.phones[0].replace(/[^+\d]/g, "")}` },
  { icon: WhatsappLogo, label: "WhatsApp", value: "Chat with our team", href: `https://wa.me/${contact.whatsapp}` },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="We'd love to hear from you"
        title="Get in"
        highlight="touch"
        description="Questions about a program, enrollment, or partnership? Reach out and our team will guide you through the next steps."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        accent="emerald"
      />

      <section className="relative bg-ink py-20 sm:py-28 overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 -left-20 w-[440px] h-[440px] rounded-full bg-emerald/[0.06] blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[360px] rounded-full bg-gold/[0.06] blur-[120px]" />
        </div>

        <div className="relative max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left: details */}
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl font-300 tracking-tight text-white mb-3">
                Contact details
              </h2>
              <p className="text-sm text-slate-400 font-300 leading-relaxed mb-8">
                Based in Islamabad, serving learners worldwide. We typically reply within 1–2 working
                days.
              </p>

              <div className="space-y-3 mb-8">
                {details.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 glass rounded-2xl p-4 hover:border-gold/30 hover:shadow-[0_16px_38px_-24px_rgba(0,0,0,0.6)] transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold/20 to-emerald/20 border border-white/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-gold" weight="duotone" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-slate-500 uppercase tracking-wider">{label}</div>
                      <div className="text-sm font-500 text-white truncate group-hover:text-gold transition-colors">
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="glass rounded-2xl p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald shrink-0 mt-0.5" weight="duotone" />
                  <div className="text-sm text-slate-300 font-300 leading-relaxed">
                    {contact.address.line1}
                    <br />
                    {contact.address.line2}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald shrink-0 mt-0.5" weight="duotone" />
                  <div className="text-sm text-slate-300 font-300 leading-relaxed">
                    Mon – Sat · 9:00 AM – 6:00 PM (PKT)
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-7">
              <div className="glass-nav-solid rounded-3xl p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-300 tracking-tight text-white mb-2">
                  Send us a message
                </h2>
                <p className="text-sm text-slate-400 font-300 mb-8">
                  Fill out the form below and we&apos;ll be in touch shortly.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
