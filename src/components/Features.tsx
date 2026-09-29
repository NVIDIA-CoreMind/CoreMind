import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Brain,
  Workflow,
  Bug,
  Files,
  Terminal,
  GitBranch,
  Layout,
  ArrowRight
} from 'lucide-react';
import { FEATURES, type FeatureItem } from '../data/product';

export const Features: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-emerald-600' };
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Brain':
        return <Brain {...props} />;
      case 'Workflow':
        return <Workflow {...props} />;
      case 'Bug':
        return <Bug {...props} />;
      case 'Files':
        return <Files {...props} />;
      case 'Terminal':
        return <Terminal {...props} />;
      case 'GitBranch':
        return <GitBranch {...props} />;
      case 'Layout':
        return <Layout {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="features" className="py-24 bg-neutral-50/60 border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/80 font-mono">
            Hackathon Capabilities
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950">
            Engineered for Autonomous Coding
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            CoreMind combines native desktop IDE performance with deeply integrated AST semantic graphs and agentic workflows.
          </p>
        </div>

        {/* 8 Features Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature: FeatureItem, index: number) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl border border-neutral-200/90 p-6 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between text-left group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                    {getFeatureIcon(feature.icon)}
                  </div>
                  {feature.badge && (
                    <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 border border-neutral-200">
                      {feature.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-neutral-950 group-hover:text-emerald-700 transition-colors">
                  {feature.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bullet details */}
                <ul className="mt-4 space-y-2 pt-3.5 border-t border-neutral-100">
                  {feature.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-xs text-neutral-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() => scrollToSection('demo')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  <span>See in action</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
