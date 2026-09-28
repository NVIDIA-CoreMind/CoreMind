import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { PRODUCT_INFO, DOWNLOAD_CONFIG } from '../data/product';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-neutral-200 text-neutral-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-neutral-500 text-sm max-w-sm leading-relaxed">
              AI-native desktop development environment. Built for macOS with deep codebase understanding, local semantic indexing, and multi-file automation.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-600 text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>v{DOWNLOAD_CONFIG.macos.version} (macOS Apple Silicon)</span>
              </span>
            </div>
          </div>

          {/* Links Column 1: Product */}
          <div>
            <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/features" className="hover:text-neutral-950 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/download" className="hover:text-neutral-950 transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link to="/changelog" className="hover:text-neutral-950 transition-colors">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Resources */}
          <div>
            <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/docs" className="hover:text-neutral-950 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/docs?section=getting-started&article=quickstart" className="hover:text-neutral-950 transition-colors">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link to="/docs?section=installation&article=macos-installation" className="hover:text-neutral-950 transition-colors">
                  Installation Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Community & Legal */}
          <div>
            <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-4">
              Community & Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={PRODUCT_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-950 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={PRODUCT_INFO.links.contact}
                  className="hover:text-neutral-950 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link to="/docs?section=getting-started&article=quickstart" className="hover:text-neutral-950 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/docs?section=getting-started&article=quickstart" className="hover:text-neutral-950 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>{PRODUCT_INFO.copyright}</div>
          <div className="flex items-center gap-4">
            <span>Built exclusively for macOS</span>
            <span>•</span>
            <span>White theme design system</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
