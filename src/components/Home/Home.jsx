import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" 
              style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}>
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Utsab Gharti</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl pt-3 mx-auto">
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto pt-10 leading-relaxed">
           I am a junior studying <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500'>Computer Science</span> and <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500'>Information Technology</span> at the Tribhuvan University of Nepal. I'm a web developer who is deeply interested and passionate about building beautiful, responsive, and functional websites. I love turning ideas into real, interactive web experiences that work smoothly across all devices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to='/portfolio'>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              View My Work
            </button>
            </Link>
            <Link to='/contact'>
            <button className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-medium hover:border-pink-400 hover:text-pink-400 transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home