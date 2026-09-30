import React from 'react';
import { Logo } from './Logo';
import { PRODUCT_INFO } from '../data/product';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-white border-t border-[#E8E8E8] text-[#6B6B6B] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-12 border-b border-[#E8E8E8]">
          {/* Left: Brand info */}
          <div className="space-y-2 text-left max-w-sm">
            <Logo size="md" />
            <p className="text-xs text-[#6B6B6B] leading-relaxed">
              AI-powered development environment.
            </p>
          </div>

          {/* Right: Clean links */}
          <div className="flex flex-wrap gap-8 sm:gap-12 text-xs">
            <div className="space-y-2 text-left">
              <span className="font-semibold text-[#111111] uppercase tracking-wider text-[11px]">
                Product
              </span>
              <ul className="space-y-2">
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection('product')}
                    className="hover:text-[#111111] transition-colors cursor-pointer"
                  >
                    Desktop IDE
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection('features')}
                    className="hover:text-[#111111] transition-colors cursor-pointer"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection('how-it-works')}
                    className="hover:text-[#111111] transition-colors cursor-pointer"
                  >
                    How it Works
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection('team')}
                    className="hover:text-[#111111] transition-colors cursor-pointer"
                  >
                    Team
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-2 text-left">
              <span className="font-semibold text-[#111111] uppercase tracking-wider text-[11px]">
                Resources
              </span>
              <ul className="space-y-2">
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection('download')}
                    className="hover:text-[#111111] transition-colors cursor-pointer"
                  >
                    Download
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection('documentation')}
                    className="hover:text-[#111111] transition-colors cursor-pointer"
                  >
                    Documentation
                  </button>
                </li>
                <li>
                  <a
                    href={PRODUCT_INFO.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#111111] transition-colors"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2 text-left">
              <span className="font-semibold text-[#111111] uppercase tracking-wider text-[11px]">
                Social &amp; Repos
              </span>
              <ul className="space-y-2">
                <li>
                  <a
                    href={PRODUCT_INFO.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#111111] transition-colors inline-flex items-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>GitHub Organization</span>
                  </a>
                </li>
                <li>
                  <a
                    href={PRODUCT_INFO.links.frontendRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#111111] transition-colors"
                  >
                    CoreMind-Application
                  </a>
                </li>
                <li>
                  <a
                    href={PRODUCT_INFO.links.backendRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#111111] transition-colors"
                  >
                    CoreMind-AI-Backend
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8E93]">
          <div>{PRODUCT_INFO.copyright}</div>
          <div className="flex items-center gap-4">
            <span>Built for developers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
