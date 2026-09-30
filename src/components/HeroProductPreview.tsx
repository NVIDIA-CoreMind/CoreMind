import React, { useState } from 'react';
import {
  FolderTree,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Terminal,
  CheckCircle2,
  FileCode,
  X
} from 'lucide-react';

export const HeroProductPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'auth' | 'rateLimiter'>('auth');

  return (
    <div className="w-full">
      {/* Small label above product preview */}
      <div className="flex items-center justify-center mb-4">
        <span className="text-xs font-mono font-medium text-[#6B6B6B] uppercase tracking-wider bg-[#F7F7F8] border border-[#E8E8E8] px-3 py-1 rounded-full">
          CoreMind Desktop IDE
        </span>
      </div>

      {/* Large Rounded IDE Container */}
      <div className="relative mx-auto rounded-xl sm:rounded-2xl border border-[#E8E8E8] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden text-left">
        {/* macOS Titlebar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#F7F7F8] border-b border-[#E8E8E8] select-none">
          <div className="flex items-center gap-2">
            {/* Native macOS traffic lights */}
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/30 block" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/30 block" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/30 block" />
            </div>

            {/* Breadcrumb / Window title */}
            <div className="hidden sm:flex items-center gap-2 ml-4 text-xs font-mono text-[#6B6B6B]">
              <span className="font-semibold text-[#111111]">CoreMind</span>
              <span>/</span>
              <span className="text-[#111111]">auth-service</span>
              <span>/</span>
              <span>src</span>
              <span>/</span>
              <span className="text-[#111111] font-medium">
                {activeTab === 'auth' ? 'auth.ts' : 'rateLimiter.ts'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-[#6B6B6B] bg-white border border-[#E8E8E8] px-2 py-0.5 rounded">
              macOS • Apple Silicon
            </span>
          </div>
        </div>

        {/* IDE Main Workspace */}
        <div className="grid grid-cols-12 min-h-[500px] lg:min-h-[560px] bg-white divide-x divide-[#E8E8E8]">
          {/* 1. Project Explorer Sidebar */}
          <div className="hidden md:flex md:col-span-3 lg:col-span-3 flex-col bg-[#F7F7F8]">
            <div className="px-3.5 py-2 border-b border-[#E8E8E8] flex items-center justify-between text-xs text-[#6B6B6B]">
              <span className="font-semibold tracking-wider uppercase text-[10px] text-[#111111]">
                Explorer
              </span>
              <span className="font-mono text-[11px]">auth-service</span>
            </div>

            {/* File Tree */}
            <div className="p-2 space-y-0.5 font-mono text-xs text-[#6B6B6B] select-none">
              <div className="flex items-center gap-1.5 py-1 px-1.5 rounded hover:bg-[#E8E8E8]/50 text-[#111111] font-medium cursor-pointer">
                <ChevronDown className="w-3.5 h-3.5 text-[#6B6B6B]" />
                <FolderTree className="w-3.5 h-3.5 text-[#6B6B6B]" />
                <span>src</span>
              </div>

              <div className="pl-4 space-y-0.5">
                <button
                  type="button"
                  onClick={() => setActiveTab('auth')}
                  className={`w-full flex items-center justify-between py-1 px-2 rounded cursor-pointer transition-colors ${
                    activeTab === 'auth'
                      ? 'bg-white text-[#111111] font-medium border border-[#E8E8E8] shadow-2xs'
                      : 'hover:bg-[#E8E8E8]/50 text-[#6B6B6B]'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <FileCode className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="truncate">auth.ts</span>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('rateLimiter')}
                  className={`w-full flex items-center justify-between py-1 px-2 rounded cursor-pointer transition-colors ${
                    activeTab === 'rateLimiter'
                      ? 'bg-white text-[#111111] font-medium border border-[#E8E8E8] shadow-2xs'
                      : 'hover:bg-[#E8E8E8]/50 text-[#6B6B6B]'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <FileCode className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="truncate">rateLimiter.ts</span>
                  </div>
                  <span className="text-[10px] text-emerald-700 font-mono font-medium">NEW</span>
                </button>

                <div className="flex items-center gap-2 py-1 px-2 rounded hover:bg-[#E8E8E8]/50 text-[#6B6B6B] cursor-pointer">
                  <FileCode className="w-3.5 h-3.5 text-[#8E8E93]" />
                  <span>jwt.service.ts</span>
                </div>

                <div className="flex items-center gap-2 py-1 px-2 rounded hover:bg-[#E8E8E8]/50 text-[#6B6B6B] cursor-pointer">
                  <FileCode className="w-3.5 h-3.5 text-[#8E8E93]" />
                  <span>server.ts</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 py-1 px-1.5 rounded hover:bg-[#E8E8E8]/50 text-[#6B6B6B] cursor-pointer mt-1">
                <ChevronRight className="w-3.5 h-3.5 text-[#6B6B6B]" />
                <FolderTree className="w-3.5 h-3.5 text-[#6B6B6B]" />
                <span>tests</span>
              </div>

              <div className="pt-2 pl-4 space-y-0.5 text-[#8E8E93]">
                <div className="py-0.5 px-2 hover:text-[#111111] cursor-pointer">package.json</div>
                <div className="py-0.5 px-2 hover:text-[#111111] cursor-pointer">tsconfig.json</div>
              </div>
            </div>

            {/* Semantic Indexing Status */}
            <div className="mt-auto p-3 border-t border-[#E8E8E8] bg-white text-xs">
              <div className="flex items-center justify-between text-[#6B6B6B]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Workspace indexed</span>
                </span>
                <span className="font-mono text-[11px] text-[#111111] font-medium">18 files</span>
              </div>
            </div>
          </div>

          {/* 2. Code Editor Canvas + Integrated Terminal */}
          <div className="col-span-12 md:col-span-9 lg:col-span-6 flex flex-col bg-white">
            {/* Editor Tab Bar */}
            <div className="flex items-center bg-[#F7F7F8] border-b border-[#E8E8E8] px-2 overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveTab('auth')}
                className={`flex items-center gap-2 px-3 py-2 text-xs font-mono border-r border-[#E8E8E8] transition-colors cursor-pointer ${
                  activeTab === 'auth'
                    ? 'bg-white text-[#111111] font-semibold border-b-2 border-b-[#111111]'
                    : 'text-[#6B6B6B] hover:text-[#111111]'
                }`}
              >
                <span>auth.ts</span>
                <X className="w-3 h-3 text-[#8E8E93]" />
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('rateLimiter')}
                className={`flex items-center gap-2 px-3 py-2 text-xs font-mono border-r border-[#E8E8E8] transition-colors cursor-pointer ${
                  activeTab === 'rateLimiter'
                    ? 'bg-white text-[#111111] font-semibold border-b-2 border-b-[#111111]'
                    : 'text-[#6B6B6B] hover:text-[#111111]'
                }`}
              >
                <span>rateLimiter.ts</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </button>

              <div className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-[#8E8E93] hover:text-[#111111] cursor-pointer">
                <span>server.ts</span>
              </div>
            </div>

            {/* Code Content Area with Line Numbers */}
            <div className="p-4 font-mono text-xs leading-relaxed text-[#111111] overflow-x-auto flex-1 select-none">
              {activeTab === 'auth' ? (
                <div className="space-y-0.5">
                  <div className="text-[#8E8E93] italic">// auth.ts — CoreMind verified middleware</div>
                  <div className="flex items-start">
                    <span className="w-6 text-right pr-3 text-[#8E8E93] select-none text-[11px]">1</span>
                    <span><span className="text-blue-600 font-medium">import</span> &#123; Request, Response, NextFunction &#125; <span className="text-blue-600 font-medium">from</span> <span className="text-emerald-700">'express'</span>;</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 text-right pr-3 text-[#8E8E93] select-none text-[11px]">2</span>
                    <span><span className="text-blue-600 font-medium">import</span> &#123; verifyToken &#125; <span className="text-blue-600 font-medium">from</span> <span className="text-emerald-700">'./jwt.service'</span>;</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 text-right pr-3 text-[#8E8E93] select-none text-[11px]">3</span>
                    <span><span className="text-blue-600 font-medium">import</span> &#123; rateLimiter &#125; <span className="text-blue-600 font-medium">from</span> <span className="text-emerald-700">'./rateLimiter'</span>;</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 text-right pr-3 text-[#8E8E93] select-none text-[11px]">4</span>
                    <span className="h-4" />
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 text-right pr-3 text-[#8E8E93] select-none text-[11px]">5</span>
                    <span><span className="text-blue-600 font-medium">export async function</span> <span className="font-semibold text-neutral-900">authenticateRequest</span>(</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 text-right pr-3 text-[#8E8E93] select-none text-[11px]">6</span>
                    <span className="pl-4">req: Request, res: Response, next: NextFunction</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 text-right pr-3 text-[#8E8E93] select-none text-[11px]">7</span>
                    <span>): Promise&lt;<span className="text-blue-600">void</span>&gt; &#123;</span>
                  </div>

                  {/* Inline AI Assist Card (Cmd+K preview) */}
                  <div className="my-2 p-3 rounded-lg border border-[#E8E8E8] bg-[#F7F7F8] space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-sans">
                      <div className="flex items-center gap-1.5 font-medium text-[#111111]">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                        <span>CoreMind Inline Assist (Cmd+K): Enforce Bearer token extraction</span>
                      </div>
                      <div className="flex items-center gap-1 font-mono text-[10px]">
                        <span className="px-1.5 py-0.5 rounded bg-[#111111] text-white">Enter to Accept</span>
                        <span className="px-1.5 py-0.5 rounded bg-[#E8E8E8] text-[#6B6B6B]">Esc to Discard</span>
                      </div>
                    </div>

                    <div className="bg-white p-2.5 rounded border border-[#E8E8E8] text-xs space-y-0.5">
                      <div className="bg-emerald-50 text-emerald-800 px-1 rounded font-mono text-[11px]">
                        + const authHeader = req.headers.authorization;
                      </div>
                      <div className="bg-emerald-50 text-emerald-800 px-1 rounded font-mono text-[11px]">
                        + if (!authHeader || !authHeader.startsWith('Bearer ')) &#123;
                      </div>
                      <div className="bg-emerald-50 text-emerald-800 px-1 rounded font-mono text-[11px]">
                        +   res.status(401).json(&#123; error: 'Missing or malformed Authorization header' &#125;);
                      </div>
                      <div className="bg-emerald-50 text-emerald-800 px-1 rounded font-mono text-[11px]">
                        +   return;
                      </div>
                      <div className="bg-emerald-50 text-emerald-800 px-1 rounded font-mono text-[11px]">
                        + &#125;
                      </div>
                      <div className="text-[#6B6B6B] px-1 font-mono text-[11px]">
                        &nbsp; const token = authHeader.split(' ')[1];
                      </div>
                      <div className="bg-emerald-50 text-emerald-800 px-1 rounded font-mono text-[11px]">
                        + req.user = await verifyToken(token);
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="w-6 text-right pr-3 text-[#8E8E93] select-none text-[11px]">15</span>
                    <span className="pl-4"><span className="text-blue-600 font-medium">return</span> next();</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 text-right pr-3 text-[#8E8E93] select-none text-[11px]">16</span>
                    <span>&#125;</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-0.5">
                  <div className="text-[#8E8E93] italic">// rateLimiter.ts — Generated by CoreMind Agent</div>
                  <div className="flex items-start">
                    <span className="w-6 text-right pr-3 text-[#8E8E93] select-none text-[11px]">1</span>
                    <span><span className="text-blue-600 font-medium">import</span> &#123; Request, Response, NextFunction &#125; <span className="text-blue-600 font-medium">from</span> <span className="text-emerald-700">'express'</span>;</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 text-right pr-3 text-[#8E8E93] select-none text-[11px]">2</span>
                    <span><span className="text-blue-600 font-medium">export function</span> <span className="font-semibold text-neutral-900">rateLimiter</span>(options: &#123; max: number; windowMs: number &#125;) &#123;</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 text-right pr-3 text-[#8E8E93] select-none text-[11px]">3</span>
                    <span className="pl-4"><span className="text-blue-600 font-medium">return async</span> (req: Request, res: Response, next: NextFunction) =&gt; &#123;</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 text-right pr-3 text-[#8E8E93] select-none text-[11px]">4</span>
                    <span className="pl-8"><span className="text-blue-600 font-medium">const</span> key = `rate:$&#123;req.ip&#125;`;</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 text-right pr-3 text-[#8E8E93] select-none text-[11px]">5</span>
                    <span className="pl-8"><span className="text-[#8E8E93]">// Token bucket verification passed</span></span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 text-right pr-3 text-[#8E8E93] select-none text-[11px]">6</span>
                    <span className="pl-8">next();</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 text-right pr-3 text-[#8E8E93] select-none text-[11px]">7</span>
                    <span className="pl-4">&#125;;</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 text-right pr-3 text-[#8E8E93] select-none text-[11px]">8</span>
                    <span>&#125;</span>
                  </div>
                </div>
              )}
            </div>

            {/* Integrated Terminal Panel */}
            <div className="border-t border-[#E8E8E8] bg-[#F7F7F8] p-3">
              <div className="flex items-center justify-between mb-1.5 text-xs text-[#6B6B6B] font-mono">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#111111]" />
                  <span className="font-semibold text-[#111111]">zsh</span>
                  <span>~/auth-service</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-700 font-medium font-sans">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Tests passed (4/4)</span>
                </div>
              </div>

              <div className="bg-neutral-900 text-neutral-100 rounded-md p-2.5 font-mono text-[11px] leading-relaxed">
                <div className="text-neutral-400">$ pnpm test:auth</div>
                <div className="text-emerald-400">PASS tests/auth.test.ts (4 passed, 38ms)</div>
                <div className="text-neutral-300">Ready for commit.</div>
              </div>
            </div>
          </div>

          {/* 3. AI Assistant / Agent Panel */}
          <div className="hidden lg:flex lg:col-span-3 flex-col bg-[#F7F7F8] p-3 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#E8E8E8]">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#111111]">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>AI Assistant</span>
              </div>
              <span className="text-[10px] font-mono bg-white border border-[#E8E8E8] px-2 py-0.5 rounded text-[#6B6B6B]">
                Cmd+L
              </span>
            </div>

            {/* Task Prompt Box */}
            <div className="bg-white p-2.5 rounded-lg border border-[#E8E8E8] space-y-1.5 text-xs">
              <div className="text-[10px] font-mono uppercase text-[#8E8E93] font-semibold">
                Task in progress
              </div>
              <p className="text-[#111111] font-medium leading-snug">
                "Implement rate limiting middleware on /generate endpoint using Redis"
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                <span className="text-[10px] font-mono bg-[#F7F7F8] border border-[#E8E8E8] px-1.5 py-0.5 rounded text-[#6B6B6B]">
                  @auth.ts
                </span>
                <span className="text-[10px] font-mono bg-[#F7F7F8] border border-[#E8E8E8] px-1.5 py-0.5 rounded text-[#6B6B6B]">
                  @server.ts
                </span>
              </div>
            </div>

            {/* Step-by-Step Agent Plan */}
            <div className="space-y-1.5 flex-1">
              <div className="text-[10px] font-mono uppercase text-[#8E8E93] font-semibold">
                Agent Plan
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex items-start gap-2 p-2 rounded bg-white border border-[#E8E8E8]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-[11px] text-[#111111]">
                    Create rateLimiter.ts middleware
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2 rounded bg-white border border-[#E8E8E8]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-[11px] text-[#111111]">
                    Attach rate limiter in auth.ts
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2 rounded bg-white border border-blue-200">
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-blue-600 border-t-transparent animate-spin shrink-0 mt-0.5" />
                  <div className="text-[11px] text-[#111111] font-medium">
                    Run unit tests in terminal
                  </div>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 border-t border-[#E8E8E8]">
              <button
                type="button"
                className="w-full py-1.5 px-3 rounded-md bg-[#111111] hover:bg-neutral-800 text-white text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Accept All Changes</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
