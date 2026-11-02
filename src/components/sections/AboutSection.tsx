"use client";

import { aboutText, personalInfo } from "@/data/portfolio";
import { AnimateOnScroll, StaggerChildren } from "@/components/animations/AnimateOnScroll";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)]/[0.02] blur-[150px] pointer-events-none" />

      <div className="section-container">
        <AnimateOnScroll>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-sm font-mono text-[var(--color-accent)] tracking-wider">01</span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold">
              About Me
            </h2>
            <div className="flex-1 h-[1px] bg-[var(--color-border)] ml-4" />
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Bio */}
          <div className="lg:col-span-3 space-y-6">
            <AnimateOnScroll delay={100}>
              <p className="font-[family-name:var(--font-space-grotesk)] text-xl md:text-2xl font-medium text-[var(--color-text-primary)] leading-relaxed">
                {aboutText.headline}
              </p>
            </AnimateOnScroll>

            {aboutText.paragraphs.map((paragraph, index) => (
              <AnimateOnScroll key={index} delay={200 + index * 100}>
                <p className="text-[var(--color-text-secondary)] leading-[1.8] text-base md:text-[17px]">
                  {paragraph}
                </p>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            <AnimateOnScroll delay={200} direction="left">
              <div className="card p-5">
                <div className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                  Education
                </div>
                <div className="text-[var(--color-text-primary)] font-medium mb-1">
                  {personalInfo.university}
                </div>
                <div className="text-sm text-[var(--color-text-secondary)]">
                  {personalInfo.degree}
                </div>
                <div className="flex items-center gap-4 mt-3 pt-3 border-t border-[var(--color-border)]">
                  <div>
                    <div className="text-xs text-[var(--color-text-muted)]">CGPA</div>
                    <div className="text-lg font-[family-name:var(--font-space-grotesk)] font-bold text-[var(--color-accent-light)]">
                      {personalInfo.cgpa}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-[var(--color-text-muted)]">Graduation</div>
                    <div className="text-sm text-[var(--color-text-secondary)]">
                      {personalInfo.graduationDate}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300} direction="left">
              <div className="card p-5">
                <div className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
                  Interests
                </div>
                <StaggerChildren className="flex flex-wrap gap-2">
                  {aboutText.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1.5 text-xs text-[var(--color-text-secondary)] bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] rounded-lg hover:border-[var(--color-border-accent)] hover:text-[var(--color-accent-light)] transition-all duration-300"
                    >
                      {interest}
                    </span>
                  ))}
                </StaggerChildren>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={400} direction="left">
              <div className="card p-5">
                <div className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
                  Location
                </div>
                <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
