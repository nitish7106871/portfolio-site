import React from 'react'

const skills = [
  { name: "C/C++", level: 90 },
  { name: "Python", level: 85 },
  { name: "Java", level: 80 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "SQL", level: 75 },
  { name: "React.js", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "MongoDB", level: 70 }
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-4">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700">{skill.name}</span>
                <span className="text-sm font-medium text-blue-700">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out" style={{width: `${skill.level}%`}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}