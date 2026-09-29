import React, { useState } from 'react';
import { Download, Copy, Check, Terminal, Sparkles } from 'lucide-react';

export const BottomCTA: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const installCmd = 'git clone https://github.com/CoreMind-IDE/CoreMind.git';

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden py-20 sm:py-24 bg-white">
      {/* Background radial gradient glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(16,185,129,0.06),transparent_80%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-5xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200/80 bg-emerald-50/70 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Hackathon 2026 Submission</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 max-w-3xl mx-auto leading-tight">
          Ready to experience{' '}
          <span className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-emerald-800 bg-clip-text text-transparent">
            CoreMind?
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-xl mx-auto leading-relaxed">
          Clone the repository, inspect the architecture, or launch the desktop application.
        </p>

        {/* Quick Git Clone Command */}
        <div className="mt-8 max-w-lg mx-auto">
          <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-2xl bg-neutral-50 text-neutral-800 border border-neutral-300 font-mono text-xs sm:text-sm shadow-xs">
            <div className="flex items-center gap-2 pl-3 truncate">
              <Terminal className="w-4 h-4 text-emerald-700 shrink-0" />
              <span className="truncate">{installCmd}</span>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-neutral-100 border border-neutral-300 text-xs text-neutral-800 font-sans font-medium transition-colors shrink-0 ml-2 cursor-pointer"
              aria-label="Copy clone command"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => scrollToSection('download')}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-full shadow-[0_2px_12px_rgba(16,185,129,0.25)] transition-all hover:scale-[1.02] cursor-pointer"
          >
            <Download className="w-5 h-5 text-white" />
            <span>Download CoreMind</span>
          </button>

          <a
            href="https://github.com/CoreMind-IDE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>Star on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};
