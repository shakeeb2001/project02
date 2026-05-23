"use client";

import { MapPin } from "lucide-react";
import { AnimatedSection } from "./ui/AnimatedSection";
import { SectionHeading } from "./ui/SectionHeading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="border-t border-white/5 py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="Where I've Worked"
          description="Building real-world products and growing as a full-stack developer."
        />

        <div className="max-w-3xl">
          {experience.map((job, i) => (
            <AnimatedSection key={job.id} delay={i * 0.1}>
              <article className="border-b border-white/10 py-10 last:border-b-0">
                <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                      {job.current && (
                        <span className="rounded-full bg-[#6322f5]/15 px-3 py-0.5 text-xs font-semibold text-[#a78bfa]">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-lg font-medium text-[#6322f5]">{job.company}</p>
                  </div>
                  <div className="text-right text-sm text-zinc-500">
                    <p className="font-medium text-zinc-300">{job.period}</p>
                    <p className="mt-1 flex items-center justify-end gap-1">
                      <MapPin size={12} />
                      {job.location}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {job.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex gap-4 text-sm leading-relaxed text-zinc-400"
                    >
                      <span className="mt-2 h-px w-6 shrink-0 bg-[#6322f5]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
