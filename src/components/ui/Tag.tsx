import React from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface TagProps {
  children: React.ReactNode;
  variant?: 'accent' | 'muted';
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  variant = 'accent',
  className = '',
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const styles = {
    accent: 'bg-accent/10 text-accent border border-accent/20',
    muted: 'bg-surface text-muted border border-border',
  };

  return (
    <motion.span
      whileHover={{ scale: prefersReducedMotion ? 1 : 1.1 }}
      className={`${styles[variant]} ${className} px-3 py-1 rounded-full text-xs font-mono transition-colors`}
    >
      {children}
    </motion.span>
  );
};
