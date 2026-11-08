"use client";

import Link from "next/link";
import { useState } from "react";

type ProjectCardProps = {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  stack: string[];
  summary: string;
  outcome?: string;
  featured?: boolean;
  compact?: boolean;
};

export function ProjectCard({
  slug,
  title,
  image,
  imageAlt,
  stack,
  summary,
  outcome,
  featured = false,
  compact = false,
}: ProjectCardProps) {
  const [failed, setFailed] = useState(false);

  return (
    <Link
      href={`/projects/${slug}`}
      className="card-sheen group block overflow-hidden rounded-2xl border border-line bg-panel/50 transition duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-panel hover:shadow-[var(--shadow-elev)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <article className={featured ? "sm:grid sm:grid-cols-[1.25fr_1fr] sm:items-stretch" : ""}>
        <div
          className={`relative overflow-hidden bg-ink-soft ${
            featured
              ? "aspect-[16/10] sm:aspect-auto sm:h-full sm:min-h-[20rem]"
              : compact
                ? "aspect-[16/11]"
                : "aspect-[16/10]"
          }`}
        >
          {!failed ? (
            <img
              src={image}
              alt={imageAlt}
              className="h-full w-full object-cover opacity-95 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
              onError={() => setFailed(true)}
            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,#0c1018_0%,#152033_50%,#0f1a14_100%)] text-center"
              aria-hidden
            >
              <span className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.2em] text-accent">
                {title}
              </span>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-panel/70 via-transparent to-transparent" />
          {outcome ? (
            <span className="absolute left-4 top-4 rounded-full border border-accent/25 bg-ink/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-accent backdrop-blur">
              {outcome}
            </span>
          ) : null}
        </div>

        <div
          className={`flex flex-col justify-center ${compact ? "gap-3 p-5" : "gap-4 p-6 sm:p-8"}`}
        >
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {stack.slice(0, compact ? 3 : stack.length).map((tech) => (
              <span
                key={tech}
                className="text-[11px] uppercase tracking-[0.14em] text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
          <h3
            className={`font-[family-name:var(--font-display)] font-bold tracking-tight text-snow transition group-hover:text-accent ${
              compact ? "text-xl" : "text-2xl sm:text-[1.8rem]"
            }`}
          >
            {title}
          </h3>
          <p className={`leading-relaxed text-muted ${compact ? "text-sm" : ""}`}>
            {summary}
          </p>
          <span className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-fog transition group-hover:text-accent">
            Read case study
            <span className="transition group-hover:translate-x-1" aria-hidden>
              →
            </span>
          </span>
        </div>
      </article>
    </Link>
  );
}
