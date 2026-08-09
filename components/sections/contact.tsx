import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-2 px-6 py-14 sm:px-12 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
            />
            <div className="relative mx-auto max-w-2xl text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="font-display text-sm font-bold tabular-nums text-accent-text">
                  05
                </span>
                <span className="h-px w-10 bg-accent" aria-hidden />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-foreground/80">
                  Contact
                </span>
              </div>

              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
                Let&apos;s build something great together.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted text-pretty">
                I&apos;m currently {siteConfig.availability.toLowerCase()}.
                Whether you have a role, a project, or just a question — my inbox
                is always open.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={siteConfig.socials.email}
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent"
                >
                  Connect on LinkedIn
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              <p className="mt-8 inline-flex items-center gap-1.5 text-sm text-muted">
                <MapPin className="h-4 w-4" />
                Based in {siteConfig.location} · Open to Jabodetabek &amp; remote roles
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
