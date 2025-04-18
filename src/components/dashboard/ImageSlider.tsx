import React, { useState } from 'react';

const images = [
  '/images/slider/1.png',
  '/images/slider/2.png',
  '/images/slider/3.png',
  '/images/slider/4.png',
];

const ImageSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mt-4 sm:mt-2 md:mt-2">
      <div className="overflow-hidden rounded-lg shadow-md">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover transition-all duration-500"
        />
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 sm:p-3 rounded-full shadow hover:bg-blue-700 focus:outline-none"
      >
        ◀
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 sm:p-3 rounded-full shadow hover:bg-blue-700 focus:outline-none"
      >
        ▶
      </button>
 
      {/* Dots */}
      <div className="flex justify-center mt-3 sm:mt-4 md:mt-5 space-x-1 sm:space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full ${
              current === index ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;