import React from 'react';
import { TECHNOLOGIES, type TechItem } from '../data/product';
import { Cpu, Code2, Layers, Brain, HardDrive } from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const getTechIcon = (title: string) => {
    switch (title) {
      case 'Electron':
        return <Layers className="w-5 h-5 text-[#111111]" />;
      case 'React':
        return <Code2 className="w-5 h-5 text-[#111111]" />;
      case 'TypeScript':
        return <Cpu className="w-5 h-5 text-[#111111]" />;
      case 'AI Models':
        return <Brain className="w-5 h-5 text-[#111111]" />;
      case 'Local Development':
        return <HardDrive className="w-5 h-5 text-[#111111]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#111111]" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111]">
            Built with modern technology.
          </h2>
          <p className="mt-4 text-lg text-[#6B6B6B] leading-relaxed">
            Engineered from core desktop primitives and strict type systems for peak reliability and developer speed.
          </p>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {TECHNOLOGIES.map((tech: TechItem) => (
            <div
              key={tech.title}
              className="bg-white rounded-xl border border-[#E8E8E8] p-6 text-left flex flex-col justify-between shadow-2xs hover:border-[#111111]/30 transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#F7F7F8] border border-[#E8E8E8] flex items-center justify-center mb-4">
                  {getTechIcon(tech.title)}
                </div>

                <div className="text-[10px] font-mono text-[#8E8E93] uppercase font-semibold mb-1">
                  {tech.tag}
                </div>

                <h3 className="text-lg font-bold text-[#111111] tracking-tight mb-2">
                  {tech.title}
                </h3>

                <p className="text-sm font-medium text-[#111111] leading-snug mb-2">
                  {tech.description}
                </p>

                <p className="text-xs text-[#6B6B6B] leading-relaxed">
                  {tech.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
