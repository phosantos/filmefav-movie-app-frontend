import React from 'react';
import styles from './Slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = () => {
  const array = [];
  for (let i = 0; i < 15; i++) {
    array[i] = i;
  }

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={5}
      slidesPerGroup={5}
      navigation
      className={styles.slider}
    >
      {array.map((n) => {
        return (
          <SwiperSlide className={styles.slide} key={n}>
            <Link to={`/filme/${n}`} className={styles.slideContent}></Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
