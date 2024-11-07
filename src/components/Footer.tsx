import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-500">About</a></li>
              <li><a href="#" className="hover:text-purple-500">Careers</a></li>
              <li><a href="#" className="hover:text-purple-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-500">FAQ</a></li>
              <li><a href="#" className="hover:text-purple-500">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-500">How to Watch</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-500">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-purple-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-500">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-500">Facebook</a></li>
              <li><a href="#" className="hover:text-purple-500">Twitter</a></li>
              <li><a href="#" className="hover:text-purple-500">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Movie Streaming. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;