'use client';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: 'url(/images/hero-image.jpg)' }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Book Haven</h1>
          <p className="mb-5">
            Browse our extensive collection of books and discover new worlds, characters, and adventures. 
            Find your next favorite read and immerse yourself in the joy of storytelling.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
