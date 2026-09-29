import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Tag, Calendar, Download, CheckCircle2, Apple } from 'lucide-react';
import { CHANGELOG_DATA } from '../data/product';


export const ChangelogPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-12 sm:py-20 border-b border-neutral-100">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 text-left">
        {/* Page Hero */}
        <div className="mb-20">
          <span className="text-sm font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
            Release History
          </span>
          <h1 className="mt-4 text-5xl sm:text-6xl font-bold tracking-tight text-neutral-950">
            Changelog
          </h1>
          <p className="mt-5 text-xl sm:text-2xl text-neutral-600 leading-relaxed font-normal">
            All updates, features, and platform improvements for the CoreMind desktop IDE for macOS.
          </p>
        </div>

        {/* Chronological Releases List */}
        <div className="space-y-16">
          {CHANGELOG_DATA.map((release) => (
            <motion.article
              key={release.version}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 rounded-3xl border border-neutral-200 bg-white shadow-xs"
            >
              {/* Release Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pb-8 border-b border-neutral-200/80">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950">
                      CoreMind {release.version}
                    </h2>
                    {release.isLatest && (
                      <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Latest Release
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{release.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Tag className="w-4 h-4" />
                      <span>{release.tag}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-neutral-700 font-medium font-sans">
                      <Apple className="w-4 h-4" />
                      <span>macOS Apple Silicon</span>
                    </span>
                  </div>
                </div>

                <div>
                  <Link
                    to="/download"
                    className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-xs transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download v{release.version}</span>
                  </Link>
                </div>
              </div>

              {/* Release Summary */}
              <div className="mt-8 text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                {release.summary}
              </div>

              {/* Highlights List */}
              <div className="mt-8 bg-neutral-50/80 rounded-2xl p-6 sm:p-8 border border-neutral-200/80">
                <h3 className="text-xs sm:text-sm font-bold text-neutral-900 uppercase tracking-wider mb-4">
                  Highlights
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-neutral-700">
                  {release.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Detailed Breakdown Sections */}
              <div className="mt-10 space-y-8">
                {release.sections.map((section, sIdx) => (
                  <div key={sIdx} className="space-y-3">
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900">
                      {section.title}
                    </h4>
                    <ul className="space-y-2 text-sm sm:text-base text-neutral-600">
                      {section.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-neutral-400 mt-2 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Future Release Note */}
        <div className="mt-16 p-6 rounded-2xl border border-neutral-200 bg-neutral-50/60 text-xs text-neutral-600 flex items-start gap-3">
          <Apple className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            CoreMind delivers incremental improvements directly via notarized macOS disk images. Release notifications and automatic update verification will be supported in upcoming releases.
          </p>
        </div>
      </div>
    </div>
  );
};
