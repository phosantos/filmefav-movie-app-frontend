import React from 'react';
import styles from './Filme.module.css';
import { useParams } from 'react-router-dom';

const Filme = () => {
  const { id } = useParams();
  const [data, setData] = React.useState();

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=pt-BR`,
      );

      const json = await response.json();

      console.log(json);
      setData(json);
    }

    fetchData();
  }, []);

  // React.useEffect(() => {
  //   const bg = document.querySelector('.bg');
  //   if (bg && data)
  //     bg.style.backgroundImage = `url("https://image.tmdb.org/t/p/w1280${data.backdrop_path}")`;
  // }, [data]);

  React.useLayoutEffect(() => {
    const bg = document.querySelector('.bg');
    if (bg && data)
      bg.style.backgroundImage = `url("https://image.tmdb.org/t/p/w1280${data.backdrop_path}")`;
  }, [data]);

  //se n existir redirecionar p 404
  return (
    <main>
      <section className={styles.movieInfo}>
        <div className={styles.posterWrapper}></div>
        <div className={styles.info}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>As Aventuras de Pi</h1>
            <span className={styles.year}>(2012)</span>
          </div>
          <p className={styles.genres}>
            Animação, Comédia, Sci-Fi & Fantasy, Action & Adventure • 22m
          </p>
          <div className={styles.rating}>Estrela 4.5</div>
          <div className={styles.synopsis}>
            <h3>Sinopse</h3>
            <p>
              Rick é um velho mentalmente desequilibrado, mas cientificamente
              talentoso que se reconectou recentemente com sua família. Ele
              passa a maior parte do tempo envolvendo o jovem neto Morty em
              aventuras perigosas e estranhas no espaço e em universos
              alternativos. Compostos à vida familiar já instável de Morty,
              esses eventos causam muito sofrimento a Morty em casa e na escola.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>Elenco</h2>
      </section>

      <section className={styles.recommendations}>
        <h2>Recomendações</h2>
      </section>
    </main>
  );
};

export default Filme;
