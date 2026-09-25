import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/motion/Reveal';

const NotFound: React.FC = () => {
  return (
    <Reveal direction="up" delay={0.2}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-bg text-text px-6 text-center">
        <span className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
          // 404 — Not Found
        </span>
        <h1 className="text-8xl md:text-[12rem] font-bold font-['Space_Grotesk'] leading-none mb-8 text-text">
          404
        </h1>
        <p className="text-lg text-muted max-w-md mb-12 font-inter">
          The page you are looking for has vanished into the digital void.
        </p>
        <Link
          to="/"
          className="px-8 py-3 bg-accent text-bg font-mono text-sm font-bold rounded-full hover:opacity-90 transition-opacity"
        >
          Return Home
        </Link>
      </div>
    </Reveal>
  );
};

export default NotFound;
