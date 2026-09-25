import React from 'react';
import { Hero } from '../sections/Hero';
import { StatsStrip } from '../sections/StatsStrip';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <StatsStrip />
      {/* Other sections will be added here in subsequent tasks */}
    </main>
  );
};

export default Home;
