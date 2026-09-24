import React from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface StaggerProps {
  children: React.ReactNode;
  delay?: number;
  staggerAmount?: number;
}

export const Stagger: React.FC<StaggerProps> = ({
  children,
  delay = 0,
  staggerAmount = 0.1,
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <div className="contents">{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        staggerChildren: staggerAmount,
        delayChildren: delay,
      }}
      className="contents"
    >
      {children}
    </motion.div>
  );
};
