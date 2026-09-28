import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { AIWorkflow } from '../components/AIWorkflow';
import { ScreenshotGallery } from '../components/ScreenshotGallery';
import { DownloadSection } from '../components/DownloadSection';
import { CTASection } from '../components/CTASection';
import { IDEPreview } from '../components/IDEPreview';

export const Home: React.FC = () => {
  return (
    <main className="bg-white">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Product Preview Section */}
      <section className="py-20 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Native Experience
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
              Your development environment, enhanced by AI.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              CoreMind integrates AI directly into your editor, terminal, and workspace navigation. Experience fluid code completions, instant explanations, and multi-file automation on macOS.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <IDEPreview showCallouts={true} />
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <Features />

      {/* 4. AI Coding & AI Agent Section */}
      <AIWorkflow />

      {/* 5. Screenshots Product Gallery */}
      <ScreenshotGallery />

      {/* 6. Primary Download Section */}
      <DownloadSection />

      {/* 7. Bottom CTA */}
      <CTASection />
    </main>
  );
};
