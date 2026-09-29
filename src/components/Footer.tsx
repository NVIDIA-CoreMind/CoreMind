import React from 'react';
import { Logo } from './Logo';
import { PRODUCT_INFO, DOWNLOAD_CONFIG } from '../data/product';
import { ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-neutral-200 text-neutral-600 text-sm">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5 text-left">
            <Logo size="md" showBadge />
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-sm">
              An AI-native autonomous software engineering IDE built for Hackathon 2026. From high-level objective to verified multi-file pull requests.
            </p>

            {/* System Status Pill */}
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-mono text-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Hackathon Demo Build • v{DOWNLOAD_CONFIG.macos.version}</span>
              </span>
            </div>
          </div>

          {/* Column 1: Navigation */}
          <div className="text-left space-y-3">
            <h4 className="text-xs font-bold text-neutral-950 uppercase tracking-wider font-mono">
              Presentation
            </h4>
            <ul className="space-y-2 text-xs text-neutral-600 font-medium">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('features')}
                  className="hover:text-neutral-950 transition-colors cursor-pointer"
                >
                  Features &amp; Capabilities
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('demo')}
                  className="hover:text-neutral-950 transition-colors cursor-pointer"
                >
                  Interactive IDE Demo
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('architecture')}
                  className="hover:text-neutral-950 transition-colors cursor-pointer"
                >
                  System Architecture
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('download')}
                  className="hover:text-neutral-950 transition-colors cursor-pointer"
                >
                  Download &amp; Install
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Tech Stack */}
          <div className="text-left space-y-3">
            <h4 className="text-xs font-bold text-neutral-950 uppercase tracking-wider font-mono">
              Tech Stack
            </h4>
            <ul className="space-y-2 text-xs text-neutral-600 font-mono">
              <li>• React 19 &amp; Vite</li>
              <li>• TypeScript &amp; Tailwind</li>
              <li>• Claude 3.7 &amp; DeepSeek</li>
              <li>• AST Graph Indexer</li>
              <li>• Isolated Sandbox Runner</li>
            </ul>
          </div>

          {/* Column 3: Open Source */}
          <div className="text-left space-y-3">
            <h4 className="text-xs font-bold text-neutral-950 uppercase tracking-wider font-mono">
              Project Links
            </h4>
            <ul className="space-y-2 text-xs text-neutral-600">
              <li>
                <a
                  href={PRODUCT_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-950 transition-colors inline-flex items-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              </li>
              <li>
                <span className="text-neutral-500 font-mono text-xs">MIT License</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>{PRODUCT_INFO.copyright}</div>
          <div className="flex items-center gap-2">
            <span>Built with passion for Hackathon 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
