import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import mission from './mission';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.scss';

// import required modules
import { Navigation } from 'swiper';

export default function App() {
  return (
    <>
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mission-swiper"
      >
        {mission.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="slider-con" data-aos="zoom-in" data-delay="200">
              <div className="con">
                <img
                  className="slider-img"
                  src={`/img/${item.img}`}
                  alt={item.title}
                />
                <h2 className="slider-title">{item.title}</h2>
                <p className="slider-desciption">{item.decription}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
