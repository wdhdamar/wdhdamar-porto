import { ArrowUpRight, Mail } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const socials = [
  { label: "GitHub", href: siteConfig.socials.github, icon: GithubIcon },
  { label: "LinkedIn", href: siteConfig.socials.linkedin, icon: LinkedinIcon },
  { label: "Email", href: siteConfig.socials.email, icon: Mail },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-2">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a
              href="#top"
              className="inline-flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-accent-foreground">
                {siteConfig.initials}
              </span>
              {siteConfig.shortName}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {siteConfig.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Navigate
              </h3>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-accent-text"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Connect
              </h3>
              <ul className="mt-4 space-y-2.5">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm text-foreground/80 transition-colors hover:text-accent-text"
                    >
                      <s.icon className="h-4 w-4" />
                      {s.label}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Designed &amp; built with care.</p>
        </div>
      </div>
    </footer>
  );
}
