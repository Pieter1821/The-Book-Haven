'use client'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const BooksCarousel = () => {
  const items = Array.from({ length: 7 }, (_, index) => (
    <div key={index} className="bg-lime-400 border shadow-lg w-100 h-96 flex items-center justify-center">
      Book {index + 1}
    </div>
  ));

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-4xl font-bold mb-6">Featured Books</h1>
      <div className="carousel carousel-center rounded-box w-full">
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay
          autoPlayInterval={2000}
          infinite
          disableButtonsControls
          className="alice-carousel"
        />
      </div>
      <p className="text-center mt-4">
        <a href="#" className="text-blue-500 hover:underline">
          View All
        </a>
   </p>
    </div>
  );
};

export default BooksCarousel;
