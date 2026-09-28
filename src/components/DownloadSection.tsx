import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  Apple,
  Cpu,
  ShieldCheck,
  Copy,
  Check,
  Info
} from 'lucide-react';
import { DOWNLOAD_CONFIG } from '../data/product';

export const DownloadSection: React.FC = () => {

  const [copiedSha, setCopiedSha] = useState(false);
  const [downloadTriggered, setDownloadTriggered] = useState(false);
  const macConfig = DOWNLOAD_CONFIG.macos;
  const windowsConfig = DOWNLOAD_CONFIG.windows;
  const linuxConfig = DOWNLOAD_CONFIG.linux;

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (macConfig.url === 'REPLACE_WITH_ACTUAL_DOWNLOAD_URL') {
      e.preventDefault();
      setDownloadTriggered(true);
      setTimeout(() => setDownloadTriggered(false), 6000);
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
    <section id="download" className="py-20 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Installation
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            Download CoreMind
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Bring AI-powered development to your Mac.
          </p>
        </div>

        {/* Primary Download Card */}
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl border-2 border-neutral-200/90 p-8 shadow-sm hover:border-blue-400 hover:shadow-md transition-all text-center relative overflow-hidden"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide border border-blue-100 mb-6">
              <Apple className="w-3.5 h-3.5 text-blue-600" />
              <span>CoreMind for macOS</span>
            </div>

            <h3 className="text-2xl font-bold text-neutral-950">
              macOS Application
            </h3>

            {/* Hardware Architecture Spec */}
            <div className="mt-3 flex items-center justify-center gap-2 text-sm text-neutral-600">
              <Cpu className="w-4 h-4 text-neutral-500" />
              <span className="font-medium text-neutral-900">{macConfig.architecture}</span>
              <span className="text-neutral-300">•</span>
              <span>{macConfig.minOS}</span>
            </div>

            {/* Notification alert if placeholder URL */}
            {downloadTriggered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-200 text-left text-xs text-blue-900 space-y-1"
              >
                <div className="font-semibold flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Release Asset Configuration Notice</span>
                </div>
                <p className="text-blue-800 leading-relaxed">
                  The download endpoint is set to the configurable placeholder <code className="bg-blue-100 px-1 py-0.5 rounded font-mono text-[10px]">REPLACE_WITH_ACTUAL_DOWNLOAD_URL</code> in <code className="bg-blue-100 px-1 py-0.5 rounded font-mono text-[10px]">data/product.ts</code>. In production, this points to your hosted .dmg artifact or GitHub Releases asset.
                </p>
              </motion.div>
            )}

            {/* Primary Action Button */}
            <div className="mt-8">
              <a
                href={macConfig.url}
                onClick={handleDownload}
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <Download className="w-5 h-5" aria-hidden="true" />
                <span>Download for macOS</span>
              </a>
            </div>

            {/* Version and package information underneath */}
            <div className="mt-4 space-y-1 text-xs text-neutral-500 font-mono">
              <div>Current version: v{macConfig.version}</div>
              <div>macOS application • {macConfig.packageType} • {macConfig.size}</div>
            </div>

            {/* Checksum and Security Verification */}
            <div className="mt-6 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
              <div className="flex items-center gap-1.5 text-emerald-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Apple Notarized Binary</span>
              </div>

              {macConfig.sha256 && (
                <button
                  type="button"
                  onClick={copyChecksum}
                  className="inline-flex items-center gap-1.5 text-neutral-600 hover:text-neutral-900 transition-colors p-1 rounded hover:bg-neutral-100"
                  title="Copy SHA-256 checksum"
                >
                  {copiedSha ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-neutral-400" />
                  )}
                  <span className="font-mono text-[11px]">
                    {copiedSha ? 'Checksum Copied' : 'SHA-256 Checksum'}
                  </span>
                </button>
              )}
            </div>
          </motion.div>

          {/* Platform Status Architecture Note */}
          <div className="mt-8 rounded-xl border border-neutral-200 bg-neutral-50/80 p-5 text-left space-y-3">
            <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
              Platform Availability Status
            </span>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-neutral-200">
                <div className="flex items-center gap-2">
                  <Apple className="w-4 h-4 text-neutral-900" />
                  <span className="font-semibold text-neutral-900">macOS</span>
                  <span className="text-neutral-500">(Apple Silicon)</span>
                </div>
                <span className="text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[10px]">
                  Available Now
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-neutral-200">
                <div className="flex items-center gap-2 text-neutral-700">
                  <span className="font-semibold">Windows</span>
                </div>
                <span className="text-neutral-500 font-medium bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200 text-[10px]">
                  {windowsConfig.note || 'Coming in a future release'}
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-neutral-200">
                <div className="flex items-center gap-2 text-neutral-700">
                  <span className="font-semibold">Linux</span>
                </div>
                <span className="text-neutral-500 font-medium bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200 text-[10px]">
                  {linuxConfig.note || 'Planned for future releases'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
