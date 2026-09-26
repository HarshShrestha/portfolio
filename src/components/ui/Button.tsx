import React from 'react';
import { HoverTap } from '../motion/HoverTap';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  magnetic?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const variants = {
    primary: 'bg-accent text-bg font-bold hover:bg-accent/90',
    secondary: 'bg-surface text-text border border-border hover:bg-border',
    ghost: 'bg-transparent text-text hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  return (
    <HoverTap
      className={`${variants[variant]} ${sizes[size]} ${className} rounded-full transition-all duration-200 inline-block text-center`}
    >
      <button
        className="w-full h-full"
        {...(props as Record<string, unknown>)}
      >
        {children}
      </button>
    </HoverTap>
  );
};
