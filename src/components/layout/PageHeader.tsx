import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  /** Trailing words rendered in the gold→emerald gradient. */
  highlight?: string;
  description?: string;
  breadcrumbs?: Crumb[];
  accent?: "gold" | "emerald" | "azure";
}

const glow: Record<NonNullable<PageHeaderProps["accent"]>, string> = {
  gold: "bg-gold/10",
  emerald: "bg-emerald/10",
  azure: "bg-azure/10",
};

export default function PageHeader({
  eyebrow,
  title,
  highlight,
  description,
  breadcrumbs,
  accent = "gold",
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-ink border-b border-white/5">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 starfield opacity-50 animate-twinkle" />
        <div className="absolute inset-0 grid-faint opacity-40" />
        <div className={`absolute -top-32 right-0 w-[520px] h-[520px] rounded-full ${glow[accent]} blur-[120px] animate-glow`} />
        <div className="absolute top-20 left-1/4 w-[320px] h-[320px] rounded-full bg-emerald/[0.07] blur-[110px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_50%,rgba(6,9,20,0.7)_100%)]" />
      </div>

      <div className="relative max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12 pt-32 pb-16 sm:pt-36 sm:pb-20">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-7">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-1.5">
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-gold transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-slate-300">{crumb.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <CaretRight className="w-3 h-3" weight="bold" />}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <div className="inline-flex items-center gap-2 glass text-gold text-[11px] font-600 uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-7">
            {eyebrow}
          </div>
        )}

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-200 text-white tracking-tight leading-[1.02] max-w-4xl">
          {title}
          {highlight && <span className="text-gradient-gold font-300"> {highlight}</span>}
        </h1>

        {description && (
          <p className="mt-7 text-lg sm:text-xl text-slate-400 font-300 leading-relaxed max-w-[60ch]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
