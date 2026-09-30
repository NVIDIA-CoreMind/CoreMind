import React from 'react';
import {
  Sparkles,
  FolderTree,
  Terminal,
  CheckCircle2
} from 'lucide-react';
import { FEATURES, type FeatureItem } from '../data/product';

export const Features: React.FC = () => {
  const renderVisual = (type?: string) => {
    switch (type) {
      case 'ai-editor':
        return (
          <div className="mt-5 p-3 rounded-lg bg-[#F7F7F8] border border-[#E8E8E8] font-mono text-[11px] select-none">
            <div className="flex items-center justify-between text-[#8E8E93] pb-1.5 border-b border-[#E8E8E8] mb-1.5 text-[10px]">
              <span className="flex items-center gap-1 text-[#111111] font-sans font-medium">
                <Sparkles className="w-3 h-3 text-blue-600" />
                Inline Completion
              </span>
              <span>Cmd+K</span>
            </div>
            <div className="text-[#6B6B6B]">function validateToken(token: string) &#123;</div>
            <div className="bg-emerald-50 text-emerald-800 px-1.5 py-0.5 rounded my-1 border border-emerald-200/60">
              + const payload = jwt.verify(token, secret);
            </div>
            <div className="text-[#6B6B6B]">&nbsp; return payload != null;</div>
            <div className="text-[#6B6B6B]">&#125;</div>
          </div>
        );

      case 'explorer':
        return (
          <div className="mt-5 p-3 rounded-lg bg-[#F7F7F8] border border-[#E8E8E8] font-mono text-[11px] select-none">
            <div className="flex items-center justify-between text-[#8E8E93] pb-1.5 border-b border-[#E8E8E8] mb-1.5 text-[10px]">
              <span className="text-[#111111] font-sans font-medium">Symbol Resolution</span>
              <span>240 symbols</span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[#111111]">
                <FolderTree className="w-3.5 h-3.5 text-[#6B6B6B]" />
                <span>services/</span>
              </div>
              <div className="pl-4 flex items-center justify-between text-[#6B6B6B]">
                <span className="text-blue-600">auth.service.ts</span>
                <span className="text-[10px] text-neutral-400">exported: 4</span>
              </div>
              <div className="pl-4 flex items-center justify-between text-[#6B6B6B]">
                <span>user.model.ts</span>
                <span className="text-[10px] text-neutral-400">relations: 2</span>
              </div>
            </div>
          </div>
        );

      case 'agent':
        return (
          <div className="mt-5 p-3 rounded-lg bg-[#F7F7F8] border border-[#E8E8E8] font-mono text-[11px] select-none">
            <div className="flex items-center justify-between text-[#8E8E93] pb-1.5 border-b border-[#E8E8E8] mb-1.5 text-[10px]">
              <span className="text-[#111111] font-sans font-medium">Multi-file Plan</span>
              <span className="text-emerald-700 font-semibold">Ready</span>
            </div>
            <div className="space-y-1 text-[#6B6B6B]">
              <div className="flex items-center gap-1.5 text-[#111111]">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                <span className="truncate">1. Update schema model</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#111111]">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                <span className="truncate">2. Add route controller</span>
              </div>
              <div className="flex items-center gap-1.5 text-blue-700">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 ml-1" />
                <span className="truncate">3. Run regression tests</span>
              </div>
            </div>
          </div>
        );

      case 'terminal':
        return (
          <div className="mt-5 p-3 rounded-lg bg-neutral-900 border border-neutral-800 font-mono text-[11px] text-neutral-200 select-none">
            <div className="flex items-center justify-between text-neutral-400 pb-1.5 border-b border-neutral-800 mb-1.5 text-[10px]">
              <span className="flex items-center gap-1 text-neutral-200">
                <Terminal className="w-3 h-3" />
                zsh • localhost:3000
              </span>
              <span className="text-emerald-400">running</span>
            </div>
            <div className="text-neutral-400">$ pnpm test</div>
            <div className="text-emerald-400">✓ 8 test suites passed (124ms)</div>
            <div className="text-neutral-500 font-sans text-[10px] mt-1">Zero context switching out of the IDE</div>
          </div>
        );

      case 'clean-ui':
        return (
          <div className="mt-5 p-3 rounded-lg bg-[#F7F7F8] border border-[#E8E8E8] font-mono text-[11px] select-none space-y-1.5">
            <div className="flex items-center justify-between text-[#8E8E93] pb-1.5 border-b border-[#E8E8E8] text-[10px]">
              <span className="text-[#111111] font-sans font-medium">Focus &amp; Speed</span>
              <span>&lt;16ms frame</span>
            </div>
            <div className="flex items-center gap-2 text-[#111111] font-sans text-xs">
              <span className="w-2 h-2 rounded-full bg-[#111111]" />
              <span>Native Apple Silicon binary</span>
            </div>
            <div className="flex items-center gap-2 text-[#6B6B6B] font-sans text-xs">
              <span className="w-2 h-2 rounded-full bg-[#8E8E93]" />
              <span>Low memory footprint</span>
            </div>
          </div>
        );

      case 'local':
        return (
          <div className="mt-5 p-3 rounded-lg bg-[#F7F7F8] border border-[#E8E8E8] font-mono text-[11px] select-none space-y-1.5">
            <div className="flex items-center justify-between text-[#8E8E93] pb-1.5 border-b border-[#E8E8E8] text-[10px]">
              <span className="text-[#111111] font-sans font-medium">Local Git Workspace</span>
              <span>Zero cloud sync</span>
            </div>
            <div className="text-[#111111] font-mono text-xs">git status --short</div>
            <div className="text-emerald-700 font-mono text-[11px]">M src/auth.ts</div>
            <div className="text-[#8E8E93] text-[10px] font-sans">Reads directly from your local filesystem</div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="features" className="py-20 sm:py-28 bg-white border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111]">
            Everything you need to build.
          </h2>
          <p className="mt-4 text-lg text-[#6B6B6B] leading-relaxed">
            CoreMind combines a modern code editor with AI-powered development workflows.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature: FeatureItem) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl border border-[#E8E8E8] p-6 sm:p-7 shadow-2xs hover:border-[#111111]/30 transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-[#F7F7F8] text-[#6B6B6B] border border-[#E8E8E8]">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#111111] tracking-tight">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm text-[#6B6B6B] leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Developer Visual Preview inside card */}
              {renderVisual(feature.visualType)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
