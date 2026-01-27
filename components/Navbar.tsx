
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X, User as UserIcon } from 'lucide-react';
import { Service } from '../types';
import { fetchServices } from '../services/api';

interface NavbarProps {
  user: any;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [services, setServices] = useState<Service[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchServices().then(setServices);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <span className="text-2xl font-bold text-green-500 group-hover:scale-105 transition-transform duration-300">
                GreenGrowth
              </span>
              <span className="ml-2 text-sm font-medium text-gray-500 hidden sm:block">
                Digital Agency
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-500 font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-500 font-medium transition-colors">About</Link>
            
            <div 
              className="relative group py-4"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-green-500 font-medium transition-colors">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute left-0 mt-0 w-64 bg-white border border-gray-100 shadow-xl rounded-lg py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/case-studies" className="text-gray-700 hover:text-green-500 font-medium transition-colors">Case Studies</Link>
            <Link to="/blog" className="text-gray-700 hover:text-green-500 font-medium transition-colors">Blog</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-500 font-medium transition-colors">Contact</Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-600 flex items-center">
                  <UserIcon className="w-4 h-4 mr-1 text-green-500" /> {user.name}
                </span>
                <button 
                  onClick={onLogout}
                  className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-100 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link 
                to="/auth" 
                className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                Login
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-500 p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-2 shadow-inner">
          <Link to="/" onClick={toggleMenu} className="block px-3 py-2 text-gray-700 font-medium">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="block px-3 py-2 text-gray-700 font-medium">About</Link>
          <div className="px-3 py-2 font-medium text-gray-400">Services</div>
          {services.map((s) => (
            <Link key={s.id} to={`/services/${s.slug}`} onClick={toggleMenu} className="block px-6 py-2 text-gray-600 text-sm">{s.title}</Link>
          ))}
          <Link to="/case-studies" onClick={toggleMenu} className="block px-3 py-2 text-gray-700 font-medium">Case Studies</Link>
          <Link to="/blog" onClick={toggleMenu} className="block px-3 py-2 text-gray-700 font-medium">Blog</Link>
          <Link to="/contact" onClick={toggleMenu} className="block px-3 py-2 text-gray-700 font-medium">Contact</Link>
          <div className="pt-4">
            {user ? (
              <button onClick={() => { onLogout(); toggleMenu(); }} className="w-full bg-red-500 text-white py-2 rounded-lg">Logout</button>
            ) : (
              <Link to="/auth" onClick={toggleMenu} className="block w-full text-center bg-green-500 text-white py-2 rounded-lg">Login</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
