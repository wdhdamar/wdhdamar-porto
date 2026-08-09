"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function Skills() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-border bg-surface py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="04"
          eyebrow="Skills"
          title="Tools & technologies"
          description="The stack I build with day to day — spanning web development, data, and the analysis and leadership that hold a project together."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={item}
              className="rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent"
            >
              <h3 className="flex items-center gap-2 font-display text-base font-semibold tracking-tight">
                <span className="h-4 w-1 rounded-full bg-accent" aria-hidden />
                {group.category}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg bg-surface px-3 py-1.5 text-sm font-medium text-foreground/80"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
