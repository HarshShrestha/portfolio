import React from 'react';
import { HoverScale } from '../motion/HoverScale';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  onClick,
}) => {
  if (!hoverEffect) {
    return (
      <div
        onClick={onClick}
        className={`${className} p-6 bg-surface/70 backdrop-blur-md border border-border rounded-card transition-colors duration-300`}
      >
        {children}
      </div>
    );
  }

  return (
    <HoverScale
      y={-5}
      borderColor="var(--color-accent)"
      className={`${className} p-6 bg-surface/70 backdrop-blur-md border border-border rounded-card transition-colors duration-300 cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </HoverScale>
  );
};
