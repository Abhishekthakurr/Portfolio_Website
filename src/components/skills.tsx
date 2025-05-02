'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const technicalSkills = [
    { name: 'React/Next.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Figma', level: 85 }
  ]

  const personalSkills = [
    { name: 'Communication', level: 90 },
    { name: 'Teamwork', level: 85 },
    { name: 'Problem Solving', level: 95 },
    { name: 'Creativity', level: 80 },
    { name: 'Time Management', level: 75 },
    { name: 'Adaptability', level: 85 }
  ]

  const radius = 45
  const circumference = 2 * Math.PI * radius

  return (
    <section id="skills" className="py-24 relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Decorative glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-24 w-80 h-80 rounded-full bg-indigo-600 opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-24 right-24 w-80 h-80 rounded-full bg-purple-600 opacity-20 blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text drop-shadow-md">
            My Skills
          </h2>
          <p className="text-lg text-gray-300">
            A fusion of technical ability and personal strengths that bring life to my frontend work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 border-b border-gray-600 pb-2">
              🚀 Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-200">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div 
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Personal Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 border-b border-gray-600 pb-2">
              🌟 Personal Skills
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {personalSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative w-24 h-24 mb-3">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <defs>
                        <linearGradient id="personalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#6366f1" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                      </defs>
                      {/* Background circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke="#374151"
                        strokeWidth="10"
                        fill="none"
                      />
                      {/* Progress circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke="url(#personalGradient)"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - (circumference * skill.level) / 100}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-semibold text-white">{skill.level}%</span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-300 text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* SVG Gradient */}
      <svg className="hidden">
        <defs>
          <linearGradient id="personalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  )
}
