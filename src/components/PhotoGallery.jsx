import React, { useState } from 'react';
import Gallery_1 from '../img/gallery/gallery_1.jpg';
import Gallery_2 from '../img/gallery/gallery_2.jpg';
import Gallery_3 from '../img/gallery/gallery_3.jpg';
import Gallery_4 from '../img/gallery/gallery_4.jpg';
import Gallery_5 from '../img/gallery/gallery_5.jpg';
import Gallery_6 from '../img/gallery/gallery_6.jpg';
import Gallery_7 from '../img/gallery/gallery_7.jpg';
import Gallery_8 from '../img/gallery/gallery_8.jpg';
import Gallery_9 from '../img/gallery/gallery_9.jpg';
import Gallery_10 from '../img/gallery/gallery_10.jpg';
import Gallery_11 from '../img/gallery/gallery_11.jpg';
import Gallery_12 from '../img/gallery/gallery_12.jpg';
import Gallery_13 from '../img/gallery/gallery_13.jpg';
import Gallery_14 from '../img/gallery/gallery_14.jpg';
import Gallery_15 from '../img/gallery/gallery_15.jpg';
import Gallery_16 from '../img/gallery/gallery_16.jpg';
import Gallery_17 from '../img/gallery/gallery_17.jpg';
import Gallery_18 from '../img/gallery/gallery_18.jpg';
import Gallery_19 from '../img/gallery/gallery_19.jpg';
import Gallery_20 from '../img/gallery/gallery_20.jpg';
import Gallery_21 from '../img/gallery/gallery_21.jpg';
import Gallery_23 from '../img/gallery/gallery_23.jpg';
import Gallery_24 from '../img/gallery/gallery_24.jpg';
import Gallery_25 from '../img/gallery/gallery_25.jpg';
import Gallery_26 from '../img/gallery/gallery_26.jpg';

const images = [
  Gallery_1,
  Gallery_2,
  Gallery_3,
  Gallery_4,
  Gallery_5,
  Gallery_6,
  Gallery_7,
  Gallery_8,
  Gallery_9,
  Gallery_10,
  Gallery_11,
  Gallery_12,
  Gallery_13,
  Gallery_14,
  Gallery_15,
  Gallery_16,
  Gallery_17,
  Gallery_18,
  Gallery_19,
  Gallery_20,
  Gallery_21,
  Gallery_23,
  Gallery_24,
  Gallery_25,
  Gallery_26,
];

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="photo-gallery">
      <div className="gallery-header">
        <h2>Фотогалерея</h2>
      </div>
      <div className="gallery-container">
        <button className="arrow-btn prev" onClick={handlePrev}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M15 18l-6-6 6-6"></path></svg>
        </button>
        <div className="gallery-image-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`gallery-image ${index === currentIndex ? 'active' : 'inactive'}`}
            >
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
        <button className="arrow-btn next" onClick={handleNext}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M9 18l6-6-6-6"></path></svg>
        </button>
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
