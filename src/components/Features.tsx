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
  ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { FEATURES, type FeatureItem } from '../data/product';

export const Features: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-blue-600' };
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

  return (
    <section id="features" className="py-20 bg-neutral-50/60 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Capabilities
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            Everything you need to build.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            CoreMind combines standard desktop IDE fundamentals with deeply integrated, context-aware AI capabilities designed for real-world software engineering workflows.
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
              className="bg-white rounded-xl border border-neutral-200/90 p-6 shadow-xs hover:border-neutral-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between text-left group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50/70 border border-blue-100 flex items-center justify-center group-hover:bg-blue-100/80 transition-colors">
                    {getFeatureIcon(feature.icon)}
                  </div>
                  {feature.badge && (
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 border border-neutral-200/60">
                      {feature.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bullet details */}
                <ul className="mt-4 space-y-1.5 pt-3 border-t border-neutral-100">
                  {feature.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-xs text-neutral-500 flex items-start gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-neutral-100">
                <Link
                  to={`/features#${feature.id}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
