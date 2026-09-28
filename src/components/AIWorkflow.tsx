import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
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
        return <FolderTree className="w-5 h-5 text-blue-600" />;
      case 1:
        return <Binary className="w-5 h-5 text-indigo-600" />;
      case 2:
        return <Brain className="w-5 h-5 text-purple-600" />;
      case 3:
        return <FileCode2 className="w-5 h-5 text-blue-600" />;
      case 4:
        return <UserCheck className="w-5 h-5 text-amber-600" />;
      case 5:
        return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div id="ai-coding" className="space-y-24 py-20 bg-white border-b border-neutral-100">
      {/* SECTION 1: AI CODING & PROJECT UNDERSTANDING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Contextual Intelligence
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            AI that understands your project.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            CoreMind is designed around contextual AI assistance. Instead of treating code files as isolated text snippets, CoreMind maps the semantic graph of your codebase so AI suggestions respect your actual architecture.
          </p>
        </div>

        {/* Visual Workflow Diagram */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-neutral-200 -translate-y-1/2 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative z-10">
            {AI_UNDERSTANDING_WORKFLOW.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-xl border border-neutral-200/90 p-5 shadow-xs hover:border-blue-300 hover:shadow-sm transition-all text-left flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold text-neutral-400 group-hover:text-blue-600 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-neutral-50 border border-neutral-200/60 flex items-center justify-center">
                      {getWorkflowIcon(index)}
                    </div>
                  </div>

                  <h3 className="text-sm font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
                  <span>Phase {index + 1}</span>
                  {index < 5 ? (
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-300 hidden lg:block" />
                  ) : (
                    <span className="text-emerald-600 font-medium">Ready</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Comparison Card: Context-Rich vs Blind Prompting */}
        <div className="mt-12 bg-neutral-50/80 rounded-2xl border border-neutral-200/80 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-neutral-500">
                <span className="w-2 h-2 rounded-full bg-neutral-400" />
                <span>Traditional Generic Coding Assistants</span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Operate on single isolated files or arbitrary copy-pasted snippets. They frequently hallucinate non-existent imports, violate repository conventions, and ignore changes happening in adjacent service modules.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-700">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>CoreMind Codebase-Aware Architecture</span>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed font-medium">
                Maintains a localized AST and symbol graph for your entire repository. AI proposals conform strictly to existing project types, configuration files, and custom helper abstractions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: AI AGENT WORKFLOW (From idea to implementation) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            Multi-Step Automation
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            From idea to implementation.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Complex development tasks rarely live within a single function. The CoreMind AI Agent breaks high-level engineering objectives into structured, coordinated steps across multiple files.
          </p>
        </div>

        {/* Example Request Demonstration Canvas */}
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden text-left">
          {/* Header Bar */}
          <div className="px-6 py-4 bg-neutral-50 border-b border-neutral-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs text-neutral-500 font-mono uppercase tracking-wider">
                Agent Task Scenario
              </span>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-sm font-semibold text-neutral-900 font-mono">
                  User prompt:
                </span>
                <span className="text-sm text-blue-700 font-mono bg-blue-50 px-2 py-0.5 rounded border border-blue-200/80">
                  "Add authentication to this application."
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Workspace: 18 files monitored</span>
            </div>
          </div>

          {/* Step Progression Grid */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              {AI_AGENT_WORKFLOW.map((step, idx) => (
                <div
                  key={step.phase}
                  className="p-4 rounded-xl border border-neutral-200 bg-white hover:border-blue-300 hover:bg-neutral-50/50 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-mono text-neutral-400 font-medium">0{idx + 1}</span>
                      <span className="px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 font-semibold text-[10px] uppercase tracking-wide">
                        {step.phase}
                      </span>
                    </div>

                    <h4 className="text-sm font-semibold text-neutral-900 mb-1">
                      {step.title}
                    </h4>

                    <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-neutral-100 text-[11px] text-neutral-500 font-mono">
                    {step.detail}
                  </div>
                </div>
              ))}
            </div>

            {/* Realistic Agent Multi-File Diff Preview */}
            <div className="mt-8 rounded-xl border border-neutral-200 bg-neutral-50/70 p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-800">
                  <GitPullRequest className="w-4 h-4 text-blue-600" />
                  <span>Agent Proposed Changes (3 files affected)</span>
                </div>
                <span className="text-[11px] text-neutral-500 font-mono">
                  All changes require developer confirmation
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3 bg-white rounded-lg border border-neutral-200 shadow-2xs">
                  <div className="flex items-center justify-between text-neutral-900 font-medium pb-2 border-b border-neutral-100">
                    <span className="truncate">src/routes/auth.routes.ts</span>
                    <span className="text-emerald-600 text-[10px] font-bold">+ New File</span>
                  </div>
                  <div className="mt-2 text-[11px] text-neutral-600 space-y-1">
                    <div>+ POST /api/v1/auth/login</div>
                    <div>+ POST /api/v1/auth/register</div>
                    <div>+ POST /api/v1/auth/refresh</div>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-lg border border-neutral-200 shadow-2xs">
                  <div className="flex items-center justify-between text-neutral-900 font-medium pb-2 border-b border-neutral-100">
                    <span className="truncate">src/middleware/auth.guard.ts</span>
                    <span className="text-blue-600 text-[10px] font-bold">~ Modified</span>
                  </div>
                  <div className="mt-2 text-[11px] text-neutral-600 space-y-1">
                    <div>+ Bearer token parser</div>
                    <div>+ Role verification hook</div>
                    <div>- Legacy session fallback</div>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-lg border border-neutral-200 shadow-2xs">
                  <div className="flex items-center justify-between text-neutral-900 font-medium pb-2 border-b border-neutral-100">
                    <span className="truncate">tests/auth.spec.ts</span>
                    <span className="text-emerald-600 text-[10px] font-bold">+ New Tests</span>
                  </div>
                  <div className="mt-2 text-[11px] text-neutral-600 space-y-1">
                    <div>+ Reject expired JWT test</div>
                    <div>+ Success token refresh test</div>
                    <div>+ 5 unit assertions</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical note */}
            <p className="mt-4 text-center text-xs text-neutral-400">
              Illustration of the CoreMind desktop agent workflow. CoreMind runs locally on your Mac and presents review diffs before touching disk files.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
