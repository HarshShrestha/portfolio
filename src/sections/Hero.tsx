import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Stagger } from '../components/motion/Stagger';
import { Typewriter } from '../components/motion/Typewriter';
import { MagneticButton } from '../components/motion/MagneticButton';
import { ParallaxHero } from '../components/motion/ParallaxHero';
import { ScrollCue } from '../components/motion/ScrollCue';
import { profile } from '../data/profile';

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % profile.roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-6">
      <ParallaxHero>
        <Stagger>
          <div className="flex flex-col items-center text-center z-10">
            {/* Eyebrow */}
            <motion.p className="font-mono text-muted text-sm mb-4 tracking-widest uppercase">
              // hello, i'm
            </motion.p>

            {/* Name */}
            <h1 className="text-balance font-heading font-bold text-white mb-6 tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-2"
                style={{ fontSize: 'clamp(2.75rem, 8vw, 4.5rem)' }}>
              {profile.name}
            </h1>

            {/* Roles */}
            <div className="h-8 mb-10">
              <Typewriter
                text={profile.roles[roleIndex]}
                className="font-mono text-lg md:text-xl text-muted"
              />
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4">
              <MagneticButton className="px-8 py-3 rounded-full bg-accent text-bg font-bold hover:scale-105 transition-transform">
                <a href="#projects" className="block w-full h-full">View Projects</a>
              </MagneticButton>
              <MagneticButton className="px-8 py-3 rounded-full border border-border text-text hover:bg-surface transition-colors">
                <a href="#contact" className="block w-full h-full">Contact Me</a>
              </MagneticButton>
            </div>
          </div>
        </Stagger>
      </ParallaxHero>

      <ScrollCue />
    </section>
  );
};
