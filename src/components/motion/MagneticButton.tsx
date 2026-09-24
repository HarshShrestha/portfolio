import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = '' }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    x.set((event.clientX - centerX) * 0.3);
    y.set((event.clientY - centerY) * 0.3);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      <motion.div
        style={{ x: springX, y: springY }}
        transition={springConfig}
      >
        {children}
      </motion.div>
    </div>
  );
};
