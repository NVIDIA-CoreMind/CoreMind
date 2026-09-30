import React, { useState } from 'react';
import { Download, Check, Copy } from 'lucide-react';
import { DOWNLOAD_CONFIG } from '../data/product';

export const DownloadSection: React.FC = () => {
  const [copiedSha, setCopiedSha] = useState(false);
  const macConfig = DOWNLOAD_CONFIG.macos;

  const copyChecksum = () => {
    if (macConfig.sha256) {
      navigator.clipboard.writeText(macConfig.sha256);
      setCopiedSha(true);
      setTimeout(() => setCopiedSha(false), 2000);
    }
  };

  return (
    <section id="download" className="py-20 sm:py-28 bg-[#F7F7F8] border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-medium text-[#6B6B6B] uppercase tracking-wider bg-white border border-[#E8E8E8] px-3 py-1 rounded-full">
            macOS Release
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-[#111111]">
            Start building with CoreMind.
          </h2>
          <p className="mt-4 text-lg text-[#6B6B6B] leading-relaxed">
            Download CoreMind for macOS and experience an AI-powered development environment built for modern software development.
          </p>
        </div>

        {/* Dedicated macOS Download Card */}
        <div className="max-w-xl mx-auto bg-white rounded-2xl border border-[#E8E8E8] p-8 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] text-left flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#111111]" />
                <span className="text-sm font-bold text-[#111111] uppercase tracking-wider font-mono">
                  macOS DMG Installer
                </span>
              </div>
              <span className="text-xs font-mono bg-[#F7F7F8] border border-[#E8E8E8] px-2.5 py-1 rounded text-[#111111] font-medium">
                v{macConfig.version}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#111111] tracking-tight mb-2">
              CoreMind for macOS
            </h3>

            <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">
              Native Apple Silicon build engineered for M-series hardware acceleration, low energy draw, and local codebase indexing.
            </p>

            {/* Spec details */}
            <div className="grid grid-cols-2 gap-3 py-4 border-y border-[#E8E8E8] text-xs font-mono text-[#6B6B6B] mb-8">
              <div>
                <span className="text-[#8E8E93] block text-[10px] uppercase font-sans">Architecture</span>
                <span className="text-[#111111] font-medium">{macConfig.architecture}</span>
              </div>
              <div>
                <span className="text-[#8E8E93] block text-[10px] uppercase font-sans">Requires</span>
                <span className="text-[#111111] font-medium">{macConfig.minOS}</span>
              </div>
              <div>
                <span className="text-[#8E8E93] block text-[10px] uppercase font-sans">Format</span>
                <span className="text-[#111111] font-medium">{macConfig.packageType}</span>
              </div>
              <div>
                <span className="text-[#8E8E93] block text-[10px] uppercase font-sans">Package Size</span>
                <span className="text-[#111111] font-medium">{macConfig.size}</span>
              </div>
            </div>
          </div>

          <div>
            {/* Primary Large Download Button */}
            <a
              href={macConfig.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#111111] hover:bg-neutral-800 active:bg-black rounded-lg transition-colors shadow-xs"
            >
              <Download className="w-5 h-5 text-white" />
              <span>Download for macOS</span>
            </a>

            {/* Platform Subtext */}
            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-[#8E8E93] font-mono">
              <span>Apple Silicon</span>
              <span>•</span>
              <span>macOS</span>
            </div>

            {/* SHA256 Checksum Verification */}
            {macConfig.sha256 && (
              <div className="mt-6 pt-4 border-t border-[#E8E8E8] flex items-center justify-between text-[11px] font-mono text-[#8E8E93]">
                <span className="truncate max-w-[280px]">
                  SHA256: {macConfig.sha256.slice(0, 24)}...
                </span>
                <button
                  type="button"
                  onClick={copyChecksum}
                  className="inline-flex items-center gap-1 text-[#111111] hover:underline cursor-pointer"
                >
                  {copiedSha ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy SHA</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Windows Future Release Notice */}
        <p className="mt-8 text-xs text-[#8E8E93]">
          Windows support coming in a future release.
        </p>
      </div>
    </section>
  );
};
