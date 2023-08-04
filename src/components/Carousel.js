import React, { useState } from 'react';

const images = [
    { image: 'features/img1.jpeg', heading: 'Redux Framework' },
    { image: 'features/img2.svg', heading: 'Contact Form 7' },
    { image: 'features/img3.png', heading: 'WPML Compactible' },
    { image: 'features/img4.png', heading: 'Support JetPack' },
    { image: 'features/img5.png', heading: 'SEO plugn' },
    { image: 'features/img6.png', heading: 'FontAwesome Pro' },
    { image: 'features/img7.png', heading: 'Unlimited Colors Option' },
    { image: 'features/img8.png', heading: 'Google Font' },
    { image: 'features/img9.png', heading: 'Clean Code' },
    { image: 'features/img10.png', heading: 'Responsive Layout' },
    { image: 'features/img11.png', heading: 'Easy To Customize' },
    { image: 'features/img12.png', heading: 'Elementor' },
    { image: 'features/img13.png', heading: 'WordPress 6.0.1' },
    { image: 'features/img14.png', heading: 'One Click Demo' },
    { image: 'features/img15.png', heading: 'MailChimp' },
    { image: 'features/img16.png', heading: 'Speed Optimized' },
    // Add more items as needed
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="flex flex-col items-center">
      <button onClick={prevImage} className="mt-4">Previous</button>
      <div className="relative w-80 h-80 overflow-hidden mt-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.image}
            alt={`Image ${index}`}
            className={`absolute transition-transform duration-500 transform ${
              index === currentIndex ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
            }`}
          />
        ))}
      </div>
      <button onClick={nextImage} className="mt-4">Next</button>
    </div>
  );
};

export default Carousel;
