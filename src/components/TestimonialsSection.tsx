import React from 'react';
import { Star, CheckCircle2, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        'After a few days, I prefer CoreMind over Windsurf—significantly more stable. Quest Mode shines and auto-generated Repo Wikis are superb.',
      author: 'Bishal Nandi',
      role: 'Growth Engineer & Full-Stack Developer',
      tag: 'Switched from Windsurf',
      avatarBg: 'bg-emerald-600'
    },
    {
      quote:
        'I switched from Cursor and Windsurf. Quest Mode handles specifications, testing, and multi-file refactors, while Repo Wiki keeps architectural memory rock-solid.',
      author: 'Charly Wargnier',
      role: 'Developer Advocate & Data Architect',
      tag: 'Switched from Cursor',
      avatarBg: 'bg-blue-600'
    },
    {
      quote:
        'A tricky benchmark concurrency bugfix stumped Cursor, Trae, and Claude Code. CoreMind reproduced it in a sandbox and solved it in about 20 minutes.',
      author: 'Santiago Valdarrama',
      role: 'Founder of Machine Learning School',
      tag: 'Complex Benchmark Fix',
      avatarBg: 'bg-purple-600'
    },
    {
      quote:
        'Coding should be complete autonomous workflows, not fragmented code snippets. CoreMind covers everything from technical spec planning through CI deployment.',
      author: 'Hamna Aslam',
      role: 'Engineering Lead & Systems Architect',
      tag: 'End-to-End Workflow',
      avatarBg: 'bg-amber-600'
    },
    {
      quote:
        'Quest Mode transformed the AI from a passive chat assistant into an active project executor. The auto-synced Repo Wiki solved codebase hallucinations.',
      author: 'Zixin Chen',
      role: 'Staff Infrastructure Engineer',
      tag: 'Active Project Executor',
      avatarBg: 'bg-indigo-600'
    },
    {
      quote:
        'Agent Mode is exceptional—it fixed deep type inference and ORM race issues that other tools, including Claude 3.7 Sonnet in Claude Code, couldn’t complete.',
      author: 'Saumya Awasthi',
      role: 'Senior Software Engineer',
      tag: 'Deep Debugging',
      avatarBg: 'bg-rose-600'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-neutral-200/80 overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider border border-emerald-200/60 mb-3">
            <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
            <span>Developer Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950">
            What have they accomplished with CoreMind?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Real-world tasks and verified feedback from developers and engineering teams worldwide.
          </p>
        </div>

        {/* 6 Grid Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-neutral-200/90 bg-neutral-50/40 p-7 sm:p-8 flex flex-col justify-between hover:bg-white hover:border-neutral-300 hover:shadow-lg transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-neutral-200/70 text-neutral-800">
                    {t.tag}
                  </span>
                  <Quote className="w-5 h-5 text-neutral-300" />
                </div>

                <p className="text-neutral-800 text-sm sm:text-base leading-relaxed font-normal">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-neutral-200/60 flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.avatarBg} text-white font-bold text-sm flex items-center justify-center shadow-xs shrink-0`}
                >
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-neutral-950 flex items-center gap-1.5">
                    <span>{t.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="text-xs text-neutral-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
