import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './Search.module.css';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import MovieItem from '../../components/MovieItem';
import { TMDB_GET_SEARCH } from '../../services/tmdb_api';

function Search() {
  const [searchValue, setSearchValue] = React.useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const query = searchParams.get('s');

    async function fetchResults() {
      const resp = await fetch(TMDB_GET_SEARCH(query));
      const json = await resp.json();
      setData(json);
    }

    if (query !== null) fetchResults();
  }, [searchParams]);

  const handleSearchParams = React.useCallback(
    async (e) => {
      e.preventDefault();
      const query = { s: searchValue.trim() };
      setSearchParams(query);
    },
    [searchValue, setSearchParams],
  );

  return (
    <main className={styles.page}>
      <form className={styles.search} onSubmit={handleSearchParams}>
        <input
          type="text"
          placeholder="Título do filme..."
          value={searchValue}
          onChange={({ target }) => setSearchValue(target.value)}
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>

      <section className={styles.results}>
        {data?.results?.map((movie) => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </section>
    </main>
  );
}

export default Search;
