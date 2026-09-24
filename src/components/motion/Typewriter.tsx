import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 100,
  delay = 0,
  className = '',
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = setTimeout(() => {
      setIndex(1);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay, prefersReducedMotion]);

  useEffect(() => {
    if (!prefersReducedMotion && index > 0 && index <= text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed, prefersReducedMotion]);

  const finalText = prefersReducedMotion ? text : displayText;

  return (
    <span className={className}>
      {finalText}
      {!prefersReducedMotion && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
          className="inline-block w-[2px] h-[1em] bg-accent ml-1 align-middle"
        />
      )}
    </span>
  );
};
