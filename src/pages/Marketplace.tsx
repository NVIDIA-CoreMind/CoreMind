import React, { useState } from 'react';
import {
  Search,
  Star,
  Layers
} from 'lucide-react';

interface PluginItem {
  id: string;
  name: string;
  author: string;
  category: 'waker' | 'mcp' | 'tooling' | 'framework';
  description: string;
  downloads: string;
  rating: number;
  badge?: string;
}

export const MarketplacePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const plugins: PluginItem[] = [
    {
      id: 'postgres-waker',
      name: 'PostgreSQL DB Migration Waker',
      author: 'CoreMind Official',
      category: 'waker',
      description: 'Autonomous agent that generates safe, zero-downtime database migration scripts and verification rollbacks.',
      downloads: '142k',
      rating: 4.9,
      badge: 'Official'
    },
    {
      id: 'github-actions-mcp',
      name: 'GitHub Actions CI Auto-Healer',
      author: 'DevOps Tooling Lab',
      category: 'mcp',
      description: 'Automatically analyzes broken workflow runs, isolates failing dependencies, and opens a hotfix PR.',
      downloads: '98k',
      rating: 4.8,
      badge: 'Popular'
    },
    {
      id: 'react-19-codemod',
      name: 'React 19 & Next.js App Router Migrator',
      author: 'Vercel Ecosystem Community',
      category: 'framework',
      description: 'Batch refactors legacy client components to Server Actions and modern React hooks.',
      downloads: '76k',
      rating: 4.9
    },
    {
      id: 'kubernetes-sre',
      name: 'Kubernetes Helm & Manifest Auditor',
      author: 'Cloud Native Collective',
      category: 'waker',
      description: 'Inspects deployment YAMLs for resource limits, security context violations, and readiness probes.',
      downloads: '54k',
      rating: 4.7
    },
    {
      id: 'stripe-billing-kit',
      name: 'Stripe Webhook Idempotency Pack',
      author: 'CoreMind Official',
      category: 'tooling',
      description: 'Preconfigured idempotency lock middleware, signature checkers, and webhook replay simulators.',
      downloads: '88k',
      rating: 4.9,
      badge: 'Official'
    },
    {
      id: 'rust-cargo-doctor',
      name: 'Rust Cargo Clippy & Memory Auditor',
      author: 'Rustacean Foundation',
      category: 'tooling',
      description: 'Detects unsafe block memory leaks and suggests idiomatic borrow checker lifetime fixes.',
      downloads: '62k',
      rating: 4.8
    }
  ];

  const filtered = plugins.filter((p) => {
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider border border-emerald-200/60 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Plugin &amp; Agent Ecosystem</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-950">
            CoreMind Marketplace
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Discover community plugins, specialized AI employee agents, MCP server connectors, and automated framework codemods.
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search plugins, MCP servers, agents..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-neutral-200 shadow-xs text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            />
          </div>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {[
              { id: 'all', label: 'All Extensions' },
              { id: 'waker', label: 'AI Agents' },
              { id: 'mcp', label: 'MCP Connectors' },
              { id: 'framework', label: 'Framework Migrations' },
              { id: 'tooling', label: 'Tooling & Linters' }
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200/70'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Plugin Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-neutral-200/90 bg-neutral-50/40 p-6 sm:p-7 flex flex-col justify-between hover:border-neutral-300 hover:bg-white hover:shadow-md transition-all duration-150 text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-medium text-neutral-500">
                    {item.author}
                  </span>
                  {item.badge && (
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-neutral-950 tracking-tight">
                  {item.name}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs text-neutral-500">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 font-medium text-neutral-800">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{item.rating}</span>
                  </span>
                  <span>{item.downloads} installs</span>
                </div>

                <button
                  type="button"
                  className="px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-2xs"
                >
                  Install
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
