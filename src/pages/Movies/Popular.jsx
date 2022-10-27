import React from 'react';
import MovieItem from '../../components/MovieItem';
import { TMDB_GET_POPULAR } from '../../services/tmdb_api';
import useFetch from '../../hooks/useFetch';
import styles from './Movies.module.css';

const Popular = () => {
  const { data, error, loading } = useFetch(TMDB_GET_POPULAR());

  if (error) return <div>Ocorreu um erro :/</div>;
  if (loading) return <div>Carregando...</div>;

  return (
    <section className={styles.results}>
      {data.results.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </section>
  );
};

export default Popular;
