import React from "react";
import { motion } from "framer-motion";

const ElectroSection = () => {
  return (
    <motion.div
      className="relative inset-0 w-full h-full overflow-hidden flex flex-col items-center justify-between pb-10"
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

      {/* Arc Gradient Overlay (Strongest Black at Top, Fading Downwards) */}
      <motion.div
        className="absolute inset-0"
        style={{
            background: `
            radial-gradient(circle at 50% -50%,  
              rgba(0, 0, 0, 1) 15%,  
              rgba(0, 0, 0, 0.9) 30%,  
              rgba(0, 0, 0, 0.6) 50%,  
              rgba(0, 0, 0, 0.3) 70%,  
              rgba(0, 0, 0, 0) 100%
            )
          `,
        }}
      />

      {/* Content Section - Aligned to Top-Center */}
      <div className="relative z-10 text-center px-6 sm:px-16 pt-16 max-w-3xl">
        {/* Heading */}
        <motion.h1
          className="text-6xl sm:text-7xl font-bold text-[#D4AF37] tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ELECTROVAGANZA
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-white text-md sm:text-lg mt-4 leading-relaxed"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Welcome to ElectroVaganza – a thrilling blend of innovation and culture! 
          Dive into electrifying experiences, explore cutting-edge technology, 
          and witness creativity at its peak. Be part of an unforgettable event!
        </motion.p>
      </div>

      {/* Explore More Button - Aligned to Bottom-Center */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a href="/electrovaganza">
          <motion.button
            className="px-8 py-3 bg-[#D4AF37] text-black text-lg font-semibold rounded-full 
                     hover:bg-[#DAA520] transition-all duration-300 transform hover:scale-105
                     focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            EXPLORE MORE
          </motion.button>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ElectroSection;
