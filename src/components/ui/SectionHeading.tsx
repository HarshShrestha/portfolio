import React from 'react';

interface SectionHeadingProps {
  title: string;
  number: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  number,
  subtitle,
  className = '',
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-accent text-sm opacity-80">
          // {number} — {title.toLowerCase()}
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
      </div>
      <h2 className="text-4xl font-bold text-text tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
