import { GraduationCap, BadgeCheck, FileText, ArrowUpRight } from "lucide-react";
import { certifications, education, publications } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Credentials() {
  return (
    <section
      id="credentials"
      className="scroll-mt-20 border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="05"
          eyebrow="Credentials"
          title="Education, certifications & publications"
          description="The academic foundation behind the work — a degree, hands-on certifications, and peer-reviewed research."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-x-12">
          {/* Left: Education + Certifications */}
          <div className="flex flex-col gap-10">
            <Reveal>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-background text-accent-text">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    Education
                  </h3>
                </div>
                <div className="mt-5">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h4 className="font-display text-lg font-semibold tracking-tight">
                      {education.degree}
                    </h4>
                    <span className="text-sm font-medium text-muted">
                      {education.period}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm font-medium text-accent-text">
                    {education.school}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-lg bg-background px-3 py-1.5 text-sm font-medium text-foreground/80">
                      {education.gpa}
                    </span>
                    <span className="rounded-lg bg-background px-3 py-1.5 text-sm font-medium text-foreground/80">
                      {education.english}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal className="flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-surface text-accent-text">
                  <BadgeCheck className="h-4 w-4" />
                </span>
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  Certifications
                </h3>
                <span className="ml-1 rounded-full bg-surface px-2 py-0.5 text-xs font-semibold text-muted tabular-nums">
                  {certifications.length}
                </span>
              </Reveal>

              <div className="mt-6 space-y-4">
                {certifications.map((c, i) => (
                  <Reveal
                    key={c.name}
                    delay={i * 0.05}
                    className="rounded-2xl border border-border bg-surface p-5"
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h4 className="font-display text-base font-semibold tracking-tight">
                        {c.name}
                      </h4>
                      <span className="text-sm font-medium text-muted">
                        {c.period}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-muted">{c.issuer}</p>
                    {c.note ? (
                      <p className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-background px-2.5 py-0.5 text-xs font-medium text-accent-text">
                        {c.note}
                      </p>
                    ) : null}
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Publications */}
          <div>
            <Reveal className="flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-surface text-accent-text">
                <FileText className="h-4 w-4" />
              </span>
              <h3 className="font-display text-lg font-semibold tracking-tight">
                Publications
              </h3>
              <span className="ml-1 rounded-full bg-surface px-2 py-0.5 text-xs font-semibold text-muted tabular-nums">
                {publications.length}
              </span>
            </Reveal>

            <div className="mt-6 space-y-4">
              {publications.map((p, i) => (
                <Reveal key={p.doi} delay={i * 0.05}>
                  <a
                    href={p.doi}
                    target="_blank"
                    rel="noreferrer"
                    className="group block rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-display text-base font-semibold leading-snug tracking-tight text-balance">
                        {p.title}
                      </h4>
                      <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent-text" />
                    </div>
                    <p className="mt-2.5 text-sm text-muted">
                      <span className="text-foreground/80">{p.venue}</span> ·{" "}
                      {p.year}
                    </p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
