import Link from "next/link";
import { siteConfig, quickLinks, programLinks } from "@/data/site";
import {
  FacebookLogo,
  YoutubeLogo,
  MapPin,
  Phone,
  Envelope,
  ArrowRight,
  Heart,
} from "@phosphor-icons/react/dist/ssr";

const socials = [
  { icon: FacebookLogo, href: siteConfig.socials.facebook, label: "Facebook" },
  { icon: YoutubeLogo, href: siteConfig.socials.youtube, label: "YouTube" },
];

function Column({ title, links }: { title: string; links: readonly { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-white font-600 text-sm mb-5 tracking-tight">{title}</h4>
      <ul className="space-y-2.5">
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="group inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-gold transition-colors"
            >
              <span className="w-0 group-hover:w-3 h-px bg-gold transition-all duration-300" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink border-t border-white/5">
      {/* Ambient glow + grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-faint opacity-40" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute bottom-0 right-10 w-[360px] h-[360px] rounded-full bg-emerald/10 blur-[110px]" />
      </div>

      <div className="relative max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* CTA band */}
        <div className="py-12">
          <div className="glass rounded-3xl px-6 sm:px-10 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-300 tracking-tight text-white">
                Ready to begin your <span className="text-gradient-gold">journey?</span>
              </h3>
              <p className="text-slate-400 mt-2 text-sm">
                Join thousands of Muslims discovering faith through knowledge.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-soft to-gold text-ink px-6 py-3 rounded-xl font-700 text-sm hover:shadow-[0_0_20px_-8px_rgba(245,197,66,0.35)] active:scale-[0.98] transition-all"
              >
                Explore Programs
                <ArrowRight className="w-4 h-4" weight="bold" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 glass text-white px-6 py-3 rounded-xl font-600 text-sm hover:bg-white/[0.08] active:scale-[0.98] transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-t border-white/5">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <span className="w-10 h-10 rounded-xl bg-white/95 flex items-center justify-center">
                <img loading="lazy" decoding="async" src={siteConfig.logo} alt={siteConfig.name} className="w-7 h-7 object-contain" />
              </span>
              <span className="leading-tight">
                <span className="block font-700 text-white text-sm">{siteConfig.name}</span>
                <span className="block text-[10px] uppercase tracking-[0.18em] text-gold/80">
                  {siteConfig.tagline}
                </span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-2.5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center hover:border-gold/40 hover:bg-gold/10 transition-all group"
                >
                  <Icon className="w-4 h-4 text-slate-400 group-hover:text-gold transition-colors" weight="fill" />
                </a>
              ))}
            </div>
          </div>

          <Column title="Explore" links={quickLinks} />
          <Column title="Programs" links={programLinks} />

          {/* Contact */}
          <div>
            <h4 className="text-white font-600 text-sm mb-5 tracking-tight">Contact</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" weight="duotone" />
                <span className="text-sm text-slate-400 leading-relaxed">
                  {siteConfig.contact.address.line1}
                  <br />
                  {siteConfig.contact.address.line2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" weight="duotone" />
                <div className="text-sm text-slate-400">
                  {siteConfig.contact.phones.map((phone) => (
                    <div key={phone}>{phone}</div>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Envelope className="w-4 h-4 text-gold shrink-0" weight="duotone" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm text-slate-400 hover:text-gold transition-colors break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 flex items-center gap-1.5">
            &copy; 2026 {siteConfig.name}. Made with
            <Heart className="w-3 h-3 text-rose-500" weight="fill" />
            for the Ummah.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
