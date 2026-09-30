import React from 'react';
import { ArrowRight, BookOpen, Terminal } from 'lucide-react';
import { DOCUMENTATION_CARDS } from '../data/product';
import { Link } from 'react-router-dom';

export const DocumentationSection: React.FC = () => {
  const getCardIcon = (id: string) => {
    switch (id) {
      case 'getting-started':
        return <Terminal className="w-5 h-5 text-[#111111]" />;
      case 'documentation':
        return <BookOpen className="w-5 h-5 text-[#111111]" />;
      case 'github':
        return (
          <svg className="w-5 h-5 fill-current text-[#111111]" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        );
      default:
        return <BookOpen className="w-5 h-5 text-[#111111]" />;
    }
  };

  return (
    <section id="documentation" className="py-20 sm:py-28 bg-white border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111]">
            Learn how CoreMind works.
          </h2>
          <p className="mt-4 text-lg text-[#6B6B6B] leading-relaxed">
            Explore guides, technical documentation, and project architecture.
          </p>
        </div>

        {/* Three Documentation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {DOCUMENTATION_CARDS.map((card) => {
            const isExternal = card.link.startsWith('http');
            return (
              <div
                key={card.id}
                className="bg-white rounded-xl border border-[#E8E8E8] p-7 text-left flex flex-col justify-between shadow-2xs hover:border-[#111111]/30 transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#F7F7F8] border border-[#E8E8E8] flex items-center justify-center mb-5">
                    {getCardIcon(card.id)}
                  </div>

                  <h3 className="text-xl font-bold text-[#111111] tracking-tight mb-2">
                    {card.title}
                  </h3>

                  <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div>
                  {isExternal ? (
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111] hover:text-black hover:underline"
                    >
                      <span>{card.buttonText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link
                      to={card.link}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111] hover:text-black hover:underline"
                    >
                      <span>{card.buttonText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
