import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MovieItem.module.css';
import { ReactComponent as Star } from '../../assets/StarOutline.svg';

function MovieItem({ movie }) {
  const getBackgroundImg = React.useCallback((backdropPath, posterPath) => {
    const BASEURL = 'https://image.tmdb.org/t/p/';
    const width = 'w500';

    if (backdropPath === null) {
      return BASEURL + width + posterPath;
    }

    return BASEURL + width + backdropPath;
  }, []);

  return (
    <Link
      to={`/filme/${movie.id}`}
      className={styles.movie}
      style={{
        backgroundImage:
          movie.backdrop_path === null && movie.poster_path === null
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
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    backdrop_path: PropTypes.string,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
  }).isRequired,
};

export default MovieItem;
