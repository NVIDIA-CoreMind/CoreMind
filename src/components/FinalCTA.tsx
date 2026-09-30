import React from 'react';
import { Download, ArrowUpRight } from 'lucide-react';
import { PRODUCT_INFO } from '../data/product';

export const FinalCTA: React.FC = () => {
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
    <section className="py-20 sm:py-28 bg-white border-b border-[#E8E8E8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111]">
          Build your next project with CoreMind.
        </h2>

        <p className="mt-5 text-lg text-[#6B6B6B] leading-relaxed max-w-xl mx-auto font-normal">
          A modern AI-powered IDE for developers who want to spend less time fighting their tools and more time building.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => scrollToSection('download')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#111111] hover:bg-neutral-800 active:bg-black rounded-lg transition-colors cursor-pointer w-full sm:w-auto shadow-xs"
          >
            <Download className="w-4 h-4 text-white" />
            <span>Download for macOS</span>
          </button>

          <a
            href={PRODUCT_INFO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-[#111111] bg-white hover:bg-[#F7F7F8] border border-[#E8E8E8] rounded-lg transition-colors w-full sm:w-auto"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>Explore GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#6B6B6B]" />
          </a>
        </div>
      </div>
    </section>
  );
};
