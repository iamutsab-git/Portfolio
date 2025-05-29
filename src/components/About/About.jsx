import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" 
              style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}>
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Me</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
      {/* Profile Image */}
        <div className="order-2 lg:order-1">
          <div className="w-80 h-80 mx-auto rounded-2xl border-2 border-white/20 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}>
            <img 
              src="/src/assets/utsab1.jpg" 
              alt="Utsab Gharti" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

          {/* About Text */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-bold text-white mb-6">Hello! I'm Utsab Gharti</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a passionate Full Stack Developer with a love for creating digital experiences 
                that not only look great but also solve real-world problems. My journey in 
                technology started with curiosity and has evolved into a career dedicated to 
                building innovative solutions.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge with the developer community. 
                I believe in continuous learning and staying updated with the latest trends 
                in web development.
              </p>
              <p>
                I'm always excited to take on new challenges and collaborate with like-minded 
                individuals who share a passion for technology and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Personal Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-white/10"
               style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}>
            <h3 className="text-lg font-semibold text-pink-400 mb-2">🎯 Focus</h3>
            <p className="text-gray-300">Building scalable web applications with modern technologies</p>
          </div>
          
          <div className="p-6 rounded-2xl border border-white/10"
               style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}>
            <h3 className="text-lg font-semibold text-pink-400 mb-2">🌱 Learning</h3>
            <p className="text-gray-300">Always exploring new frameworks and best practices</p>
          </div>
          
          <div className="p-6 rounded-2xl border border-white/10 md:col-span-2 lg:col-span-1"
               style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}>
            <h3 className="text-lg font-semibold text-pink-400 mb-2">💡 Passion</h3>
            <p className="text-gray-300">Creating solutions that make a positive impact</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About