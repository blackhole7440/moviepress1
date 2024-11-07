const TMDB_API_KEY = 'abda12a94ea24edc145e9e1f2861b6d9';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
  genres?: { id: number; name: string; }[];
  runtime?: number;
  spoken_languages?: { english_name: string; }[];
  production_countries?: { name: string; }[];
  status?: string;
  budget?: number;
  revenue?: number;
}

export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

export interface MovieDetails extends Movie {
  credits: {
    cast: Cast[];
  };
}

export const getPopularMovies = async (): Promise<Movie[]> => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
  );
  const data = await response.json();
  return data.results;
};

export const getMovieDetails = async (id: string): Promise<MovieDetails> => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US&append_to_response=credits`
  );
  return await response.json();
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1`
  );
  const data = await response.json();
  return data.results;
};

export const getImageUrl = (path: string | null, size: string = 'original'): string => {
  if (!path) return 'https://via.placeholder.com/500x750?text=No+Image';
  return `${IMAGE_BASE_URL}/${size}${path}`;
};