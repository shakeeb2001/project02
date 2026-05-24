"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Mail, Menu, X } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import { navLinks, personal } from "@/lib/data";

function LetterGlow({ children }: { children: string }) {
  return (
    <span className="relative inline-block">
      <span
        className="pointer-events-none absolute -left-2 top-1/2 -z-10 h-[0.85em] w-[0.85em] -translate-y-1/2 rounded-full bg-[#8b5cf6] opacity-100 blur-[36px] sm:blur-[44px] md:h-[1em] md:w-[1em] md:bg-[#6322f5] md:opacity-90 md:blur-[52px]"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute -left-3 top-1/2 -z-10 h-[1.4em] w-[1.6em] -translate-y-1/2 rounded-full bg-[#6322f5]/45 blur-[56px] md:blur-[80px]"
        aria-hidden
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
}

function ConcentricRings() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
      {[180, 260, 340, 420, 500].map((size, i) => (
        <div
          key={size}
          className="absolute rounded-full border border-white/[0.04] md:hidden"
          style={{ width: size, height: size, opacity: 1 - i * 0.12 }}
        />
      ))}
      {[280, 400, 520, 640, 760].map((size, i) => (
        <div
          key={`d-${size}`}
          className="absolute hidden rounded-full border border-white/[0.04] md:block"
          style={{ width: size, height: size, opacity: 1 - i * 0.12 }}
        />
      ))}
      <div className="absolute h-[280px] w-[280px] rounded-full bg-[#6322f5]/8 blur-[80px] md:h-[360px] md:w-[360px] md:blur-[100px]" />
    </div>
  );
}

export function Hero() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="px-3 pb-4 pt-3 sm:px-4 md:px-6 md:pb-6 md:pt-6 lg:px-8">
      <div className="relative mx-auto flex min-h-0 flex-col overflow-hidden rounded-[1.25rem] bg-[#0a0a0a] sm:rounded-[1.5rem] md:min-h-[min(92vh,880px)] md:rounded-[2.5rem]">
        <ConcentricRings />

        {/* Nav */}
        <div className="relative z-30 shrink-0 px-4 pt-4 sm:px-5 sm:pt-5 md:px-8 md:pt-8">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#home"
              className="shrink-0 font-[family-name:var(--font-space-grotesk)] text-base font-bold tracking-tight text-white"
            >
              {personal.firstName}
              <span className="text-[#6322f5]">.</span>
            </a>

            <nav className="hidden items-center gap-6 md:flex lg:gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative whitespace-nowrap text-[13px] font-medium transition-colors lg:text-sm ${
                      isActive
                        ? "text-white"
                        : "text-zinc-500 hover:text-zinc-200"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="hero-nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-[#6322f5]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="shrink-0 text-zinc-400 transition-colors hover:text-white md:hidden"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="mt-4 flex flex-col gap-3 md:hidden"
              >
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.slice(1);
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`text-sm font-medium transition-colors ${
                        isActive ? "text-[#a78bfa]" : "text-zinc-500 hover:text-zinc-200"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Hero stage */}
        <div className="relative z-10 min-h-[min(78vh,600px)] flex-1 px-4 md:flex md:min-h-0 md:flex-col md:justify-center md:px-8 md:py-4">
          {/* Portrait — larger on mobile, anchored bottom */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0 z-[1] flex items-end justify-center md:absolute md:inset-0 md:items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="hero-watermark-fade translate-y-2 sm:translate-y-4 md:translate-x-12 md:translate-y-10 lg:translate-x-16 lg:translate-y-12"
              aria-hidden
            >
              <div className="hero-watermark-dots relative h-[min(62vh,560px)] w-[min(96vw,460px)] sm:h-[min(65vh,600px)] sm:w-[min(94vw,480px)] md:h-[min(90vh,860px)] md:w-[min(60vw,640px)] lg:h-[min(94vh,940px)] lg:w-[min(58vw,720px)]">
                <Image
                  src="/office_profile-removebg-preview.png"
                  alt=""
                  fill
                  className="object-contain object-bottom md:object-center"
                  priority
                  sizes="(max-width: 768px) 480px, 720px"
                />
              </div>
            </motion.div>
          </div>

          {/* Name — lower portrait on mobile + tagline; top row on desktop */}
          <div className="absolute inset-x-4 bottom-[clamp(2.75rem,11vh,5.25rem)] z-[2] sm:inset-x-5 sm:bottom-[clamp(3rem,12vh,5.5rem)] md:relative md:inset-x-0 md:bottom-auto md:shrink-0">
            <h1 className="hero-name-glow text-center font-[family-name:var(--font-space-grotesk)] text-[clamp(1.85rem,9vw,2.75rem)] font-black leading-[0.95] tracking-tight text-white sm:text-[clamp(2.1rem,9.5vw,3rem)] md:hidden">
              <LetterGlow>S</LetterGlow>hakeeb Jasi<LetterGlow>m</LetterGlow>
            </h1>
            <h1 className="hidden w-full flex-row items-center justify-between gap-2 font-[family-name:var(--font-space-grotesk)] text-[clamp(3rem,10.5vw,8.5rem)] font-black leading-[0.95] tracking-tight text-white md:flex">
              <span className="shrink-0">
                <LetterGlow>S</LetterGlow>hakeeb
              </span>
              <span className="shrink-0 text-right">
                Jasi<LetterGlow>m</LetterGlow>
              </span>
            </h1>
            <p className="hero-name-glow mt-2.5 text-center text-[11px] font-medium tracking-wide text-zinc-300 sm:mt-3 sm:text-xs md:hidden">
              {personal.mobileHeroTagline}
            </p>
          </div>
        </div>

        {/* Bottom content */}
        <div className="relative z-30 shrink-0 space-y-6 px-4 pb-6 pt-2 sm:px-5 sm:pb-8 md:mt-auto md:grid md:grid-cols-2 md:gap-6 md:space-y-0 md:px-8 md:pb-10 lg:pb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="w-full md:max-w-[280px]"
          >
            <p className="text-[13px] leading-relaxed text-zinc-400 sm:text-sm md:text-[15px]">
              {personal.heroLeft}
            </p>
            <div className="mt-4 flex items-center gap-3 sm:mt-5">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6322f5] text-white transition-transform hover:scale-105"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={16} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6322f5] text-white transition-transform hover:scale-105"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="flex w-full flex-col items-start border-t border-white/5 pt-6 md:items-end md:border-t-0 md:pt-0"
          >
            <p className="w-full text-[13px] leading-relaxed text-zinc-400 sm:text-sm md:max-w-[280px] md:text-right md:text-[15px]">
              {personal.heroRight}
            </p>
            <a
              href="#contact"
              className="group mt-4 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#6322f5] py-3 pl-6 pr-2.5 text-sm font-semibold text-white shadow-lg shadow-[#6322f5]/30 transition-all hover:bg-[#5420d4] sm:mt-5 sm:w-auto md:justify-start"
            >
              Let&apos;s Talk
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#6322f5] transition-transform group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
