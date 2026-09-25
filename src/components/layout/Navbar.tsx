import React from 'react';
import { navLinks } from '../../data/nav';
import { ThemeToggle } from '../ui/ThemeToggle';
import { ScrollProgress } from '../motion/ScrollProgress';
import { NavUnderline } from '../motion/NavUnderline';
import { useScrollSpy } from '../../hooks/useScrollSpy';

export const Navbar: React.FC = () => {
  const activeSection = useScrollSpy(navLinks.map(link => link.href));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <ScrollProgress />
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between backdrop-blur-md bg-surface/70 border-b border-border pointer-events-auto">
        <div className="text-accent font-mono font-bold text-lg tracking-tighter">
          harsh.dev
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative py-1 text-sm font-mono transition-colors duration-300 ${
                  isActive ? 'text-text' : 'text-muted hover:text-text'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
                {isActive && <NavUnderline />}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
