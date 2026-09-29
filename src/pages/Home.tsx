import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { IDEPreview } from '../components/IDEPreview';
import { AIWorkflow } from '../components/AIWorkflow';
import { DownloadSection } from '../components/DownloadSection';
import { BottomCTA } from '../components/BottomCTA';
import { Terminal } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <main className="bg-white">
      {/* 1. Hero Section with Live Quest Mode Stage */}
      <Hero />

      {/* 2. Core Capabilities & Superpowers */}
      <Features />

      {/* 3. Interactive IDE Workspace & Live Diff Preview */}
      <section id="demo" className="py-24 bg-white border-b border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/80 font-mono inline-flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>Interactive Desktop IDE Demo</span>
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950">
              Desktop Workspace &amp; Diff Engine
            </h2>
            <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
              Explore the native macOS editor layout with project tree, intelligent syntax highlighting, automated agent reasoning, and sandbox test runner.
            </p>
          </div>

          <IDEPreview />
        </div>
      </section>

      {/* 4. Semantic AST & Autonomous Agent Architecture */}
      <AIWorkflow />

      {/* 5. Download & Quickstart Installer */}
      <DownloadSection />

      {/* 6. Hackathon Wrap-up & Project CTA */}
      <BottomCTA />
    </main>
  );
};
