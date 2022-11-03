import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Movie.module.css';
import { ReactComponent as Star } from '../../assets/StarOutline.svg';
import Slider from '../../components/Slider';
import useFetch from '../../hooks/useFetch';
import {
  TMDB_GET_MOVIE,
  TMDB_GET_RECOMMENDATIONS,
} from '../../services/tmdb_api';

function Movie() {
  const { id } = useParams();
  const { data: details } = useFetch(TMDB_GET_MOVIE(id));
  const { data: recommendations } = useFetch(TMDB_GET_RECOMMENDATIONS(id));

  React.useEffect(() => {
    const bg = document.querySelector('.bg');
    if (bg && details)
      bg.style.backgroundImage = `url("https://image.tmdb.org/t/p/w1280${details.backdrop_path}")`;
  }, [details]);

  return (
    <main className={styles.movie}>
      {details && (
        <>
          <section className={styles.movieInfo}>
            <div
              className={styles.posterWrapper}
              style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/w300${details.poster_path}")`,
              }}
            />
            <div className={styles.info}>
              <h1 className={styles.title}>{details.title}</h1>
              <div className={styles.genresWrapper}>
                <span className={styles.rating}>
                  <Star /> {details.vote_average.toFixed(1)}
                </span>
                <span>•</span>
                <span>{details.release_date.slice(0, 4)}</span>
                <span>•</span>
                <ul className={styles.genres}>
                  {details.genres.map((genre, index, array) => {
                    if (index === array.length - 2) {
                      return <li key={genre.id}>{genre.name} & </li>;
                    }
                    if (index === array.length - 1) {
                      return <li key={genre.id}>{genre.name}</li>;
                    }
                    return <li key={genre.id}>{genre.name}, </li>;
                  })}
                </ul>
              </div>
              <p className={styles.overview}>{details.overview}</p>
            </div>
          </section>

          <section className={styles.recommendations}>
            <h2>Recomendações</h2>
            {recommendations?.results?.length ? (
              <Slider movies={recommendations.results} />
            ) : (
              <p>Sem recomendações desta vez :/</p>
            )}
          </section>
        </>
      )}
    </main>
  );
}

export default Movie;
