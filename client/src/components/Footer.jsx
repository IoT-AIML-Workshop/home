import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-violet-950 text-gray-300 p-8 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold text-white">IoT & ML Workshop 2024</h2>
          <p className="mt-4 text-sm">Join us for an immersive experience in the world of IoT and Machine Learning. Learn from experts, engage in hands-on sessions, and connect with like-minded professionals.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#schedule" className="hover:text-white">Schedule</a></li>
            <li><a href="#news" className="hover:text-white">News</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Follow Us</h3>
          <div className="mt-4 flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; 2024 IoT & ML Workshop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;