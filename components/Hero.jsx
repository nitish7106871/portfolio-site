import React from 'react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">Nitish Kumar</h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">B.Tech Student in Mechatronics Engineering</h2>
          <p className="text-lg text-gray-600 mb-8">Passionate about technology and innovation, specializing in AI, Machine Learning, and Web Development.</p>
          <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">Get in Touch</a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
            <img
              src="/nitishpassportphoto.jpg"
              alt="Nitish Kumar"
              layout="fill"
              objectFit="cover"
              className="fill cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  )
}