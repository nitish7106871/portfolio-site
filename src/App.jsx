import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Header from "../components/Header"
import Skills from "../components/Skills"
import Education from '../components/Education'
import Projects from '../components/Projects'
import Achievements from '../components/Achievements'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import InterpersonalSkills from '../components/InterpersonalSkill'

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main>
        <Hero />
        <Education />
        <Projects />
        <Skills />
        <Achievements />
        <InterpersonalSkills />
      </main>
      <Footer />
      {showBackToTop && <BackToTop />}
    </div>
  )
}