'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="flex items-center"
>
  <motion.div
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 1.5, ease: "easeInOut" }}
    className="w-8 h-8 mr-2"
  >
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path
        d="M20,50 Q35,20 50,50 T80,50"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  </motion.div>
  
  <motion.span 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1, duration: 0.5 }}
    className="text-2xl font-cursive bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500"
  >
    Tanisha
  </motion.span>
</motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: 'Home', href: '#home' },
            { name: 'About', href: '#about' },
            { name: 'Services', href: '#services' },
            { name: 'Skills', href: '#skills' },
            { name: 'Projects', href: '#projects' },
            { name: 'Experience', href: '#experience' },
          ].map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href={item.href}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.a
            href="mailto:tanishasingh252004@gmail.com?subject=Portfolio%20Inquiry"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium"
          >
            Get in Touch
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}