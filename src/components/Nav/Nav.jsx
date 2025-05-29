import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-4  sticky top-0 z-50">
    <nav className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 shadow-2xl mx-6 py-4 px-6 border border-white/30 rounded-2xl backdrop-blur-sm" >
      <ul className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to='/home'>
          <li className='list-none font-serif text-2xl font-bold text-white hover:text-pink-400 transition-all duration-300 hover:drop-shadow-lg'
              style={{
                textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
              }}>
            Utsab Gharti
          </li>
        </Link>
        <div className="flex space-x-8">
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
        </div>
      </ul>
    </nav>
    </div>
  )
}

export default Nav