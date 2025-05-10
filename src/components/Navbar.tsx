
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogOut, User, Home, CreditCard, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // This is just for UI demo purposes
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <span className="ml-2 text-xl font-bold text-gray-900">AuthPay</span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
              Pricing
            </Link>
            
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
                  Dashboard
                </Link>
                <div className="ml-3 relative">
                  <button 
                    onClick={toggleLogin}
                    className="flex items-center text-sm rounded-full focus:outline-none"
                  >
                    <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <User className="h-5 w-5 text-purple-600" />
                    </div>
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                    Log in
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Sign up
                  </Button>
                </Link>
              </div>
            )}
          </div>
          
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link 
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-purple-600"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/features"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-purple-600"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link 
              to="/pricing"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-purple-600"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            {isLoggedIn && (
              <Link 
                to="/dashboard"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-purple-600"
                onClick={toggleMenu}
              >
                Dashboard
              </Link>
            )}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            {isLoggedIn ? (
              <>
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <User className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">User Name</div>
                    <div className="text-sm font-medium text-gray-500">user@example.com</div>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  <Link 
                    to="/profile"
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-purple-600"
                    onClick={toggleMenu}
                  >
                    Your Profile
                  </Link>
                  <Link 
                    to="/settings"
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-purple-600"
                    onClick={toggleMenu}
                  >
                    Settings
                  </Link>
                  <button 
                    onClick={() => {
                      toggleLogin();
                      toggleMenu();
                    }}
                    className="w-full text-left block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-purple-600"
                  >
                    Sign out
                  </button>
                </div>
              </>
            ) : (
              <div className="mt-3 px-2 space-y-1">
                <Link 
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  Log in
                </Link>
                <Link 
                  to="/signup"
                  className="block px-3 py-2 rounded-md text-base font-medium bg-purple-600 text-white hover:bg-purple-700"
                  onClick={toggleMenu}
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
