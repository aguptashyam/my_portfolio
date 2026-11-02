"use client";

import { useEffect, useState } from "react";
import { navItems, personalInfo } from "@/data/portfolio";
import { 
  Search, 
  X
} from "lucide-react";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const commands = [
    ...navItems.map((item) => ({
      label: `Go to ${item.label}`,
      category: "Navigation",
      action: () => {
        document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    })),
    {
      label: "View Resume (Google Drive)",
      category: "External Links",
      action: () => {
        window.open(personalInfo.links.resume, "_blank");
        setIsOpen(false);
      },
    },
    {
      label: "Open GitHub Profile",
      category: "External Links",
      action: () => {
        window.open(personalInfo.links.github, "_blank");
        setIsOpen(false);
      },
    },
    {
      label: "Open LinkedIn Profile",
      category: "External Links",
      action: () => {
        window.open(personalInfo.links.linkedin, "_blank");
        setIsOpen(false);
      },
    },
    {
      label: "Open LeetCode Profile",
      category: "External Links",
      action: () => {
        window.open(personalInfo.links.leetcode, "_blank");
        setIsOpen(false);
      },
    },
    {
      label: "Send Direct Email",
      category: "Contact",
      action: () => {
        window.location.href = `mailto:${personalInfo.email}`;
        setIsOpen(false);
      },
    },
  ];

  const filtered = query.trim() === ""
    ? commands
    : commands.filter((c) =>
        c.label.toLowerCase().includes(query.toLowerCase()) ||
        c.category.toLowerCase().includes(query.toLowerCase())
      );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-xl card p-4 bg-[#141416] border border-[var(--color-border-light)] shadow-2xl rounded-2xl overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-3 py-2 border-b border-[var(--color-border)]">
          <Search className="w-5 h-5 text-[var(--color-text-muted)]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section... (ESC to close)"
            className="w-full bg-transparent text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded text-[var(--color-text-muted)] hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-72 overflow-y-auto py-2">
          {filtered.length === 0 ? (
            <div className="p-4 text-center text-xs text-[var(--color-text-muted)] font-mono">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-xs md:text-sm text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-bg-tertiary)] transition-colors"
              >
                <span>{item.label}</span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text-muted)]">
                  {item.category}
                </span>
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between px-3 pt-3 border-t border-[var(--color-border)] text-[11px] font-mono text-[var(--color-text-muted)]">
          <span>Tip: Press ⌘K or Ctrl+K anytime</span>
          <span>ESC to exit</span>
        </div>
      </div>
    </div>
  );
}
