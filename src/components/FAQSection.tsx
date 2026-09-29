import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'How do I get started?',
      answer:
        'Download the official installer for macOS, Windows, or Linux, or run our one-line terminal command. Once opened, select "Open Folder" on any existing Git project — CoreMind automatically builds a local semantic index of your workspace with zero configuration.'
    },
    {
      question: 'What programming languages does CoreMind support?',
      answer:
        'CoreMind provides first-class support for all major modern languages: TypeScript, JavaScript, Python, Go, Rust, C/C++, Java, C#, PHP, Swift, and Kotlin. Its language server protocol (LSP) integration ensures full type checking and accurate AST refactoring across all frameworks.'
    },
    {
      question: 'Which AI models power CoreMind?',
      answer:
        'CoreMind integrates the world’s leading reasoning and programming models: Claude 3.7 Sonnet, DeepSeek-R1, OpenAI GPT-4o, and NVIDIA Nemotron. You can also connect your own custom API keys or run completely private local models using Ollama and LM Studio.'
    },
    {
      question: "How does CoreMind's pricing and trial work?",
      answer: (
        <div className="space-y-2">
          <p>
            CoreMind provides a free 2-week Pro Trial with 1,000 complimentary fast credits upon download — no credit card required.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-600">
            <li>
              <strong>Free Plan:</strong> Unlimited basic completions and local code assistance.
            </li>
            <li>
              <strong>Pro Plan ($20/mo):</strong> High-volume fast credits, priority reasoning models, and unlimited Quest Mode agent runs.
            </li>
            <li>
              <strong>Team &amp; Enterprise:</strong> Centralized team credits, SSO, dedicated VPC hosting, and zero-retention compliance guarantees.
            </li>
          </ul>
        </div>
      )
    },
    {
      question: 'Is my codebase private and secure?',
      answer:
        'Absolutely. CoreMind is built with a strict Zero Data Retention policy. Your proprietary code is never stored on external servers and is never used to train public AI models. Workspace symbols and embeddings are stored locally on your machine.'
    },
    {
      question: 'Need help or have feedback?',
      answer: (
        <div>
          <p>
            Our core engineering team reads every piece of developer feedback. You can reach out directly via our community Discord, submit GitHub issues, or email us at{' '}
            <a href="mailto:support@coremind.dev" className="text-emerald-700 underline font-medium">
              support@coremind.dev
            </a>
            .
          </p>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-neutral-50/40 border-b border-neutral-200/80">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider border border-emerald-200/60 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Support &amp; FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600">
            Get answers to commonly asked questions about CoreMind.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-neutral-200/90 bg-white overflow-hidden transition-all duration-150"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-neutral-950">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center bg-neutral-100 text-neutral-600 transition-transform duration-200 shrink-0 ml-4 ${
                      isOpen ? 'rotate-180 bg-emerald-600 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Community & Discord Banner underneath */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-emerald-50/70 border border-emerald-200/90 text-neutral-950 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 rounded-2xl bg-white text-emerald-600 shadow-2xs border border-emerald-200">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg font-bold text-neutral-950">Have more questions?</div>
              <div className="text-sm text-neutral-600">
                Join 14,000+ engineers discussing agentic coding in our Discord community.
              </div>
            </div>
          </div>

          <a
            href="https://github.com/CoreMind-IDE"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-transform hover:scale-[1.02] shadow-xs shrink-0"
          >
            Join Developer Discord
          </a>
        </div>
      </div>
    </section>
  );
};
