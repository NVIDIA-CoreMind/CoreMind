import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  Server,
  Building2,
  Cpu,
  Workflow,
  Zap,
  Check
} from 'lucide-react';

export const EnterprisePage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '50-200',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const enterpriseCapabilities = [
    {
      title: 'Private VPC & Air-Gapped Deployment',
      description: 'Host CoreMind autonomous agents entirely inside your AWS VPC, Azure Virtual Network, or Google Cloud Project with zero external telemetry.',
      icon: Server,
      badge: 'Infrastructure'
    },
    {
      title: 'Model Sovereignty & Custom Fine-Tuning',
      description: 'Fine-tune agents on internal proprietary frameworks, internal SDKs, and architectural blueprints with automated access boundaries.',
      icon: Cpu,
      badge: 'AI Sovereignty'
    },
    {
      title: 'Enterprise RBAC & Identity Governance',
      description: 'Native Okta, Microsoft Entra ID (Azure AD), SAML 2.0 Single Sign-On, automated SCIM provisioning, and full compliance audit logging.',
      icon: Building2,
      badge: 'Identity & Access'
    },
    {
      title: 'Continuous Autonomous CVE Remediation',
      description: 'Automated background agent workers actively audit dependencies, triage CVE vulnerability advisories, and submit verified patch PRs.',
      icon: ShieldCheck,
      badge: 'Security Fleet'
    },
    {
      title: 'Unified SDLC Pipeline Integration',
      description: 'Seamless bi-directional integration with GitHub Enterprise, GitLab Self-Managed, Jira, and internal CI/CD orchestration runners.',
      icon: Workflow,
      badge: 'DevOps'
    },
    {
      title: '24/7 Dedicated TAM & 99.99% SLA',
      description: 'Guaranteed mission-critical uptime SLA, dedicated Technical Account Manager (TAM), and tailored on-site engineering onboarding.',
      icon: Zap,
      badge: 'Support'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Enterprise Hero */}
      <section className="py-16 sm:py-24 bg-neutral-50/50 border-b border-neutral-200 text-neutral-950 relative overflow-hidden">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider border border-emerald-200 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Autonomous AI for Enterprise R&amp;D</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight max-w-5xl mx-auto leading-tight text-neutral-950">
            Enable autonomous coding securely at enterprise scale
          </h1>

          <p className="mt-6 text-base sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Deploy specialized autonomous AI agent fleets inside your own secure perimeter. Keep intellectual property strictly confidential with verified Zero Data Retention.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#contact-sales"
              className="px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all hover:scale-[1.02] shadow-xs"
            >
              Request Architecture Consultation
            </a>
            <a
              href="#security-compliance"
              className="px-7 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 font-semibold text-sm transition-colors"
            >
              View Compliance &amp; Certifications
            </a>
          </div>

          {/* Compliance Logos */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono">
            <span className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 shadow-2xs">SOC 2 Type II Certified</span>
            <span className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 shadow-2xs">ISO / IEC 27001</span>
            <span className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 shadow-2xs">GDPR &amp; CCPA Compliant</span>
            <span className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 shadow-2xs">Zero Data Retention</span>
          </div>
        </div>
      </section>

      {/* Enterprise Capabilities Grid */}
      <section className="py-20 sm:py-28 bg-white border-b border-neutral-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
              Engineered for Enterprise Governance &amp; Scale
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600">
              Provide engineering organizations with high-velocity autonomy without sacrificing security, governance, or code provenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {enterpriseCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-neutral-200/90 bg-neutral-50/40 p-7 sm:p-8 flex flex-col justify-between hover:bg-white hover:border-neutral-300 hover:shadow-md transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3 rounded-2xl bg-white text-emerald-600 shadow-2xs border border-emerald-100">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {cap.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-950 tracking-tight">
                      {cap.title}
                    </h3>

                    <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-200/70 flex items-center text-xs font-semibold text-emerald-700">
                    <Check className="w-4 h-4 mr-1.5" />
                    <span>Included in Enterprise Plan</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security & Compliance Deep-Dive */}
      <section id="security-compliance" className="py-20 sm:py-28 bg-neutral-50/50 border-b border-neutral-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold uppercase tracking-wider border border-amber-200">
                <Lock className="w-3.5 h-3.5" />
                <span>Security &amp; Governance</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
                Zero data retention. Full isolation.
              </h2>

              <p className="text-neutral-600 text-base leading-relaxed">
                CoreMind is built from the ground up for strict regulatory environments including financial services, healthcare, and critical infrastructure.
              </p>

              <div className="space-y-3.5 pt-2">
                {[
                  'Zero data retention: customer code is never cached, logged, or used for model training',
                  'VPC Air-Gapped deployment on AWS, Google Cloud, or Microsoft Azure',
                  'SAML 2.0 / Okta / Microsoft Entra Single Sign-On and automated SCIM provisioning',
                  'Granular repository RBAC permissions and tamper-evident audit trails',
                  'Hardware-accelerated local inference option for high-security air-gapped workstations'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-neutral-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Interactive Contact Form */}
            <div id="contact-sales" className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200/90 shadow-lg text-left">
                <h3 className="text-2xl font-bold text-neutral-950 tracking-tight">
                  Contact Enterprise Solutions
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Speak directly with an enterprise solutions architect about pilots and private VPC deployment.
                </p>

                {submitted ? (
                  <div className="mt-8 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                    <div className="font-bold text-emerald-950">Inquiry Received</div>
                    <p className="text-xs text-emerald-800">
                      Thank you! An enterprise technical specialist will reach out within 4 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase mb-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@enterprise.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 uppercase mb-1">
                          Company
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Corp"
                          className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 uppercase mb-1">
                          Engineering Team Size
                        </label>
                        <select
                          value={formData.teamSize}
                          onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 bg-white"
                        >
                          <option value="10-50">10–50 engineers</option>
                          <option value="50-200">50–200 engineers</option>
                          <option value="200-1000">200–1,000 engineers</option>
                          <option value="1000+">1,000+ engineers</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase mb-1">
                        Project Goals / Architecture Notes
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="We are looking for private VPC deployment with GitHub Enterprise integration..."
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-xs"
                    >
                      Submit Enterprise Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
