import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';
import { DOWNLOAD_CONFIG } from '../data/product';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const navLinks = [
    { label: 'Features', to: '/features' },
    { label: 'AI Coding', to: '/#ai-coding' },
    { label: 'Documentation', to: '/docs' },
    { label: 'Changelog', to: '/changelog' },
    { label: 'Download', to: '/download' }
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 bg-white/95 backdrop-blur-md ${
        isScrolled
          ? 'border-b border-neutral-200/90 shadow-[0_1px_2px_rgba(0,0,0,0.03)]'
          : 'border-b border-neutral-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div className="flex items-center gap-8">
            <Logo showBadge size="md" />

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isHash = link.to.startsWith('/#');
                if (isHash) {
                  return (
                    <a
                      key={link.to}
                      href={link.to}
                      className="px-3.5 py-1.5 text-sm font-medium text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100/70 rounded-md transition-colors"
                    >
                      {link.label}
                    </a>
                  );
                }

                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `px-3.5 py-1.5 text-sm font-medium rounded-md transition-colors ${
                        isActive
                          ? 'text-blue-600 bg-blue-50/80 font-semibold'
                          : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100/70'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                );
              })}
            </nav>
          </div>

          {/* Right-side Primary Action */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-xs text-neutral-500 font-mono tracking-tight hidden lg:inline-block">
              v{DOWNLOAD_CONFIG.macos.version}
            </span>
            <Link
              to="/download"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              <span>Download for macOS</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-neutral-200 bg-white px-4 pt-2 pb-5 space-y-1 shadow-lg">
          {navLinks.map((link) => {
            const isHash = link.to.startsWith('/#');
            if (isHash) {
              return (
                <a
                  key={link.to}
                  href={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-neutral-400" />
                </a>
              );
            }

            return (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-blue-600 bg-blue-50 font-semibold'
                      : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100'
                  }`
                }
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </NavLink>
            );
          })}

          <div className="pt-3 border-t border-neutral-100 mt-2">
            <Link
              to="/download"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download for macOS (v{DOWNLOAD_CONFIG.macos.version})</span>
            </Link>
            <p className="text-center text-xs text-neutral-500 mt-2">
              Requires macOS 12+ (Apple Silicon)
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
