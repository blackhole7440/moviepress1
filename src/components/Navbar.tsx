import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Film, Search } from 'lucide-react';
import SearchModal from './SearchModal';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Film className="w-8 h-8 text-purple-500" />
              <span className="text-xl font-bold">MovieStream</span>
            </Link>
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => setShowSearch(true)}
                className="text-gray-300 hover:text-white flex items-center space-x-2"
              >
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
              <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              <Link to="#" className="text-gray-300 hover:text-white">Movies</Link>
              <Link to="#" className="text-gray-300 hover:text-white">TV Shows</Link>
            </div>
          </div>
        </div>
      </nav>

      <SearchModal 
        isOpen={showSearch}
        onClose={() => setShowSearch(false)}
      />
    </>
  );
};

export default Navbar;