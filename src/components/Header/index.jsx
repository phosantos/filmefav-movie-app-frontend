import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <Logo />
        </Link>
        <nav>
          <ul className={styles.menu}>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/filmes">Filmes</NavLink>
            </li>
            <li>
              <NavLink to="/pesquisar">Pesquisar</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
