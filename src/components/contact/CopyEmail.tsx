import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Check } from 'lucide-react';
import { profile } from '../../data/profile';

export const CopyEmail: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleCopy}
        className="group relative flex items-center gap-3 px-6 py-3 rounded-card bg-surface/50 border border-border hover:border-accent transition-all duration-300 active:scale-95"
        aria-label="Copy email to clipboard"
      >
        <div className="relative w-5 h-5">
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="absolute inset-0 text-accent"
              >
                <Check size={18} />
              </motion.div>
            ) : (
              <motion.div
                key="mail"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="absolute inset-0 text-muted group-hover:text-accent transition-colors"
              >
                <Mail size={18} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <span className="font-mono text-sm text-muted group-hover:text-text transition-colors">
          {copied ? 'Copied!' : profile.email}
        </span>
      </button>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-black text-[10px] font-bold uppercase tracking-wider pointer-events-none whitespace-nowrap z-20 shadow-lg shadow-accent/20"
          >
            Email Copied!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
