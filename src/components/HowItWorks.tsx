import React from 'react';
import { HOW_IT_WORKS, type WorkflowStep } from '../data/product';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#F7F7F8] border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111]">
            From idea to implementation.
          </h2>
          <p className="mt-4 text-lg text-[#6B6B6B] leading-relaxed">
            A structured workflow designed to turn development goals into verified software changes.
          </p>
        </div>

        {/* Horizontal 4-step workflow grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS.map((stepItem: WorkflowStep) => (
            <div
              key={stepItem.step}
              className="bg-white rounded-xl border border-[#E8E8E8] p-6 text-left flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="text-sm font-mono font-bold text-[#8E8E93] mb-4">
                  {stepItem.step}
                </div>

                <h3 className="text-xl font-bold text-[#111111] tracking-tight mb-2">
                  {stepItem.title}
                </h3>

                <p className="text-sm text-[#111111] font-medium leading-relaxed mb-3">
                  {stepItem.description}
                </p>

                <p className="text-xs text-[#6B6B6B] leading-relaxed">
                  {stepItem.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
