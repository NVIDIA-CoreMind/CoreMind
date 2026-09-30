import React, { useState } from 'react';
import {
  Code2,
  Sparkles,
  Workflow,
  Terminal,
  FolderTree,
  Settings,
  Check,
  CheckCircle2
} from 'lucide-react';
import { SCREENSHOTS, type ScreenshotItem } from '../data/product';

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
      case 'agent-workflow':
        return <Workflow {...props} />;
      case 'terminal':
        return <Terminal {...props} />;
      case 'project-explorer':
        return <FolderTree {...props} />;
      case 'settings':
        return <Settings {...props} />;
      default:
        return <Code2 {...props} />;
    }
  };

  const renderModuleView = (id: string) => {
    switch (id) {
      case 'main-editor':
        return (
          <div className="bg-white p-6 sm:p-8 font-mono text-xs leading-relaxed text-[#111111] select-none">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E8] text-[#6B6B6B] text-[11px] mb-4">
              <span className="font-semibold text-[#111111]">src/core/editor.ts</span>
              <span>TypeScript • UTF-8</span>
            </div>
            <div className="space-y-1">
              <div className="text-[#8E8E93]">// CoreMind Editor Engine — Native low-latency buffer</div>
              <div><span className="text-blue-600 font-medium">import</span> &#123; createMonacoInstance &#125; <span className="text-blue-600 font-medium">from</span> <span className="text-emerald-700">'@coremind/editor-core'</span>;</div>
              <div><span className="text-blue-600 font-medium">import</span> &#123; LanguageServerClient &#125; <span className="text-blue-600 font-medium">from</span> <span className="text-emerald-700">'@coremind/lsp'</span>;</div>
              <div className="h-2" />
              <div><span className="text-blue-600 font-medium">export class</span> <span className="font-semibold text-neutral-900">CoreMindWorkspace</span> &#123;</div>
              <div className="pl-4"><span className="text-blue-600 font-medium">private</span> lsp: LanguageServerClient;</div>
              <div className="pl-4"><span className="text-blue-600 font-medium">constructor</span>(projectRoot: <span className="text-blue-600">string</span>) &#123;</div>
              <div className="pl-8">this.lsp = <span className="text-blue-600 font-medium">new</span> LanguageServerClient(&#123; rootUri: projectRoot &#125;);</div>
              <div className="pl-8">this.lsp.initializeIndex();</div>
              <div className="pl-4">&#125;</div>
              <div>&#125;</div>
            </div>
          </div>
        );

      case 'ai-assistant':
        return (
          <div className="bg-white p-6 sm:p-8 font-mono text-xs select-none">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E8] text-[#6B6B6B] text-[11px] mb-4">
              <span className="font-semibold text-[#111111]">AI Assistant Panel (Cmd+L)</span>
              <span className="text-blue-600 font-medium font-sans">Context: @file:src/auth.ts</span>
            </div>
            <div className="space-y-4 font-sans text-xs">
              <div className="bg-[#F7F7F8] p-3.5 rounded-lg border border-[#E8E8E8] space-y-1">
                <span className="text-[10px] font-mono text-[#8E8E93] uppercase font-bold">Developer</span>
                <p className="text-[#111111] font-medium">
                  "Explain how authentication claims are propagated to child route handlers."
                </p>
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-[#E8E8E8] space-y-2">
                <span className="text-[10px] font-mono text-blue-600 uppercase font-bold">CoreMind</span>
                <p className="text-[#6B6B6B] leading-relaxed">
                  In <code className="bg-[#F7F7F8] px-1 py-0.5 rounded text-[#111111] font-mono text-[11px]">src/auth.ts</code>, incoming tokens are parsed via Bearer extraction. Upon successful verification, decoded claims attach to <code className="bg-[#F7F7F8] px-1 py-0.5 rounded text-[#111111] font-mono text-[11px]">req.user</code>. Subsequent controllers in the Express chain access <code className="bg-[#F7F7F8] px-1 py-0.5 rounded text-[#111111] font-mono text-[11px]">req.user.sub</code> without secondary database lookups.
                </p>
              </div>
            </div>
          </div>
        );

      case 'agent-workflow':
        return (
          <div className="bg-white p-6 sm:p-8 font-mono text-xs select-none">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E8] text-[#6B6B6B] text-[11px] mb-4">
              <span className="font-semibold text-[#111111]">Agent Plan Execution</span>
              <span className="text-emerald-700 font-semibold font-sans">2 of 3 steps completed</span>
            </div>
            <div className="space-y-2.5 font-sans">
              <div className="flex items-center justify-between p-3 rounded-lg bg-[#F7F7F8] border border-[#E8E8E8]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-medium text-[#111111]">Generate rateLimiter middleware</span>
                </div>
                <span className="font-mono text-[10px] text-[#6B6B6B]">src/middleware/rateLimiter.ts</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-[#F7F7F8] border border-[#E8E8E8]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-medium text-[#111111]">Mount limiter onto router instance</span>
                </div>
                <span className="font-mono text-[10px] text-[#6B6B6B]">src/server.ts</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50/50 border border-blue-200">
                <div className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-blue-600 border-t-transparent animate-spin" />
                  <span className="text-xs font-medium text-blue-900">Execute regression test suite</span>
                </div>
                <span className="font-mono text-[10px] text-blue-700">pnpm test:auth</span>
              </div>
            </div>
          </div>
        );

      case 'terminal':
        return (
          <div className="bg-neutral-900 p-6 sm:p-8 font-mono text-xs text-neutral-200 select-none">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-neutral-400 text-[11px] mb-4">
              <span className="font-semibold text-neutral-100">zsh — CoreMind Native Terminal</span>
              <span>Apple Silicon ARM64</span>
            </div>
            <div className="space-y-1.5 leading-relaxed text-[11.5px]">
              <div className="text-neutral-400">$ git status --short</div>
              <div className="text-emerald-400">M src/auth.ts</div>
              <div className="text-emerald-400">?? src/rateLimiter.ts</div>
              <div className="h-1" />
              <div className="text-neutral-400">$ pnpm test:auth</div>
              <div className="text-neutral-100 font-semibold">PASS tests/auth.test.ts</div>
              <div className="text-emerald-400 pl-2">✓ validates authentic bearer authorization tokens (14ms)</div>
              <div className="text-emerald-400 pl-2">✓ terminates requests missing authorization header (8ms)</div>
              <div className="text-emerald-400 pl-2">✓ enforces token-bucket rate limits on /generate (19ms)</div>
              <div className="h-1" />
              <div className="text-neutral-300">Test Suites: 1 passed, 1 total</div>
              <div className="text-neutral-300">Snapshots:   0 total</div>
              <div className="text-neutral-300">Time:        0.642 s</div>
            </div>
          </div>
        );

      case 'project-explorer':
        return (
          <div className="bg-white p-6 sm:p-8 font-mono text-xs select-none">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E8] text-[#6B6B6B] text-[11px] mb-4">
              <span className="font-semibold text-[#111111]">Project Hierarchy &amp; Symbols</span>
              <span className="text-[11px]">Cmd+P to fuzzy-find</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3 bg-[#F7F7F8] rounded-lg border border-[#E8E8E8] space-y-1 text-[#6B6B6B]">
                <div className="text-[#111111] font-semibold flex items-center gap-1.5">
                  <FolderTree className="w-3.5 h-3.5 text-[#6B6B6B]" />
                  <span>auth-service/</span>
                </div>
                <div className="pl-4 text-[#111111]">src/</div>
                <div className="pl-8 text-blue-600">auth.ts</div>
                <div className="pl-8 text-emerald-700">rateLimiter.ts [M]</div>
                <div className="pl-8 text-[#6B6B6B]">jwt.service.ts</div>
                <div className="pl-8 text-[#6B6B6B]">server.ts</div>
                <div className="pl-4 text-[#6B6B6B]">tests/</div>
              </div>
              <div className="p-3 bg-[#F7F7F8] rounded-lg border border-[#E8E8E8] space-y-2">
                <div className="text-[#111111] font-semibold text-xs font-sans">
                  Symbol Graph
                </div>
                <p className="text-xs text-[#6B6B6B] font-sans leading-relaxed">
                  Fast AST-indexed symbol graph lets developers and the AI agent resolve function signatures and type references instantaneously without latency.
                </p>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="bg-white p-6 sm:p-8 font-sans text-xs select-none">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E8] text-[#6B6B6B] text-[11px] mb-4">
              <span className="font-semibold text-[#111111]">Preferences &amp; AI Provider Configuration</span>
              <span className="font-mono text-[11px]">Cmd+,</span>
            </div>
            <div className="space-y-4 max-w-xl">
              <div className="flex items-center justify-between p-3 rounded-lg border border-[#E8E8E8] bg-[#F7F7F8]">
                <div>
                  <div className="font-semibold text-[#111111]">Model Reasoning Profile</div>
                  <div className="text-xs text-[#6B6B6B]">Select deep reasoning depth for agentic tasks</div>
                </div>
                <span className="px-2.5 py-1 bg-white border border-[#E8E8E8] rounded font-mono text-xs text-[#111111] font-medium">
                  Balanced
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border border-[#E8E8E8] bg-[#F7F7F8]">
                <div>
                  <div className="font-semibold text-[#111111]">Keybinding Preset</div>
                  <div className="text-xs text-[#6B6B6B]">Compatibility with modern editor shortcuts</div>
                </div>
                <span className="px-2.5 py-1 bg-white border border-[#E8E8E8] rounded font-mono text-xs text-[#111111] font-medium">
                  Standard macOS
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border border-[#E8E8E8] bg-[#F7F7F8]">
                <div>
                  <div className="font-semibold text-[#111111]">Workspace Index Exclusions</div>
                  <div className="text-xs text-[#6B6B6B]">Respects .gitignore and .coremindignore</div>
                </div>
                <span className="text-emerald-700 font-semibold font-mono text-xs">
                  Active
                </span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F7F7F8] border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111]">
            See CoreMind in action.
          </h2>
          <p className="mt-4 text-lg text-[#6B6B6B] leading-relaxed">
            Every module inside CoreMind is built for developer flow, low latency, and intelligent code collaboration.
          </p>
        </div>

        {/* Gallery Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8" role="tablist">
          {SCREENSHOTS.map((item: ScreenshotItem) => {
            const isActive = item.id === activeId;
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(item.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#111111] text-white shadow-2xs'
                    : 'bg-white text-[#6B6B6B] hover:text-[#111111] hover:bg-[#F7F7F8] border border-[#E8E8E8]'
                }`}
              >
                {getTabIcon(item.id)}
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Product Showcase Frame */}
        <div className="max-w-5xl mx-auto bg-white rounded-xl sm:rounded-2xl border border-[#E8E8E8] shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden text-left">
          {/* macOS Titlebar */}
          <div className="flex items-center justify-between px-5 py-3 bg-[#F7F7F8] border-b border-[#E8E8E8]">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/30 block" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/30 block" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/30 block" />
              </div>
              <span className="text-xs font-mono text-[#6B6B6B]">
                CoreMind — {activeItem.title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-[#6B6B6B] bg-white border border-[#E8E8E8] px-2 py-0.5 rounded">
                {activeItem.category}
              </span>
            </div>
          </div>

          {/* Module Rendering */}
          <div className="border-b border-[#E8E8E8]">
            {renderModuleView(activeItem.id)}
          </div>

          {/* Caption & Features Footer */}
          <div className="p-6 sm:p-8 bg-white flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-[#111111] tracking-tight">
                {activeItem.title}
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B] max-w-xl leading-relaxed">
                {activeItem.caption}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              {activeItem.features.map((feature: string, fIdx: number) => (
                <span
                  key={fIdx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F7F7F8] border border-[#E8E8E8] text-xs text-[#111111] font-medium"
                >
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{feature}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
