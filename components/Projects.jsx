import React, { useState } from 'react'
import { X } from 'lucide-react'

const projects = [
  {
    title: "Counseling Platform for Mental Health",
    description: "A mental health counseling platform using HTML, CSS, JavaScript, and Node.js. Features user authentication, real-time chat, and privacy measures.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
    image: "/placeholder.svg"
  },
  {
    title: "Vestra (Myntra Clone)",
    description: "An e-commerce platform modeled after Myntra with HTML, CSS, JavaScript, and a responsive interface. Includes advanced search and secure payment functionality.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/placeholder.svg"
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer" onClick={() => setSelectedProject(project)}>
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description.substring(0, 100)}...</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold">{selectedProject.title}</h3>
                <button onClick={() => setSelectedProject(null)} className="text-gray-500 hover:text-gray-700">
                  <X size={24} />
                </button>
              </div>
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg mb-4" />
              <p className="text-gray-600 mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}