import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* LOGO & ABOUT */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img
                src="https://i.ibb.co/CsWG4pPh/Whats-App-Image-2026-01-27-at-6-26-53-PM.jpg"
                alt="Green Soul IT Logo"
                className="h-24 w-auto"
              />
            </Link>

            <p className="text-gray-400 leading-relaxed">
              We are a results-driven digital marketing agency helping brands grow
              and scale using data and creativity.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="social-btn"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="social-btn"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="social-btn"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="social-btn"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/services" className="footer-link">Our Services</Link></li>
              <li><Link to="/case-studies" className="footer-link">Case Studies</Link></li>
              <li><Link to="/blog" className="footer-link">Blog</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-lg font-bold mb-8">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services/seo" className="footer-link">SEO Optimization</Link></li>
              <li><Link to="/services/social-media" className="footer-link">Social Media Marketing</Link></li>
              <li><Link to="/services/ppc" className="footer-link">PPC Campaigns</Link></li>
              <li><Link to="/services/web-dev" className="footer-link">Web Development</Link></li>
              <li><Link to="/services/design" className="footer-link">Graphic Design</Link></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="text-lg font-bold mb-8">Newsletter</h4>
            <p className="text-gray-400 mb-6">
              Get the latest insights and marketing tips delivered to your inbox.
            </p>

            <form className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-800 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bg-green-500 p-2 rounded-lg hover:bg-green-600 transition"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-800 pt-10 text-center text-gray-500 text-sm">
          © 2026 Green Soul IT. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
