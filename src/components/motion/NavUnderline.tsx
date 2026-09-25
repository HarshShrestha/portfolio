import React from 'react';
import { motion } from 'framer-motion';

export const NavUnderline: React.FC = () => {
  return (
    <motion.div
      layoutId="nav-underline"
      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent-2"
      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
    />
  );
};
