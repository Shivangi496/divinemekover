// src/components/Home/ImageSlider.js

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Importing the modules from Swiper
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import images
import img1 from '../../images/nature1.jpg';
import img2 from '../../images/nature2.jpg';
import img3 from '../../images/nature5.jpg';

// Import the external CSS file
import './ImageSlider.css';

const ImageSlider = () => {
  return (
    <div className="image-slider-container">
      <Swiper
        spaceBetween={30}                   // Space between slides
        centeredSlides={true}                // Center slides
        autoplay={{
          delay: 3000,                       // Auto-play delay (in ms)
          disableOnInteraction: false,       // Continue autoplay after interactions
        }}
        pagination={{
          clickable: true,                   // Clickable pagination dots
        }}
        navigation={true}                    // Show navigation arrows
        modules={[Autoplay, Pagination, Navigation]}  // Use imported modules
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="Slide 1" className="image-slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Slide 2" className="image-slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Slide 3" className="image-slide" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ImageSlider;
