import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Laptop,
  Smartphone,
  Code2,
  Layers,
  Terminal,
  Download,
  CheckCircle2,
  Sparkles,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ProductTab {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  ctaLink: string;
  mockupType: 'desktop' | 'mobile' | 'ide' | 'jetbrains' | 'cli';
}

export const ProductShowcase: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('desktop');

  const tabs: ProductTab[] = [
    {
      id: 'desktop',
      name: 'Desktop',
      icon: Laptop,
      tagline: 'Autonomous AI-Native Desktop IDE',
      description:
        'The complete desktop development environment built for high performance. Includes local AST indexing, real-time repo architecture graph, and end-to-end Quest execution.',
      highlights: [
        'Native Apple Silicon (ARM64), Windows, and Linux builds',
        'Automatic Repo Wiki & Architectural Memory',
        'Multi-file Quest Mode with built-in test sandbox',
        'Zero telemetry with local vector semantic search'
      ],
      ctaLabel: 'Download Desktop App',
      ctaLink: '/download',
      mockupType: 'desktop'
    },
    {
      id: 'mobile',
      name: 'Mobile',
      icon: Smartphone,
      tagline: 'Companion for On-The-Go Agent Monitoring',
      description:
        'Keep long-running agent workflows moving wherever you are. Receive real-time notifications, inspect generated specs, review diffs, and approve PR deployments.',
      highlights: [
        'Push notifications when agents require human approval',
        'Interactive diff viewer with comment threads',
        'One-tap PR creation and CI/CD status tracking',
        'Biometric authentication with enterprise SSO'
      ],
      ctaLabel: 'Get Mobile Companion',
      ctaLink: '/download#mobile',
      mockupType: 'mobile'
    },
    {
      id: 'ide',
      name: 'IDE Extension',
      icon: Code2,
      tagline: 'Supercharge VS Code and Cursor',
      description:
        'Bring the power of CoreMind directly into your existing editor. Seamlessly access Quest Mode, inline completions, and repo-wide agent reasoning without switching tools.',
      highlights: [
        'One-click install from Visual Studio Marketplace',
        'Low-latency inline completions powered by NVIDIA NIM',
        'Multi-root workspace context support',
        'Compatible with existing theme presets and keybindings'
      ],
      ctaLabel: 'Install for VS Code',
      ctaLink: '/download#vscode',
      mockupType: 'ide'
    },
    {
      id: 'jetbrains',
      name: 'JetBrains Plugin',
      icon: Layers,
      tagline: 'First-Class IntelliJ & PyCharm Plugin',
      description:
        'Deeply integrated into the JetBrains ecosystem. Works seamlessly with IntelliJ IDEA, WebStorm, PyCharm, GoLand, and CLion.',
      highlights: [
        'Native JetBrains tool window and gutter actions',
        'Deep PSI symbol and reference resolution',
        'Integrated refactoring with native rollback',
        'Automated test generation with JUnit and PyTest'
      ],
      ctaLabel: 'Install JetBrains Plugin',
      ctaLink: '/download#jetbrains',
      mockupType: 'jetbrains'
    },
    {
      id: 'cli',
      name: 'CLI',
      icon: Terminal,
      tagline: 'Headless Agent for Terminal & CI/CD',
      description:
        'The developer-first command line agent. Run autonomous migrations, triage failing GitHub Actions, and generate pull requests directly from your terminal or remote SSH session.',
      highlights: [
        'Single binary with zero system dependencies',
        'Run anywhere: macOS, Linux, WSL, Docker',
        'Headless mode with GitHub Actions and GitLab CI integration',
        'Interactive terminal UI with live reasoning stream'
      ],
      ctaLabel: 'Install CoreMind CLI',
      ctaLink: '/download#cli',
      mockupType: 'cli'
    }
  ];

  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <section className="py-20 sm:py-28 bg-neutral-50/60 border-y border-neutral-200/80">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider border border-emerald-200/60 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Multi-Platform Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950">
            Build Your Way
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Choose the form factor that fits your development workflow. CoreMind adapts seamlessly to wherever your team writes code.
          </p>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex justify-center mb-10 overflow-x-auto py-2">
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-neutral-200/60 border border-neutral-300/50 shadow-inner">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTabId(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-white text-neutral-950 font-semibold shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-600' : 'text-neutral-500'}`} />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Tab Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/90 shadow-[0_12px_36px_rgba(0,0,0,0.04)]"
          >
            {/* Left Copy Column */}
            <div className="lg:col-span-5 text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-neutral-100 text-neutral-800 text-xs font-semibold">
                <activeTab.icon className="w-3.5 h-3.5 text-emerald-600" />
                <span>{activeTab.name} Edition</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight leading-snug">
                {activeTab.tagline}
              </h3>

              <p className="text-neutral-600 text-base leading-relaxed">
                {activeTab.description}
              </p>

              {/* Highlights checklist */}
              <div className="space-y-3 pt-2">
                {activeTab.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <Link
                  to={activeTab.ctaLink}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-sm font-semibold shadow-xs transition-transform hover:scale-[1.02]"
                >
                  <Download className="w-4 h-4 text-white" />
                  <span>{activeTab.ctaLabel}</span>
                </Link>
              </div>
            </div>

            {/* Right Interactive Mockup Canvas */}
            <div className="lg:col-span-7">
              {activeTab.mockupType === 'desktop' && (
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 text-neutral-800 overflow-hidden shadow-sm font-mono text-xs">
                  <div className="px-4 py-2.5 bg-white flex items-center justify-between border-b border-neutral-200">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
                      <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
                      <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
                      <span className="ml-2 text-neutral-700 font-semibold">CoreMind Desktop — repo_wiki.md</span>
                    </div>
                    <span className="text-[10px] text-emerald-700 font-sans font-semibold px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200">
                      Live Graph Synced
                    </span>
                  </div>
                  <div className="p-5 space-y-3 text-left">
                    <div className="text-emerald-700 font-bold text-sm"># Repository Architecture Wiki</div>
                    <p className="text-neutral-600 text-xs">
                      Synchronized across 248 source files • 0 stale symbols detected
                    </p>
                    <div className="p-3 rounded-xl bg-white border border-neutral-200 text-xs text-neutral-700">
                      <div className="text-neutral-500 mb-1 font-semibold">Dependency Flow:</div>
                      <div>API Gateway → Auth Middleware → Token Verification → PostgreSQL Pool</div>
                    </div>
                    <div className="flex items-center justify-between pt-2 text-[11px] text-neutral-500">
                      <span>Last indexed: 2 seconds ago</span>
                      <span className="text-emerald-700 font-semibold">100% Type Coverage</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab.mockupType === 'mobile' && (
                <div className="max-w-sm mx-auto rounded-3xl border-2 border-neutral-300 bg-white text-neutral-900 overflow-hidden shadow-lg p-4 text-left">
                  <div className="flex justify-between items-center text-[10px] text-neutral-500 mb-3 px-1">
                    <span>9:41</span>
                    <span className="flex items-center gap-1">5G 100%</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 mb-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-emerald-600" /> CoreMind Agent #88
                      </span>
                      <span className="text-[10px] text-neutral-500">Just now</span>
                    </div>
                    <div className="text-xs font-bold text-neutral-950">
                      Pull Request #412 Ready for Approval
                    </div>
                    <div className="text-[11px] text-neutral-600">
                      Resolved database lock contention in billing cycle. 18 tests passed.
                    </div>
                    <div className="flex gap-2 pt-1">
                      <button className="flex-1 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors">
                        Approve &amp; Merge
                      </button>
                      <button className="px-3 py-1.5 rounded-lg bg-neutral-200 hover:bg-neutral-300 text-xs text-neutral-800 transition-colors">
                        View Diff
                      </button>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-100 text-[11px] text-neutral-600 flex items-center justify-between">
                    <span>3 active agents working in cloud</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                </div>
              )}

              {activeTab.mockupType === 'ide' && (
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 text-neutral-800 overflow-hidden shadow-sm text-left font-mono text-xs">
                  <div className="px-4 py-2.5 bg-white flex items-center justify-between border-b border-neutral-200">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600 font-bold">VS Code</span>
                      <span className="text-neutral-400">|</span>
                      <span className="text-neutral-700">CoreMind Copilot Extension</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-semibold">
                      v2.4.0 Enabled
                    </span>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="text-neutral-500 text-xs">// Press Cmd+Shift+K to summon CoreMind Agent</div>
                    <div className="p-3.5 rounded-xl bg-white border border-neutral-200 text-neutral-800 space-y-2">
                      <div className="flex items-center justify-between text-xs text-emerald-700 font-semibold">
                        <span>Inline Multi-Line Suggestion</span>
                        <span className="px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-600 font-mono">Tab</span>
                      </div>
                      <div className="text-neutral-700 font-mono text-xs leading-relaxed">
                        <span className="text-purple-600">async function</span> executeWithRetry(fn, attempts = 3) {'{'}
                        <br />
                        &nbsp;&nbsp;<span className="text-purple-600">return</span> pRetry(fn, {'{'} retries: attempts {'}'});
                        <br />
                        {'}'}
                      </div>
                    </div>
                    <div className="text-[11px] text-neutral-500 font-sans flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>45ms token latency via NVIDIA TensorRT acceleration</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab.mockupType === 'jetbrains' && (
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 text-neutral-800 overflow-hidden shadow-sm text-left font-mono text-xs">
                  <div className="px-4 py-2.5 bg-white flex items-center justify-between border-b border-neutral-200">
                    <div className="flex items-center gap-2">
                      <span className="text-red-600 font-bold">IntelliJ IDEA</span>
                      <span className="text-neutral-400">|</span>
                      <span className="text-neutral-700">CoreMind AI Plugin</span>
                    </div>
                    <span className="text-emerald-700 font-semibold text-[10px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">PSI Aware</span>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="p-3 rounded-xl bg-white border border-neutral-200 text-xs">
                      <div className="text-emerald-800 font-semibold mb-1">
                        Review Authentication Flow
                      </div>
                      <div className="text-neutral-600 text-xs font-sans leading-relaxed">
                        Inspected Spring Security filters. Identified 1 potential session fixation vulnerability and prepared automated patch.
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-neutral-600 font-sans">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Compatible with IntelliJ, PyCharm, WebStorm, GoLand</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab.mockupType === 'cli' && (
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 text-neutral-800 p-5 shadow-sm text-left font-mono text-xs space-y-2">
                  <div className="flex items-center gap-2 text-neutral-600 pb-2 border-b border-neutral-200">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" />
                    <span>coremind-cli v0.1.0 • zsh</span>
                  </div>
                  <div className="text-neutral-700">
                    $ <span className="font-semibold text-neutral-900">coremind quest &quot;upgrade postgres connection pool &amp; verify tests&quot;</span>
                  </div>
                  <div className="text-emerald-700 font-semibold">[agent] Initializing CoreMind Headless Agent...</div>
                  <div className="text-neutral-600 leading-relaxed">
                    [1/3] Parsing repository AST and configuration files... (0.12s)
                    <br />
                    [2/3] Applying patch to database/pool.go and config.env... (0.24s)
                    <br />
                    [3/3] Running go test ./... (all 34 tests passed)
                  </div>
                  <div className="p-2 rounded bg-emerald-50 border border-emerald-200 text-emerald-900 text-[11px] font-sans flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Pull request created: https://github.com/org/service/pull/89</span>
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
