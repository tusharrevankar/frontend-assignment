import React, { useState } from 'react';

function Slider({ randomCats }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://loremflickr.com/g/600/600/cat',
    'https://loremflickr.com/g/600/600/cat',
    'https://loremflickr.com/g/600/600/cat',
    'https://loremflickr.com/g/600/600/cat',
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex pt-12 px-6 md:px-20 items-center justify-center bg-hero md:h-screen overflow-hidden">
      <div className="flex flex-col gap-6 md:flex-row items-center max-w-8xl">
        <div className="w-full md:w-1/2 lg:pr-32">
          <h2 className="text-4xl lg:text-5xl text-center md:text-left text-black-900 leading-tight font-medium">Where Paws Meet Paradise</h2>
          <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
          "Tailored for Cat Lovers: Elevate your feline friend's world with purr-sonalized support. Enjoy seamless communication and expert advice, all in one whisker-friendly space!"
          </h3>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          {randomCats.length > 0 && (
            <>
              <button onClick={prevImage} className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white font-bold text-xl focus:outline-none">
                &#8249;
              </button>
              <img
                src={randomCats[currentImageIndex].url}
                alt={`Cat ${currentImageIndex + 1}`}
                className="object-cover w-full h-96 rounded-md"
              />
              <button onClick={nextImage} className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white font-bold text-xl focus:outline-none">
                &#8250;
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Slider;
