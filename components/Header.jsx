import React, { useState, useEffect } from 'react'
import { Menu, X, Linkedin, Github } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-600">NK</a>
        <nav className="hidden md:flex space-x-6">
          <a href="#education" className="hover:text-blue-600 transition-colors">Education</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
          <a href="#achievements" className="hover:text-blue-600 transition-colors">Achievements</a>
        </nav>
        <div className="hidden md:flex space-x-4">
          <a href="https://www.linkedin.com/in/nitish-kumar-b26379240/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/nitishkumar" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Github size={24} />
          </a>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col space-y-4 p-4">
            <a href="#education" className="hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Education</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#achievements" className="hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Achievements</a>
          </nav>
        </div>
      )}
    </header>
  )
}