import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showBadge?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-7 h-7',
    lg: 'w-8 h-8'
  };

  const textSizes = {
    sm: 'text-base font-semibold',
    md: 'text-lg font-bold tracking-tight',
    lg: 'text-xl font-bold tracking-tight'
  };

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2.5 text-[#111111] group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-900 rounded-md py-1 transition-opacity hover:opacity-90 ${className}`}
      aria-label="CoreMind Homepage"
    >
      {/* Sleek, minimal dark emblem */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center rounded-lg bg-[#111111] text-white shadow-xs shrink-0`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-white"
          aria-hidden="true"
        >
          {/* Minimalist Core Octagon / Brain Synapse mark */}
          <path d="M12 3L4 7.5v9L12 21l8-4.5v-9L12 3z" strokeOpacity="0.4" strokeWidth="1.5" />
          <path d="M12 7.5L7 10.5v3l5 3 5-3v-3L12 7.5z" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="1.5" fill="white" />
        </svg>
      </div>

      <span className={`${textSizes[size]} text-[#111111] font-semibold tracking-tight`}>
        CoreMind
      </span>
    </Link>
  );
};
