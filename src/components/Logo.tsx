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
    lg: 'w-10 h-10'
  };

  const textSizes = {
    sm: 'text-base font-semibold',
    md: 'text-xl font-bold tracking-tight',
    lg: 'text-2xl font-bold tracking-tight'
  };

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2.5 text-neutral-900 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-0.5 ${className}`}
      aria-label="CoreMind Homepage"
    >
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center rounded-lg bg-blue-600 text-white shadow-xs group-hover:bg-blue-700 transition-colors shrink-0`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4/5 h-4/5"
          aria-hidden="true"
        >
          {/* Outer square brackets / code ide motif */}
          <path d="M7 8L3 12L7 16" />
          <path d="M17 8L21 12L17 16" />
          {/* Inner core node */}
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
          <line x1="12" y1="5" x2="12" y2="7" />
          <line x1="12" y1="17" x2="12" y2="19" />
        </svg>
      </div>

      <div className="flex items-center gap-2">
        <span className={`${textSizes[size]} text-neutral-950 font-semibold tracking-tight`}>
          CoreMind
        </span>
        {showBadge && (
          <span className="hidden sm:inline-block text-[10px] font-medium tracking-wide uppercase px-1.5 py-0.5 rounded border border-neutral-200 bg-neutral-50 text-neutral-600">
            macOS
          </span>
        )}
      </div>
    </Link>
  );
};
