import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Greetings = ({ onEnterSite, show }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="flex items-center justify-center flex-col h-screen bg-fixed bg-no-repeat bg-center bg-cover bg-[url('/public/bgfor1.jpg')]"
          initial={{ opacity: 1, scale: 1 }} // Initial state
          exit={{ opacity: 0, scale: 0.9 }} // Exit animation
          transition={{ duration: 0.7, ease: 'easeInOut' }} // Smooth transition
        >
          <div>
            <h1 className="text-3xl font-extrabold text-white text-center md:text-5xl">
              Welcome to Bahuchraji Temple
            </h1>
            <br />
            <br />
            <p className="text-lg font-light text-white text-center md:text-lg md:mb-12">
              Discover the tranquility and warmth of our spiritual sanctuary.
            </p>
          </div>

          <motion.button
            onClick={onEnterSite} // Call the onEnterSite function
            className="px-8 py-4 text-2xl font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            whileHover={{ scale: 1.1 }} // Button hover effect
            whileTap={{ scale: 0.9 }} // Button click effect
          >
            Enter Site
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Greetings;
