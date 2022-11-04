import React from 'react';
import MovieItem from '../../components/MovieItem';
import { TMDB_GET_UPCOMING } from '../../services/tmdb_api';
import useFetch from '../../hooks/useFetch';
import styles from './Movies.module.css';

function Upcoming() {
  const { data, error, loading } = useFetch(TMDB_GET_UPCOMING());

  if (error) return <div>Ocorreu um erro :/</div>;
  if (loading) return <div>Carregando...</div>;

  return (
    <section className={styles.results}>
      {data.results.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </section>
  );
}

export default Upcoming;
