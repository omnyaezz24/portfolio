import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      <div
        className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.1em] text-muted">
          {index}
        </span>
        <span className="eyebrow">{eyebrow}</span>
      </div>

      <h2 className="mt-5 font-[family-name:var(--font-display)] text-[clamp(2.1rem,5vw,3.4rem)] font-bold leading-[1.02] tracking-tight text-gradient">
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-5 text-lg leading-relaxed text-muted ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
