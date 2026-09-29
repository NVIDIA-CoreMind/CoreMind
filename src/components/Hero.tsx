import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Code2,
  GitBranch,
  Cpu,
  Layers,
  ArrowRight
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [metricIndex, setMetricIndex] = useState(0);
  const [activeMode, setActiveMode] = useState<'coding' | 'quest' | 'architect'>('quest');

  const metrics = [
    '🚀 Hackathon 2026 Project Showcase',
    '⚡ Context Precision: Multi-file AST graph indexing',
    '🤖 Autonomous Quest Mode: Goal → Code → Sandbox verification',
    '🔒 Local-First Privacy: Zero telemetry on private codebases'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setMetricIndex((prev) => (prev + 1) % metrics.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [metrics.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-20 sm:pt-14 sm:pb-24">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 text-center">
        {/* Metric Pill Badge (Rotating Carousel) */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200/90 bg-emerald-50/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)] text-xs sm:text-sm font-medium text-emerald-950">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <AnimatePresence mode="wait">
              <motion.span
                key={metricIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="font-medium text-emerald-900 tracking-tight"
              >
                {metrics[metricIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-950 max-w-5xl mx-auto leading-[1.12]">
          The AI-Native{' '}
          <span className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-emerald-800 bg-clip-text text-transparent">
            Autonomous IDE
          </span>{' '}
          for Modern Developers
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-normal">
          An autonomous software engineering environment. From natural language goals to verified multi-file code diffs, CoreMind coordinates semantic indexing, planning, coding, and automated test sandboxing.
        </p>

        {/* Hero Action Buttons */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => scrollToSection('download')}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-full shadow-[0_2px_12px_rgba(16,185,129,0.25)] transition-all hover:scale-[1.02] cursor-pointer"
          >
            <Download className="w-5 h-5 text-white" />
            <span>Download CoreMind</span>
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('demo')}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-neutral-800 bg-white hover:bg-neutral-50 active:bg-neutral-100 rounded-full border border-neutral-300 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors cursor-pointer"
          >
            <span>Explore Live Demo</span>
            <ArrowRight className="w-4 h-4 text-neutral-500" />
          </button>

          <a
            href="https://github.com/CoreMind-IDE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>Star on GitHub</span>
          </a>
        </div>

        {/* Tech Badges */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-neutral-500">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200/80">
            <Cpu className="w-3.5 h-3.5 text-emerald-600" />
            Apple Silicon Native
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200/80">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            Full AST Context Engine
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200/80">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            Claude 3.7 &amp; DeepSeek-R1
          </span>
        </div>
      </div>

      {/* Hero Interactive Stage (Live Product Demo Canvas) */}
      <div className="relative mt-12 sm:mt-16 w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Glowing Background Paths */}
        <div className="absolute inset-0 -top-16 pointer-events-none overflow-hidden select-none" aria-hidden="true">
          <svg
            className="w-full h-full opacity-50"
            viewBox="0 0 1200 650"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-50 480C220 520 440 280 620 180C800 80 1020 120 1250 80"
              stroke="#22c55e"
              strokeWidth="1.8"
              strokeOpacity="0.45"
            />
            <path
              d="M-20 120C180 80 340 340 560 420C780 500 1040 380 1220 460"
              stroke="#10b981"
              strokeWidth="1.8"
              strokeOpacity="0.35"
            />
          </svg>
        </div>

        {/* Live Product Demo Frame */}
        <div className="relative rounded-2xl bg-white border border-neutral-200/90 shadow-[0_24px_60px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
          {/* Window Title Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-neutral-50/90 border-b border-neutral-200/80 select-none">
            {/* macOS Traffic Lights */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/40 block" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/40 block" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/40 block" />

              <div className="hidden sm:flex items-center gap-2 ml-4 text-xs font-mono text-neutral-500">
                <span className="font-semibold text-neutral-900">CoreMind Studio</span>
                <span>/</span>
                <span>payment-orchestrator</span>
                <span>/</span>
                <span className="text-emerald-700 font-medium">quest-mode #104</span>
              </div>
            </div>

            {/* Mode Switcher */}
            <div className="flex items-center p-1 rounded-xl bg-neutral-200/70 text-xs font-medium">
              <button
                type="button"
                onClick={() => setActiveMode('quest')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all ${
                  activeMode === 'quest'
                    ? 'bg-white text-neutral-950 font-semibold shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Quest Mode</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveMode('coding')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all ${
                  activeMode === 'coding'
                    ? 'bg-white text-neutral-950 font-semibold shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <Code2 className="w-3.5 h-3.5 text-neutral-500" />
                <span>Editor</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveMode('architect')}
                className={`hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all ${
                  activeMode === 'architect'
                    ? 'bg-white text-neutral-950 font-semibold shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <GitBranch className="w-3.5 h-3.5 text-neutral-500" />
                <span>Architecture</span>
              </button>
            </div>
          </div>

          {/* IDE Stage Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] sm:min-h-[500px] bg-white divide-y lg:divide-y-0 lg:divide-x divide-neutral-200/70 text-left">
            {/* Left Column: Autonomous Agent Reasoning & Task Progress (5 cols) */}
            <div className="lg:col-span-5 bg-neutral-50/50 p-4 sm:p-5 flex flex-col justify-between">
              <div>
                {/* Active Quest Header */}
                <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-mono">
                      Quest in Progress
                    </span>
                  </div>
                  <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    AST Context v2.1
                  </span>
                </div>

                {/* Prompt Goal */}
                <div className="mt-3.5 p-3 rounded-xl bg-white border border-neutral-200/80 shadow-xs">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 font-mono">
                    User Objective
                  </div>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-neutral-900">
                    &ldquo;Migrate Stripe webhook handlers to idempotency keys with replay protection and add integration tests.&rdquo;
                  </p>
                </div>

                {/* Step-by-step Autonomous Execution Trace */}
                <div className="mt-4 space-y-2.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 font-mono">
                    Agent Execution Steps
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2.5 p-2 rounded-lg bg-emerald-50/70 border border-emerald-200/60">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-emerald-950">1. Analyzed Codebase &amp; AST</div>
                        <div className="text-emerald-700 text-[11px]">
                          Parsed 4 files: webhooks.ts, payment.service.ts, redis.ts, test_suite.ts
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 p-2 rounded-lg bg-emerald-50/70 border border-emerald-200/60">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-emerald-950">2. Generated Technical Specification</div>
                        <div className="text-emerald-700 text-[11px]">
                          Created atomic plan with Redis SETNX 24h expiration lock
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 p-2 rounded-lg bg-emerald-50/70 border border-emerald-200/60">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-emerald-950">3. Coordinated Multi-file Patch</div>
                        <div className="text-emerald-700 text-[11px]">
                          Updated webhook verification middleware and event dispatcher
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 p-2 rounded-lg bg-white border border-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-neutral-900">4. Regression Test Sandbox</div>
                        <div className="text-emerald-700 text-[11px]">
                          Executed 16 tests in container sandbox — 16/16 passed
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Decision Pill */}
              <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-neutral-600 font-mono">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Ready for Review</span>
                </div>
                <button
                  type="button"
                  onClick={() => scrollToSection('demo')}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                >
                  View Full Diff in IDE →
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Editor Canvas & Live Diff (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between bg-white">
              {/* File Tabs */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-200 bg-neutral-50/60 text-xs font-mono">
                <div className="flex items-center gap-1">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white border-t-2 border-emerald-600 text-neutral-900 font-semibold rounded-t">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>stripe_webhook.ts</span>
                    <span className="text-[10px] text-emerald-600 font-mono ml-1">+24 -4</span>
                  </div>
                  <div className="px-3 py-1.5 text-neutral-500 hover:text-neutral-800 cursor-pointer">
                    <span>idempotency.test.ts</span>
                  </div>
                </div>

                <span className="text-[11px] text-neutral-400">TypeScript 5.6</span>
              </div>

              {/* Code Canvas with Line Numbers & Real Syntax Diffs */}
              <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed overflow-x-auto text-neutral-800">
                <div className="space-y-1">
                  <div className="flex items-center text-neutral-400">
                    <span className="w-8 select-none text-neutral-300">24</span>
                    <span className="text-purple-600">export async function</span>{' '}
                    <span className="text-blue-600 ml-1">handleStripeWebhook</span>
                    <span>(req: Request, res: Response) {'{'}</span>
                  </div>

                  <div className="flex items-center text-neutral-400">
                    <span className="w-8 select-none text-neutral-300">25</span>
                    <span className="pl-4 text-purple-600">const</span>
                    <span className="text-neutral-800 ml-1">sig = req.headers[</span>
                    <span className="text-emerald-700">&apos;stripe-signature&apos;</span>
                    <span>];</span>
                  </div>

                  {/* Red deleted line */}
                  <div className="flex items-center bg-red-50/80 -mx-4 px-4 py-0.5 text-red-700">
                    <span className="w-8 select-none text-red-300">-26</span>
                    <span className="pl-4">// Old unshielded execution without idempotency checks</span>
                  </div>

                  {/* Added lines in light green */}
                  <div className="flex items-center bg-emerald-50/80 -mx-4 px-4 py-0.5 text-emerald-950 font-medium">
                    <span className="w-8 select-none text-emerald-600">+27</span>
                    <span className="pl-4 text-purple-600">const</span>
                    <span className="text-neutral-900 ml-1">idempotencyKey = req.headers[</span>
                    <span className="text-emerald-800">&apos;idempotency-key&apos;</span>
                    <span>];</span>
                  </div>

                  <div className="flex items-center bg-emerald-50/80 -mx-4 px-4 py-0.5 text-emerald-950 font-medium">
                    <span className="w-8 select-none text-emerald-600">+28</span>
                    <span className="pl-4 text-purple-600">const</span>
                    <span className="text-neutral-900 ml-1">acquired = </span>
                    <span className="text-purple-600 ml-1">await</span>
                    <span className="text-blue-600 ml-1">redis.setnx</span>
                    <span>(`idemp:${'{'}idempotencyKey{'}'}`, &apos;LOCKED&apos;, &apos;EX&apos;, 86400);</span>
                  </div>

                  <div className="flex items-center bg-emerald-50/80 -mx-4 px-4 py-0.5 text-emerald-950 font-medium">
                    <span className="w-8 select-none text-emerald-600">+29</span>
                    <span className="pl-4 text-purple-600">if</span>
                    <span> (!acquired) </span>
                    <span className="text-purple-600">return</span>
                    <span className="text-blue-600 ml-1">res.status(200).json</span>
                    <span>({'{'} duplicate: </span>
                    <span className="text-purple-600">true</span>
                    <span> {'}'});</span>
                  </div>

                  <div className="flex items-center text-neutral-400">
                    <span className="w-8 select-none text-neutral-300">30</span>
                    <span className="pl-4 text-purple-600">const</span>
                    <span className="text-neutral-800 ml-1">event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);</span>
                  </div>

                  <div className="flex items-center text-neutral-400">
                    <span className="w-8 select-none text-neutral-300">31</span>
                    <span className="pl-4 text-purple-600">await</span>
                    <span className="text-blue-600 ml-1">processWebhookEvent</span>
                    <span>(event);</span>
                  </div>

                  {/* Inline ghost code completion */}
                  <div className="flex items-center bg-neutral-50 -mx-4 px-4 py-1 text-neutral-400 italic">
                    <span className="w-8 select-none text-neutral-300">32</span>
                    <span className="pl-4 text-neutral-500">
                      await telemetry.recordSuccess(&apos;webhook.processed&apos;, {'{'} eventId: event.id {'}'});
                    </span>
                    <span className="ml-3 text-[10px] not-italic px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-sans font-semibold">
                      Tab to accept
                    </span>
                  </div>

                  <div className="flex items-center text-neutral-400">
                    <span className="w-8 select-none text-neutral-300">33</span>
                    <span>{'}'}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Integrated Mini Terminal */}
              <div className="border-t border-neutral-200 bg-neutral-100/90 text-neutral-700 p-3 sm:px-5 font-mono text-xs flex items-center justify-between">
                <div className="flex items-center gap-2 truncate">
                  <span className="text-emerald-700 font-bold">$</span>
                  <span className="text-neutral-700">coremind test</span>
                  <span className="text-emerald-700 font-semibold font-sans flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    16/16 tests passed in 0.42s
                  </span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-[11px] text-neutral-500 hidden sm:inline">Memory: 42MB</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-300 text-emerald-800 text-[10px] font-bold">
                    Clean AST
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
