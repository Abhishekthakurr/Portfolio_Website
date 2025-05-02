// src/components/projects.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: "E-commerce Platform",
    description: "Full-featured online store with cart, payments, and admin dashboard",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/assets/project/ecommerce3-1.jpg",
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "Modern responsive portfolio with animations and dark mode",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    image: "/assets/project/images.png",
    link: "#"
  },
  {
    title: "Task Management App",
    description: "Kanban-style productivity app with drag-and-drop functionality",
    tags: ["React", "Firebase", "DnD Kit"],
    image: "/assets/project/Task-manager-apps-scaled.jpg",
    link: "#"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard with real-time data visualization",
    tags: ["TypeScript", "Chart.js", "REST API"],
    image: "/assets/project/Instagram-dashboard.png",
    link: "#"
  },
  {
    title: "Travel Booking UI",
    description: "Mobile-first booking interface with interactive maps",
    tags: ["React Native", "Mapbox", "UI Design"],
    image: "/assets/project/00-cover-image-interest-x-trus_8fbe79c0ea39f593a593214990dfaa50d8.webp",
    link: "#"
  },
  {
    title: "AI Image Generator",
    description: "Web app that generates images from text prompts using AI",
    tags: ["OpenAI", "Node.js", "Cloudinary"],
    image: "/assets/project/banner-3.webp",
    link: "#"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            My <span className="text-indigo-600">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            A selection of my recent work showcasing different technologies and design approaches
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="bg-indigo-600/80 text-white px-3 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}