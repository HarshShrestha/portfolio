import React from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface HoverScaleProps {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  y?: number;
  borderColor?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const HoverScale: React.FC<HoverScaleProps> = ({
  children,
  className = '',
  scale = 1.05,
  y = 0,
  borderColor = 'transparent',
  onClick,
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      onClick={onClick}
      whileHover={!prefersReducedMotion ? { scale, y, borderColor } : {}}
      className={className}
    >
      {children}
    </motion.div>
  );
};
