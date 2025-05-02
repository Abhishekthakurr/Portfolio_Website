// src/components/Services.tsx
'use client'

import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      description: "Building responsive, interactive web interfaces using React, Next.js, and modern CSS frameworks. Focus on performance, accessibility, and seamless user experiences.",
      icon: "💻",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      title: "Backend Development",
      description: "Developing robust server-side applications, APIs, and databases. Expertise in Node.js, Express, and database management for full-stack solutions.",
      icon: "⚙️",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive, visually appealing interfaces through user research, wireframing, and prototyping. Specializing in Figma and user-centered design principles.",
      icon: "🎨",
      color: "bg-pink-100 text-pink-600"
    }
  ]

  return (
    <section id="services" className="py-24 relative bg-gradient-to-br from-indigo-50 to-blue-50">
      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-indigo-100 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-10 w-80 h-80 rounded-full bg-blue-100 opacity-10 blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            My <span className="text-indigo-600">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Comprehensive digital solutions tailored to your needs, from concept to deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm p-8 hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center text-2xl mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}