import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showBadge?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showBadge = false }) => {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-9 h-9'
  };

  const textSizes = {
    sm: 'text-base font-semibold',
    md: 'text-xl font-bold tracking-tight',
    lg: 'text-2xl font-bold tracking-tight'
  };

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2.5 text-neutral-950 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg py-1 ${className}`}
      aria-label="CoreMind Homepage"
    >
      {/* Modern Qoder-style tech emblem */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-green-600 to-emerald-700 text-white shadow-[0_2px_10px_rgba(16,185,129,0.35)] group-hover:shadow-[0_4px_16px_rgba(16,185,129,0.5)] transition-all shrink-0`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-white"
          aria-hidden="true"
        >
          {/* Hexagonal Core & Neural Synapse */}
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" strokeOpacity="0.3" />
          <path d="M12 6L6 9.5v5L12 18l6-3.5v-5L12 6z" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="2" fill="white" />
        </svg>
      </div>

      <div className="flex items-center gap-2">
        <span className={`${textSizes[size]} text-neutral-950 font-bold tracking-tight`}>
          CoreMind
        </span>
        {showBadge && (
          <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-emerald-50 text-emerald-700 border border-emerald-200/80">
            Agentic IDE
          </span>
        )}
      </div>
    </Link>
  );
};
