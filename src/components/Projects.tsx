import { featuredProjects, secondaryProjects } from "@/data/site";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  return (
    <section id="work" className="section border-t border-line bg-ink-soft">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="04"
          eyebrow="Proof of work"
          title="Case studies that show how I create leverage."
          description="Not a dump of every repo — selected systems with a clear problem, role, and result."
        />

        <div id="projects" className="mt-14 grid gap-7">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delayMs={index * 80}>
              <ProjectCard
                slug={project.slug}
                title={project.title}
                image={project.image}
                imageAlt={project.imageAlt}
                stack={project.stack}
                summary={project.summary}
                outcome={project.outcome}
                featured={index === 0}
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="mb-8 mt-20 flex items-end justify-between gap-4 border-b border-line pb-4">
          <div>
            <span className="eyebrow">More work</span>
            <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold text-snow">
              Additional shipped systems
            </h3>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {secondaryProjects.map((project, index) => (
            <Reveal key={project.slug} delayMs={index * 70}>
              <ProjectCard
                slug={project.slug}
                title={project.title}
                image={project.image}
                imageAlt={project.imageAlt}
                stack={project.stack}
                summary={project.summary}
                outcome={project.outcome}
                compact
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
