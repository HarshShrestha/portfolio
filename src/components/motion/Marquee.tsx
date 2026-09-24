import React from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface MarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  direction = 'left',
  speed = 20,
  className = '',
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <div className={`flex gap-4 overflow-hidden ${className}`}>{children}</div>;
  }

  return (
    <div className={`overflow-hidden whitespace-nowrap relative ${className}`}>
      <motion.div
        className="flex gap-4 inline-block"
        animate={{
          x: direction === 'left' ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {/* Duplicate children to ensure seamless loop */}
        <div className="flex gap-4">{children}</div>
        <div className="flex gap-4">{children}</div>
      </motion.div>
    </div>
  );
};
