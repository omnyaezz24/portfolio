import { skills } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="section border-t border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="03"
          eyebrow="Capabilities"
          title="The stack behind the outcomes."
        />

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, index) => (
            <Reveal key={group.category} delayMs={index * 80}>
              <h3 className="mb-5 border-b border-line pb-3 font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.14em] text-fog">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="group flex items-center gap-2.5 text-muted transition hover:text-snow"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent/50 transition group-hover:bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
