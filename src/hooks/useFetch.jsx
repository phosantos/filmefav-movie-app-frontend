import useSWR from 'swr';

function useFetch(url) {
  const { data, error } = useSWR(url, (...args) =>
    fetch(...args).then((r) => r.json()),
  );

  return { data, error, loading: !error && !data };
}

export default useFetch;
