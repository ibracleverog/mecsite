import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+255 123 456 789</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>info@mec.co.tz</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Licensed & Insured Electrical Contractors</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">MEC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Mollel Electrical</h1>
              <p className="text-sm text-gray-600">Contractors</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                to="/"
                className={`font-medium ${
                  isActive('/') ? 'text-blue-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-medium ${
                  isActive('/about') ? 'text-blue-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className={`font-medium ${
                  isActive('/contact') ? 'text-blue-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;