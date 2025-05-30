import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-4 sticky top-0 z-50">
      <nav className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 shadow-2xl mx-2 sm:mx-6 py-4 px-4 sm:px-6 border border-white/30 rounded-2xl backdrop-blur-sm">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <Link to='/home'>
            <div className='list-none font-serif text-2xl font-bold text-white hover:text-pink-400 transition-all duration-300 hover:drop-shadow-lg'
                style={{
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
                }}>
              Utsab Gharti
            </div>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="sm:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <ul className="hidden sm:flex space-x-4 md:space-x-8">
            <Link to='/home'>
              <li className="text-white hover:text-pink-400 font-medium transition-all duration-300 hover:drop-shadow-md relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </li>
            </Link>
            <Link to='/about'>
              <li className="text-white hover:text-pink-400 font-medium transition-all duration-300 hover:drop-shadow-md relative group">
                About Me
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </li>
            </Link>
            <Link to='/technologies'>
              <li className="text-white hover:text-pink-400 font-medium transition-all duration-300 hover:drop-shadow-md relative group">
                Technologies
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </li>
            </Link>
            <Link to='/portfolio'>
              <li className="text-white hover:text-pink-400 font-medium transition-all duration-300 hover:drop-shadow-md relative group">
                Portfolio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </li>
            </Link>
            <Link to='/contact'>
              <li className="text-white hover:text-pink-400 font-medium transition-all duration-300 hover:drop-shadow-md relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </li>
            </Link>
          </ul>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4">
            <ul className="flex flex-col space-y-4">
              <Link to='/home' onClick={() => setIsMenuOpen(false)}>
                <li className="text-white hover:text-pink-400 font-medium transition-all duration-300 hover:drop-shadow-md relative group py-2">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </li>
              </Link>
              <Link to='/about' onClick={() => setIsMenuOpen(false)}>
                <li className="text-white hover:text-pink-400 font-medium transition-all duration-300 hover:drop-shadow-md relative group py-2">
                  About Me
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </li>
              </Link>
              <Link to='/technologies' onClick={() => setIsMenuOpen(false)}>
                <li className="text-white hover:text-pink-400 font-medium transition-all duration-300 hover:drop-shadow-md relative group py-2">
                  Technologies
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </li>
              </Link>
              <Link to='/portfolio' onClick={() => setIsMenuOpen(false)}>
                <li className="text-white hover:text-pink-400 font-medium transition-all duration-300 hover:drop-shadow-md relative group py-2">
                  Portfolio
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </li>
              </Link>
              <Link to='/contact' onClick={() => setIsMenuOpen(false)}>
                <li className="text-white hover:text-pink-400 font-medium transition-all duration-300 hover:drop-shadow-md relative group py-2">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Nav;