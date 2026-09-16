"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Code2, LayoutDashboard, Palette } from "lucide-react";
import { projects, projectTypeLabels, type ProjectType } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

const typeIcon: Record<ProjectType, typeof Code2> = {
  code: Code2,
  data: LayoutDashboard,
  design: Palette,
};

/** Data-first ordering for both the "All" view and the filter chips. */
const typeOrder: Record<ProjectType, number> = { data: 0, code: 1, design: 2 };

type Filter = "all" | ProjectType;

export function Projects() {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<Filter>("all");

  // Project types actually present, ordered data-first, each with a count.
  const availableTypes = useMemo(() => {
    const counts = new Map<ProjectType, number>();
    for (const p of projects) counts.set(p.type, (counts.get(p.type) ?? 0) + 1);
    return [...counts.keys()]
      .sort((a, b) => typeOrder[a] - typeOrder[b])
      .map((type) => ({ type, count: counts.get(type)! }));
  }, []);

  // Featured first, then data-first, filtered to the active chip.
  const visible = useMemo(() => {
    const sorted = [...projects].sort((a, b) => {
      if (!!a.featured !== !!b.featured) return a.featured ? -1 : 1;
      return typeOrder[a.type] - typeOrder[b.type];
    });
    return filter === "all" ? sorted : sorted.filter((p) => p.type === filter);
  }, [filter]);

  const chips: { value: Filter; label: string; count: number }[] = [
    { value: "all", label: "All", count: projects.length },
    ...availableTypes.map(({ type, count }) => ({
      value: type as Filter,
      label: projectTypeLabels[type],
      count,
    })),
  ];

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
          description="Data & analytics work up front, with the development and systems projects behind it. Filter by focus, and open any card for the full case study."
        />

        {/* Filter chips */}
        <div className="mt-10 flex flex-wrap gap-2">
          {chips.map((chip) => {
            const isActive = filter === chip.value;
            return (
              <button
                key={chip.value}
                type="button"
                onClick={() => setFilter(chip.value)}
                aria-pressed={isActive}
                className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-accent-foreground"
                    : "border border-border bg-background text-muted hover:border-accent hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="project-filter-active"
                    className="absolute inset-0 -z-10 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {chip.label}
                <span
                  className={`tabular-nums text-xs font-semibold ${
                    isActive ? "text-accent-foreground/70" : "text-foreground/40"
                  }`}
                >
                  {chip.count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => {
              const Icon = typeIcon[project.type];
              return (
                <motion.article
                  key={project.slug}
                  layout
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
