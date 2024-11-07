import React from 'react';
import { Star, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../services/tmdb';

interface MovieCardProps {
  id: number;
  title: string;
  image: string;
  rating: string;
  releaseDate: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ id, title, image, rating, releaseDate }) => {
  return (
    <Link to={`/movie/${id}`} className="block">
      <div className="relative group overflow-hidden rounded-lg transition-all duration-300 transform hover:scale-105">
        <img 
          src={getImageUrl(image, 'w500')} 
          alt={title} 
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 p-4 w-full">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="text-sm text-yellow-400">{rating}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 text-gray-300 mr-1" />
                <span className="text-sm text-gray-300">
                  {new Date(releaseDate).getFullYear()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;