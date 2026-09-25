import React from 'react';
import { Mail, Phone, FileText, GitBranch } from 'lucide-react';
import { profile } from '../data/profile';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/motion/Reveal';
import { MagneticButton } from '../components/motion/MagneticButton';
import { CopyEmail } from '../components/contact/CopyEmail';
import { Stagger } from '../components/motion/Stagger';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 container mx-auto px-6">
      <SectionHeading
        number="07"
        title="Contact"
        subtitle="Let's connect and build something extraordinary together."
      />

      <div className="mt-16 max-w-4xl mx-auto">
        <Reveal direction="up">
          <div className="relative p-8 md:p-16 rounded-card bg-surface/40 border border-border backdrop-blur-xl text-center overflow-hidden group">
            {/* Background accents */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Get in touch
            </h3>
            <p className="text-muted mb-12 max-w-xl mx-auto">
              Whether you have a question or just want to say hi, my inbox is always open.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {/* Email */}
              <div className="flex flex-col items-center gap-4 p-6 rounded-card bg-white/5 border border-border/50 hover:border-accent/50 transition-colors">
                <div className="p-3 rounded-full bg-surface border border-border text-muted group-hover:text-accent transition-colors">
                  <Mail size={24} />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <CopyEmail />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center gap-4 p-6 rounded-card bg-white/5 border border-border/50 hover:border-accent/50 transition-colors">
                <div className="p-3 rounded-full bg-surface border border-border text-muted group-hover:text-accent transition-colors">
                  <Phone size={24} />
                </div>
                <a
                  href={`tel:${profile.phone}`}
                  className="font-mono text-sm text-muted hover:text-accent transition-colors text-center"
                >
                  {profile.phone}
                </a>
              </div>

              {/* Resume */}
              <div className="flex flex-col items-center gap-4 p-6 rounded-card bg-white/5 border border-border/50 hover:border-accent/50 transition-colors">
                <div className="p-3 rounded-full bg-surface border border-border text-muted group-hover:text-accent transition-colors">
                  <FileText size={24} />
                </div>
                <a
                  href="/resume.pdf"
                  download
                  className="font-mono text-sm text-muted hover:text-accent transition-colors text-center"
                >
                  Download Résumé
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-6">
              <Stagger>
                {Object.entries(profile.socials).map(([platform, url]) => {
                  const Icon = platform === 'github' ? GitBranch :
                                null;
                  if (!Icon) return null;
                  return (
                    <MagneticButton
                      key={platform}
                      className="p-4 rounded-full bg-surface border border-border hover:border-accent transition-all duration-300 group"
                    >
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted group-hover:text-accent transition-colors"
                      >
                        <Icon size={24} />
                      </a>
                    </MagneticButton>
                  );
                })}
              </Stagger>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
