"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const to = (hash: string) => (isHome ? hash : `/${hash}`);

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /**
   * Closing the mobile menu unmounts the tapped link (AnimatePresence exit),
   * which swallows the browser's native fragment-navigation scroll — the hash
   * updates but the page never moves. So drive the scroll ourselves once the
   * close has been committed.
   */
  function handleMobileNav(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    setOpen(false);
    // Links to another page (e.g. "/#about") keep native navigation.
    if (!href.startsWith("#")) return;
    const el = document.getElementById(href.slice(1));
    if (!el) return;
    e.preventDefault();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", href);
      });
    });
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href={to("#top")}
          className="group inline-flex items-center gap-2.5 font-display text-base font-semibold tracking-tight"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-accent-foreground">
            {siteConfig.initials}
          </span>
          <span className="hidden sm:inline">{siteConfig.shortName}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={to(link.href)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-surface"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={to("#contact")}
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Get in touch
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-accent md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-border bg-background md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={to(link.href)}
                  onClick={(e) => handleMobileNav(e, to(link.href))}
                  className="rounded-lg px-4 py-3 text-base font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={to("#contact")}
                onClick={(e) => handleMobileNav(e, to("#contact"))}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-4 py-3 text-base font-semibold text-accent-foreground"
              >
                Get in touch
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
