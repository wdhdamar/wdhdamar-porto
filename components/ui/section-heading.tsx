import { Reveal } from "./reveal";

type SectionHeadingProps = {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      <div
        className={
          align === "center"
            ? "flex items-center justify-center gap-3"
            : "flex items-center gap-3"
        }
      >
        {index ? (
          <span className="font-display text-sm font-bold tabular-nums text-accent-text">
            {index}
          </span>
        ) : null}
        <span className="h-px w-10 bg-accent" aria-hidden />
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-foreground/80">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted text-pretty">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
