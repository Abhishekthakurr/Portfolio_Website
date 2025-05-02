'use client'
import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Skills from '@/components/skills'
import Project from '@/components/project'
import Work from '@/components/experience'
import ResumeCta from '@/components/resume-cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      {/* Decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-indigo-200 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <Header/>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Project />
        <Work />
        <ResumeCta />
        <Footer />
      </div>
    </main>
  )
}
