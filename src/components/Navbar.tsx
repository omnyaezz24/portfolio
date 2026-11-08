"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Offer" },
  { href: "/#work", label: "Work" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      setScrolled(top > 16);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(1, top / height) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-ink/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-[family-name:var(--font-display)] text-base font-bold tracking-tight text-snow sm:text-lg"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-line bg-panel text-xs text-accent transition group-hover:border-accent/40">
            OE
          </span>
          <span className="transition group-hover:text-accent">{site.name}</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link, index) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex items-center gap-1.5 text-sm text-muted transition hover:text-snow"
              >
                <span className="font-[family-name:var(--font-display)] text-[10px] text-accent/70">
                  0{index + 1}
                </span>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#contact"
              className="rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-sm font-semibold text-accent transition hover:bg-accent hover:text-ink"
            >
              Hire me
            </Link>
          </li>
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-fog lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* Scroll progress */}
      <div
        className="h-px origin-left bg-gradient-to-r from-accent to-accent-deep transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
      />

      {open && (
        <div className="border-b border-line bg-ink/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link, index) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center gap-3 py-2.5 text-fog"
                  onClick={() => setOpen(false)}
                >
                  <span className="font-[family-name:var(--font-display)] text-xs text-accent/70">
                    0{index + 1}
                  </span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
