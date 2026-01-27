
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-bold text-green-500">GreenGrowth</Link>
            <p className="text-gray-400 leading-relaxed">
              We are a results-driven digital marketing agency helping brands grow and scale using data and creativity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-green-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-green-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-green-500 transition-colors">Our Services</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-green-500 transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-green-500 transition-colors">Our Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-green-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services/seo" className="text-gray-400 hover:text-green-500 transition-colors">SEO Optimization</Link></li>
              <li><Link to="/services/social-media" className="text-gray-400 hover:text-green-500 transition-colors">Social Media Marketing</Link></li>
              <li><Link to="/services/ppc" className="text-gray-400 hover:text-green-500 transition-colors">PPC Campaigns</Link></li>
              <li><Link to="/services/web-dev" className="text-gray-400 hover:text-green-500 transition-colors">Web Development</Link></li>
              <li><Link to="/services/design" className="text-gray-400 hover:text-green-500 transition-colors">Graphic Design</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Newsletter</h4>
            <p className="text-gray-400 mb-6">Get the latest insights and marketing tips delivered to your inbox.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-gray-800 border-none rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-green-500"
              />
              <button className="absolute right-2 top-2 bg-green-500 p-2 rounded-lg hover:bg-green-600 transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 text-center text-gray-500 text-sm">
          <p>© 2026 GreenGrowth Digital Marketing Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
