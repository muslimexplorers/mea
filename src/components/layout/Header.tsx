"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import {
  House,
  Info,
  Article,
  Images,
  VideoCamera,
  BookOpen,
  CaretDown,
  ArrowRight,
  X,
  List,
  BookBookmark,
  Atom,
  Mosque,
  GraduationCap,
  MapTrifold,
  Star,
} from "@phosphor-icons/react";

const coursesMenu = [
  { label: "Islamic Sciences", description: "Quran, Hadith & Seerah, the modern way", href: "/programs/islamic-sciences", icon: BookBookmark },
  { label: "Quran with Meaning", description: "Tafsir, translation & real-life application", href: "/programs/quran-with-meaning", icon: BookOpen },
  { label: "STEAM & Islam", description: "Where science meets Quranic wisdom", href: "/programs/steam-islam", icon: Atom },
  { label: "History & Seerah", description: "The life of the Prophet and Islamic civilisation", href: "/programs/history-and-seerah", icon: Star },
  { label: "All Programs", description: "Browse every learning program", href: "/programs", icon: GraduationCap },
];

const toursMenu = [
  { label: "Umrah Journeys", description: "Guided spiritual pilgrimage experiences", href: "/umrah", icon: Mosque },
  { label: "Skardu & Beyond", description: "Educational expeditions through Allah's creation", href: "/skardu", icon: MapTrifold },
];

const navLinks = [
  { label: "Home", href: "/", icon: House },
  { label: "About", href: "/about", icon: Info },
  { label: "Blog", href: "/blog", icon: Article },
  { label: "Resources", href: "/resources", icon: BookOpen },
  { label: "Gallery", href: "/gallery", icon: Images },
  { label: "Media", href: "/media", icon: VideoCamera },
];

type MenuItem = (typeof coursesMenu)[number];

function MegaMenu({
  items,
  isOpen,
  onClose,
  width,
}: {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
  width: string;
}) {
  if (!isOpen) return null;
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 ${width} glass-nav-solid rounded-2xl overflow-hidden z-50`}
      onMouseLeave={onClose}
    >
      <div className="p-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="group/i flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.06] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/20 to-emerald/20 border border-white/10 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-gold" weight="duotone" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-600 text-white group-hover/i:text-gold transition-colors">
                  {item.label}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">{item.description}</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover/i:text-gold group-hover/i:translate-x-0.5 transition-all" weight="bold" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function NavLink({ label, href, active }: { label: string; href: string; active?: boolean }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`group relative px-3.5 py-2 text-sm font-500 transition-colors ${
        active ? "text-white" : "text-slate-300 hover:text-white"
      }`}
    >
      {label}
      <span
        className={`absolute bottom-1 left-3.5 right-3.5 h-px bg-gradient-to-r from-gold to-emerald origin-left transition-transform duration-300 ${
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = (name: string) => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
    setActiveMenu(name);
  };
  const closeMenu = () => {
    menuTimeout.current = setTimeout(() => setActiveMenu(null), 120);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "bg-ink/85 backdrop-blur-xl border-white/10 shadow-[0_8px_30px_-14px_rgba(0,0,0,0.7)]"
            : "bg-ink/40 backdrop-blur-md border-white/5"
        }`}
      >
        <div className="flex items-center justify-between h-16 lg:h-[72px] max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <span className="relative w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-white/95 flex items-center justify-center overflow-hidden">
              <img loading="lazy" decoding="async" src={siteConfig.logo} alt={siteConfig.fullName} className="w-9 h-9 lg:w-10 lg:h-10 object-contain" />
              <span className="absolute -inset-1 rounded-xl bg-gold/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </span>
            <span className="block leading-tight min-w-0">
              <span className="block font-700 text-white text-[13px] sm:text-sm tracking-tight">{siteConfig.fullName}</span>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-gold/80">
                {siteConfig.tagline}
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map(({ label, href }) => (
              <NavLink key={label} label={label} href={href} active={pathname === href} />
            ))}

            <div className="relative" onMouseEnter={() => openMenu("courses")} onMouseLeave={closeMenu}>
              <button
                onClick={() => setActiveMenu(activeMenu === "courses" ? null : "courses")}
                aria-expanded={activeMenu === "courses"}
                aria-haspopup="true"
                className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-500 text-slate-300 hover:text-white transition-colors"
              >
                Programs
                <CaretDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "courses" ? "rotate-180 text-gold" : ""}`}
                  weight="bold"
                />
              </button>
              <MegaMenu items={coursesMenu} isOpen={activeMenu === "courses"} onClose={() => setActiveMenu(null)} width="w-[520px]" />
            </div>

            <div className="relative" onMouseEnter={() => openMenu("tours")} onMouseLeave={closeMenu}>
              <button
                onClick={() => setActiveMenu(activeMenu === "tours" ? null : "tours")}
                aria-expanded={activeMenu === "tours"}
                aria-haspopup="true"
                className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-500 text-slate-300 hover:text-white transition-colors"
              >
                Tours
                <CaretDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "tours" ? "rotate-180 text-gold" : ""}`}
                  weight="bold"
                />
              </button>
              <MegaMenu items={toursMenu} isOpen={activeMenu === "tours"} onClose={() => setActiveMenu(null)} width="w-[420px]" />
            </div>
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-1.5 bg-gradient-to-r from-gold-soft to-gold text-ink px-5 py-2.5 rounded-xl text-sm font-700 hover:shadow-[0_0_20px_-8px_rgba(245,197,66,0.35)] active:scale-[0.98] transition-all"
            >
              Get Started
              <ArrowRight className="w-4 h-4" weight="bold" />
            </Link>

            <button
              className="lg:hidden p-2 text-slate-200 hover:text-white rounded-lg transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" weight="bold" /> : <List className="w-5 h-5" weight="bold" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-xl pt-24 overflow-y-auto lg:hidden">
          <div className="px-5 space-y-1.5">
            {navLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 text-slate-200 hover:bg-white/[0.05] rounded-xl font-500 transition-colors"
              >
                <Icon className="w-5 h-5 text-gold" weight="duotone" />
                {label}
              </Link>
            ))}

            <div className="pt-3">
              <div className="px-4 py-2 text-[10px] font-700 text-slate-500 uppercase tracking-[0.2em]">Programs</div>
              {coursesMenu.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-white/[0.05] rounded-xl font-500 transition-colors"
                >
                  <Icon className="w-5 h-5 text-emerald" weight="duotone" />
                  {label}
                </Link>
              ))}
            </div>

            <div className="pt-3">
              <div className="px-4 py-2 text-[10px] font-700 text-slate-500 uppercase tracking-[0.2em]">Tours</div>
              {toursMenu.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-white/[0.05] rounded-xl font-500 transition-colors"
                >
                  <Icon className="w-5 h-5 text-emerald" weight="duotone" />
                  {label}
                </Link>
              ))}
            </div>

            <div className="pt-5 pb-10">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-gold-soft to-gold text-ink px-5 py-3.5 rounded-xl text-sm font-700"
              >
                Get Started
                <ArrowRight className="w-4 h-4" weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
