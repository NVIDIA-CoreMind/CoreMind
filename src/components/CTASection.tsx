import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ChevronRight, Apple } from 'lucide-react';
import { DOWNLOAD_CONFIG } from '../data/product';

export const CTASection: React.FC = () => {
  const macConfig = DOWNLOAD_CONFIG.macos;

  return (
    <section className="py-24 bg-neutral-50/70 border-b border-neutral-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-neutral-200 p-10 sm:p-16 text-center shadow-xs">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold tracking-wide border border-blue-100 mb-8">
            <Apple className="w-4 h-4" />
            <span>macOS Release v{macConfig.version}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
            Ready to build with CoreMind?
          </h2>

          <p className="mt-5 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Download CoreMind for macOS and bring AI-assisted development into your everyday workflow.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/download"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <Download className="w-5 h-5" aria-hidden="true" />
              <span>Download for macOS</span>
            </Link>

            <Link
              to="/docs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200/80 rounded-xl transition-colors border border-neutral-200/80"
            >
              <span>Read Documentation</span>
              <ChevronRight className="w-5 h-5 text-neutral-400" />
            </Link>
          </div>

          <div className="mt-8 text-sm text-neutral-500 font-mono">
            <span>Apple Silicon • macOS 12 Monterey or newer • 94.2 MB</span>
          </div>
        </div>
      </div>
    </section>
  );
};
