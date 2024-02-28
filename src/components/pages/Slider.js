import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group'; 
import './Slider.css'; // CSS for animations

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="slider">
      <button onClick={prevSlide}>Previous</button>
      <div className="slide-container">
        {slides.map((slide, index) => (
          <CSSTransition
            key={index}
            classNames="slide"
            timeout={500}
            in={index === currentSlide}
            unmountOnExit
          >
            <div className="slide">
              <img src={slide.image} alt={slide.text} />
              <p>{slide.text}</p>
            </div>
          </CSSTransition>
        ))}
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slider;
