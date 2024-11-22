import React, { useState, useEffect } from 'react';
import './Slider.css';
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';

const sliderData = [
  {
    title: 'Emphasizes the safety and prevention',
    paragraph: 'Emphasizes the safety and prevention aspect of the distribution system.Focuses on managing distribution and protecting against unauthorized sales.',
    image: slider1
  },
  {
    title: 'Controlled drug distribution to licensed pharmacies only.',
    paragraph: 'Aims to manage distribution efficiently and protect public health by ensuring only licensed entities handle medications.',
    image: slider2
  },
  {
    title: 'Preventing unauthorized drug sales with a verified pharmacy network.',
    paragraph: 'By ensuring that only verified and licensed pharmacies are part of the network, we can safeguard the integrity of the drug supply chain.',
    image: slider3
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const { title, paragraph, image } = sliderData[currentIndex];

  return (
    <div className="slider">
      <div className="text">
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </div>
      <div className="image">
        <img src={image} alt="slider" />
      </div>
    </div>
  );
};

export default Slider;
