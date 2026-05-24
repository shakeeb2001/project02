"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const HACK_CHARS = "01ABCDEF<>[]{}#@$%&*?/\\|_-=+~";
const HACK_LINES = [
  "> SCANNING BIOMETRIC HASH...",
  "> BYPASSING ENCRYPTION LAYER...",
  "> CRACKING IDENTITY MATRIX...",
  "> DECRYPTING PROFILE.SYS...",
  "> ACCESS GRANTED",
];

function scrambleText(target: string, progress: number) {
  const reveal = Math.floor(target.length * progress);
  return target
    .split("")
    .map((char, i) => {
      if (char === " ") return " ";
      if (i < reveal) return char;
      return HACK_CHARS[Math.floor(Math.random() * HACK_CHARS.length)];
    })
    .join("");
}

function HackTerminal({ active }: { active: boolean }) {
  const [lines, setLines] = useState<string[]>([]);
  const lineIndex = useRef(0);

  useEffect(() => {
    if (!active) {
      setLines([]);
      lineIndex.current = 0;
      return;
    }

    const addLine = () => {
      const target = HACK_LINES[lineIndex.current];
      if (!target) return;

      let frame = 0;
      const frames = 12;
      const interval = setInterval(() => {
        frame += 1;
        const progress = Math.min(1, frame / frames);
        setLines((prev) => {
          const next = [...prev];
          next[lineIndex.current] = scrambleText(target, progress);
          return next;
        });
        if (frame >= frames) {
          clearInterval(interval);
          setLines((prev) => {
            const next = [...prev];
            next[lineIndex.current] = target;
            return next;
          });
          lineIndex.current += 1;
          if (lineIndex.current < HACK_LINES.length) {
            setTimeout(addLine, 180);
          }
        }
      }, 45);

      return () => clearInterval(interval);
    };

    const start = setTimeout(addLine, 120);
    return () => clearTimeout(start);
  }, [active]);

  if (!active) return null;

  return (
    <div className="absolute bottom-[8%] left-[6%] right-[6%] z-20 font-mono text-[9px] leading-relaxed sm:text-[10px] md:bottom-[12%] md:left-[10%] md:text-[11px]">
      {lines.map((line, i) => (
        <motion.div
          key={`${line}-${i}`}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          className={
            line.includes("ACCESS GRANTED")
              ? "text-[#4ade80] drop-shadow-[0_0_3px_rgba(74,222,128,0.5)]"
              : "text-[#a78bfa]/90"
          }
        >
          {line}
        </motion.div>
      ))}
      <motion.div
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.4, repeat: Infinity }}
        className="mt-1 inline-block h-2.5 w-px bg-[#4ade80]"
        aria-hidden
      />
    </div>
  );
}

type Phase = "loading" | "hacking" | "idle";

export function HeroPortraitHack({ wrapperClassName }: { wrapperClassName?: string }) {
  const [phase, setPhase] = useState<Phase>("loading");
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const handleLoad = useCallback(() => {
    if (reducedMotion.current) {
      setPhase("idle");
      return;
    }
    setPhase("hacking");
  }, []);

  useEffect(() => {
    if (phase !== "hacking") return;
    const timer = window.setTimeout(() => setPhase("idle"), 3000);
    return () => clearTimeout(timer);
  }, [phase]);

  const isHacking = phase === "hacking";

  return (
    <div
      className={`hero-watermark-dots relative h-[min(62vh,560px)] w-[min(96vw,460px)] sm:h-[min(65vh,600px)] sm:w-[min(94vw,480px)] md:h-[min(90vh,860px)] md:w-[min(60vw,640px)] lg:h-[min(94vh,940px)] lg:w-[min(58vw,720px)] ${isHacking ? "hero-hack-glitch" : ""} ${phase === "idle" ? "hero-hack-settled" : ""} ${wrapperClassName ?? ""}`}
    >
      <div className="relative h-full w-full">
        <Image
          src="/office_profile-removebg-preview.png"
          alt=""
          fill
          className="object-contain object-bottom md:object-center"
          priority
          sizes="(max-width: 768px) 480px, 720px"
          onLoad={handleLoad}
        />
      </div>

      <AnimatePresence>
        {isHacking && (
          <motion.div
            key="hack-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
            aria-hidden
          >
            <div className="hero-hack-scanlines absolute inset-0" />
            <div className="hero-hack-noise absolute inset-0" />
            <div className="hero-hack-chromatic absolute inset-0 mix-blend-screen" />
            <HackTerminal active />
            <div className="hero-hack-matrix absolute inset-0 opacity-40" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
