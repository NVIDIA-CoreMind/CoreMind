import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Search,
  BookOpen,
  ChevronRight,
  Copy,
  Check,
  ExternalLink,
  Info,
  Clock,
  Apple
} from 'lucide-react';
import { DOCS_DATA } from '../data/product';


export const DocsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSection = searchParams.get('section') || 'getting-started';
  const initialArticle = searchParams.get('article') || 'quickstart';

  const [activeSectionId, setActiveSectionId] = useState(initialSection);
  const [activeArticleSlug, setActiveArticleSlug] = useState(initialArticle);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);

  // Sync state if query params change
  useEffect(() => {
    const s = searchParams.get('section');
    const a = searchParams.get('article');
    if (s) setActiveSectionId(s);
    if (a) setActiveArticleSlug(a);
  }, [searchParams]);

  const activeSection = DOCS_DATA.find((sec) => sec.id === activeSectionId) || DOCS_DATA[0];
  const activeArticle =
    activeSection.articles.find((art) => art.slug === activeArticleSlug) ||
    activeSection.articles[0];

  const handleSelectArticle = (sectionId: string, slug: string) => {
    setActiveSectionId(sectionId);
    setActiveArticleSlug(slug);
    setSearchParams({ section: sectionId, article: slug });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyContent = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Filter docs for search
  const filteredSections = DOCS_DATA.map((sec) => ({
    ...sec,
    articles: sec.articles.filter(
      (a) =>
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sec.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter((sec) => sec.articles.length > 0);

  return (
    <div className="bg-white min-h-screen border-b border-neutral-100">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 text-left">
        {/* Breadcrumb & Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-neutral-200">
          <div className="flex items-center gap-2 text-sm font-mono text-neutral-500">
            <Link to="/" className="hover:text-neutral-900 transition-colors">
              CoreMind
            </Link>
            <ChevronRight className="w-4 h-4 text-neutral-400" />
            <Link to="/docs" className="hover:text-neutral-900 transition-colors">
              Docs
            </Link>
            <ChevronRight className="w-4 h-4 text-neutral-400" />
            <span className="text-neutral-800 font-bold">{activeSection.title}</span>
            <ChevronRight className="w-4 h-4 text-neutral-400" />
            <span className="text-emerald-700 font-semibold">{activeArticle.title}</span>
          </div>

          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all text-neutral-900 placeholder:text-neutral-400"
            />
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Documentation Navigation (3 cols) */}
          <aside className="lg:col-span-3 border-r border-neutral-200/80 pr-4 space-y-6">
            <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 uppercase tracking-wider">
              <BookOpen className="w-5 h-5 text-emerald-600" />
              <span>Documentation</span>
            </div>

            <nav className="space-y-5" aria-label="Documentation Categories">
              {filteredSections.map((sec) => (
                <div key={sec.id} className="space-y-1.5">
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider px-2 block">
                    {sec.title}
                  </span>
                  <ul className="space-y-1">
                    {sec.articles.map((art) => {
                      const isCurrent =
                        sec.id === activeSectionId && art.slug === activeArticleSlug;
                      return (
                        <li key={art.slug}>
                          <button
                            type="button"
                            onClick={() => handleSelectArticle(sec.id, art.slug)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between ${
                              isCurrent
                                ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200/80'
                                : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100/70 font-medium'
                            }`}
                          >
                            <span className="truncate">{art.title}</span>
                            {isCurrent && (
                              <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0 ml-1.5" />
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </nav>

            <div className="pt-6 border-t border-neutral-200">
              <Link
                to="/download"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-xl transition-colors border border-neutral-200/80"
              >
                <Apple className="w-4 h-4" />
                <span>Download for macOS</span>
              </Link>
            </div>
          </aside>

          {/* Center Column: Documentation Article Reader (6 cols) */}
          <main className="lg:col-span-6 space-y-8">
            <article>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-500 font-mono mb-3">
                <span className="px-2.5 py-1 rounded bg-neutral-100 text-neutral-700 font-semibold">
                  {activeSection.title}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{activeArticle.readTime} read</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
                {activeArticle.title}
              </h1>

              <p className="mt-4 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed pb-6 border-b border-neutral-200">
                {activeArticle.summary}
              </p>

              {/* Main formatted content */}
              <div className="mt-8 prose prose-neutral max-w-none text-base text-neutral-700 leading-relaxed space-y-5">
                {activeArticle.content.split('\n\n').map((paragraph, pIdx) => {
                  // Check if it's code block
                  if (paragraph.startsWith('```') || paragraph.includes('->') || paragraph.includes('coremind')) {
                    return (
                      <div key={pIdx} className="relative group my-5">
                        <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5 font-mono text-xs sm:text-sm text-neutral-800 overflow-x-auto leading-relaxed whitespace-pre-wrap">
                          {paragraph.replace(/```/g, '')}
                        </div>
                        <button
                          type="button"
                          onClick={() => copyContent(paragraph.replace(/```/g, ''))}
                          className="absolute right-3.5 top-3.5 p-2 rounded-lg bg-white border border-neutral-200 text-neutral-500 hover:text-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity shadow-2xs"
                          title="Copy snippet"
                        >
                          {copiedCode ? (
                            <Check className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Copy className="w-4 h-4 text-neutral-500" />
                          )}
                        </button>
                      </div>
                    );
                  }

                  // Bullet points
                  if (paragraph.startsWith('- ') || paragraph.startsWith('1. ')) {
                    return (
                      <div key={pIdx} className="bg-white p-5 rounded-2xl border border-neutral-200 space-y-2.5 text-sm sm:text-base font-sans">
                        {paragraph.split('\n').map((line, lIdx) => (
                          <div key={lIdx} className="flex items-start gap-2.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                            <span>{line.replace(/^[-*]|\d+\.\s*/, '')}</span>
                          </div>
                        ))}
                      </div>
                    );
                  }

                  return <p key={pIdx} className="leading-relaxed">{paragraph}</p>;
                })}
              </div>

              {/* Helper Callout Box */}
              <div className="mt-8 p-4 rounded-xl border border-emerald-200 bg-emerald-50/60 text-xs text-emerald-950 flex items-start gap-3">
                <Info className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-semibold">macOS Native Architecture Note</span>
                  <p className="text-emerald-900 leading-relaxed">
                    CoreMind executes local AST indexing and language servers directly on your Apple Silicon hardware. No repository code is sent to external servers without your explicit AI action.
                  </p>
                </div>
              </div>
            </article>

            {/* Pagination between articles */}
            <div className="pt-8 border-t border-neutral-200 flex items-center justify-between text-xs">
              <span className="text-neutral-400 font-mono">
                Document: {activeArticle.slug}
              </span>
              <a
                href="https://github.com/CoreMind-IDE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-medium"
              >
                <span>Edit this page on GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </main>

          {/* Right Column: In This Section / Quick Links (3 cols) */}
          <aside className="lg:col-span-3 border-l border-neutral-200/80 pl-4 space-y-6 hidden lg:block">
            <div>
              <span className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-3 block">
                In This Section
              </span>
              <ul className="space-y-1.5 text-xs">
                {activeSection.articles.map((art) => (
                  <li key={art.slug}>
                    <button
                      type="button"
                      onClick={() => handleSelectArticle(activeSection.id, art.slug)}
                      className={`text-left hover:text-emerald-700 transition-colors ${
                        art.slug === activeArticleSlug
                          ? 'text-emerald-700 font-semibold'
                          : 'text-neutral-600'
                      }`}
                    >
                      {art.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/70 space-y-2 text-xs">
              <span className="font-semibold text-neutral-900 block">
                Need developer support?
              </span>
              <p className="text-neutral-600 leading-relaxed">
                Reach out to the CoreMind engineering team or report an issue on GitHub.
              </p>
              <a
                href="mailto:support@coremind.dev"
                className="inline-block text-emerald-700 hover:text-emerald-800 font-medium pt-1"
              >
                support@coremind.dev →
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
