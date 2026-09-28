import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, ChevronRight, Apple, ShieldCheck, Cpu } from 'lucide-react';
import { PRODUCT_INFO, DOWNLOAD_CONFIG } from '../data/product';
import { detectUserOS } from '../utils/osDetection';
import { IDEPreview } from './IDEPreview';

export const Hero: React.FC = () => {
  const osInfo = detectUserOS();
  const macConfig = DOWNLOAD_CONFIG.macos;

  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-20 sm:pt-16 sm:pb-28 border-b border-neutral-100">
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text & Actions */}
          <div className="lg:col-span-6 text-left">
            {/* Small Product Label */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/80 bg-blue-50/80 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span>{PRODUCT_INFO.badgeText}</span>
              <span className="text-neutral-300">|</span>
              <span className="text-neutral-600 font-normal">v{macConfig.version} for macOS</span>
            </motion.div>

            {/* Large Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.12]"
            >
              Build faster with an{' '}
              <span className="text-blue-600 underline decoration-blue-200 underline-offset-4 decoration-2">
                AI-native IDE
              </span>
              .
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-xl font-normal"
            >
              {PRODUCT_INFO.subHeadline}
            </motion.p>

            {/* Platform detection and Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-8 space-y-4"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {osInfo.isMac || osInfo.canDirectDownload ? (
                  <Link
                    to="/download"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm hover:shadow transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    <Download className="w-5 h-5" aria-hidden="true" />
                    <span>Download for macOS</span>
                  </Link>
                ) : (
                  <div className="space-y-2">
                    <div className="p-3 rounded-lg border border-amber-200 bg-amber-50/70 text-amber-900 text-xs font-medium">
                      {osInfo.actionMessage}
                    </div>
                    <Link
                      to="/download"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
                    >
                      <Download className="w-4 h-4" />
                      <span>View macOS Release (v{macConfig.version})</span>
                    </Link>
                  </div>
                )}

                <Link
                  to="/features"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-neutral-800 bg-neutral-100 hover:bg-neutral-200/80 active:bg-neutral-200 rounded-lg transition-colors border border-neutral-200/70"
                >
                  <span>Explore CoreMind</span>
                  <ChevronRight className="w-4 h-4 text-neutral-500" />
                </Link>
              </div>

              {/* Small platform information underneath */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-xs text-neutral-500">
                <span className="flex items-center gap-1.5 font-medium text-neutral-700">
                  <Apple className="w-3.5 h-3.5 text-neutral-900" />
                  <span>Available for macOS</span>
                </span>
                <span className="text-neutral-300">•</span>
                <span className="flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Apple Silicon (M1/M2/M3/M4)</span>
                </span>
                <span className="text-neutral-300">•</span>
                <span>macOS 12+</span>
                <span className="text-neutral-300">•</span>
                <span className="flex items-center gap-1 text-emerald-700 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Apple Notarized</span>
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High-fidelity Desktop IDE Preview */}
          <div className="lg:col-span-6 relative">
            <IDEPreview showCallouts={true} />
          </div>
        </div>
      </div>
    </section>
  );
};
