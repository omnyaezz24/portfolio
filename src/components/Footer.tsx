import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink-soft">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="font-[family-name:var(--font-display)] text-lg font-bold text-snow"
            >
              {site.name}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted">{site.promise}</p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <span className="text-xs uppercase tracking-[0.16em] text-muted">
              Direct
            </span>
            <a
              href={`mailto:${site.email}`}
              className="text-fog transition hover:text-accent"
            >
              {site.email}
            </a>
            <span className="text-muted">{site.location}</span>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <a href="#top" className="transition hover:text-accent">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
