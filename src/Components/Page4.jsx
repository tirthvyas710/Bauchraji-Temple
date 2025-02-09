import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Page4 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      content: (
        <div className="p-6 text- bg-gray-800/80 text-white rounded-lg shadow-lg max-w-lg text-center">
          <h2 className="text-lg md:text-xl font-semibold mb-2">John Doe</h2>
          <p className="text-base md:text-lg">
            "This platform has completely transformed the way I manage my projects. The user experience is seamless, and I highly recommend it!"
          </p>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="p-6 bg-gray-800/80 text-white rounded-lg shadow-lg max-w-lg text-center">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Jane Smith</h2>
          <p className="text-base md:text-lg">
            "I love how easy it is to navigate and use. The design is sleek, and the features are top-notch!"
          </p>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="p-6 bg-gray-800/80 text-white rounded-lg shadow-lg max-w-lg text-center">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Michael Johnson</h2>
          <p className="text-base md:text-lg">
            "This service exceeded my expectations! The team is responsive, and I’m very satisfied with the overall experience."
          </p>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  // Auto change slides every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentSlide]); // Runs when slide changes

  return (
    <div className="flex flex-col h-screen">
      {/* Hero Section */}
      <div className="h-[50vh]">
        <div className="h-96 w-full bg-red-400 flex flex-col md:flex-row" id="hero">
          {/* Text Section */}
          <div className="h-[50%] w-full flex justify-center items-center md:w-[60%] md:h-full">
            <h1 className="text-xl font-bold">Customer Feedback</h1>
          </div>
          {/* Placeholder Slide Section */}
          <div className="h-[50%] w-full p-10 text-center flex justify-center items-center bg-red-900 md:w-[40%] md:h-full"></div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="h-[60vh] w-full bg-red-100 flex justify-between items-center text-white p-4">
        <button
          onClick={prevSlide}
          className="p-3 bg-gray-900 rounded-full hover:bg-gray-500"
        >
          <FaArrowLeft className="text-2xl" />
        </button>

        <div className="overflow-hidden w-full flex justify-center items-center relative">
          {/* Animated Slide */}
          <motion.div
            key={slides[currentSlide].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full flex justify-center items-center"
          >
            <div className="flex justify-center items-center w-full h-[300px] md:h-[400px] lg:h-[500px]">
              {slides[currentSlide].content}
            </div>
          </motion.div>
        </div>

        <button
          onClick={nextSlide}
          className="p-3 bg-gray-900 rounded-full hover:bg-gray-500"
        >
          <FaArrowRight className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Page4;
