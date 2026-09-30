import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { PRODUCT_INFO } from '../data/product';
import { HeroProductPreview } from './HeroProductPreview';

export const Hero: React.FC = () => {
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
    <section className="relative bg-white pt-12 pb-20 sm:pt-16 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Small label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F7F8] border border-[#E8E8E8] text-xs font-medium text-[#6B6B6B] mb-6">
          <span>{PRODUCT_INFO.smallLabel}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111111] max-w-4xl mx-auto leading-[1.12]">
          {PRODUCT_INFO.headline}
        </h1>

        {/* Supporting Text */}
        <p className="mt-6 text-lg sm:text-xl text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed font-normal">
          {PRODUCT_INFO.supportingText}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => scrollToSection('download')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#111111] hover:bg-neutral-800 active:bg-black rounded-lg transition-colors cursor-pointer w-full sm:w-auto shadow-xs"
          >
            <Download className="w-4 h-4 text-white" />
            <span>{PRODUCT_INFO.primaryCtaText}</span>
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('product')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-[#111111] bg-white hover:bg-[#F7F7F8] border border-[#E8E8E8] rounded-lg transition-colors cursor-pointer w-full sm:w-auto"
          >
            <span>{PRODUCT_INFO.secondaryCtaText}</span>
            <ArrowRight className="w-4 h-4 text-[#6B6B6B]" />
          </button>
        </div>

        {/* Small platform text below download button */}
        <p className="mt-3 text-xs text-[#8E8E93] font-mono">
          {PRODUCT_INFO.platformSubtext}
        </p>

        {/* Section 4: Hero Product Preview */}
        <div id="product" className="mt-14 sm:mt-18 scroll-mt-24">
          <HeroProductPreview />
        </div>
      </div>
    </section>
  );
};
