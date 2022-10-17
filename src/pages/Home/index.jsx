import React from 'react';
import Slider from '../../components/Slider';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className={styles.home}>
      <div>
        <h1 className={styles.title}>
          <strong>Em alta</strong>
          <Link to="/">Ver mais {'>'}</Link>
        </h1>
        <Slider />
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
