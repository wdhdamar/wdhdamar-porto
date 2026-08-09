import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ImageIcon } from "lucide-react";
import { getProject, projects } from "@/lib/data";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectLinkButtons } from "@/components/project-links";
import { Reveal } from "@/components/ui/reveal";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
  };
}

const aspectClass = {
  wide: "aspect-[16/9]",
  tall: "aspect-[3/4]",
  square: "aspect-square",
} as const;

function GalleryPlaceholder({
  caption,
  aspect = "square",
  src,
  sizes,
  priority,
}: {
  caption: string;
  aspect?: "wide" | "tall" | "square";
  src?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <figure className="group relative overflow-hidden rounded-2xl border border-border bg-surface">
        <Image
          src={src}
          alt={caption}
          width={0}
          height={0}
          sizes={sizes ?? "100vw"}
          priority={priority}
          className="h-auto w-full"
        />
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-transparent px-4 pb-3 pt-8 text-sm font-medium text-foreground">
          {caption}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure
      className={`group relative overflow-hidden rounded-2xl border border-border bg-surface ${aspectClass[aspect]}`}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-muted">
        <ImageIcon className="h-8 w-8 opacity-40" />
        <figcaption className="px-4 text-center text-sm font-medium">
          {caption}
        </figcaption>
      </div>
      <span className="absolute left-4 top-4 rounded-full bg-background/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted backdrop-blur">
        Preview
      </span>
    </figure>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const meta = [
    project.role ? { label: "Role", value: project.role } : null,
    project.timeline ? { label: "Timeline", value: project.timeline } : null,
    { label: "Category", value: project.category },
    { label: "Year", value: project.year },
    project.client ? { label: "Client", value: project.client } : null,
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-16">
        <article className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
          <Reveal>
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              All projects
            </Link>
          </Reveal>

          <Reveal delay={0.05} className="mt-8">
            <div className="flex items-center gap-2.5 text-xs font-medium text-muted">
              <span className="rounded-full bg-surface px-2.5 py-1 text-accent-text">
                {project.category}
              </span>
              <span>{project.year}</span>
            </div>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
              {project.summary}
            </p>
          </Reveal>

          {project.links && project.links.length > 0 ? (
            <Reveal delay={0.1} className="mt-8">
              <ProjectLinkButtons links={project.links} />
            </Reveal>
          ) : null}

          {/* Cover */}
          {project.gallery && project.gallery[0] ? (
            <Reveal delay={0.12} className="mt-12">
              <GalleryPlaceholder
                caption={project.gallery[0].caption}
                aspect="wide"
                src={project.gallery[0].src}
                sizes="(min-width: 1024px) 1024px, 100vw"
                priority
              />
            </Reveal>
          ) : null}

          {/* Body */}
          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-12 lg:col-span-8">
              {project.problem ? (
                <Reveal>
                  <h2 className="font-display text-2xl font-semibold tracking-tight">
                    The problem
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted text-pretty">
                    {project.problem}
                  </p>
                </Reveal>
              ) : null}

              {project.approach && project.approach.length > 0 ? (
                <Reveal>
                  <h2 className="font-display text-2xl font-semibold tracking-tight">
                    Approach
                  </h2>
                  <ul className="mt-5 space-y-4">
                    {project.approach.map((step, i) => (
                      <li key={step} className="flex gap-4">
                        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                          {i + 1}
                        </span>
                        <span className="pt-0.5 text-base leading-relaxed text-foreground/90 text-pretty">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ) : null}
            </div>

            {/* Meta sidebar */}
            <aside className="lg:col-span-4">
              <Reveal delay={0.05}>
                <dl className="rounded-2xl border border-border bg-surface p-6">
                  {meta.map((m, i) => (
                    <div
                      key={m.label}
                      className={i > 0 ? "mt-4 border-t border-border pt-4" : ""}
                    >
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                        {m.label}
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-foreground">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                  <div className="mt-4 border-t border-border pt-4">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Tools
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </Reveal>
            </aside>
          </div>

          {/* Outcomes */}
          {project.outcomes && project.outcomes.length > 0 ? (
            <Reveal className="mt-16">
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                Outcomes
              </h2>
              <dl className="mt-6 grid gap-5 sm:grid-cols-3">
                {project.outcomes.map((o) => (
                  <div
                    key={o.label}
                    className="rounded-2xl border border-border bg-surface p-6"
                  >
                    <dd className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                      {o.value}
                    </dd>
                    <dt className="mt-1 text-sm text-muted">{o.label}</dt>
                  </div>
                ))}
              </dl>
            </Reveal>
          ) : null}

          {/* Gallery */}
          {project.gallery && project.gallery.length > 1 ? (
            <Reveal className="mt-16">
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                Gallery
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {project.gallery.slice(1).map((g) => {
                  const wide = g.aspect === "wide";
                  return (
                    <div key={g.caption} className={wide ? "sm:col-span-2" : ""}>
                      <GalleryPlaceholder
                        caption={g.caption}
                        aspect={g.aspect}
                        src={g.src}
                        sizes={
                          wide
                            ? "(min-width: 1024px) 1024px, 100vw"
                            : "(min-width: 640px) 50vw, 100vw"
                        }
                      />
                    </div>
                  );
                })}
              </div>
            </Reveal>
          ) : null}

          {/* Next steps */}
          <Reveal className="mt-20 border-t border-border pt-10">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="max-w-md text-base text-muted">
                Interested in the details or want to see more work?
              </p>
              <div className="flex gap-3">
                <Link
                  href="/#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent"
                >
                  <ArrowLeft className="h-4 w-4" />
                  All projects
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </Reveal>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
