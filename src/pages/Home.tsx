import React from 'react';
import { ThemeToggle } from '../components/ui/ThemeToggle';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <h1 className="text-4xl font-bold text-accent">Welcome to my Portfolio</h1>
      <p className="text-muted">Theme and Motion Hooks implemented.</p>
    </div>
  );
};

export default Home;
