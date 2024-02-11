import React from 'react';

function Slider({ randomCats }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div id="default-carousel" className="relative" data-carousel="static">
        {/* Carousel wrapper */}
        <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
          {randomCats?.map((cat, index) => (
            <div key={index} className="hidden duration-700 ease-in-out" data-carousel-item>
              <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                Slide {index + 1}
              </span>
              <img
                src={cat.url}
                className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt={`Cat ${index + 1}`}
              />
            </div>
          ))}
        </div>
        {/* Slider indicators */}
        <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
          {randomCats?.map((_, index) => (
            <button key={index} type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label={`Slide ${index + 1}`} data-carousel-slide-to={index}></button>
          ))}
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          {/* Previous button SVG */}
        </button>
        <button
          type="button"
          className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          {/* Next button SVG */}
        </button>
      </div>
    </div>
  );
}

export default Slider;
