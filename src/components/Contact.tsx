"use client";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { LinkedInIcon } from "./ui/LinkedInIcon";
import { AnimatedSection } from "./ui/AnimatedSection";
import { SectionHeading } from "./ui/SectionHeading";
import { personal } from "@/lib/data";

export function Contact() {
  const links = [
    {
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      icon: Mail,
    },
    {
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone}`,
      icon: Phone,
    },
    {
      label: "Location",
      value: personal.location,
      href: null,
      icon: MapPin,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/shjasim",
      href: personal.linkedin,
      icon: LinkedInIcon,
    },
  ];

  return (
    <section id="contact" className="border-t border-white/5 py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <SectionHeading
            label="Contact"
            title="Let's Work Together"
            description="Have a project in mind or want to connect? I'd love to hear from you."
          />

          <AnimatedSection delay={0.1}>
            <a
              href={`mailto:${personal.email}?subject=Hello%20Shakeeb!`}
              className="group inline-flex items-center gap-3 rounded-full bg-[#6322f5] py-2.5 pl-6 pr-2.5 text-sm font-semibold text-white shadow-lg shadow-[#6322f5]/30 transition-all hover:bg-[#5420d4]"
            >
              Let&apos;s Talk
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#6322f5] transition-transform group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </a>
          </AnimatedSection>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((item, i) => (
            <AnimatedSection key={item.label} delay={i * 0.08}>
              <div className="border-t border-white/10 py-8 pr-6">
                <item.icon size={18} className="mb-4 text-[#6322f5]" />
                <p className="mb-1 text-xs font-medium uppercase tracking-widest text-zinc-600">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.label === "LinkedIn" ? "_blank" : undefined}
                    rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                    className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-zinc-300">{item.value}</p>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()}{" "}
          <span className="text-zinc-400">{personal.name}</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
