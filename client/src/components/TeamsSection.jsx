import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const TeamsSection = () => {
  const navigate = useNavigate();
  const [fadeOutContent, setFadeOutContent] = useState(false);
  const [fadeOutOverlay, setFadeOutOverlay] = useState(false);

  const handleExplore = () => {
    setFadeOutContent(true);
    setFadeOutOverlay(true); // Trigger both at the same time
  
    setTimeout(() => {
      navigate('/teams', { state: { transitioning: true } });
    }, 700); // Navigate after the fade-out animation completes
  };
  

  return (
    <motion.div 
      className="relative inset-0 w-full h-full overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{ backgroundImage: "url('/TeamPhoto.jpg')" }}
        />
      </motion.div>

      {/* Custom Gradient Overlay (Fades Out) */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(125deg, 
              rgba(0, 0, 0, 1) 0%,  
              rgba(0, 0, 0, 1) 30%,  
              rgba(0, 0, 0, 0.8) 50%, 
              rgba(0, 0, 0, 0.5) 70%, 
              rgba(0, 0, 0, 0.2) 85%, 
              rgba(0, 0, 0, 0.05) 100% 
            )
          `
        }}
        animate={{ opacity: fadeOutOverlay ? 0 : 1 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}

      />

      {/* Content Section */}
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-16 pt-16">
        {/* Heading & Description */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: fadeOutContent ? 0 : 1, y: fadeOutContent ? 50 : 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <motion.h1 
            className="text-6xl sm:text-8xl font-bold text-[#B8860B] tracking-tight"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: fadeOutContent ? 0.95 : 1, opacity: fadeOutContent ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            TEAMS
          </motion.h1>
          
          <motion.p 
            className="text-white text-lg sm:text-xl mt-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: fadeOutContent ? 0 : 1, y: fadeOutContent ? 20 : 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old.
          </motion.p>
        </motion.div>

        {/* Explore More Button */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: fadeOutContent ? 0 : 1, y: fadeOutContent ? 20 : 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.button
            onClick={handleExplore}
            className="px-8 py-4 bg-[#B8860B] text-black text-lg font-semibold rounded-full 
                     hover:bg-[#DAA520] transition-all duration-300 transform hover:scale-105
                     focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:ring-offset-2 focus:ring-offset-black"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            EXPLORE MORE
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TeamsSection;
