import Image from "next/image";
import { Check } from "lucide-react";
import { highlights, siteConfig } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              index="01"
              eyebrow="About"
              title="A short introduction"
            />
            <Reveal delay={0.1} className="mt-8">
              <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-surface">
                <Image
                  src="/projects/damar-portrait.png"
                  alt={siteConfig.name}
                  fill
                  sizes="(min-width: 1024px) 384px, (min-width: 640px) 384px, 100vw"
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground">
                  {siteConfig.location}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <p className="font-display text-2xl font-medium leading-snug tracking-tight text-balance sm:text-3xl">
                I turn real problems into working solutions — across web
                development, data, and the systems that tie them together.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted text-pretty">
                <p>
                  I&apos;m an Information Systems graduate from UIN Syarif
                  Hidayatullah Jakarta, happiest in the full arc of building:
                  understanding the real need, designing the system behind it,
                  then shipping it. That foundation keeps me versatile — moving
                  between web development, data, and analysis instead of staying
                  boxed into a single lane.
                </p>
                <p>
                  I&apos;ve built web applications with Laravel and PHP,
                  integrated AI and REST APIs, modeled databases, and turned
                  messy requirements into clean, working features. I back that up
                  with leadership from running teams and national-scale events —
                  so I don&apos;t just write code, I help get it shipped and bring
                  people along the way.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground/90">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
