import React from 'react';
import { Hero } from '../components/Hero';
import { ProductStatement } from '../components/ProductStatement';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { AgentSection } from '../components/AgentSection';
import { ScreenshotGallery } from '../components/ScreenshotGallery';
import { TechnologySection } from '../components/TechnologySection';
import { TeamSection } from '../components/TeamSection';
import { DownloadSection } from '../components/DownloadSection';
import { DocumentationSection } from '../components/DocumentationSection';
import { ProjectSection } from '../components/ProjectSection';
import { FinalCTA } from '../components/FinalCTA';

export const Home: React.FC = () => {
  return (
    <main className="bg-white">
      {/* 1. Hero & Large Desktop IDE Preview */}
      <Hero />

      {/* 2. Trust / Product Statement (Understand, Create, Improve) */}
      <ProductStatement />

      {/* 3. Features Section (Everything you need to build - 6 cards) */}
      <Features />

      {/* 4. How CoreMind Works (01 Describe, 02 Plan, 03 Build, 04 Verify) */}
      <HowItWorks />

      {/* 5. AI Agent Workflow (5 Stages: Request → Reasoning → Plan → Changes → Verification) */}
      <AgentSection />

      {/* 6. Product Screenshots Gallery (6 views) */}
      <ScreenshotGallery />

      {/* 7. Technology Cards (Electron, React, TypeScript, AI Models, Local Development) */}
      <TechnologySection />

      {/* 8. Built by Developers / Team Section */}
      <TeamSection />

      {/* 9. Dedicated macOS Download Section (Apple Silicon) */}
      <DownloadSection />

      {/* 9. Documentation Section (Getting Started, Documentation, GitHub) */}
      <DocumentationSection />

      {/* 10. Project / Hackathon Section (Built to rethink the developer workflow) */}
      <ProjectSection />

      {/* 11. Final CTA */}
      <FinalCTA />
    </main>
  );
};
