import React from 'react';
import { motion, HTMLMotionProps, Variants } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface RevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  ...props
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  if (prefersReducedMotion) {
    const motionProps = [
      'initial', 'animate', 'exit', 'variants',
      'whileInView', 'whileHover', 'whileTap', 'whileFocus',
      'viewport', 'transition'
    ];

    const filteredProps = Object.keys(props).reduce((acc, key) => {
      if (!motionProps.includes(key)) {
        (acc as Record<string, unknown>)[key] = (props as Record<string, unknown>)[key];
      }
      return acc;
    }, {} as React.HTMLAttributes<HTMLDivElement>);

    return <div {...filteredProps}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
};
