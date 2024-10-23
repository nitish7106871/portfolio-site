import React from 'react'

export default function Education() {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-2">B.Tech in Mechatronics Engineering</h3>
          <p className="text-gray-600 mb-2">Indian Institute of Information Technology Bhagalpur</p>
          <p className="text-gray-600 mb-4">Expected Graduation: 2025 | CGPA: 8.5/10</p>
          <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>Programming</li>
            <li>Data Structures</li>
            <li>Artificial Intelligence</li>
            <li>Machine Learning</li>
          </ul>
        </div>
      </div>
    </section>
  )
}