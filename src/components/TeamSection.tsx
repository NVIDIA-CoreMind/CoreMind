import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { TEAM_MEMBERS, type TeamMember } from '../data/product';

const TeamAvatar: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="w-14 h-14 rounded-full bg-[#F7F7F8] border border-[#E8E8E8] flex items-center justify-center overflow-hidden shrink-0 shadow-2xs select-none">
      {!hasError && member.avatarUrl ? (
        <img
          src={member.avatarUrl}
          alt={member.name}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={() => setHasError(true)}
        />
      ) : (
        <span className="text-sm font-mono font-bold text-[#111111] tracking-wider">
          {member.initials}
        </span>
      )}
    </div>
  );
};

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 sm:py-28 bg-white border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-medium text-[#6B6B6B] uppercase tracking-wider bg-white border border-[#E8E8E8] px-3 py-1 rounded-full">
            The Team
          </span>

          <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-[#111111]">
            Built by developers.
          </h2>

          <p className="mt-4 text-lg text-[#6B6B6B] leading-relaxed">
            CoreMind is built by a team of three developers working together to explore the future of AI-powered software development.
          </p>
        </div>

        {/* Team Cards Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TEAM_MEMBERS.map((member: TeamMember) => (
            <div
              key={member.username}
              className="group bg-white rounded-2xl border border-[#E8E8E8] p-6 sm:p-7 text-left flex flex-col justify-between shadow-2xs hover:border-[#111111]/30 hover:-translate-y-[3px] transition-all duration-200"
            >
              <div>
                {/* Top Row: Avatar & Initials Badge */}
                <div className="flex items-center justify-between mb-5">
                  <TeamAvatar member={member} />
                  <span className="text-xs font-mono font-semibold text-[#8E8E93] bg-[#F7F7F8] border border-[#E8E8E8] px-2.5 py-1 rounded-md">
                    {member.initials}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-lg sm:text-xl font-bold text-[#111111] tracking-tight">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="mt-1 text-sm font-medium text-[#111111]/80">
                  {member.role}
                </p>

                {/* Description */}
                <p className="mt-3 text-sm text-[#6B6B6B] leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* GitHub Link Interaction */}
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 pt-4 border-t border-[#F0F0F0] flex items-center justify-between text-xs group/link"
                aria-label={`Open ${member.name}'s GitHub profile @${member.username}`}
              >
                <div className="flex items-center gap-2 text-[#6B6B6B] group-hover/link:text-[#111111] transition-colors">
                  <svg className="w-4 h-4 fill-current text-[#111111] shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span className="font-mono font-medium">@{member.username}</span>
                </div>

                <div className="inline-flex items-center gap-1.5 font-medium text-[#111111] group-hover/link:text-black">
                  <span>GitHub</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6B6B6B] group-hover/link:text-[#111111] group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
