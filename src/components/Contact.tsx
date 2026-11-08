import { site } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
  "Project inquiry — ",
)}&body=${encodeURIComponent(
  "Hi Omnya,\n\nWhat I need:\n\nCurrent stack / constraints:\n\nTimeline & success criteria:\n\n",
)}`;

export function Contact() {
  return (
    <section id="contact" className="section border-t border-line">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute left-1/2 top-0 h-[42vh] w-[70vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(94,234,212,0.08),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="05"
          eyebrow="Contact"
          title="Ready to ship the next system?"
          description={`Available for ${site.audience.toLowerCase()}. ${site.replyTime}`}
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="bg-ink-soft p-7 sm:p-9">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Email</p>
            <a
              href={mailto}
              className="mt-3 inline-block break-all font-[family-name:var(--font-display)] text-2xl font-semibold text-snow transition hover:text-accent sm:text-3xl"
            >
              {site.email}
            </a>
            <p className="mt-3 text-sm text-muted">{site.location}</p>

            <a
              href={mailto}
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition hover:bg-accent-dim"
            >
              Email me a brief
              <span className="transition group-hover:translate-x-0.5" aria-hidden>
                →
              </span>
            </a>
          </Reveal>

          <Reveal delayMs={120} className="bg-ink-soft p-7 sm:p-9">
            <p className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.16em] text-fog">
              Include this in your email
            </p>
            <ol className="mt-6 space-y-4">
              {site.contactGuide.map((item, index) => (
                <li key={item} className="flex gap-3.5 text-muted">
                  <span className="font-[family-name:var(--font-display)] font-semibold text-accent">
                    0{index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
            <p className="mt-7 border-t border-line pt-5 text-sm text-muted">
              Best fit: product builds, analytics platforms, trading automation, and AI
              audit tools.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
