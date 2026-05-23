"use client";

import Image from "next/image";
import { AnimatedSection } from "./ui/AnimatedSection";
import { AnimatedCount } from "./ui/AnimatedCount";
import { SectionHeading } from "./ui/SectionHeading";
import { TechLogo, stackLogos } from "./TechLogo";
import { skills } from "@/lib/data";

const cardClass =
  "flex h-full flex-col rounded-2xl border border-white/10 bg-[#0c0c0c] p-5 transition-all hover:border-[#6322f5]/40 hover:bg-[#111111] md:p-6";

function SkillTile({
  name,
  level,
  category,
  size = "default",
}: {
  name: string;
  level: number;
  category: string;
  size?: "default" | "large";
}) {
  const logoSize = size === "large" ? 56 : 44;

  return (
    <div
      className={`${cardClass} ${
        size === "large"
          ? "min-h-[200px] justify-between md:min-h-[240px]"
          : "min-h-[140px] justify-between md:min-h-[160px]"
      }`}
    >
      <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-600">
        {category}
      </span>

      <div className={`flex flex-col ${size === "large" ? "gap-4" : "gap-3"}`}>
        <TechLogo name={name} size={logoSize} className="drop-shadow-lg" />
        <AnimatedCount
          value={level}
          duration={1200}
          className={`block font-[family-name:var(--font-space-grotesk)] font-black leading-none text-[#6322f5] ${
            size === "large" ? "text-5xl md:text-6xl" : "text-4xl md:text-5xl"
          }`}
        />
      </div>

      <span className="text-xs font-medium text-zinc-500">{name}</span>
    </div>
  );
}

function getSpan(level: number): string {
  if (level >= 90) return "col-span-1 row-span-2";
  if (level >= 85) return "col-span-1 row-span-1 md:row-span-2";
  return "col-span-1 row-span-1";
}

export function Skills() {
  const sorted = [...skills].sort((a, b) => b.level - a.level);

  return (
    <section id="skills" className="border-t border-white/5 py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="Tech Stack"
          description="Technologies I use to bring ideas to life."
        />

        <div className="grid auto-rows-fr grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-4">
          <AnimatedSection
            delay={0}
            duration={0.55}
            className="col-span-2 row-span-2 md:col-span-2 md:row-span-2"
          >
            <div className={`${cardClass} min-h-[260px] justify-between md:min-h-[300px]`}>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-600">
                Primary Stack
              </span>

              <div className="flex flex-wrap items-center gap-4 py-2 md:gap-5">
                {stackLogos.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center gap-2"
                    title={item.name}
                  >
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="h-10 w-10 object-contain md:h-12 md:w-12"
                    />
                  </div>
                ))}
              </div>

              <div>
                <p className="font-[family-name:var(--font-space-grotesk)] text-3xl font-black leading-tight text-white md:text-4xl">
                  PERN + Flutter
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  End-to-end development — APIs, interfaces, mobile apps & deployments.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {sorted.map((skill, i) => (
            <AnimatedSection
              key={skill.name}
              delay={i * 0.05}
              duration={0.55}
              className={getSpan(skill.level)}
            >
              <SkillTile
                name={skill.name}
                level={skill.level}
                category={skill.category}
                size={skill.level >= 90 ? "large" : "default"}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
