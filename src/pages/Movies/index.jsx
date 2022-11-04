import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import styles from './Movies.module.css';
import Popular from './Popular';
import NowPlaying from './NowPlaying';
import Upcoming from './Upcoming';

function Filmes() {
  return (
    <main className={styles.movies}>
      <nav>
        <ul className={styles.menu}>
          <li>
            <NavLink to="/filmes" end>
              Mais Populares
            </NavLink>
          </li>
          <li>
            <NavLink to="/filmes/cartaz">Em Cartaz</NavLink>
          </li>
          <li>
            <NavLink to="/filmes/proximas-estreias">Próximas Estreias</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Popular />} />
        <Route path="/cartaz" element={<NowPlaying />} />
        <Route path="/proximas-estreias" element={<Upcoming />} />
      </Routes>
    </main>
  );
}

export default Filmes;
