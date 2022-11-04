import React from 'react';
import MovieItem from '../../components/MovieItem';
import { TMDB_GET_NOW_PLAYING } from '../../services/tmdb_api';
import useFetch from '../../hooks/useFetch';
import styles from './Movies.module.css';
import Loading from '../../components/Loading';

function NowPlaying() {
  const { data, error, loading } = useFetch(TMDB_GET_NOW_PLAYING());

  if (error) return <div>Ocorreu um erro :/</div>;
  if (loading) return <Loading />;
  return (
    <section className={styles.results}>
      {data.results.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </section>
  );
}

export default NowPlaying;
