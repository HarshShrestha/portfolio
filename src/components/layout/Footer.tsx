import React from 'react';
import { motion } from 'framer-motion';
import { Code, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '../../data/profile';

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22c1.1 0 2-.9 2-2V4a2 2 0 0 0-2-2h-10c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10z" />
    <path d="M9 12h6" />
    <path d="M12 8v8" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" rx="2" />
    <circle cx="4" cy="4" r="4" />
  </svg>
);

// Using a simple constant for dev mode to avoid TS ImportMeta issues in some environments
const IS_DEV = true;

export const Footer: React.FC = () => {
  return (
    <footer className="w-full backdrop-blur-md bg-surface/70 border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left: Credits */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-mono text-xs text-muted">
            Built with React + Tailwind
          </span>
          <span className="font-mono text-[10px] text-muted/50">
            © {new Date().getFullYear()} {profile.name}
          </span>
        </div>

        {/* Center: Email */}
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-2 text-accent font-mono text-sm hover:underline transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail className="w-4 h-4" />
          {profile.email}
        </a>

        {/* Right: Socials & Dev Link */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <motion.a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, color: 'var(--color-accent)' }}
              className="text-muted transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, color: 'var(--color-accent)' }}
              className="text-muted transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={profile.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, color: 'var(--color-accent)' }}
              className="text-muted transition-colors"
              aria-label="LeetCode"
            >
              <Code className="w-5 h-5" />
            </motion.a>
          </div>

          {IS_DEV && (
            <Link
              to="/dev"
              className="text-xs font-mono text-muted border border-border px-2 py-1 rounded hover:text-accent hover:border-accent transition-colors"
            >
              [DEV]
            </Link>
          )}
        </div>

      </div>
    </footer>
  );
};
