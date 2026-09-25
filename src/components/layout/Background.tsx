import React from 'react';
import { GradientOrbs } from '../motion/GradientOrbs';

export const Background: React.FC = () => {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Layer 1: Gradient Orbs (Motion) */}
      <GradientOrbs />

      {/* Layer 2: Mono Grid */}
      <div className="absolute inset-0 bg-grid-overlay opacity-[0.02]" />

      {/* Layer 3: Noise Texture */}
      <div className="absolute inset-0 bg-noise-texture opacity-[0.03] mix-blend-overlay" />
    </div>
  );
};
