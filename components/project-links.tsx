import {
  ArrowUpRight,
  Download,
  ExternalLink,
  LayoutDashboard,
} from "lucide-react";
import type { ComponentType } from "react";
import type { ProjectLink, ProjectLinkType } from "@/lib/data";
import { GithubIcon } from "@/components/icons";

const config: Record<
  ProjectLinkType,
  { label: string; icon: ComponentType<{ className?: string }> }
> = {
  live: { label: "Live demo", icon: ExternalLink },
  repo: { label: "View code", icon: GithubIcon },
  dashboard: { label: "View dashboard", icon: LayoutDashboard },
  download: { label: "Download file", icon: Download },
  external: { label: "Open link", icon: ArrowUpRight },
};

export function ProjectLinkButtons({ links }: { links: ProjectLink[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link, i) => {
        const meta = config[link.type];
        const Icon = meta.icon;
        const primary = i === 0;
        return (
          <a
            key={`${link.type}-${i}`}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className={
              primary
                ? "group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                : "group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent"
            }
          >
            <Icon className="h-4 w-4" />
            {link.label ?? meta.label}
          </a>
        );
      })}
    </div>
  );
}
