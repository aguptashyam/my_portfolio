"use client";

import { personalInfo } from "@/data/portfolio";
import { AnimateOnScroll } from "@/components/animations/AnimateOnScroll";
import { FileText, Download, ExternalLink, GraduationCap, Briefcase, Award } from "lucide-react";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-24 md:py-32 relative">
      <div className="section-container">
        <AnimateOnScroll>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-sm font-mono text-[var(--color-accent)] tracking-wider">06</span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold">
              Resume & Credentials
            </h2>
            <div className="flex-1 h-[1px] bg-[var(--color-border)] ml-4" />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="card p-8 md:p-12 border-glow relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-[var(--color-border)]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-light)] text-xs font-mono mb-4">
                  <FileText className="w-3.5 h-3.5" />
                  Curriculum Vitae
                </div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
                  Anubhav Gupta
                </h3>
                <p className="text-[var(--color-text-secondary)] text-base mt-2">
                  Computer Science Student & Aspiring Software Engineer
                </p>
                <div className="text-xs font-mono text-[var(--color-text-muted)] mt-2">
                  Patiala, India • shyam.anubhav10@gmail.com • +91 8840405476
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={personalInfo.links.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-medium text-sm transition-all shadow-[0_0_20px_rgba(99,102,241,0.25)]"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Full Resume (Drive)
                </a>
                <a
                  href="/resume/Anubhav_Gupta_Resume.pdf"
                  download="Anubhav_Gupta_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-bg-tertiary)] hover:bg-[var(--color-border-light)] text-[var(--color-text-primary)] font-medium text-sm border border-[var(--color-border)] transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </div>
            </div>

            {/* Quick Resume Summary Grid */}
            <div className="grid md:grid-cols-3 gap-8 pt-10">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--color-accent-light)] mb-3">
                  <GraduationCap className="w-4 h-4" />
                  Education
                </div>
                <h4 className="text-sm font-bold text-[var(--color-text-primary)]">
                  B.E. in Computer Science
                </h4>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                  Thapar Institute of Engineering & Technology
                </p>
                <div className="mt-2 text-xs font-mono text-[var(--color-text-muted)]">
                  CGPA: 8.78/10 • Expected July 2027
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--color-accent-light)] mb-3">
                  <Briefcase className="w-4 h-4" />
                  Key Research
                </div>
                <h4 className="text-sm font-bold text-[var(--color-text-primary)]">
                  ML Research Intern
                </h4>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                  Experimental Learning Activity Centre, TIET
                </p>
                <div className="mt-2 text-xs font-mono text-[var(--color-text-muted)]">
                  CNN+LSTM • EEG Signal Processing (93.1% Acc)
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--color-accent-light)] mb-3">
                  <Award className="w-4 h-4" />
                  Key Projects & Competitions
                </div>
                <h4 className="text-sm font-bold text-[var(--color-text-primary)]">
                  NEURIS, Calivio, UrbanVista
                </h4>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                  Google Big Code (Round 2, Top 1500)
                </p>
                <div className="mt-2 text-xs font-mono text-[var(--color-text-muted)]">
                  600+ DSA Problems Solved
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
