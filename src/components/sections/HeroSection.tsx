"use client";

import dynamic from "next/dynamic";
import { personalInfo } from "@/data/portfolio";
import { AnimateOnScroll } from "@/components/animations/AnimateOnScroll";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)]/5 blur-[120px]" />
    </div>
  ),
});

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <HeroScene />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg-primary)]" />
      <div className="absolute inset-0 bg-[var(--color-bg-primary)]/30" />

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <AnimateOnScroll delay={200}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/50 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
            <span className="text-sm text-[var(--color-text-secondary)]">
              Open to opportunities
            </span>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={400}>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6">
            <span className="text-gradient">Anubhav</span>{" "}
            <span className="text-gradient-accent">Gupta</span>
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll delay={600}>
          <p className="text-lg sm:text-xl md:text-2xl text-[var(--color-text-secondary)] font-light max-w-2xl mx-auto mb-4 leading-relaxed">
            Software Engineer · Full-Stack Developer · AI/ML Enthusiast
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={800}>
          <p className="text-sm sm:text-base text-[var(--color-text-tertiary)] max-w-lg mx-auto mb-10 leading-relaxed">
            CS undergraduate at Thapar Institute, building scalable products and
            exploring the intersection of software engineering and artificial
            intelligence.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={1000}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-medium rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
            >
              Explore My Work
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[var(--color-border)] hover:border-[var(--color-border-light)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] font-medium rounded-xl transition-all duration-300 bg-[var(--color-bg-secondary)]/30 backdrop-blur-sm"
            >
              Get in Touch
            </a>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={1200}>
          <div className="flex items-center justify-center gap-4 mt-10">
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/30 backdrop-blur-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-light)] transition-all duration-300"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/30 backdrop-blur-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-light)] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/30 backdrop-blur-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-light)] transition-all duration-300"
              aria-label="Email"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </AnimateOnScroll>

        {/* Scroll indicator */}
        <AnimateOnScroll delay={1400}>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2 text-[var(--color-text-muted)]">
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <div className="w-[1px] h-8 bg-gradient-to-b from-[var(--color-text-muted)] to-transparent animate-pulse" />
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
