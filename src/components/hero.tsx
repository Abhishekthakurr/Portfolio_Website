// src/components/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Text Section */}
        <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:w-3/5 text-center lg:text-left px-4" // Increased width and added padding
        >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">Tanisha Singh</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 max-w-xl mx-auto lg:mx-0">
              A creative designer & developer based in India, passionate about blending design with technology to craft immersive digital experiences that are not just beautiful, but also functional and user-centric.
            </p>

            {/* Skills or Tags */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              {['UI/UX Design', 'React & Next.js', 'Framer Motion', 'Tailwind CSS', 'Figma', 'Responsive Web'].map(skill => (
                <span key={skill} className="bg-white/80 text-gray-800 px-4 py-2 rounded-full text-sm shadow-sm border border-gray-200 hover:bg-white transition">
                  {skill}
                </span>
              ))}
            </div>
        <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#portfolio"
            className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition"
        >
            View My Work
        </motion.a>
        </motion.div>

        {/* Image Section */}
        <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="lg:w-1/2 relative w-full max-w-md mx-auto flex justify-center"
        >
        <div className="relative z-10 w-72 h-72 sm:w-96 sm:h-96">
            <Image 
            src="/assets/tanisha_hero.jpeg" 
            alt="Portrait"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-full object-cover border-4 border-white shadow-xl" // Added object-top
            priority
            />
        </div>
        <div className="absolute -inset-4 z-0 rounded-full bg-gradient-to-r from-purple-300 to-indigo-300 blur-xl opacity-60"></div>
        </motion.div>
      </div>
    </section>
  )
}