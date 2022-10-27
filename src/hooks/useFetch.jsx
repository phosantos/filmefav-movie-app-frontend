import React from 'react';
import useSWR from 'swr';

const useFetch = (url) => {
  const { data, error } = useSWR(url, (url) =>
    fetch(url).then((r) => r.json()),
  );

  return { data, error, loading: !error && !data };
};

export default useFetch;
