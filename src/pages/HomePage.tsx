import React, { useEffect, useState } from 'react';
import { TrendingUp } from 'lucide-react';
import MovieCard from '../components/MovieCard';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import { getPopularMovies, Movie } from '../services/tmdb';
import Hero from '../components/Hero';

const HomePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <Hero />
      
      {/* Featured Movies */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold flex items-center">
              <TrendingUp className="w-8 h-8 mr-2 text-purple-500" />
              Popular Movies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {movies.slice(0, 8).map((movie) => (
              <MovieCard 
                key={movie.id}
                id={movie.id}
                title={movie.title}
                image={movie.poster_path}
                rating={movie.vote_average.toFixed(1)}
                releaseDate={movie.release_date}
              />
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <Benefits />
      <Testimonials />
    </div>
  );
};

export default HomePage;