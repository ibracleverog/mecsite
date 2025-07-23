import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">MEC</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Mollel Electrical</h3>
                <p className="text-sm text-gray-400">Contractors</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional electrical contractors providing reliable, safe, and efficient electrical solutions across Tanzania.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Electrical Installation</li>
              <li>Power System Design</li>
              <li>Maintenance & Repair</li>
              <li>Emergency Services</li>
              <li>Lighting Solutions</li>
              <li>Safety Inspections</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone size={16} className="text-blue-400 mt-1" />
                <div>
                  <p className="text-sm">+255 123 456 789</p>
                  <p className="text-sm text-gray-400">24/7 Emergency</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={16} className="text-blue-400 mt-1" />
                <p className="text-sm">info@mec.co.tz</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-blue-400 mt-1" />
                <p className="text-sm">Dar es Salaam, Tanzania</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={16} className="text-blue-400 mt-1" />
                <div>
                  <p className="text-sm">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-sm text-gray-400">Emergency: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Mollel Electrical Contractors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;