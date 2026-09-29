import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Cloud,
  Copy,
  Check,
  ArrowRight,
  Cpu
} from 'lucide-react';

export const AgentIntegration: React.FC = () => {
  const [copiedSdk, setCopiedSdk] = useState(false);
  const [copiedApi, setCopiedApi] = useState(false);

  const sdkCode = `import { CoreMindAgent, createWorkspace } from "@coremind/sdk";

// Initialize autonomous agent with repository context
const agent = new CoreMindAgent({
  apiKey: process.env.COREMIND_API_KEY,
  workspace: createWorkspace("./my-project"),
  capabilities: ["ast_analysis", "test_sandbox", "git_patch"]
});

// Execute end-to-end task
const result = await agent.solve({
  prompt: "Refactor auth middleware to use JWT with replay protection"
});

console.log(\`Pull Request created: \${result.pullRequestUrl}\`);`;

  const apiCode = `curl -X POST https://api.coremind.dev/v1/agents/dispatch \\
  -H "Authorization: Bearer $COREMIND_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "repository": "github.com/my-org/core-service",
    "role": "backend-engineer-waker",
    "trigger": "issue_assigned",
    "task": "Fix memory leak in websocket connection pool"
  }'`;

  const handleCopy = (code: string, setCopied: (v: boolean) => void) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider border border-emerald-200/60 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Developer Platform</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950">
            Integrate CoreMind Agent into your products and systems
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Build product experiences with the Agent SDK, or create background engineering automation with Cloud Agents APIs.
          </p>
        </div>

        {/* Dual Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Card 1: CoreMind Agent SDK */}
          <div className="rounded-3xl border border-neutral-200/90 bg-neutral-50/40 p-7 sm:p-9 shadow-xs flex flex-col justify-between hover:bg-white hover:border-neutral-300 hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-emerald-700 font-semibold px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                  npm i @coremind/sdk
                </span>
              </div>

              <h3 className="text-2xl font-bold text-neutral-950 tracking-tight">
                CoreMind Agent SDK
              </h3>

              <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
                The agent capabilities that power CoreMind products — proven through long-term real-world use — are now available as an SDK. Build a new agent from scratch in minutes, or embed agent capabilities into the product you already have.
              </p>

              {/* Code Window */}
              <div className="mt-6 rounded-2xl bg-white text-neutral-800 border border-neutral-200 overflow-hidden font-mono text-xs shadow-2xs">
                <div className="px-4 py-2.5 bg-neutral-50 flex items-center justify-between border-b border-neutral-200">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block" />
                    <span className="ml-2 text-neutral-600 font-semibold text-[11px]">agent-runner.ts</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(sdkCode, setCopiedSdk)}
                    className="p-1.5 text-neutral-500 hover:text-neutral-900 rounded transition-colors"
                    aria-label="Copy SDK code"
                  >
                    {copiedSdk ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <pre className="p-4 overflow-x-auto text-[11px] sm:text-xs leading-relaxed text-neutral-800">
                  <code>{sdkCode}</code>
                </pre>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-200/80 flex items-center justify-between">
              <Link
                to="/docs?section=ai-agent&article=agent-overview"
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 hover:text-emerald-600 transition-colors"
              >
                <span>View Agent SDK Documentation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: CoreMind Cloud Agents */}
          <div className="rounded-3xl border border-neutral-200/90 bg-neutral-50/40 p-7 sm:p-9 shadow-xs flex flex-col justify-between hover:bg-white hover:border-neutral-300 hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700">
                  <Cloud className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-blue-700 font-semibold px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200">
                  REST &amp; Webhooks
                </span>
              </div>

              <h3 className="text-2xl font-bold text-neutral-950 tracking-tight">
                CoreMind Cloud Agents
              </h3>

              <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
                Connect your GitHub or GitLab repositories to headless autonomous agent clusters. Automatically triage bug reports, reproduce customer issues, test pull requests, and maintain internal dependencies.
              </p>

              {/* Code Window */}
              <div className="mt-6 rounded-2xl bg-white text-neutral-800 border border-neutral-200 overflow-hidden font-mono text-xs shadow-2xs">
                <div className="px-4 py-2.5 bg-neutral-50 flex items-center justify-between border-b border-neutral-200">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block" />
                    <span className="ml-2 text-neutral-600 font-semibold text-[11px]">curl -X POST /v1/agents/dispatch</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(apiCode, setCopiedApi)}
                    className="p-1.5 text-neutral-500 hover:text-neutral-900 rounded transition-colors"
                    aria-label="Copy API curl command"
                  >
                    {copiedApi ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <pre className="p-4 overflow-x-auto text-[11px] sm:text-xs leading-relaxed text-neutral-800">
                  <code>{apiCode}</code>
                </pre>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-200/80 flex items-center justify-between">
              <Link
                to="/enterprise"
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 hover:text-emerald-600 transition-colors"
              >
                <span>Explore Cloud Agents Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
