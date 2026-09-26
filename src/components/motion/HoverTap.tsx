import React from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface HoverTapProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  tapScale?: number;
}

export const HoverTap: React.FC<HoverTapProps> = ({
  children,
  className = '',
  hoverScale = 1.05,
  tapScale = 0.95,
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      whileHover={!prefersReducedMotion ? { scale: hoverScale } : {}}
      whileTap={!prefersReducedMotion ? { scale: tapScale } : {}}
      className={className}
    >
      {children}
    </motion.div>
  );
};
