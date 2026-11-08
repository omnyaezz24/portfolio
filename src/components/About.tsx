import { site } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="section border-t border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeader
            index="01"
            eyebrow="About"
            title={
              <>
                I build systems
                <span className="block text-muted">people can run.</span>
              </>
            }
          />

          <Reveal delayMs={120} className="space-y-6 text-lg leading-relaxed text-muted">
            <p className="text-fog">{site.about.lead}</p>
            <p>{site.about.body}</p>

            <dl className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line pt-0 sm:grid-cols-2">
              <div className="bg-ink-soft p-5">
                <dt className="text-xs uppercase tracking-[0.18em] text-muted">
                  Who I help
                </dt>
                <dd className="mt-2 text-snow">{site.audience}</dd>
              </div>
              <div className="bg-ink-soft p-5">
                <dt className="text-xs uppercase tracking-[0.18em] text-muted">
                  Core stack
                </dt>
                <dd className="mt-2 text-snow">
                  Python · Flask · Flutter · Algo Trading
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
