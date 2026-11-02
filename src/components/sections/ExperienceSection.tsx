"use client";

import { useState } from "react";
import { experience } from "@/data/portfolio";
import { AnimateOnScroll } from "@/components/animations/AnimateOnScroll";
import { 
  Activity, 
  Cpu, 
  GitBranch, 
  Layers, 
  ExternalLink, 
  CheckCircle2, 
  BrainCircuit,
  BarChart3
} from "lucide-react";

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"overview" | "pipeline" | "architecture">("overview");
  const exp = experience[0];

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="section-container">
        <AnimateOnScroll>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-sm font-mono text-[var(--color-accent)] tracking-wider">02</span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold">
              Research & Experience
            </h2>
            <div className="flex-1 h-[1px] bg-[var(--color-border)] ml-4" />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="card p-6 md:p-8 lg:p-10 border-glow">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-[var(--color-border)]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-light)] text-xs font-mono mb-3">
                  <BrainCircuit className="w-3.5 h-3.5" />
                  {exp.type}
                </div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">
                  {exp.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-base md:text-lg mt-1">
                  {exp.organization}
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-xs md:text-sm text-[var(--color-text-tertiary)] font-mono">
                  <span>{exp.period}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              {exp.github && (
                <a
                  href={exp.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-medium text-[var(--color-text-secondary)] hover:text-white bg-[var(--color-bg-tertiary)] hover:bg-[var(--color-border-light)] border border-[var(--color-border)] rounded-xl transition-all self-start lg:self-center"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Research Repo
                </a>
              )}
            </div>

            {/* Metric Counters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-b border-[var(--color-border)]">
              {exp.metrics.map((m, i) => (
                <div key={i} className="bg-[var(--color-bg-secondary)]/50 p-4 rounded-xl border border-[var(--color-border)]/50">
                  <div className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] text-[var(--color-accent-light)]">
                    {m.value}
                  </div>
                  <div className="text-xs text-[var(--color-text-secondary)] font-mono mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Tabs: Overview / Pipeline / Model Architecture */}
            <div className="pt-6">
              <div className="flex gap-2 border-b border-[var(--color-border)] mb-6 pb-2 overflow-x-auto">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap ${
                    activeTab === "overview"
                      ? "bg-[var(--color-accent)]/20 text-[var(--color-accent-light)] border border-[var(--color-accent)]/30"
                      : "text-[var(--color-text-secondary)] hover:text-white"
                  }`}
                >
                  <Activity className="w-4 h-4" />
                  Contributions & Scope
                </button>
                <button
                  onClick={() => setActiveTab("pipeline")}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap ${
                    activeTab === "pipeline"
                      ? "bg-[var(--color-accent)]/20 text-[var(--color-accent-light)] border border-[var(--color-accent)]/30"
                      : "text-[var(--color-text-secondary)] hover:text-white"
                  }`}
                >
                  <GitBranch className="w-4 h-4" />
                  Signal Pipeline (19 Ch → 28 Feat)
                </button>
                <button
                  onClick={() => setActiveTab("architecture")}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap ${
                    activeTab === "architecture"
                      ? "bg-[var(--color-accent)]/20 text-[var(--color-accent-light)] border border-[var(--color-accent)]/30"
                      : "text-[var(--color-text-secondary)] hover:text-white"
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  CNN + LSTM Architecture
                </button>
              </div>

              {/* Tab 1: Overview */}
              {activeTab === "overview" && (
                <div className="space-y-4">
                  <p className="text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed">
                    Collaborated in a four-member academic research team investigating non-invasive EEG-based ADHD detection and classification. Focused on mathematical signal decomposition, high-dimensional statistical feature extraction, and temporal neural modeling.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 pt-2">
                    {exp.contributions.map((c, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-[var(--color-bg-secondary)]/30 border border-[var(--color-border)]/40 text-sm text-[var(--color-text-secondary)]">
                        <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-light)] shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-center gap-2 mt-4">
                    <span className="font-semibold">Note:</span>
                    <span>This work represents academic machine-learning research on EEG biomarker classification, not a clinically approved diagnostic medical product.</span>
                  </div>
                </div>
              )}

              {/* Tab 2: Signal Pipeline */}
              {activeTab === "pipeline" && (
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                    <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-[var(--color-accent)]" />
                      End-to-End Signal Transformation Pipeline
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
                      <div className="p-3 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]">
                        <span className="text-[var(--color-accent-light)] font-bold">Step 1: Raw Signals</span>
                        <p className="text-[var(--color-text-tertiary)] mt-1 font-sans">
                          19-channel EEG electrode capture with bandpass filtering and artifact cleaning.
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]">
                        <span className="text-[var(--color-accent-light)] font-bold">Step 2: VMD & Modes</span>
                        <p className="text-[var(--color-text-tertiary)] mt-1 font-sans">
                          Variational Mode Decomposition decomposes non-stationary EEG into intrinsic modes.
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]">
                        <span className="text-[var(--color-accent-light)] font-bold">Step 3: 760 Features</span>
                        <p className="text-[var(--color-text-tertiary)] mt-1 font-sans">
                          Extracted spectral entropy, relative band power, and statistical higher moments.
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]">
                        <span className="text-[var(--color-accent-light)] font-bold">Step 4: K-NN Selection</span>
                        <p className="text-[var(--color-text-tertiary)] mt-1 font-sans">
                          Reduced dimensionality to 28 optimal discriminant features (96.3% feature space compression).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Model Architecture */}
              {activeTab === "architecture" && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                    <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[var(--color-accent)]" />
                      Hybrid CNN + LSTM Deep Learning Pipeline
                    </h4>
                    <p className="text-xs md:text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                      The Convolutional layers automatically extract spatial feature correlations across the EEG channels, while the recurrent LSTM layers capture the temporal dependencies and chronotopology of the brainwave signals over time.
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="px-3 py-1.5 rounded-md bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] text-white">Input (28 Features / Timesteps)</span>
                      <span className="text-[var(--color-accent-light)]">→</span>
                      <span className="px-3 py-1.5 rounded-md bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] text-white">1D Conv + BatchNorm</span>
                      <span className="text-[var(--color-accent-light)]">→</span>
                      <span className="px-3 py-1.5 rounded-md bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] text-white">LSTM Layer (Temporal Memory)</span>
                      <span className="text-[var(--color-accent-light)]">→</span>
                      <span className="px-3 py-1.5 rounded-md bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] text-white">Dense + Dropout (0.3)</span>
                      <span className="text-[var(--color-accent-light)]">→</span>
                      <span className="px-3 py-1.5 rounded-md bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/40 text-[var(--color-accent-light)] font-bold">Sigmoid Output (93.1% Acc, 0.97 AUC)</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Technologies */}
            <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-[var(--color-text-muted)] mr-2">Stack:</span>
              {exp.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs rounded-md bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text-secondary)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
