import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getProjectBySlug, projects, site } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: site.name };

  return {
    title: `${project.title} — ${site.name}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — ${site.name}`,
      description: project.summary,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const story = [
    { label: "Problem", body: project.problem },
    { label: "My role", body: project.role },
    { label: "Solution", body: project.solution },
    { label: "Result", body: project.result },
    { label: "Lesson", body: project.lesson },
  ];

  return (
    <>
      <Navbar />
      <main id="top" className="pt-24 sm:pt-28">
        <article className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent"
          >
            <span aria-hidden>←</span> Back to work
          </Link>

          <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-panel/60 shadow-[var(--shadow-elev)]">
            <div className="relative aspect-[16/9] bg-ink-soft sm:aspect-[2.2/1]">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
              <span className="absolute left-5 top-5 rounded-full border border-accent/25 bg-ink/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-accent backdrop-blur">
                {project.outcome}
              </span>
            </div>

            <div className="space-y-10 p-6 sm:p-10">
              <div>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs uppercase tracking-[0.14em] text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-gradient sm:text-5xl">
                  {project.title}
                </h1>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
                  {project.summary}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {story.map((block) => (
                  <div
                    key={block.label}
                    className="rounded-xl border border-line bg-ink-soft/80 p-5"
                  >
                    <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      {block.label}
                    </h2>
                    <p className="mt-3 leading-relaxed text-muted">{block.body}</p>
                  </div>
                ))}
              </div>

              <div>
                <h2 className="mb-4 font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.18em] text-fog">
                  Capabilities shipped
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-xl border border-line bg-ink-soft/80 px-4 py-3 text-muted"
                    >
                      <span className="mr-2 text-accent">▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {project.gallery && project.gallery.length > 0 && (
                <div className="space-y-6 pt-4">
                  <div className="border-b border-line pb-4">
                    <span className="eyebrow">Real system interfaces</span>
                    <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-snow">
                      Live Production Captures
                    </h2>
                    <p className="mt-1 text-sm text-muted">
                      Direct interfaces from daily operations: barcode POS, serialized inventory, and accounting.
                    </p>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {project.gallery.map((item) => (
                      <div
                        key={item.title}
                        className="group overflow-hidden rounded-xl border border-line bg-ink-soft/80 transition duration-300 hover:border-accent/40 hover:bg-panel"
                      >
                        <div className="flex justify-center overflow-hidden bg-ink/70 p-3">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="max-h-96 w-auto rounded-lg object-contain transition duration-500 group-hover:scale-[1.02]"
                          />
                        </div>
                        <div className="border-t border-line/60 p-4">
                          <h3 className="font-semibold text-snow transition group-hover:text-accent">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-xs leading-relaxed text-muted">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-4 border-t border-line pt-8">
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent(`About ${project.title}`)}`}
                  className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-ink transition hover:bg-accent-dim"
                >
                  Ask about this kind of build
                </a>
                <Link
                  href="/#contact"
                  className="rounded-md border border-line px-5 py-3 text-sm font-semibold text-fog transition hover:border-accent/40 hover:text-snow"
                >
                  Start a project
                </Link>
              </div>
            </div>
          </div>

          <nav className="mt-10 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="rounded-xl border border-line px-5 py-4 transition hover:border-accent/35"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-muted">Previous</p>
                <p className="mt-1 font-semibold text-snow">{prev.title}</p>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="rounded-xl border border-line px-5 py-4 text-right transition hover:border-accent/35 sm:justify-self-end"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-muted">Next</p>
                <p className="mt-1 font-semibold text-snow">{next.title}</p>
              </Link>
            ) : null}
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
}
