import React from 'react';
import { 
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSass,
  SiTailwindcss,
  SiGithub,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiMongoose
} from 'react-icons/si';

const Technologies = () => {
  // MERN Stack skills data
  const mernStack = [
    {
      name: 'MongoDB',
      description: 'for flexible, scalable data storage',
      icon: <SiMongodb className="text-green-500" size={40} />,
    },
    {
      name: 'Express.js',
      description: 'Backend web application framework for Node.js',
      icon: <SiExpress className="text-gray-100" size={40} />,
    },
    {
      name: 'React',
      description: 'Frontend library for building user interfaces',
      icon: <SiReact className="text-blue-400" size={40} />,
    },
    {
      name: 'Node.js',
      description: 'JavaScript runtime for server-side development',
      icon: <SiNodedotjs className="text-green-600" size={40} />,
    }
  ];

  // Additional relevant skills
  const otherSkills = [
    { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" size={30} /> },
    { name: 'CSS3', icon: <SiCss3 className="text-blue-500" size={30} /> },
    { name: 'JavaScript (ES6+)', icon: <SiJavascript className="text-yellow-400" size={30} /> },
    { name: 'SASS', icon: <SiSass className="text-pink-500" size={30} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" size={30} /> },
    { name: 'Git/GitHub', icon: <SiGithub className="text-gray-100" size={30} /> },
    { name: 'Mongoose', icon: <SiMongoose className="text-red-500" size={30} /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Tech Stack</span>
        </h1>
        <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto">
          Tools and technologies I use to build amazing web applications
        </p>

        {/* MERN Stack Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full">
              MERN Stack
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mernStack.map((skill, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-pink-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10"
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                <p className="text-gray-300 mb-4">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Skills Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Other Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {otherSkills.map((skill, index) => (
              <div 
                key={index}
                className="bg-slate-800/30 border border-white/10 rounded-lg p-4 hover:bg-slate-700/50 transition-all duration-200 flex flex-col items-center"
              >
                <div className="mb-2">{skill.icon}</div>
                <h3 className="font-medium text-white text-center">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;