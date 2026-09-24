import React from 'react';
import { Reveal } from '../components/motion/Reveal';
import { Stagger } from '../components/motion/Stagger';
import { GradientOrbs } from '../components/motion/GradientOrbs';
import { ScrollProgress } from '../components/motion/ScrollProgress';
import { Typewriter } from '../components/motion/Typewriter';
import { Counter } from '../components/motion/Counter';
import { TiltCard } from '../components/motion/TiltCard';
import { MagneticButton } from '../components/motion/MagneticButton';
import { Marquee } from '../components/motion/Marquee';
import { Button } from '../components/ui/Button';
import { Tag } from '../components/ui/Tag';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';

const DevShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg text-text p-8 font-body">
      <ScrollProgress />
      <GradientOrbs />

      <div className="max-w-4xl mx-auto space-y-24">
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-accent font-heading">Dev Showcase</h1>
          <p className="text-muted">Internal primitive library for the Neon Terminal design system</p>
        </header>

        {/* Motion Primitives Section */}
        <section className="space-y-12">
          <SectionHeading number="01" title="Motion Primitives" subtitle="Interactive animation primitives" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-xl font-bold mb-4 font-mono">Reveal & Stagger</h3>
              <div className="space-y-4">
                <Reveal direction="up"><div className="p-4 bg-surface border border-border rounded-lg">Reveal Up</div></Reveal>
                <Stagger>
                  <Reveal delay={0.1}><div className="p-2 bg-surface border border-border rounded-lg">Stagger 1</div></Reveal>
                  <Reveal delay={0.2}><div className="p-2 bg-surface border border-border rounded-lg">Stagger 2</div></Reveal>
                  <Reveal delay={0.3}><div className="p-2 bg-surface border border-border rounded-lg">Stagger 3</div></Reveal>
                </Stagger>
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-4 font-mono">Typewriter & Counter</h3>
              <div className="space-y-6">
                <div className="text-2xl font-bold text-accent">
                  <Typewriter text="Dynamic typing effect..." speed={100} />
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-muted font-mono">Value:</span>
                  <Counter value={1234} className="text-3xl font-bold text-accent" />
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-4 font-mono">Tilt & Magnetic</h3>
              <div className="flex flex-col items-center gap-8 py-4">
                <TiltCard className="w-full max-w-xs">
                  <div className="p-6 bg-surface border border-border rounded-card text-center">
                    <p>Tilt me!</p>
                  </div>
                </TiltCard>
                <MagneticButton>
                  <Button variant="primary">Magnetic Button</Button>
                </MagneticButton>
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-4 font-mono">Marquee</h3>
              <Marquee className="py-4">
                {['Infinite', 'Smooth', 'Looping', 'Motion', 'Neon', 'Terminal'].map(word => (
                  <span key={word} className="px-4 py-2 bg-accent/10 text-accent border border-accent/20 rounded-full font-mono">
                    {word}
                  </span>
                ))}
              </Marquee>
            </Card>
          </div>
        </section>

        {/* UI Primitives Section */}
        <section className="space-y-12">
          <SectionHeading number="02" title="UI Primitives" subtitle="Atomic components and layout" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-xl font-bold mb-4 font-mono">Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-4 font-mono">Tags</h3>
              <div className="flex flex-wrap gap-2">
                <Tag variant="accent">Accent Tag</Tag>
                <Tag variant="muted">Muted Tag</Tag>
              </div>
            </Card>

            <Card className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4 font-mono">Containers</h3>
              <div className="p-4 bg-surface border border-border rounded-card">
                <p className="text-muted">This is a base Card component used for grouping content.</p>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DevShowcase;
