import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, AlertCircle } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
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
            <Shield className="w-3.5 h-3.5 text-[#111111]" />
            <span>Draft for Legal Review</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
            Privacy Policy
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
              This Privacy Policy describes data handling for the CoreMind desktop application and project website. Placeholders marked for the project maintainers must be finalized with formal corporate registration details before commercial deployment.
            </p>
          </div>
        </div>

        {/* Document Content */}
        <div className="space-y-8 text-sm text-[#333333] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#111111] tracking-tight">
              1. Overview and Scope
            </h2>
            <p>
              CoreMind is an integrated development environment (IDE) built for macOS Apple Silicon. This Privacy Policy outlines what information is processed when you use the CoreMind desktop software and browse the official project website (<a href="https://coremind.dev" className="text-blue-600 hover:underline">coremind.dev</a>).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#111111] tracking-tight">
              2. Local Workspace Processing
            </h2>
            <p>
              By default, project indexing, code parsing, syntax tree generation, Git status checks, and local file searches operate directly on your local computer. Your source files, repository structure, and build artifacts remain on your local disk unless you explicitly trigger an AI interaction that requires transmitting context.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#111111] tracking-tight">
              3. AI Provider Integrations and Data Transmission
            </h2>
            <p>
              CoreMind integrates with external AI reasoning providers and models to provide features such as inline code assists (Cmd+K), assistant drawer interactions (Cmd+L), and multi-step agent planning.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#6B6B6B]">
              <li>
                <strong className="text-[#111111]">Prompts and Code Context:</strong> When you invoke AI assistance or prompt the agent, relevant code snippets, surrounding file context, and your instructions are transmitted over HTTPS to the configured AI model backend.
              </li>
              <li>
                <strong className="text-[#111111]">API Keys and Credentials:</strong> If you provide your own API keys for model providers, those credentials are stored locally on your machine and sent directly to the respective API endpoint to authorize requests.
              </li>
              <li>
                <strong className="text-[#111111]">Third-Party Model Policies:</strong> Requests transmitted to external AI providers (such as Anthropic, OpenAI, or custom server endpoints) are subject to each provider’s respective data processing agreements and retention terms. CoreMind does not control how external model providers process data once received.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#111111] tracking-tight">
              4. Website Analytics and Cookies
            </h2>
            <p>
              The CoreMind marketing website is hosted statically. We do not use third-party behavioral advertising trackers. Standard server hosting logs (such as IP address, user-agent, and requested file) may be captured by the hosting infrastructure (such as GitHub Pages) for diagnostic and security purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#111111] tracking-tight">
              5. Data Storage and Retention
            </h2>
            <p>
              CoreMind does not maintain centralized servers that collect, store, or sell your proprietary source code. Application configuration preferences and local index caches remain stored locally on your machine within the application support directory.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#111111] tracking-tight">
              6. Security Measures and Limitations
            </h2>
            <p>
              We implement industry-standard safeguards, including TLS encryption for network communications. However, software and transmission over the Internet cannot be guaranteed as completely secure. You are responsible for protecting access to your local machine and your API credentials.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#111111] tracking-tight">
              7. User Rights and Choices
            </h2>
            <p>
              You maintain full control over your project code. You may clear your local application index, remove stored API credentials, or uninstall CoreMind at any time. You can choose whether and when to transmit code context to AI providers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#111111] tracking-tight">
              8. Contact Information and Entity Details
            </h2>
            <div className="p-4 rounded-lg bg-[#F7F7F8] border border-[#E8E8E8] space-y-2 text-xs font-mono">
              <div>
                <span className="text-[#8E8E93]">Legal Entity:</span>{' '}
                <span className="text-[#111111]">[To be supplied by project owner: Legal Entity Name / Organization]</span>
              </div>
              <div>
                <span className="text-[#8E8E93]">Registered Address:</span>{' '}
                <span className="text-[#111111]">[To be supplied by project owner: Registered Business Address]</span>
              </div>
              <div>
                <span className="text-[#8E8E93]">Contact Email:</span>{' '}
                <span className="text-[#111111]">[To be supplied by project owner: Privacy Contact Email]</span>
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
