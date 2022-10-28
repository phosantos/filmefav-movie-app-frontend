import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import PropTypes from 'prop-types';
import styles from './Slider.module.css';
import MovieItem from '../MovieItem';
import remToPx from '../../utils/remToPx';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';

function Slider({ movies }) {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={remToPx(1)}
      slidesPerView={5}
      slidesPerGroup={5}
      navigation
      className={styles.slider}
    >
      {movies?.map((movie) => (
        <SwiperSlide className={styles.slide} key={movie.id}>
          <MovieItem movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

Slider.defaultProps = {
  movies: null,
};

Slider.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      backdrop_path: PropTypes.string,
      poster_path: PropTypes.string,
      title: PropTypes.string,
      release_date: PropTypes.string,
      vote_average: PropTypes.number,
    }),
  ),
};

export default Slider;
