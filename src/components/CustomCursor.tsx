"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useAnimations";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    // Only activate cursor on devices that have a precise pointer (mouse)
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer || prefersReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest("button") ||
          target.closest("a") ||
          target.closest("input") ||
          target.closest("textarea") ||
          target.tagName === "BUTTON" ||
          target.tagName === "A"
        );
        setIsPointer(isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, prefersReduced]);

  if (!isVisible || prefersReduced) return null;

  return (
    <>
      {/* Outer Follower Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`rounded-full border border-[var(--color-accent)] transition-all duration-300 ${
            isPointer
              ? "w-10 h-10 bg-[var(--color-accent)]/15 scale-125 border-opacity-80"
              : "w-6 h-6 border-opacity-40"
          }`}
        />
      </div>

      {/* Center Small Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-light)] shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
      </div>
    </>
  );
}
