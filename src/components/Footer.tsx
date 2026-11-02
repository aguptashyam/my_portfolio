"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { ArrowUp, Code } from "lucide-react";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());

    const updateTime = () => {
      const now = new Date();
      // Format time in Indian Standard Time (IST - Asia/Kolkata)
      const istTime = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setCurrentTime(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--color-border)] py-12 relative bg-[#070709]">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[var(--color-border)]/50">
          <div>
            <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-[var(--color-text-primary)]">
              Anubhav Gupta<span className="text-[var(--color-accent)]">.</span>
            </span>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">
              Building scalable software, AI/ML systems & thoughtful interfaces.
            </p>
          </div>

          {/* Time & Location */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-xs font-mono text-[var(--color-text-secondary)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Patiala, IN (IST)</span>
            <span className="text-[var(--color-text-tertiary)]">•</span>
            <span className="text-[var(--color-accent-light)]">{currentTime || "Loading..."}</span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--color-text-secondary)] hover:text-white transition-colors p-2 rounded-lg hover:bg-[var(--color-bg-tertiary)]"
            aria-label="Back to top"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-[var(--color-text-muted)] font-mono">
          <div>
            © {currentYear} Anubhav Gupta. Designed & built with Next.js & Three.js.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href={personalInfo.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LeetCode
            </a>
            <span>•</span>
            <a
              href={personalInfo.links.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Codeforces
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
