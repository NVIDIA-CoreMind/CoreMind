import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Zap, ArrowRight } from 'lucide-react';
import { FAQSection } from '../components/FAQSection';

export const PricingPage: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Free',
      badge: 'Community',
      price: '$0',
      period: 'forever',
      description: 'Essential AI completion and local codebase exploration for individual developers.',
      features: [
        '500 monthly fast completion credits',
        'Local codebase indexing & syntax AST',
        'Standard Claude & GPT-4o models',
        'Single-file edits & inline assists',
        'Community Discord support'
      ],
      cta: 'Get Started for Free',
      ctaLink: '/download',
      popular: false
    },
    {
      name: 'Pro',
      badge: 'Most Popular',
      price: billingPeriod === 'monthly' ? '$20' : '$16',
      period: '/ month',
      description: 'For power developers who want unlimited Quest Mode runs and multi-file autonomous agents.',
      features: [
        'Free 2-Week Pro Trial included',
        '3,000 priority reasoning credits / month',
        'Unlimited Quest Mode agent runs',
        'Claude 3.7 Sonnet & DeepSeek-R1 models',
        'Automatic Repo Wiki architectural memory',
        'Integrated test runner & regression sandbox',
        'Priority email & Discord support'
      ],
      cta: 'Start 14-Day Free Trial',
      ctaLink: '/download',
      popular: true
    },
    {
      name: 'Team',
      badge: 'High Velocity',
      price: billingPeriod === 'monthly' ? '$40' : '$32',
      period: '/ seat / month',
      description: 'Centralized governance, shared team credits, and collaborative repo memory for engineering teams.',
      features: [
        'Everything in Pro plus pooled team credits',
        'Shared organization Repo Wikis & styles',
        'Centralized billing & member role management',
        'GitHub & GitLab CI/CD webhook integrations',
        'Admin dashboard with seat analytics',
        'Dedicated onboarding engineer'
      ],
      cta: 'Start Team Trial',
      ctaLink: '/download',
      popular: false
    },
    {
      name: 'Enterprise',
      badge: 'Custom & Secure',
      price: 'Custom',
      period: 'tailored licensing',
      description: 'Air-gapped on-premise or private VPC deployment with strict zero data retention guarantees.',
      features: [
        'Air-gapped deployment in AWS, Azure, or GCP',
        'Zero Data Retention compliance agreement',
        'SAML 2.0, Okta, and Azure AD SSO',
        'Dedicated Autonomous AI Employees fleet',
        'Fine-tuned models on internal proprietary code',
        '24/7 dedicated enterprise SLA & TAM'
      ],
      cta: 'Contact Enterprise Sales',
      ctaLink: '/enterprise',
      popular: false
    }
  ];

  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider border border-emerald-200/60 mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Transparent Credit-Based Pricing</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-950">
            Simple, predictable pricing
          </h1>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            Start with our 14-day free Pro Trial. Scale seamlessly from individual developer to global enterprise fleet.
          </p>

          {/* Billing Interval Toggle */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center p-1 rounded-full bg-neutral-100 border border-neutral-200">
              <button
                type="button"
                onClick={() => setBillingPeriod('monthly')}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-white text-neutral-950 shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                Monthly billing
              </button>
              <button
                type="button"
                onClick={() => setBillingPeriod('annual')}
                className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  billingPeriod === 'annual'
                    ? 'bg-white text-neutral-950 shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                <span>Annual billing</span>
                <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ${
                plan.popular
                  ? 'bg-white text-neutral-900 border-2 border-emerald-600 shadow-xl relative ring-4 ring-emerald-50'
                  : 'bg-neutral-50/50 text-neutral-900 border border-neutral-200/90 shadow-xs hover:border-neutral-300 hover:bg-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-full ${
                      plan.popular
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                        : 'bg-neutral-100 text-neutral-700 border border-neutral-200'
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-neutral-950">{plan.name}</h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950">
                    {plan.price}
                  </span>
                  <span className="text-xs text-neutral-500 font-medium">
                    {plan.period}
                  </span>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-neutral-600">
                  {plan.description}
                </p>

                {/* Features list */}
                <div className="mt-6 pt-6 border-t border-neutral-200 space-y-2.5 text-xs text-left">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                      <span className="text-neutral-700">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  to={plan.ctaLink}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    plan.popular
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-xs hover:scale-[1.02]'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-200'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing FAQ */}
        <div className="mt-20">
          <FAQSection />
        </div>
      </div>
    </div>
  );
};
