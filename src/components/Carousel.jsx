import React, { useRef } from 'react';
import News from "../assets/news.jpg"; 
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 


const carouselData = [
  {
    id: 1,
    heading: 'News18',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    heading: 'DNA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 3,
    heading: 'AajTak',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    heading: 'The Hindu',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 5,
    heading: 'Times of India',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 6,
    heading: 'The Hindu',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 7,
    heading: 'Tribunal',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 8,
    heading: 'Times of India',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 9,
    heading: 'Times',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 10,
    heading: 'India',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const Carousel = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -250, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 250, behavior: 'smooth' });
  };

  return (
    <div className="absolute w-[90%] mx-auto px-4 py-8 bottom-10">
      <div className="flex items-center">
        <button onClick={scrollLeft} className="absolute left-0 z-10 p-2 bg-gray-700 text-white rounded-full">
          <FaArrowLeft />
        </button>
        <div ref={scrollContainerRef} className="overflow-x-scroll whitespace-nowrap">
          {carouselData.map((item) => (
            <div key={item.id} className="inline-block mr-4">
              <div className="bg-[#202427] rounded-lg overflow-hidden shadow-lg p-2" style={{ width: '250px', height: '130px' }}>
                <h2 className="text-xs font-light text-white">{item.heading}</h2>
                <div className="p-1 flex">
                  <img
                    src={News} 
                    className="w-14 h-20 object-cover"
                    alt="News"
                  />
                  <p className="text-gray-300 text-xs whitespace-pre-wrap pl-2">{item.description}</p>
                </div>
                <div className="p-4 md:hidden">
                  <button className="text-blue-500">Expand</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={scrollRight} className="absolute right-0 z-10 p-2 bg-gray-700 text-white rounded-full">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
