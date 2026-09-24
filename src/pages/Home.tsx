import React from 'react';
import { ThemeToggle } from '../components/ui/ThemeToggle';
import { GradientOrbs } from '../components/motion/GradientOrbs';
import { ScrollProgress } from '../components/motion/ScrollProgress';
import { Reveal } from '../components/motion/Reveal';
import { Stagger } from '../components/motion/Stagger';
import { Typewriter } from '../components/motion/Typewriter';
import { Counter } from '../components/motion/Counter';
import { TiltCard } from '../components/motion/TiltCard';
import { MagneticButton } from '../components/motion/MagneticButton';
import { Marquee } from '../components/motion/Marquee';

const Home: React.FC = () => {
  return (
    <div className="min-h-[300vh] relative">
      <ScrollProgress />
      <GradientOrbs />

      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen gap-8">
        <Reveal direction="up">
          <h1 className="text-6xl font-bold text-accent text-center">
            <Typewriter text="Hello, I'm Harsh" speed={150} />
          </h1>
        </Reveal>

        <Stagger>
          <Reveal delay={0.1}><p className="text-muted text-xl">Full-stack developer & designer</p></Reveal>
          <Reveal delay={0.2}><p className="text-muted text-xl">Passionate about creating high-performance web experiences</p></Reveal>
        </Stagger>

        <MagneticButton className="mt-4">
          <button className="px-6 py-3 bg-accent text-bg font-bold rounded-full">
            Get in touch
          </button>
        </MagneticButton>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen gap-12">
        <div className="flex gap-8">
          <Counter value={10} className="text-6xl font-bold text-accent" />
          <Counter value={50} className="text-6xl font-bold text-accent" />
          <Counter value={100} className="text-6xl font-bold text-accent" />
        </div>

        <TiltCard className="p-1 bg-gradient-to-br from-accent to-accent-2 rounded-card">
          <div className="bg-surface p-8 rounded-card text-text max-w-sm text-center">
            <h2 className="text-2xl font-bold mb-4">Tilt Card</h2>
            <p>Hover over me to see the 3D tilt effect!</p>
          </div>
        </TiltCard>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen gap-8">
        <h2 className="text-3xl font-bold text-text">My Tech Stack</h2>
        <Marquee className="w-full">
          {['React', 'TypeScript', 'Tailwind', 'Node.js', 'Next.js', 'Python', 'Go', 'Rust'].map(tech => (
            <span key={tech} className="px-4 py-2 bg-surface border border-border rounded-full text-muted font-mono">
              {tech}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Home;
