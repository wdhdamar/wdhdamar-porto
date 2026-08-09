"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Code2, LayoutDashboard, Palette } from "lucide-react";
import { projects, type ProjectType } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

const typeIcon: Record<ProjectType, typeof Code2> = {
  code: Code2,
  data: LayoutDashboard,
  design: Palette,
};

export function Projects() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-border bg-surface py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="Projects"
          title="Selected work"
          description="A mix of web development, data, and systems projects — each card opens a full case study of the problem, the build, and the outcome."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="mt-12 grid gap-5 sm:grid-cols-2"
        >
          {projects.map((project) => {
            const Icon = typeIcon[project.type];
            return (
              <motion.article
                key={project.slug}
                variants={item}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent sm:p-7 ${
                  project.featured ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5 text-xs font-medium text-muted">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-2.5 py-1">
                      <Icon className="h-3.5 w-3.5 text-accent-text" />
                      {project.category}
                    </span>
                    <span>{project.year}</span>
                  </div>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors group-hover:border-accent group-hover:text-accent-text">
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="after:absolute after:inset-0"
                  >
                    {project.title}
                  </Link>
                </h3>
                <p
                  className={`mt-3 flex-1 text-sm leading-relaxed text-muted text-pretty ${
                    project.featured ? "max-w-2xl" : ""
                  }`}
                >
                  {project.description}
                </p>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <ul className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-border px-2.5 py-1 text-xs font-medium text-foreground/70"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <span className="hidden shrink-0 items-center gap-1 text-xs font-semibold text-muted transition-colors group-hover:text-accent-text sm:inline-flex">
                    Case study
                  </span>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
