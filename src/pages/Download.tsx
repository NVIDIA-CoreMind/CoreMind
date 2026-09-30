import React, { useState } from 'react';
import { Download, Check, Copy, Apple } from 'lucide-react';
import { DOWNLOAD_CONFIG, SYSTEM_REQUIREMENTS, INSTALLATION_STEPS } from '../data/product';

export const DownloadPage: React.FC = () => {
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
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-mono font-medium text-[#6B6B6B] uppercase tracking-wider bg-[#F7F7F8] border border-[#E8E8E8] px-3 py-1 rounded-full">
            Official Release
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-[#111111]">
            Download CoreMind for macOS
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#6B6B6B] max-w-xl mx-auto leading-relaxed">
            AI-powered development environment designed for modern software development on Apple Silicon.
          </p>
        </div>

        {/* Primary Download Card */}
        <div className="bg-white rounded-2xl border border-[#E8E8E8] p-8 sm:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] text-left mb-12">
          <div className="flex items-center justify-between pb-6 border-b border-[#E8E8E8]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#111111] text-white flex items-center justify-center">
                <Apple className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#111111]">CoreMind Desktop IDE</h2>
                <p className="text-xs font-mono text-[#6B6B6B]">
                  Apple Silicon (M1/M2/M3/M4) • v{macConfig.version}
                </p>
              </div>
            </div>

            <span className="text-xs font-mono bg-[#F7F7F8] border border-[#E8E8E8] px-2.5 py-1 rounded text-[#111111] font-medium">
              .dmg installer
            </span>
          </div>

          <div className="py-6 space-y-4">
            <p className="text-sm text-[#6B6B6B] leading-relaxed">
              CoreMind provides project-aware AI assistance, agentic planning, and an integrated native terminal directly inside a clean, white-first desktop interface.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-[#E8E8E8] text-xs font-mono">
              <div>
                <span className="text-[#8E8E93] block text-[10px] uppercase font-sans">Architecture</span>
                <span className="text-[#111111] font-medium">{macConfig.architecture}</span>
              </div>
              <div>
                <span className="text-[#8E8E93] block text-[10px] uppercase font-sans">Min macOS</span>
                <span className="text-[#111111] font-medium">{macConfig.minOS}</span>
              </div>
              <div>
                <span className="text-[#8E8E93] block text-[10px] uppercase font-sans">Size</span>
                <span className="text-[#111111] font-medium">{macConfig.size}</span>
              </div>
              <div>
                <span className="text-[#8E8E93] block text-[10px] uppercase font-sans">Release Date</span>
                <span className="text-[#111111] font-medium">{macConfig.releaseDate}</span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={macConfig.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#111111] hover:bg-neutral-800 active:bg-black rounded-lg transition-colors shadow-xs"
            >
              <Download className="w-5 h-5 text-white" />
              <span>Download for macOS</span>
            </a>

            <div className="mt-3 text-center text-xs text-[#8E8E93] font-mono">
              Available for Apple Silicon • macOS
            </div>

            {/* SHA Checksum */}
            {macConfig.sha256 && (
              <div className="mt-6 pt-4 border-t border-[#E8E8E8] flex items-center justify-between text-xs font-mono text-[#8E8E93]">
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
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy SHA</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Future platform note */}
        <div className="p-4 rounded-xl bg-[#F7F7F8] border border-[#E8E8E8] text-xs text-[#6B6B6B] mb-16 text-center">
          Windows support coming in a future release. CoreMind is currently available for macOS.
        </div>

        {/* Installation Steps */}
        <div className="text-left mb-16">
          <h2 className="text-xl font-bold text-[#111111] mb-6 tracking-tight">
            Installation Steps
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INSTALLATION_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-xl border border-[#E8E8E8] bg-white text-left"
              >
                <div className="text-xs font-mono font-bold text-[#8E8E93] mb-2">
                  0{step.step}
                </div>
                <h3 className="text-sm font-bold text-[#111111] mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* System Requirements */}
        <div className="text-left">
          <h2 className="text-xl font-bold text-[#111111] mb-6 tracking-tight">
            System Requirements
          </h2>
          <div className="space-y-3">
            {SYSTEM_REQUIREMENTS.map((req) => (
              <div
                key={req.category}
                className="p-4 rounded-xl border border-[#E8E8E8] bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
              >
                <span className="font-semibold text-[#111111] sm:w-48">
                  {req.category}
                </span>
                <span className="text-[#6B6B6B] sm:flex-1 font-mono">
                  {req.spec}
                </span>
                <span className="text-[#8E8E93] text-[11px]">
                  {req.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
