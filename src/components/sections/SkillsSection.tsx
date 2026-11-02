"use client";

import { useState } from "react";
import { skillCategories } from "@/data/portfolio";
import { AnimateOnScroll } from "@/components/animations/AnimateOnScroll";
import { Code2, Layout, Server, Sparkles, Database, Cloud, BookOpen } from "lucide-react";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categoryIcons: Record<string, React.ReactNode> = {
    Languages: <Code2 className="w-4 h-4 text-indigo-400" />,
    Frontend: <Layout className="w-4 h-4 text-sky-400" />,
    Backend: <Server className="w-4 h-4 text-emerald-400" />,
    "AI / ML": <Sparkles className="w-4 h-4 text-purple-400" />,
    Databases: <Database className="w-4 h-4 text-amber-400" />,
    "Cloud & Tools": <Cloud className="w-4 h-4 text-cyan-400" />,
    "CS Foundations": <BookOpen className="w-4 h-4 text-rose-400" />,
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="section-container">
        <AnimateOnScroll>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-sm font-mono text-[var(--color-accent)] tracking-wider">04</span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold">
              Technical Arsenal
            </h2>
            <div className="flex-1 h-[1px] bg-[var(--color-border)] ml-4" />
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <AnimateOnScroll key={cat.name} delay={idx * 80}>
              <div className="card p-6 h-full border hover:border-[var(--color-border-accent)] transition-all">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]">
                    {categoryIcons[cat.name] || <Code2 className="w-4 h-4 text-[var(--color-accent)]" />}
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-[var(--color-text-primary)]">
                      {cat.name}
                    </h3>
                    <span className="text-xs text-[var(--color-text-muted)] font-mono">
                      {cat.skills.length} competencies
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-mono rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-white hover:border-[var(--color-accent-light)]/40 hover:bg-[var(--color-bg-tertiary)] transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
