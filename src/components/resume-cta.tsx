// src/components/resume-cta.tsx
'use client'

import { motion } from 'framer-motion'
import { FiDownload, FiFileText, FiUserCheck } from 'react-icons/fi'

export default function ResumeCTA() {
  return (
    <section id="resume" className="py-24 relative bg-gradient-to-br from-indigo-900 to-purple-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-6 py-3 bg-white/10 rounded-full mb-8"
          >
            <FiFileText className="text-white mr-2" />
            <span className="text-white font-medium">Resume Download</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6"
          >
            Ready to <span className="text-indigo-300">Work Together</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-indigo-200 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Download my resume to explore my professional journey in detail and let's discuss how I can contribute to your team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
            href="/assets/resume/TanishaResume (1).docx"
            download="Tanisha_Resume.docx"
            className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
            <FiDownload className="mr-3 text-lg" />
            Download Resume
            </a>
            <a
            href="mailto:tanishasingh252004@gmail.com"
            className="flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
            >
            <FiUserCheck className="mr-3 text-lg" />
            Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm text-green-300">Available for work</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
              <span className="text-sm text-yellow-300">Open to freelance</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}