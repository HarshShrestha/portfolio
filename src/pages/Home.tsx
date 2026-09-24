import React from 'react';
import { ThemeToggle } from '../components/ui/ThemeToggle';
import { GradientOrbs } from '../components/motion/GradientOrbs';
import { ScrollProgress } from '../components/motion/ScrollProgress';
import { Reveal } from '../components/motion/Reveal';
import { Stagger } from '../components/motion/Stagger';

const Home: React.FC = () => {
  return (
    <div className="min-h-[200vh] relative">
      <ScrollProgress />
      <GradientOrbs />

      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen gap-8">
        <Reveal direction="up">
          <h1 className="text-6xl font-bold text-accent text-center">
            Welcome to my Portfolio
          </h1>
        </Reveal>

        <Stagger>
          <Reveal delay={0.1}><p className="text-muted text-xl">Motion Primitives implemented.</p></Reveal>
          <Reveal delay={0.2}><p className="text-muted text-xl">Scroll down to see reveals.</p></Reveal>
          <Reveal delay={0.3}><p className="text-muted text-xl">Check the top progress bar.</p></Reveal>
        </Stagger>
      </div>

      <div className="flex items-center justify-center min-h-screen">
        <Reveal direction="left">
          <div className="p-8 bg-surface border border-border rounded-card text-text max-w-md text-center">
            <h2 className="text-2xl font-bold mb-4">Reveal from Left</h2>
            <p>This component animated into view as you scrolled down.</p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Home;
