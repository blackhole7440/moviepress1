import React from 'react';
import { X } from 'lucide-react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegister: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, onRegister }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative bg-gray-900 p-8 rounded-2xl max-w-md w-full mx-4 animate-fade-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Get FREE Membership</h2>
          <p className="text-gray-300 mb-6">
            Register now to unlock unlimited streaming and downloads of your favorite movies in HD quality!
          </p>
          
          <ul className="text-left mb-6 space-y-3">
            <li className="flex items-center text-gray-300">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Unlimited HD Streaming
            </li>
            <li className="flex items-center text-gray-300">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Ad-Free Experience
            </li>
            <li className="flex items-center text-gray-300">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Download Movies & TV Shows
            </li>
          </ul>

          <button
            onClick={onRegister}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            Register Free Account
          </button>
          
          <p className="mt-4 text-sm text-gray-400">
            No credit card required • Instant access
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;