import React from 'react'
import { Users, Lightbulb, Target } from 'lucide-react'

const interpersonalSkills = [
  { name: "Leadership", icon: Users, description: "Led multiple project teams and organized college events" },
  { name: "Team Coordination", icon: Lightbulb, description: "Effectively coordinated diverse teams in hackathons and group projects" },
  { name: "Decision Making", icon: Target, description: "Made critical decisions under pressure during competitive programming contests" }
]

export default function InterpersonalSkills() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Interpersonal Skills</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {interpersonalSkills.map((skill, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg">
              <skill.icon className="mx-auto text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}