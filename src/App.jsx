import './App.css';
import Header from './components/Header';
import React from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';
import Home from './pages/Home';
import Filmes from './pages/Filmes';
import Pesquisar from './pages/Pesquisar';
import Filme from './pages/Filme';

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
        <Route path="filmes/*" element={<Filmes />} />
        <Route path="pesquisar" element={<Pesquisar />} />
        <Route path="filme/:id" element={<Filme />} />
        <Route path="*" element={<div>404...Página não encontrada</div>} />
      </Routes>
    </div>
  );
}

export default App;
