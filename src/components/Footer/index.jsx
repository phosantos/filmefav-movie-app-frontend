import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <Logo />
        </Link>

        <p>
          Developed by{' '}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            phosantos
          </a>{' '}
          🤍
        </p>

        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.tmdb}
        >
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt="TMDB"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
