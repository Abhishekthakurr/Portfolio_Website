// src/components/footer.tsx
'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gray-900 text-gray-300 overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <h3 className="text-3xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Tanisha Singh
            </h3>
            <p className="text-lg mb-6">Crafting beautiful digital experiences</p>
            
            <div className="flex space-x-6">
              {[
                { icon: <FaGithub className="w-6 h-6" />, url: "https://github.com" },
                { icon: <FaLinkedin className="w-6 h-6" />, url: "https://linkedin.com" },
                { icon: <FaTwitter className="w-6 h-6" />, url: "https://twitter.com" },
                { icon: <FaInstagram className="w-6 h-6" />, url: "https://instagram.com" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold text-white mb-6">Explore</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Experience'].map((item, index) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors flex items-center">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold text-white mb-6">Let's Connect</h4>
            <a 
              href="mailto:tanishasingh252004@gmail.com" 
              className="inline-flex items-center text-indigo-300 hover:text-white transition-colors mb-4"
            >
              <FiMail className="mr-3" />
              tanishasingh252004@gmail.com
            </a>
            <button 
              onClick={scrollToTop}
              className="mt-6 flex items-center text-sm text-gray-400 hover:text-white transition-colors"
            >
              <FaArrowUp className="mr-2" />
              Back to top
            </button>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-800 mt-16 pt-8 text-center"
        >
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Tanisha Singh. All rights reserved.
            <span className="block mt-2 text-xs text-gray-500">Made with ❤️ and Next.js</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}