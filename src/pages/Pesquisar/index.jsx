import React from 'react';
import styles from './Pesquisar.module.css';
import { ReactComponent as Search } from '../../assets/search.svg';
import MovieItem from '../../components/MovieItem';

const Pesquisar = () => {
  const [search, setSearch] = React.useState('');

  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  async function handleSearch() {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=pt-BR&query=${search}&page=1&include_adult=false`;
    try {
      setLoading(true);
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
      console.log(json);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
      setData(null);
    }
  }

  return (
    <main>
      <form className={styles.search} onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Nome do filme..."
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
        <button onClick={handleSearch}>
          <Search />
        </button>
      </form>

      {loading && <div className={styles.loading}></div>}
      {data && (
        <section className={styles.results}>
          {data.results.length > 0 ? (
            data.results.map((movie) => {
              return <MovieItem movie={movie} key={movie.id} />;
            })
          ) : (
            <p>Sem resultados</p>
          )}
        </section>
      )}
    </main>
  );
};

export default Pesquisar;
