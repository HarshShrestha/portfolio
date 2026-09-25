import React from 'react';
import { Counter } from '../components/motion/Counter';
import { stats } from '../data/profile';

export const StatsStrip: React.FC = () => {
  return (
    <section className="relative w-full py-12 backdrop-blur-md bg-surface/70 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <Counter
              value={stat.value}
              suffix={stat.suffix}
              decimals={stat.decimals}
              className="text-4xl md:text-5xl font-bold text-accent"
            />
            <span className="text-muted font-mono text-xs uppercase tracking-widest mt-2">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
