import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Terminal,
  Files,
  Bot,
  CheckCircle2,
  ChevronRight,
  FolderTree,
  X
} from 'lucide-react';


interface IDEPreviewProps {
  showCallouts?: boolean;
  className?: string;
}

export const IDEPreview: React.FC<IDEPreviewProps> = ({
  showCallouts = true,
  className = ''
}) => {


  return (
    <div className={`relative w-full mx-auto ${className}`}>
      {/* Surrounding Ambient Glow (Ultra subtle white-to-blue light glow) */}
      <div
        className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-100/60 via-indigo-50/40 to-blue-100/60 blur-xl opacity-70 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main macOS Desktop Window Frame */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-white rounded-xl border border-neutral-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden text-left"
      >
        {/* macOS Titlebar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-50/90 border-b border-neutral-200/80 select-none">
          <div className="flex items-center gap-2">
            {/* Traffic Lights */}
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/40 block" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/40 block" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/40 block" />
            </div>

            {/* Breadcrumb / Window title */}
            <div className="hidden sm:flex items-center gap-2 ml-4 text-xs text-neutral-500 font-mono">
              <span className="font-semibold text-neutral-800">CoreMind</span>
              <span>—</span>
              <span className="text-neutral-600">auth-service</span>
              <span>—</span>
              <span className="text-neutral-400">main</span>
            </div>
          </div>

          {/* Quick Platform indicator badge */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">
              macOS Desktop Preview
            </span>
          </div>
        </div>

        {/* IDE Workspace Layout */}
        <div className="grid grid-cols-12 min-h-[460px] lg:min-h-[520px] bg-white divide-x divide-neutral-200/70 text-xs">
          {/* Column 1: Project Explorer Sidebar (Hidden on very small mobile) */}
          <div className="hidden md:flex md:col-span-3 lg:col-span-3 flex-col bg-neutral-50/50">
            <div className="px-3 py-2 border-b border-neutral-200/70 flex items-center justify-between text-neutral-700 font-medium">
              <div className="flex items-center gap-1.5">
                <FolderTree className="w-3.5 h-3.5 text-neutral-500" />
                <span className="tracking-tight uppercase text-[10px] font-semibold text-neutral-500">
                  Explorer
                </span>
              </div>
              <span className="text-[10px] text-neutral-400 font-mono">auth-service</span>
            </div>

            <div className="p-2 space-y-0.5 text-neutral-600 font-mono text-[11px] overflow-y-auto">
              <div className="flex items-center gap-1.5 py-1 px-1.5 rounded hover:bg-neutral-100/80 cursor-pointer font-medium text-neutral-800">
                <ChevronRight className="w-3 h-3 text-neutral-400 rotate-90" />
                <span>src</span>
              </div>
              <div className="pl-4 space-y-0.5">
                <div className="flex items-center justify-between py-1 px-1.5 rounded bg-blue-50/80 text-blue-900 font-medium cursor-pointer border-l-2 border-blue-600">
                  <span className="truncate">auth.ts</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                </div>
                <div className="flex items-center justify-between py-1 px-1.5 rounded hover:bg-neutral-100/80 text-neutral-700 cursor-pointer">
                  <span className="truncate">middleware.ts</span>
                </div>
                <div className="flex items-center justify-between py-1 px-1.5 rounded hover:bg-neutral-100/80 text-neutral-700 cursor-pointer">
                  <span className="truncate">jwt.service.ts</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" title="Modified" />
                </div>
                <div className="flex items-center justify-between py-1 px-1.5 rounded hover:bg-neutral-100/80 text-neutral-500 cursor-pointer">
                  <span className="truncate">database.ts</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 py-1 px-1.5 rounded hover:bg-neutral-100/80 text-neutral-700 cursor-pointer">
                <ChevronRight className="w-3 h-3 text-neutral-400" />
                <span>tests</span>
              </div>
              <div className="flex items-center gap-1.5 py-1 px-1.5 rounded hover:bg-neutral-100/80 text-neutral-500 cursor-pointer">
                <span className="pl-4">package.json</span>
              </div>
              <div className="flex items-center gap-1.5 py-1 px-1.5 rounded hover:bg-neutral-100/80 text-neutral-500 cursor-pointer">
                <span className="pl-4">tsconfig.json</span>
              </div>
            </div>

            {/* Semantic Index Status Bar */}
            <div className="mt-auto p-2.5 border-t border-neutral-200/70 bg-white/70">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span className="text-[10px] text-neutral-600 font-sans">
                  Codebase Index: <strong className="text-neutral-800">142 symbols indexed</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Editor Canvas + Terminal */}
          <div className="col-span-12 md:col-span-9 lg:col-span-6 flex flex-col bg-white">
            {/* Tab Bar */}
            <div className="flex items-center bg-neutral-50/70 border-b border-neutral-200/70 px-2 overflow-x-auto">
              <div className="flex items-center gap-2 px-3 py-2 bg-white border-r border-neutral-200/70 border-t-2 border-t-blue-600 text-neutral-900 font-mono text-[11px] font-medium shadow-2xs">
                <span>auth.ts</span>
                <X className="w-2.5 h-2.5 text-neutral-400" />
              </div>
              <div className="flex items-center gap-2 px-3 py-2 text-neutral-500 font-mono text-[11px] hover:text-neutral-800 cursor-pointer">
                <span>jwt.service.ts</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 text-neutral-500 font-mono text-[11px] hover:text-neutral-800 cursor-pointer">
                <span>middleware.ts</span>
              </div>
            </div>

            {/* Code Content Area */}
            <div className="p-4 font-mono text-[11px] leading-5 text-neutral-800 overflow-x-auto flex-1 select-none">
              <div className="text-neutral-400 italic mb-2">
                // CoreMind AI-Assisted Authentication Middleware
              </div>
              <div>
                <span className="text-blue-600 font-semibold">import</span> &#123; Request, Response, NextFunction &#125; <span className="text-blue-600 font-semibold">from</span> <span className="text-emerald-700">'express'</span>;
              </div>
              <div>
                <span className="text-blue-600 font-semibold">import</span> &#123; verifyToken &#125; <span className="text-blue-600 font-semibold">from</span> <span className="text-emerald-700">'./jwt.service'</span>;
              </div>
              <div className="h-2" />
              <div>
                <span className="text-blue-600 font-semibold">export async function</span> <span className="text-indigo-600 font-medium">authenticateRequest</span>(
              </div>
              <div className="pl-4">
                req: Request, res: Response, next: NextFunction
              </div>
              <div>): Promise&lt;<span className="text-blue-600">void</span>&gt; &#123;</div>
              <div className="pl-4">
                <span className="text-blue-600 font-semibold">const</span> authHeader = req.headers.authorization;
              </div>

              {/* Inline AI Suggestion Diff Card (Cmd+K Preview) */}
              <div className="my-2 p-2.5 rounded-lg border border-blue-200 bg-blue-50/60 space-y-1.5 shadow-xs">
                <div className="flex items-center justify-between text-[10px] text-blue-900 font-sans font-medium">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>CoreMind Inline Assist (Cmd+K): Verify Bearer format & token claims</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="px-1.5 py-0.5 rounded bg-blue-600 text-white font-mono text-[9px]">
                      Enter: Accept
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-neutral-200 text-neutral-700 font-mono text-[9px]">
                      Esc: Discard
                    </span>
                  </div>
                </div>

                <div className="bg-white p-2 rounded border border-blue-100 font-mono text-[10.5px] leading-relaxed">
                  <div className="text-emerald-700 bg-emerald-50/80 px-1 rounded">
                    + if (!authHeader || !authHeader.startsWith('Bearer ')) &#123;
                  </div>
                  <div className="text-emerald-700 bg-emerald-50/80 px-1 rounded">
                    +   res.status(401).json(&#123; error: 'Missing or malformed Authorization header' &#125;);
                  </div>
                  <div className="text-emerald-700 bg-emerald-50/80 px-1 rounded">
                    +   return;
                  </div>
                  <div className="text-emerald-700 bg-emerald-50/80 px-1 rounded">
                    + &#125;
                  </div>
                  <div className="text-neutral-700 px-1">
                    &nbsp; const token = authHeader.split(' ')[1];
                  </div>
                  <div className="text-emerald-700 bg-emerald-50/80 px-1 rounded">
                    + const payload = await verifyToken(token);
                  </div>
                </div>
              </div>

              <div className="pl-4">
                req.user = payload;
              </div>
              <div className="pl-4">
                <span className="text-blue-600 font-semibold">return</span> next();
              </div>
              <div>&#125;</div>
            </div>

            {/* Integrated Terminal Drawer */}
            <div className="border-t border-neutral-200 bg-neutral-50/70 p-2.5">
              <div className="flex items-center justify-between mb-1.5 text-[10px] text-neutral-600 font-mono font-medium">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-neutral-500" />
                  <span>zsh (Apple Silicon native)</span>
                  <span className="text-neutral-400">~/projects/auth-service</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-600">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Tests passed (4/4)</span>
                </div>
              </div>
              <div className="bg-neutral-900 text-neutral-100 rounded p-2 font-mono text-[10px] leading-relaxed">
                <div className="text-neutral-400">$ pnpm test:auth</div>
                <div className="text-emerald-400">PASS tests/auth.spec.ts (4 tests passing) [42ms]</div>
                <div className="text-neutral-300">Ready for compilation.</div>
              </div>
            </div>
          </div>

          {/* Column 3: AI Agent Panel (Hidden on small screen) */}
          <div className="hidden lg:flex lg:col-span-3 flex-col bg-neutral-50/40 p-3 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-200/70">
              <div className="flex items-center gap-1.5 text-neutral-800 font-semibold text-[11px]">
                <Bot className="w-3.5 h-3.5 text-blue-600" />
                <span>AI Agent Workspace</span>
              </div>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-blue-100/70 text-blue-700 font-medium">
                Autonomous Plan
              </span>
            </div>

            {/* Example Prompt Box */}
            <div className="bg-white p-2.5 rounded-lg border border-neutral-200 shadow-2xs space-y-1.5">
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">
                User Goal
              </span>
              <p className="text-[11px] text-neutral-800 font-medium leading-snug">
                "Add authentication to this application."
              </p>
            </div>

            {/* Agent Multi-step Execution Steps */}
            <div className="space-y-1.5 flex-1">
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">
                Execution Plan
              </span>

              <div className="space-y-1.5 text-[10.5px]">
                <div className="flex items-start gap-2 p-1.5 rounded bg-emerald-50/80 border border-emerald-100 text-emerald-900">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Step 1: Understand</span>
                    <p className="text-[10px] text-emerald-700">Scanned 14 source files & API routes</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-1.5 rounded bg-blue-50/80 border border-blue-100 text-blue-900">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Step 2: Coordinated Mod</span>
                    <p className="text-[10px] text-blue-700">Prepared changes in auth.ts & jwt.service.ts</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-1.5 rounded bg-neutral-100/70 border border-neutral-200 text-neutral-700">
                  <div className="w-3.5 h-3.5 rounded-full border border-neutral-400 flex items-center justify-center shrink-0 mt-0.5 text-[8px] font-bold">
                    3
                  </div>
                  <div>
                    <span className="font-semibold">Step 3: Test Verification</span>
                    <p className="text-[10px] text-neutral-500">Run unit test suite in sandbox</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkpoint Action */}
            <div className="pt-2 border-t border-neutral-200">
              <button
                type="button"
                className="w-full py-1.5 px-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-[11px] font-medium shadow-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Review Proposed Diffs (2 files)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer info strip on window */}
        <div className="px-4 py-1.5 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between text-[11px] text-neutral-500">
          <div className="flex items-center gap-3">
            <span>TypeScript 5.6</span>
            <span>UTF-8</span>
            <span>Spaces: 2</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>CoreMind Engine v0.1.0 (Apple Silicon)</span>
          </div>
        </div>
      </motion.div>

      {/* Structured Callouts (Visible on desktop) */}
      {showCallouts && (
        <div className="hidden xl:block">
          {/* Callout 1: Left - Explorer */}
          <div className="absolute -left-12 top-24 bg-white/95 backdrop-blur-sm border border-neutral-200/90 rounded-lg p-2.5 shadow-sm text-xs max-w-[200px] pointer-events-none">
            <div className="flex items-center gap-1.5 text-neutral-900 font-semibold mb-1">
              <Files className="w-3.5 h-3.5 text-blue-600" />
              <span>Project Explorer</span>
            </div>
            <p className="text-[11px] text-neutral-600 leading-tight">
              Fast file navigation with AST indexing and Git status indicators.
            </p>
          </div>

          {/* Callout 2: Center - Inline Assist */}
          <div className="absolute left-1/3 -top-6 bg-white/95 backdrop-blur-sm border border-blue-200 rounded-lg p-2.5 shadow-sm text-xs max-w-[220px] pointer-events-none">
            <div className="flex items-center gap-1.5 text-blue-700 font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>AI Coding Assistant</span>
            </div>
            <p className="text-[11px] text-neutral-600 leading-tight">
              Summon inline suggestions and diff previews directly in code (Cmd+K).
            </p>
          </div>

          {/* Callout 3: Right - AI Agent */}
          <div className="absolute -right-8 top-32 bg-white/95 backdrop-blur-sm border border-neutral-200/90 rounded-lg p-2.5 shadow-sm text-xs max-w-[210px] pointer-events-none">
            <div className="flex items-center gap-1.5 text-neutral-900 font-semibold mb-1">
              <Bot className="w-3.5 h-3.5 text-blue-600" />
              <span>Autonomous AI Agent</span>
            </div>
            <p className="text-[11px] text-neutral-600 leading-tight">
              Coordinates multi-file edits with clear planning and user sign-off.
            </p>
          </div>

          {/* Callout 4: Bottom - Terminal */}
          <div className="absolute left-8 -bottom-6 bg-white/95 backdrop-blur-sm border border-neutral-200/90 rounded-lg p-2.5 shadow-sm text-xs max-w-[220px] pointer-events-none">
            <div className="flex items-center gap-1.5 text-neutral-900 font-semibold mb-1">
              <Terminal className="w-3.5 h-3.5 text-blue-600" />
              <span>Integrated Terminal</span>
            </div>
            <p className="text-[11px] text-neutral-600 leading-tight">
              Native macOS zsh shell with AI command diagnostics.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
