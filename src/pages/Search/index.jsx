import React from 'react';
import styles from './Search.module.css';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import MovieItem from '../../components/MovieItem';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [searchValue, setSearchValue] = React.useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const query = searchParams.get('s');
    async function fetcher() {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=pt-BR&query=${query}&page=1&include_adult=false`;
      try {
        setLoading(true);
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
        setData(null);
      }
    }
    if (query !== null) {
      fetcher();
    }
  }, [searchParams]);

  async function handleSearchParams(e) {
    e.preventDefault();
    const query = { s: searchValue };
    setSearchParams(query);

    // const url = new URL(window.location);
    // url.searchParams.set('search', search);
    // window.history.pushState({}, '', url);
  }

  return (
    <main>
      <form className={styles.search} onSubmit={handleSearchParams}>
        <input
          type="text"
          placeholder="Nome do filme..."
          value={searchValue}
          onChange={({ target }) => setSearchValue(target.value)}
        />
        <button>
          <SearchIcon />
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

export default Search;
