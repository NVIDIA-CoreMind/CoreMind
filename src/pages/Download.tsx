import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  Check,
  Copy,
  Terminal,
  Layers,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

import {
  INSTALLATION_STEPS,
  SYSTEM_REQUIREMENTS
} from '../data/product';

export const DownloadPage: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState<'macos' | 'windows' | 'linux' | 'jetbrains' | 'cli'>('macos');
  const [copiedSha, setCopiedSha] = useState(false);
  const [copiedCli, setCopiedCli] = useState(false);

  const cliInstallCmd = 'curl -fsSL https://coremind.ai/install.sh | bash';
  const sha256Checksum = 'a1b2c3d4e5f60718293a4b5c6d7e8f90123456789abcdef0123456789abcdef0';

  const copyChecksum = () => {
    navigator.clipboard.writeText(sha256Checksum);
    setCopiedSha(true);
    setTimeout(() => setCopiedSha(false), 2000);
  };

  const copyCliCmd = () => {
    navigator.clipboard.writeText(cliInstallCmd);
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 text-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider border border-emerald-200/60 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Releases • v0.1.0</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-950">
            Download CoreMind
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            Autonomous agentic programming for desktop, terminal, and your favorite IDEs.
          </p>

          {/* Platform Tab Switcher */}
          <div className="mt-8 flex justify-center overflow-x-auto py-2">
            <div className="inline-flex items-center p-1.5 rounded-2xl bg-neutral-100 border border-neutral-200 shadow-inner">
              {[
                { id: 'macos', label: 'macOS' },
                { id: 'windows', label: 'Windows' },
                { id: 'linux', label: 'Linux' },
                { id: 'jetbrains', label: 'JetBrains Plugin' },
                { id: 'cli', label: 'CLI Helper' }
              ].map((plat) => (
                <button
                  key={plat.id}
                  type="button"
                  onClick={() => setActivePlatform(plat.id as any)}
                  className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activePlatform === plat.id
                      ? 'bg-white text-neutral-950 shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  {plat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Platform Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePlatform}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-3xl border border-neutral-200/90 p-8 sm:p-14 shadow-lg text-center max-w-2xl mx-auto"
          >
            {activePlatform === 'macos' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-neutral-950">CoreMind for macOS</h2>
                  <p className="text-sm text-neutral-500 font-mono mt-1">
                    v0.1.0 • Apple Silicon (M1/M2/M3/M4) &amp; Intel x86_64
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <a
                    href="#download-arm"
                    className="p-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all hover:scale-[1.02] flex flex-col items-center justify-center gap-2 shadow-xs"
                  >
                    <Download className="w-5 h-5 text-white" />
                    <span>Apple Silicon (.dmg)</span>
                    <span className="text-[11px] text-emerald-100 font-normal">M1, M2, M3, M4 series • 94.2 MB</span>
                  </a>

                  <a
                    href="#download-intel"
                    className="p-5 rounded-2xl bg-white hover:bg-neutral-50 text-neutral-950 border border-neutral-300 font-semibold text-sm transition-all flex flex-col items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5 text-neutral-600" />
                    <span>Intel Mac (.dmg)</span>
                    <span className="text-[11px] text-neutral-500 font-normal">x86_64 architecture • 98.4 MB</span>
                  </a>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={copyChecksum}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-mono text-neutral-700 hover:bg-neutral-100 transition-colors"
                  >
                    {copiedSha ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-neutral-400" />
                    )}
                    <span>{copiedSha ? 'Checksum Copied!' : `SHA-256: ${sha256Checksum.slice(0, 20)}...`}</span>
                  </button>
                </div>

                <div className="text-xs text-neutral-500 flex items-center justify-center gap-3">
                  <span className="flex items-center gap-1 text-emerald-700 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" /> Apple Notarized
                  </span>
                  <span>•</span>
                  <span>macOS 12.0 Monterey or later</span>
                </div>
              </div>
            )}

            {activePlatform === 'windows' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-neutral-950">CoreMind for Windows</h2>
                  <p className="text-sm text-neutral-500 font-mono mt-1">
                    v0.1.0 • Windows 10/11 64-bit &amp; ARM64
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <a
                    href="#download-win-exe"
                    className="p-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all hover:scale-[1.02] flex flex-col items-center justify-center gap-2 shadow-xs"
                  >
                    <Download className="w-5 h-5 text-white" />
                    <span>User Installer (.exe)</span>
                    <span className="text-[11px] text-emerald-100 font-normal">64-bit Windows 10/11 • 102 MB</span>
                  </a>

                  <a
                    href="#download-win-zip"
                    className="p-5 rounded-2xl bg-white hover:bg-neutral-50 text-neutral-950 border border-neutral-300 font-semibold text-sm transition-all flex flex-col items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5 text-neutral-600" />
                    <span>Portable (.zip)</span>
                    <span className="text-[11px] text-neutral-500 font-normal">No install needed • 110 MB</span>
                  </a>
                </div>

                <div className="text-xs text-neutral-500">
                  Microsoft Authenticode Signed • Zero Administrator Privileges Required
                </div>
              </div>
            )}

            {activePlatform === 'linux' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-neutral-950">CoreMind for Linux</h2>
                  <p className="text-sm text-neutral-500 font-mono mt-1">
                    v0.1.0 • Debian, Ubuntu, Fedora, Arch, and AppImage
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <a
                    href="#deb"
                    className="p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-all flex flex-col items-center gap-1.5 shadow-xs"
                  >
                    <Download className="w-4 h-4 text-white" />
                    <span>.deb (Ubuntu/Debian)</span>
                  </a>
                  <a
                    href="#rpm"
                    className="p-4 rounded-2xl bg-white hover:bg-neutral-50 text-neutral-950 border border-neutral-300 font-semibold text-xs transition-all flex flex-col items-center gap-1.5"
                  >
                    <Download className="w-4 h-4 text-neutral-600" />
                    <span>.rpm (Fedora/RHEL)</span>
                  </a>
                  <a
                    href="#appimage"
                    className="p-4 rounded-2xl bg-white hover:bg-neutral-50 text-neutral-950 border border-neutral-300 font-semibold text-xs transition-all flex flex-col items-center gap-1.5"
                  >
                    <Download className="w-4 h-4 text-neutral-600" />
                    <span>.AppImage (Universal)</span>
                  </a>
                </div>
              </div>
            )}

            {activePlatform === 'jetbrains' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-neutral-950">JetBrains Marketplace Plugin</h2>
                  <p className="text-sm text-neutral-500 mt-1">
                    IntelliJ IDEA, PyCharm, WebStorm, GoLand, CLion, Rider
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-left text-xs text-neutral-700 space-y-2">
                  <div className="font-semibold text-neutral-950">Direct Installation in JetBrains:</div>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Open Settings / Preferences (Cmd+, or Ctrl+Alt+S)</li>
                    <li>Navigate to <strong>Plugins → Marketplace</strong></li>
                    <li>Search for <strong>&quot;CoreMind Agent&quot;</strong> and click <strong>Install</strong></li>
                  </ol>
                </div>

                <a
                  href="https://plugins.jetbrains.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-xs"
                >
                  <Layers className="w-4 h-4 text-white" />
                  <span>View on JetBrains Marketplace</span>
                </a>
              </div>
            )}

            {activePlatform === 'cli' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-neutral-950">CoreMind Headless CLI</h2>
                  <p className="text-sm text-neutral-500 mt-1">
                    Lightweight terminal binary for macOS, Linux, and Windows WSL
                  </p>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-neutral-50 text-neutral-800 font-mono text-xs border border-neutral-300">
                  <div className="flex items-center gap-2 truncate">
                    <Terminal className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span className="truncate">{cliInstallCmd}</span>
                  </div>
                  <button
                    type="button"
                    onClick={copyCliCmd}
                    className="p-1.5 rounded-lg bg-white border border-neutral-300 hover:bg-neutral-100 text-neutral-700 ml-2 shrink-0 transition-colors"
                    aria-label="Copy CLI install command"
                  >
                    {copiedCli ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="text-xs text-neutral-600 text-left">
                  Run <code className="bg-neutral-100 px-1.5 py-0.5 rounded font-mono font-semibold text-neutral-900">coremind --help</code> to view autonomous command flags and GitHub Actions runner configurations.
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Setup Guide Section */}
        <section className="mt-24 text-left">
          <div className="mb-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Quick Setup
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
              Installation Guide
            </h2>
            <p className="mt-2 text-base text-neutral-600">
              Get up and coding in less than 60 seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {INSTALLATION_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs flex items-center justify-center mb-4 border border-emerald-200">
                    {step.step}
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* System Requirements */}
        <section className="mt-24 text-left">
          <div className="mb-8 text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Hardware &amp; System Specs
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
              System Requirements
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xs">
            <div className="divide-y divide-neutral-200">
              {SYSTEM_REQUIREMENTS.map((req, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start sm:items-center hover:bg-neutral-50/50 transition-colors"
                >
                  <div className="md:col-span-3 text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono">
                    {req.category}
                  </div>
                  <div className="md:col-span-5 text-sm sm:text-base font-bold text-neutral-900">
                    {req.spec}
                  </div>
                  <div className="md:col-span-4 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {req.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
