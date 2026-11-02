"use client";

import { achievements, codingProfiles, certifications, personalInfo } from "@/data/portfolio";
import { AnimateOnScroll } from "@/components/animations/AnimateOnScroll";
import { Trophy, Code, Award, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 md:py-32 relative">
      <div className="section-container">
        <AnimateOnScroll>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-sm font-mono text-[var(--color-accent)] tracking-wider">05</span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold">
              Honors, Profiles & Badges
            </h2>
            <div className="flex-1 h-[1px] bg-[var(--color-border)] ml-4" />
          </div>
        </AnimateOnScroll>

        {/* Competitive Achievements */}
        <div className="mb-16">
          <h3 className="text-sm font-mono uppercase tracking-wider text-[var(--color-accent-light)] mb-6 flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            Competitive Hackathons & Challenges
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((ach, idx) => (
              <AnimateOnScroll key={ach.id} delay={idx * 100}>
                <div className="card p-6 h-full flex flex-col justify-between border hover:border-[var(--color-border-accent)]">
                  <div>
                    <div className="inline-block px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-light)] text-xs font-mono font-bold mb-4">
                      {ach.highlight}
                    </div>
                    <h4 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-[var(--color-text-primary)] mb-2">
                      {ach.title}
                    </h4>
                    <p className="text-xs text-[var(--color-text-muted)] font-mono mb-3">
                      Organized by {ach.organization}
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Problem Solving & Coding Profiles */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[var(--color-accent-light)] flex items-center gap-2">
              <Code className="w-4 h-4" />
              Algorithmic Problem Solving
            </h3>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <CheckCircle2 className="w-3.5 h-3.5" />
              600+ DSA Problems Solved Across Platforms
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {codingProfiles.map((p, idx) => (
              <AnimateOnScroll key={p.platform} delay={idx * 100}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-6 block group hover:border-[var(--color-accent)] transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-light)] transition-colors">
                      {p.platform}
                    </span>
                    <ExternalLink className="w-4 h-4 text-[var(--color-text-secondary)] group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                    {p.description}
                  </p>
                  <div className="text-xs font-mono text-[var(--color-accent-light)] flex items-center gap-1.5">
                    View Verified Profile
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[var(--color-accent-light)] flex items-center gap-2">
              <Award className="w-4 h-4" />
              Verified Credentials
            </h3>
            <a
              href={personalInfo.links.credly}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[var(--color-text-secondary)] hover:text-white inline-flex items-center gap-1.5 self-start sm:self-auto"
            >
              View All Credentials on Credly
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <AnimateOnScroll key={cert.name} delay={idx * 100}>
                <a
                  href={cert.credlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-6 block group hover:border-[var(--color-accent)] transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-[var(--color-accent-light)] shrink-0" />
                      <h4 className="font-[family-name:var(--font-space-grotesk)] font-bold text-base md:text-lg text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-light)] transition-colors">
                        {cert.name}
                      </h4>
                    </div>
                    <ExternalLink className="w-4 h-4 text-[var(--color-text-secondary)] shrink-0 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-[var(--color-text-tertiary)] mt-3">
                    <span>Issued by {cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.date}</span>
                  </div>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
