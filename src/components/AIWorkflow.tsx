import React from 'react';
import { motion } from 'framer-motion';
import {
  FolderTree,
  Binary,
  Brain,
  FileCode2,
  UserCheck,
  CheckCircle2,
  Sparkles,
  GitPullRequest
} from 'lucide-react';
import { AI_UNDERSTANDING_WORKFLOW, AI_AGENT_WORKFLOW } from '../data/product';

export const AIWorkflow: React.FC = () => {
  const getWorkflowIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FolderTree className="w-5 h-5 text-emerald-600" />;
      case 1:
        return <Binary className="w-5 h-5 text-emerald-700" />;
      case 2:
        return <Brain className="w-5 h-5 text-emerald-600" />;
      case 3:
        return <FileCode2 className="w-5 h-5 text-emerald-700" />;
      case 4:
        return <UserCheck className="w-5 h-5 text-emerald-800" />;
      case 5:
        return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <div id="architecture" className="space-y-24 py-24 bg-white border-b border-neutral-200/60">
      {/* SECTION 1: CONTEXT ENGINE & AST PIPELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/80 font-mono">
            System Architecture
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950">
            Semantic AST &amp; Context Pipeline
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            Instead of treating code as isolated text snippets, CoreMind indexes your entire repository's symbol graph to ensure multi-file reasoning respects project types and dependencies.
          </p>
        </div>

        {/* Visual Workflow Diagram */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {AI_UNDERSTANDING_WORKFLOW.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-neutral-50/50 rounded-2xl border border-neutral-200/90 p-5 shadow-xs hover:border-emerald-400 hover:bg-white transition-all text-left flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-neutral-400 group-hover:text-emerald-700 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200/80 flex items-center justify-center shadow-2xs">
                      {getWorkflowIcon(index)}
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-neutral-950 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50/70 p-5 text-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>CoreMind Codebase-Aware Architecture</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Maintains localized AST symbol graphs for your entire workspace. AI proposals conform strictly to existing project types, configuration files, and custom helper abstractions.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: AI AGENT WORKFLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/80 font-mono">
            Autonomous Execution
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950">
            From Goal to Verified Pull Request
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            The CoreMind AI Agent orchestrates multi-file analysis, generates atomic patches, and executes test suites in isolated sandboxes.
          </p>
        </div>

        {/* Example Request Demonstration Canvas */}
        <div className="bg-white rounded-3xl border border-neutral-200 shadow-sm overflow-hidden text-left">
          {/* Header Bar */}
          <div className="px-6 py-4 bg-neutral-50 border-b border-neutral-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] text-neutral-500 font-mono uppercase tracking-wider font-bold">
                Agent Task Scenario
              </span>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <span className="text-sm font-bold text-neutral-900 font-mono">
                  Objective:
                </span>
                <span className="text-sm text-emerald-800 font-mono bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                  &ldquo;Add authentication &amp; role-based guards with unit tests.&rdquo;
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-600 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>18 workspace files monitored</span>
            </div>
          </div>

          {/* Step Progression Grid */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              {AI_AGENT_WORKFLOW.map((step, idx) => (
                <div
                  key={step.phase}
                  className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/40 hover:bg-white hover:border-emerald-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2.5">
                      <span className="font-mono text-neutral-400 font-bold text-xs">0{idx + 1}</span>
                      <span className="px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 font-bold text-[10px] uppercase tracking-wide">
                        {step.phase}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-neutral-950 mb-1">
                      {step.title}
                    </h4>

                    <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-neutral-200/60 text-[11px] text-neutral-500 font-mono">
                    {step.detail}
                  </div>
                </div>
              ))}
            </div>

            {/* Realistic Agent Multi-File Diff Preview */}
            <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50/70 p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 font-mono">
                  <GitPullRequest className="w-4 h-4 text-emerald-600" />
                  <span>Agent Proposed Patches (3 files modified)</span>
                </div>
                <span className="text-[11px] text-neutral-500 font-mono">
                  Diff review before write
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3.5 bg-white rounded-xl border border-neutral-200 shadow-2xs">
                  <div className="flex items-center justify-between text-neutral-900 font-bold pb-2 border-b border-neutral-100">
                    <span className="truncate">src/routes/auth.routes.ts</span>
                    <span className="text-emerald-600 text-[10px] font-bold">+ New File</span>
                  </div>
                  <div className="mt-2.5 text-[11px] text-neutral-600 space-y-1">
                    <div>+ POST /api/v1/auth/login</div>
                    <div>+ POST /api/v1/auth/register</div>
                    <div>+ POST /api/v1/auth/refresh</div>
                  </div>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-neutral-200 shadow-2xs">
                  <div className="flex items-center justify-between text-neutral-900 font-bold pb-2 border-b border-neutral-100">
                    <span className="truncate">src/middleware/auth.guard.ts</span>
                    <span className="text-blue-600 text-[10px] font-bold">~ Modified</span>
                  </div>
                  <div className="mt-2.5 text-[11px] text-neutral-600 space-y-1">
                    <div>+ Bearer token parser</div>
                    <div>+ Role verification guard</div>
                    <div>- Legacy fallback</div>
                  </div>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-neutral-200 shadow-2xs">
                  <div className="flex items-center justify-between text-neutral-900 font-bold pb-2 border-b border-neutral-100">
                    <span className="truncate">tests/auth.spec.ts</span>
                    <span className="text-emerald-600 text-[10px] font-bold">+ New Tests</span>
                  </div>
                  <div className="mt-2.5 text-[11px] text-neutral-600 space-y-1">
                    <div>+ Reject expired JWT test</div>
                    <div>+ Success token refresh test</div>
                    <div>+ 5 unit assertions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
