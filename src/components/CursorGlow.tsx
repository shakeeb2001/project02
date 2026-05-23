"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const canHover = window.matchMedia("(pointer: fine)").matches;
    if (!canHover) return;

    let raf = 0;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });

        const hero = document.getElementById("home");
        if (hero) {
          const rect = hero.getBoundingClientRect();
          const insideHero =
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom;
          setVisible(!insideHero);
        } else {
          setVisible(true);
        }
      });
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] mix-blend-screen"
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(99, 34, 245, 0.07), transparent 55%)`,
        }}
      />
      <div
        className="absolute h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6322f5]/15 blur-[80px]"
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className="absolute h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b5cf6]/20 blur-[28px]"
        style={{ left: pos.x, top: pos.y }}
      />
    </div>
  );
}
