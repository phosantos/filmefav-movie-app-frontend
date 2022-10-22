import React from 'react';
import styles from './MovieItem.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Star } from '../../assets/StarOutline.svg';

function getBackdrop(backdropUrl) {
  const baseUrl = 'https://image.tmdb.org/t/p/';
  const width = 'w500';

  return baseUrl + width + backdropUrl;
}

const MovieItem = ({ movie }) => {
  return (
    <Link
      to={`/filme/${movie.id}`}
      className={styles.movie}
      style={{
        backgroundImage: `url(${getBackdrop(movie.backdrop_path)})`,
      }}
    >
      <div className={styles.wrapper}>
        <div className={styles.content}>
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
  );
};

export default MovieItem;
