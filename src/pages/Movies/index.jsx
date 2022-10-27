import React from 'react';
import styles from './Movies.module.css';
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import Popular from './Popular';

const Filmes = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log(location);
  }, [location]);

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
        <Route path="/cartaz" element={<div>em cartaz</div>} />
        <Route
          path="/proximas-estreias"
          element={<div>proximas estreias</div>}
        />
      </Routes>
    </main>
  );
};

export default Filmes;
