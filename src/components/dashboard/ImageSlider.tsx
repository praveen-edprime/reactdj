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
    <div className="relative w-full max-w-4xl mx-auto mt-6">
      <div className="overflow-hidden rounded-lg shadow-md">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-64 object-cover transition-all duration-500"
        />
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-700"
      >
        ◀
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-700"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
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
