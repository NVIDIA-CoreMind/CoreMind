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
    <section className="py-24 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            Product Gallery
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950">
            Inside CoreMind
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-neutral-600 leading-relaxed">
            Explore the key modules that comprise the CoreMind desktop experience on macOS. Designed to keep developers focused in a high-speed, light environment.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10" role="tablist">
          {SCREENSHOTS.map((item) => {
            const isActive = item.id === activeId;
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(item.id)}
                className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm sm:text-base font-semibold transition-all ${
                  isActive
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200/80 hover:text-neutral-950 border border-neutral-200/70'
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
            className="bg-white rounded-3xl border border-neutral-200 shadow-sm overflow-hidden text-left"
          >
            {/* macOS Window Title Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-neutral-50/90 border-b border-neutral-200">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2" aria-hidden="true">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] border border-[#e0443e]/40 block" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border border-[#dea123]/40 block" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#27c93f] border border-[#1aab29]/40 block" />
                </div>
                <div className="text-sm font-mono text-neutral-700 font-medium">
                  CoreMind — {activeItem.title} Preview
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-neutral-100 text-neutral-700 border border-neutral-200">
                  {activeItem.category}
                </span>
              </div>
            </div>

            {/* Showcase Visual Area */}
            <div className="p-8 sm:p-12 bg-gradient-to-b from-neutral-50/50 to-white">
              {activeItem.imagePath ? (
                <img
                  src={activeItem.imagePath}
                  alt={`CoreMind ${activeItem.title} desktop screenshot`}
                  className="w-full rounded-xl border border-neutral-200 shadow-xs"
                  loading="lazy"
                />
              ) : (
                <div className="min-h-[380px] sm:min-h-[440px] rounded-2xl border-2 border-dashed border-neutral-200 bg-neutral-50/60 p-8 flex flex-col justify-between">
                  {/* Informational Header within placeholder */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200/80">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 mb-2">
                        <ImageIcon className="w-3.5 h-3.5" />
                        <span>Desktop Screenshot Placeholder</span>
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-950">
                        {activeItem.title}
                      </h3>
                      <p className="text-base text-neutral-600 mt-1.5 max-w-2xl leading-relaxed">
                        {activeItem.caption}
                      </p>
                    </div>

                    <div className="text-left sm:text-right">
                      <span className="text-xs font-mono text-neutral-400">
                        asset id: {activeItem.id}
                      </span>
                    </div>
                  </div>

                  {/* Visual Schematic Representation */}
                  <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-5">
                    {activeItem.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="bg-white p-5 rounded-xl border border-neutral-200/80 shadow-2xs space-y-2"
                      >
                        <div className="flex items-center gap-2.5 text-sm font-bold text-neutral-900">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                          <span>{feature}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                          Integrated into the CoreMind native macOS desktop bundle with low memory footprint.
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Clean footer status note */}
                  <div className="pt-4 border-t border-neutral-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-neutral-500 font-mono">
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

