import React from 'react'
import { Award, Code } from 'lucide-react'

const achievements = [
  "Solved 175+ DSA problems on LeetCode and GeeksforGeeks",
  "Won first place in college-level hackathon",
  "Participated in Google Summer of Code 2023",
  "Published a research paper on AI in robotics"
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
              {index % 2 === 0 ? <Award className="text-blue-600 flex-shrink-0" /> : <Code className="text-blue-600 flex-shrink-0" />}
              <p className="text-gray-700">{achievement}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Coding Profiles</h3>
          <div className="flex justify-center space-x-4">
            <a href="https://leetcode.com/u/nitish_kumar905/" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full hover:bg-yellow-500 transition-colors">LeetCode</a>
            <a href="https://www.geeksforgeeks.org/user/nitish21tt8g/" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600  transition-colors">GeeksforGeeks</a>
          </div>
        </div>
      </div>
    </section>
  )
}