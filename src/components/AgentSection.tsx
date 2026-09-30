import React, { useState } from 'react';
import {
  ArrowRight,
  Check
} from 'lucide-react';
import { AGENT_STAGES, type AgentStage } from '../data/product';

export const AgentSection: React.FC = () => {
  const [selectedStageId, setSelectedStageId] = useState<string>('changes');

  const selectedStage = AGENT_STAGES.find((s) => s.id === selectedStageId) || AGENT_STAGES[3];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-medium text-[#6B6B6B] uppercase tracking-wider bg-[#F7F7F8] border border-[#E8E8E8] px-3 py-1 rounded-full">
            Agentic Development
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-[#111111]">
            An AI development partner inside your IDE.
          </h2>
          <p className="mt-4 text-lg text-[#6B6B6B] leading-relaxed">
            CoreMind is designed around an agentic development workflow. Instead of only generating code snippets, it can reason about development tasks, understand project context, and help execute a structured development workflow.
          </p>
        </div>

        {/* Workflow Stages Ribbon (User request → AI reasoning → Plan → Code changes → Verification) */}
        <div className="max-w-5xl mx-auto mb-10 overflow-x-auto pb-2">
          <div className="flex items-center justify-between min-w-[680px] p-2 bg-[#F7F7F8] border border-[#E8E8E8] rounded-xl">
            {AGENT_STAGES.map((stage: AgentStage, index: number) => {
              const isSelected = stage.id === selectedStageId;
              return (
                <React.Fragment key={stage.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedStageId(stage.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white text-[#111111] font-semibold border border-[#E8E8E8] shadow-2xs'
                        : 'text-[#6B6B6B] hover:text-[#111111] hover:bg-white/50'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono ${
                        isSelected
                          ? 'bg-[#111111] text-white'
                          : 'bg-[#E8E8E8] text-[#6B6B6B]'
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span>{stage.label}</span>
                  </button>

                  {index < AGENT_STAGES.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-[#8E8E93] shrink-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Large UI Mockup Container */}
        <div className="max-w-5xl mx-auto bg-white rounded-xl sm:rounded-2xl border border-[#E8E8E8] shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden text-left">
          {/* Mockup Header */}
          <div className="flex items-center justify-between px-5 py-3 bg-[#F7F7F8] border-b border-[#E8E8E8]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
              <span className="text-xs font-mono font-medium text-[#111111]">
                CoreMind Agent Pipeline
              </span>
              <span className="text-xs text-[#8E8E93]">/</span>
              <span className="text-xs text-[#6B6B6B] font-mono">{selectedStage.title}</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#6B6B6B]">
              <span className="bg-white border border-[#E8E8E8] px-2 py-0.5 rounded text-[11px]">
                Deterministic Checkpoints
              </span>
            </div>
          </div>

          {/* Mockup Body: Split view with Stage Details on Left, Interactive Preview on Right */}
          <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#E8E8E8]">
            {/* Left Detail Column */}
            <div className="md:col-span-5 p-6 sm:p-8 bg-white flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-semibold uppercase text-blue-600">
                  Stage Details
                </span>
                <h3 className="text-2xl font-bold text-[#111111] mt-1 mb-3 tracking-tight">
                  {selectedStage.title}
                </h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">
                  {selectedStage.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-[#E8E8E8]">
                  <div className="flex items-start gap-2.5 text-xs text-[#111111]">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Preserves existing code style and formatting standards</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#111111]">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Cross-file symbol and type relationship tracking</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#111111]">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Explicit approval checkpoints before touching disk</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8E8E8] flex items-center justify-between text-xs text-[#6B6B6B] font-mono">
                <span>Atomic Rollback: Enabled</span>
                <span className="text-emerald-700 font-medium">Safe Execution</span>
              </div>
            </div>

            {/* Right Interactive Code / Stage Output Panel */}
            <div className="md:col-span-7 p-6 sm:p-8 bg-[#F7F7F8] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#6B6B6B] font-mono pb-2 border-b border-[#E8E8E8] mb-4">
                  <span>Inspector Output</span>
                  <span className="text-[11px] bg-white border border-[#E8E8E8] px-2 py-0.5 rounded">
                    preview
                  </span>
                </div>

                <div className="bg-white rounded-lg border border-[#E8E8E8] p-4 font-mono text-xs leading-relaxed text-[#111111] shadow-2xs">
                  <pre className="whitespace-pre-wrap font-mono text-[12px] text-[#111111]">
                    {selectedStage.preview}
                  </pre>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between pt-4 border-t border-[#E8E8E8]">
                <div className="text-xs text-[#6B6B6B] font-mono">
                  Stage {AGENT_STAGES.findIndex((s) => s.id === selectedStageId) + 1} of {AGENT_STAGES.length}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      const idx = AGENT_STAGES.findIndex((s) => s.id === selectedStageId);
                      const nextIdx = (idx + 1) % AGENT_STAGES.length;
                      setSelectedStageId(AGENT_STAGES[nextIdx].id);
                    }}
                    className="px-3 py-1.5 rounded-md bg-[#111111] text-white text-xs font-medium hover:bg-neutral-800 transition-colors flex items-center gap-1.5"
                  >
                    <span>Next Stage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
