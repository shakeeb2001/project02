"use client";

import { AnimatedSection } from "./AnimatedSection";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <AnimatedSection className={`mb-10 max-w-3xl md:mb-14 ${alignClass}`}>
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#6322f5]">
        {label}
      </p>
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed text-zinc-400 ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
