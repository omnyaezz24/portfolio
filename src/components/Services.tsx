import { site } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Services() {
  return (
    <section id="services" className="section border-t border-line bg-ink-soft">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="02"
          eyebrow="Offer"
          title={site.offer.headline}
          description="Clear scope. Production intent. No mystery packages."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {site.offer.items.map((item, index) => (
            <Reveal key={item.title} delayMs={index * 70}>
              <div className="group relative h-full bg-ink p-7 transition hover:bg-panel sm:p-8">
                <div className="flex items-start justify-between">
                  <span className="font-[family-name:var(--font-display)] text-sm font-bold text-accent">
                    0{index + 1}
                  </span>
                  <span
                    className="text-muted opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                    aria-hidden
                  >
                    →
                  </span>
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl font-bold text-snow">
                  {item.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-muted">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
