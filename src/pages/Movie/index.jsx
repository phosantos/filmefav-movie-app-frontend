import React from 'react';
import styles from './Movie.module.css';
import { useParams, redirect } from 'react-router-dom';
import { ReactComponent as Star } from '../../assets/StarOutline.svg';
import Slider from '../../components/Slider';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Movie = () => {
  const { id } = useParams();
  // const [data, setData] = React.useState();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=pt-BR`,
    fetcher,
  );
  const [recommendations, setRecommendations] = React.useState([]);

  // React.useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(
  //       `https://api.themoviedb.org/3/movie/${id}?api_key=${
  //         import.meta.env.VITE_API_KEY
  //       }&language=pt-BR`,
  //     );

  //     const json = await response.json();

  //     const responseR = await fetch(
  //       `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${
  //         import.meta.env.VITE_API_KEY
  //       }&language=pt-BR`,
  //     );

  //     const recomendations = await responseR.json();

  //     setRecommendations(recomendations.results);
  //     setData(json);
  //   }

  //   fetchData();
  // }, [id]);

  React.useEffect(() => {
    const bg = document.querySelector('.bg');
    if (bg && data)
      bg.style.backgroundImage = `url("https://image.tmdb.org/t/p/w1280${data.backdrop_path}")`;
  }, [data]);

  //se n existir redirecionar p 404
  //
  //

  if (data)
    return (
      <main className={styles.movie}>
        <section className={styles.movieInfo}>
          <div
            className={styles.posterWrapper}
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/w300${data.poster_path}")`,
            }}
          ></div>
          <div className={styles.info}>
            <h1 className={styles.title}>{data.title}</h1>
            <div className={styles.genresWrapper}>
              <span className={styles.rating}>
                <Star /> {data.vote_average.toFixed(1)}
              </span>
              <span>•</span>
              <span>{data.release_date.slice(0, 4)}</span>
              <span>•</span>
              <ul className={styles.genres}>
                {data.genres.map((genre, index, array) => {
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
            <p className={styles.overview}>{data.overview}</p>
          </div>
        </section>

        <section className={styles.recommendations}>
          <h2>Recomendações</h2>
          {recommendations.length ? (
            <Slider movies={recommendations} />
          ) : (
            <p>Sem recomendações desta vez :/</p>
          )}
        </section>
      </main>
    );

  return null;
};

export default Movie;
