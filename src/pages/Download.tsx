import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  Apple,
  Check,
  Copy,
  Info,
  Terminal,
  Layers,
  X
} from 'lucide-react';

import {
  DOWNLOAD_CONFIG,
  INSTALLATION_STEPS,
  SYSTEM_REQUIREMENTS
} from '../data/product';

import { detectUserOS } from '../utils/osDetection';

export const DownloadPage: React.FC = () => {
  const osInfo = detectUserOS();
  const macConfig = DOWNLOAD_CONFIG.macos;
  const [copiedSha, setCopiedSha] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (macConfig.url === 'REPLACE_WITH_ACTUAL_DOWNLOAD_URL') {
      e.preventDefault();
      setDownloadModalOpen(true);
    }
  };

  const copyChecksum = () => {
    if (macConfig.sha256) {
      navigator.clipboard.writeText(macConfig.sha256);
      setCopiedSha(true);
      setTimeout(() => setCopiedSha(false), 2500);
    }
  };

  return (
    <div className="bg-white min-h-screen py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* OS Detection Alert Banner if non-Mac visitor */}
        {!osInfo.isMac && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 p-4 rounded-xl border border-amber-200 bg-amber-50/70 text-amber-900 text-sm flex items-start gap-3 shadow-2xs"
          >
            <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-950">
                {osInfo.actionMessage}
              </p>
              <p className="mt-1 text-xs text-amber-800 leading-relaxed">
                You are currently browsing from a {osInfo.osName} system. CoreMind is currently available for macOS on Apple Silicon. You can still download the macOS installer below if you are downloading for an Apple Silicon machine.
              </p>
            </div>
          </motion.div>
        )}

        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide border border-blue-100 mb-4">
            <Apple className="w-3.5 h-3.5" />
            <span>macOS Release</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950">
            Download CoreMind for macOS
          </h1>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            Install CoreMind and start building with an AI-native development environment.
          </p>
        </div>

        {/* Primary Download Card */}
        <div className="bg-white rounded-3xl border-2 border-neutral-200 p-8 sm:p-12 shadow-sm text-center relative overflow-hidden">
          <div className="max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-2xs">
              <Apple className="w-9 h-9" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-950">CoreMind</h2>
              <div className="mt-1 flex items-center justify-center gap-2 text-sm text-neutral-600 font-mono">
                <span>macOS</span>
                <span>•</span>
                <span>Version {macConfig.version}</span>
                <span>•</span>
                <span className="font-sans font-semibold text-neutral-800">{macConfig.architecture}</span>
              </div>
            </div>

            {/* Configurable download alert */}
            {downloadModalOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-left text-xs text-blue-900 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-blue-600" />
                    <span>Download URL Placeholder</span>
                  </span>
                  <button
                    onClick={() => setDownloadModalOpen(false)}
                    className="text-neutral-400 hover:text-neutral-700 p-0.5"
                    aria-label="Close notification"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-blue-800 leading-relaxed">
                  The download link points to the configurable URL in <code className="bg-blue-100 px-1 py-0.5 rounded font-mono text-[10px]">data/product.ts</code> (<code className="font-mono text-[10px]">REPLACE_WITH_ACTUAL_DOWNLOAD_URL</code>).
                </p>
                <div className="pt-1 flex items-center gap-2 font-mono text-[11px] text-blue-700">
                  <span>File: CoreMind-{macConfig.version}-arm64.dmg</span>
                  <span>({macConfig.size})</span>
                </div>
              </motion.div>
            )}

            {/* Primary Action Button */}
            <div className="pt-4">
              <a
                href={macConfig.url}
                onClick={handleDownloadClick}
                download
                className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <Download className="w-5 h-5" aria-hidden="true" />
                <span>Download CoreMind</span>
              </a>
            </div>

            {/* Package details */}
            <div className="pt-2 text-xs text-neutral-500 font-mono space-y-1">
              <div>Package: {macConfig.packageType} • {macConfig.size}</div>
              <div>Supports Apple Silicon (M1, M2, M3, M4 series)</div>
            </div>

            {/* Checksum verification button */}
            {macConfig.sha256 && (
              <div className="pt-3">
                <button
                  type="button"
                  onClick={copyChecksum}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 text-xs font-mono text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
                >
                  {copiedSha ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-neutral-400" />
                  )}
                  <span>
                    {copiedSha ? 'Checksum Copied to Clipboard' : `SHA-256: ${macConfig.sha256.slice(0, 16)}...`}
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Installation Section */}
        <section className="mt-20">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Setup Guide
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950">
              Installation
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Follow these simple steps to install CoreMind on your Mac.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {INSTALLATION_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-semibold text-xs flex items-center justify-center mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-900 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Terminal Command Tip */}
          <div className="mt-6 p-4 rounded-xl border border-neutral-200 bg-neutral-50/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5 text-neutral-600 shrink-0" />
              <div className="text-xs">
                <span className="font-semibold text-neutral-900">
                  Command Line Launcher
                </span>
                <p className="text-neutral-500">
                  Once installed, launch CoreMind from your shell by typing <code className="font-mono text-neutral-800 bg-white px-1 py-0.5 rounded border border-neutral-200">coremind .</code>
                </p>
              </div>
            </div>
            <a
              href="/docs?section=installation&article=cli-helper"
              className="text-xs font-medium text-blue-600 hover:text-blue-700 whitespace-nowrap"
            >
              View CLI setup →
            </a>
          </div>
        </section>

        {/* System Requirements Section */}
        <section className="mt-20">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Hardware & OS
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950">
              System Requirements
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              CoreMind is natively tuned for Apple Silicon architecture on macOS.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xs">
            <div className="divide-y divide-neutral-200">
              {SYSTEM_REQUIREMENTS.map((req, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start sm:items-center hover:bg-neutral-50/50 transition-colors"
                >
                  <div className="md:col-span-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    {req.category}
                  </div>
                  <div className="md:col-span-5 text-sm font-semibold text-neutral-900">
                    {req.spec}
                  </div>
                  <div className="md:col-span-4 text-xs text-neutral-500 leading-relaxed">
                    {req.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Platform Roadmap Architecture Notice */}
        <section className="mt-20 p-6 rounded-2xl border border-neutral-200 bg-neutral-50/60">
          <div className="flex items-start gap-4">
            <Layers className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-neutral-900">
                Future Platform Releases
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                CoreMind's architecture is structured to support additional operating systems in the future. Windows support is planned for a subsequent update. At present, all downloads and active releases are exclusively built for Apple Silicon Macs.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
