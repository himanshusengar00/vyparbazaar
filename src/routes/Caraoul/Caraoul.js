import React, { useState } from "react";
import './Caraoul.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of images or background images for the carousel
  const slides = [
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/1200x600/ff7f7f/333333?text=Slide+1',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/1200x600/7f7fff/333333?text=Slide+2',
    },
    {
      id: 3,
      imageUrl: 'https://via.placeholder.com/1200x600/7fff7f/333333?text=Slide+3',
    }
  ];

  // Go to the next slide
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  // Go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-slide"
        style={{ backgroundImage: `url(${slides[currentSlide].imageUrl})` }}
      >
        <div className="carousel-content">
          <h1>Welcome to Our Service</h1>
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>
      <button className="prev-slide" onClick={prevSlide}>❮</button>
      <button className="next-slide" onClick={nextSlide}>❯</button>
    </div>
  );
};



export default Carousel;
