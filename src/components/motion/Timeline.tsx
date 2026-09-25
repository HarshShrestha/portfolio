import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

interface TimelineProps {
  children: ReactNode;
  className?: string;
}

export const TimelineItem = ({ date, title, subtitle, children }: TimelineItemProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline Dot */}
      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-background z-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
            duration: prefersReducedMotion ? 0 : 0.4
          }}
          className="absolute inset-0 rounded-full bg-accent"
        />
      </div>

      {/* Timeline Line */}
      <div className="absolute left-1.5 top-5 bottom-0 w-px bg-muted-foreground/20" />

      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium text-muted-foreground">{date}</span>
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        {children && <div className="mt-3">{children}</div>}
      </div>
    </div>
  );
};

export const Timeline = ({ children, className = '' }: TimelineProps) => {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
};
