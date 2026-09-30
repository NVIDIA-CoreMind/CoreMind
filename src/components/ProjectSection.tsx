import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCT_INFO } from '../data/product';

export const ProjectSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#F7F7F8] border-b border-[#E8E8E8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-mono font-medium text-[#6B6B6B] uppercase tracking-wider bg-white border border-[#E8E8E8] px-3 py-1 rounded-full">
          Project Mission
        </span>

        <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
          Built to rethink the developer workflow.
        </h2>

        <p className="mt-5 text-base sm:text-lg text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto">
          CoreMind explores how agentic AI can become a natural part of the software development environment — helping developers move from understanding a problem to planning, implementation, and verification within one workspace.
        </p>

        {/* Repository Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <a
            href={PRODUCT_INFO.links.frontendRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-white rounded-xl border border-[#E8E8E8] hover:border-[#111111]/30 transition-all shadow-2xs group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-[#8E8E93]">Desktop Client</span>
              <ArrowUpRight className="w-4 h-4 text-[#8E8E93] group-hover:text-[#111111] transition-colors" />
            </div>
            <div className="font-semibold text-sm text-[#111111]">
              CoreMind-Application
            </div>
            <p className="mt-1 text-xs text-[#6B6B6B]">
              Electron &amp; React native macOS desktop application repository.
            </p>
          </a>

          <a
            href={PRODUCT_INFO.links.backendRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-white rounded-xl border border-[#E8E8E8] hover:border-[#111111]/30 transition-all shadow-2xs group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-[#8E8E93]">Intelligence Engine</span>
              <ArrowUpRight className="w-4 h-4 text-[#8E8E93] group-hover:text-[#111111] transition-colors" />
            </div>
            <div className="font-semibold text-sm text-[#111111]">
              CoreMind-AI-Backend
            </div>
            <p className="mt-1 text-xs text-[#6B6B6B]">
              FastAPI &amp; semantic reasoning engine for codebase graph analysis.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};
