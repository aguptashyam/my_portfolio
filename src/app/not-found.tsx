import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)]/5 blur-[150px] pointer-events-none" />

      <div className="text-center relative z-10 max-w-md">
        <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent-light)] block mb-4">
          Error 404
        </span>
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-6xl md:text-7xl font-bold tracking-tight mb-4">
          Page Not Found
        </h1>
        <p className="text-sm md:text-base text-[var(--color-text-secondary)] mb-8 leading-relaxed">
          The requested coordinate does not exist in this computational space.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-medium text-sm transition-all shadow-[0_0_20px_rgba(99,102,241,0.25)]"
        >
          <Home className="w-4 h-4" />
          Return to Portfolio
        </Link>
      </div>
    </div>
  );
}
