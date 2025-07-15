import React from 'react';
import { FaGithub, FaLinkedin , FaEnvelope, FaPhoneAlt, FaFacebook, FaInstagram } from 'react-icons/fa';
const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Connect</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-6">Send Me a Message</h2>
            <form 
             action="https://formspree.io/f/mgvkgqbn" 
              method="POST"
            className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-slate-700/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                   name="email"
                  className="w-full bg-slate-700/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="msg"
                  rows="5"
                  className="w-full bg-slate-700/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="What would you like to discuss?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-pink-500/20 p-3 rounded-lg mr-4">
                    <FaEnvelope className="text-pink-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-gray-300 font-medium">Email</h3>
                    <a href="mailto:utsabgharti6@gmail.com" className="text-white hover:text-pink-400 transition-colors">
                      utsabgharti6@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-pink-500/20 p-3 rounded-lg mr-4">
                    <FaPhoneAlt className="text-pink-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-gray-300 font-medium">Phone</h3>
                    <a href="tel:+9779846655716" className="text-white hover:text-pink-400 transition-colors">
                      +977 9846655716
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6">Follow Me</h2>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/iamutsab-git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-700/50 hover:bg-slate-700/70 border border-white/10 p-4 rounded-lg transition-all duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-white text-2xl" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/utsabgharti" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-700/50 hover:bg-slate-700/70 border border-white/10 p-4 rounded-lg transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-white text-2xl" />
                </a>
                 <a 
                  href="https://www.facebook.com/utsabgharti1271" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-700/50 hover:bg-slate-700/70 border border-white/10 p-4 rounded-lg transition-all duration-300"
                  aria-label="FaceBook"
                >
                  <FaFacebook className="text-white text-2xl" />
                </a>
                 <a 
                  href="https://www.instagram.com/utsabgharti_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-700/50 hover:bg-slate-700/70 border border-white/10 p-4 rounded-lg transition-all duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-white text-2xl" />
                </a>
                
              </div>
              
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-500 text-center pt-5">
  &copy; 2025 Utsab Gharti. All rights reserved.
</div>
<div className='fixed bottom-10 right-10'>
                <a  href="https://wa.me/9846655716" 
                 rel="noopener noreferrer"
                target='blank'><img
                  className='w-15 h-15'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png'
                />
                </a>
              </div>
      </div>
    </div>
  );
};

export default Contact;