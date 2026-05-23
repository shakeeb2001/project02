"use client";

import { AnimatedSection } from "./ui/AnimatedSection";
import { SectionHeading } from "./ui/SectionHeading";
import { personal } from "@/lib/data";

const highlights = [
  {
    title: "Frontend",
    description: "Responsive web apps with Next.js, React, and modern UI patterns.",
  },
  {
    title: "Backend & DevOps",
    description: "Node.js APIs, PostgreSQL, Linux servers, and Nginx deployments.",
  },
  {
    title: "Mobile",
    description: "Cross-platform Flutter apps with clean architecture and polished UX.",
  },
];

export function About() {
  return (
    <section id="about" className="border-t border-white/5 py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About"
          title="Who I Am"
          description="From backend systems to mobile apps — I build end-to-end solutions that scale."
        />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          <AnimatedSection className="lg:col-span-7">
            <p className="text-xl leading-relaxed text-zinc-300 md:text-2xl md:leading-relaxed">
              {personal.bio}
            </p>
            <div className="mt-12 flex flex-wrap gap-10 border-t border-white/10 pt-10">
              {[
                { value: "2+", label: "Years Experience" },
                { value: "PERN", label: "Primary Stack" },
                { value: "79.6%", label: "Thesis Score" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-[#6322f5]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-5" delay={0.15}>
            <ul className="divide-y divide-white/10">
              {highlights.map((item) => (
                <li key={item.title} className="py-6 first:pt-0 last:pb-0">
                  <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{item.description}</p>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
