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
import { Button } from '../components/ui/Button';
import { Tag } from '../components/ui/Tag';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-[300vh] relative">
      <ScrollProgress />
      <GradientOrbs />

      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <Link to="/dev" className="px-3 py-1 text-xs font-mono text-muted border border-border rounded-full hover:text-accent hover:border-accent transition-colors">
          /dev
        </Link>
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
          <Button variant="primary" size="lg">
            Get in touch
          </Button>
        </MagneticButton>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen gap-12">
        <SectionHeading
          number="01"
          title="Stats"
          subtitle="A quick glimpse into my journey"
        />
        <div className="flex gap-8">
          <Counter value={10} className="text-6xl font-bold text-accent" />
          <Counter value={50} className="text-6xl font-bold text-accent" />
          <Counter value={100} className="text-6xl font-bold text-accent" />
        </div>

        <TiltCard className="p-1 bg-gradient-to-br from-accent to-accent-2 rounded-card">
          <Card>
            <h2 className="text-2xl font-bold mb-4">Tilt Card</h2>
            <p className="text-muted">Hover over me to see the 3D tilt effect!</p>
            <div className="flex gap-2 mt-4">
              <Tag variant="accent">React</Tag>
              <Tag variant="muted">Framer Motion</Tag>
            </div>
          </Card>
        </TiltCard>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen gap-8">
        <SectionHeading
          number="02"
          title="Tech Stack"
          subtitle="Tools and languages I use to build the web"
        />
        <Marquee className="w-full">
          {['React', 'TypeScript', 'Tailwind', 'Node.js', 'Next.js', 'Python', 'Go', 'Rust'].map(tech => (
            <Tag key={tech} variant="muted" className="px-4 py-2">
              {tech}
            </Tag>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Home;
