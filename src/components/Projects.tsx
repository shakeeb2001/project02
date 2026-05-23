"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "./ui/AnimatedSection";
import { SectionHeading } from "./ui/SectionHeading";
import {
  achievements,
  certifications,
  education,
  projects,
  type Project,
} from "@/lib/data";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const content = (
    <>
      <div className="relative mb-6 overflow-hidden rounded-xl border border-white/5 bg-black">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold text-white transition-colors group-hover:text-[#a78bfa] md:text-2xl">
          {project.title}
        </h3>
        {project.url && (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-[#6322f5] group-hover:bg-[#6322f5]">
            <ArrowUpRight
              size={18}
              className="text-zinc-400 transition-all group-hover:text-white"
            />
          </span>
        )}
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">
        {project.description}
      </p>

      <p className="text-xs font-medium text-zinc-500">{project.tags.join(" · ")}</p>
    </>
  );

  const className =
    "group flex h-full flex-col rounded-2xl border border-white/10 bg-[#0c0c0c] p-5 transition-all hover:border-[#6322f5]/40 hover:bg-[#111111] md:p-6";

  return (
    <AnimatedSection delay={index * 0.08}>
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {content}
        </a>
      ) : (
        <article className={className}>{content}</article>
      )}
    </AnimatedSection>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-t border-white/5 py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Work / Portfolio"
          title="Products I've Built"
          description="Web platforms and tools — real products shipped for businesses and startups."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 gap-16 border-t border-white/10 pt-16 lg:grid-cols-3">
          <AnimatedSection className="lg:col-span-2">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[#6322f5]">
              Education · {education.period}
            </p>
            <h3 className="mb-2 text-2xl font-bold text-white">{education.degree}</h3>
            <p className="mb-6 text-zinc-400">
              {education.university}, {education.location}
            </p>
            <p className="mb-2 font-medium text-zinc-300">
              Thesis — {education.thesis.subtitle}
            </p>
            <p className="mb-4 max-w-2xl text-sm leading-relaxed text-zinc-500">
              {education.thesis.description}
            </p>
            <p className="mb-4 text-sm font-semibold text-emerald-400">
              Final score: {education.thesis.score}
            </p>
            <p className="text-sm text-zinc-600">
              {education.thesis.technologies.join(" · ")}
            </p>
          </AnimatedSection>

          <div className="space-y-12">
            <AnimatedSection delay={0.1}>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#6322f5]">
                Achievements
              </p>
              {achievements.map((item) => (
                <div key={item.title}>
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <p className="mt-1 text-sm text-zinc-500">{item.org}</p>
                </div>
              ))}
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#6322f5]">
                Certifications
              </p>
              {certifications.map((cert) => (
                <p key={cert} className="text-sm leading-relaxed text-zinc-400">
                  {cert}
                </p>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
