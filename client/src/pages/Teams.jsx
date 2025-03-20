import React from 'react';
import { AnimatePresence } from 'framer-motion';
import TeamsHero from '../components/TeamsHero';

const Teams = () => {
  return (
    <AnimatePresence mode="wait">
      <div className="relative w-full h-full">
        <TeamsHero />
      </div>
    </AnimatePresence>
  );
};

export default Teams;
