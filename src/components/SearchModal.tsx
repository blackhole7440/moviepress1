import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Search, Star, Calendar } from 'lucide-react';
import { searchMovies, Movie, getImageUrl } from '../services/tmdb';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const searchTimeout = setTimeout(async () => {
      if (query.trim()) {
        setLoading(true);
        const movies = await searchMovies(query);
        setResults(movies);
        setLoading(false);
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [query]);

  const formatRating = (rating: number | undefined): string => {
    if (typeof rating !== 'number' || isNaN(rating)) return 'N/A';
    return rating.toFixed(1);
  };

  if (!isOpen) return null;

  const handleMovieClick = (movieId: number) => {
    navigate(`/movie/${movieId}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative bg-gray-900 w-full max-w-3xl mx-4 rounded-2xl animate-fade-in">
        <div className="p-4 border-b border-gray-800 flex items-center">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-white outline-none placeholder:text-gray-500"
            autoFocus
          />
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto">
          {loading ? (
            <div className="p-4 text-center text-gray-400">Searching...</div>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              {results.map(movie => (
                <div
                  key={movie.id}
                  onClick={() => handleMovieClick(movie.id)}
                  className="flex space-x-4 p-2 rounded-lg hover:bg-gray-800 cursor-pointer"
                >
                  <img
                    src={getImageUrl(movie.poster_path, 'w200')}
                    alt={movie.title}
                    className="w-20 h-30 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{movie.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span>{formatRating(movie.vote_average)}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : query.trim() ? (
            <div className="p-4 text-center text-gray-400">No movies found</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;