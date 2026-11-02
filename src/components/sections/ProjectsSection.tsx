"use client";

import { useState } from "react";
import { projects, Project } from "@/data/portfolio";
import { AnimateOnScroll } from "@/components/animations/AnimateOnScroll";
import { 
  ExternalLink, 
  ChevronRight, 
  X, 
  Layers, 
  Cpu, 
  Database, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { label: "All Projects", value: "all" },
    { label: "Full-Stack", value: "fullstack" },
    { label: "AI / ML", value: "ai-ml" },
    { label: "Databases & Systems", value: "database" },
  ];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="section-container">
        <AnimateOnScroll>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-mono text-[var(--color-accent)] tracking-wider">03</span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold">
              Featured Engineering
            </h2>
            <div className="flex-1 h-[1px] bg-[var(--color-border)] ml-4" />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="flex flex-wrap items-center gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c.value}
                onClick={() => setActiveCategory(c.value)}
                className={`px-4 py-2 text-xs md:text-sm font-medium rounded-xl transition-all ${
                  activeCategory === c.value
                    ? "bg-[var(--color-accent)] text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                    : "bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-border-light)]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <AnimateOnScroll key={project.id} delay={idx * 100}>
              <div className="card h-full flex flex-col justify-between p-6 md:p-8 group hover:border-[var(--color-border-accent)] transition-all">
                <div>
                  {/* Top tags */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[var(--color-accent-light)] uppercase tracking-wider">
                      {project.subtitle}
                    </span>
                    <div className="flex items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--color-text-secondary)] hover:text-white transition-colors p-1"
                          aria-label={`GitHub repo for ${project.title}`}
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--color-text-secondary)] hover:text-white transition-colors p-1"
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold mb-3 group-hover:text-[var(--color-accent-light)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Architecture Teaser if NEURIS */}
                  {project.id === "neuris" && (
                    <div className="p-3.5 mb-6 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-xs font-mono">
                      <div className="text-[var(--color-accent-light)] font-semibold mb-1 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" /> Pipeline Architecture
                      </div>
                      <p className="text-[var(--color-text-tertiary)] font-sans line-clamp-2">
                        {project.architecture}
                      </p>
                    </div>
                  )}

                  {/* Metrics if present */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-2.5 rounded-lg bg-[var(--color-bg-secondary)]/50 border border-[var(--color-border)]/50">
                          <div className="text-base font-bold font-[family-name:var(--font-space-grotesk)] text-[var(--color-accent-light)]">
                            {m.value}
                          </div>
                          <div className="text-[11px] text-[var(--color-text-muted)] font-mono">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Key Contributions Preview */}
                  <ul className="space-y-2 mb-6">
                    {project.contributions.slice(0, 3).map((c, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2 text-xs text-[var(--color-text-secondary)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent-light)] shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--color-border)] mb-4">
                    {project.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] text-[var(--color-text-tertiary)]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] text-[var(--color-text-muted)]">
                        +{project.technologies.length - 6} more
                      </span>
                    )}
                  </div>

                  {/* Case Study Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-[var(--color-bg-tertiary)] hover:bg-[var(--color-accent)] hover:text-white text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-transparent transition-all"
                  >
                    View Engineering Case Study
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Detailed Modal / Case Study Drawer */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto card p-6 md:p-8 bg-[#121214] border border-[var(--color-border-light)] shadow-2xl">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-white bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="pr-10 mb-6">
                <span className="text-xs font-mono text-[var(--color-accent-light)] uppercase tracking-wider">
                  {selectedProject.subtitle}
                </span>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold mt-1 text-[var(--color-text-primary)]">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3 mb-6">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-bg-tertiary)] hover:bg-[var(--color-border-light)] text-xs md:text-sm font-medium border border-[var(--color-border)] text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    GitHub Repository
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-xs md:text-sm font-medium text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Application
                  </a>
                )}
              </div>

              {/* In-depth content */}
              <div className="space-y-6 text-sm text-[var(--color-text-secondary)]">
                <div>
                  <h4 className="text-xs font-mono uppercase text-[var(--color-text-muted)] tracking-wider mb-2">
                    System Architecture & Overview
                  </h4>
                  <p className="leading-relaxed text-[var(--color-text-primary)]">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {selectedProject.architecture && (
                  <div className="p-4 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                    <h4 className="text-xs font-mono uppercase text-[var(--color-accent-light)] tracking-wider mb-2 flex items-center gap-2">
                      <Layers className="w-4 h-4" />
                      Data Pipeline Flow
                    </h4>
                    <p className="font-mono text-xs text-[var(--color-text-primary)] bg-[var(--color-bg-tertiary)] p-3 rounded-lg border border-[var(--color-border)] leading-relaxed">
                      {selectedProject.architecture}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-mono uppercase text-[var(--color-text-muted)] tracking-wider mb-3">
                    Key Technical Contributions & Implementation
                  </h4>
                  <div className="grid gap-2">
                    {selectedProject.contributions.map((c, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-[var(--color-bg-secondary)]/50 border border-[var(--color-border)]/50">
                        <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-light)] shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-[var(--color-text-primary)]">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-[var(--color-text-muted)] tracking-wider mb-2">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-md bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] text-xs font-mono text-[var(--color-accent-light)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
