import React from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  onClick,
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      onClick={onClick}
      whileHover={hoverEffect && !prefersReducedMotion ? { y: -5, borderColor: 'var(--color-accent)' } : {}}
      className={`${className} p-6 bg-surface/70 backdrop-blur-md border border-border rounded-card transition-colors duration-300`}
    >
      {children}
    </motion.div>
  );
};
