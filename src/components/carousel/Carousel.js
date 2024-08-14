import React, { useState } from 'react';
import './Carousel.css';

import carousel from '../../assets/testimony.png'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: carousel,
      text: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.',
      name: 'Name',
      title: 'CEO'
    },
    {
      image: carousel,
      text: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.',
      name: 'Name',
      title: 'CEO'
    },
    {
      image: carousel,
      text: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.',
      name: 'Name',
      title: 'CEO'
    },
    {
      image: carousel,
      text: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.',
      name: 'Name',
      title: 'CEO'
    }
  ];

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <div className='carousel-content'>
          <div className="carousel-content-1">
            <img src={slides[currentIndex].image} alt="Person" className="carousel-image" />
          </div>
          <div className='carousel-content-2'>
              <p className="carousel-text">“ {slides[currentIndex].text} ”</p>
          </div>
        </div>
        
        <div className='carousel-ceo'>
          <p className="carousel-name">{slides[currentIndex].name}</p>
          <p className="carousel-title">{slides[currentIndex].title}</p>
        </div> 
      </div>
      
     
      
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
