import Link from "next/link";
import { ArrowRight, Compass } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <section className="relative min-h-[78vh] flex items-center justify-center overflow-hidden bg-ink px-4">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 starfield opacity-50 animate-twinkle" />
        <div className="absolute inset-0 grid-faint opacity-40" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-gold/10 blur-[120px] animate-glow" />
      </div>

      <div className="relative text-center">
        <div className="text-[7rem] sm:text-[10rem] font-200 text-gradient-gold leading-none tracking-tighter">
          404
        </div>
        <h1 className="text-2xl sm:text-3xl font-300 tracking-tight text-white mt-2 mb-4">
          This page wandered off the path
        </h1>
        <p className="text-slate-400 font-300 max-w-[42ch] mx-auto mb-9">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you
          back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-soft to-gold text-ink px-7 py-3.5 rounded-xl font-700 text-sm hover:shadow-[0_0_20px_-8px_rgba(245,197,66,0.35)] active:scale-[0.98] transition-all"
          >
            Back to Home
            <ArrowRight className="w-4 h-4" weight="bold" />
          </Link>
          <Link
            href="/programs"
            className="inline-flex items-center justify-center gap-2 glass text-white px-7 py-3.5 rounded-xl font-600 text-sm hover:bg-white/[0.08] transition-all"
          >
            <Compass className="w-4 h-4 text-emerald" weight="duotone" />
            Explore Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
