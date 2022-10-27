const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = import.meta.env.VITE_API_KEY;

export const TMDB_GET_TRENDING = (timeWindow = 'day') => {
  return `${BASE_URL}trending/movie/${timeWindow}?api_key=${API_KEY}`;
};

export const TMDB_GET_POPULAR = (page = 1) => {
  return `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${page}&region=BR`;
};

export const TMDB_GET_NOW_PLAYING = (page = 1) => {
  return `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=pt-BR&page=${page}&region=BR`;
};

export const TMDB_GET_UPCOMING = (page = 1) => {
  return `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=pt-BR&page=${page}&region=BR`;
};
