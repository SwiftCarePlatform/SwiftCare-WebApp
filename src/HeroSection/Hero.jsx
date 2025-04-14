import React from "react";
import { useEffect, useState } from "react";
import "./Hero.css";
import doctorImage from '../assets/doc.png'; 
import maleDoc from '../assets/maleDoc.png'; 
import femaleDoc from '../assets/femaleDoc.png'; 

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [doctorImage, maleDoc, femaleDoc];

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)

  };

  useEffect(() => {
   const interval = setInterval(goToNextImage, 3000);
   return () => clearInterval(interval)
    
  }, []);

  return (


    <section className="hero-section">
    <div className="hero-content">
      <div>
        <h1 className="hero-heading">
          Explore <span className="highlight underline-style">Healthcare</span>
          <span> Solutions<br /> that resonate <span className="underline"></span> with Everyone</span>
        </h1>
        <p className="hero-description">
          Experience seamless virtual consultations and immediate assistance 
          at your fingertips ensuring that your health is always prioritized.
        </p>
        <button className="cta-button">Let's get started</button>
      </div>
    </div>
    <div className="hero-image-wrapper">
      {images.map((image, index) => (
        <img
          src={image}
          alt="Doctor"
          key={index}
          className={`hero-image ${currentIndex === index ? 'active' : ''}`}
          style={{
            transform: `translateX(${(index - currentIndex) * 100}%)`,
          }}
        />
      ))}
      <div className="caption">
        <p>Mental health Therapist</p>
        <div className="slider">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};


export default HeroSection;




