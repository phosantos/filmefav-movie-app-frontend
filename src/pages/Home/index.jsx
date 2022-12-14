import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../../components/Slider';
import styles from './Home.module.css';
import useFetch from '../../hooks/useFetch';
import {
  TMDB_GET_TRENDING,
  TMDB_GET_POPULAR,
  TMDB_GET_NOW_PLAYING,
  TMDB_GET_UPCOMING,
} from '../../services/tmdb_api';

function Home() {
  const { data: trending } = useFetch(TMDB_GET_TRENDING());
  const { data: popular } = useFetch(TMDB_GET_POPULAR());
  const { data: nowPlaying } = useFetch(TMDB_GET_NOW_PLAYING());
  const { data: upcoming } = useFetch(TMDB_GET_UPCOMING());

  if (!trending) return null;

  return (
    <main className={styles.home}>
      <section>
        <h1 className={styles.title}>
          <strong>Em alta</strong>
        </h1>
        <Slider movies={trending ? trending.results : null} />
      </section>
      <section>
        <h1 className={styles.title}>
          <strong>Populares</strong>
          <Link to="/filmes">Ver mais {'>'}</Link>
        </h1>
        <Slider movies={popular ? popular.results : null} />
      </section>
      <section>
        <h1 className={styles.title}>
          <strong>Em cartaz</strong>
          <Link to="/filmes/cartaz">Ver mais {'>'}</Link>
        </h1>
        <Slider movies={nowPlaying ? nowPlaying.results : null} />
      </section>
      <section>
        <h1 className={styles.title}>
          <strong>Próximas estreias</strong>
          <Link to="/filmes/proximas-estreias">Ver mais {'>'}</Link>
        </h1>
        <Slider movies={upcoming ? upcoming.results : null} />
      </section>
    </main>
  );
}

export default Home;
