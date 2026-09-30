import React from 'react';
import { TRUST_STATEMENTS } from '../data/product';

export const ProductStatement: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#F7F7F8] border-y border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111]">
            {TRUST_STATEMENTS.heading}
          </h2>
        </div>

        {/* Three short statements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 max-w-5xl mx-auto">
          {TRUST_STATEMENTS.items.map((item) => (
            <div
              key={item.title}
              className="bg-white p-7 sm:p-8 rounded-xl border border-[#E8E8E8] shadow-2xs text-left flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-[#111111] mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
