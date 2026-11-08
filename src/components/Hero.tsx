import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 sm:pt-28"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-ink" />
        <div className="animate-aurora absolute -left-[15%] top-[-20%] h-[75vh] w-[75vw] rounded-full bg-[radial-gradient(circle,rgba(94,234,212,0.14),transparent_62%)] blur-3xl" />
        <div className="animate-aurora absolute -right-[20%] bottom-[-25%] h-[60vh] w-[60vw] rounded-full bg-[radial-gradient(circle,rgba(228,176,99,0.08),transparent_60%)] blur-3xl [animation-delay:-8s]" />
        <div className="absolute inset-0 grid-atmosphere" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="animate-rise inline-flex items-center gap-2.5 rounded-full border border-line bg-panel/60 px-4 py-1.5 backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-xs font-medium text-fog">
            Available for new projects
          </span>
        </div>

        <p className="animate-rise-delay-1 mt-8 font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.3em] text-accent sm:text-sm">
          {site.role}
        </p>

        <h1 className="animate-rise-delay-1 mt-5 max-w-4xl font-[family-name:var(--font-display)] text-[clamp(2.6rem,7.5vw,5.75rem)] font-bold leading-[0.98] tracking-tight text-gradient">
          Software that ships,
          <br className="hidden sm:block" /> scales, and stays reliable.
        </h1>

        <p className="animate-rise-delay-2 mt-7 max-w-2xl text-lg leading-relaxed text-fog sm:text-xl">
          {site.promise}
        </p>

        <p className="animate-rise-delay-2 mt-3 max-w-xl text-base leading-relaxed text-muted">
          {site.tagline}
        </p>

        <div className="animate-rise-delay-3 mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="/#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition hover:bg-accent-dim"
          >
            Start a project
            <span className="transition group-hover:translate-x-0.5" aria-hidden>
              →
            </span>
          </a>
          <a
            href="/#work"
            className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-fog transition hover:border-accent/40 hover:text-snow"
          >
            See proof of work
          </a>
        </div>

        <dl className="animate-rise-delay-4 mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
          {site.proof.map((item) => (
            <div key={item.label} className="bg-ink-soft p-5">
              <dd className="font-[family-name:var(--font-display)] text-xl font-bold text-snow sm:text-2xl">
                {item.value}
              </dd>
              <dt className="mt-1.5 text-[11px] uppercase tracking-[0.12em] text-muted">
                {item.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
