import React from 'react'
import Project from '../ProjectCart/Project'
import Portfolio_SS from '../../assets/Portfolio_SS.png';
import MovieMunch_SS from '../../assets/Movie-Munch_SS.png';
import W3School from '../../assets/W3School.png';
import Ubay_SS from "../../assets/image.png"
const Portfolio = () => {
  
  const projects = [
    {
      title: "Portfolio",
      description: "A clean and responsive personal portfolio website built with React. It showcases my skills, projects, and contact information as a full stack web developer.",
      technologies: ["React", "TailwindCSS"],
      githubUrl: "https://github.com/iamutsab-git/Portfolio",
      liveUrl: "https://www.utsabgharti.com.np",
      imageUrl: Portfolio_SS
    },
    {
      title: "Movie Munch", 
      description: "A sleek and simple Full stack web app for searching movies using the MERN stack, TMDB API. Through this project, I have learnt the concept of API.",
      technologies: ["React","Node js","MongoDB","Express js","TailwindCSS", "API"],
      githubUrl: "https://github.com/iamutsab-git/MovieMunch.git",
      liveUrl: "https://movie-munch.onrender.com/",
      imageUrl: MovieMunch_SS
    },
       {
      title: "Ubay E-Commerce", 
      description: "A Ubay is a Full Stack e-commerce platform featuring user authentication, product browsing, cart management, order placement, and admin dashboard. It supports secure payment integration and responsive UI.",
      technologies: ["React", "TailwindCSS", "RESTfulAPI", "Nodejs", "Express.js", "MongoDb"],
      githubUrl: "https://github.com/iamutsab-git/Ubay-E-Commerce.git",
      liveUrl: "https://ubay-cf5q.onrender.com/",
      imageUrl: Ubay_SS
    },
    {
      title: "W3School Clone",
      description: "This is a simple clone of the W3Schools homepage created using HTML and CSS. It aims to mimic the layout and style of the popular web development learning platform as a practice project.",
      technologies: ["HTML5","CSS3","JavaScript"],
      githubUrl: "https://github.com/iamutsab-git/W3Schools-Clone",
      liveUrl: "https://iamutsab-git.github.io/W3Schools-Clone/",
      imageUrl: W3School
    }
    
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" 
              style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}>
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my latest projects and see what I've been building
          </p>
        </div>

        {/* Filter Buttons (Optional) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-200">
            All Projects
          </button>
          <button className="px-6 py-2 bg-white/10 text-gray-300 rounded-full hover:bg-white/20 transition-all duration-200">
            Frontend
          </button>
          <button className="px-6 py-2 bg-white/10 text-gray-300 rounded-full hover:bg-white/20 transition-all duration-200">
            Full Stack
          </button>
          <button className="px-6 py-2 bg-white/10 text-gray-300 rounded-full hover:bg-white/20 transition-all duration-200">
            Backend
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-pink-400 mb-2">{projects.length}+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {[...new Set(projects.flatMap(p => p.technologies))].length}+
            </div>
            <div className="text-gray-300">Technologies Used</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {projects.filter(p => p.liveUrl).length}+
            </div>
            <div className="text-gray-300">Live Demos</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/iamutsab-git" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 hover:border-white/40 transition-all duration-200"
            >
              View GitHub Profile
            </a>
            <a 
              href="mailto:utsabgharti6@gmail.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Portfolio