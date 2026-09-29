import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  Terminal,
  Sparkles
} from 'lucide-react';

interface AIEmployeeRole {
  id: string;
  roleTitle: string;
  badge: string;
  triggers: string[];
  headline: string;
  description: string;
  steps: {
    title: string;
    detail: string;
    status: 'completed' | 'running' | 'queued';
  }[];
  outputSummary: string;
}

export const CoreMindWake: React.FC = () => {
  const [activeRoleId, setActiveRoleId] = useState<string>('backend');

  const roles: AIEmployeeRole[] = [
    {
      id: 'backend',
      roleTitle: 'Backend Engineer Agent',
      badge: 'Autonomous Bugfix',
      triggers: ['"Fix a production bug"', '"Resolve unhandled exception"', '"Investigate 500 status on /checkout"'],
      headline: 'Fix a production bug',
      description:
        'Reproduce it in an isolated container, identify the root cause, and ship a minimal surgical fix with reliable regression tests.',
      steps: [
        {
          title: 'Reproduce Error in Sandbox',
          detail: 'Simulated 1,000 concurrent checkout requests and reproduced race condition in DB lock.',
          status: 'completed'
        },
        {
          title: 'Isolate Root Cause',
          detail: 'Pinpointed uncommitted transaction leak in src/services/checkout.ts:84.',
          status: 'completed'
        },
        {
          title: 'Generate Regression Test',
          detail: 'Wrote tests/concurrency/checkout_race_test.go confirming failure before fix.',
          status: 'completed'
        },
        {
          title: 'Apply Minimal Patch & Verify',
          detail: 'Wrapped transaction in defer rollback; all 42 tests passing with zero regressions.',
          status: 'completed'
        }
      ],
      outputSummary: 'Minimal fix committed to branch fix/checkout-race • PR #182 opened with full test proof'
    },
    {
      id: 'reviewer',
      roleTitle: 'Code Reviewer Agent',
      badge: 'Automated Audit',
      triggers: ['"Review a PR"', '"Check correctness & security"', '"Inspect edge cases"'],
      headline: 'Review a Pull Request',
      description:
        'Examine correctness, security, performance, and edge cases with clear, practical, actionable suggestions and inline patches.',
      steps: [
        {
          title: 'AST Diff Inspection',
          detail: 'Analyzed 12 modified files, 482 added lines, and 89 deleted lines.',
          status: 'completed'
        },
        {
          title: 'Security Vulnerability Scan',
          detail: 'Flagged unsanitized user query parameter in search router; suggested parameterized query.',
          status: 'completed'
        },
        {
          title: 'Memory & Complexity Analysis',
          detail: 'Identified O(n²) array search in hot path; provided O(n) hash set refactor diff.',
          status: 'completed'
        },
        {
          title: 'Publish Structured Review',
          detail: 'Posted constructive review with line-by-line comments and 1-click apply suggestions.',
          status: 'completed'
        }
      ],
      outputSummary: 'Review submitted with 2 security validations and 1 algorithmic improvement'
    },
    {
      id: 'feature',
      roleTitle: 'Feature Architect Agent',
      badge: 'End-to-End Delivery',
      triggers: ['"Deliver a feature"', '"Add Stripe subscription billing"', '"Implement user invites API"'],
      headline: 'Deliver a full feature',
      description:
        'Plan, spec, code, test, and open a complete PR end-to-end without constant micromanagement.',
      steps: [
        {
          title: 'Technical Spec Generation',
          detail: 'Created architectural design document with database migrations and route schemas.',
          status: 'completed'
        },
        {
          title: 'Multi-file Implementation',
          detail: 'Generated customer portal routes, webhook verification, and database models.',
          status: 'completed'
        },
        {
          title: 'Comprehensive Test Suite',
          detail: 'Added unit tests, integration tests, and mock Stripe API fixtures.',
          status: 'completed'
        },
        {
          title: 'Open Documented PR',
          detail: 'Created PR with architecture explanation, migration instructions, and screenshots.',
          status: 'completed'
        }
      ],
      outputSummary: 'Feature delivered in 9 minutes: 5 files created, 3 modified, 24 tests passed'
    },
    {
      id: 'devops',
      roleTitle: 'DevOps & Migration Agent',
      badge: 'Continuous Upgrades',
      triggers: ['"Upgrade to React 19"', '"Migrate to Node 22 LTS"', '"Fix CI/CD pipeline failure"'],
      headline: 'Automate Framework Migrations',
      description:
        'Upgrade deprecated dependencies, rewrite breaking API calls across the entire repo, and ensure the CI pipeline turns green.',
      steps: [
        {
          title: 'Scan Deprecation Warnings',
          detail: 'Identified 38 instances of legacy useMemo / componentWillReceiveProps usages.',
          status: 'completed'
        },
        {
          title: 'Batch Code Transformation',
          detail: 'Applied jscodeshift codemods and updated package lockfiles safely.',
          status: 'completed'
        },
        {
          title: 'Resolve Type Mismatches',
          detail: 'Fixed 6 strict TypeScript compilation errors introduced by new type definitions.',
          status: 'completed'
        },
        {
          title: 'Verify Build & CI Checks',
          detail: 'Ran full Docker build matrix; bundle size decreased by 14.2%.',
          status: 'completed'
        }
      ],
      outputSummary: 'Migration finished: 0 deprecation warnings remaining • All CI builds passed'
    }
  ];

  const activeRole = roles.find((r) => r.id === activeRoleId) || roles[0];

  return (
    <section className="py-20 sm:py-28 bg-neutral-50/50 border-b border-neutral-200/80">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider border border-emerald-200/60 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Autonomous Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950">
            CoreMind Agent Fleet
          </h2>
          <p className="mt-2 text-2xl sm:text-3xl font-bold text-neutral-800 tracking-tight">
            Autonomous AI Engineers, On the Job
          </p>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Delegate real development workloads to specialized autonomous agents. They reproduce bugs, audit code, implement features, and keep your software reliable.
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto py-2">
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-neutral-200/60 border border-neutral-300/50 shadow-inner">
            {roles.map((role) => {
              const isActive = role.id === activeRoleId;
              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setActiveRoleId(role.id)}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-white text-neutral-950 font-semibold shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100/50'
                  }`}
                >
                  <span>{role.roleTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Role Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/90 shadow-[0_12px_36px_rgba(0,0,0,0.03)]"
          >
            {/* Left Column: Role Details & Triggers */}
            <div className="lg:col-span-5 text-left space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {activeRole.badge}
                </span>
                <span className="text-xs text-neutral-400 font-mono">Agent Role</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
                  {activeRole.headline}
                </h3>
                <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
                  {activeRole.description}
                </p>
              </div>

              {/* Trigger Words chips */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono">
                  Trigger Words
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeRole.triggers.map((trigger, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-neutral-100 border border-neutral-200/80 text-xs font-medium text-neutral-800 font-mono"
                    >
                      {trigger}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom callout */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                <span>Autonomous decision checkpoints</span>
                <span className="text-emerald-600 font-medium font-mono">100% human-in-the-loop</span>
              </div>
            </div>

            {/* Right Column: Execution Trace Demo */}
            <div className="lg:col-span-7 bg-neutral-50/70 rounded-2xl p-5 sm:p-6 border border-neutral-200/80 flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-neutral-200 text-xs font-mono text-neutral-500">
                  <span className="flex items-center gap-2 text-neutral-900 font-semibold">
                    <Terminal className="w-4 h-4 text-emerald-600" />
                    <span>Live Execution Progress</span>
                  </span>
                  <span className="text-emerald-700 font-medium">Auto-Triage Active</span>
                </div>

                <div className="mt-4 space-y-3">
                  {activeRole.steps.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white border border-neutral-200/80 shadow-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-neutral-900">
                          {index + 1}. {step.title}
                        </div>
                        <div className="text-xs text-neutral-600 mt-0.5 leading-relaxed font-sans">
                          {step.detail}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-neutral-200">
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-950 font-sans flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{activeRole.outputSummary}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
