import React from 'react';
import { Link } from 'react-router-dom';
import iconImg from '../assets/icon.png';

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
      <img
        src={iconImg}
        alt="CoreMind"
        className={`${iconSizes[size]} object-contain shrink-0 rounded-md`}
      />

      <span className={`${textSizes[size]} text-[#111111] font-semibold tracking-tight`}>
        CoreMind
      </span>
    </Link>
  );
};
