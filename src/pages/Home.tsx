import React from 'react';
import { Hero } from '../sections/Hero';
import { StatsStrip } from '../sections/StatsStrip';
import { About } from '../sections/About';
import { Skills } from '../sections/Skills';
import { Education } from '../sections/Education';
import { Certifications } from '../sections/Certifications';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <StatsStrip />
      <About />
      <Skills />
      <Education />
      <Certifications />
    </main>
  );
};

export default Home;
