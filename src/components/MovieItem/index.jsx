import React from 'react';
import styles from './MovieItem.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Star } from '../../assets/StarOutline.svg';

function getBackgroundImg(backdropPath, posterPath) {
  const BASEURL = 'https://image.tmdb.org/t/p/';
  const width = 'w500';

  if (backdropPath === null) {
    return { backgroundImage: `url(${BASEURL + width + posterPath})` };
  }

  return BASEURL + width + backdropPath;
}

const MovieItem = ({ movie }) => {
  return (
    <Link
      to={`/filme/${movie.id}`}
      className={styles.movie}
      style={{
        backgroundImage:
          movie.backdropPath === null && movie.posterPath === null
            ? 'none'
            : `url(${getBackgroundImg(
                movie.backdrop_path,
                movie.poster_path,
              )})`,
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
