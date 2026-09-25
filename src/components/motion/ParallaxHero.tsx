import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface ParallaxHeroProps {
  children: React.ReactNode;
}

export const ParallaxHero: React.FC<ParallaxHeroProps> = ({ children }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollY } = useScroll();

  // Map scrollY from 0 to 500px to a y translation from 0 to 80px
  const y = useTransform(scrollY, [0, 500], [0, 80]);

  if (prefersReducedMotion) {
    return <div className="relative">{children}</div>;
  }

  return (
    <motion.div style={{ y }} className="relative">
      {children}
    </motion.div>
  );
};
