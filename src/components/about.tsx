// src/components/About.tsx
'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-indigo-100 opacity-20 blur-3xl"></div>
      </div>
      <div className="relative z-10">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Get to Know <span className="text-indigo-600">Me</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              I'm a <span className="font-semibold text-gray-800">creative technologist</span> blending aesthetic vision with functional code. From intuitive UI/UX to high-performance web interfaces, I craft seamless digital journeys that leave a lasting impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-3xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">Personal Details</h3>
              <ul className="space-y-5 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-indigo-500 text-xl">📍</span>
                  <span><strong>Location:</strong> India</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-indigo-500 text-xl">🎓</span>
                  <span><strong>Education:</strong> B.Tech in Computer Science</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-indigo-500 text-xl">💼</span>
                  <span><strong>Experience:</strong> 3+ Years in UI/UX & Web Development</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-indigo-500 text-xl">🛠️</span>
                  <span><strong>Focus Areas:</strong> Frontend Engineering, Design Systems</span>
                </li>
              </ul>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-3xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">Skillset & Tools</h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-y-4 gap-x-6">
                {[
                  'React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion',
                  'UI/UX Design', 'Figma', 'TypeScript', 'JavaScript',
                  'Responsive Design', 'Web Accessibility', 'User Research', 'Prototyping'
                ].map((skill) => (
                  <div key={skill} className="flex items-center text-gray-700">
                    <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full mr-3"></span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-white border border-gray-100 rounded-3xl shadow-lg p-10"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">Professional Experience</h3>
              <div className="space-y-10">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">UI/UX Designer & Developer</h4>
                  <p className="text-indigo-600 text-sm mb-2">Tech Solutions Inc. • 2021 – Present</p>
                  <p className="text-gray-600 leading-relaxed">
                    Leading the design and development of accessible, high-impact user interfaces with React and Figma. Collaborating closely with product teams to align design with business goals.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Frontend Developer</h4>
                  <p className="text-indigo-600 text-sm mb-2">Digital Creations • 2019 – 2021</p>
                  <p className="text-gray-600 leading-relaxed">
                    Engineered responsive interfaces and interactive web components, enhancing UX across devices using modern frontend stacks.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
