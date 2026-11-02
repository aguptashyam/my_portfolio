"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { personalInfo } from "@/data/portfolio";
import { useCopyToClipboard } from "@/hooks/useAnimations";
import { AnimateOnScroll } from "@/components/animations/AnimateOnScroll";
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  MapPin, 
  Phone, 
  AlertCircle,
  CheckCircle2
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const { copied, copy } = useCopyToClipboard();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [lastSubmitted, setLastSubmitted] = useState<ContactFormData | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    setLastSubmitted(data);

    try {
      // 1. Post to API route
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // 2. Pre-format mailto link
      const subject = encodeURIComponent(`[Portfolio Inquiry] ${data.subject} - from ${data.name}`);
      const body = encodeURIComponent(
        `Hi Anubhav,\n\n${data.message}\n\nBest regards,\n${data.name} (${data.email})`
      );

      // Trigger standard mail client
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="section-container">
        <AnimateOnScroll>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-sm font-mono text-[var(--color-accent)] tracking-wider">07</span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold">
              Get In Touch
            </h2>
            <div className="flex-1 h-[1px] bg-[var(--color-border)] ml-4" />
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-8">
            <AnimateOnScroll delay={100}>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold mb-3 text-[var(--color-text-primary)]">
                Let&apos;s build something meaningful.
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
                Whether you have an engineering role, a research collaboration, or simply want to discuss system design and machine learning, feel free to drop a line.
              </p>
            </AnimateOnScroll>

            {/* Direct Email Card with Copy */}
            <AnimateOnScroll delay={200}>
              <div className="card p-5 border">
                <span className="text-xs font-mono uppercase text-[var(--color-text-muted)] tracking-wider block mb-2">
                  Direct Email
                </span>
                <div className="flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-mono text-[var(--color-text-primary)] hover:text-[var(--color-accent-light)] transition-colors truncate"
                  >
                    {personalInfo.email}
                  </a>
                  <button
                    onClick={() => copy(personalInfo.email)}
                    className="p-2 rounded-lg bg-[var(--color-bg-tertiary)] hover:bg-[var(--color-border-light)] text-[var(--color-text-secondary)] hover:text-white transition-all shrink-0"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Location & Links */}
            <AnimateOnScroll delay={300}>
              <div className="space-y-4 text-sm text-[var(--color-text-secondary)]">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                  <span>{personalInfo.phone}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-6">
                <a
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl card border hover:border-[var(--color-accent)] text-[var(--color-text-secondary)] hover:text-white transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl card border hover:border-[var(--color-accent)] text-[var(--color-text-secondary)] hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <AnimateOnScroll delay={200}>
              <form onSubmit={handleSubmit(onSubmit)} className="card p-6 md:p-8 space-y-5 border-glow">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase text-[var(--color-text-muted)] tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register("name")}
                      placeholder="Alan Turing"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] focus:border-[var(--color-accent)] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] transition-colors"
                    />
                    {errors.name && (
                      <span className="text-xs text-rose-400 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase text-[var(--color-text-muted)] tracking-wider mb-2">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="alan@turing.org"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] focus:border-[var(--color-accent)] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] transition-colors"
                    />
                    {errors.email && (
                      <span className="text-xs text-rose-400 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono uppercase text-[var(--color-text-muted)] tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    {...register("subject")}
                    placeholder="Engineering Opportunity / System Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] focus:border-[var(--color-accent)] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] transition-colors"
                  />
                  {errors.subject && (
                    <span className="text-xs text-rose-400 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject.message}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase text-[var(--color-text-muted)] tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message")}
                    placeholder="Tell me about what you are working on or what you would like to discuss..."
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] focus:border-[var(--color-accent)] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] transition-colors resize-none"
                  />
                  {errors.message && (
                    <span className="text-xs text-rose-400 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {status === "success" && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span className="font-semibold">Message prepared & email client triggered!</span>
                    </div>
                    <p className="text-[var(--color-text-secondary)] text-[11px] leading-relaxed">
                      If your default email app didn&apos;t open automatically, you can send it directly through Gmail Web or copy your message:
                    </p>
                    {lastSubmitted && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        <a
                          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                            personalInfo.email
                          )}&su=${encodeURIComponent(
                            `[Portfolio Inquiry] ${lastSubmitted.subject} - from ${lastSubmitted.name}`
                          )}&body=${encodeURIComponent(
                            `Hi Anubhav,\n\n${lastSubmitted.message}\n\nBest regards,\n${lastSubmitted.name} (${lastSubmitted.email})`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-white font-medium text-[11px] transition-colors"
                        >
                          Open in Gmail Web ↗
                        </a>
                        <button
                          type="button"
                          onClick={() => copy(`${lastSubmitted.subject}\n\n${lastSubmitted.message}`)}
                          className="px-3 py-1.5 rounded-lg bg-[var(--color-bg-tertiary)] hover:bg-[var(--color-border-light)] text-[var(--color-text-secondary)] hover:text-white font-medium text-[11px] transition-colors"
                        >
                          {copied ? "Copied to Clipboard!" : "Copy Message Text"}
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Something went wrong. Please email directly at {personalInfo.email}.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] disabled:opacity-50 text-white font-medium text-sm transition-all shadow-[0_0_20px_rgba(99,102,241,0.25)]"
                >
                  {status === "submitting" ? (
                    <span>Opening Mail Client...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
