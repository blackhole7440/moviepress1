import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Play, Download, Calendar, Star, Clock, Globe, Users, DollarSign } from 'lucide-react';
import { getMovieDetails, getImageUrl, MovieDetails } from '../services/tmdb';
import RegisterModal from '../components/RegisterModal';

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      if (id) {
        const movieData = await getMovieDetails(id);
        setMovie(movieData);
      }
    };
    fetchMovie();
  }, [id]);

  const handleCTAClick = () => {
    setShowModal(true);
  };

  const handleRegister = () => {
    window.location.href = 'https://www.profitablecpmrate.com/nb4nj5rque?key=0193cfef844fc9e94e5239843df87daa';
  };

  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  if (!movie) return null;

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative min-h-[70vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${getImageUrl(movie.backdrop_path)})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-2xl">
            <img 
              src={getImageUrl(movie.poster_path)} 
              alt={movie.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">{movie.title}</h1>
            
            {/* Movie Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>{movie.vote_average.toFixed(1)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span>{new Date(movie.release_date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-gray-400" />
                <span>{movie.runtime} min</span>
              </div>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-2">
              {movie.genres?.map(genre => (
                <span key={genre.id} className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">
                  {genre.name}
                </span>
              ))}
            </div>

            <p className="text-lg text-gray-300">{movie.overview}</p>

            {/* Additional Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-gray-400" />
                <span>Languages: {movie.spoken_languages?.map(lang => lang.english_name).join(', ')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-gray-400" />
                <span>Countries: {movie.production_countries?.map(country => country.name).join(', ')}</span>
              </div>
              {movie.budget > 0 && (
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-4 h-4 text-gray-400" />
                  <span>Budget: {formatMoney(movie.budget)}</span>
                </div>
              )}
              {movie.revenue > 0 && (
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-4 h-4 text-gray-400" />
                  <span>Revenue: {formatMoney(movie.revenue)}</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button 
                onClick={handleCTAClick}
                className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Now
              </button>
              <button 
                onClick={handleCTAClick}
                className="w-full md:w-auto bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center hover:bg-gray-700 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cast Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Top Cast</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {movie.credits.cast.slice(0, 6).map(actor => (
              <div key={actor.id} className="text-center">
                <div className="aspect-[2/3] mb-2 rounded-lg overflow-hidden">
                  <img 
                    src={getImageUrl(actor.profile_path, 'w500')} 
                    alt={actor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold">{actor.name}</h3>
                <p className="text-sm text-gray-400">{actor.character}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RegisterModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onRegister={handleRegister}
      />
    </div>
  );
};

export default MoviePage;