import React, { useEffect } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface CounterProps {
  value: number;
  direction?: 'up' | 'down';
  duration?: number;
  className?: string;
}

export const Counter: React.FC<CounterProps> = ({
  value,
  className = '',
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
  });

  const displayValue = useTransform(spring, (current) => {
    return Math.round(current);
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  if (prefersReducedMotion) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      <motion.span>{displayValue}</motion.span>
    </span>
  );
};
