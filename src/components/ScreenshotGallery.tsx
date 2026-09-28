import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Sparkles,
  Files,
  Terminal,
  GitPullRequest,
  Settings,
  Image as ImageIcon,
  CheckCircle2
} from 'lucide-react';
import { SCREENSHOTS } from '../data/product';


export const ScreenshotGallery: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('main-editor');
  const activeItem = SCREENSHOTS.find((s) => s.id === activeId) || SCREENSHOTS[0];

  const getTabIcon = (id: string) => {
    const props = { className: 'w-4 h-4' };
    switch (id) {
      case 'main-editor':
        return <Code2 {...props} />;
      case 'ai-assistant':
        return <Sparkles {...props} />;
      case 'file-explorer':
        return <Files {...props} />;
      case 'terminal':
        return <Terminal {...props} />;
      case 'project-workflow':
        return <GitPullRequest {...props} />;
      case 'settings':
        return <Settings {...props} />;
      default:
        return <Code2 {...props} />;
    }
  };

  return (
    <section className="py-20 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Product Gallery
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            Inside CoreMind
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Explore the key modules that comprise the CoreMind desktop experience on macOS. Designed to keep developers focused in a high-speed, light environment.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8" role="tablist">
          {SCREENSHOTS.map((item) => {
            const isActive = item.id === activeId;
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(item.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'bg-neutral-100/80 text-neutral-700 hover:bg-neutral-200/80 hover:text-neutral-950 border border-neutral-200/70'
                }`}
              >
                {getTabIcon(item.id)}
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Item Showcase Frame */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden text-left"
          >
            {/* macOS Window Title Header */}
            <div className="flex items-center justify-between px-5 py-3 bg-neutral-50/90 border-b border-neutral-200">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/40 block" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/40 block" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/40 block" />
                </div>
                <div className="text-xs font-mono text-neutral-600">
                  CoreMind — {activeItem.title} Preview
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 border border-neutral-200">
                  {activeItem.category}
                </span>
              </div>
            </div>

            {/* Showcase Visual Area */}
            <div className="p-6 sm:p-10 bg-gradient-to-b from-neutral-50/50 to-white">
              {activeItem.imagePath ? (
                <img
                  src={activeItem.imagePath}
                  alt={`CoreMind ${activeItem.title} desktop screenshot`}
                  className="w-full rounded-lg border border-neutral-200 shadow-xs"
                  loading="lazy"
                />
              ) : (
                <div className="min-h-[340px] sm:min-h-[400px] rounded-xl border-2 border-dashed border-neutral-200 bg-neutral-50/60 p-6 flex flex-col justify-between">
                  {/* Informational Header within placeholder */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200/80">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium bg-blue-50 text-blue-700 border border-blue-100 mb-1">
                        <ImageIcon className="w-3 h-3" />
                        <span>Desktop Screenshot Placeholder</span>
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900">
                        {activeItem.title}
                      </h3>
                      <p className="text-sm text-neutral-600 mt-1 max-w-xl">
                        {activeItem.caption}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-mono text-neutral-400">
                        asset id: {activeItem.id}
                      </span>
                    </div>
                  </div>

                  {/* Visual Schematic Representation */}
                  <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {activeItem.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="bg-white p-4 rounded-lg border border-neutral-200/80 shadow-2xs space-y-1.5"
                      >
                        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                          <span>{feature}</span>
                        </div>
                        <p className="text-xs text-neutral-500 leading-relaxed">
                          Integrated into the CoreMind native macOS desktop bundle with low memory footprint.
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Clean footer status note */}
                  <div className="pt-3 border-t border-neutral-200/80 flex items-center justify-between text-xs text-neutral-400 font-mono">
                    <span>Target: macOS Monterey (12.0) through Sequoia (15.x)</span>
                    <span className="text-neutral-500 font-sans">
                      Configured for automatic screenshot hot-swap in data/product.ts
                    </span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
