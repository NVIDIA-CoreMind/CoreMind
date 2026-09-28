import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Tag, Calendar, Download, CheckCircle2, Apple } from 'lucide-react';
import { CHANGELOG_DATA } from '../data/product';


export const ChangelogPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-12 sm:py-20 border-b border-neutral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Page Hero */}
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Release History
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950">
            Changelog
          </h1>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            All updates, features, and platform improvements for the CoreMind desktop IDE for macOS.
          </p>
        </div>

        {/* Chronological Releases List */}
        <div className="space-y-12">
          {CHANGELOG_DATA.map((release) => (
            <motion.article
              key={release.version}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-10 rounded-3xl border border-neutral-200 bg-white shadow-xs"
            >
              {/* Release Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200/80">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950">
                      CoreMind {release.version}
                    </h2>
                    {release.isLatest && (
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Latest Release
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-neutral-500 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{release.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5" />
                      <span>{release.tag}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-neutral-700 font-medium">
                      <Apple className="w-3.5 h-3.5" />
                      <span>macOS Apple Silicon</span>
                    </span>
                  </div>
                </div>

                <div>
                  <Link
                    to="/download"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download v{release.version}</span>
                  </Link>
                </div>
              </div>

              {/* Release Summary */}
              <div className="mt-6 text-sm text-neutral-700 leading-relaxed font-medium">
                {release.summary}
              </div>

              {/* Highlights List */}
              <div className="mt-6 bg-neutral-50/80 rounded-2xl p-5 border border-neutral-200/80">
                <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-3">
                  Highlights
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-neutral-700">
                  {release.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Detailed Breakdown Sections */}
              <div className="mt-8 space-y-6">
                {release.sections.map((section, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <h4 className="text-sm font-bold text-neutral-900">
                      {section.title}
                    </h4>
                    <ul className="space-y-1.5 text-xs text-neutral-600">
                      {section.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
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
