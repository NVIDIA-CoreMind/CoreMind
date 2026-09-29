import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Building2,
  Workflow,
  Lock,
  Cpu,
  Layers,
  ArrowRight,
  Server
} from 'lucide-react';

export const EnterpriseSection: React.FC = () => {
  const enterpriseFeatures = [
    {
      title: 'AI Native Product Development Workflow',
      description: 'Unify planning, architecture specification, coding, automated testing, and CI/CD delivery into one continuous agentic loop.',
      icon: Workflow,
      badge: 'Unified Lifecycle'
    },
    {
      title: 'End-to-End Enterprise Security',
      description: 'Zero code retention policy, air-gapped on-premise or private VPC deployments, SOC2 Type II, ISO 27001, and HIPAA compliance.',
      icon: Lock,
      badge: 'Zero Retention'
    },
    {
      title: 'Personalized Private AI Agents',
      description: 'Fine-tune agents on your private codebases, internal SDKs, architectural style guides, and design systems with automated access control.',
      icon: Cpu,
      badge: 'Internal Context'
    },
    {
      title: 'Enterprise AI Governance & RBAC',
      description: 'Dedicated administration portal with SAML 2.0 / Okta SSO, seat allocation analytics, audit logs, and granular model provider routing.',
      icon: Building2,
      badge: 'Governance'
    },
    {
      title: 'Continuous Autonomous AI Employees',
      description: 'Fleet of dedicated agents running 24/7 to triage open issues, resolve CVE security advisories, and refactor legacy technical debt.',
      icon: Layers,
      badge: 'Fleet Automation'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-neutral-200/80">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider border border-emerald-200/60 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Enterprise Grade</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950">
            CoreMind Enterprise
          </h2>
          <p className="mt-3 text-xl sm:text-2xl font-semibold text-neutral-800 tracking-tight">
            Enable CoreMind to operate securely and controllably within enterprises
          </p>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Unify the engineering team&apos;s toolchain and integrate autonomous agent capabilities into your platforms, repositories, and R&amp;D processes.
          </p>
        </div>

        {/* 6 Enterprise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {enterpriseFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className={`rounded-3xl border border-neutral-200/90 bg-neutral-50/50 p-7 sm:p-8 flex flex-col justify-between hover:bg-white hover:border-neutral-300 hover:shadow-md transition-all duration-200 ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-white border border-neutral-200/80 text-emerald-600 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
                    {feat.title}
                  </h3>

                  <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center text-xs font-semibold text-neutral-800">
                  <span className="text-emerald-700 font-semibold">Enterprise Ready</span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Direct Enterprise Contact Action */}
          <div className="rounded-3xl border-2 border-emerald-500 bg-emerald-50/40 text-neutral-950 p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
            <div>
              <div className="p-3 rounded-2xl bg-white text-emerald-600 w-fit mb-5 border border-emerald-200 shadow-2xs">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950">
                Custom VPC &amp; On-Premise Deployment
              </h3>
              <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
                Deploy CoreMind agents inside your own AWS, Azure, or GCP infrastructure with zero external network calls and hardware acceleration.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-200/80">
              <Link
                to="/enterprise"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-xs transition-all hover:scale-[1.02]"
              >
                <span>Talk to Enterprise Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
