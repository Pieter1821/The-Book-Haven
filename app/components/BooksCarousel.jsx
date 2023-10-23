'use client';

import { useContext } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { BookDataContext } from '../contexts/GetBookData';

const BooksCarousel = () => {
  const { books, loading } = useContext(BookDataContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center mt-6">
        <h1 className="text-3xl font-bold animate-fade-in">Loading...</h1>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="flex items-center justify-center mt-6">
        <h1 className="text-3xl font-bold animate-fade-in">No books found</h1>
      </div>
    );
  }

  const items = books.map((book, index) => (
    <div key={index} className="carousel-item">
      <div className="w-96 h-96 bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300">
        <h3 className="text-lg font-bold mb-2">{book.volumeInfo.title}</h3>
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <p className="text-sm">{book.volumeInfo.description}</p>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col items-center mt-6">
      <h1 className="text-4xl font-bold mb-6">Featured Books</h1>
      <div className="carousel-container w-full max-w-screen-lg mx-auto">
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
    </div>
  );
};

export default BooksCarousel;
