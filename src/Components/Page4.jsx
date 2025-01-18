import React, { useState } from 'react'

const Page4 = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      content: <img src="url_to_image_1" alt="Image 1" className="w-full h-auto" />,
    },
    {
      id: 2,
      content: <img src="url_to_image_2" alt="Image 2" className="w-full h-auto" />,
    },
    // Add more slides as needed
  ]

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
  }

  // Fallback if slides are empty
  if (slides.length === 0) {
    return <div>No slides available</div>
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Hero Section */}
      <div className="h-[50vh]">
        <div className="h-96 w-full bg-red-400 flex flex-col md:flex-row" id="hero">
          {/* Text Section */}
          <div className="h-[50%] w-full flex justify-center items-center md:w-[60%] md:h-full">
            <h1 className="text-xl font-bold">Image Slider</h1>
          </div>
          {/* Slide Section */}
          <div className="h-[50%] w-full p-10 text-center flex justify-center items-center bg-red-900 md:w-[40%] md:h-full">
            
          </div>
        </div>
      </div>

      
      {/* Navigation Section */}
      <div className="h-[50%] w-full bg-black flex justify-between items-center text-white p-4">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-500"
        >
         <p>&lt;</p>
        </button>
        <div>
        {slides[currentSlide]?.content}
        </div>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-500"
        >
         <p>&gt;</p>
        </button>
      </div>
    </div>
  )
}

export default Page4
