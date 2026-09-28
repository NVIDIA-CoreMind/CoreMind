import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Download
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { DOWNLOAD_CONFIG } from '../data/product';


export const FeaturesPage: React.FC = () => {
  const detailedFeatures = [
    {
      id: 'ai-coding',
      title: 'AI Coding',
      tagline: 'Contextual code generation and inline transformation.',
      description:
        'Generate, modify, explain, and improve code using AI directly inside the development environment. CoreMind allows you to trigger inline prompts (Cmd+K) right where your cursor is, without context-switching to an external browser tab.',
      points: [
        'Multi-line inline completions triggered as you type',
        'Direct refactoring prompts with instant side-by-side diff previews',
        'Contextual explanation tooltips on functions and complex algorithms',
        'Automatic test generator matching your local assertion framework'
      ],
      codeSnippet: `// Example: Press Cmd+K on any function
async function validateSession(token: string) {
  // CoreMind AI: Added rate limiting & signature verification
  const decoded = await jwt.verify(token, process.env.JWT_SECRET);
  if (!decoded || decoded.exp < Date.now() / 1000) {
    throw new UnauthorizedError('Token has expired');
  }
  return decoded.sub;
}`
    },
    {
      id: 'codebase-understanding',
      title: 'Codebase Understanding',
      tagline: 'Deep semantic graph of your local project structure.',
      description:
        'Give AI context from your project so it can work with the code you are actually building. CoreMind runs an AST parser and semantic vector index directly on your machine, ensuring AI suggestions adhere to your internal APIs and models.',
      points: [
        'Local symbol resolution across all repository files',
        'Dynamic reference parsing for types, interfaces, and decorators',
        'Privacy-first architecture: codebase indexing runs locally',
        'Zero hallucinated imports by cross-checking your package.json'
      ],
      codeSnippet: `// CoreMind semantic context query:
// @file:src/models/user.model.ts
// @symbol:IUserProfile
const profile: IUserProfile = {
  id: user.id,
  email: user.email,
  permissions: ['read', 'write'] // matches actual type definition
};`
    },
    {
      id: 'ai-agent',
      title: 'AI Agent',
      tagline: 'Multi-step autonomous execution with human signoff.',
      description:
        'Allow CoreMind to work across files and assist with multi-step development tasks. Instead of editing one file at a time, the agent plans and carries out complex changes across routes, controllers, and tests with full transparency.',
      points: [
        'Step-by-step breakdown before any file is touched',
        'Full review checkpoint for every modified hunk',
        'Rollback safety with automated git checkpoints',
        'Interactive feedback loop during execution'
      ],
      codeSnippet: `Plan for: "Add user profile avatar upload"
1. [x] Install multer & types/multer
2. [x] Add upload middleware in src/middleware/upload.ts
3. [x] Update route handler in src/routes/user.routes.ts
4. [ ] Run integration test tests/upload.spec.ts`
    },
    {
      id: 'intelligent-debugging',
      title: 'Intelligent Debugging',
      tagline: 'Instant diagnosis from stack traces to bug fixes.',
      description:
        'Understand errors, investigate problems, and help developers resolve issues. CoreMind parses compiler errors, linter diagnostics, and runtime exceptions to pinpoint the exact failure line and offer verified remediation.',
      points: [
        'One-click diagnostic explanation from terminal and editor gutters',
        'Root cause analysis across async call stacks',
        'Compiler error auto-fix suggestions',
        'Memory leak and unhandled promise warning inspection'
      ],
      codeSnippet: `// Gutter Diagnostic: TypeScript Error TS2345
// Argument of type 'string | null' is not assignable to 'string'
- const userId = searchParams.get('id');
+ const rawId = searchParams.get('id');
+ if (!rawId) throw new BadRequestError('User ID required');
+ const userId: string = rawId;`
    },
    {
      id: 'multi-file-editing',
      title: 'Multi-file Editing',
      tagline: 'Synchronized changes across your entire project.',
      description:
        'Make coordinated changes across multiple files while keeping the project structure in context. Refactor an API signature, rename a database column, or update a theme token across 20 files in a single coherent operation.',
      points: [
        'Simultaneous signature updates across callers and callees',
        'Unified multi-file diff drawer',
        'Atomic save preventing broken intermediate repository states',
        'Selective file exclusion from proposed changeset'
      ],
      codeSnippet: `Modified Files:
• src/services/billing.ts (method signature changed)
• src/controllers/checkout.ts (updated 2 callsites)
• tests/billing.spec.ts (updated mock assertions)`
    },
    {
      id: 'integrated-terminal',
      title: 'Integrated Terminal',
      tagline: 'High-speed macOS shell with intelligent error inspection.',
      description:
        'Run development commands without leaving the CoreMind environment. Features native zsh/bash execution on macOS, persistent sessions, split panes, and AI command debugging when a script fails.',
      points: [
        'Native macOS pty support with full 24-bit ANSI colors',
        'Clickable error locations opening the file and line instantly',
        'AI command assistant: Explain failed commands and recommend flags',
        'Split terminal panes with persistent shell history'
      ],
      codeSnippet: `$ coremind dev
[ready] compiled client in 184ms
[error] Port 3000 in use by another process
> CoreMind Suggestion: Run with PORT=3001 or kill PID 4821`
    },
    {
      id: 'git-workflow',
      title: 'Git Workflow',
      tagline: 'Frictionless version control directly inside your editor.',
      description:
        'Work with source control directly inside the development environment. Inspect graphical diffs, stage individual hunks, create branches, and generate accurate conventional commit messages with AI.',
      points: [
        'Visual side-by-side diff comparison with syntax coloring',
        'Single-click hunk staging and line discarding',
        'AI commit message generator analyzing staged git changes',
        'Branch switcher and merge conflict resolution editor'
      ],
      codeSnippet: `$ git status
Changes to be committed:
  modified:   src/auth/jwt.ts
  new file:   src/middleware/rate-limit.ts

Commit message (AI generated):
"feat(auth): add rate limiting middleware and refresh token validation"`
    },
    {
      id: 'developer-first-interface',
      title: 'Developer-first Interface',
      tagline: 'Clean white canvas built for long focus sessions.',
      description:
        'Keep coding, AI assistance, project files, and development tools together in one workspace. Built with a pure light theme, clean borders, minimal typography, and zero visual clutter.',
      points: [
        'Uncluttered light theme designed for crisp readability',
        'Sub-millisecond typing latency on Apple Silicon',
        'Configurable layout presets (Editor-only, Split, Agent mode)',
        'Extensible keymaps supporting VS Code and Vim presets'
      ],
      codeSnippet: `Keymaps:
Cmd+K      -> Inline AI Prompt
Cmd+L      -> Open AI Assistant Drawer
Cmd+Shift+P -> Command Palette
Ctrl+\`     -> Toggle Integrated Terminal`
    }
  ];

  return (
    <div className="bg-white min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Page Hero */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            CoreMind Architecture
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950">
            A development environment built around your workflow.
          </h1>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            CoreMind is engineered from first principles to unite the responsiveness of a native macOS desktop IDE with deep semantic AI context.
          </p>
        </div>

        {/* Feature Sections List */}
        <div className="space-y-16">
          {detailedFeatures.map((feature, idx) => (
            <motion.section
              key={feature.id}
              id={feature.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-10 rounded-3xl border border-neutral-200 bg-white hover:border-neutral-300 transition-all shadow-2xs"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Description Col */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-mono text-xs font-bold">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wide">
                      {feature.tagline}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950">
                    {feature.title}
                  </h2>

                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>

                  <ul className="space-y-2 pt-2">
                    {feature.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Visual / Code Block */}
                <div className="lg:col-span-6">
                  <div className="rounded-xl border border-neutral-200 bg-neutral-50/70 p-4 font-mono text-xs leading-relaxed text-neutral-800 shadow-2xs overflow-x-auto">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-200 text-[11px] text-neutral-500">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                        <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                        <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                        <span className="ml-2 font-mono text-neutral-600">{feature.id}.spec</span>
                      </div>
                      <span className="text-[10px] font-sans font-medium px-2 py-0.5 rounded bg-white border border-neutral-200 text-neutral-600">
                        Live Preview
                      </span>
                    </div>

                    <pre className="text-neutral-800 whitespace-pre-wrap font-mono text-[11.5px]">
                      {feature.codeSnippet}
                    </pre>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Bottom CTA on Features Page */}
        <div className="mt-20 p-8 rounded-2xl border border-neutral-200 bg-neutral-50 text-center">
          <h3 className="text-2xl font-bold text-neutral-900">
            Experience CoreMind on your Mac
          </h3>
          <p className="mt-2 text-sm text-neutral-600 max-w-lg mx-auto">
            Available as a native Apple Silicon release. Get started in minutes with zero configuration.
          </p>
          <div className="mt-6">
            <Link
              to="/download"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold shadow-xs transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download for macOS (v{DOWNLOAD_CONFIG.macos.version})</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
