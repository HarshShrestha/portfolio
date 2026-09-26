import React from 'react';
import { HoverScale } from '../motion/HoverScale';

interface TagProps {
  children: React.ReactNode;
  variant?: 'accent' | 'muted';
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  variant = 'accent',
  className = '',
}) => {
  const styles = {
    accent: 'bg-accent/10 text-accent border border-accent/20',
    muted: 'bg-surface text-muted border border-border',
  };

  return (
    <HoverScale
      scale={1.1}
      className={`${styles[variant]} ${className} px-3 py-1 rounded-full text-xs font-mono transition-colors inline-block`}
    >
      {children}
    </HoverScale>
  );
};
