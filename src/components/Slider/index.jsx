import React from 'react';
import styles from './Slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { ReactComponent as Star } from '../../assets/StarOutline.svg';

function getBackdrop(backdropUrl) {
  const baseUrl = 'https://image.tmdb.org/t/p/';
  const width = 'w500';

  return baseUrl + width + backdropUrl;
}

const Slider = ({ movies }) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={5}
      slidesPerGroup={5}
      navigation
      className={styles.slider}
    >
      {movies?.map((movie) => {
        return (
          <SwiperSlide className={styles.slide} key={movie.id}>
            <Link
              to={`/filme/${movie.id}`}
              className={styles.movie}
              style={{
                backgroundImage: `url(${getBackdrop(movie.backdrop_path)})`,
              }}
            >
              <div className={styles.wrapper}>
                <div>
                  <h3 className={styles.title}>{movie.title}</h3>
                  <ul className={styles.details}>
                    <li>{movie.release_date.split('-')[0]}</li>
                    <li className={styles.rating}>
                      <Star />
                      {movie.vote_average.toFixed(1)}
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
