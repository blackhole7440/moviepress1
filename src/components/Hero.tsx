import React, { useState } from 'react';
import { Play } from 'lucide-react';
import RegisterModal from './RegisterModal';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCTAClick = () => {
    setShowModal(true);
  };

  const handleRegister = () => {
    window.location.href = 'https://www.profitablecpmrate.com/nb4nj5rque?key=0193cfef844fc9e94e5239843df87daa';
  };

  return (
    <div 
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Watch Your Favorite Movies
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Access thousands of latest movies and TV shows in HD quality
        </p>
        <div className="space-y-4">
          <button 
            onClick={handleCTAClick}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center mx-auto hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
          >
            <Play className="w-5 h-5 mr-2" />
            Start Watching Free
          </button>
          <p className="text-sm text-gray-400">Get FREE membership for unlimited streaming & downloads</p>
        </div>
      </div>

      <RegisterModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onRegister={handleRegister}
      />
    </div>
  );
};

export default Hero;