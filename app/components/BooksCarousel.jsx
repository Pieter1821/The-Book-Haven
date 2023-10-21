'use client';

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const BooksCarousel = () => {
  const items = [
    <div className="card bordered shadow-lg w-96 h-96 flex items-center justify-center">book 1</div>,
    <div className="card bordered shadow-lg w-96 h-96 flex items-center justify-center">book 2</div>,
    <div className="card bordered shadow-lg w-96 h-96 flex items-center justify-center">book 3</div>,
    <div className="card bordered shadow-lg w-96 h-96 flex items-center justify-center">book 4</div>,
    <div className="card bordered shadow-lg w-96 h-96 flex items-center justify-center">book 5</div>,
    <div className="card bordered shadow-lg w-96 h-96 flex items-center justify-center">book 6</div>,
    <div className="card bordered shadow-lg w-96 h-96 flex items-center justify-center">book 7</div>,
  ];

  return (
    <div className="h-96 carousel carousel-vertical rounded-box">
      <AliceCarousel mouseTracking items={items} autoPlay autoPlayInterval={2000} infinite disableButtonsControls />
    </div>
  );
};

export default BooksCarousel;
