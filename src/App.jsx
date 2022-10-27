import './App.css';
import React from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Search from './pages/Search';
import Movie from './pages/Movie';
import Footer from './components/Footer';

function App() {
  const match = useMatch('/filme/:id');
  const appref = React.useRef();

  React.useEffect(() => {
    if (match) appref.current.classList.add('bg');
    else {
      appref.current.classList.remove('bg');
      appref.current.style.backgroundImage = '';
    }
  }, [match]);

  return (
    <div className="app" ref={appref}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="filmes/*" element={<Movies />} />
        <Route path="filme/:id" element={<Movie />} />
        <Route path="pesquisar" element={<Search />} />
        <Route path="*" element={<div>404...Página não encontrada</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
