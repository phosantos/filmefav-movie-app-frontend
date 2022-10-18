import React from 'react';
import Slider from '../../components/Slider';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${
          import.meta.env.VITE_API_KEY
        }`,
      );

      const json = await response.json();

      setData(json);
    }

    fetchData();
  }, []);

  return (
    <section className={styles.home}>
      <div>
        <h1 className={styles.title}>
          <strong>Em alta</strong>
          <Link to="/">Ver mais {'>'}</Link>
        </h1>
        <Slider movies={data ? data.results : null} />
      </div>
      <div>
        <h1 className={styles.title}>
          <strong>Populares</strong>
          <Link to="/">Ver mais {'>'}</Link>
        </h1>
        <Slider />
      </div>
      <div>
        <h1 className={styles.title}>
          <strong>Em cartaz</strong>
          <Link to="/">Ver mais {'>'}</Link>
        </h1>
        <Slider />
      </div>
      <div>
        <h1 className={styles.title}>
          <strong>Próximas estréias</strong>
          <Link to="/">Ver mais {'>'}</Link>
        </h1>
        <Slider />
      </div>
    </section>
  );
};

export default Home;
