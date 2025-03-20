import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const TeamsHero = () => {
  const location = useLocation();
  const fromTeamsSection = location.state?.transitioning;

  return (
    <motion.div 
      className="relative inset-0 w-full h-full overflow-hidden flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{ backgroundImage: "url('/TeamPhoto.jpg')", backgroundSize: 'cover' }}
        />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ y: fromTeamsSection ? -100 : 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          delay: fromTeamsSection ? 0.8 : 0.3,
          duration: 1.2,
          type: "spring",
          stiffness: 100 
        }}
        className="absolute top-6 sm:top-12 left-1/2 transform -translate-x-1/2 text-center px-4"
      >
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#B8860B] whitespace-nowrap tracking-wider uppercase">
          TESLA 2024-2025
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default TeamsHero;
