import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft, AlertCircle } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-12 sm:py-20 border-b border-[#E8E8E8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#6B6B6B] hover:text-[#111111] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to CoreMind</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-10 pb-8 border-b border-[#E8E8E8]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F7F8] border border-[#E8E8E8] text-xs font-mono text-[#6B6B6B] mb-4">
            <FileText className="w-3.5 h-3.5 text-[#111111]" />
            <span>Draft for Legal Review</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
            Terms of Service
          </h1>

          <p className="mt-3 text-sm text-[#6B6B6B]">
            Last updated: October 2026 • Version 1.0 (Draft)
          </p>
        </div>

        {/* Legal Disclaimer Notice */}
        <div className="mb-10 p-4 rounded-xl bg-[#F7F7F8] border border-[#E8E8E8] text-xs text-[#6B6B6B] flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold text-[#111111] block">
              Notice to Users and Contributors
            </span>
            <p>
              These Terms of Service govern the use of the CoreMind desktop software and website. Placeholders marked for the project maintainers must be completed prior to formal commercial distribution.
            </p>
          </div>
        </div>

        {/* Document Content */}
        <div className="space-y-8 text-sm text-[#333333] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#111111] tracking-tight">
              1. Agreement to Terms
            </h2>
            <p>
              By downloading, installing, accessing, or using CoreMind, you agree to be bound by these Terms of Service. If you do not agree to these terms, you should not download or use the software.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#111111] tracking-tight">
              2. License and Software Use
            </h2>
            <p>
              CoreMind provides a desktop development environment. Subject to compliance with applicable open-source licenses and these terms, you are granted a non-exclusive license to use the software for personal, academic, and commercial software development purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#111111] tracking-tight">
              3. User Code and Intellectual Property Ownership
            </h2>
            <p>
              You retain all ownership rights, copyright, and title to your original source code, projects, and assets developed inside CoreMind. CoreMind does not claim ownership over your software or any outputs generated through your prompts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#111111] tracking-tight">
              4. Third-Party AI Services and Model Outputs
            </h2>
            <p>
              AI-generated code, explanations, and diffs are generated via statistical machine learning models. You acknowledge that:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#6B6B6B]">
              <li>
                AI suggestions may occasionally contain syntax errors, security vulnerabilities, or logical inaccuracies.
              </li>
              <li>
                You are solely responsible for reviewing, testing, verifying, and validating all code before committing or deploying it to production systems.
              </li>
              <li>
                Your use of external AI models is subject to the terms and acceptable use policies of the respective model providers.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#111111] tracking-tight">
              5. Acceptable Use
            </h2>
            <p>
              You agree not to use CoreMind or its integrated AI capabilities to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#6B6B6B]">
              <li>Develop malware, viruses, exploit payloads, or software intended to disrupt computing systems.</li>
              <li>Violate the intellectual property rights or privacy of third parties.</li>
              <li>Circumvent or tamper with application security controls or third-party API rate limits.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#111111] tracking-tight">
              6. Disclaimer of Warranties
            </h2>
            <p>
              The CoreMind application and website are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#111111] tracking-tight">
              7. Limitation of Liability
            </h2>
            <p>
              In no event shall the authors, maintainers, or copyright holders of CoreMind be liable for any claim, damages, data loss, downtime, or other liability arising from the use of or inability to use the software.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#111111] tracking-tight">
              8. Contact and Project Information
            </h2>
            <div className="p-4 rounded-lg bg-[#F7F7F8] border border-[#E8E8E8] space-y-2 text-xs font-mono">
              <div>
                <span className="text-[#8E8E93]">Legal Entity:</span>{' '}
                <span className="text-[#111111]">[To be supplied by project owner: Legal Entity Name / Organization]</span>
              </div>
              <div>
                <span className="text-[#8E8E93]">Jurisdiction:</span>{' '}
                <span className="text-[#111111]">[To be supplied by project owner: Applicable Governing Jurisdiction]</span>
              </div>
              <div>
                <span className="text-[#8E8E93]">Inquiries:</span>{' '}
                <span className="text-[#111111]">[To be supplied by project owner: Legal Support Contact Email]</span>
              </div>
              <div>
                <span className="text-[#8E8E93]">Project Repository:</span>{' '}
                <a
                  href="https://github.com/NVIDIA-CoreMind"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://github.com/NVIDIA-CoreMind
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
