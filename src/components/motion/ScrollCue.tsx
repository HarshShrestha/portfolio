import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export const ScrollCue: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollY } = useScroll();

  // Fade out from opacity 1 to 0 between 0 and 100px of scroll
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-muted"
    >
      <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
      <motion.div
        animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </motion.div>
  );
};
