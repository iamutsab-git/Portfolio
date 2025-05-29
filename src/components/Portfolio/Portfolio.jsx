import React from 'react'
import Project from '../ProjectCart/Project'

const Portfolio = () => {
  // Your projects data - replace with your actual GitHub projects
  const projects = [
    {
      title: "Project Name 1",
      description: "Brief description of your project. What problem does it solve? What makes it special? Include key features and functionality.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/yourusername/project1",
      liveUrl: "https://your-project1-demo.netlify.app",
      imageUrl: null // Add your project screenshot here
    },
    {
      title: "Project Name 2", 
      description: "Another project description. Highlight the technologies used and what makes this project unique or challenging.",
      technologies: ["JavaScript", "HTML5", "CSS3", "API"],
      githubUrl: "https://github.com/yourusername/project2",
      liveUrl: "https://your-project2.github.io",
      imageUrl: null
    },
    {
      title: "Project Name 3",
      description: "Describe your third project. What did you learn? What problems did you solve? Any interesting features?",
      technologies: ["React", "Tailwind CSS", "Firebase"],
      githubUrl: "https://github.com/yourusername/project3",
      liveUrl: null, // No live demo
      imageUrl: null
    },
    {
      title: "Project Name 4",
      description: "Fourth project description. Focus on the impact, functionality, and technical challenges you overcame.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      githubUrl: "https://github.com/yourusername/project4",
      liveUrl: "https://your-project4.vercel.app",
      imageUrl: null
    },
    {
      title: "Project Name 5",
      description: "Fifth project description. What technologies did you explore? What was the most challenging part?",
      technologies: ["Python", "Django", "SQLite", "Bootstrap"],
      githubUrl: "https://github.com/yourusername/project5",
      liveUrl: null,
      imageUrl: null
    },
    {
      title: "Project Name 6",
      description: "Sixth project description. Highlight any collaborations, open-source contributions, or learning experiences.",
      technologies: ["Vue.js", "Vuex", "Node.js", "MySQL"],
      githubUrl: "https://github.com/yourusername/project6",
      liveUrl: "https://your-project6.herokuapp.com",
      imageUrl: null
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
              href="https://github.com/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 hover:border-white/40 transition-all duration-200"
            >
              View GitHub Profile
            </a>
            <a 
              href="mailto:your.email@example.com"
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