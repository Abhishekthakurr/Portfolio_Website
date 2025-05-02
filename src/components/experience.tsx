// src/components/experience.tsx
'use client'

import { motion } from 'framer-motion'
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi'

const experiences = [
  {
    id: 1,
    role: "Frontend Developer Intern",
    company: "Procmart",
    duration: "Jan 2025 - March 2025",
    location: "Kanpur",
    description: "Developed responsive user interfaces using React.js and implemented state management solutions. Collaborated with the design team to create pixel-perfect components.",
    skills: ["React", "JavaScript", "Redux", "UI Development"]
  },
  {
    id: 2,
    role: "Customer Service Executive",
    company: "Ecombirds",
    duration: "July 2024 - August 2024",
    location: "Bhopal",
    description: "Handled customer inquiries and resolved technical issues. Maintained high customer satisfaction ratings and improved support processes.",
    skills: ["Customer Support", "Problem Solving", "Communication"]
  },
  {
    id: 3,
    role: "Trainer",
    company: "ABV Company",
    duration: "February 2024 - April 2024",
    location: "Bhopal",
    description: "Conducted training sessions on web development fundamentals. Created course materials and mentored junior developers.",
    skills: ["Teaching", "HTML/CSS", "JavaScript", "Mentoring"]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            My <span className="text-indigo-600">Journey</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Professional milestones and career progression
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line - properly aligned */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-300 via-purple-400 to-pink-300"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative pl-10 md:pl-12 mb-12"
            >
              {/* Timeline dot - centered over the line */}
              <div className="absolute left-6 -translate-x-1/2 top-5 w-4 h-4 bg-indigo-500 rounded-full z-10 ring-4 ring-indigo-200 ring-opacity-50"></div>

              {/* Experience card with glass morphism effect */}
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-white/20">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <div className="flex items-center text-gray-600 mt-1">
                      <FiBriefcase className="mr-2 text-sm" />
                      <span className="text-sm">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center text-sm text-gray-600">
                      <FiMapPin className="mr-1" /> {exp.location}
                    </span>
                    <span className="hidden md:flex items-center text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                      <FiCalendar className="mr-1" /> {exp.duration}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(skill => (
                    <motion.span 
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-indigo-50 to-purple-50 text-gray-800 px-3 py-1 rounded-full text-xs border border-gray-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
