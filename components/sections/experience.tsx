import { Briefcase, Flag, Users } from "lucide-react";
import type { ComponentType } from "react";
import {
  experience,
  organizationalExperience,
  leadershipExperience,
  type ExperienceItem,
} from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function Timeline({
  label,
  icon: Icon,
  items,
}: {
  label: string;
  icon: ComponentType<{ className?: string }>;
  items: ExperienceItem[];
}) {
  return (
    <div>
      <Reveal className="flex items-center gap-2.5">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-surface text-accent-text">
          <Icon className="h-4 w-4" />
        </span>
        <h3 className="font-display text-lg font-semibold tracking-tight">
          {label}
        </h3>
        <span className="ml-1 rounded-full bg-surface px-2 py-0.5 text-xs font-semibold text-muted tabular-nums">
          {items.length}
        </span>
      </Reveal>

      <ol className="relative mt-8 border-l border-border pl-8 sm:pl-10">
        {items.map((job, i) => (
          <Reveal
            as="li"
            key={`${job.company}-${i}`}
            delay={i * 0.05}
            className="relative pb-12 last:pb-0"
          >
            <span className="absolute -left-[calc(2rem+1px)] top-1.5 flex h-4 w-4 -translate-x-1/2 items-center justify-center sm:-left-[calc(2.5rem+1px)]">
              <span className="h-3 w-3 rounded-full border-2 border-accent bg-background" />
            </span>

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h4 className="font-display text-lg font-semibold tracking-tight sm:text-xl">
                {job.role}
              </h4>
              <span className="text-sm font-medium text-muted">
                {job.period}
              </span>
            </div>

            <div className="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-sm">
              <span className="font-medium text-accent-text">{job.company}</span>
              {job.location ? (
                <span className="rounded-full bg-surface px-2.5 py-0.5 text-xs font-medium text-muted">
                  {job.location}
                </span>
              ) : null}
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted text-pretty">
              {job.description}
            </p>

            <ul className="mt-4 space-y-2">
              {job.achievements.map((a) => (
                <li
                  key={a}
                  className="flex items-start gap-2.5 text-sm text-foreground/80"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="Where I've worked and led"
          description="A mix of internships, coaching, community roles, and event leadership — building, publishing, and shipping alongside teams."
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
          <Timeline label="Work Experience" icon={Briefcase} items={experience} />
          <div className="flex flex-col gap-16">
            <Timeline
              label="Organizational Experience"
              icon={Users}
              items={organizationalExperience}
            />
            <Timeline
              label="Leadership Experience"
              icon={Flag}
              items={leadershipExperience}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
