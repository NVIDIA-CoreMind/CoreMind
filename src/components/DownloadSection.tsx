import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  Apple,
  Cpu,
  ShieldCheck,
  Copy,
  Check,
  Terminal,
  Info
} from 'lucide-react';
import { DOWNLOAD_CONFIG } from '../data/product';

export const DownloadSection: React.FC = () => {
  const [copiedSha, setCopiedSha] = useState(false);
  const [copiedTerminal, setCopiedTerminal] = useState(false);
  const [downloadTriggered, setDownloadTriggered] = useState(false);
  const macConfig = DOWNLOAD_CONFIG.macos;
  const terminalInstallCmd = 'curl -fsSL https://get.coremind.dev | bash';

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

  const copyTerminalCmd = () => {
    navigator.clipboard.writeText(terminalInstallCmd);
    setCopiedTerminal(true);
    setTimeout(() => setCopiedTerminal(false), 2500);
  };

  return (
    <section id="download" className="py-24 bg-neutral-50/50 border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/80 font-mono">
            Get CoreMind
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950">
            Download &amp; Quickstart
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            Get the native macOS desktop app or install via terminal.
          </p>
        </div>

        {/* Primary Download Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Desktop DMG */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl border-2 border-neutral-200/90 p-7 sm:p-9 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all text-left flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200 mb-5">
                <Apple className="w-3.5 h-3.5 text-emerald-700" />
                <span>macOS Disk Image</span>
              </div>

              <h3 className="text-2xl font-bold text-neutral-950">
                macOS Desktop App
              </h3>

              <div className="mt-2.5 flex items-center gap-2 text-xs font-mono text-neutral-600">
                <Cpu className="w-4 h-4 text-neutral-500" />
                <span className="font-semibold text-neutral-900">{macConfig.architecture}</span>
                <span>•</span>
                <span>{macConfig.minOS}</span>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Native Apple Silicon binary with zero-telemetry local indexing and hardware acceleration.
              </p>

              {downloadTriggered && (
                <div className="mt-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                  <div className="font-bold flex items-center gap-1.5 mb-1">
                    <Info className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Demo Build Link</span>
                  </div>
                  <span>Demo package placeholder ready. Connects to your release DMG asset in production.</span>
                </div>
              )}
            </div>

            <div className="mt-8 space-y-3">
              <a
                href={macConfig.url}
                onClick={handleDownload}
                download
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-xs transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download .dmg (v{macConfig.version})</span>
              </a>

              <div className="flex items-center justify-between text-xs text-neutral-500 font-mono pt-2">
                <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Apple Notarized</span>
                </div>

                {macConfig.sha256 && (
                  <button
                    type="button"
                    onClick={copyChecksum}
                    className="inline-flex items-center gap-1 text-neutral-600 hover:text-neutral-900 cursor-pointer"
                    title="Copy SHA-256 checksum"
                  >
                    {copiedSha ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSha ? 'Copied' : 'SHA-256'}</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Terminal / CLI One-Liner */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-3xl border border-neutral-200 p-7 sm:p-9 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all text-left flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold border border-neutral-200 mb-5">
                <Terminal className="w-3.5 h-3.5 text-neutral-700" />
                <span>Command Line Installer</span>
              </div>

              <h3 className="text-2xl font-bold text-neutral-950">
                Terminal Quickstart
              </h3>

              <div className="mt-2.5 flex items-center gap-2 text-xs font-mono text-neutral-600">
                <span>zsh / bash • macOS &amp; Linux</span>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Install the CoreMind CLI and headless agent directly into your PATH with one shell command.
              </p>

              {/* Terminal Code Box */}
              <div className="mt-5 p-3 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs flex items-center justify-between shadow-inner">
                <span className="truncate text-emerald-400">$ {terminalInstallCmd}</span>
                <button
                  type="button"
                  onClick={copyTerminalCmd}
                  className="ml-2 p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer shrink-0"
                  aria-label="Copy terminal install command"
                >
                  {copiedTerminal ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href="https://github.com/CoreMind-IDE"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-xl transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>View Source on GitHub</span>
              </a>

              <div className="text-center text-xs text-neutral-500 font-mono pt-2">
                Open Source (MIT License)
              </div>
            </div>
          </motion.div>
        </div>

        {/* Minimal System Specs */}
        <div className="mt-12 max-w-4xl mx-auto rounded-2xl border border-neutral-200 bg-white p-6 text-left">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 mb-4">
            System Requirements
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/70">
              <div className="text-neutral-400 text-[10px] uppercase font-bold">OS</div>
              <div className="font-semibold text-neutral-900 mt-1">macOS 12+ (Apple Silicon)</div>
            </div>
            <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/70">
              <div className="text-neutral-400 text-[10px] uppercase font-bold">Memory</div>
              <div className="font-semibold text-neutral-900 mt-1">8 GB RAM (16 GB rec.)</div>
            </div>
            <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/70">
              <div className="text-neutral-400 text-[10px] uppercase font-bold">Disk</div>
              <div className="font-semibold text-neutral-900 mt-1">1.5 GB free space</div>
            </div>
            <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/70">
              <div className="text-neutral-400 text-[10px] uppercase font-bold">Models</div>
              <div className="font-semibold text-neutral-900 mt-1">Claude 3.7 / Local Ollama</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
